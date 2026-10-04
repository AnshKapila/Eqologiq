<?php
/**
 * Plugin Name:       Eqo Reviews
 * Description:       Lets signed-in customers submit product reviews from the headless storefront (eqologiq.in). Every review is held for approval under Comments.
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * Requires Plugins:  woocommerce
 * Author:            Eqo Logiq
 * License:           GPL-2.0-or-later
 */

defined( 'ABSPATH' ) || exit;

/**
 * POST /wp-json/eqo/v1/reviews
 *
 * The WooCommerce Store API can only read reviews, so the static storefront has
 * no other way to create one. Callers authenticate with the JWT the storefront
 * already holds (JWT Authentication for WP REST API sets the current user).
 */
final class Eqo_Reviews {

	const MIN_LENGTH = 10;
	const MAX_LENGTH = 5000;

	/** Reviews one account may submit per hour, across all products. */
	const USER_LIMIT = 5;

	/** Reviews one IP address may submit per hour, across all accounts. */
	const IP_LIMIT = 10;

	public static function init() {
		add_action( 'rest_api_init', array( __CLASS__, 'register_routes' ) );
	}

	public static function register_routes() {
		register_rest_route(
			'eqo/v1',
			'/reviews',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( __CLASS__, 'create_review' ),
				'permission_callback' => array( __CLASS__, 'can_create_review' ),
				'args'                => array(
					'product_id' => array(
						'required' => true,
						'type'     => 'integer',
						'minimum'  => 1,
					),
					'rating'     => array(
						'required' => true,
						'type'     => 'integer',
						'minimum'  => 1,
						'maximum'  => 5,
					),
					'review'     => array(
						'required' => true,
						'type'     => 'string',
					),
					// Honeypot: hidden from people, so anything in it came from a bot.
					'website'    => array(
						'type'    => 'string',
						'default' => '',
					),
				),
			)
		);
	}

	public static function can_create_review() {
		if ( is_user_logged_in() ) {
			return true;
		}

		return self::error( 'eqo_reviews_login_required', 'Please sign in to write a review.', 401 );
	}

	public static function create_review( WP_REST_Request $request ) {
		// Answer a filled honeypot like a success so the bot learns nothing.
		if ( '' !== trim( (string) $request['website'] ) ) {
			return new WP_REST_Response( array( 'status' => 'pending' ), 201 );
		}

		if ( ! function_exists( 'wc_get_product' ) ) {
			return self::error( 'eqo_reviews_unavailable', 'Reviews are unavailable right now.', 503 );
		}

		$user       = wp_get_current_user();
		$product_id = absint( $request['product_id'] );
		$product    = wc_get_product( $product_id );

		if ( ! $product || $product->get_parent_id() || 'publish' !== $product->get_status() ) {
			return self::error( 'eqo_reviews_invalid_product', 'This product could not be found.', 404 );
		}

		if ( 'yes' !== get_option( 'woocommerce_enable_reviews', 'yes' ) || ! $product->get_reviews_allowed() ) {
			return self::error( 'eqo_reviews_closed', 'Reviews are closed for this product.', 403 );
		}

		$content = trim( wp_strip_all_tags( (string) $request['review'] ) );
		$length  = mb_strlen( $content );
		if ( $length < self::MIN_LENGTH || $length > self::MAX_LENGTH ) {
			return self::error(
				'eqo_reviews_invalid_length',
				sprintf( 'Reviews must be between %d and %d characters.', self::MIN_LENGTH, self::MAX_LENGTH ),
				400
			);
		}

		$is_verified_owner = wc_customer_bought_product( $user->user_email, $user->ID, $product_id );
		if ( 'yes' === get_option( 'woocommerce_review_rating_verification_required', 'no' ) && ! $is_verified_owner ) {
			return self::error( 'eqo_reviews_not_verified_owner', 'Only customers who bought this product can review it.', 403 );
		}

		// One review per customer per product, counting ones still awaiting approval.
		$existing = get_comments(
			array(
				'post_id' => $product_id,
				'user_id' => $user->ID,
				'type'    => 'review',
				'status'  => 'all',
				'count'   => true,
			)
		);
		if ( $existing > 0 ) {
			return self::error( 'eqo_reviews_duplicate', 'You have already reviewed this product.', 409 );
		}

		// REMOTE_ADDR rather than forwarded headers, which the client controls.
		$ip       = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : '';
		$user_key = 'eqo_reviews_user_' . $user->ID;
		$ip_key   = 'eqo_reviews_ip_' . md5( $ip );
		if ( self::hits( $user_key ) >= self::USER_LIMIT || self::hits( $ip_key ) >= self::IP_LIMIT ) {
			return self::error( 'eqo_reviews_rate_limited', 'Too many reviews in a short time. Please try again later.', 429 );
		}

		$author_name = self::public_name( $user );
		$agent       = (string) $request->get_header( 'user_agent' );

		// Hold every review for approval, whatever the Discussion settings say,
		// but keep a spam or trash verdict from an anti-spam plugin.
		$hold = static function ( $approved ) {
			return ( is_wp_error( $approved ) || 'spam' === $approved || 'trash' === $approved ) ? $approved : 0;
		};

		add_filter( 'pre_comment_approved', $hold, 99 );
		$comment_id = wp_new_comment(
			array(
				'comment_post_ID'      => $product_id,
				'comment_author'       => $author_name,
				'comment_author_email' => $user->user_email,
				'comment_author_url'   => '',
				'comment_author_IP'    => $ip,
				'comment_agent'        => substr( $agent, 0, 254 ),
				'comment_content'      => $content,
				'comment_type'         => 'review',
				'comment_parent'       => 0,
				'user_id'              => $user->ID,
				// Saved with the comment, so the rating exists before any hook sees it.
				'comment_meta'         => array( 'rating' => (int) $request['rating'] ),
			),
			true
		);
		remove_filter( 'pre_comment_approved', $hold, 99 );

		if ( is_wp_error( $comment_id ) ) {
			// WordPress's own checks: identical content already posted, or posting too fast.
			switch ( $comment_id->get_error_code() ) {
				case 'comment_duplicate':
					return self::error( 'eqo_reviews_duplicate', 'You have already reviewed this product.', 409 );
				case 'comment_flood':
					return self::error( 'eqo_reviews_rate_limited', 'Too many reviews in a short time. Please try again later.', 429 );
				default:
					return self::error( 'eqo_reviews_failed', 'Your review could not be saved. Please try again.', 500 );
			}
		}

		self::hit( $user_key );
		self::hit( $ip_key );

		return new WP_REST_Response(
			array(
				'id'          => (int) $comment_id,
				'status'      => 'approved' === wp_get_comment_status( $comment_id ) ? 'approved' : 'pending',
				'author_name' => $author_name,
				'verified'    => (bool) $is_verified_owner,
			),
			201
		);
	}

	/** First name and last initial ("Priya S."), and never an email address. */
	private static function public_name( WP_User $user ) {
		$first = trim( (string) $user->first_name );
		$last  = trim( (string) $user->last_name );

		if ( '' !== $first ) {
			return '' !== $last ? $first . ' ' . mb_substr( $last, 0, 1 ) . '.' : $first;
		}

		$display = trim( (string) $user->display_name );
		return ( '' !== $display && false === strpos( $display, '@' ) ) ? $display : 'Eqo Logiq customer';
	}

	/** Submissions counted in the current one-hour window for a key. */
	private static function hits( $key ) {
		$window = get_transient( $key );
		return is_array( $window ) ? (int) $window['count'] : 0;
	}

	/** Count a submission. The window is fixed from the first one, not extended. */
	private static function hit( $key ) {
		$window = get_transient( $key );
		if ( ! is_array( $window ) ) {
			$window = array(
				'count'   => 0,
				'expires' => time() + HOUR_IN_SECONDS,
			);
		}

		++$window['count'];
		set_transient( $key, $window, max( 1, $window['expires'] - time() ) );
	}

	private static function error( $code, $message, $status ) {
		return new WP_Error( $code, $message, array( 'status' => $status ) );
	}
}

Eqo_Reviews::init();

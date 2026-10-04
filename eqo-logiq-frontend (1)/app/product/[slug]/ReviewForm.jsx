'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { EQO_API_BASE, WC_FETCH_OPTIONS } from '../../../lib/woocommerce';

// Must match the limits in the eqo-reviews WordPress plugin.
const MIN_LENGTH = 10;
const MAX_LENGTH = 5000;

const RATING_LABELS = ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent'];

const ERROR_MESSAGES = {
  eqo_reviews_duplicate: "You've already reviewed this product — thank you!",
  eqo_reviews_rate_limited: "You've sent several reviews in a short time. Please try again in an hour.",
  eqo_reviews_closed: 'Reviews are closed for this product.',
  eqo_reviews_not_verified_owner: 'Only customers who bought this product can review it.',
  eqo_reviews_invalid_length: `Reviews need between ${MIN_LENGTH} and ${MAX_LENGTH} characters.`,
};

/** Responses that mean the stored sign-in is missing, expired or rejected. */
const SESSION_ERRORS = new Set([
  'eqo_reviews_login_required',
  'jwt_auth_invalid_token',
  'jwt_auth_bad_auth_header',
  'rest_not_logged_in',
]);

function SignInPrompt({ expired = false }) {
  const pathname = usePathname();
  const loginHref = `/login/?redirect=${encodeURIComponent(`${pathname}#reviews`)}`;

  return (
    <div className="rounded-2xl border-2 border-brand-text/10 p-6">
      <p className="font-sans font-bold text-brand-text mb-1">
        {expired ? 'Your session has expired' : 'Share your experience'}
      </p>
      <p className="font-body text-sm text-brand-text/60 mb-5">
        {expired ? 'Please sign in again to post your review.' : 'Sign in to review this product.'}
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={loginHref}
          className="px-5 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors"
        >
          Sign in to write a review
        </Link>
        <Link href="/register/" className="font-body text-sm text-brand-text/60 hover:text-brand-primary underline-offset-4 hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
}

/**
 * Review submission for signed-in customers. Reviews go to the eqo-reviews
 * plugin, which holds each one for approval in WP Admin → Comments.
 */
export default function ReviewForm({ productId, onPublished, onCancel }) {
  const { token, isAuthenticated, isHydrated } = useAuth();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [text, setText] = useState('');
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [result, setResult] = useState(null);

  if (!isHydrated) return null;
  if (!isAuthenticated || sessionExpired) return <SignInPrompt expired={sessionExpired} />;

  if (result) {
    return (
      <div className="rounded-2xl bg-brand-primary/5 border-2 border-brand-primary/20 p-6" role="status">
        <p className="font-sans font-bold text-brand-text mb-1">Thank you for your review!</p>
        <p className="font-body text-sm text-brand-text/70">
          {result.status === 'approved'
            ? 'It is now live below.'
            : 'It will appear here once our team has approved it.'}
          {result.author_name ? ` It will be shown as “${result.author_name}”.` : ''}
        </p>
      </div>
    );
  }

  const trimmed = text.trim();
  const shownRating = hovered || rating;

  async function onSubmit(event) {
    event.preventDefault();
    setError(null);

    if (!rating) {
      setError('Please choose a star rating.');
      return;
    }
    if (trimmed.length < MIN_LENGTH) {
      setError(`Please write at least ${MIN_LENGTH} characters.`);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${EQO_API_BASE}/reviews`, {
        ...WC_FETCH_OPTIONS,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ product_id: productId, rating, review: trimmed, website }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (SESSION_ERRORS.has(data?.code) || response.status === 401) {
          setSessionExpired(true);
          return;
        }
        setError(ERROR_MESSAGES[data?.code] || "Your review couldn't be sent right now. Please try again later.");
        return;
      }

      setResult(data || { status: 'pending' });
      if (data?.status === 'approved') onPublished?.();
    } catch {
      setError("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border-2 border-brand-text/10 p-6" noValidate>
      <p className="font-sans font-bold text-brand-text mb-5">Write a review</p>

      <fieldset className="mb-5">
        <legend className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider mb-2">
          Your rating
        </legend>
        <div className="flex items-center gap-1" onMouseLeave={() => setHovered(0)}>
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              onMouseEnter={() => setHovered(value)}
              className="cursor-pointer text-3xl leading-none rounded has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-primary"
              style={{ color: value <= shownRating ? '#FFC850' : 'rgba(34,34,34,0.18)' }}
            >
              <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => setRating(value)}
                className="sr-only"
              />
              <span aria-hidden="true">★</span>
              <span className="sr-only">
                {value} star{value === 1 ? '' : 's'}, {RATING_LABELS[value]}
              </span>
            </label>
          ))}
          <span className="ml-3 font-body text-sm text-brand-text/60" aria-hidden="true">
            {RATING_LABELS[shownRating] || 'Select a rating'}
          </span>
        </div>
      </fieldset>

      <label htmlFor="review-text" className="block font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider mb-2">
        Your review
      </label>
      <textarea
        id="review-text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        maxLength={MAX_LENGTH}
        rows={5}
        placeholder="What did you like? How has it held up?"
        className="w-full font-body text-brand-text bg-white/60 border-2 border-brand-text/[0.12] rounded-xl px-4 py-3 focus:border-brand-primary focus:outline-none resize-y"
      />
      <p className="font-body text-xs text-brand-text/45 mt-1.5 mb-5">
        {trimmed.length < MIN_LENGTH
          ? `At least ${MIN_LENGTH} characters`
          : `${trimmed.length.toLocaleString('en-IN')} / ${MAX_LENGTH.toLocaleString('en-IN')}`}
        {' · '}Shown with your first name and last initial.
      </p>

      {/* Honeypot: hidden from people and screen readers; bots fill it in. */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="review-website">Website</label>
        <input
          id="review-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {error ? (
        <p className="font-body text-sm text-red-600 mb-4" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Submit review'}
        </button>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-3 rounded-xl font-sans font-bold text-sm text-brand-text/60 hover:text-brand-primary transition-colors"
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}

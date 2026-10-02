'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { WC_API_BASE, WC_FETCH_OPTIONS, WP_JSON_BASE } from '../../../lib/woocommerce';

const ReviewsContext = createContext(null);

const EMPTY = { status: 'idle', reviews: [], retry: () => {} };

const PAGE_SIZE = 100;
const MAX_PAGES = 10;
const MAX_REPLY_DEPTH = 10;

/**
 * Fetch every page of a WP REST collection. The backend's CORS policy does not
 * expose X-WP-TotalPages to the browser, so keep paging until a short page.
 */
async function fetchAllPages(url) {
  const items = [];

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const res = await fetch(`${url}&per_page=${PAGE_SIZE}&page=${page}`, WC_FETCH_OPTIONS);
    // WP answers 400 for a page past the end — only reachable after a full page.
    if (!res.ok && page > 1 && res.status === 400) break;
    if (!res.ok) throw new Error('Unable to load reviews.');

    const data = await res.json();
    if (!Array.isArray(data)) break;
    items.push(...data);
    if (data.length < PAGE_SIZE) break;
  }

  return items;
}

/** Split WordPress comment HTML into plain-text paragraphs (no markup is rendered). */
function htmlToParagraphs(html) {
  if (!html) return [];

  const doc = new DOMParser().parseFromString(String(html).replace(/<br\s*\/?>/gi, '\n'), 'text/html');
  const blocks = doc.body.querySelectorAll('p');
  const nodes = blocks.length > 0 ? Array.from(blocks) : [doc.body];

  // wpautop writes "<br />\n", so each break arrives doubled; keep one per line.
  return nodes
    .map((node) =>
      node.textContent
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join('\n')
    )
    .filter(Boolean);
}

/**
 * Hang each store reply under the review it answers. Replies to replies walk up
 * the parent chain so the whole thread stays with its review.
 */
function attachReplies(reviews, comments) {
  const reviewIds = new Set(reviews.map((review) => review.id));
  const commentsById = new Map(comments.map((comment) => [comment.id, comment]));
  const repliesByReview = new Map();

  comments.forEach((comment) => {
    let rootId = comment.parent;
    for (let depth = 0; depth < MAX_REPLY_DEPTH && rootId && !reviewIds.has(rootId); depth += 1) {
      rootId = commentsById.get(rootId)?.parent;
    }
    if (!reviewIds.has(rootId)) return;

    const thread = repliesByReview.get(rootId) || [];
    thread.push({
      id: comment.id,
      author: comment.author_name || 'Eqo Logiq',
      date: comment.date,
      paragraphs: htmlToParagraphs(comment.content?.rendered),
    });
    repliesByReview.set(rootId, thread);
  });

  return reviews.map((review) => ({
    id: review.id,
    reviewer: review.reviewer || 'Customer',
    rating: Number(review.rating) || 0,
    verified: Boolean(review.verified),
    date: review.date_created,
    paragraphs: htmlToParagraphs(review.review),
    replies: (repliesByReview.get(review.id) || []).sort((a, b) => String(a.date).localeCompare(String(b.date))),
  }));
}

async function loadReviews(productId) {
  const reviewsUrl = `${WC_API_BASE}/products/reviews?product_id=${productId}&orderby=date&order=desc`;
  const repliesUrl = `${WP_JSON_BASE}/wp/v2/comments?post=${productId}`;

  // Replies are a bonus — a failure there should not hide the reviews themselves.
  const [reviews, comments] = await Promise.all([
    fetchAllPages(reviewsUrl),
    fetchAllPages(repliesUrl).catch(() => []),
  ]);

  return attachReplies(reviews, comments);
}

/** Count, mean rating and per-star tally for a list of normalised reviews. */
export function summarizeReviews(reviews) {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let total = 0;
  let rated = 0;

  reviews.forEach((review) => {
    const stars = Math.round(review.rating);
    if (stars < 1 || stars > 5) return;
    distribution[stars] += 1;
    total += review.rating;
    rated += 1;
  });

  return { count: reviews.length, average: rated > 0 ? total / rated : 0, distribution };
}

/**
 * Loads a product's reviews and store replies live from the backend, so they are
 * current without a rebuild. Shared by the rating summary near the price and the
 * reviews section further down, which sit in separate branches of the page.
 */
export function ReviewsProvider({ productId, children }) {
  const [state, setState] = useState({ status: 'loading', reviews: [] });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!productId) return undefined;
    let cancelled = false;

    loadReviews(productId)
      .then((reviews) => {
        if (!cancelled) setState({ status: 'ready', reviews });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', reviews: [] });
      });

    return () => {
      cancelled = true;
    };
  }, [productId, attempt]);

  const retry = useCallback(() => {
    setState({ status: 'loading', reviews: [] });
    setAttempt((n) => n + 1);
  }, []);

  const value = useMemo(() => ({ ...state, retry }), [state, retry]);

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>;
}

export function useReviews() {
  return useContext(ReviewsContext) || EMPTY;
}

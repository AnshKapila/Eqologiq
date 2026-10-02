'use client';

import { useMemo, useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import Reveal from '../../../components/Reveal';
import { summarizeReviews, useReviews } from './ReviewsContext';

const INITIAL_VISIBLE = 3;

const SORTS = {
  newest: { label: 'Newest', compare: (a, b) => String(b.date).localeCompare(String(a.date)) },
  highest: { label: 'Highest rated', compare: (a, b) => b.rating - a.rating || String(b.date).localeCompare(String(a.date)) },
  lowest: { label: 'Lowest rated', compare: (a, b) => a.rating - b.rating || String(b.date).localeCompare(String(a.date)) },
};

/** Format a WP local date ("2025-10-23T19:11:16") by its calendar day, ignoring time zones. */
function formatDate(value) {
  const [year, month, day] = String(value || '').slice(0, 10).split('-').map(Number);
  if (!year || !month || !day) return '';
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function Stars({ rating, className = '' }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span className={className} style={{ color: '#FFC850' }} role="img" aria-label={`Rated ${filled} out of 5`}>
      {'★'.repeat(filled)}
      {'☆'.repeat(5 - filled)}
    </span>
  );
}

/**
 * Rating line beside the price. Shows the build-time numbers until live reviews
 * arrive, then the current ones, and jumps to the reviews section.
 */
export function ReviewSummary({ initialCount = 0, initialAverage = 0 }) {
  const { status, reviews } = useReviews();
  const live = useMemo(() => summarizeReviews(reviews), [reviews]);

  const count = status === 'ready' ? live.count : initialCount;
  const average = status === 'ready' ? live.average : initialAverage;
  if (count === 0) return null;

  return (
    <a href="#reviews" className="group inline-flex items-center gap-2">
      <Stars rating={average} className="text-base" />
      <span className="font-body text-sm text-brand-text/60 underline-offset-4 group-hover:text-brand-primary group-hover:underline">
        Rated {average.toFixed(2)} out of 5 · {count} customer review{count === 1 ? '' : 's'}
      </span>
    </a>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="py-8 border-b border-brand-text/8 first:pt-0 last:border-b-0">
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-sans font-bold text-white text-sm bg-brand-primary"
          aria-hidden="true"
        >
          {review.reviewer.trim().charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-sans font-bold text-sm text-brand-text">{review.reviewer}</p>
            {review.verified ? (
              <span className="inline-flex items-center gap-1 font-body text-xs text-brand-text/60">
                <BadgeCheck className="w-3.5 h-3.5 text-brand-secondary" aria-hidden="true" />
                Verified purchase
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Stars rating={review.rating} className="text-sm" />
            <time dateTime={review.date} className="font-body text-xs text-brand-text/45">
              {formatDate(review.date)}
            </time>
          </div>

          <div className="mt-4 space-y-3">
            {review.paragraphs.map((text, index) => (
              <p key={index} className="font-body text-brand-text/75 leading-relaxed whitespace-pre-line">
                {text}
              </p>
            ))}
          </div>

          {review.replies.map((reply) => (
            <div key={reply.id} className="mt-5 pl-4 border-l-2 border-brand-primary/30">
              <p className="font-sans font-bold text-xs text-brand-primary">
                {reply.author} replied{' '}
                <time dateTime={reply.date} className="font-body font-normal text-brand-text/45 ml-2">
                  {formatDate(reply.date)}
                </time>
              </p>
              <div className="mt-1.5 space-y-2">
                {reply.paragraphs.map((text, index) => (
                  <p key={index} className="font-body text-sm text-brand-text/70 leading-relaxed whitespace-pre-line">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function ReviewsSkeleton() {
  return (
    <div className="space-y-8 animate-pulse" aria-hidden="true">
      {[0, 1].map((key) => (
        <div key={key} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-text/8" />
          <div className="flex-1 space-y-3">
            <div className="h-3 w-32 rounded bg-brand-text/8" />
            <div className="h-3 w-24 rounded bg-brand-text/8" />
            <div className="h-3 w-full rounded bg-brand-text/8" />
            <div className="h-3 w-2/3 rounded bg-brand-text/8" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Every published review for the product, with the store's replies, loaded live.
 * Hidden entirely for products nobody has reviewed yet.
 */
export default function ProductReviews({ initialCount = 0 }) {
  const { status, reviews, retry } = useReviews();
  const [sort, setSort] = useState('newest');
  const [showAll, setShowAll] = useState(false);

  const summary = useMemo(() => summarizeReviews(reviews), [reviews]);
  const sorted = useMemo(() => [...reviews].sort(SORTS[sort].compare), [reviews, sort]);

  if (status === 'idle') return null;
  if (status === 'ready' && reviews.length === 0) return null;
  if (status !== 'ready' && initialCount === 0) return null;

  const visible = showAll ? sorted : sorted.slice(0, INITIAL_VISIBLE);
  const hiddenCount = sorted.length - INITIAL_VISIBLE;

  return (
    <Reveal as="section" className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
      <div id="reviews" className="border-t border-brand-text/10 pt-16 scroll-mt-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3">
            <p className="kicker text-brand-primary mb-4">Customer reviews</p>

            {status === 'ready' ? (
              <>
                <div className="flex items-end gap-4 mb-2">
                  <span className="font-sans font-bold text-5xl text-brand-text leading-none">
                    {summary.average.toFixed(1)}
                  </span>
                  <Stars rating={summary.average} className="text-xl" />
                </div>
                <p className="font-body text-sm text-brand-text/55 mb-8">
                  Based on {summary.count} review{summary.count === 1 ? '' : 's'}
                </p>

                <div className="space-y-2 max-w-xs">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const tally = summary.distribution[stars];
                    const share = summary.count > 0 ? (tally / summary.count) * 100 : 0;

                    return (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="font-body text-xs text-brand-text/60 w-8">{stars} ★</span>
                        <div className="flex-1 h-1.5 rounded-full bg-brand-text/8 overflow-hidden">
                          <div className="h-full rounded-full bg-brand-primary" style={{ width: `${share}%` }} />
                        </div>
                        <span className="font-body text-xs text-brand-text/45 w-4 text-right">{tally}</span>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>

          <div className="lg:w-2/3" aria-live="polite" aria-busy={status === 'loading'}>
            {status === 'loading' ? <ReviewsSkeleton /> : null}

            {status === 'error' ? (
              <div className="rounded-2xl border-2 border-brand-text/10 p-6">
                <p className="font-body text-brand-text/70 mb-4">We couldn&apos;t load reviews right now.</p>
                <button
                  type="button"
                  onClick={retry}
                  className="px-4 py-2.5 rounded-xl border-2 border-brand-text/15 font-sans font-bold text-sm text-brand-text/70 hover:border-brand-primary hover:text-brand-primary transition-colors"
                >
                  Try again
                </button>
              </div>
            ) : null}

            {status === 'ready' ? (
              <>
                {sorted.length > 1 ? (
                  <div className="flex items-center justify-end gap-3 mb-8">
                    <label htmlFor="review-sort" className="font-body text-sm text-brand-text/55">
                      Sort by
                    </label>
                    <select
                      id="review-sort"
                      value={sort}
                      onChange={(event) => setSort(event.target.value)}
                      className="font-body text-sm text-brand-text bg-transparent border-2 border-brand-text/15 rounded-xl px-3 py-2 focus:border-brand-primary focus:outline-none"
                    >
                      {Object.entries(SORTS).map(([key, option]) => (
                        <option key={key} value={key}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                <div>
                  {visible.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>

                {hiddenCount > 0 ? (
                  <button
                    type="button"
                    onClick={() => setShowAll((open) => !open)}
                    aria-expanded={showAll}
                    className="mt-8 px-5 py-3 rounded-xl border-2 border-brand-text/15 font-sans font-bold text-sm text-brand-text/70 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    {showAll ? 'Show fewer reviews' : `View all ${sorted.length} reviews`}
                  </button>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

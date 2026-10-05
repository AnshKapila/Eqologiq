'use client';

import { createContext, useContext, useMemo } from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { formatProductPrice } from '../../../lib/woocommerce';

const LiveProductContext = createContext(null);

function getRegularPrice(prices) {
  if (!prices?.regular_price || prices.regular_price === prices.price) return null;
  return formatProductPrice({ ...prices, price: prices.regular_price });
}

function getDiscountPercent(prices) {
  if (!prices?.regular_price || !prices?.price) return null;
  const regular = Number(prices.regular_price);
  const sale = Number(prices.price);
  if (!regular || regular <= sale) return null;
  return Math.round((1 - sale / regular) * 100);
}

/**
 * Product pages are exported at build time, so the price and stock written into
 * the HTML go stale the moment they change in WooCommerce. Hold them back until
 * the live values arrive, so a visitor never sees an old price flip to a new
 * one; the build-time values are only a fallback if the request fails. Uses the
 * same request as the shop grid on purpose: the backend's LiteSpeed cache is
 * known to refresh that one when a product is saved.
 */
export function LiveProductProvider({ productId, initialPrices, initialStockText, children }) {
  const { products, loading } = useProducts();
  const live = products.find((product) => product?.id === productId);

  const value = useMemo(
    () => ({
      loading,
      prices: live?.prices || initialPrices,
      stockText: live ? live.stock_availability?.text || '' : initialStockText,
      expectStockText: Boolean(initialStockText),
    }),
    [loading, live, initialPrices, initialStockText]
  );

  return <LiveProductContext.Provider value={value}>{children}</LiveProductContext.Provider>;
}

function useLiveProduct() {
  return (
    useContext(LiveProductContext) || {
      loading: false,
      prices: null,
      stockText: '',
      expectStockText: false,
    }
  );
}

export function LivePrice() {
  const { loading, prices } = useLiveProduct();

  if (loading) {
    // Same height as the price row below, so nothing shifts when it fills in.
    return (
      <div className="flex items-center h-9 mb-2 animate-pulse" aria-hidden="true">
        <div className="h-7 w-40 rounded bg-brand-text/[0.08]" />
      </div>
    );
  }

  const price = formatProductPrice(prices);
  const regularPrice = getRegularPrice(prices);
  const discountPercent = getDiscountPercent(prices);

  return (
    <div className="flex items-baseline gap-4 mb-2">
      <span className="font-sans font-bold text-3xl text-brand-primary">{price || '—'}</span>
      {regularPrice ? (
        <span className="font-body text-brand-text/40 text-base line-through">
          {regularPrice}
        </span>
      ) : null}
      {discountPercent ? (
        <span className="text-xs font-sans font-bold px-2.5 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary">
          {discountPercent}% off
        </span>
      ) : null}
    </div>
  );
}

export function LiveStockText() {
  const { loading, stockText, expectStockText } = useLiveProduct();

  if (loading) {
    // Hold the line only where the build saw one; most products show no stock
    // text, and a placeholder there would collapse into a jump of its own.
    if (!expectStockText) return null;
    return (
      <div className="flex items-center h-4 mt-1 animate-pulse" aria-hidden="true">
        <div className="h-3 w-20 rounded bg-brand-text/[0.08]" />
      </div>
    );
  }

  if (!stockText) return null;

  return <p className="font-body text-xs text-brand-secondary mt-1">{stockText}</p>;
}

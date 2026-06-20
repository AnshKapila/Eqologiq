'use client';

import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, RotateCcw, Truck, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatProductPrice } from '../../lib/woocommerce';

export default function CartContent() {
  const { cart, isHydrated, isLoading, updateQuantity, removeItem, updatingItemKey } = useCart();

  const items = cart?.items ?? [];
  const isEmpty = isHydrated && !isLoading && items.length === 0;

  return (
    <main className="pt-20">
      <section className="bg-brand-base py-12 border-b border-brand-text/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h1 className="font-sans font-bold text-3xl text-brand-text">Your Cart</h1>
        </div>
      </section>

      <section className="bg-brand-base py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:flex-1 w-full">
              {!isHydrated || isLoading ? (
                <p className="font-body text-brand-text/50 text-sm">Loading cart…</p>
              ) : isEmpty ? (
                <div className="bg-white rounded-2xl p-10 text-center shadow-[0_2px_12px_rgba(34,34,34,0.07)]">
                  <p className="font-body text-brand-text/60 mb-6">Your cart is empty.</p>
                  <Link
                    href="/shop/"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-primary hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Continue shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {items.map((item) => {
                      const isItemUpdating = updatingItemKey === item.key;
                      return (
                        <div
                          key={item.key || item.id}
                          className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(34,34,34,0.07)] flex gap-6 items-start"
                        >
                          <div className="w-20 h-20 rounded-xl bg-brand-surface flex-shrink-0 overflow-hidden">
                            <img
                              src={item.images?.[0]?.src || item.images?.[0]?.thumbnail || ''}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-sans font-bold text-base text-brand-text">{item.name}</h3>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(item.key).catch(() => {})}
                                disabled={isItemUpdating}
                                className="text-brand-text/30 hover:text-brand-text transition-colors flex-shrink-0 disabled:opacity-40"
                                aria-label={`Remove ${item.name}`}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center border border-brand-text/15 rounded-lg overflow-hidden">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.key, item.quantity - 1).catch(() => {})}
                                  disabled={isItemUpdating}
                                  className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm disabled:opacity-40"
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                <span className="px-3 py-1.5 font-sans font-bold text-brand-text text-sm min-w-[2.5rem] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.key, item.quantity + 1).catch(() => {})}
                                  disabled={isItemUpdating}
                                  className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm disabled:opacity-40"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                              <p className="font-sans font-bold text-base text-brand-text">
                                {formatProductPrice({
                                  price: item.totals?.line_total || item.prices?.price,
                                  currency_minor_unit: item.prices?.currency_minor_unit ?? 2,
                                  currency_prefix: item.prices?.currency_prefix ?? '₹',
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/shop/"
                      className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-primary hover:underline"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Continue shopping
                    </Link>
                  </div>
                </>
              )}
            </div>

            {!isEmpty && (
              <div className="lg:w-[380px] w-full">
                <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.08)]">
                  <h2 className="font-sans font-bold text-lg text-brand-text mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={`summary-${item.key || item.id}`}
                        className="flex justify-between font-body text-sm text-brand-text/70"
                      >
                        <span className="pr-4">
                          {item.name} × {item.quantity}
                        </span>
                        <span>
                          {formatProductPrice({
                            price: item.totals?.line_total || item.prices?.price,
                            currency_minor_unit: item.prices?.currency_minor_unit ?? 2,
                            currency_prefix: item.prices?.currency_prefix ?? '₹',
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-brand-text/8 pt-4 mb-2">
                    <div className="flex justify-between font-body text-sm text-brand-text/70 mb-2">
                      <span>Subtotal</span>
                      <span>
                        {formatProductPrice({
                          price: cart?.totals?.total_items || '0',
                          currency_minor_unit: cart?.totals?.currency_minor_unit ?? 2,
                          currency_prefix: cart?.totals?.currency_prefix ?? '₹',
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between font-body text-sm text-brand-secondary">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5" />
                        Shipping
                      </span>
                      <span>Free</span>
                    </div>
                  </div>
                  <div className="border-t border-brand-text/8 pt-4 mb-6">
                    <div className="flex justify-between font-sans font-bold text-lg text-brand-text">
                      <span>Total</span>
                      <span>
                        {formatProductPrice({
                          price: cart?.totals?.total_price || cart?.totals?.total_items || '0',
                          currency_minor_unit: cart?.totals?.currency_minor_unit ?? 2,
                          currency_prefix: cart?.totals?.currency_prefix ?? '₹',
                        })}
                      </span>
                    </div>
                    <p className="font-body text-xs text-brand-text/45 mt-1">Inclusive of all taxes (GST)</p>
                  </div>
                  <Link
                    href="/checkout/"
                    className="block w-full py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] transition-colors text-center"
                  >
                    Proceed to Checkout
                  </Link>
                  <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-brand-text/8">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <ShieldCheck className="w-4 h-4 text-brand-secondary" />
                      <span className="font-body text-xs text-brand-text/50 leading-tight">Plastic-free packaging</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Lock className="w-4 h-4 text-brand-primary" />
                      <span className="font-body text-xs text-brand-text/50 leading-tight">Secure payment</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <RotateCcw className="w-4 h-4 text-brand-primary" />
                      <span className="font-body text-xs text-brand-text/50 leading-tight">Easy returns</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

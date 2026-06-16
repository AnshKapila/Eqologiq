'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { handleDownloadInvoice } from '../../../lib/downloadInvoice';

function formatToday() {
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
  } catch {
    return new Date().toLocaleDateString();
  }
}

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const { token } = useAuth();
  const { resetCart } = useCart();
  const orderId = searchParams?.get('order_id') || '—';

  const [mounted, setMounted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const today = mounted ? formatToday() : '—';

  async function onDownloadInvoice() {
    if (!orderId || orderId === '—') return;

    setIsDownloading(true);
    setDownloadError(null);

    try {
      await handleDownloadInvoice(orderId, token);
    } catch (err) {
      setDownloadError(err?.message || 'Unable to download invoice.');
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <main className="pt-20 bg-brand-base">
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(34,34,34,0.07)] overflow-hidden">
            <div className="px-6 md:px-10 py-10 border-b border-brand-text/8">
              <p className="font-sans font-bold text-2xl md:text-3xl text-brand-text">
                Thank you. Your order has been received.
              </p>
              <p className="font-body text-sm text-brand-text/55 mt-3">
                We’re preparing your items for dispatch. Keep your order number handy for reference.
              </p>
            </div>

            <div className="px-6 md:px-10 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-brand-text/10 bg-brand-surface p-4">
                  <p className="font-sans font-bold text-[11px] tracking-widest uppercase text-brand-text/50">
                    Order Number
                  </p>
                  <p className="font-sans font-bold text-base text-brand-text mt-2 break-all">{orderId}</p>
                </div>

                <div className="rounded-xl border border-brand-text/10 bg-brand-surface p-4">
                  <p className="font-sans font-bold text-[11px] tracking-widest uppercase text-brand-text/50">
                    Date
                  </p>
                  <p className="font-sans font-bold text-base text-brand-text mt-2">{today}</p>
                </div>

                <div className="rounded-xl border border-brand-text/10 bg-brand-surface p-4">
                  <p className="font-sans font-bold text-[11px] tracking-widest uppercase text-brand-text/50">
                    Payment Method
                  </p>
                  <p className="font-sans font-bold text-base text-brand-text mt-2">Cash on delivery</p>
                </div>
              </div>

              {downloadError ? (
                <p className="mt-6 font-body text-sm text-red-600">{downloadError}</p>
              ) : null}

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <Link
                  href="/account"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-text/15 px-5 py-3 font-sans font-bold text-sm text-brand-text hover:border-brand-text/25 hover:bg-brand-surface transition-colors"
                >
                  View Order in Account
                </Link>
                <button
                  type="button"
                  onClick={onDownloadInvoice}
                  disabled={!orderId || orderId === '—' || isDownloading}
                  className="inline-flex items-center justify-center rounded-xl border border-brand-secondary/40 px-5 py-3 font-sans font-bold text-sm text-brand-secondary hover:border-brand-secondary/60 hover:bg-brand-secondary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  {isDownloading ? 'Downloading...' : 'Download Invoice'}
                </button>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 font-sans font-bold text-sm text-white hover:bg-[#005580] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          <p className="font-body text-xs text-brand-text/45 mt-6 text-center">
            If you have any questions, please contact support and share your order number.
          </p>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { WC_API_BASE, WC_FETCH_OPTIONS, formatProductPrice } from '../../lib/woocommerce';

const ORDER_EMAIL_KEY = 'eqo_order_email';

function formatOrderDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatPaymentMethod(order) {
  if (order?.payment_method_title) return order.payment_method_title;
  if (order?.payment_method === 'cod') return 'Cash on delivery';
  if (order?.payment_method === 'phonepe') return 'PhonePe';
  return order?.payment_method || '—';
}

function formatAddressBlock(address) {
  if (!address) return null;

  const name = [address.first_name, address.last_name].filter(Boolean).join(' ');
  const cityLine = [address.city, address.state, address.postcode].filter(Boolean).join(', ');
  const country = address.country === 'IN' ? 'India' : address.country;

  return [name, address.company, address.address_1, address.address_2, cityLine, country, address.phone, address.email]
    .filter(Boolean)
    .join('\n');
}

function getPriceMeta(order) {
  const firstItem = order?.items?.[0];

  return {
    currency_minor_unit:
      order?.totals?.currency_minor_unit ??
      firstItem?.totals?.currency_minor_unit ??
      firstItem?.prices?.currency_minor_unit ??
      2,
    currency_prefix:
      order?.totals?.currency_prefix ??
      firstItem?.totals?.currency_prefix ??
      firstItem?.prices?.currency_prefix ??
      '₹',
  };
}

function formatOrderMoney(order, amount) {
  if (amount == null || amount === '') return '—';
  return formatProductPrice({ price: amount, ...getPriceMeta(order) });
}

export default function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');
  const orderKey = searchParams.get('key');

  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!orderId || !orderKey) {
      setIsLoading(false);
      setError('Missing order details. Please check your confirmation email.');
      return;
    }

    let cancelled = false;

    async function fetchOrder() {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({ key: orderKey });
        const billingEmail =
          typeof window !== 'undefined' ? sessionStorage.getItem(ORDER_EMAIL_KEY) : null;

        if (billingEmail) {
          params.set('billing_email', billingEmail);
        }

        const response = await fetch(`${WC_API_BASE}/order/${orderId}?${params.toString()}`, {
          ...WC_FETCH_OPTIONS,
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data?.message || 'Unable to load order details.');
        }

        if (!cancelled) {
          setOrder(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Unable to load order details.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchOrder();

    return () => {
      cancelled = true;
    };
  }, [orderId, orderKey]);

  if (isLoading) {
    return (
      <main className="pt-20 min-h-[70vh] bg-brand-base">
        <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
          <p className="font-body text-brand-text/50">Loading your order…</p>
        </section>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="pt-20 min-h-[70vh] bg-brand-base">
        <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
          <h1 className="font-sans font-bold text-2xl text-brand-text mb-3">Order not found</h1>
          <p className="font-body text-brand-text/60 mb-8">{error || 'We could not load this order.'}</p>
          <Link
            href="/shop/"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors"
          >
            Continue shopping
          </Link>
        </section>
      </main>
    );
  }

  const billingAddress = formatAddressBlock(order.billing_address);
  const orderDate =
    order.date_created ||
    order.date_created_gmt ||
    order.date_modified ||
    order.date_modified_gmt;

  const summaryItems = [
    { label: 'Order number', value: String(order.id || orderId) },
    { label: 'Date', value: formatOrderDate(orderDate) },
    { label: 'Email', value: order.billing_address?.email || '—' },
    { label: 'Total', value: formatOrderMoney(order, order.totals?.total_price) },
    { label: 'Payment method', value: formatPaymentMethod(order) },
  ];

  const shippingTotal = Number(order.totals?.total_shipping || 0);

  return (
    <main className="pt-20 min-h-[70vh] bg-brand-base">
      <section className="max-w-[900px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <p className="font-sans font-bold text-2xl md:text-3xl text-brand-text mb-10">
          Thank you. Your order has been received.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 pb-10 border-b border-brand-text/10">
          {summaryItems.map(({ label, value }) => (
            <div key={label}>
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-brand-text/45 mb-1.5">
                {label}
              </p>
              <p className="font-body text-sm text-brand-text break-words">{value}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-sans font-bold text-xl text-brand-text mb-6">Order details</h2>

          <div className="bg-white rounded-2xl border border-brand-text/10 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-brand-text/10 bg-brand-surface/40">
                  <th className="px-5 py-4 font-sans font-bold text-sm text-brand-text">Product</th>
                  <th className="px-5 py-4 font-sans font-bold text-sm text-brand-text text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {(order.items || []).map((item) => (
                  <tr key={item.key || item.id} className="border-b border-brand-text/8">
                    <td className="px-5 py-4 font-body text-sm text-brand-text">
                      {item.name}
                      <span className="text-brand-text/50"> × {item.quantity}</span>
                    </td>
                    <td className="px-5 py-4 font-body text-sm text-brand-text text-right">
                      {formatOrderMoney(order, item.totals?.line_total)}
                    </td>
                  </tr>
                ))}

                <tr className="border-b border-brand-text/8">
                  <td className="px-5 py-4 font-body text-sm text-brand-text">Subtotal</td>
                  <td className="px-5 py-4 font-body text-sm text-brand-text text-right">
                    {formatOrderMoney(order, order.totals?.total_items)}
                  </td>
                </tr>

                <tr className="border-b border-brand-text/8">
                  <td className="px-5 py-4 font-body text-sm text-brand-text">Shipping</td>
                  <td className="px-5 py-4 font-body text-sm text-brand-text text-right">
                    {shippingTotal === 0
                      ? 'Free'
                      : formatOrderMoney(order, order.totals?.total_shipping)}
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-sans font-bold text-sm text-brand-text">Total</td>
                  <td className="px-5 py-4 font-sans font-bold text-sm text-brand-text text-right">
                    {formatOrderMoney(order, order.totals?.total_price)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-sans font-bold text-xl text-brand-text mb-4">Billing address</h2>
          <div className="bg-white rounded-2xl border border-brand-text/10 p-5">
            <p className="font-body text-sm text-brand-text/80 whitespace-pre-line leading-relaxed">
              {billingAddress || '—'}
            </p>
          </div>
        </div>

        <Link
          href="/shop/"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors"
        >
          Continue shopping
        </Link>
      </section>
    </main>
  );
}

import { Suspense } from 'react';
import OrderSuccessContent from './OrderSuccessContent';

export const metadata = {
  title: 'Order Received | Eqo Logiq',
  description: 'Thank you. Your order has been received.',
};

function OrderSuccessFallback() {
  return (
    <main className="pt-20 min-h-[70vh] bg-brand-base">
      <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
        <p className="font-body text-brand-text/50">Loading your order…</p>
      </section>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<OrderSuccessFallback />}>
      <OrderSuccessContent />
    </Suspense>
  );
}

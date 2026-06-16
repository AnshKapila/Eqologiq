import { Suspense } from 'react';
import CheckoutContent from './CheckoutContent';

export const metadata = {
  title: 'Checkout | Eqo Logiq',
  description: 'Complete your Eqo Logiq order. Secure checkout for plastic-free steel bottles and oral care.',
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-brand-base pt-20" />}>
      <CheckoutContent />
    </Suspense>
  );
}

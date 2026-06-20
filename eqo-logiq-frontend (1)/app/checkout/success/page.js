import { Suspense } from 'react';
import SuccessClient from './SuccessClient';

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-brand-base" />}>
      <SuccessClient />
    </Suspense>
  );
}


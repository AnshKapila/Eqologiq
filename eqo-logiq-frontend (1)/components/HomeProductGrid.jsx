'use client';

import { Suspense } from 'react';
import ProductGrid from '../components/ProductGrid';

export default function HomeProductGrid() {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`home-product-skeleton-${index}`}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] animate-pulse"
            >
              <div className="aspect-square bg-brand-surface" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-brand-surface rounded w-3/4" />
                <div className="h-3 bg-brand-surface rounded w-full" />
                <div className="h-8 bg-brand-surface rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      }
    >
      <ProductGrid
        variant="home"
        limit={3}
        embedded
        columnsClass="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      />
    </Suspense>
  );
}

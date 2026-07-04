'use client';

import { ShieldCheck, Truck, RotateCcw, Lock } from 'lucide-react';
import Reveal from '../../components/Reveal';
import ProductGrid from '../../components/ProductGrid';

export default function ShopContent() {
  return (
    <main className="pt-20">
      <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="kicker text-brand-primary mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-primary" />
            The Collection
          </p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Everything we offer.</h1>
          <p className="font-body text-brand-text/60 text-lg max-w-lg">
            Plastic-free steel water bottles, vegan oral care, and curated bundles. Every product built to perform and designed to outlast.
          </p>
        </Reveal>
      </section>

      <ProductGrid variant="shop" showFilters />

      <section className="bg-brand-surface py-12 border-t border-brand-text/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-brand-secondary" />
              <span className="font-body text-sm text-brand-text/70">100% Plastic-Free</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-brand-primary" />
              <span className="font-body text-sm text-brand-text/70">Free shipping above ₹1,500</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RotateCcw className="w-6 h-6 text-brand-primary" />
              <span className="font-body text-sm text-brand-text/70">Easy 7-day returns</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Lock className="w-6 h-6 text-brand-primary" />
              <span className="font-body text-sm text-brand-text/70">Secure checkout</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

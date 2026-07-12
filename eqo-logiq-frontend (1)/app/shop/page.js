import { Suspense } from 'react';
import ShopContent from './ShopContent';

export const metadata = {
  title: 'Shop Plastic-Free Steel Water Bottles India',
  description: "Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.",
  openGraph: {
    title: 'Shop Plastic-Free Steel Water Bottles India',
    description: "Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.",
    images: [{ url: '/images/steel-bottle.png' }],
  },
  twitter: {
    title: 'Shop Plastic-Free Steel Water Bottles India',
    description: "Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.",
  },
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <main className="pt-20">
          <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <p className="font-body text-brand-text/40 text-lg">Loading shop collection...</p>
            </div>
          </section>
        </main>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

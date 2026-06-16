import ShopContent from './ShopContent';

export const metadata = {
  title: 'Shop Plastic-Free Steel Water Bottles India | Eqo Logiq',
  description:
    "Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.",
  alternates: { canonical: 'https://eqologiq.kite.space/shop/' },
  openGraph: {
    title: 'Shop Plastic-Free Steel Water Bottles India | Eqo Logiq',
    description:
      "Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.",
    images: [
      {
        url: '/images/steel-bottle.png',
      },
    ],
  },
};

export default function ShopPage() {
  return <ShopContent />;
}

import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Eqo Logiq | Get in Touch',
  description:
    "Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.",
  alternates: { canonical: 'https://eqologiq.kite.space/contact/' },
  openGraph: {
    title: 'Contact Eqo Logiq | Get in Touch',
    description:
      "Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.",
    images: [
      {
        url: '/images/hero-banner.png',
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

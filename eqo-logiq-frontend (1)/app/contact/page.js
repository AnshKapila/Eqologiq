import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us',
  description: "Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.",
  openGraph: {
    title: 'Contact Us',
    description: "Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.",
    images: [{ url: '/images/hero-banner.png' }],
  },
  twitter: {
    title: 'Contact Us',
    description: "Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Eqo Logiq",
        "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://eqologiq.in',
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "hello@eqologic.com"
        }
      }) }} />
      <ContactContent />
    </>
  );
}

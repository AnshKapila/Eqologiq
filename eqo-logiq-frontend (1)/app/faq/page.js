import FaqContent from './FaqContent';

export const metadata = {
  title: 'FAQ | Steel Water Bottle Questions Answered | Eqo Logiq',
  description:
    'Questions answered about Eqo Logiq steel water bottles, vegan oral care, orders, sustainability, and returns. Get the facts before you buy.',
  alternates: { canonical: 'https://eqologiq.kite.space/faq/' },
  openGraph: {
    title: 'FAQ | Steel Water Bottle Questions Answered | Eqo Logiq',
    description:
      'Questions answered about Eqo Logiq steel water bottles, vegan oral care, orders, sustainability, and returns. Get the facts before you buy.',
    images: [
      {
        url: '/images/hero-banner.png',
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are the bottles truly food-grade? What does that mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our steel water bottles use 18/8 stainless steel — 18% chromium and 8% nickel — the same grade used in surgical instruments and quality cookware. It will not leach chemicals into your water, won\'t impart taste, and won\'t corrode under normal use. The cap gasket is food-grade silicone, not rubber.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the insulation actually work in hot Indian weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We test at 42°C ambient temperature. In those conditions, cold water stays cold for a minimum of 18 hours. In a typical air-conditioned environment, you\'ll easily hit the 24-hour mark. Hot liquids stay hot for 12 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the bamboo toothbrushes really have vegan bristles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most bamboo toothbrushes use boar-hair bristles. Ours use nylon-6 bristles with a charcoal infusion — synthetic, durable, and clean effectively without any animal byproduct. The handle is 100% bamboo and compostable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put carbonated drinks or hot coffee in the steel water bottle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes to hot coffee — it stays hot for 12 hours. For carbonated drinks, don\'t fully seal the lid immediately after filling as pressure can build. Let it settle for 30 seconds, then seal. The steel water bottle handles carbonated liquids fine.',
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FaqContent />
    </>
  );
}

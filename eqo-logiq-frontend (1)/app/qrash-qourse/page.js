import QrashQourseContent from './QrashQourseContent';

export const metadata = {
  title: 'The Qrash Qourse | Plastic-Free Living Explained | Eqo Logiq',
  description:
    'The science behind plastic-free living. Materials, health data, and environmental impact — why what you use every day matters more than you think.',
  alternates: { canonical: 'https://eqologiq.kite.space/qrash-qourse/' },
  openGraph: {
    title: 'The Qrash Qourse | Plastic-Free Living Explained | Eqo Logiq',
    description:
      'The science behind plastic-free living. Materials, health data, and environmental impact — why what you use every day matters more than you think.',
    images: [
      {
        url: '/images/about-hero.png',
      },
    ],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Qrash Qourse: What You Use Every Day, Explained',
  description:
    'Material science, environmental data, and documented health research relevant to plastic-free daily essentials.',
  image:
    '/images/about-hero.png',
  url: 'https://eqologiq.kite.space/qrash-qourse/',
  author: {
    '@type': 'Organization',
    name: 'Eqo Logiq',
    url: 'https://eqologiq.kite.space/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Eqo Logiq',
    logo: {
      '@type': 'ImageObject',
      url: '/images/logo-mark.png',
    },
  },
  dateModified: '2026-06-12',
};

export default function QrashQoursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <QrashQourseContent />
    </>
  );
}

import AboutContent from './AboutContent';

export const metadata = {
  title: 'Our Story | Eqo Logiq — Plastic-Free Daily Essentials',
  description:
    'Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.',
  alternates: { canonical: 'https://eqologiq.kite.space/about/' },
  openGraph: {
    title: 'Our Story | Eqo Logiq — Plastic-Free Daily Essentials',
    description:
      'Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.',
    images: [
      {
        url: '/images/hero-banner.png',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

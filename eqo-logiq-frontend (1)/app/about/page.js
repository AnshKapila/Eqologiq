import AboutContent from './AboutContent';

export const metadata = {
  title: 'Our Story',
  description: 'Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.',
  openGraph: {
    title: 'Our Story',
    description: 'Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.',
    images: [{ url: '/images/hero-banner.png' }],
  },
  twitter: {
    title: 'Our Story',
    description: 'Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

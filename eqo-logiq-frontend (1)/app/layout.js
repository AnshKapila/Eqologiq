import './globals.css';
import Navbar from '../components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Providers from '../components/Providers';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eqologiq.in';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Eqo Logiq | Plastic-Free Daily Essentials',
    template: '%s | Eqo Logiq',
  },
  description:
    'Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging.',
  applicationName: 'Eqo Logiq',
  authors: [{ name: 'Eqo Logiq' }],
  generator: 'Next.js',
  keywords: ['plastic-free', 'sustainable', 'steel water bottles', 'vegan oral care', 'India', 'ergonomic sustainable bags'],
  referrer: 'origin-when-cross-origin',
  creator: 'Eqo Logiq',
  publisher: 'Eqo Logiq',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Eqo Logiq',
    title: 'Eqo Logiq | Plastic-Free Daily Essentials',
    description:
      'Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging.',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/images/feature-lifestyle.png`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eqo Logiq | Plastic-Free Daily Essentials',
    description:
      'Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging.',
    creator: '@EqoLogiq',
    images: [`${baseUrl}/images/feature-lifestyle.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}

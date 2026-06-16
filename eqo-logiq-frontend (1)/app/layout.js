import './globals.css';
import Navbar from '../components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Providers from '../components/Providers';

export const metadata = {
  title: {
    default: 'Eqo Logiq | Plastic-Free Daily Essentials',
    template: '%s | Eqo Logiq',
  },
  description:
    'Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging.',
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

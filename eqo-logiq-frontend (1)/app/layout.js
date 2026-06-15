import { Header } from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

        <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
        <script src="https://cdn.tailwindcss.com/3.4.17"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                base: '#F7F5F0',
                surface: '#EAE6DF',
                primary: '#006B96',
                secondary: '#99BD05',
                text: '#222222',
                light: '#FFFFFF'
              }
            },
            fontFamily: {
              display: ['Space Grotesk', 'sans-serif'],
              sans: ['Space Grotesk', 'sans-serif'],
              body: ['Inter', 'sans-serif']
            },
            spacing: {
              '15vh': '15vh',
              '20vh': '20vh',
            },
            animation: {
              'marquee': 'marquee 25s linear infinite',
              'slow-breathe': 'breathe 20s ease-in-out infinite alternate',
            },
            keyframes: {
              marquee: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
              breathe: {
                '0%': { transform: 'scale(1)' },
                '100%': { transform: 'scale(1.05)' },
              }
            }
          }
        }
      }
          `
        }}></script>

        <style dangerouslySetInnerHTML={{
          __html: `
      body {
        background-color: #F7F5F0;
        color: #222222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }
      .kicker {
        font-family: 'Inter', sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-weight: 600;
      }
      .text-massive {
        font-size: clamp(4rem, 12vw, 15rem);
        line-height: 0.9;
        letter-spacing: -0.02em;
      }
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
      .scrub-text {
        opacity: 0.2;
        transition: opacity 0.5s ease;
      }
      .scrub-text.is-reading {
        opacity: 1;
      }
      .soft-frame {
        background-color: #EAE6DF;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
          `
        }}></style>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

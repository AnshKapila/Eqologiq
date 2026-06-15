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
                base: '#F7F5F0',       // Warm off-white
                surface: '#EAE6DF',    // Soft greige for frames
                primary: '#006B96',    // Bold cobalt blue
                secondary: '#99BD05',  // Forest green (sparingly)
                text: '#222222',       // Deep charcoal
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
      /* Base Styles */
      body {
        background-color: #F7F5F0;
        color: #222222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      /* Typography Utilities */
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

      /* Navbar Scroll Logic */
      #navbar {
        transition: background-color 0.4s ease, border-color 0.4s ease, padding 0.4s ease;
      }
      #navbar.scrolled {
        background-color: #F7F5F0;
        border-bottom: 1px solid rgba(34, 34, 34, 0.1);
        box-shadow: 0 1px 0 0 rgba(0,107,150,0.08);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      
      /* Logo colors based on scroll */
      #nav-logo-text { transition: color 0.4s ease; }
      #navbar:not(.scrolled) #nav-logo-text.hero-light { color: #FFFFFF; }
      #navbar.scrolled #nav-logo-text.hero-light { color: #222222; }

      /* Nav links based on scroll */
      .nav-link { transition: color 0.4s ease; }
      #navbar:not(.scrolled) .nav-link.hero-light { color: #FFFFFF; }
      #navbar.scrolled .nav-link.hero-light { color: #222222; }

      /* Scroll Reveal Pattern */
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }

      /* Sticky Scrub Pattern */
      .scrub-text {
        opacity: 0.2;
        transition: opacity 0.5s ease;
      }
      .scrub-text.is-reading {
        opacity: 1;
      }

      /* Soft Frame Image Treatment */
      .soft-frame {
        background-color: #EAE6DF;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Hide scrollbar for marquee */
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
        {children}
      </body>
    </html>
  );
}

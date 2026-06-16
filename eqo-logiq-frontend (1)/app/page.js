import React from 'react';
import Link from 'next/link';
import HomeProductGrid from '../components/HomeProductGrid';
import HomePageEffects from '../components/HomePageEffects';
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  FlaskConical,
  ThermometerSun,
  Infinity,
} from 'lucide-react';

export const metadata = {
  title: `Eqo Logiq | Plastic-Free Daily Essentials: Steel Bottles & More`,
  description: `Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging. Built to last a decade.`,
  alternates: { canonical: `https://eqologiq.kite.space/` },
  openGraph: {
    title: `Eqo Logiq | Plastic-Free Daily Essentials: Steel Bottles & More`,
    description: `Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging. Built to last a decade.`,
    images: [{ url: `/images/hero-banner.png` }],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://eqologiq.kite.space/#organization",
          "name": "Eqo Logiq",
          "url": "https://eqologiq.kite.space/",
          "logo": {
            "@type": "ImageObject",
            "url": "/images/logo-mark.png"
          },
          "description": "Plastic-free steel water bottles and vegan oral care, made for India. Food-grade 304 stainless steel, zero plastic from product to packaging.",
          "foundingLocation": {
            "@type": "Place",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "hello@eqologic.com"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://eqologiq.kite.space/#website",
          "name": "Eqo Logiq",
          "url": "https://eqologiq.kite.space/",
          "publisher": {
            "@id": "https://eqologiq.kite.space/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://eqologiq.kite.space/shop.html?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
    ` }} />
<div>
  <HomePageEffects />
  <main>
    {/* 2. HERO (Curtain Layer 1) */}
    {/* Z-index 20 keeps it above the transition word. It scrolls normally. */}
    <section className="relative z-20 h-[100svh] w-full bg-brand-text overflow-hidden">
      <img src="/images/hero-banner.png" alt="Eqo Logiq premium sustainable product hero" className="absolute inset-0 w-full h-full object-cover object-right md:object-right lg:object-center animate-slow-breathe" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="absolute bottom-0 left-0 right-0 pb-10 md:pb-14 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[36.96rem] reveal active">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-8" style={{fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700}}>
              Built for every day.<br />Made without compromise.
            </h1>
            <div className="flex flex-col items-stretch lg:items-start gap-4">
              <p className="text-white/80 font-body text-sm">
                Plastic-free steel bottles and daily essentials. Food-grade 304 stainless steel, no plastic in any component, built for daily use.
              </p>
              <a href="#shop" className="inline-flex items-center gap-2.5 justify-center px-8 py-4 bg-brand-primary text-white font-body font-medium rounded-full hover:bg-[#005580] active:bg-[#004060] transition-colors duration-200 shadow-[0_4px_24px_rgba(0,107,150,0.35)] w-full lg:w-auto">
                Check Out Collection
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="text-white/60 font-body text-xs">
                BPA free · Food grade steel · Vegan · Zero plastic in product and packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 3. THE SWITCH — Editorial comparison section */}
    <section className="relative z-20 bg-brand-base w-full pt-24 md:pt-32 pb-0 rounded-t-3xl md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <p className="kicker mb-4 flex items-center gap-4" style={{color: '#99BD05'}}>
              <span className="w-8 h-[1px]" style={{background: '#99BD05'}} />
              The Switch
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-brand-text">
              What changes when you remove plastic from daily use.
            </h2>
          </div>
        </div>
      </div>
      {/* Two-column comparison: before / after */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* BEFORE card — light greige, restrained */}
          <div className="relative overflow-hidden rounded-2xl bg-[#DEDAD3] reveal" style={{minHeight: 420}}>
            <img src="/images/inline-plastic.png" alt="Single-use plastic bottles" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(30,30,30,0.7) 0%, transparent 55%)'}} />
            <div className="relative h-full flex flex-col justify-between p-8 md:p-10" style={{minHeight: 420}}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-widest w-fit" style={{background: 'rgba(180,30,30,0.25)', color: '#B41E1E', border: '1px solid rgba(180,30,30,0.45)'}}>With plastic</span>
              <div>
                <p className="font-sans font-bold text-2xl md:text-3xl text-white leading-tight mb-3">With plastic</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2.5 font-body text-sm" style={{color: 'rgba(255,255,255,0.55)'}}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: '#FF6060'}} />BPA and phthalates from plastic leach directly into liquids especially under heat or repeated use.</li>
                  <li className="flex items-center gap-2.5 font-body text-sm" style={{color: 'rgba(255,255,255,0.55)'}}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: '#FF6060'}} />Microplastics from plastic bottles have been found in human blood, lungs, and drinking water, causing life threatening diseases.</li>
                  <li className="flex items-center gap-2.5 font-body text-sm" style={{color: 'rgba(255,255,255,0.55)'}}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: '#FF6060'}} />Plastic degrades within months, shedding harmful particles into every drink along the way.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* AFTER card — dark green, product-led */}
          <div className="relative overflow-hidden rounded-2xl reveal" style={{minHeight: 480, background: '#0D1F0E'}}>
            <img src="/images/feature-lifestyle.png" alt="Eqo Logiq steel bottle in use" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(153,189,5,0.55) 0%, rgba(0,107,150,0.15) 100%)'}} />
            <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)'}} />
            <div className="relative h-full flex flex-col justify-between p-8 md:p-10" style={{minHeight: 480}}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-widest w-fit" style={{background: 'rgba(153,189,5,0.5)', color: '#A8E6A3', border: '1px solid rgba(153,189,5,0.6)'}}>With Eqo Logic</span>
              <div>
                <p className="font-sans font-bold text-2xl md:text-3xl text-white leading-tight mb-3">With Eqo Logic</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2.5 font-body text-sm" style={{color: 'rgba(255,255,255,0.70)'}}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: '#A8E6A3'}} />304 food-grade stainless steel. No leaching under heat or repeated use.</li>
                  <li className="flex items-center gap-2.5 font-body text-sm" style={{color: 'rgba(255,255,255,0.70)'}}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: '#A8E6A3'}} />No plastic in any component. Outer body, inner body, lid, cap, and seal are all steel or food-grade silicone.</li>
                  <li className="flex items-center gap-2.5 font-body text-sm" style={{color: 'rgba(255,255,255,0.70)'}}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: '#A8E6A3'}} />Designed for a minimum 10-year lifespan under daily use conditions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4. FEATURED PRODUCTS (Primary Grid 3-up) */}
    <section id="shop" className="relative z-30 w-full py-24 md:py-40" style={{background: 'linear-gradient(180deg,#F7F5F0 0%,#F0EEF8 100%)'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <p className="kicker mb-4 flex items-center gap-4" style={{color: '#006B96'}}>
              <span className="w-8 h-[1px] bg-[#006B96] hover:bg-[#005580]" />
              Daily Essentials
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-text">What we make.</h2>
            <p className="font-body text-brand-text/55 text-sm mt-3">Plastic-free steel bottles and oral care. Thirteen products currently available.</p>
          </div>
          <Link href="/shop/" className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-primary hover:text-[#005580] transition-colors group self-start md:self-auto">
            View all products
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
        <HomeProductGrid />
      </div>
    </section>
    {/* ZERO PLASTIC PROOF */}
    <section className="relative z-30 w-full py-24 md:py-32" style={{background: '#1C1C1C'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-stretch gap-0">
          {/* Left column — image */}
          <div className="w-full md:w-1/2 reveal flex items-center justify-center p-0 md:p-8 mb-10 md:mb-0">
            <div className="relative w-full">
              <img src="/images/zero-plastic-components.png" alt="Eqo Logiq zero plastic components" className="w-full h-auto object-contain" />
            </div>
          </div>
          {/* Vertical divider — desktop only */}
          <div className="hidden md:block flex-shrink-0 w-px self-stretch" style={{background: 'rgba(255,255,255,0.10)'}} />
          {/* Right column — text */}
          <div className="w-full md:w-1/2 reveal flex flex-col justify-center px-0 md:pl-12 md:pr-0 text-center md:text-left" style={{transitionDelay: '100ms'}}>
            <p className="kicker mb-4" style={{color: '#006B96', letterSpacing: '0.18em'}}>EVERY COMPONENT. ZERO PLASTIC.</p>
            <h2 className="font-sans font-bold text-white mb-6" style={{fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: '1.05'}}>
              Not a drop of plastic.<br />Not one hidden compromise.
            </h2>
            <p className="font-body mb-8 mx-auto md:mx-0" style={{fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: '1.7', maxWidth: 420}}>
              The outer wall. The inner wall. The lid. The seal. The base. Every single component of every Eqo Logiq product is stainless steel or food-grade silicone. We did not make a single exception.
            </p>
            {/* Component list */}
            <ul className="inline-flex flex-col gap-3 text-left mx-auto md:mx-0 mb-8">
              <li className="flex items-center gap-3 font-body font-medium text-sm" style={{color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Outer body: 304 stainless steel
              </li>
              <li className="flex items-center gap-3 font-body font-medium text-sm" style={{color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Inner body: 304 stainless steel
              </li>
              <li className="flex items-center gap-3 font-body font-medium text-sm" style={{color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Lid and cap: 304 stainless steel
              </li>
              <li className="flex items-center gap-3 font-body font-medium text-sm" style={{color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Seal ring: food-grade silicone
              </li>
              <li className="flex items-center gap-3 font-body font-medium text-sm" style={{color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Packaging: recycled kraft cardboard
              </li>
            </ul>
            {/* CTA text link */}
            <a href="/shop/" className="font-body font-medium text-sm" style={{color: '#006B96'}}>See what we make →</a>
          </div>
        </div>
        {/* Divider */}
        <div className="mt-16 mb-16 w-full" style={{height: 1, background: 'rgba(255,255,255,0.12)'}} />
        {/* Second layout block — text left, image right */}
        <div className="flex flex-col-reverse md:flex-row md:items-stretch gap-0">
          {/* Left column — text */}
          <div className="w-full md:w-1/2 reveal flex flex-col justify-center px-0 md:pr-12 md:pl-0 py-16 text-left">
            <p className="kicker mb-4" style={{color: '#006B96', letterSpacing: '0.18em'}}>THE CAP RING</p>
            <h2 className="font-sans font-bold text-white mb-5" style={{fontSize: 'clamp(1.75rem,3vw,2.75rem)', lineHeight: '1.1'}}>
              Silicone, not plastic.<br />It is not a small detail.
            </h2>
            <p className="font-body mb-7" style={{fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: '1.75', maxWidth: 400}}>
              The cap ring is food-grade silicone. Unlike plastic, it does not break into micro pieces over time. It contains no BPA and no BPS. It is detachable: remove it, clean it, put it back. That is the whole point.
            </p>
            {/* Detail strip */}
            <ul className="flex flex-col" style={{gap: 10}}>
              <li className="flex items-center gap-3 font-body font-medium" style={{fontSize: 14, color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Does not break into micro pieces
              </li>
              <li className="flex items-center gap-3 font-body font-medium" style={{fontSize: 14, color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Free of BPA and BPS
              </li>
              <li className="flex items-center gap-3 font-body font-medium" style={{fontSize: 14, color: 'rgba(255,255,255,0.80)'}}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#006B96] hover:bg-[#005580]" />
                Detachable for easy cleaning
              </li>
            </ul>
          </div>
          {/* Right column — image */}
          <div className="w-full md:w-1/2 reveal flex items-center justify-center p-0 mb-10 md:mb-0" style={{transitionDelay: '100ms'}}>
            <div className="relative w-full overflow-hidden" style={{borderRadius: 12, aspectRatio: '4/3', minHeight: 320}}>
              <img src="/images/silicone-cap-ring.png" alt="Food-grade silicone cap ring" className="absolute inset-0 w-full h-full object-contain" style={{borderRadius: 12, display: 'block'}} />
              {/* Warm vignette overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{borderRadius: 12, background: 'radial-gradient(ellipse at center, transparent 55%, rgba(28,28,28,0.55) 100%)'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 5. WHY DIFFERENT — Bento grid */}
    <section className="relative z-30 w-full py-24 md:py-40" style={{background: '#F2EFE8'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 reveal pl-6" style={{borderLeft: '3px solid #006B96'}}>
          <p className="kicker mb-4 flex items-center gap-4" style={{color: '#99BD05'}}>
            <span className="w-8 h-[1px]" style={{background: '#99BD05'}} />
            Why These Products
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-text">What these products are made of and why it matters.</h2>
        </div>
        {/* Bento grid: rows of varying widths */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Tile 1: Large — Plastic-Free (lifestyle image backdrop) */}
          <div className="md:col-span-7 relative overflow-hidden rounded-2xl reveal" style={{minHeight: 340}}>
            <img src="/images/plastic-free-products.png" alt="Plastic-free Eqo Logiq products" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg,rgba(153,189,5,0.75) 0%,rgba(0,0,0,0.45) 100%)'}} />
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-end" style={{minHeight: 340}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{background: 'rgba(168,230,163,0.2)', border: '1px solid rgba(168,230,163,0.3)'}}>
                <ShieldCheck className="w-5 h-5" style={{color: '#A8E6A3'}} aria-hidden="true" />
              </div>
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-white leading-tight mb-2">100% Plastic-Free</h3>
              <p className="font-body text-white/65 text-sm max-w-xs">No plastic is used in any product component or packaging. This applies to every item in the range without exception.</p>
            </div>
          </div>
          {/* Tile 2: Narrow — Strictly Vegan (solid green) */}
          <div className="md:col-span-5 relative overflow-hidden rounded-2xl reveal" style={{minHeight: 340, background: '#99BD05'}}>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")'}} />
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-between" style={{minHeight: 340}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'rgba(34,34,34,0.12)'}}>
                <Leaf className="w-5 h-5" style={{color: '#222222'}} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-2xl md:text-3xl leading-tight mb-2" style={{color: '#222222'}}>Strictly Vegan</h3>
                <p className="font-body text-sm max-w-xs" style={{color: 'rgba(34,34,34,0.65)'}}>No animal byproducts are used in materials, adhesives, or packaging. This makes the products suitable for vegan daily use.</p>
              </div>
            </div>
          </div>
          {/* Tile 3: Medium — Food-Grade Safe (cobalt) */}
          <div className="md:col-span-4 relative overflow-hidden rounded-2xl reveal" style={{minHeight: 280, background: '#006B96'}}>
            <div className="relative p-8 h-full flex flex-col justify-between" style={{minHeight: 280}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'rgba(255,255,255,0.15)'}}>
                <FlaskConical className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white leading-tight mb-2">Food-Grade Safe</h3>
                <p className="font-body text-white/65 text-xs max-w-xs">304 food-grade stainless steel and food-grade silicone. No plastic in any component.</p>
              </div>
            </div>
          </div>
          {/* Tile 4: Medium — Indian Conditions (warm surface) */}
          <div className="md:col-span-4 relative overflow-hidden rounded-2xl reveal" style={{minHeight: 280, background: '#2B2B2B'}}>
            <img src="/images/built-for-india.png" alt="Built for India" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(160deg,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.6) 100%)'}} />
            <div className="relative p-8 h-full flex flex-col justify-between" style={{minHeight: 280}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'rgba(255,200,80,0.15)'}}>
                <ThermometerSun className="w-5 h-5" style={{color: '#FFC850'}} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl md:text-2xl text-white leading-tight mb-2">Built for India</h3>
                <p className="font-body text-white/60 text-xs max-w-xs">Designed for Indian conditions and daily use. Product composition independently verified through laboratory testing.</p>
              </div>
            </div>
          </div>
          {/* Tile 5: Small — Built to Last (warm off-white) */}
          <div className="md:col-span-4 relative overflow-hidden rounded-2xl reveal" style={{minHeight: 280, background: '#EAE6DF', border: '1.5px solid rgba(0,107,150,0.15)'}}>
            <div className="relative p-8 h-full flex flex-col justify-between" style={{minHeight: 280}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'rgba(0,107,150,0.1)', border: '1px solid rgba(0,107,150,0.2)'}}>
                <Infinity className="w-5 h-5 text-brand-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl md:text-2xl text-brand-text leading-tight mb-2">Built to Last</h3>
                <p className="font-body text-brand-text/55 text-xs max-w-xs">Designed for years of daily use, not seasonal replacement. The 10-year lifespan figure is based on standard use under normal conditions.</p>
                <p className="font-sans font-bold text-3xl text-brand-primary mt-4">10<span className="text-brand-primary/40 text-xl font-body font-normal"> yr lifespan</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 6. IMPACT (High-Contrast Metrics Split) */}
    <section className="relative z-30 w-full flex flex-col md:flex-row">
      {/* Left: two-zone metric showcase */}
      <div className="w-full md:w-1/2 flex flex-col" style={{minHeight: '60vh'}}>
        {/* Upper half: dark navy */}
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-end" style={{background: '#004F70'}}>
          <div className="reveal">
            <p className="kicker text-white/40 mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/25" />
              The Numbers
            </p>
            <div>
              <h2 className="font-sans font-bold text-[18vw] md:text-[10vw] leading-none text-white tracking-tighter">0</h2>
              <p className="font-sans font-bold text-xl text-white/75 -mt-2">Grams of plastic used.</p>
            </div>
          </div>
        </div>
        {/* Lower half: standard cobalt */}
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center bg-brand-primary">
          <div className="reveal border-t border-white/15 pt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="font-sans font-bold text-5xl md:text-6xl text-white leading-none">10K+</p>
              <p className="font-body text-sm text-white/60 mt-2">Households plastic-free</p>
            </div>
            <div>
              <p className="font-sans font-bold text-5xl md:text-6xl text-white leading-none">24h</p>
              <p className="font-body text-sm text-white/60 mt-2">Cold retention, certified</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Forest Green — editorial narrative */}
      <div className="w-full md:w-1/2 flex flex-col" style={{minHeight: '60vh'}}>
        {/* Top: deep green */}
        <div className="flex-1 p-12 md:p-20 flex flex-col justify-center" style={{background: '#0D1F0E'}}>
          <div className="max-w-md reveal">
            <p className="kicker mb-6 flex items-center gap-4" style={{color: '#A8E6A3'}}>
              <span className="w-8 h-[1px]" style={{background: '#A8E6A3'}} />
              The Reality
            </p>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white leading-tight mb-6">
              The numbers.
            </h3>
            <p className="font-body text-base text-white/60 mb-8">
              These are the documented figures for this product category.
            </p>
            <Link href="/qrash-qourse/" className="inline-flex items-center gap-2 font-sans font-bold text-sm hover:opacity-80 transition-opacity group" style={{color: '#A8E6A3'}}>
              Read our impact report 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
        {/* Bottom: image strip */}
        <div className="h-48 md:h-56 overflow-hidden relative">
          <img src="/images/daily-use.png" alt="Eqo Logiq in daily use" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(13,31,14,0.8) 0%, transparent 60%)'}} />
        </div>
      </div>
    </section>
    {/* MARKETPLACE AVAILABILITY */}
    <section className="relative z-30 w-full py-10 md:py-20" style={{background: '#F7F5F0', borderTop: '1px solid rgba(34,34,34,0.08)'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Mobile: label top, logos below. Tablet+: single row */}
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between md:gap-0">
          {/* Label */}
          <p className="kicker text-brand-text/40" style={{letterSpacing: '0.18em'}}>Also available on</p>
          {/* Logos row */}
          <div className="flex items-center justify-center gap-10 md:gap-0 md:contents">
            {/* Myntra */}
            <a href="#" aria-label="Myntra" className="flex items-center opacity-50 hover:opacity-80 transition-opacity duration-300 md:ml-auto">
              <img src="/images/myntra-logo.png" alt="Myntra" className="h-8 w-auto object-contain" />
            </a>
            {/* Amazon */}
            <a href="#" aria-label="Amazon" className="flex items-center opacity-50 hover:opacity-80 transition-opacity duration-300 md:ml-16">
              <img src="/images/amazon-logo.png" alt="Amazon" className="h-8 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* 8. COMMUNITY TESTIMONIALS */}
    <section className="relative z-30 w-full pt-24 md:pt-32 pb-0 overflow-hidden" style={{background: '#F7F5F0', borderTop: '3px solid #006B96'}}>
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 reveal">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="kicker mb-6 flex items-center gap-3" style={{color: '#006B96'}}>
              <span className="w-6 h-px bg-[#006B96] hover:bg-[#005580]" />
              Customer reviews
            </p>
            <h2 className="font-sans font-bold leading-[1.02] tracking-tight text-brand-text" style={{fontSize: 'clamp(2.4rem,5vw,4rem)'}}>Customer reviews.</h2>
            <p className="font-body text-brand-text/55 text-sm mt-3">Reviews from verified purchases.</p>
          </div>
        </div>
      </div>
      {/* Mobile swipe cue — visible only on phones */}
      <div className="md:hidden max-w-[1400px] mx-auto px-6 mb-4 flex items-center justify-end gap-1.5">
        <span className="font-body text-[10px] uppercase tracking-widest text-brand-text/35">Swipe</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-text/35"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
      </div>
      {/* Card row: horizontal scroll on mobile, fixed layout on desktop */}
      {/* Desktop: left text card | center featured card | right text card | partial peek card */}
      <div className="relative">
        {/* Desktop layout */}
        <div className="hidden md:block max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="grid grid-cols-[1fr_1.55fr_1fr] gap-6 items-stretch">
            {/* Left text card — asymmetric offset via padding-top, stretches to full column height */}
            <div className="reveal rounded-2xl p-8 pt-16 flex flex-col justify-between" style={{background: '#EDEAE3'}}>
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center font-bold text-white text-sm bg-[#006B96] hover:bg-[#005580]">N</div>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-text">Nandita R.</p>
                  <p className="font-body text-xs text-brand-text/45">Fitness enthusiast · Pune</p>
                </div>
              </div>
              {/* Quote */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="font-body text-brand-text/80 leading-relaxed text-base mb-6">"My gym bag used to smell like old plastic. Switched to the 750ml and it's been six months. Cold water every single session, zero taste issues. Genuinely can't go back."</p>
              </div>
              {/* Product tag */}
              <div className="flex items-center gap-2 pt-4 border-t border-brand-text/8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(0,107,150,0.08)', color: '#006B96'}}>Steel Bottle 750ml</span>
                <span className="font-body text-[10px] text-brand-text/30">Verified purchase</span>
              </div>
            </div>
            {/* Center featured card — image-heavy, drives the row height */}
            <div className="reveal rounded-2xl overflow-hidden relative group" style={{minHeight: 520}}>
              {/* Background image */}
              <img src="/images/testimonial-priya-crop.png" alt="Priya M. — Mumbai, Eqo Logiq customer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.72) 100%)'}} />
              {/* Story-reel accent (subtle, not a real button) */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center" style={{background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={14} viewBox="0 0 12 14" fill="white"><path d="M1 1.5l10 5-10 5V1.5z" /></svg>
              </div>
              {/* Top: profile avatar */}
              <div className="absolute top-5 left-5">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 flex items-center justify-center font-bold text-white text-sm bg-[#006B96] hover:bg-[#005580]">P</div>
              </div>
              {/* Bottom: quote and name */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-body text-white leading-relaxed text-base mb-4">"I didn't buy it for the planet. I bought it because every plastic bottle I owned made my water taste like the container. This just works, on every level."</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-sm text-white">Priya M.</p>
                    <p className="font-body text-xs text-white/55">Daily commuter · Mumbai</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(0,107,150,0.5)', color: 'white', border: '1px solid rgba(0,107,150,0.6)'}}>★ 5.0</span>
                </div>
              </div>
            </div>
            {/* Right column: two stacked cards filling the full column height */}
            <div className="flex flex-col gap-6">
              {/* Right main card — grows to take most of the space */}
              <div className="reveal rounded-2xl p-8 flex flex-col flex-1" style={{background: '#EDEAE3'}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs" style={{background: '#2B4C2B'}}>R</div>
                  <div>
                    <p className="font-sans font-bold text-sm text-brand-text">Rahul S.</p>
                    <p className="font-body text-xs text-brand-text/45">Designer · Bengaluru</p>
                  </div>
                </div>
                <p className="font-body text-brand-text/75 leading-relaxed text-sm flex-1">"Switched my entire bathroom over. The tongue scraper alone is worth it. Feels like an actual tool, not something that'll snap after a week."</p>
                <div className="mt-6 pt-4 border-t border-brand-text/8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(0,107,150,0.08)', color: '#006B96'}}>Oral Care</span>
                  <span style={{color: '#F5A623', fontSize: '0.72rem', letterSpacing: '0.5px'}}>★★★★★</span>
                </div>
              </div>
              {/* Peek card — fills remaining height */}
              <div className="reveal rounded-2xl p-8 flex flex-col flex-1" style={{background: '#E5E2D9'}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs" style={{background: '#5A4A3A'}}>A</div>
                  <div>
                    <p className="font-sans font-bold text-sm text-brand-text">Aarav K.</p>
                    <p className="font-body text-xs text-brand-text/45">Remote worker · Hyderabad</p>
                  </div>
                </div>
                <p className="font-body text-brand-text/70 leading-relaxed text-sm flex-1">"The bottle sits on my desk every single day. Colleagues ask about it constantly. Bought two more for family."</p>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile layout: horizontal scroll strip */}
        <div className="md:hidden px-6 pb-20">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-none" style={{scrollbarWidth: 'none'}}>
            {/* Left card */}
            <div className="snap-start flex-shrink-0 w-[82vw] rounded-2xl p-6 flex flex-col" style={{background: '#EDEAE3', minHeight: 320}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm bg-[#006B96] hover:bg-[#005580]">N</div>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-text">Nandita R.</p>
                  <p className="font-body text-xs text-brand-text/45">Fitness enthusiast · Pune</p>
                </div>
              </div>
              <p className="font-body text-brand-text/75 leading-relaxed text-sm flex-1">"My gym bag used to smell like old plastic. Switched to the 750ml. Cold water every session, zero taste issues."</p>
              <div className="mt-6 pt-4 border-t border-brand-text/8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(0,107,150,0.08)', color: '#006B96'}}>Steel Bottle 750ml</span>
              </div>
            </div>
            {/* Featured card mobile */}
            <div className="snap-start flex-shrink-0 w-[82vw] rounded-2xl overflow-hidden relative" style={{minHeight: 380}}>
              <img src="/images/proof-1.png" alt="Priya M. — Eqo Logiq customer" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom,rgba(0,0,0,0.05) 30%,rgba(0,0,0,0.75) 100%)'}} />
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center font-bold text-white text-sm bg-[#006B96] hover:bg-[#005580]">P</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-white leading-relaxed text-sm mb-3">"Bought it because every plastic bottle made my water taste like the container. This just works."</p>
                <p className="font-sans font-bold text-sm text-white">Priya M. <span className="font-body font-normal text-white/50 text-xs">· Mumbai</span></p>
              </div>
            </div>
            {/* Rahul card mobile */}
            <div className="snap-start flex-shrink-0 w-[82vw] rounded-2xl p-6 flex flex-col" style={{background: '#EDEAE3', minHeight: 320}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs" style={{background: '#2B4C2B'}}>R</div>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-text">Rahul S.</p>
                  <p className="font-body text-xs text-brand-text/45">Designer · Bengaluru</p>
                </div>
              </div>
              <p className="font-body text-brand-text/75 leading-relaxed text-sm flex-1">"Switched my entire bathroom over. The tongue scraper alone is worth it. Feels like an actual tool, not something that'll snap after a week."</p>
              <div className="mt-6 pt-4 border-t border-brand-text/8 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(0,107,150,0.08)', color: '#006B96'}}>Oral Care</span>
                <span style={{color: '#F5A623', fontSize: '0.72rem'}}>★★★★★</span>
              </div>
            </div>
            {/* Aarav peek card mobile */}
            <div className="snap-start flex-shrink-0 w-[72vw] rounded-2xl p-6 flex flex-col" style={{background: '#E5E2D9', minHeight: 280}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs" style={{background: '#5A4A3A'}}>A</div>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-text">Aarav K.</p>
                  <p className="font-body text-xs text-brand-text/45">Remote worker · Hyderabad</p>
                </div>
              </div>
              <p className="font-body text-brand-text/70 leading-relaxed text-sm">"The bottle sits on my desk every day. Colleagues ask about it constantly. Bought two more for family."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PRODUCT STORYTELLING SPLIT (hidden — preserved for future reuse) */}
    <section className="relative z-30 w-full py-24 md:py-40 overflow-hidden" style={{backgroundColor: '#141414', display: 'none'}}>
      {/* Grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23noise)%22 opacity=%220.04%22/%3E%3C/svg%3E")', opacity: '0.5'}} />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)'}} />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LEFT: Product image stack (55%) */}
          <div className="w-full lg:w-[55%] reveal">
            <div className="relative flex flex-col items-center">
              {/* Primary image */}
              <div className="relative w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.02]" style={{aspectRatio: '3/4'}}>
                <img src="/images/laptop-youtube-mockup.png" alt="Premium laptop showing YouTube-style video page" className="w-full h-full object-cover bg-[#1C1C1C]" />
                {/* Cobalt accent strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary" />
              </div>
              {/* Secondary card 1 — lifestyle image */}
              <div className="relative -mt-20 ml-auto mr-4 md:mr-0 md:-mr-8 w-[48%] max-w-[200px] rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.55)] border border-white/5 transition-transform duration-700 hover:-translate-y-1" style={{zIndex: 2}}>
                <img src="/images/feature-lifestyle.png" alt="Eqo Logiq bottle in everyday use" className="w-full aspect-[3/4] object-cover" />
              </div>
              {/* Secondary card 2 — oral care image */}
              <div className="relative -mt-12 mr-auto ml-4 md:ml-0 md:-ml-6 w-[42%] max-w-[170px] rounded-xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-white/5 transition-transform duration-700 hover:-translate-y-1" style={{zIndex: 1}}>
                <img src="/images/proof-2.png" alt="Eqo Logiq oral care on vanity" className="w-full aspect-square object-cover" />
              </div>
            </div>
          </div>
          {/* RIGHT: Text block (45%) */}
          <div className="w-full lg:w-[45%] reveal">
            <p className="kicker mb-8 flex items-center gap-4" style={{color: '#006B96'}}>
              <span className="w-8 h-[1px] bg-[#006B96] hover:bg-[#005580]" />
              Built Different
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8" style={{color: '#F0EDE8'}}>
              Products that earn<br />
              their place<br />
              <span style={{color: 'rgba(240,237,232,0.35)'}}>in your day.</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-4 max-w-sm" style={{color: 'rgba(240,237,232,0.6)'}}>
              Every Eqo Logiq product is built to be the last one you buy. Better materials, better performance, better outcomes. By default.
            </p>
            <p className="font-body text-sm leading-relaxed mb-10 max-w-sm" style={{color: 'rgba(240,237,232,0.38)'}}>
              Designed for Indian conditions. Food-grade safe. Zero plastic, from product to packaging.
            </p>
            {/* Trust line */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(0,107,150,0.15)', border: '1px solid rgba(0,107,150,0.3)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#006B96" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span className="font-body text-xs uppercase tracking-widest" style={{color: 'rgba(240,237,232,0.4)'}}>Trusted by 10,000+ households across India</span>
            </div>
            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#shop" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-bold text-sm transition-colors duration-300 bg-[#006B96] hover:bg-[#005580] text-white">
                Check Out Instagram
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-bold text-sm transition-colors duration-300 bg-white/5 hover:bg-white/10 text-[rgba(240,237,232,0.7)] border border-white/10">
                Visit Our Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

</>
  );
}

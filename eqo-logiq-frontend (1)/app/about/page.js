import React from 'react';

export const metadata = {
  title: `Our Story | Eqo Logiq — Plastic-Free Daily Essentials`,
  description: `Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.`,
  alternates: { canonical: `https://eqologiq.kite.space/about.html` },
  openGraph: {
    title: `Our Story | Eqo Logiq — Plastic-Free Daily Essentials`,
    description: `Why Eqo Logiq exists: plastic-free daily essentials built on the premise that superior products naturally lead to better outcomes. No compromises.`,
    images: [{ url: `https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1777921391/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/dblcljacximlbkcgccyk.png` }],
  },
};

export default function Page() {
  return (
    <>
<div>
  {/* SEARCH MODAL */}
  <div id="search-modal" className="fixed inset-0 z-[70] flex flex-col items-center pt-24 px-4 pointer-events-none opacity-0 transition-opacity duration-200" style={{background: 'rgba(34,34,34,0.6)', backdropFilter: 'blur(6px)'}}>
    <div className="w-full max-w-2xl bg-brand-base rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-brand-text/10">
        <i data-lucide="search" className="w-5 h-5 text-brand-text/40 flex-shrink-0" />
        <input id="search-input" type="text" placeholder="Search products, pages…" autoComplete="off" className="flex-1 bg-transparent font-body text-base text-brand-text placeholder-brand-text/35 outline-none" />
        <button id="search-close" className="p-1 text-brand-text/40 hover:text-brand-text transition-colors" aria-label="Close search"><i data-lucide="x" className="w-5 h-5" /></button>
      </div>
      <div id="search-results" className="max-h-[60vh] overflow-y-auto py-2" />
    </div>
  </div>
  <main className="pt-20">
    {/* HERO STATEMENT */}
    <section className="relative overflow-hidden min-h-[55vh] flex items-end" style={{background: '#0D1F0E'}}>
      <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1600,c_fill,g_auto/v1778268332/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/p791vnujzavosqtj0yla.png" alt="Eqo Logiq lifestyle" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(13,31,14,0.9) 0%,rgba(13,31,14,0.2) 100%)'}} />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-20 reveal">
        <p className="kicker mb-6 flex items-center gap-3" style={{color: '#A8E6A3'}}><span className="w-6 h-px" style={{background: '#A8E6A3'}} />Our Story</p>
        <h1 className="font-sans font-bold text-4xl md:text-6xl text-white leading-[1.05] tracking-tight max-w-3xl">Eqo Logiq makes plastic-free steel bottles and daily essentials.</h1>
      </div>
    </section>
    {/* FOUNDER SECTION */}
    <section className="bg-brand-base py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="lg:w-5/12 reveal">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/v1780464593/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/ejegazuw6zl8pyktsifn.png" alt="Founder" className="w-full h-full object-cover" style={{transform: 'scale(1.1)', transformOrigin: 'top center', objectPosition: 'top'}} />
            </div>
          </div>
          {/* Statement */}
          <div className="lg:w-7/12 reveal" style={{transitionDelay: '100ms'}}>
            <p className="kicker text-brand-primary mb-6 flex items-center gap-3"><span className="w-6 h-px bg-brand-primary" />A note from the founder</p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-10 leading-tight">Health and sustainability were always important to me, until I saw how badly the basics were failing both.</h2>
            <div className="space-y-6 font-body text-brand-text/70 leading-relaxed text-lg">
              <p>Being into health &amp; sustainability from an early age, after reading about the damage to us and the environment.</p>
              <p>I was shocked to see there's still no truly plastic-free option in something as basic and necessary as water bottle considering that its the one thing we consume the most and also see being littered the most.</p>
              <p>And whenever shopping for sustainable its easier to see 'green branding and claims' but hard to see the real information about the material used.</p>
              <p>So to bridge the gap and make an impact I started Eqo Logiq.</p>
              <p>Homegrown and Bootstrapped.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-brand-text/10">
              <p className="font-sans font-bold text-lg text-brand-text">Vaibhav</p>
              <p className="font-body text-sm text-brand-text/50 mt-1">Founder, Eqo Logiq</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* BRAND VALUES */}
    <section className="py-24 md:py-40 overflow-hidden" style={{background: '#F2EFE8'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* LEFT: Stacked overlapping images */}
          <div className="w-full lg:w-[44%] flex-shrink-0 reveal">
            <div className="relative mx-auto" style={{maxWidth: 420, minHeight: 480}}>
              {/* Back image — taller, anchored top-right */}
              <div className="absolute top-0 right-0 w-[72%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(34,34,34,0.12)]" style={{aspectRatio: '3/4'}}>
                <img src="https://static.kite.ai/image/upload/c_crop,x_0.289,y_0.000,w_0.422,h_1.000/v1778268332/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/p791vnujzavosqtj0yla.png" alt="Eqo Logiq products — quality materials" className="w-full h-full object-cover" />
              </div>
              {/* Front image — slightly smaller, offset to bottom-left, overlaps back */}
              <div className="absolute bottom-0 left-0 w-[62%] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(34,34,34,0.16)]" style={{aspectRatio: '2/3', zIndex: 2}}>
                <img src="https://static.kite.ai/image/upload/c_crop,x_0.086,y_0.000,w_0.828,h_1.000/v1777952952/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/ujtxtyda6cbyz0mqt1pz.png" alt="Eqo Logiq — intentional daily use" className="w-full h-full object-cover" />
                {/* Subtle cobalt accent strip at base */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{background: '#006B96'}} />
              </div>
            </div>
          </div>
          {/* RIGHT: Content column */}
          <div className="w-full lg:w-[56%] reveal" style={{transitionDelay: '100ms'}}>
            {/* Eyebrow */}
            <p className="kicker mb-6 flex items-center gap-3" style={{color: '#006B96'}}>
              <span className="w-6 h-px" style={{background: '#006B96'}} />
              Our Principles
            </p>
            {/* Heading */}
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-text leading-[1.05] tracking-tight mb-6">
              What we use and why.
            </h2>
            {/* Supporting text */}
            <p className="font-body text-brand-text/60 text-base leading-relaxed mb-10 max-w-md">
              Every product uses 304 food-grade stainless steel or food-grade silicone. No plastic in any component.
            </p>
            {/* Four principles — 2×2 grid, icon + title only */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(0,107,150,0.1)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#006B96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="font-sans font-bold text-sm text-brand-text">Tested for daily use including Indian summer conditions.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(0,107,150,0.1)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#006B96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="font-sans font-bold text-sm text-brand-text">304 food-grade stainless steel, food-grade silicone, no plastic.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(0,107,150,0.1)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#006B96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="font-sans font-bold text-sm text-brand-text">Tested for Indian climate and daily use conditions.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(0,107,150,0.1)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#006B96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="font-sans font-bold text-sm text-brand-text">Designed for years of daily use, not seasonal replacement.</p>
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-brand-text/10 mb-8" />
            {/* Founder row + CTA */}
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-brand-surface flex items-center justify-center font-bold text-brand-text text-sm">V</div>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-text">Vaibhav</p>
                  <p className="font-body text-xs text-brand-text/45">Founder, Eqo Logiq</p>
                </div>
              </div>
              <a href="/shop/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors duration-200">
                Shop the Collection
                <i data-lucide="arrow-right" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TIMELINE */}
    <section className="bg-brand-base py-24 md:py-40 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: "\n        .tl-item {\n          position: relative;\n          display: flex;\n          align-items: flex-start;\n          gap: 0;\n          border-top: 1px solid rgba(var(--color-brand-text-rgb, 34,34,34), 0.10);\n          padding: 0;\n          cursor: default;\n          transition: background 0.45s cubic-bezier(0.22,1,0.36,1);\n        }\n        .tl-item:last-child { border-bottom: 1px solid rgba(var(--color-brand-text-rgb, 34,34,34), 0.10); }\n        .tl-item:hover { background: #F2EFE8; }\n\n        /* Year column */\n        .tl-year {\n          flex-shrink: 0;\n          width: 7rem;\n          padding: 2.25rem 0 2.25rem 0;\n          font-family: var(--font-body, sans-serif);\n          font-size: 0.65rem;\n          letter-spacing: 0.2em;\n          text-transform: uppercase;\n          color: rgba(34,34,34,0.38);\n          transition: color 0.35s ease;\n          padding-right: 2rem;\n        }\n        .tl-item:hover .tl-year { color: rgba(34,34,34,0.55); }\n\n        /* Index number */\n        .tl-index {\n          flex-shrink: 0;\n          font-family: var(--font-sans, sans-serif);\n          font-size: clamp(3.5rem, 6vw, 5.5rem);\n          font-weight: 700;\n          line-height: 1;\n          color: rgba(34,34,34,0.07);\n          width: 7rem;\n          padding: 1.5rem 2rem 1.5rem 0;\n          transition: color 0.45s cubic-bezier(0.22,1,0.36,1);\n          user-select: none;\n        }\n        .tl-item:hover .tl-index { color: rgba(0,107,150,0.18); }\n\n        /* Main content */\n        .tl-content {\n          flex: 1;\n          padding: 2.25rem 2rem 2.25rem 1.5rem;\n          min-width: 0;\n        }\n        .tl-heading {\n          font-family: var(--font-sans, sans-serif);\n          font-weight: 700;\n          font-size: clamp(1.25rem, 2.5vw, 1.75rem);\n          color: #222;\n          line-height: 1.1;\n          letter-spacing: -0.02em;\n          margin: 0;\n          transition: color 0.35s ease;\n        }\n        .tl-item:hover .tl-heading { color: #0a0a0a; }\n\n        /* Reveal body */\n        .tl-body {\n          overflow: hidden;\n          max-height: 0;\n          opacity: 0;\n          transform: translateY(6px);\n          transition:\n            max-height 0.55s cubic-bezier(0.22,1,0.36,1),\n            opacity 0.45s ease 0.05s,\n            transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.05s;\n        }\n        .tl-item:hover .tl-body {\n          max-height: 20rem;\n          opacity: 1;\n          transform: translateY(0);\n        }\n        /* Touch / mobile: expand via JS-toggled class */\n        .tl-item.tl-open .tl-body {\n          max-height: 40rem;\n          opacity: 1;\n          transform: translateY(0);\n        }\n        .tl-item.tl-open .tl-heading { color: #0a0a0a; }\n        .tl-item.tl-open .tl-year { color: rgba(34,34,34,0.55); }\n        .tl-item.tl-open .tl-index { color: rgba(0,107,150,0.18); }\n        .tl-item.tl-open { background: #F2EFE8; }\n        .tl-item.tl-open .tl-arrow svg {\n          stroke: #006B96;\n          transform: rotate(0deg);\n        }\n        .tl-body-inner {\n          padding-top: 0.85rem;\n          font-family: var(--font-body, sans-serif);\n          font-size: 1rem;\n          line-height: 1.7;\n          color: rgba(34,34,34,0.62);\n        }\n\n        /* Arrow indicator */\n        .tl-arrow {\n          flex-shrink: 0;\n          padding: 2.25rem 0;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n        .tl-arrow svg {\n          width: 20px;\n          height: 20px;\n          stroke: rgba(34,34,34,0.18);\n          transition: stroke 0.35s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1);\n          transform: rotate(-45deg);\n        }\n        .tl-item:hover .tl-arrow svg {\n          stroke: #006B96;\n          transform: rotate(0deg);\n        }\n\n        /* Vertical progress line */\n        .tl-track {\n          position: absolute;\n          left: 14rem;\n          top: 0;\n          bottom: 0;\n          width: 1px;\n          background: rgba(34,34,34,0.06);\n          pointer-events: none;\n        }\n        @media (max-width: 640px) {\n          .tl-year { width: 4rem; font-size: 0.6rem; }\n          .tl-index { width: 4rem; font-size: 3rem; }\n          .tl-track { left: 8rem; }\n          /* On touch screens, disable hover expansion; rely on .tl-open class instead */\n          .tl-item:hover .tl-body {\n            max-height: 0;\n            opacity: 0;\n            transform: translateY(6px);\n          }\n          .tl-item:hover { background: transparent; }\n          .tl-item.tl-open .tl-body {\n            max-height: 40rem;\n            opacity: 1;\n            transform: translateY(0);\n          }\n          .tl-item.tl-open { background: #F2EFE8; }\n          .tl-item { cursor: pointer; }\n        }\n      " }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 reveal">
          <p className="kicker text-brand-primary mb-4 flex items-center gap-3"><span className="w-6 h-px bg-brand-primary" />How We Got Here</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-brand-text">From the Beginning</h2>
        </div>
        <div className="relative reveal">
          {/* Item 1 */}
          <div className="tl-item">
            <div className="tl-track" />
            <span className="tl-year">2022</span>
            <span className="tl-index">01</span>
            <div className="tl-content">
              <h3 className="tl-heading">The decision.</h3>
              <div className="tl-body">
                <p className="tl-body-inner">After deciding to pursue sustainability as a career, the search began for plastic-free daily essentials. It was surprising to find that not a single steel bottle in the market was completely free of plastic. No matter which bottle you picked, there was plastic in the cap or the coating.</p>
              </div>
            </div>
            <div className="tl-arrow">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
          {/* Item 2 */}
          <div className="tl-item">
            <div className="tl-track" />
            <span className="tl-year">2023</span>
            <span className="tl-index">02</span>
            <div className="tl-content">
              <h3 className="tl-heading">The first bottle.</h3>
              <div className="tl-body">
                <p className="tl-body-inner">Introduced our bottle into a crowded market of water bottles. Reach was slow to begin with.</p>
              </div>
            </div>
            <div className="tl-arrow">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
          {/* Item 3 */}
          <div className="tl-item">
            <div className="tl-track" />
            <span className="tl-year">2024</span>
            <span className="tl-index">03</span>
            <div className="tl-content">
              <h3 className="tl-heading">Learning out loud.</h3>
              <div className="tl-body">
                <p className="tl-body-inner">We made mistakes. From the beginning we were not able to deliver a fully plastic-free experience: there was plastic left in places we had not resolved yet. We came back with a better bottle, more options, and a product that was finally completely plastic-free.</p>
              </div>
            </div>
            <div className="tl-arrow">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
          {/* Item 4 */}
          <div className="tl-item">
            <div className="tl-track" />
            <span className="tl-year">2025</span>
            <span className="tl-index">04</span>
            <div className="tl-content">
              <h3 className="tl-heading">Early traction.</h3>
              <div className="tl-body">
                <p className="tl-body-inner">Started seeing traction, trust, and repeat customers. Growing from feedback.</p>
              </div>
            </div>
            <div className="tl-arrow">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
          {/* Item 5 — Now */}
          <div className="tl-item">
            <div className="tl-track" />
            <span className="tl-year">Now</span>
            <span className="tl-index" style={{color: 'rgba(0,107,150,0.12)'}}>→</span>
            <div className="tl-content">
              <h3 className="tl-heading">Improving and expanding.</h3>
              <div className="tl-body">
                <p className="tl-body-inner">Working on improving the experience and building on what is working.</p>
              </div>
            </div>
            <div className="tl-arrow">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA */}
    <section className="bg-brand-primary py-28 text-center px-6 reveal">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">Ready to switch?</h2>
        <p className="font-body text-white/70 text-lg mb-10">Browse the full range. Free shipping above ₹1,500. Returns within 7 days.</p>
        <a href="/shop/" className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-primary font-sans font-bold text-base rounded-xl hover:bg-brand-surface transition-colors duration-300">Shop the Collection</a>
      </div>
    </section>
  </main>
  <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1"><img src="https://static.kite.ai/image/upload/v1780371329/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/fdqs1mpfbswxcq4trn6k.png" alt="Eqo Logiq" className="h-10 w-auto object-contain mb-6" /><p className="font-body text-white/50 text-sm max-w-xs">Plastic-free steel bottles and daily essentials. No plastic in any product.</p></div>
        <div><h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Shop</h5><ul className="space-y-4"><li><a href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">Steel Bottles</a></li><li><a href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">Oral Care</a></li><li><a href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">Bundles</a></li><li><a href="/contact/" className="font-body text-white/50 hover:text-white transition-colors">Corporate Gifting</a></li></ul></div>
        <div><h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Company</h5><ul className="space-y-4"><li><a href="/about/" className="font-body text-white/50 hover:text-white transition-colors">Our Story</a></li><li><a href="/qrash-qourse/" className="font-body text-white/50 hover:text-white transition-colors">Impact Report</a></li><li><a href="/blog/" className="font-body text-white/50 hover:text-white transition-colors">Blogs</a></li><li><a href="/contact/" className="font-body text-white/50 hover:text-white transition-colors">Contact</a></li></ul></div>
        <div><h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Stay Updated</h5><p className="font-body text-white/50 text-sm mb-4">No spam. Just product drops and real updates.</p><form className="flex border-b border-white/20 pb-2"><input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-white font-body text-sm w-full placeholder:text-white/30" /><button type="submit" className="text-white hover:text-brand-primary transition-colors"><i data-lucide="arrow-right" className="w-5 h-5" /></button></form></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
        <p className="font-body text-white/30 text-sm">© <span id="year" /> Eqo Logiq. All rights reserved.</p>
        <div className="flex items-center gap-6"><a href="/policy.html#privacy" className="font-body text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a><a href="/policy.html#terms" className="font-body text-white/30 hover:text-white text-sm transition-colors">Terms of Use</a><a href="/policy.html#shipping" className="font-body text-white/30 hover:text-white text-sm transition-colors">Shipping Policy</a><a href="/policy.html#returns" className="font-body text-white/30 hover:text-white text-sm transition-colors">Refund &amp; Returns</a></div>
      </div>
    </div>
  </footer>
  {/* CART DRAWER */}
  {/* WhatsApp Support Button */}
  <style dangerouslySetInnerHTML={{__html: "\n    @media (max-width:640px){\n      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }\n      #wa-support-btn svg { width:16px !important; height:16px !important; }\n    }\n  " }} />
</div>

</>
  );
}

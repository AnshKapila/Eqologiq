import React from 'react';


export default function NotFound() {
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
  <main className="min-h-screen flex items-center justify-center px-6 py-32">
    <div className="text-center max-w-lg mx-auto">
      {/* Large 404 display number */}
      <div className="float-anim mb-8 select-none">
        <span className="font-sans font-bold text-brand-text/8 block" style={{fontSize: 'clamp(120px,22vw,200px)', lineHeight: 1, letterSpacing: '-0.04em'}}>404</span>
      </div>
      {/* Offset card that overlays the number */}
      <div className="reveal -mt-16 relative z-10">
        <p className="font-body text-xs uppercase tracking-[0.22em] text-brand-text/40 mb-4">Page not found</p>
        <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-5 leading-tight tracking-tight">This page doesn't exist.</h1>
        <p className="font-body text-brand-text/60 text-base leading-relaxed mb-10">The link you followed may be broken, the page may have moved, or the URL may be mistyped. Let us help you get back on track.</p>
        {/* Primary CTA */}
        <a href="/" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-brand-text text-white font-sans font-bold text-sm hover:bg-brand-primary transition-colors mb-4">
          <i data-lucide="home" className="w-4 h-4" />
          Back to Homepage
        </a>
        {/* Secondary links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6">
          <a href="/shop/" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-primary hover:underline transition-colors">
            <i data-lucide="shopping-bag" className="w-3.5 h-3.5" />
            Browse the Shop
          </a>
          <a href="/faq/" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-text/50 hover:text-brand-primary transition-colors">
            <i data-lucide="circle-help" className="w-3.5 h-3.5" />
            FAQ
          </a>
          <a href="/contact/" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-text/50 hover:text-brand-primary transition-colors">
            <i data-lucide="mail" className="w-3.5 h-3.5" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
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
        <div className="flex flex-wrap items-center gap-6"><a href="/policy.html#privacy" className="font-body text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a><a href="/policy.html#terms" className="font-body text-white/30 hover:text-white text-sm transition-colors">Terms of Use</a><a href="/policy.html#shipping" className="font-body text-white/30 hover:text-white text-sm transition-colors">Shipping Policy</a><a href="/policy.html#returns" className="font-body text-white/30 hover:text-white text-sm transition-colors">Refund &amp; Returns</a></div>
      </div>
    </div>
  </footer>
</div>

</>
  );
}

import React from 'react';

export const metadata = {
  title: `Shop Plastic-Free Steel Water Bottles India | Eqo Logiq`,
  description: `Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.`,
  alternates: { canonical: `https://eqologiq.kite.space/shop.html` },
  openGraph: {
    title: `Shop Plastic-Free Steel Water Bottles India | Eqo Logiq`,
    description: `Browse the full Eqo Logiq range of plastic-free steel water bottles India-made, vegan oral care, and bundles built to outlast everything you've used before.`,
    images: [{ url: `https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png` }],
  },
};

export default function Page() {
  return (
    <>
<div>
  {/* NAV */}
  {/* MOBILE MENU */}
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
    {/* PAGE HEADER */}
    <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 reveal">
        <p className="kicker text-brand-primary mb-4 flex items-center gap-3"><span className="w-6 h-px bg-brand-primary" />The Collection</p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Everything we make.</h1>
        <p className="font-body text-brand-text/60 text-lg max-w-lg">Plastic-free steel water bottles India-made, vegan oral care, and curated bundles. Every product built to perform and designed to outlast.</p>
      </div>
    </section>
    {/* FILTER BAR */}
    <section className="bg-brand-base sticky top-[72px] z-40 py-4 border-b border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-3 overflow-x-auto no-scrollbar">
        <button className="filter-btn active font-body font-medium text-sm px-6 py-2 rounded-full border border-brand-primary whitespace-nowrap" data-filter="all">All Products</button>
        <button className="filter-btn font-body font-medium text-sm px-6 py-2 rounded-full border border-brand-text/20 text-brand-text/70 whitespace-nowrap" data-filter="bottles">Bottles</button>
        <button className="filter-btn font-body font-medium text-sm px-6 py-2 rounded-full border border-brand-text/20 text-brand-text/70 whitespace-nowrap" data-filter="oral">Oral Care</button>
        <button className="filter-btn font-body font-medium text-sm px-6 py-2 rounded-full border border-brand-text/20 text-brand-text/70 whitespace-nowrap" data-filter="bundles">Bundles</button>
      </div>
    </section>
    {/* PRODUCT GRID */}
    <section className="bg-brand-base py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* P1: Steel Water Bottle 750ml — Bestseller */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="bottles">
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600,c_fill,g_auto/c_crop,x_0.000,y_0.033,w_1.000,h_0.747/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Eqo Logiq Steel Water Bottle 750ml" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full bg-brand-secondary text-brand-text">Bestseller</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Steel Water Bottle - 750ml</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Keeps cold for 24h • Food-grade steel • Zero plastic</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹799</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P2: Plastic Free Steel Bottle 1 Litre */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="bottles" style={{transitionDelay: '60ms'}}>
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png" alt="Eqo Logiq Plastic Free Steel Bottle 1 Litre" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Plastic Free Steel Bottle | 1 Litre</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Double wall • 12+ hrs insulation • No plastic</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-primary">₹1,200</span>
                <span className="text-xs text-brand-text/40 font-body line-through">₹2,000</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P3: Steel Flask 500ml */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="bottles" style={{transitionDelay: '120ms'}}>
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Eqo Logiq Steel Flask 500ml" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Steel Flask - 500ml</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Compact • Cupholder-friendly • No-spill seal</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹699</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P4: Kids Steel Bottle 400ml */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="bottles" style={{transitionDelay: '180ms'}}>
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Eqo Logiq Kids Steel Bottle 400ml" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Kids Steel Bottle - 400ml</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Child-safe • Lightweight • BPA-free • Easy flip lid</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹599</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P5: Bamboo Toothbrush */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="oral">
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Eqo Logiq Bamboo Toothbrush" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Bamboo Toothbrush</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Biodegradable handle • BPA-free bristles • Vegan</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹149</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P6: Bamboo Toothbrush Pack of 4 — Best value */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="oral" style={{transitionDelay: '60ms'}}>
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Eqo Logiq Bamboo Toothbrush Pack of 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full bg-brand-secondary text-brand-text">Best value</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Bamboo Toothbrush - Pack of 4</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Family pack • Biodegradable • Plastic-free packaging</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹499</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P7: Stainless Steel Tongue Scraper */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="oral" style={{transitionDelay: '120ms'}}>
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-cleaner.png" alt="Eqo Logiq Stainless Steel Tongue Scraper" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">Stainless Steel Tongue Scraper</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">Food-grade steel • Lasts for life • Zero plastic</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹299</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
          {/* P8: Starter Switch Bundle — New */}
          <div onclick="window.location='/product.html'" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat="bundles" style={{transitionDelay: '60ms'}}>
            <div className="relative aspect-square overflow-hidden bg-brand-surface">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_600/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="The Starter Switch Bundle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full bg-brand-primary text-white">New</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-base text-brand-text mb-1">The Starter Switch Bundle</h3>
              <p className="font-body text-xs text-brand-text/50 mb-3">750ml bottle + Bamboo brush + Tongue scraper</p>
              <div className="mt-auto flex items-baseline gap-2 mb-4">
                <span className="font-sans font-bold text-lg text-brand-text">₹1,199</span>
                <span className="text-xs text-brand-text/40 font-body">onwards</span>
              </div>
              <button onclick="event.stopPropagation();openCartDrawer();" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Load More */}
        <div className="text-center mt-16 reveal">
          <button className="px-10 py-4 border-2 border-brand-primary text-brand-primary font-sans font-bold rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300">Load More Products</button>
        </div>
      </div>
    </section>
    {/* TRUST STRIP */}
    <section className="bg-brand-surface py-12 border-t border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <i data-lucide="shield-check" className="w-6 h-6 text-brand-secondary" />
            <span className="font-body text-sm text-brand-text/70">100% Plastic-Free</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i data-lucide="truck" className="w-6 h-6 text-brand-primary" />
            <span className="font-body text-sm text-brand-text/70">Free shipping above ₹1,500</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i data-lucide="rotate-ccw" className="w-6 h-6 text-brand-primary" />
            <span className="font-body text-sm text-brand-text/70">Easy 7-day returns</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <i data-lucide="lock" className="w-6 h-6 text-brand-primary" />
            <span className="font-body text-sm text-brand-text/70">Secure checkout</span>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* FOOTER */}
  <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <img src="https://static.kite.ai/image/upload/v1780371329/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/fdqs1mpfbswxcq4trn6k.png" alt="Eqo Logiq" className="h-10 w-auto object-contain mb-6" />
          <p className="font-body text-white/50 text-sm max-w-xs">Plastic-free steel bottles and daily essentials. No plastic in any product.</p>
        </div>
        <div>
          <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Shop</h5>
          <ul className="space-y-4">
            <li><a href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">Steel Bottles</a></li>
            <li><a href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">Oral Care</a></li>
            <li><a href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">Bundles</a></li>
            <li><a href="/contact/" className="font-body text-white/50 hover:text-white transition-colors">Corporate Gifting</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Company</h5>
          <ul className="space-y-4">
            <li><a href="/about/" className="font-body text-white/50 hover:text-white transition-colors">Our Story</a></li>
            <li><a href="/qrash-qourse/" className="font-body text-white/50 hover:text-white transition-colors">Impact Report</a></li>
            <li><a href="/blog/" className="font-body text-white/50 hover:text-white transition-colors">Blogs</a></li>
            <li><a href="/contact/" className="font-body text-white/50 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Stay Updated</h5>
          <p className="font-body text-white/50 text-sm mb-4">No spam. Just product drops and real updates.</p>
          <form className="flex border-b border-white/20 pb-2">
            <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-white font-body text-sm w-full placeholder:text-white/30" />
            <button type="submit" className="text-white hover:text-brand-primary transition-colors"><i data-lucide="arrow-right" className="w-5 h-5" /></button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
        <p className="font-body text-white/30 text-sm">© <span id="year" /> Eqo Logiq. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="/policy.html#privacy" className="font-body text-white/30 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="/policy.html#terms" className="font-body text-white/30 hover:text-white text-sm transition-colors">Terms of Use</a>
          <a href="/policy.html#shipping" className="font-body text-white/30 hover:text-white text-sm transition-colors">Shipping Policy</a>
          <a href="/policy.html#returns" className="font-body text-white/30 hover:text-white text-sm transition-colors">Refund &amp; Returns</a>
        </div>
      </div>
    </div>
  </footer>
  <style dangerouslySetInnerHTML={{__html: ".no-scrollbar::-webkit-scrollbar{display:none;}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}" }} />
  {/* CART DRAWER */}
  {/* WhatsApp Support Button */}
  <style dangerouslySetInnerHTML={{__html: "\n    @media (max-width:640px){\n      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }\n      #wa-support-btn svg { width:16px !important; height:16px !important; }\n    }\n  " }} />
</div>

</>
  );
}

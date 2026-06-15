import React from 'react';

export const metadata = {
  title: `Plastic-Free Steel Water Bottle India | Double Wall 1L | Eqo Logiq`,
  description: `Plastic-free steel water bottle India. Double wall vacuum insulated, 1 litre. 304 food-grade stainless steel, no paint, no coating. Keeps cold 12+ hours. Zero plastic.`,
  alternates: { canonical: `https://eqologiq.kite.space/product.html` },
  openGraph: {
    title: `Plastic-Free Steel Water Bottle India | Double Wall 1L | Eqo Logiq`,
    description: `Plastic-free steel water bottle India. Double wall vacuum insulated, 1 litre. 304 food-grade stainless steel, no paint, no coating. Keeps cold 12+ hours. Zero plastic.`,
    images: [{ url: `https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png` }],
  },
};

export function generateStaticParams() {
  return [{ slug: 'example-product' }];
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Plastic Free Steel Bottle | Double Wall | 1 Litre",
    "description": "Plastic-free steel water bottle, double wall vacuum insulated, 1 litre. 304 food-grade stainless steel, no paint, no coating. Keeps cold/hot 12+ hours. Zero plastic in every component.",
    "image": "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png",
    "brand": {
      "@type": "Brand",
      "name": "Eqo Logiq"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "1200",
      "availability": "https://schema.org/InStock",
      "url": "https://eqologiq.kite.space/product.html"
    },
    "material": "304 food-grade stainless steel",
    "url": "https://eqologiq.kite.space/product.html"
  }
  ` }} />
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
    {/* BREADCRUMB */}
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
      <nav className="flex items-center gap-2 font-body text-sm text-brand-text/40">
        <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
        <i data-lucide="chevron-right" className="w-3 h-3" />
        <a href="/shop/" className="hover:text-brand-primary transition-colors">Shop</a>
        <i data-lucide="chevron-right" className="w-3 h-3" />
        <span className="text-brand-text">Plastic Free Steel Bottle | 1 Litre</span>
      </nav>
    </div>
    {/* PRODUCT HERO */}
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* LEFT: Image Gallery */}
        <div className="lg:w-1/2 reveal">
          <div className="bg-brand-surface rounded-2xl aspect-square overflow-hidden flex items-center justify-center mb-4">
            <img id="main-img" src="https://static.kite.ai/image/upload/f_auto,q_auto,w_900/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png" alt="Plastic Free Steel Bottle | Double Wall | 1 Litre" className="w-full h-full object-cover transition-all duration-300" />
          </div>
          <div className="flex gap-3">
            <div className="thumb active w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center" onclick="switchImg(this,'https://static.kite.ai/image/upload/f_auto,q_auto,w_900/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png')">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1781025150/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/opdo2msffmbuadqb816m.png" alt className="w-full h-full object-cover" />
            </div>
            <div className="thumb w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center" onclick="switchImg(this,'https://static.kite.ai/image/upload/f_auto,q_auto,w_900/v1781025331/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/ersvawicev45dyhidorh.png')">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1781025331/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/ersvawicev45dyhidorh.png" alt className="w-full h-full object-cover" />
            </div>
            <div className="thumb w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center" onclick="switchImg(this,'https://static.kite.ai/image/upload/f_auto,q_auto,w_900/v1781025337/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g9vldkjt2ub9jnkdt9cm.png')">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1781025337/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g9vldkjt2ub9jnkdt9cm.png" alt className="w-full h-full object-cover" />
            </div>
            <div className="thumb w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center" onclick="switchImg(this,'https://static.kite.ai/image/upload/f_auto,q_auto,w_900/v1781025344/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/nukby0ddtak0en0oqys4.png')">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1781025344/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/nukby0ddtak0en0oqys4.png" alt className="w-full h-full object-cover" />
            </div>
            <div className="thumb w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center" onclick="switchImg(this,'https://static.kite.ai/image/upload/f_auto,q_auto,w_900/v1781025352/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/seg6a5qxqx12zavx9fkp.png')">
              <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1781025352/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/seg6a5qxqx12zavx9fkp.png" alt className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* RIGHT: Product Info */}
        <div className="lg:w-1/2 reveal" style={{transitionDelay: '100ms'}}>
          <p className="kicker text-brand-secondary mb-4">Double Wall / Vacuum Insulated</p>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-3 leading-tight">Plastic Free Steel Bottle | Double Wall | 1 Litre</h1>
          <p className="font-body text-brand-text/60 text-lg mb-6 leading-relaxed">Double-wall vacuum-insulated 304 food-grade stainless steel bottle. 1 Litre. No paint. No coating. No plastic in any component.</p>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-sans font-bold text-3xl text-brand-primary">₹1,200</span>
            <span className="font-body text-brand-text/40 text-base line-through">₹2,000</span>
            <span className="text-xs font-sans font-bold px-2.5 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary">40% off</span>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span style={{color: '#FFC850'}} className="text-base">★★★★★</span>
              <span className="font-body text-sm text-brand-text/60">Rated 4.50 out of 5 · 2 customer reviews</span>
            </div>
            <p className="font-body text-xs text-brand-secondary mt-1">22 in stock</p>
          </div>
          <p className="font-body text-brand-text/70 leading-relaxed mb-8">304 food-grade stainless steel body and cap. Double-wall vacuum insulated — keeps cold/hot for more than 12 hours. Easy to open cap, suitable for sports, cycling, trekking, and hiking. No plastic in any part of the construction.</p>
          {/* Qty + Add to Cart */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center border-2 border-brand-text/15 rounded-xl overflow-hidden">
              <button className="px-4 py-3 text-brand-text/60 hover:text-brand-text transition-colors font-sans font-bold" onclick="adjustQty(-1)">−</button>
              <span id="qty" className="px-4 py-3 font-sans font-bold text-brand-text min-w-[3rem] text-center">1</span>
              <button className="px-4 py-3 text-brand-text/60 hover:text-brand-text transition-colors font-sans font-bold" onclick="adjustQty(1)">+</button>
            </div>
            <button onclick="openCartDrawer()" className="flex-1 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl text-center hover:bg-blue-700 transition-colors">Add to Cart</button>
          </div>
          {/* Trust attributes */}
          <div className="grid grid-cols-2 gap-3 border-t border-brand-text/8 pt-6">
            <div className="flex items-center gap-2">
              <i data-lucide="shield-check" className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span className="font-body text-xs text-brand-text/60">100% Plastic-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="flask-conical" className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="font-body text-xs text-brand-text/60">Food-Grade 304 Steel</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="thermometer" className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span className="font-body text-xs text-brand-text/60">12+ Hours Hot &amp; Cold</span>
            </div>
            <div className="flex items-center gap-2">
              <i data-lucide="recycle" className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="font-body text-xs text-brand-text/60">Infinitely Recyclable Steel</span>
            </div>
            <div className="col-span-2 flex flex-col gap-0.5 border-t border-brand-text/8 pt-3 mt-1">
              <div className="flex items-center gap-2">
                <i data-lucide="file-check" className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span className="font-body text-xs font-medium text-brand-text/80">Lab Tested</span>
              </div>
              <span className="font-body text-xs text-brand-text/55 pl-6">304 food-grade steel composition independently verified. Reports: D250213009_1_D54151_C &amp; D250213009_1_D54151_CN</span>
              <a href="#" className="font-body text-xs pl-6 mt-0.5" style={{color: '#99BD05'}}>View test report →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ABOUT / DESCRIPTION */}
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16 reveal">
      <div className="border-t border-brand-text/10 pt-16 max-w-2xl">
        <h2 className="font-sans font-bold text-2xl text-brand-text mb-6">About this product.</h2>
        <p className="font-body text-brand-text/70 leading-relaxed mb-4">The body and the cap are both made of 304 Stainless Steel. No paint. No coating.</p>
        <p className="font-body text-brand-text/70 leading-relaxed mb-4">Double Wall. Vacuum Insulated. It keeps cold/hot for more than 12 hours.</p>
        <p className="font-body text-brand-text/70 leading-relaxed mb-4">This bottle does not contain any plastic. Easy to open cap makes it highly suitable for sports, cycling, trekking, and hiking to keep you hydrated.</p>
      </div>
    </section>
    {/* MATERIALS & CARE */}
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16 reveal">
      <div className="border-t border-brand-text/10 pt-16 max-w-2xl">
        <h2 className="font-sans font-bold text-2xl text-brand-text mb-8">Materials &amp; Care.</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4 items-start"><i data-lucide="circle-check" className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" /><div><p className="font-body font-medium text-brand-text">Bottle Body &amp; Cap – Food Grade 304 Stainless Steel</p><p className="font-body text-sm text-brand-text/60 mt-1">No paint, no coating. The safest material for drinking water and infinitely recyclable.</p></div></div>
          <div className="flex gap-4 items-start"><i data-lucide="circle-check" className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" /><div><p className="font-body font-medium text-brand-text">Cap Ring – Food Grade Silicone</p><p className="font-body text-sm text-brand-text/60 mt-1">Detachable silicone ring. Unlike plastic, it doesn't break into micro pieces and contains no BPA or BPS.</p></div></div>
          <div className="flex gap-4 items-start"><i data-lucide="circle-check" className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" /><div><p className="font-body font-medium text-brand-text">Packaging – Cardboard / Kraft Paper Based Box</p><p className="font-body text-sm text-brand-text/60 mt-1">No plastic packaging.</p></div></div>
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg text-brand-text mb-5">Post Buying Care.</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start"><i data-lucide="alert-circle" className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" /><p className="font-body text-sm text-brand-text/60">Avoid big impacts/falls — if the vacuum is compromised, temperature retention will reduce significantly.</p></div>
            <div className="flex gap-4 items-start"><i data-lucide="droplets" className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" /><p className="font-body text-sm text-brand-text/60">Clean inside and outside every couple of days with eco-friendly soap and water. Remove the silicone ring with a spoon handle and clean the cap and ring separately.</p></div>
            <div className="flex gap-4 items-start"><i data-lucide="circle-check" className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" /><p className="font-body text-sm text-brand-text/60">Dishwasher safe.</p></div>
            <div className="flex gap-4 items-start"><i data-lucide="x-circle" className="w-5 h-5 text-brand-text/30 flex-shrink-0 mt-0.5" /><p className="font-body text-sm text-brand-text/60">Do not use harsh detergents or abrasives.</p></div>
            <div className="flex gap-4 items-start"><i data-lucide="alert-circle" className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" /><p className="font-body text-sm text-brand-text/60">Avoid carrying the bottle loose inside a bag compartment — use the designated bottle pocket to prevent the cap from opening.</p></div>
          </div>
        </div>
        <div className="mt-8 p-5 rounded-xl bg-brand-secondary/8 border border-brand-secondary/15">
          <p className="font-body text-sm font-medium text-brand-secondary mb-1">Dimensions</p>
          <p className="font-body text-sm text-brand-text/60">Volume: 1 litre · Diameter: 9 cm (bottom) · Height: 26 cm · Weight: 470 g</p>
          <p className="font-body text-xs text-brand-text/40 mt-1">Values may vary slightly.</p>
        </div>
      </div>
    </section>
    {/* SUSTAINABILITY */}
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 reveal">
      <div className="border-t border-brand-text/10 pt-16 max-w-2xl">
        <h2 className="font-sans font-bold text-2xl text-brand-text mb-6">Sustainability &amp; Safety.</h2>
        <p className="font-body text-brand-text/70 leading-relaxed mb-4">Stainless steel is considered one of the safest materials for drinking water and is also infinitely recyclable.</p>
        <p className="font-body text-brand-text/70 leading-relaxed mb-4">Globally, under 10% of plastic produced is recycled while more than 80% of steel is recycled. Plastic can be recycled 1 to 10 times depending on type. Steel can be recycled infinitely.</p>
        <p className="font-body text-brand-text/70 leading-relaxed mb-4">The detachable silicone in the cap, unlike plastic, doesn't break into micro pieces and doesn't contain BPA or BPS.</p>
        <div className="mt-6 p-6 rounded-xl bg-brand-secondary/8 border border-brand-secondary/15">
          <p className="font-body text-sm font-medium text-brand-secondary">7-Day Return Guarantee: Within 7 days of receiving the bottle, if you are not satisfied for any reason, return it and receive 100% of the value you paid. <a href="/policy.html#returns" className="underline">Refund &amp; Returns policy →</a></p>
        </div>
      </div>
    </section>
    {/* RELATED PRODUCTS */}
    <section className="bg-brand-surface py-20 reveal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="font-sans font-bold text-3xl text-brand-text mb-12">You might also like.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Related: Bamboo Toothbrush (oral care) */}
          <div onclick="window.location='/product.html'" className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col group" style={{cursor: 'pointer'}}>
            <div className="aspect-square bg-brand-surface overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_500/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Bamboo Toothbrush" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-6 flex flex-col flex-1"><h3 className="font-sans font-bold text-base text-brand-text mb-1">Bamboo Toothbrush</h3><p className="font-body text-xs text-brand-text/50 mb-4">Biodegradable handle • BPA-free bristles • Vegan</p><div className="mt-auto flex items-baseline gap-2 mb-4"><span className="font-sans font-bold text-lg text-brand-text">₹149</span><span className="text-xs text-brand-text/40 font-body">onwards</span></div><a href="/product/" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</a></div>
          </div>
          {/* Related: Tongue Scraper (oral care) */}
          <div onclick="window.location='/product.html'" className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col group" style={{cursor: 'pointer'}}>
            <div className="aspect-square bg-brand-surface overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_500/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-cleaner.png" alt="Stainless Steel Tongue Scraper" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-6 flex flex-col flex-1"><h3 className="font-sans font-bold text-base text-brand-text mb-1">Stainless Steel Tongue Scraper</h3><p className="font-body text-xs text-brand-text/50 mb-4">Food-grade steel • Lasts for life • Zero plastic</p><div className="mt-auto flex items-baseline gap-2 mb-4"><span className="font-sans font-bold text-lg text-brand-text">₹299</span><span className="text-xs text-brand-text/40 font-body">onwards</span></div><a href="/product/" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</a></div>
          </div>
          {/* Related: Starter Switch Bundle */}
          <div onclick="window.location='/product.html'" className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col group" style={{cursor: 'pointer'}}>
            <div className="aspect-square bg-brand-surface overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_500/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="The Starter Switch Bundle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-6 flex flex-col flex-1"><h3 className="font-sans font-bold text-base text-brand-text mb-1">The Starter Switch Bundle</h3><p className="font-body text-xs text-brand-text/50 mb-4">750ml bottle + Bamboo brush + Tongue scraper</p><div className="mt-auto flex items-baseline gap-2 mb-4"><span className="font-sans font-bold text-lg text-brand-text">₹1,199</span><span className="text-xs text-brand-text/40 font-body">onwards</span></div><a href="/product/" className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors">Add to Cart</a></div>
          </div>
        </div>
      </div>
    </section>
    {/* REVIEWS */}
    <section className="bg-brand-base py-20 reveal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div><h2 className="font-sans font-bold text-3xl text-brand-text">What buyers are saying.</h2></div>
          <div className="flex items-center gap-3"><span style={{color: '#FFC850'}} className="text-xl">★★★★½</span><span className="font-body text-sm text-brand-text/60">4.50 average · 2 customer reviews</span></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
            <div className="flex gap-1 mb-3"><span style={{color: '#FFC850'}}>★★★★★</span></div>
            <p className="font-body text-brand-text/70 leading-relaxed mb-5 text-sm">"I've been through maybe eight water bottles in the last three years. This is the first one I haven't replaced. Cold water, no taste, no rust, no fuss."</p>
            <div className="flex items-center gap-3 pt-4 border-t border-brand-text/8"><div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold">A</div><p className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wide">Arjun D., Hyderabad</p></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
            <div className="flex gap-1 mb-3"><span style={{color: '#FFC850'}}>★★★★★</span></div>
            <p className="font-body text-brand-text/70 leading-relaxed mb-5 text-sm">"The matte cobalt colour is genuinely beautiful. It doesn't look like a 'health product.' It looks like something you'd choose to carry. Ice cold 7 hours into my work day."</p>
            <div className="flex items-center gap-3 pt-4 border-t border-brand-text/8"><div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-brand-text text-xs font-bold">N</div><p className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wide">Nisha K., Pune</p></div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
            <div className="flex gap-1 mb-3"><span style={{color: '#FFC850'}}>★★★★★</span></div>
            <p className="font-body text-brand-text/70 leading-relaxed mb-5 text-sm">"I ordered one for myself and gifted two more within a week. The packaging is clean, the weight feels right, and the lid hasn't leaked once in three months."</p>
            <div className="flex items-center gap-3 pt-4 border-t border-brand-text/8"><div className="w-8 h-8 rounded-full bg-brand-text flex items-center justify-center text-white text-xs font-bold">V</div><p className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wide">Vikram S., Delhi</p></div>
          </div>
        </div>
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

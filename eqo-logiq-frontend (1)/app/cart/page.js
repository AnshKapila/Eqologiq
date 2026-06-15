import React from 'react';

export const metadata = {
  title: `Cart | Eqo Logiq`,
  description: `Your Eqo Logiq cart. Review your order and proceed to secure checkout.`,
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
    {/* HEADER */}
    <section className="bg-brand-base py-12 border-b border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h1 className="font-sans font-bold text-3xl text-brand-text">Your Cart</h1>
      </div>
    </section>
    {/* CART CONTENT */}
    <section className="bg-brand-base py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* CART ITEMS */}
          <div className="lg:flex-1 w-full reveal">
            <div className="space-y-6" id="cart-items">
              {/* Item 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(34,34,34,0.07)] flex gap-6 items-start">
                <div className="w-20 h-20 rounded-xl bg-brand-surface flex-shrink-0 overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Core Bottle" className="w-full h-full object-cover" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sans font-bold text-base text-brand-text">Steel Water Bottle - 750ml</h3>
                      <p className="font-body text-xs text-brand-text/50 mt-0.5">Food-grade steel • Leak-proof</p>
                    </div>
                    <button className="text-brand-text/30 hover:text-brand-text transition-colors flex-shrink-0"><i data-lucide="x" className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-brand-text/15 rounded-lg overflow-hidden">
                      <button className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm">−</button>
                      <span className="px-3 py-1.5 font-sans font-bold text-brand-text text-sm min-w-[2.5rem] text-center">1</span>
                      <button className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm">+</button>
                    </div>
                    <p className="font-sans font-bold text-base text-brand-text">₹799</p>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(34,34,34,0.07)] flex gap-6 items-start">
                <div className="w-20 h-20 rounded-xl bg-brand-surface flex-shrink-0 overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Bamboo Brush" className="w-full h-full object-cover" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sans font-bold text-base text-brand-text">Bamboo Toothbrush</h3>
                      <p className="font-body text-xs text-brand-text/50 mt-0.5">Biodegradable handle • BPA-free</p>
                    </div>
                    <button className="text-brand-text/30 hover:text-brand-text transition-colors flex-shrink-0"><i data-lucide="x" className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-brand-text/15 rounded-lg overflow-hidden">
                      <button className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm">−</button>
                      <span className="px-3 py-1.5 font-sans font-bold text-brand-text text-sm min-w-[2.5rem] text-center">2</span>
                      <button className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm">+</button>
                    </div>
                    <p className="font-sans font-bold text-base text-brand-text">₹298</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a href="/shop/" className="inline-flex items-center gap-2 font-body text-sm font-medium text-brand-primary hover:underline"><i data-lucide="arrow-left" className="w-3.5 h-3.5" /> Continue shopping</a>
            </div>
          </div>
          {/* ORDER SUMMARY */}
          <div className="lg:w-[380px] w-full reveal" style={{transitionDelay: '100ms'}}>
            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.08)]">
              <h2 className="font-sans font-bold text-lg text-brand-text mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-body text-sm text-brand-text/70"><span>Steel Water Bottle 750ml × 1</span><span>₹799</span></div>
                <div className="flex justify-between font-body text-sm text-brand-text/70"><span>Bamboo Toothbrush × 2</span><span>₹298</span></div>
              </div>
              <div className="border-t border-brand-text/8 pt-4 mb-2">
                <div className="flex justify-between font-body text-sm text-brand-text/70 mb-2"><span>Subtotal</span><span>₹1,097</span></div>
                <div className="flex justify-between font-body text-sm text-brand-secondary"><span className="flex items-center gap-1"><i data-lucide="truck" className="w-3.5 h-3.5" /> Shipping</span><span>Free</span></div>
              </div>
              <div className="border-t border-brand-text/8 pt-4 mb-6">
                <div className="flex justify-between font-sans font-bold text-lg text-brand-text"><span>Total</span><span>₹1,097</span></div>
                <p className="font-body text-xs text-brand-text/45 mt-1">Inclusive of all taxes (GST)</p>
              </div>
              <a href="/checkout/" className="block w-full py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] transition-colors text-center">Proceed to Checkout</a>
              {/* Trust strip */}
              <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-brand-text/8">
                <div className="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="shield-check" className="w-4 h-4 text-brand-secondary" />
                  <span className="font-body text-xs text-brand-text/50 leading-tight">Plastic-free packaging</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="lock" className="w-4 h-4 text-brand-primary" />
                  <span className="font-body text-xs text-brand-text/50 leading-tight">Secure payment</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="rotate-ccw" className="w-4 h-4 text-brand-primary" />
                  <span className="font-body text-xs text-brand-text/50 leading-tight">Easy returns</span>
                </div>
              </div>
            </div>
            {/* Promo code */}
            <div className="mt-4 bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <p className="font-body text-sm font-medium text-brand-text mb-3">Have a promo code?</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter code" className="flex-1 px-4 py-2.5 border border-brand-text/15 rounded-lg font-body text-sm text-brand-text outline-none focus:border-brand-primary transition-colors" />
                <button className="px-4 py-2.5 border-2 border-brand-primary text-brand-primary font-sans font-bold text-sm rounded-lg hover:bg-brand-primary hover:text-white transition-all">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* RECOMMENDED */}
    <section className="bg-brand-surface py-16 md:py-20 border-t border-brand-text/8 reveal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="font-sans font-bold text-2xl text-brand-text mb-10">You might also need</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.07)] flex flex-col group">
            <div className="aspect-square bg-brand-surface overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-cleaner.png" alt="Stainless Steel Tongue Scraper" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-4"><h3 className="font-sans font-bold text-base text-brand-text mb-2">Stainless Steel Tongue Scraper</h3><div className="flex items-baseline gap-2 mb-4"><span className="font-sans font-bold text-lg text-brand-text">₹299</span><span className="text-xs text-brand-text/40 font-body">onwards</span></div><a href="/product/" onclick="event.stopPropagation()" className="w-full py-2.5 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors block">Add to Cart</a></div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.07)] flex flex-col group">
            <div className="aspect-square bg-brand-surface overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Steel Water Bottle 1 Litre" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-4"><h3 className="font-sans font-bold text-base text-brand-text mb-2">Steel Water Bottle - 1 Litre</h3><div className="flex items-baseline gap-2 mb-4"><span className="font-sans font-bold text-lg text-brand-text">₹999</span><span className="text-xs text-brand-text/40 font-body">onwards</span></div><a href="/product/" onclick="event.stopPropagation()" className="w-full py-2.5 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors block">Add to Cart</a></div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.07)] flex flex-col group">
            <div className="aspect-square bg-brand-surface overflow-hidden"><img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="The Starter Switch Bundle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-4"><h3 className="font-sans font-bold text-base text-brand-text mb-2">The Starter Switch Bundle</h3><div className="flex items-baseline gap-2 mb-4"><span className="font-sans font-bold text-lg text-brand-text">₹1,199</span><span className="text-xs text-brand-text/40 font-body">onwards</span></div><a href="/product/" onclick="event.stopPropagation()" className="w-full py-2.5 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors block">Add to Cart</a></div>
          </div>
        </div>
      </div>
    </section>
    {/* CHECKOUT NOTE */}
    {/* NOTE FOR DEVELOPERS: Checkout uses WooCommerce default checkout flow. 
   Style to match Eqo Logiq design language: 
   - Primary buttons: background #006B96, white text, border-radius 0.75rem
   - Body font: Inter
   - Headings: Space Grotesk
   - Background: #F7F5F0
   - Input borders: rgba(34,34,34,0.12), focus border #006B96
   - Error states: use red-500 with the same input styling
    */}
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
  {/* WhatsApp Support Button */}
  <style dangerouslySetInnerHTML={{__html: "\n    @media (max-width:640px){\n      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }\n      #wa-support-btn svg { width:16px !important; height:16px !important; }\n    }\n  " }} />
</div>

</>
  );
}

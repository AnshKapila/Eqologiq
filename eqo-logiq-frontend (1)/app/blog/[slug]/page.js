import React from 'react';

export const metadata = {
  title: `The math behind switching to a reusable bottle | Eqo Logiq Journal`,
  description: `We ran the numbers on plastic bottle consumption for a typical Indian household. The results are not dramatic, they're just arithmetic.`,
};

export function generateStaticParams() {
  return [{ slug: 'example-post' }];
}

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
    {/* BREADCRUMB */}
    <div className="max-w-[780px] mx-auto px-6 md:px-12 pt-8 pb-4">
      <nav className="flex items-center gap-2 font-body text-sm text-brand-text/40">
        <a href="/" className="hover:text-brand-primary transition-colors">Home</a>
        <i data-lucide="chevron-right" className="w-3 h-3" />
        <a href="/blog/" className="hover:text-brand-primary transition-colors">Blogs</a>
        <i data-lucide="chevron-right" className="w-3 h-3" />
        <span className="text-brand-text/70 truncate">The math behind switching</span>
      </nav>
    </div>
    {/* POST HEADER */}
    <article className="max-w-[780px] mx-auto px-6 md:px-12 pt-8 pb-20">
      <div className="reveal">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary mb-6">Impact</span>
        <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-6 leading-[1.15]">The math behind switching to a reusable bottle, and why it's simpler than you think.</h1>
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-brand-surface mb-10">
          <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_1200,c_fill,g_auto/v1777841241/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/feature-lifestyle.png" alt="Eqo Logiq Core Bottle in use" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="prose reveal">
        <p>We ran the numbers on plastic bottle consumption for a typical household in Mumbai. Not the dramatic, globe-scale numbers that get used to make people feel guilty. The actual, household-scale numbers that are relevant to the decision you're considering right now.</p>
        <p>The results are not dramatic or abstract. They are just arithmetic, and the arithmetic is unambiguous.</p>
        <h2>The baseline assumption</h2>
        <p>A household of two adults in a metro Indian city, both of whom buy at least one 500ml plastic bottle of water per day when outside the home. That's a conservative estimate. Many households consume more. Call it 730 plastic bottles per year between both people.</p>
        <p>At 12 grams per bottle (the approximate weight of a standard 500ml single-use PET bottle), that's <strong>8.76 kilograms of plastic annually</strong>. From two people. From water alone. This does not include soft drinks, packaged juices, or any other beverage category.</p>
        <h2>What actually happens to those bottles</h2>
        <p>India's plastic recycling infrastructure, despite genuine improvements in the last decade, recycles less than 30% of post-consumer plastic. The rest goes to landfill, informal dumps, or water bodies. PET bottles take between 400 and 700 years to decompose in a landfill environment.</p>
        <blockquote>The bottle you drank from on your commute today will still exist in recognisable form when your great-great-great-grandchildren are alive. That is not an exaggeration. That is the chemical reality of PET plastic.</blockquote>
        <p>More immediately: microplastics shed from PET bottles have been detected in human blood, breast milk, and lung tissue in studies published in the last three years. The long-term health implications are still being studied, but the presence itself is documented and confirmed.</p>
        <h2>The reusable bottle calculation</h2>
        <p>A stainless steel bottle with a minimum 10-year lifespan replaces approximately 3,650 single-use bottles over that period for a daily user. The steel itself is 100% recyclable at end of life. The manufacturing carbon footprint of a stainless steel bottle is higher upfront than a single PET bottle, but it pays back within 3–4 months of use based on lifecycle analysis.</p>
        <p>The Core Bottle costs ₹1,299. At a conservative 150 plastic bottles saved per year (accounting for the fact that most people don't buy a plastic bottle every single day), the cost per prevented bottle works out to roughly ₹8.66 over a 10-year period. A single-use 500ml water bottle in most Indian cities costs ₹15–20. You are saving money, actively, from the first month.</p>
        <h2>The part nobody talks about</h2>
        <p>The most honest thing we can say is this: the environmental case for a reusable bottle does not require you to care about the environment at all. It works on performance grounds alone. Colder water, no taste, no sweat on the outside, no morning rush to find a bottle to buy.</p>
        <p>The environmental benefit is not a sacrifice you make for the planet. It is a natural consequence of choosing something better. That distinction matters to us, and it should matter to you. Products that require sacrifice to justify themselves eventually get abandoned. Products that simply perform better, don't.</p>
      </div>
      {/* PRODUCT RECOMMENDATION */}
      <div className="mt-16 pt-10 border-t border-brand-text/8 reveal">
        <p className="kicker text-brand-text/40 mb-6">What we recommend</p>
        <div className="flex flex-col sm:flex-row gap-6 items-center bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
          <div className="w-24 h-24 bg-brand-surface rounded-xl flex-shrink-0 overflow-hidden">
            <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_200/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Core Bottle" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-bold text-lg text-brand-text mb-1">The Core Bottle</h3>
            <p className="font-body text-sm text-brand-text/60 mb-1">Matte Cobalt • 750ml • Food-grade stainless steel</p>
            <div className="flex items-baseline gap-2"><span className="font-sans font-bold text-xl text-brand-text">₹1,299</span><span className="text-sm text-brand-text/35 line-through font-body">₹1,799</span></div>
          </div>
          <a href="/product/" className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap">Shop this</a>
        </div>
      </div>
    </article>
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

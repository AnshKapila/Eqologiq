import React from 'react';

export const metadata = {
  title: `FAQ | Steel Water Bottle Questions Answered | Eqo Logiq`,
  description: `Questions answered about Eqo Logiq steel water bottles, vegan oral care, orders, sustainability, and returns. Get the facts before you buy.`,
  alternates: { canonical: `https://eqologiq.kite.space/faq.html` },
  openGraph: {
    title: `FAQ | Steel Water Bottle Questions Answered | Eqo Logiq`,
    description: `Questions answered about Eqo Logiq steel water bottles, vegan oral care, orders, sustainability, and returns. Get the facts before you buy.`,
    images: [{ url: `https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/v1777921391/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/dblcljacximlbkcgccyk.png` }],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are the bottles truly food-grade? What does that mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our steel water bottles use 18/8 stainless steel — 18% chromium and 8% nickel — the same grade used in surgical instruments and quality cookware. It will not leach chemicals into your water, won't impart taste, and won't corrode under normal use. The cap gasket is food-grade silicone, not rubber."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the insulation actually work in hot Indian weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We test at 42°C ambient temperature. In those conditions, cold water stays cold for a minimum of 18 hours. In a typical air-conditioned environment, you'll easily hit the 24-hour mark. Hot liquids stay hot for 12 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do the bamboo toothbrushes really have vegan bristles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most bamboo toothbrushes use boar-hair bristles. Ours use nylon-6 bristles with a charcoal infusion — synthetic, durable, and clean effectively without any animal byproduct. The handle is 100% bamboo and compostable."
        }
      },
      {
        "@type": "Question",
        "name": "Can I put carbonated drinks or hot coffee in the steel water bottle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes to hot coffee — it stays hot for 12 hours. For carbonated drinks, don't fully seal the lid immediately after filling as pressure can build. Let it settle for 30 seconds, then seal. The steel water bottle handles carbonated liquids fine."
        }
      }
    ]
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
    {/* HEADER */}
    <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 reveal">
        <p className="kicker text-brand-primary mb-4 flex items-center gap-3"><span className="w-6 h-px bg-brand-primary" />Support</p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Questions, answered.</h1>
        <p className="font-body text-brand-text/60 text-lg">If something is not here, reach us directly.</p>
      </div>
    </section>
    {/* CATEGORY NAV */}
    <section className="bg-brand-base py-8 border-b border-brand-text/8 sticky top-[72px] z-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-3 overflow-x-auto">
        <button className="faq-cat-btn active px-6 py-2 rounded-full border border-brand-primary font-body font-medium text-sm whitespace-nowrap" data-section="products">Products</button>
        <button className="faq-cat-btn px-6 py-2 rounded-full border border-brand-text/20 text-brand-text/70 font-body font-medium text-sm whitespace-nowrap" data-section="orders">Orders &amp; Delivery</button>
        <button className="faq-cat-btn px-6 py-2 rounded-full border border-brand-text/20 text-brand-text/70 font-body font-medium text-sm whitespace-nowrap" data-section="sustainability">Sustainability</button>
        <button className="faq-cat-btn px-6 py-2 rounded-full border border-brand-text/20 text-brand-text/70 font-body font-medium text-sm whitespace-nowrap" data-section="returns">Returns</button>
      </div>
    </section>
    {/* FAQ CONTENT */}
    <section className="bg-brand-base py-16 md:py-24">
      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        {/* PRODUCTS */}
        <div id="section-products" className="faq-section reveal">
          <h2 className="font-sans font-bold text-2xl text-brand-text mb-8">Products</h2>
          <div className="space-y-4">
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Are the bottles truly food-grade? What does that mean?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Yes. Our bottles use 18/8 stainless steel, which means 18% chromium and 8% nickel. This is the same grade used in surgical instruments and high-quality cookware. It will not leach chemicals into your water, won't impart taste, and won't corrode under normal use. The cap gasket is food-grade silicone, not rubber.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">How long does the insulation actually work in hot Indian weather?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">We test at 42°C ambient temperature. In those conditions, cold water stays cold for a minimum of 18 hours. In a typical air-conditioned office or cooler environment, you'll easily hit the 24-hour mark. Hot liquids stay hot for 12 hours. These are real test numbers, not claims under ideal lab conditions.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Do the bamboo toothbrushes really have vegan bristles?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Yes. Most bamboo toothbrushes use boar-hair bristles, which are not vegan. Ours use nylon-6 bristles with a charcoal infusion. They're synthetic, durable, and clean effectively without any animal byproduct. The handle is 100% bamboo and compostable. The bristles should be removed and disposed of separately before composting the handle.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">How do I care for the copper tongue cleaner?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Rinse under running water after each use. Occasionally scrub with a small amount of salt and lime juice to remove any tarnish. Copper naturally oxidises and the tarnish is harmless, but if you prefer it bright, a 30-second salt-lime scrub restores it immediately. Do not use harsh chemical cleaners on it. Store dry.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Can I put carbonated drinks or hot coffee in the Core Bottle?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Yes to hot coffee. It works brilliantly and stays hot for 12 hours. For carbonated drinks, we recommend not fully sealing the lid immediately after filling, as pressure can build. Let it settle for 30 seconds, then seal. The bottle handles carbonated liquids fine; just be aware of pressure when opening.</p></div>
            </div>
          </div>
        </div>
        {/* ORDERS */}
        <div id="section-orders" className="faq-section hidden reveal">
          <h2 className="font-sans font-bold text-2xl text-brand-text mb-8">Orders &amp; Delivery</h2>
          <div className="space-y-4">
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">How long does delivery take?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Standard delivery within metro cities (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune) takes 3–5 business days. Tier-2 cities and other areas take 5–7 business days. Express delivery is available at checkout for an additional fee and delivers within 1–2 business days in metros.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">What are the shipping charges?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Shipping is free on all orders above ₹1,500. Below that, a flat shipping fee of ₹79 applies. We ship with Delhivery and Shiprocket partners depending on your pin code. A tracking link will be emailed to you within 24 hours of dispatch.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Can I modify or cancel my order after placing it?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">You can modify or cancel within 2 hours of placing your order by emailing us at hello@eqologic.com with your order number. After that, the order enters the fulfilment queue and we cannot guarantee a change. If the order has already shipped, you'll need to use our returns process after receiving it.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Do you ship outside India?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Not yet. We currently ship within India only. International shipping is on the roadmap for 2025. If you're based outside India and want to be notified when we launch there, drop your email on our contact page and mention "International Shipping" in the message.</p></div>
            </div>
          </div>
        </div>
        {/* SUSTAINABILITY */}
        <div id="section-sustainability" className="faq-section hidden reveal">
          <h2 className="font-sans font-bold text-2xl text-brand-text mb-8">Sustainability</h2>
          <div className="space-y-4">
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Is the packaging really plastic-free?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Yes. Every Eqo Logiq order ships in 100% recycled kraft cardboard with no bubble wrap, no plastic inserts, no plastic tape. The void fill is shredded paper. Even the sticker on the box uses water-based adhesive. If you find any plastic in an Eqo Logiq package, we want to hear about it immediately. That's a fulfilment error on our end.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">What happens to the bottle at end of life?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Stainless steel is 100% recyclable and retains its properties indefinitely through the recycling process. When your bottle has genuinely reached the end of its life, you can drop it off at any scrap metal dealer in India (raddiwalas accept steel). We're building a take-back programme for 2025 that will handle this more formally.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Do you donate to environmental causes?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Yes. ₹25 from every Core Bottle sold goes to NGO partners working on clean water access in tier-2 cities across Maharashtra and Rajasthan. We publish an annual impact report with exact numbers, not just vague claims. You can read the latest report on our Impact page.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Where are the products manufactured?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">The Core Bottle is manufactured in Gujarat. The bamboo brushes are manufactured in Tamil Nadu. The copper tongue cleaners are made by a family-run workshop in Rajasthan that has been working with copper for three generations. We visit every supplier and don't outsource that responsibility to auditors alone.</p></div>
            </div>
          </div>
        </div>
        {/* RETURNS */}
        <div id="section-returns" className="faq-section hidden reveal">
          <h2 className="font-sans font-bold text-2xl text-brand-text mb-8">Returns</h2>
          <div className="space-y-4">
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">What is your return policy?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">We offer a 7-day return window from the date of delivery. Products must be in original condition, unused, and with original packaging. Oral care products (toothbrushes, tongue cleaners) are non-returnable for hygiene reasons. If a product arrives damaged or defective, we'll replace it at no charge regardless of the 7-day window.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">How do I initiate a return?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Email hello@eqologic.com with your order number and the reason for return. We'll respond within 24 hours with a prepaid return label and instructions. You don't need to print anything. You can QR-scan the label at most courier drop-off points. Refunds are processed within 5–7 business days of receiving the return.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">My bottle arrived dented. What do I do?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Email us at hello@eqologic.com with a photo of the damage and your order number. We'll dispatch a replacement within 2 business days, free of charge. You don't need to return the damaged item. We'll arrange collection or ask you to dispose of it responsibly if it's not worth the shipping carbon.</p></div>
            </div>
            <div className="faq-item bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(34,34,34,0.06)]">
              <button className="faq-trigger w-full flex items-center justify-between p-6 text-left"><span className="font-body font-medium text-brand-text">Can I exchange a colour or size instead of returning?</span><i data-lucide="plus" className="faq-icon w-5 h-5 text-brand-primary flex-shrink-0 ml-4" /></button>
              <div className="faq-answer px-6 pb-6"><p className="font-body text-brand-text/65 leading-relaxed">Yes. Contact us within 7 days of delivery and we'll process an exchange. The returned item must be in original condition. We'll cover the return shipping; you pay the standard shipping on the replacement if the order total is below ₹1,500 after the exchange.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT NUDGE */}
    <section className="bg-brand-surface py-20 border-t border-brand-text/8 reveal">
      <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
        <h2 className="font-sans font-bold text-3xl text-brand-text mb-4">Still have a question?</h2>
        <p className="font-body text-brand-text/60 mb-8">We typically respond within 24 hours. If it's about a bulk order, mention that in the subject line and we'll prioritise it.</p>
        <a href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-sans font-bold rounded-xl hover:bg-blue-700 transition-colors">Contact Us</a>
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

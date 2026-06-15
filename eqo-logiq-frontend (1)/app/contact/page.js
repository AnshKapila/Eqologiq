import React from 'react';

export const metadata = {
  title: `Contact Eqo Logiq | Get in Touch`,
  description: `Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.`,
  alternates: { canonical: `https://eqologiq.kite.space/contact.html` },
  openGraph: {
    title: `Contact Eqo Logiq | Get in Touch`,
    description: `Get in touch with Eqo Logiq. Questions, bulk orders, partnerships, or feedback — we're here and typically respond within 24 hours.`,
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
    {/* HEADER */}
    <section className="bg-brand-base py-16 md:py-24 border-b border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 reveal">
        <p className="kicker text-brand-primary mb-4 flex items-center gap-3"><span className="w-6 h-px bg-brand-primary" />Get in Touch</p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-text mb-4">Let's talk.</h1>
        <p className="font-body text-brand-text/60 text-lg max-w-xl">Whether it's a question, a bulk order, or just feedback: we are here. And we actually respond.</p>
      </div>
    </section>
    {/* CONTACT SPLIT */}
    <section className="bg-brand-base py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT: Form */}
          <div className="lg:w-7/12 reveal">
            <form name="contact" id="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-brand-text mb-2">Name</label>
                  <input type="text" name="name" required placeholder="Your name" className="form-field" />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-brand-text mb-2">Email</label>
                  <input type="email" name="email" required placeholder="you@example.com" className="form-field" />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-brand-text mb-2">Subject</label>
                <select name="subject" required className="form-field appearance-none">
                  <option value disabled selected>Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bulk or Corporate Orders">Bulk or Corporate Orders</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Returns and Refunds">Returns and Refunds</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-brand-text mb-2">Message</label>
                <textarea name="message" required rows={6} placeholder="Tell us what's on your mind." className="form-field resize-none" defaultValue={""} />
              </div>
              <button type="submit" className="w-full py-4 bg-brand-primary text-white font-sans font-bold rounded-xl hover:bg-blue-700 transition-colors text-base">Send Message</button>
              <div id="form-success" className="hidden text-center py-4 bg-brand-secondary/10 rounded-xl text-brand-secondary font-body font-medium text-sm">Message sent. We'll get back to you within 24 hours.</div>
            </form>
          </div>
          {/* RIGHT: Contact Details */}
          <div className="lg:w-5/12 reveal" style={{transitionDelay: '100ms'}}>
            <div className="space-y-10">
              <div>
                <p className="kicker text-brand-text/40 mb-6">Direct Contact</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="mail" className="w-4 h-4 text-brand-primary" /></div>
                    <div><p className="font-body font-medium text-brand-text text-sm">Email</p><a href="mailto:mail@eqologiq.in" className="font-body text-brand-text/60 text-sm hover:text-brand-primary transition-colors">mail@eqologiq.in</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="clock" className="w-4 h-4 text-brand-primary" /></div>
                    <div><p className="font-body font-medium text-brand-text text-sm">Response Time</p><p className="font-body text-brand-text/60 text-sm">We typically respond within 24 hours. Weekends may take until Monday.</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="instagram" className="w-4 h-4 text-brand-primary" /></div>
                    <div><p className="font-body font-medium text-brand-text text-sm">Instagram</p><a href="https://www.instagram.com/eqologiq.in" target="_blank" rel="noopener noreferrer" className="font-body text-brand-text/60 text-sm hover:text-brand-primary transition-colors">@eqologiq.in</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"><i data-lucide="youtube" className="w-4 h-4 text-brand-primary" /></div>
                    <div><p className="font-body font-medium text-brand-text text-sm">YouTube</p><a href="https://www.youtube.com/@eqo-logiq" target="_blank" rel="noopener noreferrer" className="font-body text-brand-text/60 text-sm hover:text-brand-primary transition-colors">@eqo-logiq</a></div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-brand-secondary/8 border border-brand-secondary/15">
                <div className="flex items-center gap-3 mb-3">
                  <i data-lucide="building-2" className="w-5 h-5 text-brand-secondary" />
                  <p className="font-body font-medium text-brand-text text-sm">Bulk &amp; Corporate Orders</p>
                </div>
                <p className="font-body text-brand-text/65 text-sm leading-relaxed">We work with teams of 10 to 10,000. Custom laser engraving, branded packaging, and dedicated account management available. <strong>Mentioning "Bulk Order" in the subject line helps us prioritise your enquiry.</strong></p>
                <a href="mailto:hello@eqologic.com?subject=Bulk+Order+Enquiry" className="inline-block mt-4 text-sm font-body font-medium text-brand-secondary hover:underline">Email us directly →</a>
              </div>
              <div>
                <p className="kicker text-brand-text/40 mb-4">Good to Know</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><i data-lucide="circle-check" className="w-4 h-4 text-brand-primary flex-shrink-0" /><p className="font-body text-sm text-brand-text/65">Free shipping on orders above ₹1,500</p></div>
                  <div className="flex items-center gap-3"><i data-lucide="circle-check" className="w-4 h-4 text-brand-primary flex-shrink-0" /><p className="font-body text-sm text-brand-text/65">7-day hassle-free returns</p></div>
                  <div className="flex items-center gap-3"><i data-lucide="circle-check" className="w-4 h-4 text-brand-primary flex-shrink-0" /><p className="font-body text-sm text-brand-text/65">Secure payment via Razorpay &amp; UPI</p></div>
                </div>
              </div>
            </div>
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

import React from 'react';

export const metadata = {
  title: `Checkout | Eqo Logiq`,
  description: `Complete your Eqo Logiq order. Secure checkout for plastic-free steel bottles and oral care.`,
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
    <section className="bg-brand-base py-10 border-b border-brand-text/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3">
          <a href="/cart/" className="inline-flex items-center gap-1.5 font-body text-sm text-brand-text/50 hover:text-brand-primary transition-colors"><i data-lucide="arrow-left" className="w-3.5 h-3.5" /> Back to cart</a>
          <span className="text-brand-text/20">/</span>
          <span className="font-body text-sm text-brand-text/50">Checkout</span>
        </div>
        <h1 className="font-sans font-bold text-3xl text-brand-text mt-4">Checkout</h1>
      </div>
    </section>
    {/* CHECKOUT CONTENT */}
    <section className="bg-brand-base py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Success state (hidden by default) */}
        <div id="success-state" className="hidden">
          <div className="max-w-lg mx-auto text-center py-20">
            <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
              <i data-lucide="check-circle" className="w-8 h-8 text-brand-secondary" />
            </div>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-text mb-4">Order placed.</h2>
            <p className="font-body text-brand-text/65 text-base leading-relaxed mb-8">You will receive a confirmation email shortly.</p>
            <a href="/shop/" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors">Continue Shopping <i data-lucide="arrow-right" className="w-4 h-4" /></a>
          </div>
        </div>
        {/* Checkout form */}
        <div id="checkout-form-wrapper" className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* LEFT: Delivery address form */}
          <div className="lg:flex-1 w-full reveal active">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <h2 className="font-sans font-bold text-lg text-brand-text mb-6 pb-4 border-b border-brand-text/8">Delivery Address</h2>
              <form id="checkout-form" className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input type="text" id="field-name" name="name" placeholder="Your full name" required className="form-field" />
                </div>
                {/* Phone */}
                <div>
                  <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Phone Number <span className="text-red-400">*</span></label>
                  <input type="tel" id="field-phone" name="phone" placeholder="+91 98765 43210" required className="form-field" />
                </div>
                {/* Email */}
                <div>
                  <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Email Address <span className="text-red-400">*</span></label>
                  <input type="email" id="field-email" name="email" placeholder="your@email.com" required className="form-field" />
                </div>
                {/* Address */}
                <div>
                  <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Address <span className="text-red-400">*</span></label>
                  <textarea id="field-address" name="address" rows={3} placeholder="House/flat no., building name, street, area" required className="form-field resize-none" defaultValue={""} />
                </div>
                {/* City & Pincode */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">City <span className="text-red-400">*</span></label>
                    <input type="text" id="field-city" name="city" placeholder="Mumbai" required className="form-field" />
                  </div>
                  <div>
                    <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Pincode <span className="text-red-400">*</span></label>
                    <input type="text" id="field-pincode" name="pincode" placeholder={400001} required maxLength={6} className="form-field" />
                  </div>
                </div>
                {/* State */}
                <div>
                  <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">State <span className="text-red-400">*</span></label>
                  <select id="field-state" name="state" required className="form-field appearance-none bg-white">
                    <option value disabled selected>Select state</option>
                    <option>Andhra Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Delhi</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jammu &amp; Kashmir</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          {/* RIGHT: Order summary */}
          <div className="lg:w-[400px] w-full reveal active" style={{transitionDelay: '80ms'}}>
            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(34,34,34,0.08)] sticky top-24">
              <h2 className="font-sans font-bold text-lg text-brand-text mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface flex-shrink-0 overflow-hidden">
                    <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_96,c_fill,g_auto/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Steel Bottle" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-bold text-sm text-brand-text truncate">Steel Water Bottle - 750ml</p>
                    <p className="font-body text-xs text-brand-text/45 mt-0.5">Qty: 1</p>
                  </div>
                  <p className="font-sans font-bold text-sm text-brand-text flex-shrink-0">₹799</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="package" className="w-5 h-5 text-brand-text/30" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-bold text-sm text-brand-text truncate">Bamboo Toothbrush</p>
                    <p className="font-body text-xs text-brand-text/45 mt-0.5">Qty: 2</p>
                  </div>
                  <p className="font-sans font-bold text-sm text-brand-text flex-shrink-0">₹298</p>
                </div>
              </div>
              <div className="border-t border-brand-text/8 pt-4 mb-2 space-y-2">
                <div className="flex justify-between font-body text-sm text-brand-text/70"><span>Subtotal</span><span>₹1,097</span></div>
                <div className="flex justify-between font-body text-sm text-brand-secondary"><span className="flex items-center gap-1"><i data-lucide="truck" className="w-3.5 h-3.5" /> Shipping</span><span>Free</span></div>
              </div>
              <div className="border-t border-brand-text/8 pt-4 mb-6">
                <div className="flex justify-between font-sans font-bold text-lg text-brand-text"><span>Total</span><span>₹1,097</span></div>
                <p className="font-body text-xs text-brand-text/45 mt-1">Inclusive of all taxes (GST)</p>
              </div>
              {/* Trust strip */}
              <div className="grid grid-cols-3 gap-2 mb-6 pb-4 border-b border-brand-text/8">
                <div className="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="shield-check" className="w-4 h-4 text-brand-secondary" />
                  <span className="font-body text-xs text-brand-text/50 leading-tight">Plastic-free</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="lock" className="w-4 h-4 text-brand-primary" />
                  <span className="font-body text-xs text-brand-text/50 leading-tight">Secure</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <i data-lucide="rotate-ccw" className="w-4 h-4 text-brand-primary" />
                  <span className="font-body text-xs text-brand-text/50 leading-tight">7-day returns</span>
                </div>
              </div>
              {/* Place Order button */}
              <button id="place-order-btn" type="button" className="w-full py-4 rounded-xl font-sans font-bold text-base text-white transition-colors duration-200" style={{background: '#006B96'}} onmouseover="this.style.background='#005580'" onmouseout="this.style.background='#006B96'">
                Place Order
              </button>
              <p className="font-body text-xs text-brand-text/40 mt-4 text-center leading-relaxed">
                This will connect to your WooCommerce checkout on the live site.
              </p>
            </div>
          </div>
        </div>{/* /checkout-form-wrapper */}
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
  {/* WhatsApp Support Button */}
  <style dangerouslySetInnerHTML={{__html: "\n    @media (max-width:640px){\n      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }\n      #wa-support-btn svg { width:16px !important; height:16px !important; }\n    }\n  " }} />
</div>

</>
  );
}

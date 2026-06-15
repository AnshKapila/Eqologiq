import React from 'react';

export const metadata = {
  title: `My Account | Eqo Logiq`,
  description: `Your Eqo Logiq member area. View orders, manage preferences, and track your impact.`,
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
    {/* Guest redirect notice (shown if not logged in) */}
    <div id="guest-notice" className="hidden">
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md reveal active">
          <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
            <i data-lucide="lock" className="w-7 h-7 text-brand-primary" />
          </div>
          <h1 className="font-sans font-bold text-3xl text-brand-text mb-4">Sign in to view your account</h1>
          <p className="font-body text-brand-text/55 text-base leading-relaxed mb-8">
            Your member area is waiting. Sign in to access orders, saved items, and member benefits.
          </p>
          <a href="/login/" className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] transition-colors shadow-[0_4px_24px_rgba(0,107,150,0.25)]">
            Sign In
            <i data-lucide="arrow-right" className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
    {/* Logged-in member area */}
    <div id="member-area" className="hidden">
      {/* Welcome header */}
      <section className="bg-brand-base pt-16 pb-12 border-b border-brand-text/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="relative reveal active">
            {/* Sign Out — top-right on all sizes */}
            <div className="flex justify-end mb-4 md:absolute md:top-0 md:right-0 md:mb-0">
              <button id="sign-out-btn" className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-brand-text/15 font-body font-medium text-sm text-brand-text/60 hover:text-brand-text hover:border-brand-text/30 transition-colors">
                <i data-lucide="log-out" className="w-4 h-4" />
                Sign Out
              </button>
            </div>
            {/* User info */}
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-white font-sans font-bold text-xl flex-shrink-0" id="avatar-initials">V</div>
              <div>
                <p className="kicker text-brand-primary mb-1 flex items-center gap-2">
                  <span className="w-4 h-px bg-brand-primary" />
                  Member Area
                </p>
                <h1 className="font-sans font-bold text-2xl md:text-3xl text-brand-text">Welcome back, <span id="user-name">there</span>.</h1>
                <p className="font-body text-xs text-brand-text/45 mt-0.5" id="user-email">demo@eqologic.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats strip */}
      <section className="bg-brand-base py-8 border-b border-brand-text/8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal active" style={{transitionDelay: '60ms'}}>
            <div className="stat-card">
              <p className="font-sans font-bold text-2xl text-brand-primary mb-1">3</p>
              <p className="font-body text-xs text-brand-text/50">Orders placed</p>
            </div>
            <div className="stat-card">
              <p className="font-sans font-bold text-2xl text-brand-primary mb-1">2</p>
              <p className="font-body text-xs text-brand-text/50">Saved items</p>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs content area */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Tab nav */}
          <div className="flex items-center gap-8 border-b border-brand-text/10 mb-10 overflow-x-auto reveal active" style={{transitionDelay: '100ms'}}>
            <button className="tab-btn active pb-4 font-sans font-bold text-sm whitespace-nowrap" data-tab="orders">Orders</button>
            <button className="tab-btn pb-4 font-body font-medium text-sm text-brand-text/50 whitespace-nowrap" data-tab="saved">Saved Items</button>
            <button className="tab-btn pb-4 font-body font-medium text-sm text-brand-text/50 whitespace-nowrap" data-tab="impact">My Impact</button>
            <button className="tab-btn pb-4 font-body font-medium text-sm text-brand-text/50 whitespace-nowrap" data-tab="settings">Settings</button>
          </div>
          {/* Orders tab */}
          <div id="tab-orders" className="tab-content active reveal active" style={{transitionDelay: '140ms'}}>
            <div className="bg-white rounded-2xl overflow-hidden" style={{border: '1.5px solid rgba(34,34,34,0.07)'}}>
              {/* Order 1 */}
              <div className="order-row px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0">
                    <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_96,c_fill/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Steel Bottle" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-brand-text">Steel Water Bottle - 750ml</p>
                    <p className="font-body text-xs text-brand-text/45 mt-0.5">Order #EQ-0041 · 14 Apr 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <p className="font-sans font-bold text-sm text-brand-text">₹799</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(153,189,5,0.1)', color: '#99BD05'}}>Delivered</span>
                  <a href="/product/" className="font-body text-xs text-brand-primary hover:underline">View product</a>
                </div>
              </div>
              {/* Order 2 */}
              <div className="order-row px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="package" className="w-5 h-5 text-brand-text/30" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-brand-text">Bamboo Toothbrush × 2</p>
                    <p className="font-body text-xs text-brand-text/45 mt-0.5">Order #EQ-0038 · 2 Mar 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <p className="font-sans font-bold text-sm text-brand-text">₹298</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(153,189,5,0.1)', color: '#99BD05'}}>Delivered</span>
                  <a href="/product/" className="font-body text-xs text-brand-primary hover:underline">View product</a>
                </div>
              </div>
              {/* Order 3 */}
              <div className="order-row px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0 flex items-center justify-center">
                    <i data-lucide="package" className="w-5 h-5 text-brand-text/30" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-brand-text">Starter Switch Bundle</p>
                    <p className="font-body text-xs text-brand-text/45 mt-0.5">Order #EQ-0021 · 10 Jan 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <p className="font-sans font-bold text-sm text-brand-text">₹1,199</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider" style={{background: 'rgba(153,189,5,0.1)', color: '#99BD05'}}>Delivered</span>
                  <a href="/product/" className="font-body text-xs text-brand-primary hover:underline">View product</a>
                </div>
              </div>
            </div>
          </div>
          {/* Saved Items tab */}
          <div id="tab-saved" className="tab-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden flex items-center gap-4 p-6" style={{border: '1.5px solid rgba(34,34,34,0.07)'}}>
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0">
                  <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_128,c_fill/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt="Steel Bottle" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-bold text-sm text-brand-text">Steel Water Bottle - 1 Litre</p>
                  <p className="font-body text-xs text-brand-text/45 mt-0.5">₹999 onwards</p>
                </div>
                <a href="/product/" className="flex-shrink-0 px-4 py-2 bg-brand-primary text-white font-sans font-bold text-xs rounded-lg hover:bg-[#005580] transition-colors">Buy now</a>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden flex items-center gap-4 p-6" style={{border: '1.5px solid rgba(34,34,34,0.07)'}}>
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-surface flex-shrink-0 flex items-center justify-center">
                  <i data-lucide="package" className="w-6 h-6 text-brand-text/30" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-bold text-sm text-brand-text">Stainless Steel Tongue Scraper</p>
                  <p className="font-body text-xs text-brand-text/45 mt-0.5">₹299 onwards</p>
                </div>
                <a href="/product/" className="flex-shrink-0 px-4 py-2 bg-brand-primary text-white font-sans font-bold text-xs rounded-lg hover:bg-[#005580] transition-colors">Buy now</a>
              </div>
            </div>
          </div>
          {/* Impact tab */}
          <div id="tab-impact" className="tab-content">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-8 flex flex-col gap-4" style={{background: '#0D1F0E'}}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'rgba(168,230,163,0.15)'}}>
                  <i data-lucide="leaf" className="w-5 h-5" style={{color: '#A8E6A3'}} />
                </div>
                <div>
                  <p className="font-sans font-bold text-3xl text-white mb-1">0g</p>
                  <p className="font-body text-sm text-white/55">Single-use plastic avoided through your purchases</p>
                </div>
              </div>
              <div className="rounded-2xl p-8 flex flex-col gap-4 bg-brand-primary">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/15">
                  <i data-lucide="infinity" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-sans font-bold text-3xl text-white mb-1">10 yr</p>
                  <p className="font-body text-sm text-white/65">Combined product lifespan of your Eqo Logiq items</p>
                </div>
              </div>
              <div className="rounded-2xl p-8 flex flex-col gap-4" style={{background: '#EAE6DF', border: '1.5px solid rgba(0,107,150,0.1)'}}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'rgba(0,107,150,0.1)', border: '1px solid rgba(0,107,150,0.2)'}}>
                  <i data-lucide="trending-up" className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-sans font-bold text-3xl text-brand-primary mb-1">3×</p>
                  <p className="font-body text-sm text-brand-text/55">Products switched away from single-use alternatives</p>
                </div>
              </div>
            </div>
            <p className="font-body text-xs text-brand-text/35 mt-6 text-center">Impact metrics are calculated estimates based on your purchase history.</p>
          </div>
          {/* Settings tab */}
          <div id="tab-settings" className="tab-content">
            <div className="max-w-lg">
              <div className="bg-white rounded-2xl p-8" style={{border: '1.5px solid rgba(34,34,34,0.07)'}}>
                <h3 className="font-sans font-bold text-base text-brand-text mb-6">Account Details</h3>
                <div className="space-y-5">
                  <div>
                    <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Display Name</label>
                    <input type="text" id="settings-name" className="w-full px-4 py-3 rounded-xl font-body text-sm text-brand-text bg-brand-surface outline-none border-2 border-transparent focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <label className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider block mb-1.5">Email Address</label>
                    <input type="email" id="settings-email" className="w-full px-4 py-3 rounded-xl font-body text-sm text-brand-text bg-brand-surface outline-none border-2 border-transparent focus:border-brand-primary transition-colors" />
                  </div>
                  <div className="pt-2">
                    <button id="save-settings-btn" className="px-6 py-3 bg-brand-primary text-white font-sans font-bold text-sm rounded-xl hover:bg-[#005580] transition-colors">
                      Save Changes
                    </button>
                    <span id="save-confirm" className="hidden ml-3 font-body text-sm text-brand-secondary">✓ Saved (demo)</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-white rounded-2xl p-6 flex items-center justify-between" style={{border: '1.5px solid rgba(229,62,62,0.12)'}}>
                <div>
                  <p className="font-sans font-bold text-sm text-brand-text">Sign out everywhere</p>
                  <p className="font-body text-xs text-brand-text/40 mt-0.5">End your demo session</p>
                </div>
                <button id="sign-out-all-btn" className="px-6 py-2 rounded-xl border border-red-200 font-body font-medium text-sm text-red-500 hover:bg-red-50 transition-colors">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended products strip */}
      <section className="py-12 border-t border-brand-text/8" style={{background: '#F2EFE8'}}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-8 reveal active">
            <div>
              <p className="kicker text-brand-primary mb-2 flex items-center gap-2"><span className="w-4 h-px bg-brand-primary" />You might also like</p>
              <h2 className="font-sans font-bold text-2xl text-brand-text">Complete your setup.</h2>
            </div>
            <a href="/shop/" className="hidden md:flex items-center gap-2 font-sans font-bold text-sm text-brand-primary hover:text-[#005580] transition-colors group">
              View all
              <i data-lucide="arrow-right" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 reveal active" style={{transitionDelay: '80ms'}}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <div className="aspect-square overflow-hidden bg-brand-surface">
                <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400,c_fill,g_auto/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-brush.png" alt="Bamboo Toothbrush" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-sans font-bold text-sm text-brand-text mb-0.5">Bamboo Toothbrush</p>
                <p className="font-sans font-bold text-sm text-brand-primary">₹149</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <div className="aspect-square overflow-hidden bg-brand-surface">
                <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400,c_fill,g_auto/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-cleaner.png" alt="Tongue Scraper" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-sans font-bold text-sm text-brand-text mb-0.5">Stainless Tongue Scraper</p>
                <p className="font-sans font-bold text-sm text-brand-primary">₹299</p>
              </div>
            </div>
            <div className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)]">
              <div className="aspect-square overflow-hidden bg-brand-surface">
                <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_400,c_fill,g_auto/v1777841242/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/iter1/prod-bottle.png" alt="Steel Bottle 1L" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-sans font-bold text-sm text-brand-text mb-0.5">Steel Bottle - 1 Litre</p>
                <p className="font-sans font-bold text-sm text-brand-primary">₹999</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>{/* /member-area */}
  </main>
  <footer className="bg-[#111111] text-white pt-12 pb-8 px-6 md:px-12" style={{borderTop: '3px solid #006B96'}}>
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src="https://static.kite.ai/image/upload/c_crop,x_0.000,y_0.196,w_1.000,h_0.609/v1780077526/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/wbsbvykvt63upqxf8tmm.png" alt="Eqo Logiq" className="h-8 w-auto object-contain" />
      <p className="font-body text-white/30 text-sm">© <span id="year" /> Eqo Logiq. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a href="/policy/" className="font-body text-white/30 hover:text-brand-primary text-sm transition-colors">Privacy</a>
        <a href="/shop/" className="font-body text-white/30 hover:text-brand-primary text-sm transition-colors">Shop</a>
        <a href="/contact/" className="font-body text-white/30 hover:text-brand-primary text-sm transition-colors">Contact</a>
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

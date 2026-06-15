import React from 'react';

export const metadata = {
  title: `Sign In | Eqo Logiq Member Account`,
  description: `Sign in to your Eqo Logiq account to view orders, manage preferences, and access member benefits.`,
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
  <main className="pt-20 min-h-screen flex">
    {/* LEFT: Brand panel */}
    <div className="hidden lg:flex lg:w-[45%] flex-col justify-between relative overflow-hidden" style={{background: '#006B96'}}>
      {/* Background product image */}
      <img src="https://static.kite.ai/image/upload/f_auto,q_auto,w_900,c_fill,g_auto/v1777952844/app/2dc6a210-7df1-4cfe-b9c3-d73dbb7d3353/g6uec6ksdecsgs8ybt9r.png" alt aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity" />
      <div className="relative p-16 flex flex-col h-full justify-between">
        {/* Top: brand statement */}
        <div className="reveal active">
          <p className="kicker text-white/40 mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-white/30" />
            Member Area
          </p>
          <h2 className="font-sans font-bold text-4xl text-white leading-[1.05] tracking-tight mb-6">
            Products that earn<br />their place.
          </h2>
          <p className="font-body text-white/55 text-base leading-relaxed max-w-xs">
            Track orders, manage preferences, and access early drops. All in one place.
          </p>
        </div>
        {/* Middle: three proof points */}
        <div className="reveal active space-y-6" style={{transitionDelay: '100ms'}}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(255,255,255,0.12)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><circle cx={12} cy={12} r={1} /></svg>
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-white">Order history</p>
              <p className="font-body text-xs text-white/45">Track every purchase in one view</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(255,255,255,0.12)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-white">Wishlist &amp; saves</p>
              <p className="font-body text-xs text-white/45">Keep track of what you want next</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'rgba(255,255,255,0.12)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-white">Early access</p>
              <p className="font-body text-xs text-white/45">Members get new drops first</p>
            </div>
          </div>
        </div>
        {/* Bottom: trust note */}
        <div className="reveal active" style={{transitionDelay: '200ms'}}>
          <p className="font-body text-xs text-white/30">10,000+ households trust Eqo Logiq products daily.</p>
        </div>
      </div>
    </div>
    {/* RIGHT: Login form */}
    <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16">
      <div className="max-w-md w-full mx-auto reveal active">
        {/* Header */}
        <div className="mb-10">
          <p className="kicker text-brand-primary mb-4 flex items-center gap-2">
            <span className="w-5 h-px bg-brand-primary" />
            Welcome back
          </p>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text leading-tight mb-2">Sign in to your account.</h1>
          <p className="font-body text-sm text-brand-text/50">
            Demo login: use any email &amp; password to continue.
          </p>
        </div>
        {/* Error message */}
        <div id="error-msg" className="mb-6 px-4 py-3 rounded-xl flex items-center gap-3" style={{background: 'rgba(229,62,62,0.08)', border: '1px solid rgba(229,62,62,0.2)'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2="12.01" y2={16} /></svg>
          <p className="font-body text-sm" style={{color: '#E53E3E'}} id="error-text">Please enter a valid email address.</p>
        </div>
        {/* Form */}
        <form id="login-form" noValidate className="space-y-4">
          <div>
            <label className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider block mb-2" htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" className="input-field" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider" htmlFor="password">Password</label>
              <button type="button" id="forgot-btn" className="font-body text-xs text-brand-primary hover:underline">Forgot password?</button>
            </div>
            <div className="relative">
              <input id="password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" className="input-field pr-12" />
              <button type="button" id="toggle-pw" className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text/35 hover:text-brand-text/70 transition-colors" aria-label="Toggle password visibility">
                <i data-lucide="eye" className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Remember me */}
          <div className="flex items-center gap-3 pt-1">
            <input type="checkbox" id="remember" className="w-4 h-4 accent-brand-primary rounded" />
            <label htmlFor="remember" className="font-body text-sm text-brand-text/60 cursor-pointer">Remember me on this device</label>
          </div>
          {/* Submit */}
          <button type="submit" id="login-btn" className="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] active:bg-[#004060] transition-colors duration-200 mt-2 shadow-[0_4px_24px_rgba(0,107,150,0.25)]">
            <span id="btn-label">Sign In</span>
            <i data-lucide="arrow-right" className="w-4 h-4" id="btn-icon" />
            {/* Loading spinner (hidden by default) */}
            <svg id="btn-spinner" className="hidden w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-brand-text/10" />
          <span className="font-body text-xs text-brand-text/35 uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-brand-text/10" />
        </div>
        {/* Create account */}
        <div className="text-center">
          <p className="font-body text-sm text-brand-text/55 mb-3">Don't have an account?</p>
          <a href="#" id="create-account-btn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-primary text-brand-primary font-sans font-bold text-sm hover:bg-brand-primary hover:text-white transition-colors duration-200">
            Create an account
            <i data-lucide="user-plus" className="w-4 h-4" />
          </a>
        </div>
        {/* Demo note */}
        <div className="mt-10 pt-6 border-t border-brand-text/8">
          <p className="font-body text-xs text-brand-text/35 text-center leading-relaxed">
            This is a demo login experience. No real authentication is used.<br />
            Any email and password will complete the demo flow.
          </p>
        </div>
      </div>
    </div>
  </main>
  {/* Forgot password toast */}
  <div id="forgot-toast" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] px-6 py-4 rounded-xl font-body text-sm text-white shadow-lg pointer-events-none opacity-0 transition-opacity duration-300 flex items-center gap-3" style={{background: '#222222', minWidth: 260}}>
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    Demo: a reset link would be sent to your email.
  </div>
  {/* Create account toast */}
  <div id="create-toast" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] px-6 py-4 rounded-xl font-body text-sm text-white shadow-lg pointer-events-none opacity-0 transition-opacity duration-300 flex items-center gap-3" style={{background: '#222222', minWidth: 260}}>
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2="12.01" y2={16} /></svg>
    Demo: account registration flow would open here.
  </div>
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

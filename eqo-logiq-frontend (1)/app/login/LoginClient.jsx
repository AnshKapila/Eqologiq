'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';

export default function LoginClient() {
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState('/account/');

  const { login, isLoading, error, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const next = params.get('redirect');
    if (next) setRedirectTo(next);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/account/');
    }
  }, [isAuthenticated, router]);

  async function onSubmit(e) {
    e.preventDefault();
    setLocalError(null);

    if (!username.trim() || !password) {
      setLocalError('Please enter your username/email and password.');
      return;
    }

    try {
      await login({ username: username.trim(), password });
      router.replace(redirectTo);
    } catch {
      // error handled by context
    }
  }

  const showError = localError || error;

  return (
    <>
      <div>
        {/* NAV */}
        {/* MOBILE MENU */}
        {/* SEARCH MODAL */}
        <div
          id="search-modal"
          className="fixed inset-0 z-[70] flex flex-col items-center pt-24 px-4 pointer-events-none opacity-0 transition-opacity duration-200"
          style={{ background: 'rgba(34,34,34,0.6)', backdropFilter: 'blur(6px)' }}
        >
          <div className="w-full max-w-2xl bg-brand-base rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-brand-text/10">
              <i data-lucide="search" className="w-5 h-5 text-brand-text/40 flex-shrink-0" />
              <input
                id="search-input"
                type="text"
                placeholder="Search products, pages…"
                autoComplete="off"
                className="flex-1 bg-transparent font-body text-base text-brand-text placeholder-brand-text/35 outline-none"
              />
              <button
                id="search-close"
                className="p-1 text-brand-text/40 hover:text-brand-text transition-colors"
                aria-label="Close search"
              >
                <i data-lucide="x" className="w-5 h-5" />
              </button>
            </div>
            <div id="search-results" className="max-h-[60vh] overflow-y-auto py-2" />
          </div>
        </div>

        <main className="pt-20 min-h-screen flex">
          {/* LEFT: Brand panel */}
          <div className="hidden lg:flex lg:w-[45%] flex-col justify-between relative overflow-hidden bg-[#006B96] hover:bg-[#005580]">
            {/* Background product image */}
            <img
              src="/images/plastic-free-products.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="relative p-16 flex flex-col h-full justify-between">
              <div className="reveal active">
                <p className="kicker text-white/40 mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-white/30" />
                  Member Area
                </p>
                <h2 className="font-sans font-bold text-4xl text-white leading-[1.05] tracking-tight mb-6">
                  Products that earn
                  <br />
                  their place.
                </h2>
                <p className="font-body text-white/55 text-base leading-relaxed max-w-xs">
                  Track orders, manage preferences, and access early drops. All in one place.
                </p>
              </div>

              <div className="reveal active space-y-6" style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      <circle cx={12} cy={12} r={1} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-white">Order history</p>
                    <p className="font-body text-xs text-white/45">Track every purchase in one view</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-white">Wishlist &amp; saves</p>
                    <p className="font-body text-xs text-white/45">Keep track of what you want next</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-white">Early access</p>
                    <p className="font-body text-xs text-white/45">Members get new drops first</p>
                  </div>
                </div>
              </div>

              <div className="reveal active" style={{ transitionDelay: '200ms' }}>
                <p className="font-body text-xs text-white/30">
                  10,000+ households trust Eqo Logiq products daily.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Login form */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16">
            <div className="max-w-md w-full mx-auto reveal active">
              <div className="mb-10">
                <p className="kicker text-brand-primary mb-4 flex items-center gap-2">
                  <span className="w-5 h-px bg-brand-primary" />
                  Welcome back
                </p>
                <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text leading-tight mb-2">
                  Sign in to your account.
                </h1>
                <p className="font-body text-sm text-brand-text/50">Use your WordPress account credentials.</p>
              </div>

              {showError ? (
                <div
                  className="mb-6 px-4 py-3 rounded-xl flex items-center gap-3"
                  style={{
                    background: 'rgba(229,62,62,0.08)',
                    border: '1px solid rgba(229,62,62,0.2)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E53E3E"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} y1={8} x2={12} y2={12} />
                    <line x1={12} y1={16} x2="12.01" y2={16} />
                  </svg>
                  <p className="font-body text-sm" style={{ color: '#E53E3E' }}>
                    {showError}
                  </p>
                </div>
              ) : null}

              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <label
                    className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider block mb-2"
                    htmlFor="username"
                  >
                    Username or email
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="you@example.com"
                    autoComplete="username"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="font-body text-xs text-brand-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="input-field pr-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <input type="checkbox" id="remember" className="w-4 h-4 accent-brand-primary rounded" defaultChecked />
                  <label htmlFor="remember" className="font-body text-sm text-brand-text/60 cursor-pointer">
                    Keep me signed in on this device
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] active:bg-[#004060] transition-colors duration-200 mt-2 shadow-[0_4px_24px_rgba(0,107,150,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? 'Signing in…' : 'Sign In'}</span>
                  {isLoading ? (
                    <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  ) : (
                    <span aria-hidden="true">→</span>
                  )}
                </button>
              </form>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-brand-text/10" />
                <span className="font-body text-xs text-brand-text/35 uppercase tracking-wider">or</span>
                <div className="flex-1 h-px bg-brand-text/10" />
              </div>

              <div className="text-center">
                <p className="font-body text-sm text-brand-text/55 mb-3">Don't have an account?</p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-primary text-brand-primary font-sans font-bold text-sm hover:bg-brand-primary hover:text-white transition-colors duration-200"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* CART DRAWER */}
        {/* WhatsApp Support Button */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    @media (max-width:640px){\n      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }\n      #wa-support-btn svg { width:16px !important; height:16px !important; }\n    }\n  ',
          }}
        />
      </div>
    </>
  );
}


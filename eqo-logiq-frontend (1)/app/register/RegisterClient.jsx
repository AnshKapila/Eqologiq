'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { WC_API_BASE } from '../../lib/woocommerce';

export default function RegisterClient() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [localError, setLocalError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace('/account/');
  }, [isAuthenticated, router]);

  const registerUrl = useMemo(() => {
    return `${WC_API_BASE.replace('/wc/store/v1', '')}/eqo/v1/register`;
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setLocalError(null);

    const u = username.trim();
    const em = email.trim();
    const pw = password;

    if (!u || !em || !pw) {
      setLocalError('Please fill in username, email, and password.');
      return;
    }

    setIsRegistering(true);
    try {
      const response = await fetch(registerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: em, username: u, password: pw }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || response.status !== 200) {
        const message = data?.message || data?.code || `Registration failed (${response.status}).`;
        throw new Error(message);
      }

      // Auto-login after successful registration.
      await login({ username: u, password: pw });
      router.replace('/account/');
    } catch (err) {
      setLocalError(err?.message || 'Unable to register.');
    } finally {
      setIsRegistering(false);
    }
  }

  return (
    <div>
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
                Join the<br />
                member community.
              </h2>
              <p className="font-body text-white/55 text-base leading-relaxed max-w-xs">
                Create your account to track orders, manage preferences, and access early drops.
              </p>
            </div>

            <div className="reveal active space-y-6" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    <circle cx={12} cy={12} r={1} />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-white">Order history</p>
                  <p className="font-body text-xs text-white/45">View purchases in one place</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-white">Saved items</p>
                  <p className="font-body text-xs text-white/45">Keep track of what’s next</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-white">Early access</p>
                  <p className="font-body text-xs text-white/45">New drops, first</p>
                </div>
              </div>
            </div>

            <div className="reveal active" style={{ transitionDelay: '200ms' }}>
              <p className="font-body text-xs text-white/30">10,000+ households trust Eqo Logiq products daily.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Registration form */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16">
          <div className="max-w-md w-full mx-auto reveal active">
            <div className="mb-10">
              <p className="kicker text-brand-primary mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-brand-primary" />
                Create account
              </p>
              <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text leading-tight mb-2">
                Sign up to your account.
              </h1>
              <p className="font-body text-sm text-brand-text/50">Register using your WordPress REST endpoint.</p>
            </div>

            {localError ? (
              <div
                className="mb-6 px-4 py-3 rounded-xl flex items-center gap-3"
                style={{ background: 'rgba(229,62,62,0.08)', border: '1px solid rgba(229,62,62,0.2)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={12} />
                  <line x1={12} y1={16} x2="12.01" y2={16} />
                </svg>
                <p className="font-body text-sm" style={{ color: '#E53E3E' }}>
                  {localError}
                </p>
              </div>
            ) : null}

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider block mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="your-username"
                  autoComplete="username"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider block mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="font-sans font-bold text-xs text-brand-text/60 uppercase tracking-wider block mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="input-field pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isRegistering || isAuthenticated}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl hover:bg-[#005580] active:bg-[#004060] transition-colors duration-200 mt-2 shadow-[0_4px_24px_rgba(0,107,150,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isRegistering ? 'Creating account…' : 'Sign Up'}</span>
                {isRegistering ? (
                  <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                ) : (
                  <span aria-hidden="true">→</span>
                )}
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-brand-text/8">
              <p className="font-body text-sm text-brand-text/55 text-center leading-relaxed">
                Already have an account?{' '}
                <Link href="/login/" className="text-brand-primary font-bold hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Support Button (kept for parity with login/account pages) */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    @media (max-width:640px){\n      #wa-support-btn { padding:10px 16px !important; font-size:12.5px !important; bottom:20px !important; right:16px !important; gap:7px !important; }\n      #wa-support-btn svg { width:16px !important; height:16px !important; }\n    }\n  ',
        }}
      />
    </div>
  );
}


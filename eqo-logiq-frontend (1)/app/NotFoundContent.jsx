'use client';

import Link from 'next/link';
import { Home, ShoppingBag, CircleHelp, Mail } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function NotFoundContent() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-lg mx-auto">
        <div className="float-anim mb-8 select-none">
          <span
            className="font-sans font-bold text-brand-text/10 block"
            style={{ fontSize: 'clamp(120px,22vw,200px)', lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            404
          </span>
        </div>

        <Reveal className="-mt-16 relative z-10" threshold={0.05} rootMargin="0px">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-brand-text/40 mb-4">Page not found</p>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-5 leading-tight tracking-tight">
            This page doesn&apos;t exist.
          </h1>
          <p className="font-body text-brand-text/60 text-base leading-relaxed mb-10">
            The link you followed may be broken, the page may have moved, or the URL may be mistyped. Let us help you
            get back on track.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-brand-text text-white font-sans font-bold text-sm hover:bg-brand-primary transition-colors mb-4"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6">
            <Link
              href="/shop/"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-primary hover:underline transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Browse the Shop
            </Link>
            <Link
              href="/faq/"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-text/50 hover:text-brand-primary transition-colors"
            >
              <CircleHelp className="w-3.5 h-3.5" />
              FAQ
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-text/50 hover:text-brand-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const FOOTER_LOGO_URL =
  '/images/logo-mark.png';

export default function Footer({ variant = 'default' }) {
  const year = new Date().getFullYear();
  const isHome = variant === 'home';

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer
      className={`bg-[#111111] text-white px-6 md:px-12 print:hidden ${
        isHome
          ? 'relative z-30 pt-24 pb-12 border-t-[3px] border-brand-primary'
          : 'pt-20 pb-10 border-t border-white/10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 ${isHome ? 'mb-24' : 'mb-20'}`}>
          <div className="md:col-span-1">
            <Image src={FOOTER_LOGO_URL} alt="Eqo Logiq brand logo" width={120} height={40} className="h-10 w-auto object-contain mb-6" />
            <p className="font-body text-white/50 text-sm max-w-xs">
              Plastic-free steel bottles and daily essentials. No plastic in any product.
            </p>
          </div>

          <div>
            <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Shop</h5>
            <ul className="space-y-4">
              <li>
                <Link href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">
                  Steel Bottles
                </Link>
              </li>
              <li>
                <Link href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">
                  Oral Care
                </Link>
              </li>
              <li>
                <Link href="/shop/" className="font-body text-white/50 hover:text-white transition-colors">
                  Bundles
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="font-body text-white/50 hover:text-white transition-colors">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Company</h5>
            <ul className="space-y-4">
              <li>
                <Link href="/about/" className="font-body text-white/50 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/qrash-qourse/" className="font-body text-white/50 hover:text-white transition-colors">
                  Impact Report
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="font-body text-white/50 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="font-body text-white/50 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-white/80">Stay Updated</h5>
            <p className="font-body text-white/50 text-sm mb-4">No spam. Just product drops and real updates.</p>
            <form className="flex border-b border-white/20 pb-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none outline-none text-white font-body text-sm w-full placeholder:text-white/30"
              />
              <button
                type="submit"
                className="text-white hover:text-brand-primary transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="font-body text-white/30 text-sm">© {year} Eqo Logiq. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/policy/#privacy" className="font-body text-white/30 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policy/#terms" className="font-body text-white/30 hover:text-white text-sm transition-colors">
              Terms of Use
            </Link>
            <Link href="/policy/#shipping" className="font-body text-white/30 hover:text-white text-sm transition-colors">
              Shipping Policy
            </Link>
            <Link href="/policy/#returns" className="font-body text-white/30 hover:text-white text-sm transition-colors">
              Refund &amp; Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

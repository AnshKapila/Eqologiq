"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. NAVIGATION */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'scrolled bg-[#F7F5F0] border-b border-black/10 shadow-sm py-2' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <Image src="/images/logo.png" alt="Eqo Logiq brand logo" width={120} height={40} priority className="h-10 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link href="/shop/" className={`nav-link text-sm font-body font-medium transition-colors ${isScrolled ? 'text-[#222222] hover:text-[#006B96]' : 'text-white hover:text-white/80'}`}>Shop</Link>
            <Link href="/about/" className={`nav-link text-sm font-body font-medium transition-colors ${isScrolled ? 'text-[#222222] hover:text-[#006B96]' : 'text-white hover:text-white/80'}`}>Our Story</Link>
            <Link href="/qrash-qourse/" className={`nav-link text-sm font-body font-medium transition-colors ${isScrolled ? 'text-[#222222] hover:text-[#006B96]' : 'text-white hover:text-white/80'}`}>Impact</Link>
            <Link href="/blog/" className={`nav-link text-sm font-body font-medium transition-colors ${isScrolled ? 'text-[#222222] hover:text-[#006B96]' : 'text-white hover:text-white/80'}`}>Blogs</Link>
          </div>

          <div className="flex items-center gap-6 z-50">
            <button onClick={() => setIsSearchOpen(true)} className={`nav-link hover:opacity-70 transition-opacity ${isScrolled ? 'text-[#222222]' : 'text-white'}`}>
              <i data-lucide="search" className="w-5 h-5"></i>
            </button>
            <Link href="/login/" className={`nav-link hover:text-brand-primary transition-colors hidden md:flex items-center ${isScrolled ? 'text-[#222222]' : 'text-white'}`}>
              <i data-lucide="user" className="w-5 h-5"></i>
            </Link>
            <button onClick={() => setIsCartOpen(true)} className={`relative nav-link hover:opacity-70 transition-opacity flex items-center gap-2 ${isScrolled ? 'text-[#222222]' : 'text-white'}`}>
              <span className="text-sm font-body font-medium hidden md:block">Cart</span>
              <i data-lucide="shopping-bag" className="w-5 h-5"></i>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#006B96] text-white text-[10px] font-bold flex items-center justify-center leading-none">2</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden nav-link focus:outline-none ${isScrolled || isMobileMenuOpen ? 'text-[#222222]' : 'text-white'}`}>
              <i data-lucide="menu" className="w-6 h-6"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-[#F7F5F0] transform transition-transform duration-500 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-24 flex items-center justify-between px-6">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/images/logo.png" alt="Eqo Logiq brand logo" width={96} height={32} className="h-8 w-auto object-contain" />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#222222]"><i data-lucide="x" className="w-6 h-6"></i></button>
        </div>
        <div className="px-6 py-8 flex flex-col gap-6">
          <Link href="/shop/" className="text-2xl font-sans font-medium text-[#222222]">Shop</Link>
          <Link href="/about/" className="text-2xl font-sans font-medium text-[#222222]">Our Story</Link>
          <Link href="/qrash-qourse/" className="text-2xl font-sans font-medium text-[#222222]">Impact</Link>
          <Link href="/blog/" className="text-2xl font-sans font-medium text-[#222222]">Blogs</Link>
        </div>
      </div>

      {/* Cart Drawer */}
      <div className={`fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm transition-opacity ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`fixed top-0 right-0 bottom-0 z-[81] w-[420px] max-w-[100vw] bg-[#F7F5F0] shadow-2xl transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <p className="font-sans font-bold text-lg text-[#222222]">Your Cart</p>
          <button onClick={() => setIsCartOpen(false)} className="text-[#222222]/40 hover:text-[#222222]"><i data-lucide="x" className="w-5 h-5"></i></button>
        </div>
        {/* Hardcoded Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">
           <div className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
             <img src="/images/steel-bottle.png" alt="Bottle" className="w-16 h-16 rounded-xl bg-[#EAE6DF] object-cover" />
             <div className="flex-1">
                <p className="font-sans font-bold text-sm text-[#222222]">Plastic Free Steel Bottle | 1 Litre</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-black/10 rounded-lg overflow-hidden">
                    <button className="px-2.5 py-1 text-black/50 hover:bg-black/5">-</button>
                    <span className="px-2.5 py-1 text-sm font-bold text-[#222222]">1</span>
                    <button className="px-2.5 py-1 text-black/50 hover:bg-black/5">+</button>
                  </div>
                  <p className="font-sans font-bold text-[14px]">₹1,200</p>
                </div>
             </div>
           </div>
        </div>
        <div className="p-6 border-t border-black/10">
          <Link href="/checkout/" className="block w-full py-4 bg-[#006B96] text-white font-sans font-bold text-center rounded-xl hover:bg-[#005580] transition-colors">Proceed to Checkout</Link>
        </div>
      </div>
      
      {/* WhatsApp Support Button */}
      <Link href="https://wa.me/919667691316" target="_blank" rel="noopener noreferrer" className="fixed bottom-7 right-6 z-[9999] flex items-center justify-center w-12 h-12 hover:w-60 hover:justify-start hover:px-5 bg-[#1C1C1C] hover:bg-[#006B96] hover:-translate-y-0.5 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
           <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.979-1.405A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.099-1.132l-.293-.174-3.046.86.861-3.047-.191-.311A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8-8-3.582 8-8 8z" fill="#25D366"/>
        </svg>
        <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap font-body text-[13.5px] font-medium transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2">
          Questions Before Ordering?
        </span>
      </Link>
    </>
  );
}

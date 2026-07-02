'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  ShoppingCart,
  FileText,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatProductPrice } from '../lib/woocommerce';

const LOGO_URL =
  '/images/logo.png';

const NAV_LINKS = [
  { href: '/shop/', label: 'Shop' },
  { href: '/about/', label: 'Our Story' },
  { href: '/qrash-qourse/', label: 'Impact' },
  { href: '/blog/', label: 'Blogs' },
];

const SEARCH_DATA = [
  { title: 'Shop All Products', desc: 'Browse the full Eqo Logiq catalogue', meta: 'Page', url: '/shop/', type: 'page' },
  { title: 'Our Story', desc: 'Why Eqo Logiq exists and what we refuse to compromise on', meta: 'Page', url: '/about/', type: 'page' },
  { title: 'Impact: Qrash Qourse', desc: "Environmental impact, facts, and Eqo Logiq's approach", meta: 'Page', url: '/qrash-qourse/', type: 'page' },
  { title: 'FAQ', desc: 'Answers to common questions about products and orders', meta: 'Page', url: '/faq/', type: 'page' },
  { title: 'Contact Us', desc: 'Get in touch with the Eqo Logiq team', meta: 'Page', url: '/contact/', type: 'page' },
  { title: 'Cart', desc: 'Review your selected items and checkout', meta: 'Page', url: '/cart/', type: 'page' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchIdx, setActiveSearchIdx] = useState(-1);
  const [waVisible, setWaVisible] = useState(false);
  const { cart, itemCount, updateQuantity, updatingItemKey } = useCart();

  const showSolidNav = !isHome || isScrolled;
  const navTextClass = showSolidNav
    ? 'text-brand-text hover:text-brand-primary'
    : 'text-white hover:text-white/80';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setWaVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || isCartOpen || isSearchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isCartOpen, isSearchOpen]);

  const openSearch = useCallback(() => {
    setSearchQuery('');
    setActiveSearchIdx(-1);
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setActiveSearchIdx(-1);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeSearch();
        setIsCartOpen(false);
        setIsMobileMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeSearch, openSearch]);

  const searchHits =
    searchQuery.trim().length === 0
      ? SEARCH_DATA.slice(0, 6)
      : SEARCH_DATA.filter((item) =>
          `${item.title} ${item.desc} ${item.meta}`.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.replace(/\/$/, ''));
  };

  const linkClass = (href) => {
    const active = isActive(href);
    if (active) return 'text-sm font-body font-medium text-brand-primary transition-colors';
    return `text-sm font-body font-medium transition-colors ${navTextClass}`;
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 print:hidden ${
          showSolidNav
            ? 'bg-brand-base border-b border-brand-text/10 shadow-[0_1px_0_0_rgba(0,107,150,0.08)] py-2'
            : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <Image src={LOGO_URL} alt="Eqo Logiq official logo" width={120} height={40} priority className="h-10 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 z-50">
            <button
              type="button"
              onClick={openSearch}
              className={`hover:opacity-70 transition-opacity ${navTextClass}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/login/"
              className={`hover:text-brand-primary transition-colors hidden md:flex items-center ${navTextClass}`}
              aria-label="Sign In"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className={`relative hover:opacity-70 transition-opacity flex items-center gap-2 ${navTextClass}`}
              aria-label="Open cart"
            >
              <span className="text-sm font-body font-medium hidden md:block">Cart</span>
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-brand-primary text-white text-[10px] font-bold flex items-center justify-center leading-none">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden focus:outline-none ${showSolidNav || isMobileMenuOpen ? 'text-brand-text' : 'text-white'}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-brand-base transform transition-transform duration-500 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-24 flex items-center justify-between px-6">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src={LOGO_URL} alt="Eqo Logiq official logo" width={108} height={36} className="h-9 w-auto object-contain" />
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-brand-text"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center px-12 gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-5xl font-sans font-bold transition-colors ${
                isActive(href) ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-5xl font-sans font-bold text-brand-text hover:text-brand-primary transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Search Modal */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col items-center pt-24 px-4 transition-opacity duration-200 ${
          isSearchOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'rgba(34,34,34,0.6)', backdropFilter: 'blur(6px)' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSearch();
        }}
      >
        <div className="w-full max-w-2xl bg-brand-base rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-brand-text/10">
            <Search className="w-5 h-5 text-brand-text/40 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search products, pages…"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveSearchIdx(-1);
              }}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  if (searchHits.length) setActiveSearchIdx((i) => (i + 1) % searchHits.length);
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  if (searchHits.length) setActiveSearchIdx((i) => (i - 1 + searchHits.length) % searchHits.length);
                } else if (e.key === 'Enter' && activeSearchIdx >= 0 && searchHits[activeSearchIdx]) {
                  window.location.href = searchHits[activeSearchIdx].url;
                }
              }}
              className="flex-1 bg-transparent font-body text-base text-brand-text placeholder-brand-text/35 outline-none"
              autoFocus={isSearchOpen}
            />
            <button
              type="button"
              onClick={closeSearch}
              className="p-1 text-brand-text/40 hover:text-brand-text transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {searchHits.length === 0 ? (
              <p className="font-body text-sm text-brand-text/40 px-5 py-6 text-center">
                No results for &ldquo;{searchQuery}&rdquo;
              </p>
            ) : (
              searchHits.map((hit, i) => (
                <Link
                  key={hit.url + hit.title}
                  href={hit.url}
                  onClick={closeSearch}
                  className={`flex items-center gap-4 px-5 py-3.5 hover:bg-brand-surface transition-colors ${
                    activeSearchIdx === i ? 'bg-brand-surface' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      hit.type === 'product' ? 'bg-brand-primary/10' : 'bg-brand-text/6'
                    }`}
                  >
                    {hit.type === 'product' ? (
                      <ShoppingCart className="w-4 h-4 text-brand-primary" />
                    ) : (
                      <FileText className="w-4 h-4 text-brand-text/40" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-bold text-sm text-brand-text truncate">{hit.title}</p>
                    <p className="font-body text-xs text-brand-text/45 truncate mt-0.5">{hit.desc}</p>
                  </div>
                  <span className="text-xs font-body text-brand-text/30 flex-shrink-0 hidden md:block">
                    {hit.meta}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Cart Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm transition-opacity ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[81] w-[420px] max-w-[100vw] bg-brand-base shadow-2xl transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-text/10">
          <p className="font-sans font-bold text-lg text-brand-text">
            Your Cart{' '}
            <span className="text-sm font-semibold text-brand-text/50 ml-2">
              {itemCount} item{itemCount === 1 ? '' : 's'}
            </span>
          </p>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="text-brand-text/40 hover:text-brand-text transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">
          {!cart?.items?.length ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <p className="font-body text-brand-text/50 text-sm">Your cart is empty.</p>
            </div>
          ) : (
            cart.items.map((item) => {
              const isItemUpdating = updatingItemKey === item.key;
              return (
              <div
                key={item.key || item.id}
                className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm"
              >
                <img
                  src={item.images?.[0]?.src || item.images?.[0]?.thumbnail || ''}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl bg-brand-surface object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-bold text-sm text-brand-text truncate">{item.name}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-brand-text/15 rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1).catch(() => {})}
                        disabled={isItemUpdating}
                        className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm disabled:opacity-40"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-3 py-1.5 font-sans font-bold text-brand-text text-sm min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1).catch(() => {})}
                        disabled={isItemUpdating}
                        className="px-3 py-1.5 text-brand-text/50 hover:text-brand-text transition-colors font-bold text-sm disabled:opacity-40"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-sans font-bold text-sm">
                      {formatProductPrice({
                        price: item.totals?.line_total || item.prices?.price,
                        currency_minor_unit: item.prices?.currency_minor_unit ?? 2,
                        currency_prefix: item.prices?.currency_prefix ?? '₹',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
            })
          )}
        </div>
        {cart?.items?.length > 0 && (
          <div className="px-6 pb-2">
            <div className="flex justify-between font-sans font-bold text-sm text-brand-text">
              <span>Subtotal</span>
              <span>
                {formatProductPrice({
                  price: cart.totals?.total_items || '0',
                  currency_minor_unit: cart.totals?.currency_minor_unit ?? 2,
                  currency_prefix: cart.totals?.currency_prefix ?? '₹',
                })}
              </span>
            </div>
          </div>
        )}
        <div className="p-6 border-t border-brand-text/10">
          <Link
            href="/checkout/"
            onClick={() => setIsCartOpen(false)}
            className="block w-full py-4 bg-brand-primary text-white font-sans font-bold text-center rounded-xl hover:bg-[#005580] transition-colors"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/cart/"
            onClick={() => setIsCartOpen(false)}
            className="block text-center mt-3 font-body text-sm text-brand-text/50 hover:text-brand-primary transition-colors"
          >
            View full cart →
          </Link>
        </div>
      </div>

      {/* WhatsApp Support Button */}
      <a
        href="https://wa.me/919667691316"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-7 right-6 z-[9999] flex items-center justify-center w-12 h-12 hover:w-60 hover:justify-start hover:px-5 bg-[#1C1C1C] hover:bg-brand-primary hover:-translate-y-0.5 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group print:hidden max-sm:bottom-5 max-sm:right-4"
        style={{
          opacity: waVisible ? 1 : 0,
          transform: waVisible ? 'translateY(0)' : 'translateY(10px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 max-sm:w-4 max-sm:h-4">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="#25D366"
          />
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.979-1.405A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.099-1.132l-.293-.174-3.046.86.861-3.047-.191-.311A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
            fill="#25D366"
          />
        </svg>
        <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap font-body text-[13.5px] font-medium transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2">
          Questions Before Ordering?
        </span>
      </a>
    </>
  );
}

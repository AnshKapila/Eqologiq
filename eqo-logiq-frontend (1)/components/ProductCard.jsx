import React from 'react';
import Link from 'next/link';

export function ProductCard({ cat, image, title, features, price, oldPrice, badge, delay, onAddToCart }) {
  return (
    <Link href="/product/example-product/" className="group cursor-pointer reveal product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col" data-cat={cat} style={{ transitionDelay: delay || '0ms' }}>
      <div className="relative aspect-square overflow-hidden bg-brand-surface">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {badge && <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full bg-brand-secondary text-brand-text">{badge}</span>}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-sans font-bold text-base text-brand-text mb-1">{title}</h3>
        <p className="font-body text-xs text-brand-text/50 mb-3">{features}</p>
        <div className="mt-auto flex items-baseline gap-2 mb-4">
          <span className="font-sans font-bold text-lg text-brand-text">₹{price}</span>
          {oldPrice ? (
            <span className="text-xs text-brand-text/40 font-body line-through">₹{oldPrice}</span>
          ) : (
            <span className="text-xs text-brand-text/40 font-body">onwards</span>
          )}
        </div>
        <button 
          onClick={(e) => { e.preventDefault(); if(onAddToCart) onAddToCart(); }} 
          className="w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

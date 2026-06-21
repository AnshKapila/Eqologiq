'use client';

import Link from 'next/link';
import { formatProductPrice } from '../lib/woocommerce';

export function ProductCard({
  product,
  variant = 'shop',
  category,
  delay,
  onAddToCart,
  isAdding = false,
}) {
  const image = product.images?.[0]?.src;
  const imageAlt = product.images?.[0]?.alt || product.name;
  const price = formatProductPrice(product.prices);
  const regularPrice =
    product.prices?.regular_price &&
    product.prices.regular_price !== product.prices.price
      ? formatProductPrice({ ...product.prices, price: product.prices.regular_price })
      : null;
  const descriptionHtml = product.short_description || product.description || '';
  const href = `/product/${product.slug}/`;

  const cardClass =
    variant === 'home'
      ? 'group cursor-pointer reveal bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] hover:shadow-[0_4px_28px_rgba(0,107,150,0.12)] transition-shadow duration-300 flex flex-col border-t-2 border-t-transparent hover:border-t-brand-primary'
      : 'group cursor-pointer product-card bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] flex flex-col';

  const buttonClass =
    variant === 'home'
      ? 'w-full py-2 bg-brand-primary text-white font-body font-medium text-sm rounded-lg text-center hover:bg-[#005580] transition-colors disabled:opacity-60'
      : 'w-full py-2 border-2 border-brand-primary text-brand-primary font-body font-medium text-sm rounded-lg text-center hover:bg-brand-primary hover:text-white transition-colors disabled:opacity-60';

  return (
    <div className={cardClass} data-cat={category} style={{ transitionDelay: delay || '0ms' }}>
      <Link href={href} className="flex flex-col flex-1">
        <div className="relative aspect-square overflow-hidden bg-brand-surface">
          {image && (
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {product.on_sale && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full bg-brand-secondary text-brand-text">
              Sale
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-sans font-bold text-base text-brand-text mb-1">{product.name}</h3>
          <div className="mt-auto flex items-baseline gap-2 mb-4">
            <span className={`font-sans font-bold text-lg ${regularPrice ? 'text-brand-primary' : 'text-brand-text'}`}>
              {price}
            </span>
            {regularPrice ? (
              <span className="text-xs text-brand-text/40 font-body line-through">{regularPrice}</span>
            ) : (
              <span className="text-xs text-brand-text/40 font-body">onwards</span>
            )}
          </div>
        </div>
      </Link>
      <div className="px-6 pb-6 -mt-2">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.(product);
          }}
          disabled={isAdding}
          className={buttonClass}
        >
          {isAdding ? 'Adding…' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

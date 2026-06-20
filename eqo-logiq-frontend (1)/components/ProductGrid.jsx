'use client';

import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { inferProductCategory } from '../lib/woocommerce';

const FILTERS = [
  { id: 'all', label: 'All Products' },
  { id: 'bottles', label: 'Bottles' },
  { id: 'oral', label: 'Oral Care' },
  { id: 'bundles', label: 'Bundles' },
];

export default function ProductGrid({
  variant = 'shop',
  limit,
  columnsClass = 'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8',
  showFilters = false,
  embedded = false,
}) {
  const { products, loading, error } = useProducts();
  const { addToCart, isAdding } = useCart();
  const [activeFilter, setActiveFilter] = useState('all');
  const [addingId, setAddingId] = useState(null);

  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'all') return true;
    return inferProductCategory(product) === activeFilter;
  });

  const visibleProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  const handleAddToCart = async (product) => {
    setAddingId(product.id);
    try {
      await addToCart(product.id, 1);
    } finally {
      setAddingId(null);
    }
  };

  const grid = (
    <div className={columnsClass}>
      {loading &&
        Array.from({ length: limit || 4 }).map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(34,34,34,0.07)] animate-pulse"
          >
            <div className="aspect-square bg-brand-surface" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-brand-surface rounded w-3/4" />
              <div className="h-3 bg-brand-surface rounded w-full" />
              <div className="h-8 bg-brand-surface rounded w-1/2" />
            </div>
          </div>
        ))}

      {!loading && error && (
        <p className="col-span-full font-body text-brand-text/60 text-center py-12">{error}</p>
      )}

      {!loading && !error && visibleProducts.length === 0 && (
        <p className="col-span-full font-body text-brand-text/60 text-center py-12">No products found.</p>
      )}

      {!loading &&
        !error &&
        visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            variant={variant}
            category={inferProductCategory(product)}
            delay={`${index * 60}ms`}
            onAddToCart={handleAddToCart}
            isAdding={isAdding && addingId === product.id}
          />
        ))}
    </div>
  );

  if (embedded) {
    return (
      <>
        {showFilters && (
          <div className="mb-8 flex items-center gap-3 overflow-x-auto no-scrollbar">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn font-body font-medium text-sm px-6 py-2 rounded-full border whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'active border-brand-primary'
                    : 'border-brand-text/20 text-brand-text/70'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
        {grid}
      </>
    );
  }

  return (
    <>
      {showFilters && (
        <section className="bg-brand-base sticky top-[72px] z-40 py-4 border-b border-brand-text/8">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-3 overflow-x-auto no-scrollbar">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn font-body font-medium text-sm px-6 py-2 rounded-full border whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'active border-brand-primary'
                    : 'border-brand-text/20 text-brand-text/70'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="bg-brand-base py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">{grid}</div>
      </section>
    </>
  );
}

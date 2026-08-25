'use client';

import { useEffect, useState } from 'react';
import { WC_API_BASE } from '../lib/woocommerce';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        // Store API defaults to per_page=10; request more so the grid shows the full catalogue.
        const response = await fetch(`${WC_API_BASE}/products?per_page=100`);
        if (!response.ok) throw new Error('Failed to load products.');

        const data = await response.json();
        if (!cancelled) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load products.');
          setProducts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}

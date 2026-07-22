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
        const response = await fetch(`${WC_API_BASE}/products`);
        // #region agent log
        fetch('http://127.0.0.1:7812/ingest/17e9cf14-25f8-4e03-be7e-97be2a641220',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'2bacbb'},body:JSON.stringify({sessionId:'2bacbb',runId:'pre-fix',hypothesisId:'A,D',location:'hooks/useProducts.js:20',message:'Catalog API response',data:{url:`${WC_API_BASE}/products`,status:response.status,ok:response.ok},timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        if (!response.ok) throw new Error('Failed to load products.');

        const data = await response.json();
        // #region agent log
        fetch('http://127.0.0.1:7812/ingest/17e9cf14-25f8-4e03-be7e-97be2a641220',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'2bacbb'},body:JSON.stringify({sessionId:'2bacbb',runId:'pre-fix',hypothesisId:'A,D',location:'hooks/useProducts.js:27',message:'Catalog products received',data:{count:Array.isArray(data)?data.length:null,products:Array.isArray(data)?data.map(({id,slug,prices})=>({id,slug,price:prices?.price,regularPrice:prices?.regular_price})):null},timestamp:Date.now()})}).catch(()=>{});
        // #endregion
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

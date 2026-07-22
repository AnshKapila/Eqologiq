'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useSavedItems } from '../../../context/SavedItemsContext';

export default function ProductClient({ product }) {
  const { addToCart, isAdding } = useCart();
  const { toggleSavedItem, isItemSaved } = useSavedItems();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  const saved = isItemSaved(product?.id);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7812/ingest/17e9cf14-25f8-4e03-be7e-97be2a641220',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'2bacbb'},body:JSON.stringify({sessionId:'2bacbb',runId:'pre-fix',hypothesisId:'B,D',location:'app/product/[slug]/ProductClient.jsx:17',message:'Product page payload rendered',data:{id:product?.id,slug:product?.slug,price:product?.prices?.price,regularPrice:product?.prices?.regular_price},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }, [product]);

  async function onAdd() {
    setError(null);
    try {
      await addToCart(product.id, quantity);
    } catch (err) {
      setError(err?.message || 'Unable to add to cart.');
    }
  }

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center border-2 border-brand-text/15 rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-4 py-3 text-brand-text/60 hover:text-brand-text transition-colors font-sans font-bold"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-3 font-sans font-bold text-brand-text min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-4 py-3 text-brand-text/60 hover:text-brand-text transition-colors font-sans font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={onAdd}
          disabled={isAdding}
          className="flex-1 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl text-center hover:bg-[#005580] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isAdding ? 'Adding…' : 'Add to Cart'}
        </button>
      </div>

      <button
        type="button"
        onClick={() => toggleSavedItem(product)}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-sans font-bold text-sm transition-colors mb-8 ${
          saved
            ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
            : 'border-brand-text/15 text-brand-text/70 hover:border-brand-primary hover:text-brand-primary'
        }`}
        aria-pressed={saved}
      >
        <Heart
          className={`w-4 h-4 ${saved ? 'fill-brand-primary text-brand-primary' : ''}`}
        />
        {saved ? 'Saved' : 'Save Item'}
      </button>

      {error ? <p className="font-body text-sm text-red-600 mb-4">{error}</p> : null}
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useSavedItems } from '../../../context/SavedItemsContext';
import { isVariableProduct } from '../../../lib/woocommerce';
import { useVariation } from './VariationContext';

const EMPTY_IMAGES = {};

/** Build the selectable options for an attribute, preferring its terms for nice labels. */
function getAttributeOptions(attribute, variations) {
  if (Array.isArray(attribute.terms) && attribute.terms.length > 0) {
    return attribute.terms.map((term) => ({ label: term.name, slug: term.slug, name: term.name }));
  }

  const seen = new Map();
  (variations || []).forEach((variation) => {
    (variation.attributes || []).forEach((va) => {
      if (va.name === attribute.name && va.value && !seen.has(va.value)) {
        seen.set(va.value, { label: va.value, slug: va.value, name: va.value });
      }
    });
  });
  return Array.from(seen.values());
}

/** A variation attribute value matches a chosen option (empty value = "Any"). */
function matchesOption(variationValue, option) {
  if (!variationValue) return true;
  if (!option) return false;
  const value = String(variationValue).toLowerCase();
  return value === String(option.slug).toLowerCase() || value === String(option.name).toLowerCase();
}

export default function ProductClient({ product, variationImages = EMPTY_IMAGES }) {
  const { addToCart, isAdding } = useCart();
  const { toggleSavedItem, isItemSaved } = useSavedItems();
  const { setSelectedVariation } = useVariation();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState(null);

  const saved = isItemSaved(product?.id);
  const isVariable = isVariableProduct(product);

  const variationAttributes = useMemo(() => {
    const attrs = product?.attributes || [];
    const withVariations = attrs.filter((a) => a.has_variations);
    return withVariations.length > 0 ? withVariations : attrs;
  }, [product]);

  const matchedVariation = useMemo(() => {
    if (!isVariable) return null;
    const allChosen = variationAttributes.every((a) => selected[a.name]);
    if (!allChosen) return null;

    return (
      (product.variations || []).find((variation) =>
        (variation.attributes || []).every((va) => matchesOption(va.value, selected[va.name]))
      ) || null
    );
  }, [isVariable, product, selected, variationAttributes]);

  const needsSelection = isVariable && !matchedVariation;
  const matchedId = matchedVariation?.id || null;

  // Keep the gallery in step with the chosen variation, so the photo on screen
  // always matches what will be added to the cart.
  useEffect(() => {
    if (!matchedId) {
      setSelectedVariation(null);
      return;
    }

    setSelectedVariation({ id: matchedId, image: variationImages[matchedId] || null });
  }, [matchedId, setSelectedVariation, variationImages]);

  function chooseOption(attributeName, option) {
    setError(null);
    setSelected((prev) => ({ ...prev, [attributeName]: option }));
  }

  async function onAdd() {
    setError(null);

    if (isVariable && !matchedVariation) {
      setError('Please select an option first.');
      return;
    }

    try {
      if (isVariable) {
        const variationPayload = (matchedVariation.attributes || []).map((a) => ({
          attribute: a.name,
          value: a.value,
        }));
        await addToCart(matchedVariation.id, quantity, variationPayload);
      } else {
        await addToCart(product.id, quantity);
      }
    } catch (err) {
      setError(err?.message || 'Unable to add to cart.');
    }
  }

  return (
    <div>
      {isVariable && variationAttributes.length > 0 ? (
        <div className="mb-6 space-y-5">
          {variationAttributes.map((attribute) => {
            const options = getAttributeOptions(attribute, product.variations);
            const chosen = selected[attribute.name];

            return (
              <div key={attribute.name}>
                <p className="font-sans font-bold text-xs text-brand-text/50 uppercase tracking-wider mb-2">
                  {attribute.name}
                  {chosen ? (
                    <span className="text-brand-text/70 normal-case ml-2 font-body">{chosen.label}</span>
                  ) : null}
                </p>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => {
                    const isActive = chosen?.slug === option.slug && chosen?.name === option.name;

                    return (
                      <button
                        key={option.slug || option.name}
                        type="button"
                        onClick={() => chooseOption(attribute.name, option)}
                        aria-pressed={isActive}
                        className={`px-4 py-2 rounded-xl border-2 font-sans font-bold text-sm transition-colors ${
                          isActive
                            ? 'border-brand-primary bg-brand-primary/5 text-brand-primary'
                            : 'border-brand-text/15 text-brand-text/70 hover:border-brand-primary hover:text-brand-primary'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

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
          disabled={isAdding || needsSelection}
          className="flex-1 py-4 bg-brand-primary text-white font-sans font-bold text-base rounded-xl text-center hover:bg-[#005580] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isAdding ? 'Adding…' : needsSelection ? 'Select an option' : 'Add to Cart'}
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

'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const VariationContext = createContext(null);

const EMPTY = { selectedVariation: null, setSelectedVariation: () => {} };

/**
 * Shares the chosen variation between the gallery and the add-to-cart controls,
 * which sit in separate branches of the product page tree.
 */
export function VariationProvider({ children }) {
  const [selectedVariation, setSelectedVariation] = useState(null);

  const value = useMemo(
    () => ({ selectedVariation, setSelectedVariation }),
    [selectedVariation]
  );

  return <VariationContext.Provider value={value}>{children}</VariationContext.Provider>;
}

export function useVariation() {
  return useContext(VariationContext) || EMPTY;
}

'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const SAVED_ITEMS_KEY = 'eqo_saved_items';

const SavedItemsContext = createContext(null);

function readSavedItems() {
  if (typeof window === 'undefined') return [];

  try {
    const raw = localStorage.getItem(SAVED_ITEMS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function SavedItemsProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setSavedItems(readSavedItems());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(savedItems));
  }, [savedItems, isHydrated]);

  const isItemSaved = useCallback(
    (productId) => savedItems.some((item) => Number(item.id) === Number(productId)),
    [savedItems]
  );

  const toggleSavedItem = useCallback((product) => {
    const id = Number(product?.id);
    if (!id) return;

    setSavedItems((prev) => {
      const exists = prev.some((item) => Number(item.id) === id);
      if (exists) {
        return prev.filter((item) => Number(item.id) !== id);
      }
      return [...prev, product];
    });
  }, []);

  const value = useMemo(
    () => ({
      savedItems,
      isHydrated,
      toggleSavedItem,
      isItemSaved,
    }),
    [savedItems, isHydrated, toggleSavedItem, isItemSaved]
  );

  return <SavedItemsContext.Provider value={value}>{children}</SavedItemsContext.Provider>;
}

export function useSavedItems() {
  const context = useContext(SavedItemsContext);
  if (!context) {
    throw new Error('useSavedItems must be used within SavedItemsProvider');
  }
  return context;
}

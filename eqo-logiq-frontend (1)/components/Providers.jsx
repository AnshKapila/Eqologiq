'use client';

import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import { SavedItemsProvider } from '../context/SavedItemsContext';

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <SavedItemsProvider>{children}</SavedItemsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

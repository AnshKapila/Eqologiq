'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  WC_API_BASE,
  CART_TOKEN_KEY,
  CART_NONCE_KEY,
  buildAddressPayload,
  clearCartSession,
  getCartAuthHeaders,
  saveCartSession,
  WC_FETCH_OPTIONS,
} from '../lib/woocommerce';
import { AUTH_TOKEN_KEY } from './AuthContext';

const CartContext = createContext(null);

function getCheckoutHeaders() {
  const headers = { ...getCartAuthHeaders() };

  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem(AUTH_TOKEN_KEY);
    if (jwt) {
      headers.Authorization = `Bearer ${jwt}`;
    }
  }

  return headers;
}

function resolveItemCount(data) {
  if (!data) return 0;
  if (Array.isArray(data.items)) {
    return data.items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  }
  if (data.items_count != null) return Number(data.items_count);
  return 0;
}

function isFullCartPayload(data) {
  return Boolean(data && Array.isArray(data.items));
}

function needsPersistentCartSanitize(cartData, productId) {
  if (!Array.isArray(cartData?.items)) return false;
  return cartData.items.some((item) => Number(item.id) !== Number(productId));
}

export function CartProvider({ children }) {
  const [cartToken, setCartToken] = useState(null);
  const [nonce, setNonce] = useState(null);
  const [cart, setCart] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingItemKey, setUpdatingItemKey] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState(null);

  const lastMutationAt = useRef(0);
  const initPromiseRef = useRef(null);

  const syncSession = useCallback((response) => {
    const session = saveCartSession(response);
    if (session?.token) setCartToken(session.token);
    if (session?.nonce) setNonce(session.nonce);
    return session;
  }, []);

  const applyCartResponse = useCallback((data, source = 'fetch') => {
    if (!data) return;

    if (source === 'mutation') {
      lastMutationAt.current = Date.now();
    }

    setCart(data);
    setItemCount(resolveItemCount(data));
  }, []);

  const fetchCart = useCallback(
    async ({ force = false, startedAt = Date.now() } = {}) => {
      const response = await fetch(`${WC_API_BASE}/cart`, {
        ...WC_FETCH_OPTIONS,
        headers: getCartAuthHeaders(),
      });

      syncSession(response);

      if (response.status === 401 || response.status === 403) {
        clearCartSession();
        setCartToken(null);
        setNonce(null);

        const retryResponse = await fetch(`${WC_API_BASE}/cart`, {
          ...WC_FETCH_OPTIONS,
          headers: { 'Content-Type': 'application/json' },
        });

        syncSession(retryResponse);

        if (!retryResponse.ok) {
          throw new Error('Unable to initialize cart session.');
        }

        const retryData = await retryResponse.json();
        if (force || startedAt >= lastMutationAt.current) {
          applyCartResponse(retryData, force ? 'mutation' : 'fetch');
        }
        return retryData;
      }

      if (!response.ok) {
        throw new Error('Unable to load cart.');
      }

      const data = await response.json();

      if (force || startedAt >= lastMutationAt.current) {
        applyCartResponse(data, force ? 'mutation' : 'fetch');
      }

      return data;
    },
    [applyCartResponse, syncSession]
  );

  const initCartSession = useCallback(async () => {
    if (initPromiseRef.current) {
      return initPromiseRef.current;
    }

    const startedAt = Date.now();
    const promise = fetchCart({ startedAt }).finally(() => {
      initPromiseRef.current = null;
    });

    initPromiseRef.current = promise;
    return promise;
  }, [fetchCart]);

  useEffect(() => {
    const storedToken = localStorage.getItem(CART_TOKEN_KEY);
    const storedNonce = localStorage.getItem(CART_NONCE_KEY);

    if (storedToken) {
      setCartToken(storedToken);
      if (storedNonce) setNonce(storedNonce);
    } else {
      setCart(null);
      setItemCount(0);
      setCartToken(null);
      setNonce(null);
    }

    initCartSession()
      .catch(() => {
        clearCartSession();
        setCartToken(null);
        setNonce(null);
        setCart(null);
        setItemCount(0);
      })
      .finally(() => {
        setIsHydrated(true);
      });
  }, [initCartSession]);

  const ensureCartSession = useCallback(async () => {
    const storedNonce = localStorage.getItem(CART_NONCE_KEY);
    const storedToken = localStorage.getItem(CART_TOKEN_KEY);
    const currentNonce = nonce || storedNonce;
    const currentToken = cartToken || storedToken;
    if (!currentNonce || !currentToken) {
      await initCartSession();
    }
  }, [nonce, cartToken, initCartSession]);

  const postCartRequest = useCallback(
    async (url, body) => {
      await ensureCartSession();

      const response = await fetch(url, {
        ...WC_FETCH_OPTIONS,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getCartAuthHeaders(),
        },
        body: JSON.stringify(body),
      });

      syncSession(response);

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        console.error('Cart API Error:', data);
        throw new Error(data?.message || data?.code || 'Cart request failed.');
      }

      return data;
    },
    [ensureCartSession, syncSession]
  );

  const sanitizePersistentCartMerge = useCallback(
    async (cartData, productId) => {
      if (!Array.isArray(cartData?.items)) {
        applyCartResponse(cartData, 'mutation');
        return cartData;
      }

      const extras = cartData.items.filter((item) => Number(item.id) !== Number(productId));
      let lastData = cartData;

      for (const item of extras) {
        lastData = await postCartRequest(`${WC_API_BASE}/cart/remove-item`, { key: item.key });
      }

      if (isFullCartPayload(lastData)) {
        applyCartResponse(lastData, 'mutation');
      }

      return lastData;
    },
    [applyCartResponse, postCartRequest]
  );

  const refreshCart = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      return await fetchCart({ force: true });
    } catch (err) {
      setError(err.message || 'Unable to load cart.');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [fetchCart]);

  const cartMutation = useCallback(
    async (url, body, itemKey = null) => {
      await ensureCartSession();
      setIsUpdating(true);
      if (itemKey) setUpdatingItemKey(itemKey);

      try {
        const response = await fetch(url, {
          ...WC_FETCH_OPTIONS,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...getCartAuthHeaders(),
          },
          body: JSON.stringify(body),
        });

        syncSession(response);

        const data = await response.json().catch(() => null);
        // #region agent log
        fetch('http://127.0.0.1:7812/ingest/17e9cf14-25f8-4e03-be7e-97be2a641220',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'2bacbb'},body:JSON.stringify({sessionId:'2bacbb',runId:'pre-fix',hypothesisId:'C',location:'context/CartContext.jsx:370',message:'Add-to-cart API result',data:{requestedProductId:id,requestedQuantity:qty,status:response.status,ok:response.ok,cartItems:Array.isArray(data?.items)?data.items.map((item)=>({id:item.id,quantity:item.quantity,price:item.prices?.price,lineTotal:item.totals?.line_total})):null},timestamp:Date.now()})}).catch(()=>{});
        // #endregion

        if (!response.ok) {
          console.error('Cart API Error:', data);
          const message =
            data?.message ||
            data?.code ||
            `Cart update failed (${response.status}).`;
          throw new Error(message);
        }

        if (!data) {
          throw new Error('Empty response from cart API.');
        }

        if (isFullCartPayload(data)) {
          applyCartResponse(data, 'mutation');
        }

        return data;
      } catch (err) {
        setError(err.message || 'Cart update failed.');
        throw err;
      } finally {
        setIsUpdating(false);
        setUpdatingItemKey(null);
      }
    },
    [applyCartResponse, ensureCartSession, syncSession]
  );

  const removeItem = useCallback(
    async (cartKey) => {
      if (!cartKey) {
        throw new Error('Invalid cart item.');
      }
      return cartMutation(`${WC_API_BASE}/cart/remove-item`, { key: cartKey }, cartKey);
    },
    [cartMutation]
  );

  const updateQuantity = useCallback(
    async (cartKey, newQuantity) => {
      if (!cartKey) {
        throw new Error('Invalid cart item.');
      }

      const qty = Number(newQuantity);
      if (Number.isNaN(qty)) {
        throw new Error('Invalid quantity.');
      }

      if (qty <= 0) {
        return removeItem(cartKey);
      }

      return cartMutation(
        `${WC_API_BASE}/cart/update-item`,
        { key: cartKey, quantity: qty },
        cartKey
      );
    },
    [cartMutation, removeItem]
  );

  const addToCart = useCallback(
    async (productId, quantity = 1) => {
      setIsAdding(true);
      setError(null);

      const id = Number(productId);
      const qty = Number(quantity) || 1;

      if (!id || Number.isNaN(id)) {
        const message = 'Invalid product ID.';
        setError(message);
        throw new Error(message);
      }

      try {
        await ensureCartSession();

        const wasEmpty = resolveItemCount(cart) === 0;

        const response = await fetch(`${WC_API_BASE}/cart/add-item`, {
          ...WC_FETCH_OPTIONS,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...getCartAuthHeaders(),
          },
          body: JSON.stringify({ id, quantity: qty }),
        });

        syncSession(response);

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          console.error('Cart API Error:', data);
          const message =
            data?.message ||
            data?.code ||
            `Unable to add item to cart (${response.status}).`;
          throw new Error(message);
        }

        if (!data) {
          throw new Error('Empty response from cart API.');
        }

        let cartData = data;
        if (!isFullCartPayload(cartData)) {
          console.warn('add-item returned an unexpected payload:', cartData);
          return cartData;
        }

        if (wasEmpty && needsPersistentCartSanitize(cartData, id)) {
          console.warn(
            'WooCommerce merged extra persistent cart items; removing unrelated products.'
          );
          cartData = await sanitizePersistentCartMerge(cartData, id);
        } else {
          applyCartResponse(cartData, 'mutation');
        }

        return cartData;
      } catch (err) {
        console.error('addToCart failed:', err);
        setError(err.message || 'Unable to add item to cart.');
        throw err;
      } finally {
        setIsAdding(false);
      }
    },
    [applyCartResponse, cart, ensureCartSession, sanitizePersistentCartMerge, syncSession]
  );

  const resetCart = useCallback(() => {
    clearCartSession();
    setCartToken(null);
    setNonce(null);
    setCart(null);
    setItemCount(0);
  }, []);

  const updateCustomer = useCallback(
    async (formData) => {
      const billing_address = buildAddressPayload(formData);
      const shipping_address = { ...billing_address };

      const data = await postCartRequest(`${WC_API_BASE}/cart/update-customer`, {
        billing_address,
        shipping_address,
      });

      if (isFullCartPayload(data)) {
        applyCartResponse(data, 'mutation');
      }

      return data;
    },
    [applyCartResponse, postCartRequest]
  );

  const selectShippingRate = useCallback(
    async (packageId, rateId) => {
      const data = await postCartRequest(`${WC_API_BASE}/cart/select-shipping-rate`, {
        package_id: packageId,
        rate_id: rateId,
      });

      if (isFullCartPayload(data)) {
        applyCartResponse(data, 'mutation');
      }

      return data;
    },
    [applyCartResponse, postCartRequest]
  );

  const submitCheckout = useCallback(
    async (formData, { payment_method: paymentMethod = 'cod' } = {}) => {
      setIsCheckingOut(true);
      setError(null);

      const billing_address = buildAddressPayload(formData);
      const shipping_address = { ...billing_address };

      try {
        await ensureCartSession();

        const response = await fetch(`${WC_API_BASE}/checkout`, {
          ...WC_FETCH_OPTIONS,
          method: 'POST',
          headers: getCheckoutHeaders(),
          body: JSON.stringify({
            billing_address,
            shipping_address,
            payment_method: paymentMethod,
          }),
        });

        syncSession(response);

        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          return data;
        }

        throw new Error(data.message || 'Checkout failed. Please try again.');
      } catch (err) {
        setError(err.message || 'Checkout failed. Please try again.');
        throw err;
      } finally {
        setIsCheckingOut(false);
      }
    },
    [ensureCartSession, syncSession]
  );

  const value = useMemo(
    () => ({
      cart,
      cartToken,
      nonce,
      itemCount,
      isHydrated,
      isLoading,
      isAdding,
      isUpdating,
      updatingItemKey,
      isCheckingOut,
      error,
      addToCart,
      updateQuantity,
      removeItem,
      refreshCart,
      updateCustomer,
      selectShippingRate,
      submitCheckout,
      resetCart,
    }),
    [
      cart,
      cartToken,
      nonce,
      itemCount,
      isHydrated,
      isLoading,
      isAdding,
      isUpdating,
      updatingItemKey,
      isCheckingOut,
      error,
      addToCart,
      updateQuantity,
      removeItem,
      refreshCart,
      updateCustomer,
      selectShippingRate,
      submitCheckout,
      resetCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const AuthContext = createContext(null);

export const AUTH_TOKEN_KEY = 'eqo_auth_token';
export const AUTH_USER_KEY = 'eqo_auth_user';

// Uses Next rewrites in dev (see next.config.mjs) and same-origin in export.
const JWT_API_BASE = '/wp-json/jwt-auth/v1';
const WP_API_BASE = '/wp-json/wp/v2';

const AUTH_FETCH_OPTIONS = {
  credentials: 'omit',
};

function safeJsonParse(value) {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function getStoredToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

function getStoredUser() {
  if (typeof window === 'undefined') return null;
  return safeJsonParse(localStorage.getItem(AUTH_USER_KEY));
}

function persistAuth({ token, user }) {
  if (typeof window === 'undefined') return;
  if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
  if (user) localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}

function clearAuth() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
}

function getBearerHeaders(token) {
  if (!token) return { 'Content-Type': 'application/json' };
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
}

async function fetchWpMe(token) {
  // `users/me` can require elevated capabilities depending on WP config;
  // we gracefully accept minimal payloads if WP blocks it.
  const response = await fetch(`${WP_API_BASE}/users/me`, {
    ...AUTH_FETCH_OPTIONS,
    headers: getBearerHeaders(token),
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      data?.message ||
      data?.code ||
      `Unable to load user profile (${response.status}).`;
    throw new Error(message);
  }

  return data;
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initPromiseRef = useRef(null);

  const logout = useCallback(() => {
    clearAuth();
    setToken(null);
    setUser(null);
    setError(null);
  }, []);

  const refreshUser = useCallback(
    async ({ tokenOverride } = {}) => {
      const activeToken = tokenOverride || token || getStoredToken();
      if (!activeToken) throw new Error('Missing auth token.');

      const me = await fetchWpMe(activeToken);
      setUser(me);
      persistAuth({ token: activeToken, user: me });
      return me;
    },
    [token]
  );

  const validateToken = useCallback(async (tokenToValidate) => {
    const response = await fetch(`${JWT_API_BASE}/token/validate`, {
      ...AUTH_FETCH_OPTIONS,
      method: 'POST',
      headers: getBearerHeaders(tokenToValidate),
    });

    // Some WP setups respond with 200 + body, others 200 empty; handle both.
    if (!response.ok) {
      const data = await response.json().catch(() => null);
      const message =
        data?.message ||
        data?.code ||
        `Token validation failed (${response.status}).`;
      throw new Error(message);
    }

    return true;
  }, []);

  const initAuth = useCallback(async () => {
    if (initPromiseRef.current) return initPromiseRef.current;

    const promise = (async () => {
      setError(null);

      const storedToken = getStoredToken();
      const storedUser = getStoredUser();

      if (!storedToken) {
        setToken(null);
        setUser(null);
        return { token: null, user: null };
      }

      setToken(storedToken);
      if (storedUser) setUser(storedUser);

      try {
        await validateToken(storedToken);
        const me = await refreshUser({ tokenOverride: storedToken });
        return { token: storedToken, user: me };
      } catch {
        logout();
        return { token: null, user: null };
      }
    })()
      .finally(() => {
        initPromiseRef.current = null;
        setIsHydrated(true);
      });

    initPromiseRef.current = promise;
    return promise;
  }, [logout, refreshUser, validateToken]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  const login = useCallback(
    async ({ username, password }) => {
      setIsLoading(true);
      setError(null);

      const body = new URLSearchParams();
      body.set('username', username || '');
      body.set('password', password || '');

      try {
        const response = await fetch(`${JWT_API_BASE}/token`, {
          ...AUTH_FETCH_OPTIONS,
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          const message =
            data?.message ||
            data?.code ||
            `Login failed (${response.status}).`;
          throw new Error(message);
        }

        const jwt = data?.token;
        if (!jwt) throw new Error('Missing token in login response.');

        setToken(jwt);
        persistAuth({ token: jwt, user: null });

        // Prefer /users/me for canonical profile.
        const me = await refreshUser({ tokenOverride: jwt }).catch(() => {
          // Fallback: plugin returns some user info fields on token response.
          const fallbackUser = data?.user || data?.data?.user || null;
          if (fallbackUser) {
            setUser(fallbackUser);
            persistAuth({ token: jwt, user: fallbackUser });
          }
          return fallbackUser;
        });

        return { token: jwt, user: me };
      } catch (err) {
        logout();
        const message = err?.message || 'Login failed.';
        setError(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [logout, refreshUser]
  );

  const updateUser = useCallback(
    (updates) => {
      setUser((prev) => {
        if (!prev) return prev;
        const next = { ...prev, ...updates };
        persistAuth({ token: token || getStoredToken(), user: next });
        return next;
      });
    },
    [token]
  );

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      isHydrated,
      isLoading,
      error,
      login,
      logout,
      refreshUser,
      validateToken,
      updateUser,
    }),
    [token, user, isHydrated, isLoading, error, login, logout, refreshUser, validateToken, updateUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}


const WP_BASE = process.env.NEXT_PUBLIC_WP_BASE_URL || '';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

export const WC_API_BASE = `${WP_BASE}/wp-json/wc/store/v1`;
export const WP_JSON_BASE = `${WP_BASE}/wp-json`;
export const EQO_API_BASE = `${WP_JSON_BASE}/eqo/v1`;

export const CART_TOKEN_KEY = 'eqo_cart_token';
export const CART_NONCE_KEY = 'eqo_cart_nonce';

/** Omit cookies so cart identity relies only on Cart-Token, not WP session cookies. */
export const WC_FETCH_OPTIONS = {
  credentials: 'omit',
};

/** Rewrite WC payment redirects that point at the static frontend to the WP backend. */
export function resolvePaymentRedirectUrl(redirectUrl) {
  if (!redirectUrl || !WP_BASE) return redirectUrl;

  try {
    const target = new URL(redirectUrl);
    const wpOrigin = new URL(WP_BASE).origin;
    const frontendOrigins = new Set();

    if (SITE_URL) {
      frontendOrigins.add(new URL(SITE_URL).origin);
    }
    if (typeof window !== 'undefined') {
      frontendOrigins.add(window.location.origin);
    }

    if (frontendOrigins.has(target.origin) && target.origin !== wpOrigin) {
      return `${wpOrigin}${target.pathname}${target.search}${target.hash}`;
    }
  } catch {
    // Not a parseable absolute URL — return unchanged.
  }

  return redirectUrl;
}

export function formatProductPrice(prices) {
  if (!prices?.price) return '';
  const minorUnit = prices.currency_minor_unit ?? 2;
  const amount = Number(prices.price) / Math.pow(10, minorUnit);
  const prefix = prices.currency_prefix ?? '₹';
  return `${prefix}${amount.toLocaleString('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: minorUnit,
  })}`;
}

export function getProductPriceAmount(prices) {
  if (!prices?.price) return 0;
  const minorUnit = prices.currency_minor_unit ?? 2;
  return Number(prices.price) / Math.pow(10, minorUnit);
}

export function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export const INDIAN_STATE_CODES = {
  'Andhra Pradesh': 'AP',
  'Assam': 'AS',
  'Bihar': 'BR',
  'Chhattisgarh': 'CT',
  'Delhi': 'DL',
  'Goa': 'GA',
  'Gujarat': 'GJ',
  'Haryana': 'HR',
  'Himachal Pradesh': 'HP',
  'Jammu & Kashmir': 'JK',
  'Jharkhand': 'JH',
  'Karnataka': 'KA',
  'Kerala': 'KL',
  'Madhya Pradesh': 'MP',
  'Maharashtra': 'MH',
  'Odisha': 'OR',
  'Punjab': 'PB',
  'Rajasthan': 'RJ',
  'Tamil Nadu': 'TN',
  'Telangana': 'TS',
  'Uttar Pradesh': 'UP',
  'Uttarakhand': 'UK',
  'West Bengal': 'WB',
};

export function buildAddressPayload({ name, phone, email, address, city, pincode, state }) {
  const nameParts = name.trim().split(/\s+/);
  const first_name = nameParts[0] || '';
  const last_name = nameParts.slice(1).join(' ') || first_name;
  const stateCode = INDIAN_STATE_CODES[state] || state;

  return {
    first_name,
    last_name,
    address_1: address,
    city,
    state: stateCode,
    postcode: pincode,
    country: 'IN',
    email,
    phone,
  };
}

export function saveCartSession(response) {
  if (typeof window === 'undefined') return null;

  const token = response.headers.get('Cart-Token');
  const nonce = response.headers.get('Nonce');

  if (token) localStorage.setItem(CART_TOKEN_KEY, token);
  if (nonce) localStorage.setItem(CART_NONCE_KEY, nonce);

  return { token, nonce };
}

export function clearCartSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CART_TOKEN_KEY);
  localStorage.removeItem(CART_NONCE_KEY);
}

export function getCartAuthHeaders() {
  if (typeof window === 'undefined') return {};

  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem(CART_TOKEN_KEY);
  const nonce = localStorage.getItem(CART_NONCE_KEY);

  if (token) headers['Cart-Token'] = token;
  if (nonce) headers.Nonce = nonce;

  return headers;
}

export function inferProductCategory(product) {
  const haystack = [
    product.name,
    ...(product.categories || []).map((c) => c.name || c.slug || ''),
  ]
    .join(' ')
    .toLowerCase();

  if (haystack.includes('bundle')) return 'bundles';
  if (haystack.includes('brush') || haystack.includes('oral') || haystack.includes('scraper')) return 'oral';
  if (haystack.includes('bottle') || haystack.includes('flask')) return 'bottles';
  return 'all';
}

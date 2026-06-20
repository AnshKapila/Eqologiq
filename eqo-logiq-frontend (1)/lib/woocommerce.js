// Relative path: proxied to eqologiq.in in dev (see next.config.mjs rewrites),
// same-origin in production static export on Hostinger.
// TODO: switch to /backend/wp-json/ once WordPress is moved to that subfolder.
export const WC_API_BASE = '/wp-json/wc/store/v1';

export const CART_TOKEN_KEY = 'eqo_cart_token';
export const CART_NONCE_KEY = 'eqo_cart_nonce';

/** Omit cookies so cart identity relies only on Cart-Token, not WP session cookies. */
export const WC_FETCH_OPTIONS = {
  credentials: 'omit',
};

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

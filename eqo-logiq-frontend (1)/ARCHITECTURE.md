# Eqo Logiq Headless E-Commerce — Architectural Summary

Technical reference for the `eqologiq-next` workspace: a **Next.js App Router** storefront that talks to **WordPress + WooCommerce** over REST, deployed as a **static export** with client-side cart/checkout/auth.

---

## 1. Project Overview & Tech Stack

### Core versions

| Layer | Package | Version |
|-------|---------|---------|
| Framework | `next` | ^16.2.9 |
| UI | `react` / `react-dom` | ^19.2.7 |
| Styling | `tailwindcss` | ^3.4.19 |
| Icons | `lucide-react` | ^1.18.0 |
| CSS pipeline | `postcss`, `autoprefixer` | ^8.5.15, ^10.5.0 |

**Not installed:** framer-motion, `@tailwindcss/typography`, Redux/Zustand, React Query, axios. Animations use Tailwind keyframes + CSS `.reveal` / IntersectionObserver.

### Routing & Next.js config

File: `next.config.mjs`

| Setting | Effect |
|---------|--------|
| **App Router** | All routes under `app/` |
| **`trailingSlash: true`** | URLs end with `/` (e.g. `/shop/`, `/checkout/`) |
| **`output: 'export'`** (prod) | Static HTML/JS to `out/` — no Node server, no `app/api/` routes |
| **`images.unoptimized: true`** | Required for static export; no Next Image Optimization CDN |
| **Dev rewrites** | `/wp-json/*` → `https://eqologiq.in/wp-json/*` (CORS-free local dev) |

```javascript
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isDev
    ? {
        async rewrites() {
          return [
            {
              source: '/wp-json/:path*',
              destination: 'https://eqologiq.in/wp-json/:path*',
            },
          ];
        },
      }
    : { output: 'export' }),
};
```

### Language & module system

- **JavaScript only** (`.js` / `.jsx`), no TypeScript
- **ESM** in config (`next.config.mjs`, `postcss.config.mjs`)

### UI / design system

- **Tailwind** with brand tokens in `tailwind.config.js`: `brand.base`, `primary`, `secondary`, `text`, etc.
- **Fonts:** Space Grotesk (display/sans), Inter (body) — loaded via Google Fonts in `app/layout.js`
- **Global CSS:** `app/globals.css` — `.kicker`, `.reveal`, `.form-field`, `.input-field`, product prose
- **Icons:** lucide-react throughout; legacy inline SVG in login/register

### Directory layout

```
eqo-logiq-frontend/
├── app/                    # App Router pages & route segments
│   ├── layout.js           # Root layout, metadata, Providers shell
│   ├── globals.css
│   ├── page.js             # Homepage (static marketing + client product grid)
│   ├── shop/               # Shop listing (client fetch)
│   ├── product/[slug]/     # SSG product PDP
│   ├── cart/               # Client cart UI
│   ├── checkout/           # Checkout + /checkout/success/
│   ├── order-success/      # Post-gateway order confirmation
│   ├── account/            # Authenticated dashboard
│   ├── login/, register/   # Auth flows
│   ├── blog/, blog/[slug]/ # Blog (WP posts, partial SSG)
│   ├── about/, contact/, faq/, policy/, qrash-qourse/
│   ├── sitemap.js, robots.js
│   └── not-found.js
├── components/             # Navbar, ProductGrid, Footer, Reveal, etc.
├── context/                # AuthContext, CartContext, SavedItemsContext
├── hooks/                  # useProducts.js
├── lib/                    # woocommerce.js, downloadInvoice.js
├── public/images/          # Static marketing assets
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

**No** `app/api/`, `middleware.js`, or server actions for backend proxying in production.

---

## 2. Core Data Flow & State Management

### Provider tree

File: `components/Providers.jsx`

```
AuthProvider
  └── CartProvider
        └── SavedItemsProvider
              └── {children}
```

Mounted in `app/layout.js` wrapping Navbar, page content, SiteFooter, and `HomePageEffects`.

### Context responsibilities

| Context | File | Persistence | Backend |
|---------|------|-------------|---------|
| **Auth** | `context/AuthContext.jsx` | `localStorage`: `eqo_auth_token`, `eqo_auth_user` | JWT Auth + WP users API |
| **Cart** | `context/CartContext.jsx` | `localStorage`: `eqo_cart_token`, `eqo_cart_nonce` | WooCommerce Store API |
| **Saved Items** | `context/SavedItemsContext.jsx` | `localStorage`: `eqo_saved_items` | None (client-only wishlist) |

### Auth pipeline

**Endpoints (relative, proxied in dev):**

- `POST /wp-json/jwt-auth/v1/token` — login (`application/x-www-form-urlencoded`)
- `POST /wp-json/jwt-auth/v1/token/validate` — session restore
- `GET /wp-json/wp/v2/users/me` — profile (`Authorization: Bearer {jwt}`)

**Flow:**

1. On mount, `initAuth()` reads stored JWT, validates, fetches `/users/me`, or clears storage on failure.
2. `login({ username, password })` → JWT → `persistAuth` → `refreshUser`.
3. All auth fetches use `credentials: 'omit'` (no WP cookies).
4. `logout()` clears localStorage and in-memory state.
5. `isHydrated` gates protected routes (account redirects to `/login/?redirect=/account/`).

**Registration:** `RegisterClient.jsx` → `POST /wp-json/eqo/v1/register` → auto `login()` → redirect `/account/`.

### Cart pipeline

**Base:** `WC_API_BASE = '/wp-json/wc/store/v1'` (`lib/woocommerce.js`)

**Session headers** (from response headers, stored in localStorage):

- `Cart-Token`
- `Nonce`

All cart requests use `credentials: 'omit'` so identity is **Cart-Token only**, not WP session cookies.

**CartContext API surface:**

| Method | WC Store route | Purpose |
|--------|----------------|---------|
| `fetchCart` / init | `GET /cart` | Hydrate cart; 401/403 → clear session & retry |
| `addToCart` | `POST /cart/add-item` | Add product; sanitizes merged persistent-cart items |
| `updateQuantity` | `POST /cart/update-item` | Qty change |
| `removeItem` | `POST /cart/remove-item` | Line removal |
| `updateCustomer` | `POST /cart/update-customer` | Billing/shipping address |
| `selectShippingRate` | `POST /cart/select-shipping-rate` | Shipping method |
| `submitCheckout` | `POST /checkout` | Place order |
| `resetCart` | (local clear) | Post-success cleanup |

Checkout POST additionally sends JWT when logged in via `getCheckoutHeaders()` in `CartContext.jsx`.

### Saved items

Client-only array of product objects in `eqo_saved_items`. Used on PDP (`ProductClient.jsx`) and account dashboard. No server sync.

### Shared utilities (`lib/woocommerce.js`)

- `formatProductPrice`, `getProductPriceAmount` — minor-unit INR formatting
- `buildAddressPayload` — splits full name, maps Indian state names → ISO codes
- `inferProductCategory` — client-side shop filters (`bottles`, `oral`, `bundles`)
- `INDIAN_STATE_CODES` — used at checkout and account address forms

---

## 3. Backend API Tunnels & Data Ingestion

### Connection origins

| Environment | How `/wp-json/*` resolves |
|-------------|---------------------------|
| **Development** | Next rewrite → `https://eqologiq.in/wp-json/:path*` |
| **Production (static)** | Same-origin on deployed domain (Hostinger); WP must be reachable at `/wp-json/` on `eqologiq.in` |

**Build-time / SSR origin** (direct absolute fetch, bypasses rewrite):

```javascript
function getWpOrigin() {
  return (
    process.env.WP_ORIGIN ||
    process.env.NEXT_PUBLIC_WP_ORIGIN ||
    process.env.NEXT_PUBLIC_WP_BASE_URL ||
    'https://eqologiq.in'
  );
}
```

**Env vars referenced (no `.env` in repo):**

- `NEXT_PUBLIC_SITE_URL` — canonical site URL (metadata, JSON-LD, sitemap)
- `WP_ORIGIN` / `NEXT_PUBLIC_WP_ORIGIN` / `NEXT_PUBLIC_WP_BASE_URL` — WordPress backend for build-time fetches

**TODO in code:** migrate WP to `/backend/wp-json/` once WordPress moves subfolder.

### API surface map

```
/wp-json/wc/store/v1/          ← WooCommerce Store API (public cart/catalog)
  ├── products
  ├── cart, cart/add-item, cart/update-item, cart/remove-item
  ├── cart/update-customer, cart/select-shipping-rate
  ├── checkout
  └── order/{id}

/wp-json/jwt-auth/v1/          ← JWT Authentication for WP REST API
  ├── token
  └── token/validate

/wp-json/wp/v2/               ← WordPress core REST
  ├── users/me
  └── posts

/wp-json/eqo/v1/              ← Custom Eqo plugin routes
  ├── register
  ├── orders
  ├── update-profile
  ├── change-password
  ├── update-address
  └── download-invoice/{orderId}
```

Custom routes are built by stripping `/wc/store/v1` from `WC_API_BASE`:

```javascript
WC_API_BASE.replace('/wc/store/v1', '') + '/eqo/v1/orders'
// → /wp-json/eqo/v1/orders
```

### Public / SEO pages vs private pages

| Page type | Routes | Data strategy |
|-----------|--------|---------------|
| **SSG + build fetch** | `/product/[slug]/` | `generateStaticParams()` from hardcoded `PRODUCT_SLUGS`; `fetchProduct()` hits `{wpOrigin}/wp-json/wc/store/v1/products?slug=…` at build; `dynamicParams = false` |
| **SSG metadata** | `/blog/[slug]/` | WP `/wp-json/wp/v2/posts?slug=…&_embed=1`; fallback static `POST` object |
| **Build sitemap** | `app/sitemap.js` | Fetches products + posts from `wpOrigin`; `dynamic = 'force-static'` |
| **Static marketing** | `/`, `/about/`, `/policy/`, etc. | No product API at build; homepage embeds client `HomeProductGrid` |
| **Client catalog** | `/shop/`, homepage grid | `useProducts()` → `GET /wp-json/wc/store/v1/products` in browser |
| **Private / session** | `/cart/`, `/checkout/`, `/account/` | Cart-Token + optional JWT; all client-side `fetch` |

**Important split:** Product PDPs are **pre-rendered at build** with absolute WP URLs. Shop/home load products **in the browser** via relative `/wp-json/…` (same-origin in prod).

### Account private data

`AccountClient.jsx` (JWT required):

- `GET /wp-json/eqo/v1/orders`
- `POST /wp-json/eqo/v1/update-profile`
- `POST /wp-json/eqo/v1/change-password`
- `POST /wp-json/eqo/v1/update-address`
- Upsell: `GET /wp-json/wc/store/v1/products?per_page=3`

---

## 4. Critical Checkout & Payment Routing

### File chain

```
app/checkout/page.js          → Suspense wrapper
app/checkout/CheckoutContent.jsx   → UI + orchestration
context/CartContext.jsx       → updateCustomer, selectShippingRate, submitCheckout
lib/woocommerce.js            → buildAddressPayload, cart headers
```

### CheckoutContent orchestration

**State inputs from cart:**

- `cart.items`, `cart.totals`
- `cart.shipping_rates[0].shipping_rates` — shipping options
- `cart.payment_methods` — gateway IDs (`cod`, `phonepe`, …)

**Customer validation / sync:**

1. Form fields: `name`, `phone`, `email`, `address`, `city`, `pincode`, `state`.
2. `isAddressComplete(form)` gates debounced sync.
3. **600ms debounced** `updateCustomer(form)` on any complete address change.
4. Shipping change → `updateCustomer` + `selectShippingRate(package_id, rate_id)`.

**Submit sequence (`handleSubmit`):**

```
1. updateCustomer(form)           // if address complete
2. selectShippingRate(...)        // if rate selected
3. submitCheckout(form, { payment_method })
4. Branch on payment_method:
   ├── phonepe → window.location.href = response.payment_result.redirect_url
   ├── cod     → router.push(`/checkout/success?order_id=${order_id}`)
   └── else    → router.push('/account/') if no redirect_url
```

**`submitCheckout` payload:**

```json
{
  "billing_address": { /* buildAddressPayload */ },
  "shipping_address": { /* same as billing */ },
  "payment_method": "cod" | "phonepe" | ...
}
```

POST target: `POST /wp-json/wc/store/v1/checkout`

### Payment gateway redirect & return listeners

#### A. Checkout error return — `/checkout/?payment_error=…`

| Query param | Values handled | UI behavior |
|-------------|----------------|-------------|
| `payment_error` | `failed`, `cancelled` | Red banner: payment failed/cancelled, cart restored |

*(Set by backend/PhonePe redirect URL — not constructed in frontend checkout submit.)*

#### B. COD success — `/checkout/success/?order_id=…`

File: `app/checkout/success/SuccessClient.jsx`

| Param | Usage |
|-------|--------|
| `order_id` | Display order number; invoice download target |
| (none else) | Assumes COD; shows "Cash on delivery" |

On mount: `resetCart()` clears Cart-Token/Nonce and cart state.

Invoice: `handleDownloadInvoice(orderId, token)` → `GET /wp-json/eqo/v1/download-invoice/{orderId}` with Bearer JWT → blob PDF download.

#### C. Gateway success — `/order-success/?id=…&key=…`

File: `app/order-success/OrderSuccessContent.jsx`

| Param | Usage |
|-------|--------|
| `id` | WooCommerce order ID |
| `key` | Order key (auth for guest order lookup) |
| `billing_email` | Optional; read from `sessionStorage['eqo_order_email']` if present |

Fetches: `GET /wp-json/wc/store/v1/order/{id}?key={key}&billing_email={email}`

**Note:** `eqo_order_email` is **read** but **never written** anywhere in this codebase — likely intended to be set before PhonePe redirect (backend or missing frontend step).

### Two success routes summary

| Route | Typical payment | Params | Order data source |
|-------|-----------------|--------|-------------------|
| `/checkout/success/` | COD | `order_id` | Display only; no order API fetch |
| `/order-success/` | PhonePe / WC thank-you | `id`, `key` | WC Store API order endpoint |

---

## 5. Asset Proxying & Build Configuration

### External asset handling

| Asset type | Mechanism |
|------------|-----------|
| **Marketing images** | `public/images/*` — served as static files |
| **Product images** | WooCommerce `images[].src` URLs — rendered in `<img>` / `next/image` with `unoptimized` |
| **PhonePe logo** | Hardcoded CDN: `imgstatic.phonepe.com/...` |
| **Invoice PDFs** | Client fetch to `/wp-json/eqo/v1/download-invoice/{orderId}` → `response.blob()` → temporary object URL download |
| **Fonts** | Google Fonts CDN in layout `<head>` |
| **Contact form** | `Footer.jsx` posts to Formspree (`formspree.io/f/xaqgnykn`) |

There is **no** Next.js API route or middleware for PDF streaming. Security for invoices is **JWT Bearer** on the custom eqo endpoint.

### Build / export constraints

| Constraint | Implication |
|------------|-------------|
| `output: 'export'` | No SSR at runtime, no API routes, no ISR revalidation in prod |
| `images.unoptimized: true` | Required for static hosting |
| `trailingSlash: true` | All internal links should use trailing slashes |
| `dynamicParams = false` | Unknown product/blog slugs → 404 unless in `generateStaticParams` |
| `next: { revalidate: false }` on build fetches | Product/blog data frozen at build time |
| No `app/api/` | All backend traffic is browser → WP REST (or build → absolute WP URL) |

### SEO infrastructure

- **`app/sitemap.js`:** static routes + dynamic product/blog URLs from WP at build
- **`app/robots.js`:** allows all crawlers + explicit AI bots; points to `{SITE_URL}/sitemap.xml`
- **JSON-LD:** Organization/WebSite on homepage; Product schema on PDPs
- **Root metadata:** Open Graph, Twitter cards in `app/layout.js`

### Dev vs prod API tunnel

```
Development:
  Browser → /wp-json/* → Next.js dev rewrite → eqologiq.in/wp-json

Production:
  Browser → /wp-json/* → same-host WordPress
  next build → absolute fetch to WP_ORIGIN → static out/ files
```

---

## Quick reference: storage keys

| Key | Storage | Owner |
|-----|---------|-------|
| `eqo_auth_token` | localStorage | Auth |
| `eqo_auth_user` | localStorage | Auth |
| `eqo_cart_token` | localStorage | Cart |
| `eqo_cart_nonce` | localStorage | Cart |
| `eqo_saved_items` | localStorage | SavedItems |
| `eqo_order_email` | sessionStorage | order-success only (read-only in current code) |

---

## Gaps / collaborator notes

1. **Dual success pages** (`/checkout/success/` vs `/order-success/`) serve different payment flows; PhonePe return URL configuration lives on the WP/PhonePe plugin side.
2. **`eqo_order_email` sessionStorage** is never populated in frontend — guest order lookup on `/order-success/` may fail without backend setting it or passing `billing_email` another way.
3. **Product slug list** in `product/[slug]/page.js` is hardcoded (10 slugs); sitemap pulls live slugs from API — they can diverge.
4. **No runtime product revalidation** — catalog changes require rebuild for PDPs; shop page updates live via client fetch.
5. **Planned WP path change** — comment in `woocommerce.js` references future `/backend/wp-json/` migration.



This is new line
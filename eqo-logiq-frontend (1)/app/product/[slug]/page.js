import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ShieldCheck, FlaskConical, Thermometer, Recycle } from 'lucide-react';
import ProductClient from './ProductClient';
import ProductGallery from './ProductGallery';
import { VariationProvider } from './VariationContext';
import Reveal from '../../../components/Reveal';
import {
  WC_API_BASE,
  formatProductPrice,
  getProductFallbackImage,
  resolveContentUrls,
  resolveProductImages,
  stripHtml,
  toAbsoluteImageUrl,
} from '../../../lib/woocommerce';

const PRODUCT_SLUGS = [
  'plastic-free-screw-cap-bottle-single-wall-1-liter',
  'plastic-free-screw-cap-bottle-double-wall-750ml',
  'elements-tongue-cleaner-food-grade-steel-pack-of-4',
  'elements-tongue-cleaner-food-grade-steel',
  'toothbrush-travel-case',
  'borosilicate-tumbler-straw-and-bamboo-lid',
  'copper-tongue-cleaner',
  'toothbrush-set-of-2-2',
  'toothbrush-pack-of-4-2',
  'steel-ice-cubes-6-cubes',
];

export const dynamicParams = false;

function getWpOrigin() {
  return (
    process.env.WP_ORIGIN ||
    process.env.NEXT_PUBLIC_WP_ORIGIN ||
    process.env.NEXT_PUBLIC_WP_BASE_URL ||
    'https://eqologiq.in'
  );
}

/**
 * Build-time fetch with retry. The static export renders many pages in parallel
 * across build workers, and the backend intermittently refuses a connection
 * under that burst. Without a retry a single refused connection aborts the whole
 * export, so a transient blip would fail an otherwise good deployment.
 */
async function fetchJson(url, attempts = 4) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const res = await fetch(url, { method: 'GET', next: { revalidate: false } });
      if (res.ok) return await res.json().catch(() => null);
      // A 4xx is a real answer — the resource is absent, not unreachable.
      if (res.status >= 400 && res.status < 500) return null;
    } catch {
      // Connection-level failure; fall through and retry.
    }

    if (attempt < attempts) {
      await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    }
  }

  return null;
}

async function fetchProduct(slug) {
  const origin = getWpOrigin();
  const apiBase = WC_API_BASE.startsWith('http') ? WC_API_BASE : `${origin}${WC_API_BASE}`;
  const url = `${apiBase}/products?slug=${encodeURIComponent(slug)}&per_page=1`;
  const data = await fetchJson(url);
  return Array.isArray(data) ? data[0] : null;
}

function getRegularPrice(prices) {
  if (!prices?.regular_price || prices.regular_price === prices.price) return null;
  return formatProductPrice({ ...prices, price: prices.regular_price });
}

function getDiscountPercent(prices) {
  if (!prices?.regular_price || !prices?.price) return null;
  const regular = Number(prices.regular_price);
  const sale = Number(prices.price);
  if (!regular || regular <= sale) return null;
  return Math.round((1 - sale / regular) * 100);
}

/**
 * The parent product payload lists variations as { id, attributes } only — no
 * images. Fetch each variation so the gallery can show the right photo for the
 * chosen option. Keyed by variation id.
 */
async function fetchVariationImages(product) {
  const list = Array.isArray(product?.variations) ? product.variations : [];
  if (list.length === 0) return {};

  const origin = getWpOrigin();
  const apiBase = WC_API_BASE.startsWith('http') ? WC_API_BASE : `${origin}${WC_API_BASE}`;

  // Sequential on purpose. The export already renders many product pages at
  // once, so firing every variation in parallel on top of that is what exhausts
  // the backend's connection allowance. Variation counts are small.
  const images = {};

  for (const entry of list) {
    if (!entry?.id) continue;
    const data = await fetchJson(`${apiBase}/products/${entry.id}`);
    const [image] = resolveProductImages(data?.images || []);
    if (image) images[entry.id] = image;
  }

  return images;
}

async function fetchAllProductSlugs() {
  const origin = getWpOrigin();
  const apiBase = WC_API_BASE.startsWith('http') ? WC_API_BASE : `${origin}${WC_API_BASE}`;
  const data = await fetchJson(`${apiBase}/products?per_page=100`);
  if (!Array.isArray(data)) return [];
  return data.map((product) => product?.slug).filter(Boolean);
}

export async function generateStaticParams() {
  // Build a PDP for every published, catalog-visible product. Fall back to the
  // static list only if the build-time fetch fails, so a network hiccup never
  // produces zero product pages.
  const liveSlugs = await fetchAllProductSlugs();
  const slugs = liveSlugs.length > 0 ? liveSlugs : PRODUCT_SLUGS;
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug) return {};

  const product = await fetchProduct(slug);
  if (!product) return {};

  const description = stripHtml(product?.short_description || product?.description || '');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eqologiq.in';
  const image =
    toAbsoluteImageUrl(product?.images?.[0]?.src, baseUrl) || `${baseUrl}/images/steel-bottle.png`;

  return {
    title: product.name,
    description: description || `Shop ${product.name} on Eqo Logiq.`,
    openGraph: {
      title: product.name,
      description: description || `Shop ${product.name} on Eqo Logiq.`,
      url: `${baseUrl}/product/${slug}/`,
      images: [{ url: image }],
    },
    twitter: {
      title: product.name,
      description: description || `Shop ${product.name} on Eqo Logiq.`,
      images: [image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!slug) notFound();

  const product = await fetchProduct(slug);
  if (!product) notFound();

  const price = formatProductPrice(product?.prices);
  const regularPrice = getRegularPrice(product?.prices);
  const discountPercent = getDiscountPercent(product?.prices);
  const shortDescription = stripHtml(product?.short_description || '');
  const categoryLabel = product?.categories?.[0]?.name || '';
  const stockText = product?.stock_availability?.text || '';
  const reviewCount = Number(product?.review_count) || 0;
  const averageRating = Number(product?.average_rating) || 0;
  const images = resolveProductImages(product?.images || []);
  const fallbackImage = getProductFallbackImage(product, slug);
  const variationImages = await fetchVariationImages(product);

  const priceValue = product?.prices?.price ? Number(product.prices.price) / Math.pow(10, product.prices.currency_minor_unit ?? 2) : 0;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eqologiq.in';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": shortDescription,
        "image": toAbsoluteImageUrl(images?.[0]?.src, baseUrl) || `${baseUrl}${fallbackImage}`,
        "sku": product.sku || '',
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": priceValue,
          "availability": product.is_in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": `${baseUrl}/product/${slug}/`
        }
      }) }} />
      <main className="pt-20 bg-brand-base">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
        <nav className="flex items-center gap-2 font-body text-sm text-brand-text/40">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
          <Link href="/shop/" className="hover:text-brand-primary transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
          <span className="text-brand-text truncate">{product.name}</span>
        </nav>
      </div>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
        <VariationProvider>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <ProductGallery images={images} productName={product.name} fallbackSrc={fallbackImage} />

          <Reveal className="lg:w-1/2" style={{ transitionDelay: '100ms' }}>
            {categoryLabel ? (
              <p className="kicker text-brand-secondary mb-4">{categoryLabel}</p>
            ) : null}

            <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-text mb-3 leading-tight">
              {product.name}
            </h1>

            {shortDescription ? (
              <p className="font-body text-brand-text/60 text-lg mb-6 leading-relaxed">
                {shortDescription}
              </p>
            ) : null}

            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-sans font-bold text-3xl text-brand-primary">{price || '—'}</span>
              {regularPrice ? (
                <span className="font-body text-brand-text/40 text-base line-through">
                  {regularPrice}
                </span>
              ) : null}
              {discountPercent ? (
                <span className="text-xs font-sans font-bold px-2.5 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary">
                  {discountPercent}% off
                </span>
              ) : null}
            </div>

            {(reviewCount > 0 || stockText) && (
              <div className="mb-6">
                {reviewCount > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-base" style={{ color: '#FFC850' }}>
                      {'★'.repeat(Math.round(averageRating))}
                      {'☆'.repeat(5 - Math.round(averageRating))}
                    </span>
                    <span className="font-body text-sm text-brand-text/60">
                      Rated {averageRating.toFixed(2)} out of 5 · {reviewCount} customer review
                      {reviewCount === 1 ? '' : 's'}
                    </span>
                  </div>
                ) : null}
                {stockText ? (
                  <p className="font-body text-xs text-brand-secondary mt-1">{stockText}</p>
                ) : null}
              </div>
            )}

            <ProductClient product={product} variationImages={variationImages} />

            <div className="grid grid-cols-2 gap-3 border-t border-brand-text/8 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span className="font-body text-xs text-brand-text/60">100% Plastic-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="font-body text-xs text-brand-text/60">Food-Grade 304 Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <Recycle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="font-body text-xs text-brand-text/60">Infinitely Recyclable Steel</span>
              </div>

            </div>
          </Reveal>
        </div>
        </VariationProvider>
      </section>

      {product?.description ? (
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="border-t border-brand-text/10 pt-16 max-w-2xl product-description">
            <div
              className="font-body text-brand-text/70 leading-relaxed prose prose-brand max-w-none [&_h2]:font-sans [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-brand-text [&_h2]:mb-6 [&_h2]:mt-10 [&_h2:first-child]:mt-0 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: resolveContentUrls(product.description) }}
            />
          </div>
        </Reveal>
      ) : null}
    </main>
    </>
  );
}

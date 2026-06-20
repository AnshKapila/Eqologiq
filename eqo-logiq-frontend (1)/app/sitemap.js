import { WC_API_BASE } from '../lib/woocommerce';

export const dynamic = 'force-static';
function getWpOrigin() {
  return (
    process.env.WP_ORIGIN ||
    process.env.NEXT_PUBLIC_WP_ORIGIN ||
    process.env.NEXT_PUBLIC_WP_BASE_URL ||
    'https://eqologiq.in'
  );
}

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eqologiq.in';
  const wpOrigin = getWpOrigin();

  // Static routes
  const routes = ['', '/about', '/shop', '/blog', '/policy', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}/`,
      lastModified: new Date(),
    })
  );

  // Fetch products
  try {
    const res = await fetch(`${wpOrigin}${WC_API_BASE}/products?per_page=100`);
    if (res.ok) {
      const products = await res.json();
      if (Array.isArray(products)) {
        products.forEach((product) => {
          if (product.slug) {
            routes.push({
              url: `${baseUrl}/product/${product.slug}/`,
              lastModified: new Date(product.date_modified || new Date()),
            });
          }
        });
      }
    }
  } catch (err) {
    console.error('Failed to fetch products for sitemap', err);
  }

  // Fetch posts
  try {
    const res = await fetch(`${wpOrigin}/wp-json/wp/v2/posts?per_page=100`);
    if (res.ok) {
      const posts = await res.json();
      if (Array.isArray(posts)) {
        posts.forEach((post) => {
          if (post.slug) {
            routes.push({
              url: `${baseUrl}/blog/${post.slug}/`,
              lastModified: new Date(post.modified || new Date()),
            });
          }
        });
      }
    }
  } catch (err) {
    console.error('Failed to fetch posts for sitemap', err);
  }

  return routes;
}

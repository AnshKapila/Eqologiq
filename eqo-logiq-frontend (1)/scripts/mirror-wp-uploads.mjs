import fs from 'fs';
import path from 'path';

const WP_BASE = (process.env.NEXT_PUBLIC_WP_BASE_URL || 'https://backend.eqologiq.in').replace(/\/$/, '');
const SOURCE_DIR = process.env.WP_UPLOADS_SOURCE_DIR || '';
const DEST_ROOT = path.join('public', 'wp-content', 'uploads');

async function fetchProducts() {
  const res = await fetch(`${WP_BASE}/wp-json/wc/store/v1/products?per_page=100`);
  if (!res.ok) throw new Error(`Failed to load products (${res.status})`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

function getUploadRelativePath(url) {
  try {
    const parsed = new URL(url);
    const marker = '/wp-content/uploads/';
    const index = parsed.pathname.indexOf(marker);
    if (index === -1) return null;
    return parsed.pathname.slice(index + marker.length);
  } catch {
    return null;
  }
}

async function copyFromSource(relativePath, destPath) {
  if (!SOURCE_DIR) return false;
  const sourcePath = path.join(SOURCE_DIR, relativePath);
  if (!fs.existsSync(sourcePath)) return false;
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(sourcePath, destPath);
  return true;
}

async function downloadFromUrl(url, destPath) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) return false;
  const type = res.headers.get('content-type') || '';
  if (!type.startsWith('image/')) return false;
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
  return true;
}

async function mirrorImage(url) {
  const relativePath = getUploadRelativePath(url);
  if (!relativePath) return 'skip';

  const destPath = path.join(DEST_ROOT, relativePath);
  if (fs.existsSync(destPath)) return 'exists';

  if (await copyFromSource(relativePath, destPath)) return 'copied';
  if (await downloadFromUrl(url, destPath)) return 'downloaded';
  return 'failed';
}

async function main() {
  const products = await fetchProducts();
  const urls = new Set();

  for (const product of products) {
    for (const image of product.images || []) {
      if (image?.src) urls.add(image.src);
      if (image?.thumbnail) urls.add(image.thumbnail);
    }
  }

  const results = { copied: 0, downloaded: 0, exists: 0, failed: 0, skip: 0 };

  for (const url of urls) {
    const status = await mirrorImage(url);
    results[status] = (results[status] || 0) + 1;
    if (status !== 'exists') {
      console.log(`${status.padEnd(10)} ${url}`);
    }
  }

  console.log('\nSummary:', results);

  if (results.failed > 0 && !SOURCE_DIR) {
    console.log(
      '\nSome images could not be downloaded. The site loads product photos from backend.eqologiq.in at runtime.'
    );
    console.log('To mirror uploads locally (optional), set WP_UPLOADS_SOURCE_DIR and rerun:');
    console.log('  $env:WP_UPLOADS_SOURCE_DIR="C:\\path\\to\\uploads"; npm run mirror-uploads');
  }

  if (results.failed > 0 && SOURCE_DIR) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

import fetch from 'node-fetch';

async function run() {
  try {
    const res = await fetch('https://eqologiq.in/wp-json/wc/store/v1/products?per_page=100');
    if (!res.ok) {
      console.log('Failed to fetch from API:', res.statusText);
      return;
    }
    const data = await res.json();
    const images = [];
    for (const prod of data) {
      if (prod.images) {
        for (const img of prod.images) {
          images.push({
            product: prod.name,
            slug: prod.slug,
            src: img.src,
            alt: img.alt
          });
        }
      }
    }
    console.log(JSON.stringify(images, null, 2));
  } catch (e) {
    console.error('Error fetching API:', e);
  }
}

run();

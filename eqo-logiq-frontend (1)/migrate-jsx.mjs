import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import HTMLtoJSX from 'htmltojsx';

const srcDir = './src';
const appDir = './app';
const converter = new HTMLtoJSX({ createClass: false });

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir);
}

const htmlFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

function escapeJsx(str) {
  if (!str) return '';
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const $ = cheerio.load(content);
  
  // Extract metadata
  const title = $('title').text() || '';
  const description = $('meta[name="description"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  const ogTitle = $('meta[property="og:title"]').attr('content') || '';
  const ogDescription = $('meta[property="og:description"]').attr('content') || '';
  const ogImage = $('meta[property="og:image"]').attr('content') || '';
  
  // Structured data (JSON-LD)
  const jsonLdScripts = [];
  $('script[type="application/ld+json"]').each((i, el) => {
    jsonLdScripts.push($(el).html());
  });

  // Remove elements that will be moved to global layout/components
  $('#navbar').remove();
  $('#mobile-menu').remove();
  $('#search-overlay').remove();
  $('#cart-overlay').remove();
  $('#cart-drawer').remove();
  $('#wa-support-btn').remove();
  
  // Remove trailing scripts at the bottom of the body
  $('script').each((i, el) => {
    const type = $(el).attr('type');
    if (type !== 'application/ld+json') {
      $(el).remove();
    }
  });

  // Convert href="*.html" to href="/*/"
  $('a[href$=".html"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href) {
      const link = href.split('/').pop().replace('.html', '');
      if (link === 'index') {
        $(el).attr('href', '/');
      } else {
        $(el).attr('href', `/${link}/`);
      }
    }
  });

  // Extract body contents after removing layout elements
  let bodyHtml = $('body').html() || '';

  // Convert to JSX
  let jsxCode = converter.convert(bodyHtml);
  
  // Ensure we have a single root element if needed, though htmltojsx usually handles it 
  // if it's multiple elements, let's wrap in a Fragment just in case.
  jsxCode = `<>\n${jsxCode}\n</>`;

  // Determine route directory
  const baseName = file.replace('.html', '');
  let routeDir = appDir;
  
  if (baseName === 'index') {
    routeDir = appDir;
  } else if (baseName === '404') {
    routeDir = appDir; // not-found.js
  } else if (baseName === 'product') {
    routeDir = path.join(appDir, 'product', '[slug]');
  } else if (baseName === 'blog-post') {
    routeDir = path.join(appDir, 'blog', '[slug]');
  } else {
    routeDir = path.join(appDir, baseName);
  }

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let outFileName = baseName === '404' ? 'not-found.js' : 'page.js';
  const outPath = path.join(routeDir, outFileName);

  // Generate metadata export
  let metadataExport = `export const metadata = {
  title: \`${escapeJsx(title)}\`,
  description: \`${escapeJsx(description)}\`,
`;
  if (canonical) {
    metadataExport += `  alternates: { canonical: \`${escapeJsx(canonical)}\` },\n`;
  }
  if (ogTitle || ogImage) {
    metadataExport += `  openGraph: {\n`;
    if (ogTitle) metadataExport += `    title: \`${escapeJsx(ogTitle)}\`,\n`;
    if (ogDescription) metadataExport += `    description: \`${escapeJsx(ogDescription)}\`,\n`;
    if (ogImage) metadataExport += `    images: [{ url: \`${escapeJsx(ogImage)}\` }],\n`;
    metadataExport += `  },\n`;
  }
  metadataExport += `};\n`;

  // Generate Static Params for dynamic routes
  let staticParamsStr = '';
  if (baseName === 'product') {
    staticParamsStr = `\nexport function generateStaticParams() {\n  return [{ slug: 'example-product' }];\n}\n`;
  } else if (baseName === 'blog-post') {
    staticParamsStr = `\nexport function generateStaticParams() {\n  return [{ slug: 'example-post' }];\n}\n`;
  }

  // Generate page component
  let componentStr = `
export default function Page() {
  return (
    ${jsxCode}
  );
}
`;

  if (baseName === '404') {
    metadataExport = '';
    staticParamsStr = '';
    componentStr = `
export default function NotFound() {
  return (
    ${jsxCode}
  );
}
`;
  }

  let jsonLdStr = jsonLdScripts.map((script, idx) => `
export const JsonLd${idx} = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: \`${escapeJsx(script)}\` }} />
);
`).join('\n');

  // We should actually inject the JsonLD inside the component, but it's fine
  // Let's just modify componentStr to include the jsonLd scripts
  const jsonLdInjected = jsonLdScripts.map(script => `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: \`${escapeJsx(script)}\` }} />`).join('\n      ');
  
  if (jsonLdScripts.length > 0) {
    componentStr = componentStr.replace('<>', `<>\n      ${jsonLdInjected}`);
  }

  const finalCode = `import React from 'react';\n\n${metadataExport}${staticParamsStr}${componentStr}`;
  
  fs.writeFileSync(outPath, finalCode);
  console.log(`Migrated ${file} -> ${outPath}`);
}

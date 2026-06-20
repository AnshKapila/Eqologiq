import fs from 'fs';
import path from 'path';

const searchDirs = ['./app', './components', './public'];
const details = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Match URLs/paths ending in common image extensions
  const regex = /(?:src|href|image|url|coverImage|cover|img|photo)["']?\s*[:=]\s*["']([^"']+\.(?:png|jpe?g|gif|svg|webp))["']/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    details.push({
      file: filePath.replace(/\\/g, '/'),
      url: url,
    });
  }

  const rawRegex = /["']([^"'\s]+\.(?:png|jpe?g|gif|svg|webp))["']/gi;
  let rawMatch;
  while ((rawMatch = rawRegex.exec(content)) !== null) {
    const url = rawMatch[1];
    if (url.startsWith('http') || url.startsWith('/') || url.startsWith('.') || url.includes('images/')) {
      details.push({
        file: filePath.replace(/\\/g, '/'),
        url: url,
      });
    }
  }
}

function traverse(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        traverse(fullPath);
      }
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.json')) {
        scanFile(fullPath);
      }
    }
  }
}

for (const dir of searchDirs) {
  if (fs.existsSync(dir)) {
    traverse(dir);
  }
}

const uniqueDetails = [];
const seen = new Set();
for (const item of details) {
  const key = `${item.file} -> ${item.url}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueDetails.push(item);
  }
}

console.log(JSON.stringify(uniqueDetails, null, 2));

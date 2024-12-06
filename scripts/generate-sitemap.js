import { create } from 'xmlbuilder2';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://alexhormoziquotes.com';

// Ensure the dist directory exists
const distPath = join(__dirname, '..', 'dist');
try {
  mkdirSync(distPath, { recursive: true });
} catch (err) {
  // Directory already exists, continue
}

// Create sitemap with proper XML structure
const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation': 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'
  });

// Add homepage
sitemap.ele('url')
  .ele('loc').txt(BASE_URL).up()
  .ele('lastmod').txt(new Date().toISOString()).up()
  .ele('changefreq').txt('daily').up()
  .ele('priority').txt('1.0');

// Add quotes page
sitemap.ele('url')
  .ele('loc').txt(`${BASE_URL}/quotes`).up()
  .ele('lastmod').txt(new Date().toISOString()).up()
  .ele('changefreq').txt('daily').up()
  .ele('priority').txt('0.9');

// Add FAQ page
sitemap.ele('url')
  .ele('loc').txt(`${BASE_URL}/faq`).up()
  .ele('lastmod').txt(new Date().toISOString()).up()
  .ele('changefreq').txt('weekly').up()
  .ele('priority').txt('0.8');

const xml = sitemap.end({ prettyPrint: true });

// Write sitemap to dist folder
writeFileSync(join(distPath, 'sitemap.xml'), xml);
console.log('✓ Sitemap generated successfully!');
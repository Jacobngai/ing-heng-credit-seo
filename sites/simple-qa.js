/**
 * Simple QA Test - Tests built dist folder directly
 * Usage: node simple-qa.js [en|ms|zh]
 */

const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  en: {
    distDir: path.join(__dirname, 'en', 'dist'),
    lang: 'en'
  },
  ms: {
    distDir: path.join(__dirname, 'ms', 'dist'),
    lang: 'ms'
  },
  zh: {
    distDir: path.join(__dirname, 'zh', 'dist'),
    lang: 'zh'
  }
};

function checkSite(lang) {
  const config = SITE_CONFIG[lang];
  if (!config) {
    console.log(`Invalid site: ${lang}`);
    return;
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Checking ${lang.toUpperCase()} site build`);
  console.log('='.repeat(60));

  const distDir = config.distDir;
  
  // Check if dist exists
  if (!fs.existsSync(distDir)) {
    console.log(`❌ Dist folder not found: ${distDir}`);
    console.log('   Run: npm run build');
    return;
  }

  // Count HTML files
  function countHtmlFiles(dir) {
    let count = 0;
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        count += countHtmlFiles(fullPath);
      } else if (item.endsWith('.html')) {
        count++;
      }
    }
    
    return count;
  }

  const htmlCount = countHtmlFiles(distDir);
  console.log(`✅ Dist folder exists`);
  console.log(`   HTML pages found: ${htmlCount}`);

  // Check key pages
  const keyPages = [
    `${config.lang}/index.html`,
    `${config.lang}/about/index.html`,
    `${config.lang}/blog/index.html`,
    'index.html'
  ];

  console.log(`\nChecking key pages:`);
  for (const page of keyPages) {
    const pagePath = path.join(distDir, page);
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf-8');
      const titleMatch = content.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'No title';
      const hasContent = content.length > 500;
      
      if (hasContent && title !== 'Astro') {
        console.log(`   ✅ ${page}`);
        console.log(`      Title: ${title.substring(0, 60)}`);
      } else if (title === 'Astro') {
        console.log(`   ⚠️  ${page} - Placeholder page`);
      } else {
        console.log(`   ⚠️  ${page} - Minimal content`);
      }
    } else {
      console.log(`   ❌ ${page} - Not found`);
    }
  }

  // Check for index.html redirect
  const rootIndexPath = path.join(distDir, 'index.html');
  if (fs.existsSync(rootIndexPath)) {
    const content = fs.readFileSync(rootIndexPath, 'utf-8');
    if (content.includes('Astro.redirect')) {
      console.log(`\n✅ Root index.html has redirect`);
    } else {
      console.log(`\n⚠️  Root index.html might need redirect`);
    }
  }
}

const lang = process.argv[2] || 'all';

if (lang === 'all') {
  ['en', 'ms', 'zh'].forEach(checkSite);
} else {
  checkSite(lang);
}

console.log('\n' + '='.repeat(60));

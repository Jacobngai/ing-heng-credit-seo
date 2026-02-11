/**
 * ING Heng Site QA Test Script
 * Tests: Sitemap coverage, 404 check, page count validation
 * Usage: node qa-test.js [en|ms|zh]
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITES = {
  en: {
    dir: './en',
    domain: 'https://www.inghengcredit.com',
    lang: 'en'
  },
  ms: {
    dir: './ms',
    domain: 'https://www.kreditloan.my',
    lang: 'ms'
  },
  zh: {
    dir: './zh',
    domain: 'https://www.inghengcredit.my',
    lang: 'zh'
  }
};

async function runQA(siteLang) {
  const site = SITES[siteLang];
  if (!site) {
    console.error(`Invalid site: ${siteLang}. Use: en, ms, or zh`);
    process.exit(1);
  }

  console.log(`\n🔍 QA Testing: ${siteLang.toUpperCase()} Site`);
  console.log(`   Directory: ${site.dir}`);
  console.log(`   Domain: ${site.domain}`);
  console.log('='.repeat(50));

  const distDir = path.join(site.dir, 'dist');
  const sitemapPath = path.join(distDir, 'sitemap-index.xml');

  // Check if dist exists
  if (!fs.existsSync(distDir)) {
    console.error(`❌ Dist folder not found: ${distDir}`);
    console.log('   Run: npm run build first');
    return { success: false, errors: ['Dist folder missing'] };
  }

  const results = {
    success: true,
    totalPages: 0,
    sitemapUrls: 0,
    missingFromSitemap: [],
    extraInSitemap: [],
    notFoundErrors: [],
    passed: [],
    failed: []
  };

  // 1. Get all HTML files from dist
  console.log('\n📁 Scanning built HTML files...');
  const htmlFiles = getAllHtmlFiles(distDir);
  results.totalPages = htmlFiles.length;
  console.log(`   Found: ${htmlFiles.length} HTML pages`);

  // Convert HTML files to URL paths
  const builtPaths = htmlFiles.map(f => {
    let urlPath = f.replace(distDir, '').replace('/index.html', '/').replace('.html', '');
    if (!urlPath.endsWith('/')) urlPath += '/';
    if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
    return urlPath;
  });

  // 2. Read and parse sitemap
  console.log('\n📋 Reading sitemap...');
  const sitemapUrls = await parseSitemap(distDir, site.domain);
  results.sitemapUrls = sitemapUrls.length;
  console.log(`   Sitemap URLs: ${sitemapUrls.length}`);

  // Convert sitemap URLs to paths
  const sitemapPaths = sitemapUrls.map(url => {
    let urlPath = url.replace(site.domain, '');
    if (!urlPath.endsWith('/')) urlPath += '/';
    if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
    return urlPath;
  });

  // 3. Compare: Find pages missing from sitemap
  console.log('\n🔎 Comparing sitemap vs built pages...');
  const missingFromSitemap = builtPaths.filter(p => !sitemapPaths.includes(p));
  const extraInSitemap = sitemapPaths.filter(p => !builtPaths.includes(p));

  results.missingFromSitemap = missingFromSitemap;
  results.extraInSitemap = extraInSitemap;

  if (missingFromSitemap.length > 0) {
    console.log(`\n⚠️  Pages NOT in sitemap: ${missingFromSitemap.length}`);
    // Show first 20
    missingFromSitemap.slice(0, 20).forEach(p => console.log(`   - ${p}`));
    if (missingFromSitemap.length > 20) {
      console.log(`   ... and ${missingFromSitemap.length - 20} more`);
    }
  } else {
    console.log('   ✅ All pages are in sitemap');
  }

  if (extraInSitemap.length > 0) {
    console.log(`\n⚠️  Sitemap URLs with no matching page: ${extraInSitemap.length}`);
    extraInSitemap.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  }

  // 4. Test pages with Playwright (local server)
  console.log('\n🌐 Starting local server for 404 testing...');
  
  // Start preview server
  const serverProcess = require('child_process').spawn('npm', ['run', 'preview'], {
    cwd: site.dir,
    detached: true,
    stdio: 'ignore'
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const testUrls = builtPaths.slice(0, 50); // Test first 50 pages
  console.log(`\n🧪 Testing ${testUrls.length} pages for 404s...`);

  for (const urlPath of testUrls) {
    try {
      const response = await page.goto(`http://localhost:4321${urlPath}`, {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });
      
      if (response && response.status() === 200) {
        results.passed.push(urlPath);
      } else if (response && response.status() === 404) {
        results.notFoundErrors.push(urlPath);
        console.log(`   ❌ 404: ${urlPath}`);
      }
    } catch (err) {
      results.failed.push({ path: urlPath, error: err.message });
    }
  }

  await browser.close();
  
  // Kill server
  try {
    process.kill(-serverProcess.pid);
  } catch (e) {}

  // 5. Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 QA SUMMARY');
  console.log('='.repeat(50));
  console.log(`\nSite: ${siteLang.toUpperCase()}`);
  console.log(`Total HTML pages: ${results.totalPages}`);
  console.log(`Sitemap URLs: ${results.sitemapUrls}`);
  console.log(`Pages missing from sitemap: ${results.missingFromSitemap.length}`);
  console.log(`404 errors found: ${results.notFoundErrors.length}`);
  console.log(`Pages tested OK: ${results.passed.length}`);

  if (results.notFoundErrors.length > 0 || results.missingFromSitemap.length > 50) {
    results.success = false;
    console.log('\n❌ QA FAILED - Issues need fixing');
  } else {
    console.log('\n✅ QA PASSED');
  }

  // Save detailed report
  const reportPath = path.join(site.dir, 'qa-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed report saved: ${reportPath}`);

  return results;
}

function getAllHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function parseSitemap(distDir, domain) {
  const urls = [];
  
  // Check for sitemap-index.xml
  const indexPath = path.join(distDir, 'sitemap-index.xml');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    
    // Extract sitemap URLs from index
    const sitemapMatches = indexContent.match(/<loc>([^<]+)<\/loc>/g) || [];
    
    for (const match of sitemapMatches) {
      const sitemapUrl = match.replace('<loc>', '').replace('</loc>', '');
      const sitemapFile = sitemapUrl.replace(domain, '');
      const sitemapPath = path.join(distDir, sitemapFile);
      
      if (fs.existsSync(sitemapPath)) {
        const content = fs.readFileSync(sitemapPath, 'utf-8');
        const urlMatches = content.match(/<loc>([^<]+)<\/loc>/g) || [];
        
        for (const urlMatch of urlMatches) {
          const url = urlMatch.replace('<loc>', '').replace('</loc>', '');
          if (url.startsWith(domain)) {
            urls.push(url);
          }
        }
      }
    }
  }
  
  // Also check for direct sitemap.xml
  const directPath = path.join(distDir, 'sitemap.xml');
  if (fs.existsSync(directPath)) {
    const content = fs.readFileSync(directPath, 'utf-8');
    const urlMatches = content.match(/<loc>([^<]+)<\/loc>/g) || [];
    
    for (const urlMatch of urlMatches) {
      const url = urlMatch.replace('<loc>', '').replace('</loc>', '');
      if (url.startsWith(domain) && !urls.includes(url)) {
        urls.push(url);
      }
    }
  }
  
  return urls;
}

// Run
const siteLang = process.argv[2] || 'en';
runQA(siteLang).catch(console.error);

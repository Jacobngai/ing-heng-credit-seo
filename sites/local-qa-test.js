/**
 * ING Heng Local QA Test Script
 * Tests all pages locally by building and running preview servers
 * Usage: node local-qa-test.js [en|ms|zh|all]
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

const SITES = {
  en: {
    dir: './en',
    port: 3001
  },
  ms: {
    dir: './ms',
    port: 3002
  },
  zh: {
    dir: './zh',
    port: 3003
  }
};

function getAllPages(lang) {
  const pagesDir = path.join(__dirname, lang, 'src', 'pages', lang);
  const pages = [];

  if (!fs.existsSync(pagesDir)) {
    console.log(`   No lang-specific pages dir for ${lang}, trying direct pages dir`);
    const altDir = path.join(__dirname, lang, 'src', 'pages');
    if (!fs.existsSync(altDir)) {
      return [];
    }
    return scanPages(altDir, lang);
  }

  return scanPages(pagesDir, lang);
}

function scanPages(baseDir, lang) {
  const pages = [];

  function scanDir(dir, basePath = '') {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath, basePath + item + '/');
        } else if (item.endsWith('.astro') && !item.startsWith('_')) {
          // Skip dynamic routes
          if (item.includes('[')) {
            continue;
          }
          
          let urlPath = basePath + item.replace('.astro', '');
          
          // Handle index files
          if (urlPath.endsWith('/index') || urlPath === 'index') {
            urlPath = basePath.slice(0, -1) || '/';
          }
          
          // Ensure URL format
          if (urlPath && !urlPath.startsWith('/')) {
            urlPath = '/' + urlPath;
          }
          
          pages.push({
            file: fullPath.replace(__dirname, ''),
            url: urlPath
          });
        }
      }
    } catch (err) {
      // Skip directories we can't read
    }
  }

  scanDir(baseDir);

  // Also add root index.astro
  const rootIndex = path.join(__dirname, lang, 'src', 'pages', 'index.astro');
  if (fs.existsSync(rootIndex)) {
    pages.push({
      file: '/index.astro',
      url: '/'
    });
  }

  // Sort and deduplicate
  const uniquePages = [];
  const seen = new Set();
  for (const page of pages.sort((a, b) => a.url.localeCompare(b.url))) {
    if (!seen.has(page.url)) {
      seen.add(page.url);
      uniquePages.push(page);
    }
  }
  
  return uniquePages;
}

async function buildSite(siteConfig, lang) {
  console.log(`\n📦 Building ${lang.toUpperCase()} site...`);
  const siteDir = path.join(__dirname, siteConfig.dir);
  
  // Check if dist exists and is recent
  const distDir = path.join(siteDir, 'dist');
  if (fs.existsSync(distDir)) {
    const stats = fs.statSync(distDir);
    const ageMinutes = (Date.now() - stats.mtimeMs) / 60000;
    if (ageMinutes < 30) {
      console.log(`   ✅ Using existing build (${Math.round(ageMinutes)} min old)`);
      return distDir;
    }
  }
  
  try {
    execSync('npm run build', {
      cwd: siteDir,
      stdio: 'inherit',
      timeout: 120000
    });
    console.log(`   ✅ Build complete`);
    return distDir;
  } catch (err) {
    console.log(`   ⚠️  Build failed, trying with preview server directly`);
    return null;
  }
}

async function testSite(lang, siteConfig) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`🔍 TESTING ${lang.toUpperCase()} SITE (LOCAL)`);
  console.log(`   Directory: ${siteConfig.dir}`);
  console.log(`   Port: ${siteConfig.port}`);
  console.log('='.repeat(70));

  const pages = getAllPages(lang);
  console.log(`   Found ${pages.length} pages to test\n`);

  const results = {
    site: lang,
    baseUrl: `http://localhost:${siteConfig.port}`,
    total: pages.length,
    passed: [],
    failed: [],
    buildError: null
  };

  let distDir = null;
  let serverProcess = null;

  try {
    // Build or use existing
    distDir = await buildSite(siteConfig, lang);
    
    // Start preview server
    console.log(`\n🚀 Starting preview server...`);
    const siteDir = path.join(__dirname, siteConfig.dir);
    
    serverProcess = spawn('npm', ['run', 'preview', '--', '--port', String(siteConfig.port)], {
      cwd: siteDir,
      detached: true,
      stdio: 'ignore'
    });
    
    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000));

    const browser = await chromium.launch({
      headless: true,
      timeout: 60000
    });

    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 }
    });

    const page = await context.newPage();

    // Track progress
    let processed = 0;
    let lastProgress = 0;
    let consecutiveFailures = 0;

    for (const pageInfo of pages) {
      processed++;
      const progress = Math.round((processed / pages.length) * 100);
      
      // Show progress every 5%
      if (progress >= lastProgress + 5 || processed === pages.length) {
        process.stdout.write(`\r   Progress: ${processed}/${pages.length} (${progress}%)`);
        lastProgress = progress;
      }

      const fullUrl = `http://localhost:${siteConfig.port}${pageInfo.url}`;

      try {
        const response = await page.goto(fullUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 10000
        });

        if (!response) {
          results.failed.push({
            url: pageInfo.url,
            file: pageInfo.file,
            error: 'No response'
          });
          consecutiveFailures++;
          continue;
        }

        const status = response.status();
        
        if (status === 200) {
          const title = await page.title();
          const bodyText = await page.locator('body').textContent() || '';
          const hasContent = bodyText.trim().length > 100;

          if (hasContent && title) {
            results.passed.push({
              url: pageInfo.url,
              status: status
            });
            consecutiveFailures = 0;
          } else {
            results.failed.push({
              url: pageInfo.url,
              file: pageInfo.file,
              error: 'No meaningful content',
              status: status
            });
            consecutiveFailures++;
          }
        } else if (status === 404) {
          results.failed.push({
            url: pageInfo.url,
            file: pageInfo.file,
            error: '404 Not Found',
            status: status
          });
          consecutiveFailures++;
        } else {
          results.failed.push({
            url: pageInfo.url,
            file: pageInfo.file,
            error: `Status ${status}`,
            status: status
          });
          consecutiveFailures++;
        }

        // Stop testing if too many consecutive failures (server likely down)
        if (consecutiveFailures > 10) {
          console.log(`\n\n   ⚠️  Too many consecutive failures, stopping early`);
          break;
        }

      } catch (err) {
        results.failed.push({
          url: pageInfo.url,
          file: pageInfo.file,
          error: err.message.substring(0, 60)
        });
        consecutiveFailures++;
      }
    }

    process.stdout.write(`\r   Progress: ${processed}/${pages.length} (${Math.round((processed / pages.length) * 100)}%)\n\n`);

    await browser.close();

  } catch (err) {
    results.buildError = err.message;
    console.log(`   ❌ Error: ${err.message}`);
  } finally {
    // Kill server
    if (serverProcess) {
      try {
        process.kill(-serverProcess.pid);
      } catch (e) {
        try {
          serverProcess.kill();
        } catch (e2) {}
      }
    }
  }

  return results;
}

function printResults(results) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📊 RESULTS: ${results.site.toUpperCase()}`);
  console.log('='.repeat(70));
  console.log(`   Total pages tested: ${results.total}`);
  console.log(`   ✅ Passed: ${results.passed.length}`);
  console.log(`   ❌ Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log(`\n   ❌ FAILED PAGES (showing first 30):`);
    console.log('   ' + '-'.repeat(68));
    
    results.failed.slice(0, 30).forEach(failed => {
      console.log(`   ${failed.url}`);
      console.log(`     ${failed.error}`);
    });
    
    if (results.failed.length > 30) {
      console.log(`   ... and ${results.failed.length - 30} more failed pages`);
    }
  }
  
  const successRate = results.total > 0 
    ? ((results.passed.length / results.total) * 100).toFixed(1) 
    : 0;
  console.log(`\n   Success rate: ${successRate}%`);
  console.log('='.repeat(70));
}

async function main() {
  const sitesToTest = process.argv[2] || 'all';
  const sites = sitesToTest === 'all' 
    ? Object.entries(SITES) 
    : Object.entries(SITES).filter(([k]) => k === sitesToTest);

  console.log('\n🧪 ING HENG LOCAL QA TEST');
  console.log('='.repeat(70));
  console.log(`   Testing sites locally by building and running preview servers`);
  console.log('='.repeat(70));

  const allResults = {
    timestamp: new Date().toISOString(),
    sites: {}
  };

  // Test each site
  for (const [lang, siteConfig] of sites) {
    try {
      const result = await testSite(lang, siteConfig);
      allResults.sites[lang] = result;
      printResults(result);
    } catch (err) {
      console.error(`\n❌ Error testing ${lang}:`, err.message);
      allResults.sites[lang] = {
        site: lang,
        error: err.message,
        passed: [],
        failed: []
      };
    }
  }

  // Overall summary
  const totalPassed = Object.values(allResults.sites).reduce((sum, r) => sum + (r.passed?.length || 0), 0);
  const totalFailed = Object.values(allResults.sites).reduce((sum, r) => sum + (r.failed?.length || 0), 0);
  const totalTests = totalPassed + totalFailed;

  console.log(`\n${'='.repeat(70)}`);
  console.log('📈 OVERALL SUMMARY');
  console.log('='.repeat(70));
  console.log(`   Total pages tested: ${totalTests}`);
  console.log(`   ✅ Total passed: ${totalPassed}`);
  console.log(`   ❌ Total failed: ${totalFailed}`);
  
  const overallSuccessRate = totalTests > 0 
    ? ((totalPassed / totalTests) * 100).toFixed(1) 
    : 0;
  console.log(`   Overall success rate: ${overallSuccessRate}%`);
  console.log('='.repeat(70));

  // Save report
  const reportPath = path.join(__dirname, 'local-qa-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(allResults, null, 2));
  console.log(`\n📄 Detailed report saved: ${reportPath}`);

  if (totalFailed > 0) {
    console.log('\n❌ QA FAILED - Some pages have errors');
    process.exit(1);
  } else {
    console.log('\n✅ QA PASSED - All pages are working correctly');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

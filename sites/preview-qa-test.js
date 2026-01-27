/**
 * ING Heng Preview Sites QA Test Script
 * Tests all pages on Vercel preview deployments
 * Usage: node preview-qa-test.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PREVIEW_SITES = {
  ms: 'https://ms-2qcqr69sx-ngsanzen-gmailcoms-projects.vercel.app',
  en: 'https://ingheng-credit-omhllacn1-ngsanzen-gmailcoms-projects.vercel.app',
  zh: 'https://ingheng-credit-fxuudn7tp-ngsanzen-gmailcoms-projects.vercel.app'
};

function getAllPages(lang) {
  const pagesDir = path.join(__dirname, lang, 'src', 'pages', lang);
  const pages = [];

  if (!fs.existsSync(pagesDir)) {
    console.error(`Pages directory not found: ${pagesDir}`);
    return pages;
  }

  function scanDir(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath, basePath + item + '/');
      } else if (item.endsWith('.astro') && !item.startsWith('_')) {
        // Skip dynamic routes like [slug].astro for now
        if (item.includes('[') && item.includes(']')) {
          // Dynamic route - will add special handling if needed
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
  }

  scanDir(pagesDir);

  // Also add root index.astro
  const rootIndex = path.join(__dirname, lang, 'src', 'pages', 'index.astro');
  if (fs.existsSync(rootIndex)) {
    pages.push({
      file: '/index.astro',
      url: '/'
    });
  }

  // Sort pages
  pages.sort((a, b) => a.url.localeCompare(b.url));
  
  return pages;
}

async function testSite(lang, baseUrl) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`🔍 TESTING ${lang.toUpperCase()} SITE`);
  console.log(`   URL: ${baseUrl}`);
  console.log(`   Pages to test: scanning...`);
  console.log('='.repeat(70));

  const pages = getAllPages(lang);
  console.log(`   Found ${pages.length} pages to test\n`);

  const results = {
    site: lang,
    baseUrl: baseUrl,
    total: pages.length,
    passed: [],
    failed: [],
    errors: []
  };

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

  for (const pageInfo of pages) {
    processed++;
    const progress = Math.round((processed / pages.length) * 100);
    
    // Show progress every 10%
    if (progress >= lastProgress + 10 || processed === pages.length) {
      process.stdout.write(`\r   Progress: ${processed}/${pages.length} (${progress}%)`);
      lastProgress = progress;
    }

    const fullUrl = baseUrl + pageInfo.url;

    try {
      const response = await page.goto(fullUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 15000
      });

      if (!response) {
        results.failed.push({
          url: pageInfo.url,
          file: pageInfo.file,
          error: 'No response received'
        });
        continue;
      }

      const status = response.status();
      
      if (status === 200) {
        // Check if page has meaningful content
        const title = await page.title();
        const bodyText = await page.locator('body').textContent() || '';
        const hasContent = bodyText.trim().length > 100;

        if (hasContent && title) {
          results.passed.push({
            url: pageInfo.url,
            status: status,
            title: title.substring(0, 50)
          });
        } else {
          results.failed.push({
            url: pageInfo.url,
            file: pageInfo.file,
            error: 'Page has no meaningful content',
            status: status,
            title: title,
            contentLength: bodyText.length
          });
        }
      } else if (status === 404) {
        results.failed.push({
          url: pageInfo.url,
          file: pageInfo.file,
          error: '404 Not Found',
          status: status
        });
      } else if (status >= 500) {
        results.failed.push({
          url: pageInfo.url,
          file: pageInfo.file,
          error: `Server Error ${status}`,
          status: status
        });
      } else {
        results.failed.push({
          url: pageInfo.url,
          file: pageInfo.file,
          error: `Unexpected status ${status}`,
          status: status
        });
      }
    } catch (err) {
      results.failed.push({
        url: pageInfo.url,
        file: pageInfo.file,
        error: err.message.substring(0, 100)
      });
    }
  }

  process.stdout.write(`\r   Progress: ${processed}/${pages.length} (100%)\n\n`);

  await browser.close();

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
    console.log(`\n   ❌ FAILED PAGES (${results.failed.length}):`);
    console.log('   ' + '-'.repeat(68));
    
    results.failed.slice(0, 50).forEach(failed => {
      console.log(`   ${failed.url}`);
      console.log(`     Error: ${failed.error}${failed.status ? ` (${failed.status})` : ''}`);
    });
    
    if (results.failed.length > 50) {
      console.log(`   ... and ${results.failed.length - 50} more failed pages`);
    }
  }
  
  const successRate = results.total > 0 
    ? ((results.passed.length / results.total) * 100).toFixed(1) 
    : 0;
  console.log(`\n   Success rate: ${successRate}%`);
  console.log('='.repeat(70));
}

async function main() {
  console.log('\n🧪 ING HENG PREVIEW SITES QA TEST');
  console.log('='.repeat(70));
  console.log(`   Testing all pages on 3 preview deployments`);
  console.log(`   MS: ${PREVIEW_SITES.ms}`);
  console.log(`   EN: ${PREVIEW_SITES.en}`);
  console.log(`   ZH: ${PREVIEW_SITES.zh}`);
  console.log('='.repeat(70));

  const allResults = {
    timestamp: new Date().toISOString(),
    sites: {}
  };

  // Test each site
  for (const [lang, baseUrl] of Object.entries(PREVIEW_SITES)) {
    try {
      const result = await testSite(lang, baseUrl);
      allResults.sites[lang] = result;
      printResults(result);
    } catch (err) {
      console.error(`\n❌ Error testing ${lang}:`, err.message);
      allResults.sites[lang] = {
        site: lang,
        baseUrl: baseUrl,
        error: err.message,
        passed: [],
        failed: []
      };
    }
  }

  // Print overall summary
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

  // Save detailed report
  const reportPath = path.join(__dirname, 'preview-qa-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(allResults, null, 2));
  console.log(`\n📄 Detailed report saved: ${reportPath}`);

  // Exit with appropriate code
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

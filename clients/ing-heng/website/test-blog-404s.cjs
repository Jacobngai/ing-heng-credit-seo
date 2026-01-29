const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const baseUrl = 'http://localhost:4325';

  console.log('Starting 404 test for all blog posts...\n');

  // Collect all unique blog post URLs
  const allUrls = new Set();
  let pageNum = 1;

  while (pageNum <= 16) {
    const url = pageNum === 1 ? `${baseUrl}/en/blog` : `${baseUrl}/en/blog/page/${pageNum}`;
    console.log(`Fetching page ${pageNum}...`);
    await page.goto(url, { waitUntil: 'networkidle' });

    const pageUrls = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="/en/blog/"]'));
      return links
        .map(a => a.getAttribute('href'))
        .filter(href =>
          href &&
          !href.includes('/page/') &&
          !href.includes('/category/') &&
          href.match(/\/en\/blog\/[^\/]+\/?$/)
        )
        .map(href => href.replace(/\/$/, ''));
    });

    pageUrls.forEach(url => allUrls.add(url.startsWith('http') ? url : `${baseUrl}${url}`));
    pageNum++;
  }

  console.log(`\nFound ${allUrls.size} unique blog post URLs`);
  console.log('Testing each URL for 404 errors...\n');

  const results = {
    total: allUrls.size,
    success: 0,
    errors: [],
    tested: []
  };

  let count = 0;
  for (const url of allUrls) {
    count++;
    process.stdout.write(`\rTesting ${count}/${allUrls.size}: ${path.basename(new URL(url).pathname)}...`);

    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      const status = response.status();

      if (status === 404) {
        results.errors.push({ url, status, error: '404 Not Found' });
        console.log(`\n❌ 404 ERROR: ${url}`);
      } else if (status >= 400) {
        results.errors.push({ url, status, error: `HTTP ${status}` });
        console.log(`\n❌ ERROR ${status}: ${url}`);
      } else {
        results.success++;
        results.tested.push({ url, status });
      }
    } catch (error) {
      results.errors.push({ url, error: error.message });
      console.log(`\n❌ FAILED: ${url} - ${error.message}`);
    }
  }

  console.log('\n\n=== Test Results ===');
  console.log(`Total tested: ${results.total}`);
  console.log(`Success: ${results.success}`);
  console.log(`Errors: ${results.errors.length}`);

  if (results.errors.length > 0) {
    console.log('\n=== Errors Found ===');
    results.errors.forEach((err, i) => {
      console.log(`${i + 1}. ${err.url}`);
      console.log(`   Status: ${err.status || err.error}`);
    });

    // Save errors to file
    const errorLog = path.join(__dirname, 'blog-404-errors.json');
    fs.writeFileSync(errorLog, JSON.stringify(results.errors, null, 2));
    console.log(`\nErrors saved to: ${errorLog}`);
  } else {
    console.log('\n✅ All blog posts are working correctly! No 404 errors found.');
  }

  // Save full results
  const resultsFile = path.join(__dirname, 'blog-404-test-results.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`\nFull results saved to: ${resultsFile}`);

  await browser.close();
})();

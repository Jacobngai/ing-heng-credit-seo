const { chromium } = require('playwright');
const fs = require('fs');
const URL = require('url').URL;

// The 3 sites to check
const sites = [
  { url: 'https://www.inghengcredit.com', lang: 'English (EN)' },
  { url: 'https://www.kreditloan.my', lang: 'Malay (MS)' },
  { url: 'https://www.inghengcredit.my', lang: 'Chinese (ZH)' }
];

// Results storage
const results = {
  checked: new Set(),
  errors404: [],
  otherErrors: [],
  discovered: new Set(),
  checkedAt: new Date().toISOString()
};

// Max pages to check to prevent infinite loops
const MAX_PAGES_PER_SITE = 500;

async function checkUrl(url, browser) {
  const context = await browser.newContext();
  const page = await context.newPage();

  let statusCode = 0;
  let error = null;

  try {
    // Set longer timeout for slower pages
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000
    });

    if (response) {
      statusCode = response.status();
    }
  } catch (e) {
    error = e.message;
    statusCode = 0;
  }

  await context.close();

  return { statusCode, error };
}

async function extractLinks(page, baseUrl) {
  const links = new Set();

  try {
    const pageLinks = await page.evaluate(() => {
      const anchorElements = Array.from(document.querySelectorAll('a[href]'));
      return anchorElements.map(a => ({
        href: a.getAttribute('href'),
        text: a.textContent?.trim() || ''
      }));
    });

    for (const linkObj of pageLinks) {
      try {
        const absoluteUrl = new URL(linkObj.href, baseUrl).toString();

        // Only keep links from the same domain
        if (absoluteUrl.startsWith(baseUrl)) {
          // Remove query parameters and fragments for deduplication
          const cleanUrl = absoluteUrl.split('?')[0].split('#')[0];
          links.add(cleanUrl);
        }
      } catch (e) {
        // Skip invalid URLs
      }
    }
  } catch (e) {
    console.log(`    Error extracting links: ${e.message}`);
  }

  return links;
}

async function crawlSite(baseUrl) {
  console.log(`\n=== Crawling: ${baseUrl} ===`);

  const browser = await chromium.launch();
  const queue = [baseUrl];
  const visited = new Set();
  const discoveredLinks = new Set();

  let pageCount = 0;

  while (queue.length > 0 && pageCount < MAX_PAGES_PER_SITE) {
    const url = queue.shift();

    if (visited.has(url)) continue;

    // Skip non-HTML resources
    if (url.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|pdf|doc|docx|xls|xlsx)$/i)) {
      continue;
    }

    console.log(`  [${visited.size + 1}] Crawling: ${url}`);
    visited.add(url);
    pageCount++;

    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 45000
      });

      // Extract all links from this page
      const links = await extractLinks(page, baseUrl);

      for (const link of links) {
        discoveredLinks.add(link);

        // Check trailing slash version too
        if (link.endsWith('/')) {
          const noSlash = link.slice(0, -1);
          if (noSlash !== baseUrl) {
            discoveredLinks.add(noSlash);
          }
        } else {
          const withSlash = link + '/';
          if (withSlash !== baseUrl + '/') {
            discoveredLinks.add(withSlash);
          }
        }

        // Add to queue if not visited
        if (!visited.has(link)) {
          queue.push(link);
        }
      }

    } catch (e) {
      console.log(`    Error crawling ${url}: ${e.message}`);
    }

    await context.close();
  }

  await browser.close();

  console.log(`  Crawled ${visited.size} pages, discovered ${discoveredLinks.size} unique links`);

  return { visited, discoveredLinks };
}

async function checkAllUrls(baseUrl, urlsToCheck) {
  console.log(`\n=== Checking ${urlsToCheck.size} URLs for: ${baseUrl} ===`);

  const browser = await chromium.launch();
  let checkedCount = 0;

  for (const url of urlsToCheck) {
    if (results.checked.has(url)) continue;

    const { statusCode, error } = await checkUrl(url, browser);

    results.checked.add(url);

    if (statusCode === 404) {
      results.errors404.push({ url, statusCode, error });
      console.log(`  [404] ${url}`);
    } else if (statusCode === 200) {
      console.log(`  [200] ${url}`);
    } else if (statusCode === 0 && error) {
      results.otherErrors.push({ url, statusCode, error });
      console.log(`  [ERR] ${url}: ${error}`);
    } else if (statusCode !== 0) {
      console.log(`  [${statusCode}] ${url}`);
    }

    checkedCount++;
  }

  await browser.close();
  console.log(`  Checked ${checkedCount} URLs`);
}

async function main() {
  console.log('Starting comprehensive 404 check for all 3 language sites...');
  console.log('='.repeat(70));

  for (const site of sites) {
    const baseUrl = site.url;

    // First, crawl the site to discover all links
    const { discoveredLinks } = await crawlSite(baseUrl);

    // Add to global discovered set
    discoveredLinks.forEach(link => results.discovered.add(link));

    // Check all discovered URLs
    await checkAllUrls(baseUrl, discoveredLinks);
  }

  // Generate report
  generateReport();
}

function generateReport() {
  console.log('\n' + '='.repeat(70));
  console.log('COMPREHENSIVE 404 CHECK REPORT');
  console.log('='.repeat(70));
  console.log(`Total URLs discovered: ${results.discovered.size}`);
  console.log(`Total URLs checked: ${results.checked.size}`);
  console.log(`404 Errors: ${results.errors404.length}`);
  console.log(`Other Errors: ${results.otherErrors.length}`);
  console.log(`Successful (200): ${[...results.checked].filter(url => {
    const error = results.errors404.find(e => e.url === url);
    const other = results.otherErrors.find(e => e.url === url);
    return !error && !other;
  }).length}`);
  console.log('');

  if (results.errors404.length > 0) {
    console.log('404 ERRORS FOUND:');
    console.log('-'.repeat(70));
    results.errors404.forEach((r, i) => {
      console.log(`${i + 1}. ${r.url}`);
    });
  }

  if (results.otherErrors.length > 0) {
    console.log('\nOTHER ERRORS FOUND:');
    console.log('-'.repeat(70));
    results.otherErrors.forEach((r, i) => {
      console.log(`${i + 1}. ${r.url}`);
      console.log(`   Error: ${r.error}`);
    });
  }

  // Write report to file
  const reportData = {
    checkedAt: results.checkedAt,
    discoveredCount: results.discovered.size,
    checkedCount: results.checked.size,
    errors404: results.errors404,
    otherErrors: results.otherErrors,
    allCheckedUrls: [...results.checked],
    allDiscoveredUrls: [...results.discovered]
  };

  const reportFile = '404-report.json';
  fs.writeFileSync(reportFile, JSON.stringify(reportData, null, 2));
  console.log(`\nReport saved to: ${reportFile}`);

  // Write human-readable report
  const readableReport = generateReadableReport();
  const readableFile = '404-report.txt';
  fs.writeFileSync(readableFile, readableReport);
  console.log(`Readable report saved to: ${readableFile}`);
}

function generateReadableReport() {
  let report = `COMPREHENSIVE 404 CHECK REPORT\n`;
  report += `Generated: ${new Date().toISOString()}\n`;
  report += '='.repeat(70) + '\n\n';

  report += `SUMMARY:\n`;
  report += `Total URLs discovered: ${results.discovered.size}\n`;
  report += `Total URLs checked: ${results.checked.size}\n`;
  report += `404 Errors: ${results.errors404.length}\n`;
  report += `Other Errors: ${results.otherErrors.length}\n\n`;

  if (results.errors404.length > 0) {
    report += `404 ERRORS FOUND (${results.errors404.length}):\n`;
    report += '-'.repeat(70) + '\n';
    results.errors404.forEach((r, i) => {
      report += `${i + 1}. ${r.url}\n`;
    });
    report += '\n';
  }

  if (results.otherErrors.length > 0) {
    report += `OTHER ERRORS (${results.otherErrors.length}):\n`;
    report += '-'.repeat(70) + '\n';
    results.otherErrors.forEach((r, i) => {
      report += `${i + 1}. ${r.url}\n`;
      report += `   Error: ${r.error}\n`;
    });
    report += '\n';
  }

  report += `ALL CHECKED URLs BY STATUS:\n`;
  report += '-'.repeat(70) + '\n';

  // Group by site
  const bySite = {};
  [...results.checked].forEach(url => {
    const domain = new URL(url).hostname;
    if (!bySite[domain]) bySite[domain] = [];
    bySite[domain].push(url);
  });

  for (const [domain, urls] of Object.entries(bySite)) {
    report += `\n${domain} (${urls.length} URLs):\n`;
    urls.forEach(url => {
      const error404 = results.errors404.find(e => e.url === url);
      const otherError = results.otherErrors.find(e => e.url === url);

      let status;
      if (error404) {
        status = '[404] ';
      } else if (otherError) {
        status = '[ERR] ';
      } else {
        status = '[200] ';
      }
      report += `  ${status}${url}\n`;
    });
  }

  return report;
}

main().catch(console.error);

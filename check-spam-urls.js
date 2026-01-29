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
  spamUrls: [],
  errors404: [],
  otherErrors: [],
  checkedAt: new Date().toISOString()
};

// Known spam URLs to check
const knownSpamUrls = [
  'https://www.inghengcredit.com/motor-insurance',
  'https://www.inghengcredit.com/personal-insurance',
  'https://www.inghengcredit.com/immediate-edge-review-in-the-uk-legit-or-a-scam-app-545',
  'https://www.kreditloan.my/motor-insurance',
  'https://www.kreditloan.my/personal-insurance',
  'https://www.inghengcredit.my/motor-insurance',
  'https://www.inghengcredit.my/personal-insurance',
];

// Common spam URL patterns
const spamPatterns = [
  /immediate-edge/i,
  /bitcoin.*review/i,
  /crypto.*trading/i,
  /quantum.*ai/i,
  /quantum-ai/i,
  /bitcode.*ai/i,
  /trading.*bot/i,
  /crypto.*profit/i,
  /bit.*app/i,
  /scam.*app/i,
  /review.*scam/i,
  /legit.*or.*scam/i,
  /wealth.*matrix/i,
  /immediate.*connect/i,
  /trade.*euron/i,
  /profit.*max/i,
];

async function checkUrl(url, browser) {
  const context = await browser.newContext();
  const page = await context.newPage();

  let statusCode = 0;
  let error = null;

  try {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 30000
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

async function crawlForSpamUrls(baseUrl) {
  console.log(`\n=== Crawling for spam URLs: ${baseUrl} ===`);

  const browser = await chromium.launch();
  const queue = [baseUrl];
  const visited = new Set();
  const spamUrlsFound = new Set();

  let pageCount = 0;
  const MAX_PAGES = 200;

  while (queue.length > 0 && pageCount < MAX_PAGES) {
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
        timeout: 30000
      });

      // Get all links
      const links = await page.evaluate(() => {
        const anchorElements = Array.from(document.querySelectorAll('a[href]'));
        return anchorElements.map(a => ({
          href: a.getAttribute('href'),
          text: a.textContent?.trim() || ''
        }));
      });

      // Check if URL path looks like spam
      for (const linkObj of links) {
        try {
          const absoluteUrl = new URL(linkObj.href, baseUrl).toString();

          // Only keep links from same domain
          if (absoluteUrl.startsWith(baseUrl)) {
            // Check if this looks like spam
            const isSpam = spamPatterns.some(pattern => pattern.test(absoluteUrl));

            if (isSpam) {
              spamUrlsFound.add(absoluteUrl);
              console.log(`    [SPAM] ${absoluteUrl}`);
            }

            // Add to queue if not visited
            const cleanUrl = absoluteUrl.split('?')[0].split('#')[0];
            if (!visited.has(cleanUrl)) {
              queue.push(cleanUrl);
            }
          }
        } catch (e) {
          // Skip invalid URLs
        }
      }

    } catch (e) {
      console.log(`    Error: ${e.message}`);
    }

    await context.close();
  }

  await browser.close();

  console.log(`  Found ${spamUrlsFound.size} potential spam URLs`);

  return spamUrlsFound;
}

async function checkKnownSpamUrls() {
  console.log('\n=== Checking known spam/problem URLs ===\n');

  const browser = await chromium.launch();

  for (const url of knownSpamUrls) {
    console.log(`Checking: ${url}`);

    const { statusCode, error } = await checkUrl(url, browser);

    if (statusCode === 404) {
      results.errors404.push({ url, statusCode, error, type: 'spam' });
      console.log(`  [404] ${url}`);
    } else if (statusCode === 200) {
      // Check if it's actually spam content
      const context = await browser.newContext();
      const page = await context.newPage();

      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

        const title = await page.title();
        const content = await page.content();

        // Check for spam indicators in content
        const isSpam = spamPatterns.some(pattern =>
          pattern.test(title) || pattern.test(content)
        );

        if (isSpam) {
          results.spamUrls.push({
            url,
            statusCode,
            title,
            type: 'confirmed_spam'
          });
          console.log(`  [SPAM 200] ${url}`);
          console.log(`    Title: ${title}`);
        } else {
          console.log(`  [200] ${url} - Content appears OK`);
        }
      } catch (e) {
        console.log(`    Error checking content: ${e.message}`);
      }

      await context.close();
    } else if (statusCode === 0 && error) {
      results.otherErrors.push({ url, statusCode, error });
      console.log(`  [ERR] ${url}: ${error}`);
    } else {
      console.log(`  [${statusCode}] ${url}`);
    }
  }

  await browser.close();
}

async function main() {
  console.log('Starting comprehensive spam URL check for all 3 language sites...');
  console.log('='.repeat(70));

  // First, check known spam URLs
  await checkKnownSpamUrls();

  // Then crawl each site to find more spam URLs
  for (const site of sites) {
    const spamUrlsFound = await crawlForSpamUrls(site.url);

    // Check each spam URL found
    const browser = await chromium.launch();

    for (const url of spamUrlsFound) {
      // Check with and without trailing slash
      const urlsToCheck = [url];
      if (!url.endsWith('/')) {
        urlsToCheck.push(url + '/');
      }

      for (const checkUrl of urlsToCheck) {
        const { statusCode, error } = await checkUrl(checkUrl, browser);

        if (statusCode === 404) {
          results.errors404.push({ url: checkUrl, statusCode, error, type: 'spam' });
          console.log(`  [404] ${checkUrl}`);
        } else if (statusCode === 200) {
          results.spamUrls.push({ url: checkUrl, statusCode, type: 'spam_200' });
          console.log(`  [SPAM 200] ${checkUrl}`);
        }
      }
    }

    await browser.close();
  }

  // Generate report
  generateReport();
}

function generateReport() {
  console.log('\n' + '='.repeat(70));
  console.log('SPAM URL CHECK REPORT');
  console.log('='.repeat(70));
  console.log(`Spam URLs found (200 OK): ${results.spamUrls.length}`);
  console.log(`Spam URLs that are 404: ${results.errors404.length}`);
  console.log(`Other Errors: ${results.otherErrors.length}`);
  console.log('');

  if (results.spamUrls.length > 0) {
    console.log('SPAM URLs (Returning 200):');
    console.log('-'.repeat(70));
    results.spamUrls.forEach((r, i) => {
      console.log(`${i + 1}. ${r.url}`);
      if (r.title) {
        console.log(`   Title: ${r.title}`);
      }
      console.log(`   Type: ${r.type}`);
    });
  }

  if (results.errors404.length > 0) {
    console.log('\nSPAM URLs THAT ARE 404 (Should be removed from Google):');
    console.log('-'.repeat(70));
    results.errors404.forEach((r, i) => {
      console.log(`${i + 1}. ${r.url}`);
      if (r.error) {
        console.log(`   Error: ${r.error}`);
      }
    });
  }

  if (results.otherErrors.length > 0) {
    console.log('\nOTHER ERRORS:');
    console.log('-'.repeat(70));
    results.otherErrors.forEach((r, i) => {
      console.log(`${i + 1}. ${r.url}`);
      console.log(`   Error: ${r.error}`);
    });
  }

  // Write report to file
  const reportData = {
    checkedAt: results.checkedAt,
    spamUrls: results.spamUrls,
    spam404s: results.errors404,
    otherErrors: results.otherErrors
  };

  const reportFile = 'spam-url-report.json';
  fs.writeFileSync(reportFile, JSON.stringify(reportData, null, 2));
  console.log(`\nReport saved to: ${reportFile}`);

  // Write human-readable report
  const readableReport = generateReadableReport();
  const readableFile = 'spam-url-report.txt';
  fs.writeFileSync(readableFile, readableReport);
  console.log(`Readable report saved to: ${readableFile}`);
}

function generateReadableReport() {
  let report = `SPAM URL CHECK REPORT\n`;
  report += `Generated: ${new Date().toISOString()}\n`;
  report += '='.repeat(70) + '\n\n';

  report += `SUMMARY:\n`;
  report += `Spam URLs found (200 OK): ${results.spamUrls.length}\n`;
  report += `Spam URLs that are 404: ${results.errors404.length}\n`;
  report += `Other Errors: ${results.otherErrors.length}\n\n`;

  if (results.spamUrls.length > 0) {
    report += `SPAM URLs (Returning 200):\n`;
    report += '-'.repeat(70) + '\n';
    results.spamUrls.forEach((r, i) => {
      report += `${i + 1}. ${r.url}\n`;
      if (r.title) {
        report += `   Title: ${r.title}\n`;
      }
      report += `   Type: ${r.type}\n`;
    });
    report += '\n';
  }

  if (results.errors404.length > 0) {
    report += `SPAM URLs THAT ARE 404 (Should be removed from Google):\n`;
    report += '-'.repeat(70) + '\n';
    results.errors404.forEach((r, i) => {
      report += `${i + 1}. ${r.url}\n`;
      if (r.error) {
        report += `   Error: ${r.error}\n`;
      }
    });
    report += '\n';
  }

  report += `RECOMMENDATION:\n`;
  report += '-'.repeat(70) + '\n';
  report += `1. For 404 spam URLs: Submit removal request in Google Search Console\n`;
  report += `2. For 200 spam URLs: These pages exist and need to be deleted from the site\n`;
  report += `3. After deletion, request removal in Google Search Console\n\n`;

  return report;
}

main().catch(console.error);

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Try page 1 (without page number)
  console.log('Checking page 1...');
  await page.goto('https://www.inghengcredit.com/en/blog/', { waitUntil: 'networkidle' });

  const page1Links = await page.evaluate(() => {
    const result = [];
    const seen = new Set();
    const cards = document.querySelectorAll('div[class*="card"], article, [class*="post"]');
    cards.forEach(card => {
      const links = card.querySelectorAll('a[href*="/en/blog/"]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('/page/') && !href.includes('/category/') && href.match(/\/en\/blog\/[^\/]+\/?$/) && !seen.has(href)) {
          seen.add(href);
          result.push(href.replace(/\/$/, ''));
        }
      });
    });
    return result;
  });

  console.log('Page 1 links:', page1Links.length);
  console.log('First 3:', page1Links.slice(0, 3));

  // Check pagination links
  const paginationLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    return links
      .filter(a => a.href && (a.href.includes('/page/') || a.textContent.match(/^\d+$/)))
      .map(a => ({
        href: a.href,
        text: a.textContent.trim()
      }))
      .slice(0, 15);
  });

  console.log('\nPagination links:', JSON.stringify(paginationLinks, null, 2));

  await browser.close();
})();

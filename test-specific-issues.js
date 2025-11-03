// Targeted test for known blue-on-blue issues
const { chromium } = require('playwright');

// Specific selectors to check based on code analysis
const criticalSelectors = {
  contact: [
    'h1.text-blue-100',
    'p.text-blue-100',
    'section[class*="bg-gradient"] h1',
    'section[class*="bg-gradient"] p',
  ],
  services: [
    'p.text-blue-100',
    '.bg-gradient-to-br p.text-blue-100',
    'section[class*="from-primary"] .text-blue-100',
  ],
  blog: [
    'h2.text-blue-100',
    'p.text-blue-100.opacity-80',
  ],
  footer: [
    '.bg-\\[\\#2563EB\\]', // Blue badge in footer
    'footer .text-secondary',
  ]
};

async function testPage(url, pageName, selectors) {
  const browser = await chromium.launch({ headless: false }); // Set to false to see the browser
  const page = await browser.newPage();

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${pageName}`);
  console.log(`URL: ${url}`);
  console.log('='.repeat(60));

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    const issues = [];

    for (const selector of selectors) {
      try {
        const elements = await page.$$(selector);

        for (const el of elements) {
          const box = await el.boundingBox();
          if (!box) continue;

          const styles = await el.evaluate((element) => {
            const computed = window.getComputedStyle(element);
            const rect = element.getBoundingClientRect();

            // Get background color, checking parent if transparent
            let bgColor = computed.backgroundColor;
            if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
              let parent = element.parentElement;
              while (parent && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent')) {
                bgColor = window.getComputedStyle(parent).backgroundColor;
                parent = parent.parentElement;
              }
            }

            return {
              color: computed.color,
              backgroundColor: bgColor,
              text: element.textContent.trim().substring(0, 100),
              tagName: element.tagName,
              className: element.className,
              top: rect.top,
              left: rect.left
            };
          });

          // Check if it's blue text on blue background
          const textColor = styles.color;
          const bgColor = styles.backgroundColor;

          const isBlueText = textColor.includes('rgb') && (
            textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/) &&
            parseInt(textColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)[3]) > 150
          );

          const isBlueBg = bgColor.includes('rgb') && (
            bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/) &&
            parseInt(bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)[3]) > 100
          );

          if (isBlueText && isBlueBg) {
            issues.push({
              selector: selector,
              ...styles
            });

            // Highlight the element in red
            await el.evaluate((element) => {
              element.style.outline = '3px solid red';
              element.style.outlineOffset = '2px';
            });
          }
        }
      } catch (e) {
        // Selector might not exist on this page
      }
    }

    if (issues.length > 0) {
      console.log(`\n🔴 FOUND ${issues.length} BLUE-ON-BLUE ISSUES:\n`);
      issues.forEach((issue, i) => {
        console.log(`${i + 1}. Selector: ${issue.selector}`);
        console.log(`   Text: "${issue.text}"`);
        console.log(`   Color: ${issue.color}`);
        console.log(`   Background: ${issue.backgroundColor}`);
        console.log(`   Position: top ${Math.round(issue.top)}px, left ${Math.round(issue.left)}px`);
        console.log('');
      });

      // Take screenshot with highlighted issues
      await page.screenshot({
        path: `issues-${pageName.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`,
        fullPage: true
      });
      console.log(`📸 Screenshot saved with highlighted issues`);
    } else {
      console.log('✅ No blue-on-blue issues found!');
    }

    // Wait a bit to see the highlighted elements
    await page.waitForTimeout(2000);

  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

async function runTests() {
  console.log('🎯 Running targeted blue-on-blue detection...\n');

  const testPages = [
    { url: 'https://www.inghengcredit.com/en/contact', name: 'Contact-EN', selectors: [...criticalSelectors.contact, ...criticalSelectors.footer] },
    { url: 'https://www.inghengcredit.com/ms/contact', name: 'Contact-MS', selectors: [...criticalSelectors.contact, ...criticalSelectors.footer] },
    { url: 'https://www.inghengcredit.com/zh/contact', name: 'Contact-ZH', selectors: [...criticalSelectors.contact, ...criticalSelectors.footer] },
    { url: 'https://www.inghengcredit.com/en/services', name: 'Services-EN', selectors: [...criticalSelectors.services, ...criticalSelectors.footer] },
    { url: 'https://www.inghengcredit.com/en/blog', name: 'Blog-EN', selectors: [...criticalSelectors.blog, ...criticalSelectors.footer] },
  ];

  for (const test of testPages) {
    await testPage(test.url, test.name, test.selectors);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Small delay between tests
  }

  console.log('\n✅ All tests complete!\n');
}

runTests().catch(console.error);

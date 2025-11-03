// Comprehensive Playwright accessibility and color contrast scanner
const { chromium } = require('playwright');
const fs = require('fs');

// WCAG 2.1 contrast ratio thresholds
const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3.0;
const WCAG_AAA_NORMAL = 7.0;
const WCAG_AAA_LARGE = 4.5;

// Color utilities
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbStringToObj(rgb) {
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return match ? {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3])
  } : null;
}

function getLuminance(rgb) {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// Pages to scan
const pages = [
  { url: 'https://www.inghengcredit.com/', name: 'Homepage (MS)' },
  { url: 'https://www.inghengcredit.com/en', name: 'Homepage (EN)' },
  { url: 'https://www.inghengcredit.com/zh', name: 'Homepage (ZH)' },
  { url: 'https://www.inghengcredit.com/en/contact', name: 'Contact (EN)' },
  { url: 'https://www.inghengcredit.com/ms/contact', name: 'Contact (MS)' },
  { url: 'https://www.inghengcredit.com/zh/contact', name: 'Contact (ZH)' },
  { url: 'https://www.inghengcredit.com/en/services', name: 'Services (EN)' },
  { url: 'https://www.inghengcredit.com/ms/services', name: 'Services (MS)' },
  { url: 'https://www.inghengcredit.com/zh/services', name: 'Services (ZH)' },
  { url: 'https://www.inghengcredit.com/en/blog', name: 'Blog (EN)' },
  { url: 'https://www.inghengcredit.com/ms/blog', name: 'Blog (MS)' },
  { url: 'https://www.inghengcredit.com/zh/blog', name: 'Blog (ZH)' },
];

async function scanPage(browser, pageInfo) {
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`\n${'='.repeat(80)}`);
  console.log(`Scanning: ${pageInfo.name}`);
  console.log(`URL: ${pageInfo.url}`);
  console.log('='.repeat(80));

  const issues = [];

  try {
    await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });

    // Check for blue-on-blue text
    const blueOnBlueElements = await page.evaluate(() => {
      const problems = [];
      const allElements = document.querySelectorAll('*');

      allElements.forEach((el) => {
        const styles = window.getComputedStyle(el);
        const color = styles.color;
        const bgColor = styles.backgroundColor;
        const text = el.textContent?.trim();

        // Skip empty elements
        if (!text || text.length === 0) return;

        // Check for blue text
        const isBlueText = color.includes('rgb') && (
          color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/) &&
          parseInt(color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)[3]) > 200 // High blue value
        );

        // Check for blue background
        const isBlueBg = bgColor.includes('rgb') && (
          bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/) &&
          parseInt(bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)[3]) > 150 // High blue value
        );

        if (isBlueText || isBlueBg) {
          let elementPath = el.tagName.toLowerCase();
          if (el.id) elementPath += `#${el.id}`;
          if (el.className) elementPath += `.${el.className.split(' ').join('.')}`;

          problems.push({
            selector: elementPath,
            text: text.substring(0, 100),
            color: color,
            backgroundColor: bgColor,
            className: el.className
          });
        }
      });

      return problems;
    });

    // Check contrast ratios for all text elements
    const contrastIssues = await page.evaluate((thresholds) => {
      const issues = [];
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, button, li');

      function rgbStringToObj(rgb) {
        const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        return match ? {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3])
        } : null;
      }

      function getLuminance(rgb) {
        const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
          val = val / 255;
          return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }

      function getContrastRatio(rgb1, rgb2) {
        const lum1 = getLuminance(rgb1);
        const lum2 = getLuminance(rgb2);
        const brightest = Math.max(lum1, lum2);
        const darkest = Math.min(lum1, lum2);
        return (brightest + 0.05) / (darkest + 0.05);
      }

      textElements.forEach((el) => {
        const styles = window.getComputedStyle(el);
        const text = el.textContent?.trim();
        if (!text || text.length === 0) return;

        const color = rgbStringToObj(styles.color);
        const bgColor = rgbStringToObj(styles.backgroundColor);

        if (!color || !bgColor) return;

        // Check if background is transparent, get parent background
        if (bgColor.r === 0 && bgColor.g === 0 && bgColor.b === 0) {
          let parent = el.parentElement;
          while (parent) {
            const parentBg = window.getComputedStyle(parent).backgroundColor;
            const parentBgRgb = rgbStringToObj(parentBg);
            if (parentBgRgb && !(parentBgRgb.r === 0 && parentBgRgb.g === 0 && parentBgRgb.b === 0)) {
              bgColor.r = parentBgRgb.r;
              bgColor.g = parentBgRgb.g;
              bgColor.b = parentBgRgb.b;
              break;
            }
            parent = parent.parentElement;
          }
        }

        const ratio = getContrastRatio(color, bgColor);
        const fontSize = parseFloat(styles.fontSize);
        const isLarge = fontSize >= 18 || (fontSize >= 14 && styles.fontWeight >= 700);

        const threshold = isLarge ? thresholds.AA_LARGE : thresholds.AA_NORMAL;

        if (ratio < threshold) {
          let elementPath = el.tagName.toLowerCase();
          if (el.id) elementPath += `#${el.id}`;
          if (el.className) elementPath += `.${el.className.split(' ').slice(0, 3).join('.')}`;

          issues.push({
            selector: elementPath,
            text: text.substring(0, 80),
            ratio: ratio.toFixed(2),
            required: threshold,
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            fontSize: styles.fontSize,
            isLarge: isLarge
          });
        }
      });

      return issues;
    }, { AA_NORMAL: WCAG_AA_NORMAL, AA_LARGE: WCAG_AA_LARGE });

    // Take screenshot
    await page.screenshot({
      path: `screenshot-${pageInfo.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`,
      fullPage: true
    });

    // Collect results
    if (blueOnBlueElements.length > 0) {
      console.log(`\n⚠️  Found ${blueOnBlueElements.length} potential blue-on-blue elements:`);
      blueOnBlueElements.slice(0, 10).forEach((item, i) => {
        console.log(`  ${i + 1}. ${item.selector}`);
        console.log(`     Text: "${item.text.substring(0, 60)}..."`);
        console.log(`     Color: ${item.color} | Background: ${item.backgroundColor}`);
      });
    }

    if (contrastIssues.length > 0) {
      console.log(`\n🔴 Found ${contrastIssues.length} WCAG AA contrast failures:`);
      contrastIssues.slice(0, 15).forEach((issue, i) => {
        console.log(`  ${i + 1}. ${issue.selector}`);
        console.log(`     Text: "${issue.text}"`);
        console.log(`     Ratio: ${issue.ratio} (Required: ${issue.required})`);
        console.log(`     Color: ${issue.color} | Background: ${issue.backgroundColor}`);
      });
    }

    if (blueOnBlueElements.length === 0 && contrastIssues.length === 0) {
      console.log('\n✅ No critical accessibility issues found!');
    }

    return {
      page: pageInfo.name,
      url: pageInfo.url,
      blueOnBlue: blueOnBlueElements,
      contrastIssues: contrastIssues,
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error(`Error scanning ${pageInfo.name}:`, error.message);
    return {
      page: pageInfo.name,
      url: pageInfo.url,
      error: error.message
    };
  } finally {
    await context.close();
  }
}

async function runAllScans() {
  console.log('🚀 Starting comprehensive accessibility scan...\n');

  const browser = await chromium.launch({ headless: true });
  const results = [];

  // Run scans in parallel (3 at a time to avoid overwhelming the server)
  for (let i = 0; i < pages.length; i += 3) {
    const batch = pages.slice(i, i + 3);
    const batchResults = await Promise.all(
      batch.map(pageInfo => scanPage(browser, pageInfo))
    );
    results.push(...batchResults);
  }

  await browser.close();

  // Save detailed report
  const report = {
    scanDate: new Date().toISOString(),
    totalPages: pages.length,
    results: results,
    summary: {
      totalBlueOnBlueIssues: results.reduce((sum, r) => sum + (r.blueOnBlue?.length || 0), 0),
      totalContrastIssues: results.reduce((sum, r) => sum + (r.contrastIssues?.length || 0), 0),
      pagesWithIssues: results.filter(r =>
        (r.blueOnBlue?.length > 0 || r.contrastIssues?.length > 0)
      ).length
    }
  };

  fs.writeFileSync('accessibility-report.json', JSON.stringify(report, null, 2));

  console.log('\n' + '='.repeat(80));
  console.log('📊 SCAN SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total pages scanned: ${pages.length}`);
  console.log(`Pages with issues: ${report.summary.pagesWithIssues}`);
  console.log(`Total blue-on-blue issues: ${report.summary.totalBlueOnBlueIssues}`);
  console.log(`Total contrast issues: ${report.summary.totalContrastIssues}`);
  console.log(`\n📄 Detailed report saved to: accessibility-report.json`);
  console.log('📸 Screenshots saved for each page\n');
}

runAllScans().catch(console.error);

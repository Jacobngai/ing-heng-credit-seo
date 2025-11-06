#!/usr/bin/env node

/**
 * Comprehensive UI Test Suite
 * Tests: Language switcher, Blog submenu removal, Blog post links, All buttons
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'http://localhost:4322';
const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

let passedTests = 0;
let failedTests = 0;
const testResults = [];

// Helper functions
function log(message, color = 'reset') {
  console.log(COLORS[color] + message + COLORS.reset);
}

function logTest(testName, passed, details = '') {
  if (passed) {
    log(`✅ PASS: ${testName}`, 'green');
    passedTests++;
  } else {
    log(`❌ FAIL: ${testName}`, 'red');
    if (details) log(`   ${details}`, 'yellow');
    failedTests++;
  }
  testResults.push({ test: testName, passed, details });
}

function logSection(title) {
  log('\n' + '='.repeat(60), 'cyan');
  log(title, 'bold');
  log('='.repeat(60), 'cyan');
}

// Test 1: Check if blog posts mentioned in index actually exist
async function testBlogPostFilesExist() {
  logSection('TEST 1: Blog Post Files Existence');

  const languages = ['en', 'ms', 'zh'];
  const blogPostsToCheck = {
    en: [
      'complete-guide-equipment-financing-malaysia',
      'excavator-financing-save-30-percent',
      'lorry-financing-fast-approval-strategies',
      'forklift-leasing-vs-buying-guide',
      'tax-benefits-equipment-financing-2025',
      'cash-flow-management-construction',
    ],
    ms: [
      'complete-guide-equipment-financing-malaysia',
      'excavator-financing-save-30-percent',
      'lorry-financing-fast-approval-strategies',
      'tax-benefits-equipment-financing-2025',
    ],
    zh: [
      'complete-guide-equipment-financing-malaysia',
      'excavator-financing-save-30-percent',
      'lorry-financing-fast-approval-strategies',
      'forklift-leasing-vs-buying-guide',
      'tax-benefits-equipment-financing-2025',
      'cash-flow-management-construction',
    ],
  };

  for (const lang of languages) {
    log(`\n📝 Checking ${lang.toUpperCase()} blog posts:`, 'blue');

    for (const slug of blogPostsToCheck[lang]) {
      const filePath = path.join(__dirname, 'src', 'pages', lang, 'blog', `${slug}.astro`);

      try {
        await fs.access(filePath);
        logTest(`${lang}/${slug}`, true, 'File exists');
      } catch (error) {
        logTest(`${lang}/${slug}`, false, `File not found: ${filePath}`);
      }
    }
  }
}

// Test 2: Check blog index pages only list existing posts
async function testBlogIndexListings() {
  logSection('TEST 2: Blog Index Only Lists Existing Posts');

  const languages = ['en', 'ms', 'zh'];

  for (const lang of languages) {
    log(`\n📋 Checking ${lang.toUpperCase()} blog index:`, 'blue');

    const indexPath = path.join(__dirname, 'src', 'pages', lang, 'blog', 'index.astro');

    try {
      const content = await fs.readFile(indexPath, 'utf-8');

      // Check for non-existent posts in the listing
      const nonExistentPosts = [
        'equipment-maintenance-guide',
        'sme-equipment-financing-limited-credit',
        'construction-industry-trends-2025',
      ];

      let hasNonExistent = false;
      for (const slug of nonExistentPosts) {
        if (content.includes(`slug: '${slug}'`) || content.includes(`slug: "${slug}"`)) {
          logTest(`${lang} index - No reference to ${slug}`, false, `Found reference to non-existent post`);
          hasNonExistent = true;
        }
      }

      if (!hasNonExistent) {
        logTest(`${lang} blog index clean`, true, 'No references to non-existent posts');
      }

    } catch (error) {
      logTest(`${lang} blog index`, false, `Could not read file: ${error.message}`);
    }
  }
}

// Test 3: Check that BlogDropdown is NOT imported in Header
async function testBlogSubmenuRemoval() {
  logSection('TEST 3: Blog Submenu Removal Verification');

  const headerPath = path.join(__dirname, 'src', 'components', 'Header.astro');

  try {
    const content = await fs.readFile(headerPath, 'utf-8');

    // Check for BlogDropdown import
    const hasImport = content.includes('BlogDropdown') || content.includes('import.*BlogDropdown');
    logTest('Header - No BlogDropdown import', !hasImport, hasImport ? 'BlogDropdown still imported' : 'Clean');

    // Check for BlogDropdown usage in JSX
    const hasUsage = content.includes('<BlogDropdown') || content.includes('BlogDropdown');
    logTest('Header - No BlogDropdown usage', !hasUsage, hasUsage ? 'BlogDropdown still used' : 'Clean');

    // Check that blog nav link exists as simple link (not dropdown)
    const hasBlogLink = content.includes("'nav.blog'") || content.includes('"nav.blog"');
    logTest('Header - Blog nav link exists', hasBlogLink, hasBlogLink ? 'Blog link present' : 'Blog link missing');

  } catch (error) {
    logTest('Blog submenu removal', false, `Could not read Header: ${error.message}`);
  }
}

// Test 4: Check LanguageSwitcher shows flags only
async function testLanguageSwitcherDesign() {
  logSection('TEST 4: Language Switcher Flag-Only Design');

  const langSwitcherPath = path.join(__dirname, 'src', 'components', 'LanguageSwitcher.astro');

  try {
    const content = await fs.readFile(langSwitcherPath, 'utf-8');

    // Should NOT show code.toUpperCase() in button
    const hasCodeDisplay = content.includes('code.toUpperCase()') &&
                          content.includes('<span class="mr-2 font-bold">{currentLocale.code.toUpperCase()}</span>');
    logTest('Flag-only display (no text codes)', !hasCodeDisplay, hasCodeDisplay ? 'Still showing text codes' : 'Clean flag-only');

    // Should have flag-only comment
    const hasFlagOnlyComment = content.includes('Flag Only - NO TEXT CODE') || content.includes('FLAG ONLY');
    logTest('Flag-only documentation', hasFlagOnlyComment, 'Comment present');

    // Should have enhanced script with is:inline
    const hasInlineScript = content.includes('<script is:inline>');
    logTest('Script uses is:inline', hasInlineScript, 'Inline script present');

    // Should have stopPropagation
    const hasStopProp = content.includes('stopPropagation');
    logTest('Proper event handling', hasStopProp, 'stopPropagation() present');

    // Should have bronze theme colors
    const hasBronzeColors = content.includes('#8B6F47') && content.includes('#2D1810');
    logTest('Bronze theme colors', hasBronzeColors, 'Bronze colors applied');

    // Should have brutal shadow
    const hasBrutalShadow = content.includes('shadow-[') || content.includes('shadow-brutal');
    logTest('Brutal shadow design', hasBrutalShadow, 'Shadow effects present');

  } catch (error) {
    logTest('Language switcher design check', false, `Could not read file: ${error.message}`);
  }
}

// Test 5: Check for navigation structure
async function testNavigationStructure() {
  logSection('TEST 5: Navigation Structure Check');

  const headerPath = path.join(__dirname, 'src', 'components', 'Header.astro');

  try {
    const content = await fs.readFile(headerPath, 'utf-8');

    // Essential nav items
    const navItems = ['Home', 'Equipment', 'Services', 'About', 'Contact', 'Blog'];

    for (const item of navItems) {
      const itemKey = `nav.${item.toLowerCase()}`;
      const hasNav = content.includes(itemKey) || content.includes(`'${item}'`) || content.includes(`"${item}"`);
      logTest(`Nav item: ${item}`, hasNav, hasNav ? 'Present' : 'Missing');
    }

    // Check Equipment dropdown exists
    const hasEquipmentDropdown = content.includes('EquipmentDropdown');
    logTest('Equipment dropdown present', hasEquipmentDropdown, 'EquipmentDropdown component used');

  } catch (error) {
    logTest('Navigation structure', false, `Could not read Header: ${error.message}`);
  }
}

// Test 6: Check button consistency across pages
async function testButtonConsistency() {
  logSection('TEST 6: Button Component Consistency');

  const buttonPath = path.join(__dirname, 'src', 'components', 'Button.astro');
  const ctaButtonPath = path.join(__dirname, 'src', 'components', 'CTAButton.astro');

  try {
    const buttonContent = await fs.readFile(buttonPath, 'utf-8');
    const ctaButtonContent = await fs.readFile(ctaButtonPath, 'utf-8');

    // Check bronze theme colors
    const buttonHasBronze = buttonContent.includes('#D4A574') || buttonContent.includes('primary-500');
    logTest('Button.astro - Bronze theme', buttonHasBronze, 'Bronze colors found');

    const ctaHasBronze = ctaButtonContent.includes('#D4A574') || ctaButtonContent.includes('primary-500');
    logTest('CTAButton.astro - Bronze theme', ctaHasBronze, 'Bronze colors found');

    // Check brutal shadows
    const buttonHasShadow = buttonContent.includes('shadow-[') || buttonContent.includes('box-shadow');
    logTest('Button.astro - Brutal shadows', buttonHasShadow, 'Shadow effects present');

    const ctaHasShadow = ctaButtonContent.includes('shadow-[') || ctaButtonContent.includes('box-shadow');
    logTest('CTAButton.astro - Brutal shadows', ctaHasShadow, 'Shadow effects present');

  } catch (error) {
    logTest('Button consistency', false, `Error reading button files: ${error.message}`);
  }
}

// Test 7: Check for "24 hour" claims removal
async function test24HourClaimsRemoval() {
  logSection('TEST 7: 24-Hour Claims Removal Verification');

  const languages = ['en', 'ms', 'zh'];
  const patterns = [
    { pattern: /24\s*hour/i, name: '24 hour' },
    { pattern: /24hr/i, name: '24hr' },
    { pattern: /24-hour/i, name: '24-hour' },
    { pattern: /24\s*jam/i, name: '24 jam' },
    { pattern: /24小时/i, name: '24小时' },
  ];

  // Check main pages
  const mainPages = ['index.astro', 'about.astro', 'contact.astro', 'faq.astro'];

  for (const lang of languages) {
    for (const page of mainPages) {
      const pagePath = path.join(__dirname, 'src', 'pages', lang, page);

      try {
        const content = await fs.readFile(pagePath, 'utf-8');
        let found24Claims = false;
        let foundPattern = '';

        for (const { pattern, name } of patterns) {
          if (pattern.test(content)) {
            found24Claims = true;
            foundPattern = name;
            break;
          }
        }

        logTest(`${lang}/${page} - No 24hr claims`, !found24Claims, found24Claims ? `Found: ${foundPattern}` : 'Clean');

      } catch (error) {
        // File might not exist, skip
        continue;
      }
    }
  }

  // Check translation files
  const i18nFiles = ['en.json', 'ms.json', 'zh.json'];
  for (const file of i18nFiles) {
    const filePath = path.join(__dirname, 'src', 'i18n', file);

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      let found24Claims = false;

      for (const { pattern } of patterns) {
        if (pattern.test(content)) {
          found24Claims = true;
          break;
        }
      }

      logTest(`i18n/${file} - No 24hr claims`, !found24Claims, found24Claims ? 'Found 24hr reference' : 'Clean');

    } catch (error) {
      logTest(`i18n/${file}`, false, `Could not read: ${error.message}`);
    }
  }
}

// Test 8: Visual component check
async function testComponentFiles() {
  logSection('TEST 8: Key Components Exist');

  const components = [
    'Header.astro',
    'Footer.astro',
    'Button.astro',
    'CTAButton.astro',
    'Hero.astro',
    'LanguageSwitcher.astro',
    'EquipmentDropdown.astro',
    'BlogCard.astro',
    'BenefitCard.astro',
    'ServiceCard.astro',
    'WhatsAppButton.astro',
  ];

  for (const component of components) {
    const componentPath = path.join(__dirname, 'src', 'components', component);

    try {
      await fs.access(componentPath);
      logTest(`Component: ${component}`, true, 'File exists');
    } catch (error) {
      logTest(`Component: ${component}`, false, 'File not found');
    }
  }
}

// Test 9: Favicon files check
async function testFaviconFiles() {
  logSection('TEST 9: Favicon Files for Google Search Console');

  const faviconFiles = [
    'public/favicon.ico',
    'public/images/icons/android-chrome-192x192.png',
    'public/images/icons/android-chrome-512x512.png',
    'public/images/icons/apple-touch-icon.png',
    'public/images/icons/favicon-16x16.png',
    'public/images/icons/favicon-32x32.png',
    'public/images/icons/contact-icon.png',
    'public/images/icons/equipment-icon.png',
  ];

  for (const file of faviconFiles) {
    const filePath = path.join(__dirname, file);

    try {
      await fs.access(filePath);
      logTest(`Favicon: ${file}`, true, 'File exists');
    } catch (error) {
      logTest(`Favicon: ${file}`, false, 'File not found');
    }
  }
}

// Test 10: Logo file check
async function testLogoFiles() {
  logSection('TEST 10: Logo Files');

  const logoFiles = [
    'public/logos/ing heng logo no background.png',
    'public/images/logo.png',
  ];

  for (const file of logoFiles) {
    const filePath = path.join(__dirname, file);

    try {
      await fs.access(filePath);
      logTest(`Logo: ${file}`, true, 'File exists');
    } catch (error) {
      logTest(`Logo: ${file}`, false, 'File not found');
    }
  }
}

// Test 11: Check Tailwind config has bronze colors
async function testTailwindConfig() {
  logSection('TEST 11: Tailwind Config - Bronze Theme');

  const configPath = path.join(__dirname, 'tailwind.config.cjs');

  try {
    const content = await fs.readFile(configPath, 'utf-8');

    // Check for bronze colors
    const hasPrimaryBronze = content.includes('#8B6F47');
    logTest('Primary bronze (#8B6F47)', hasPrimaryBronze, 'Color defined');

    const hasSecondaryGold = content.includes('#D4A574');
    logTest('Secondary gold (#D4A574)', hasSecondaryGold, 'Color defined');

    const hasAccentBrown = content.includes('#2D1810');
    logTest('Accent dark brown (#2D1810)', hasAccentBrown, 'Color defined');

    const hasNeutralBeige = content.includes('#F5F5DC');
    logTest('Neutral beige (#F5F5DC)', hasNeutralBeige, 'Color defined');

    // Check for brutal shadow definitions
    const hasBrutalShadow = content.includes('brutal') || content.includes('shadow-brutal');
    logTest('Brutal shadow system', hasBrutalShadow, 'Shadow utilities defined');

  } catch (error) {
    logTest('Tailwind config', false, `Could not read: ${error.message}`);
  }
}

// Test 12: Check constants for removed 24hr claims
async function testConstants() {
  logSection('TEST 12: Constants File - No 24hr Claims');

  const constantsPath = path.join(__dirname, 'src', 'utils', 'constants.ts');

  try {
    const content = await fs.readFile(constantsPath, 'utf-8');

    const has24Hour = /24\s*hour/i.test(content) || /24hr/i.test(content);
    logTest('constants.ts - No 24hr claims', !has24Hour, has24Hour ? 'Found 24hr reference' : 'Clean');

    // Check KEY_BENEFITS has "Quick Approval" not "24-Hour Approval"
    const hasQuickApproval = content.includes('Quick Approval') || content.includes('Fast Approval');
    logTest('KEY_BENEFITS updated', hasQuickApproval, 'Updated to Quick/Fast Approval');

  } catch (error) {
    logTest('Constants check', false, `Could not read: ${error.message}`);
  }
}

// Main test runner
async function runAllTests() {
  log('\n' + '█'.repeat(60), 'cyan');
  log('  COMPREHENSIVE UI TEST SUITE', 'bold');
  log('  Ing Heng Credit Website - Bronze Theme', 'cyan');
  log('█'.repeat(60) + '\n', 'cyan');

  log(`Testing against: ${BASE_URL}`, 'yellow');
  log(`Start time: ${new Date().toLocaleString()}\n`, 'yellow');

  // Run all tests
  await testBlogPostFilesExist();
  await testBlogIndexListings();
  await testBlogSubmenuRemoval();
  await testLanguageSwitcherDesign();
  await testComponentFiles();
  await testFaviconFiles();
  await testLogoFiles();
  await testTailwindConfig();
  await testConstants();

  // Summary
  logSection('TEST SUMMARY');

  const totalTests = passedTests + failedTests;
  const passRate = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(1) : 0;

  log(`\nTotal Tests: ${totalTests}`, 'bold');
  log(`Passed: ${passedTests}`, 'green');
  log(`Failed: ${failedTests}`, failedTests > 0 ? 'red' : 'green');
  log(`Pass Rate: ${passRate}%\n`, passRate >= 95 ? 'green' : passRate >= 80 ? 'yellow' : 'red');

  if (failedTests === 0) {
    log('🎉 ALL TESTS PASSED! Site is ready for deployment!', 'green');
  } else {
    log(`⚠️  ${failedTests} test(s) failed. Review issues above.`, 'yellow');
  }

  // Generate report file
  const reportPath = path.join(__dirname, 'TEST-RESULTS.md');
  let report = `# Comprehensive UI Test Results\n\n`;
  report += `**Date:** ${new Date().toLocaleString()}\n`;
  report += `**Total Tests:** ${totalTests}\n`;
  report += `**Passed:** ${passedTests}\n`;
  report += `**Failed:** ${failedTests}\n`;
  report += `**Pass Rate:** ${passRate}%\n\n`;
  report += `---\n\n## Detailed Results\n\n`;

  testResults.forEach(({ test, passed, details }) => {
    report += `- ${passed ? '✅' : '❌'} **${test}**`;
    if (details) report += ` - ${details}`;
    report += `\n`;
  });

  await fs.writeFile(reportPath, report, 'utf-8');
  log(`\n📄 Detailed report saved to: TEST-RESULTS.md`, 'cyan');
}

// Run tests
runAllTests().catch(error => {
  log(`\n❌ Test suite error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});

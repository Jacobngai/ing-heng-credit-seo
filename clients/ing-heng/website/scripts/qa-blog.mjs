#!/usr/bin/env node
/**
 * Blog QA Script using Playwright
 * Tests all blog posts for 404s, console errors, broken links, and SEO issues
 *
 * Usage: node scripts/qa-blog.mjs
 * Requirements: npm run dev must be running on http://localhost:4321
 */

import { chromium } from 'playwright';
import { getAllBlogPosts } from '../src/data/blog-posts.js';

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';
const CONCURRENT_BROWSERS = 3; // Test 3 pages at a time
const TIMEOUT = 30000; // 30 seconds per page

// Results storage
const results = {
  tested: 0,
  passed: 0,
  failed: 0,
  errors: [],
  details: []
};

/**
 * Main execution function
 */
async function main() {
  console.log('🔍 Starting Blog QA Tests...\n');
  console.log(`📍 Base URL: ${BASE_URL}`);
  console.log(`⏰ Timeout: ${TIMEOUT}ms per page\n`);

  // Get all blog posts
  const posts = getAllBlogPosts();
  console.log(`📝 Found ${posts.length} blog posts to test\n`);

  // Launch browser
  const browser = await chromium.launch({
    headless: true,
    logger: {
      isEnabled: false // Reduce noise
    }
  });

  try {
    // Test pages in batches
    const batches = [];
    for (let i = 0; i < posts.length; i += CONCURRENT_BROWSERS) {
      batches.push(posts.slice(i, i + CONCURRENT_BROWSERS));
    }

    let batchNum = 0;
    for (const batch of batches) {
      batchNum++;
      console.log(`\n📦 Batch ${batchNum}/${batches.length} (${batch.length} posts)`);

      // Test all posts in this batch concurrently
      await Promise.all(batch.map(post => testBlogPost(browser, post)));
    }

    // Print summary
    printSummary();

    // Exit with error code if any tests failed
    if (results.failed > 0) {
      process.exit(1);
    }

  } finally {
    await browser.close();
  }
}

/**
 * Test a single blog post
 */
async function testBlogPost(browser, post) {
  const url = `${BASE_URL}/en/blog/${post.slug}`;
  const pageResult = {
    slug: post.slug,
    url,
    title: post.title,
    passed: true,
    issues: []
  };

  const context = await browser.newContext();
  const page = await context.newPage();

  // Track console messages
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({
        text: msg.text(),
        location: msg.location()
      });
    }
  });

  // Track 404 responses
  const failedRequests = [];
  page.on('response', response => {
    if (response.status() >= 400) {
      failedRequests.push({
        url: response.url(),
        status: response.status(),
        statusText: response.statusText()
      });
    }
  });

  try {
    // Navigate to page
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: TIMEOUT
    });

    // Check 1: Page loaded successfully (not 404)
    const title = await page.title();
    if (title.includes('404') || title.includes('Not Found') || page.url().includes('/404')) {
      pageResult.issues.push('❌ 404 Page Not Found');
      pageResult.passed = false;
    }

    // Check 2: No console errors
    if (consoleErrors.length > 0) {
      pageResult.issues.push(`⚠️ ${consoleErrors.length} console error(s)`);
      pageResult.passed = false;
      pageResult.consoleErrors = consoleErrors;
    }

    // Check 3: Main content exists
    const mainContent = await page.locator('article, main, .prose').first();
    const contentExists = await mainContent.count() > 0;
    if (!contentExists) {
      pageResult.issues.push('❌ No main content found');
      pageResult.passed = false;
    }

    // Check 4: Title element exists and matches
    const h1 = await page.locator('h1').first();
    const h1Exists = await h1.count() > 0;
    if (!h1Exists) {
      pageResult.issues.push('❌ No H1 heading found');
      pageResult.passed = false;
    }

    // Check 5: Meta description exists
    const metaDesc = await page.locator('meta[name="description"]').first();
    const metaDescExists = await metaDesc.count() > 0;
    if (!metaDescExists) {
      pageResult.issues.push('⚠️ No meta description');
    }

    // Check 6: Broken internal links (check up to 10 links)
    const links = await page.locator('a[href^="/"]').all();
    const testedLinks = [];
    for (const link of links.slice(0, 10)) {
      try {
        const href = await link.getAttribute('href');
        if (href && !testedLinks.includes(href)) {
          testedLinks.push(href);
          const response = await page.request.get(href);
          if (response.status() >= 400) {
            pageResult.issues.push(`⚠️ Broken link: ${href} (${response.status()})`);
          }
        }
      } catch (e) {
        // Skip links that fail to load
      }
    }

    // Check 7: Canonical URL exists
    const canonical = await page.locator('link[rel="canonical"]').first();
    const canonicalExists = await canonical.count() > 0;
    if (!canonicalExists) {
      pageResult.issues.push('⚠️ No canonical URL');
    }

    // Update results
    results.tested++;
    if (pageResult.passed) {
      results.passed++;
      console.log(`  ✅ ${post.slug.substring(0, 50)}...`);
    } else {
      results.failed++;
      console.log(`  ❌ ${post.slug.substring(0, 50)}... (${pageResult.issues.length} issues)`);
      results.errors.push(...pageResult.issues);
    }

    results.details.push(pageResult);

  } catch (error) {
    // Test failed to complete
    results.failed++;
    results.tested++;
    pageResult.issues.push(`❌ Test failed: ${error.message}`);
    results.errors.push(`❌ ${post.slug}: ${error.message}`);
    results.details.push(pageResult);
    console.log(`  💥 ${post.slug.substring(0, 50)}... CRASHED`);

  } finally {
    await context.close();
  }
}

/**
 * Print test summary
 */
function printSummary() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 BLOG QA TEST RESULTS');
  console.log('='.repeat(60));
  console.log(`Total Tested:  ${results.tested}`);
  console.log(`✅ Passed:      ${results.passed} (${((results.passed / results.tested) * 100).toFixed(1)}%)`);
  console.log(`❌ Failed:      ${results.failed} (${((results.failed / results.tested) * 100).toFixed(1)}%)`);

  if (results.failed > 0) {
    console.log('\n❌ ISSUES FOUND:\n');
    results.errors.forEach((error, i) => {
      console.log(`  ${i + 1}. ${error}`);
    });

    // Print detailed failures
    console.log('\n📋 FAILED PAGES DETAILS:\n');
    results.details
      .filter(d => !d.passed)
      .forEach(d => {
        console.log(`📄 ${d.slug}`);
        console.log(`   URL: ${d.url}`);
        console.log(`   Title: ${d.title}`);
        console.log('   Issues:');
        d.issues.forEach(issue => console.log(`     ${issue}`));
        console.log('');
      });

    console.log('💡 RECOMMENDED ACTIONS:');
    console.log('   1. Fix broken routes (missing [slug].astro templates)');
    console.log('   2. Fix console errors in components');
    console.log('   3. Update broken internal links');
    console.log('   4. Add missing meta descriptions');
    console.log('   5. Add canonical URLs');
    console.log('');

  } else {
    console.log('\n🎉 ALL TESTS PASSED! Your blog is healthy.\n');
  }

  console.log('='.repeat(60));
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

export { main };

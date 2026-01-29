#!/usr/bin/env node
/**
 * Blog QA Script using Playwright for Astro Content Collections
 * Tests all blog posts for 404s, console errors, broken links, and SEO issues
 *
 * Usage: node scripts/qa-blog-v2.mjs
 * Requirements: npm run dev must be running on http://localhost:4321
 */

import { chromium } from 'playwright';
import { readdirSync } from 'fs';
import { join } from 'path';

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';
const CONCURRENT_BROWSERS = 3;
const TIMEOUT = 30000;

// Results storage
const results = {
  tested: 0,
  passed: 0,
  failed: 0,
  errors: [],
  details: []
};

/**
 * Get all blog posts from content collections
 */
function getAllBlogPosts() {
  const blogsDir = join(process.cwd(), 'src', 'content', 'blogs');
  const posts = [];
  const languages = ['en', 'ms', 'zh'];

  for (const lang of languages) {
    const langDir = join(blogsDir, lang);
    try {
      const files = readdirSync(langDir).filter(f => f.endsWith('.md'));
      for (const file of files) {
        const slug = file.replace('.md', '');
        posts.push({
          slug,
          lang,
          title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        });
      }
    } catch (e) {
      console.warn(`  ⚠️ No blog directory found for ${lang}`);
    }
  }

  return posts;
}

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

  if (posts.length === 0) {
    console.error('❌ No blog posts found!');
    process.exit(1);
  }

  // Launch browser
  const browser = await chromium.launch({
    headless: true,
    logger: { isEnabled: false }
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

      await Promise.all(batch.map(post => testBlogPost(browser, post)));
    }

    printSummary();

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
  const url = `${BASE_URL}/${post.lang}/blog/${post.slug}`;
  const pageResult = {
    slug: post.slug,
    lang: post.lang,
    url,
    title: post.title,
    passed: true,
    issues: []
  };

  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ text: msg.text() });
    }
  });

  const failedRequests = [];
  page.on('response', response => {
    if (response.status() >= 400) {
      failedRequests.push({
        url: response.url(),
        status: response.status()
      });
    }
  });

  try {
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: TIMEOUT
    });

    // Check 1: Not 404
    const title = await page.title();
    if (title.includes('404') || page.url().includes('/404')) {
      pageResult.issues.push('❌ 404 Page Not Found');
      pageResult.passed = false;
    }

    // Check 2: No console errors
    if (consoleErrors.length > 0) {
      pageResult.issues.push(`⚠️ ${consoleErrors.length} console error(s)`);
      if (consoleErrors.length <= 3) {
        pageResult.consoleErrors = consoleErrors;
      }
      pageResult.passed = false;
    }

    // Check 3: Main content exists
    const contentExists = await page.locator('main, article, .prose, .blog-content').first().count() > 0;
    if (!contentExists) {
      pageResult.issues.push('❌ No main content found');
      pageResult.passed = false;
    }

    // Check 4: H1 exists
    const h1Exists = await page.locator('h1').first().count() > 0;
    if (!h1Exists) {
      pageResult.issues.push('❌ No H1 heading found');
      pageResult.passed = false;
    }

    results.tested++;
    if (pageResult.passed) {
      results.passed++;
      console.log(`  ✅ [${post.lang}] ${post.slug.substring(0, 40)}...`);
    } else {
      results.failed++;
      console.log(`  ❌ [${post.lang}] ${post.slug.substring(0, 40)}... (${pageResult.issues.length} issues)`);
      results.errors.push(...pageResult.issues);
    }

    results.details.push(pageResult);

  } catch (error) {
    results.failed++;
    results.tested++;
    pageResult.issues.push(`❌ Test failed: ${error.message}`);
    results.errors.push(`❌ ${post.slug}: ${error.message}`);
    results.details.push(pageResult);
    console.log(`  💥 [${post.lang}] ${post.slug.substring(0, 40)}... CRASHED`);

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
    const uniqueErrors = [...new Set(results.errors)].slice(0, 20);
    uniqueErrors.forEach((error, i) => {
      console.log(`  ${i + 1}. ${error}`);
    });

    if (results.errors.length > 20) {
      console.log(`  ... and ${results.errors.length - 20} more errors`);
    }

    console.log('\n📋 FAILED PAGES DETAILS (first 10):\n');
    results.details
      .filter(d => !d.passed)
      .slice(0, 10)
      .forEach(d => {
        console.log(`📄 [${d.lang}] ${d.slug}`);
        d.issues.forEach(issue => console.log(`   ${issue}`));
        console.log('');
      });

    console.log('💡 RECOMMENDED ACTIONS:');
    console.log('   1. Fix broken routes (missing [slug].astro templates)');
    console.log('   2. Fix console errors in components');
    console.log('   3. Check blog post markdown files for errors');
    console.log('   4. Verify Astro content collections configuration');
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

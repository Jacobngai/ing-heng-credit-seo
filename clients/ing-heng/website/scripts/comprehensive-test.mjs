#!/usr/bin/env node
/**
 * Comprehensive Blog Test - Tests 100 posts from each language
 */

import { chromium } from 'playwright';
import { readdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'http://localhost:4321';
const BATCH_SIZE = 10; // Test 10 pages concurrently

function getBlogPosts(lang, limit = 100) {
  const blogsDir = join(process.cwd(), 'src', 'content', 'blogs', lang);
  try {
    const files = readdirSync(blogsDir).filter(f => f.endsWith('.md'));
    return files.slice(0, limit).map(f => ({
      slug: f.replace('.md', ''),
      lang
    }));
  } catch (e) {
    return [];
  }
}

async function testPost(browser, post) {
  const url = `${BASE_URL}/${post.lang}/blog/${post.slug}`;
  const page = await browser.newPage();

  try {
    await page.goto(url, { timeout: 15000, waitUntil: 'domcontentloaded' });
    const title = await page.title();
    const is404 = title.includes('404') || page.url().includes('/404');

    if (is404) {
      return { success: false, slug: post.slug, lang: post.lang, error: '404' };
    }

    // Check for basic content
    const hasContent = await page.locator('main, article, .prose, .blog-content').first().count() > 0;
    if (!hasContent) {
      return { success: false, slug: post.slug, lang: post.lang, error: 'No content' };
    }

    return { success: true, slug: post.slug, lang: post.lang };
  } catch (error) {
    return { success: false, slug: post.slug, lang: post.lang, error: error.message };
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🔍 Comprehensive Blog QA Test\n');
  console.log('='.repeat(60));

  const posts = [
    ...getBlogPosts('en', 100),
    ...getBlogPosts('ms', 100),
    ...getBlogPosts('zh', 100)
  ];

  console.log(`\n📝 Testing ${posts.length} blog posts...\n`);

  const browser = await chromium.launch({ headless: true });
  let passed = 0;
  let failed = 0;
  const failures = [];

  try {
    // Process in batches
    for (let i = 0; i < posts.length; i += BATCH_SIZE) {
      const batch = posts.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(posts.length / BATCH_SIZE);

      console.log(`\n📦 Batch ${batchNum}/${totalBatches} (${batch.length} posts)`);

      const results = await Promise.all(batch.map(post => testPost(browser, post)));

      for (const result of results) {
        if (result.success) {
          passed++;
          console.log(`  ✅ [${result.lang}] ${result.slug.substring(0, 50)}...`);
        } else {
          failed++;
          console.log(`  ❌ [${result.lang}] ${result.slug.substring(0, 45)}... (${result.error})`);
          failures.push(result);
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST RESULTS');
  console.log('='.repeat(60));
  console.log(`Total Tested: ${posts.length}`);
  console.log(`✅ Passed:     ${passed} (${((passed/posts.length)*100).toFixed(1)}%)`);
  console.log(`❌ Failed:     ${failed} (${((failed/posts.length)*100).toFixed(1)}%)`);

  if (failures.length > 0) {
    console.log('\n❌ FAILURES (first 20):\n');
    failures.slice(0, 20).forEach(f => {
      console.log(`  [${f.lang}] ${f.slug}`);
      console.log(`    Error: ${f.error}\n`);
    });
  }

  console.log('\n' + '='.repeat(60));

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(console.error);

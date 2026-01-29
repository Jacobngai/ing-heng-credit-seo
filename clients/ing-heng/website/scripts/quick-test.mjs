#!/usr/bin/env node
/**
 * Quick Blog Test - Tests first 10 posts from each language
 */

import { chromium } from 'playwright';
import { readdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'http://localhost:4321';

function getBlogPosts(lang, limit = 10) {
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

async function testPost(post) {
  const url = `${BASE_URL}/${post.lang}/blog/${post.slug}`;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, { timeout: 10000 });
    const title = await page.title();
    const is404 = title.includes('404') || page.url().includes('/404');

    console.log(`${is404 ? '❌' : '✅'} [${post.lang}] ${post.slug.substring(0, 50)} -> ${is404 ? '404' : 'OK'}`);

    await browser.close();
    return !is404;
  } catch (error) {
    console.log(`💥 [${post.lang}] ${post.slug.substring(0, 50)} -> ERROR: ${error.message}`);
    await browser.close();
    return false;
  }
}

async function main() {
  console.log('🔍 Quick Blog Test\n');

  const posts = [
    ...getBlogPosts('en', 5),
    ...getBlogPosts('ms', 5),
    ...getBlogPosts('zh', 5)
  ];

  console.log(`Testing ${posts.length} posts...\n`);

  let passed = 0;
  let failed = 0;

  for (const post of posts) {
    const result = await testPost(post);
    if (result) passed++;
    else failed++;
  }

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch(console.error);

/**
 * Scrape blog posts from production site and convert to markdown
 * Run with: node scrape-production-blogs.cjs
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const PRODUCTION_BASE = 'https://www.inghengcredit.com';
const BLOG_INDEX = '/en/blog/';
const OUTPUT_DIR = 'src/content/blogs/en';

// Category mapping for schema compliance
const categoryMap = {
  'Equipment Financing': 'Equipment Financing',
  'Financing Guides': 'Financing Guides',
  'Business Financing': 'Business Financing',
  'Logistics Equipment': 'Logistics Equipment',
  'Construction Equipment': 'Construction Equipment',
  'Business Tips': 'Business Tips',
  'Industry News': 'Industry News',
  'Case Studies': 'Case Studies',
  'Tax Benefits': 'Equipment Financing',
  'Government Tenders': 'Construction Equipment',
  'Crane Financing': 'Equipment Financing',
  'Fleet Financing': 'Equipment Financing',
  'Technology Equipment': 'Equipment Financing',
};

// HTML to Markdown converter
function htmlToMarkdown(html) {
  let markdown = html;

  // Headers
  markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  markdown = markdown.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');

  // Bold and italic
  markdown = markdown.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  markdown = markdown.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  markdown = markdown.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  markdown = markdown.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');

  // Links
  markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Unordered lists
  markdown = markdown.replace(/<ul[^>]*>/gi, '');
  markdown = markdown.replace(/<\/ul>/gi, '\n');
  markdown = markdown.replace(/<li[^>]*>/gi, '• ');
  markdown = markdown.replace(/<\/li>/gi, '\n');

  // Ordered lists
  markdown = markdown.replace(/<ol[^>]*>/gi, '');
  markdown = markdown.replace(/<\/ol>/gi, '\n');
  let listCounter = 1;
  markdown = markdown.replace(/<li[^>]*>/gi, () => `${listCounter++}. `);

  // Paragraphs
  markdown = markdown.replace(/<p[^>]*>/gi, '');
  markdown = markdown.replace(/<\/p>/gi, '\n\n');

  // Line breaks
  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');

  // Blockquotes
  markdown = markdown.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, '> $1\n\n');

  // Code blocks
  markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
  markdown = markdown.replace(/<pre[^>]*>(.*?)<\/pre>/gis, '```\n$1\n```\n');

  // Remove remaining HTML tags
  markdown = markdown.replace(/<[^>]+>/g, '');

  // Clean up extra whitespace
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  markdown = markdown.trim();

  return markdown;
}

// Extract blog post data from page
async function extractBlogPost(page, url) {
  await page.goto(url, { waitUntil: 'networkidle' });

  // Extract meta data from page
  const data = await page.evaluate(() => {
    // Get title
    const title = document.querySelector('h1')?.textContent?.trim() ||
                 document.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
                 '';

    // Get description
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') ||
                        document.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
                        '';

    // Get publish date
    const dateElement = document.querySelector('time');
    const publishDate = dateElement?.getAttribute('datetime') ||
                       dateElement?.textContent?.trim() ||
                       new Date().toISOString().split('T')[0];

    // Get category
    const categoryElement = document.querySelector('.badge-brutalist, [class*="badge"], [class*="category"]');
    const category = categoryElement?.textContent?.trim() || 'Equipment Financing';

    // Get reading time
    const readTimeText = document.querySelector('[class*="read"]')?.textContent?.match(/\d+/);
    const readingTime = readTimeText ? parseInt(readTimeText[0]) : 7;

    // Check if featured
    const featured = document.body.innerHTML.includes('FEATURED') ||
                    document.querySelector('[class*="featured"]') !== null;

    return { title, description, publishDate, category, readingTime, featured };
  });

  // Extract article content
  const content = await page.evaluate(() => {
    // Try different selectors for article content
    const article = document.querySelector('article') ||
                   document.querySelector('[class*="prose"]') ||
                   document.querySelector('[class*="content"]') ||
                   document.querySelector('main');

    return article ? article.innerHTML : '';
  });

  // Convert to markdown
  const markdown = htmlToMarkdown(content);

  return { ...data, content: markdown };
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Get all blog post URLs from pagination pages
async function getAllBlogUrls(page) {
  const urls = [];
  let pageNum = 1;

  while (true) {
    console.log(`Fetching page ${pageNum}...`);
    const pageUrl = pageNum === 1
      ? `${PRODUCTION_BASE}${BLOG_INDEX}`
      : `${PRODUCTION_BASE}${BLOG_INDEX}page/${pageNum}`;
    await page.goto(pageUrl, { waitUntil: 'networkidle' });

    // Get all blog post links - updated selector
    const pageUrls = await page.evaluate(() => {
      const result = [];
      const seen = new Set();

      // Find all links in blog cards
      const cards = document.querySelectorAll('div[class*="card"], article, [class*="post"]');
      cards.forEach(card => {
        const links = card.querySelectorAll('a[href*="/en/blog/"]');
        links.forEach(link => {
          const href = link.getAttribute('href');
          if (href &&
              !href.includes('/page/') &&
              !href.includes('/category/') &&
              href.match(/\/en\/blog\/[^\/]+\/?$/) &&
              !seen.has(href)) {
            seen.add(href);
            result.push(href.replace(/\/$/, ''));
          }
        });
      });

      return result;
    });

    if (pageUrls.length === 0) {
      break;
    }

    // Add new URLs (avoid duplicates)
    for (const url of pageUrls) {
      const fullUrl = `${PRODUCTION_BASE}${url}`;
      if (!urls.includes(fullUrl)) {
        urls.push(fullUrl);
      }
    }

    // Check if there's a next page
    const hasNextPage = await page.evaluate(() => {
      const nextLink = document.querySelector('a[href*="page/"]') ||
                      document.querySelector('[class*="next"]');
      return nextLink !== null;
    });

    if (!hasNextPage) {
      break;
    }

    pageNum++;
  }

  return urls;
}

// Main function
async function main() {
  console.log('Starting blog scraping...\n');

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Get all blog URLs
    console.log('Getting all blog post URLs...');
    const urls = await getAllBlogUrls(page);
    console.log(`Found ${urls.length} blog posts\n`);

    // Create output directory if it doesn't exist
    const outputPath = path.resolve(__dirname, OUTPUT_DIR);
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Process each blog post
    let scraped = 0;
    let skipped = 0;

    for (const url of urls) {
      try {
        console.log(`[${scraped + 1}/${urls.length}] Scraping: ${url}`);

        const data = await extractBlogPost(page, url);

        // Generate filename
        const slug = generateSlug(data.title);
        const filename = `${slug}.md`;
        const filePath = path.join(outputPath, filename);

        // Skip if file already exists
        if (fs.existsSync(filePath)) {
          console.log(`  → Skipped (already exists)\n`);
          skipped++;
          continue;
        }

        // Map category to schema value
        const category = categoryMap[data.category] || 'Equipment Financing';

        // Extract keywords from title
        const keywords = data.title.toLowerCase()
          .split(/\s+/)
          .filter(word => word.length > 3)
          .slice(0, 8);

        // Create frontmatter
        const frontmatter = `---
title: "${data.title.replace(/"/g, '\\"')}"
description: "${data.description.replace(/"/g, '\\"')}"
author: "Ing Heng Credit Team"
publishDate: ${data.publishDate}
category: ${category}
tags:
  - Equipment Financing
locale: en
featured: ${data.featured}
readingTime: ${data.readingTime}
keywords:
  ${keywords.map(k => `- ${k}`).join('\n  ')}
ogImage: /images/blog/forklift-financing.jpg
---

`;

        // Write to file
        fs.writeFileSync(filePath, frontmatter + data.content);

        console.log(`  → Saved: ${filename}\n`);
        scraped++;

        // Small delay to avoid overwhelming the server
        await page.waitForTimeout(500);

      } catch (error) {
        console.error(`  → Error scraping ${url}:`, error.message, '\n');
      }
    }

    console.log(`\n✅ Complete!`);
    console.log(`   Scraped: ${scraped} new posts`);
    console.log(`   Skipped: ${skipped} existing posts`);
    console.log(`   Total: ${urls.length} posts`);

  } finally {
    await browser.close();
  }
}

main().catch(console.error);

/**
 * Blog Scraper for Ing Heng Credit
 * Scrapes all blog posts from live sites and saves as .astro files
 *
 * Usage:
 *   node scrape-blog.js en    # Scrape English blog (124 posts)
 *   node scrape-blog.js ms    # Scrape Malay blog (116 posts)
 *   node scrape-blog.js zh    # Scrape Chinese blog (111 posts)
 */

const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

// Site configuration
const SITES = {
  en: {
    baseUrl: 'https://www.inghengcredit.com',
    blogPath: '/en/blog',
    totalPages: 11,
    outputDir: './scraped-blog-posts/en'
  },
  ms: {
    baseUrl: 'https://www.kreditloan.my',
    blogPath: '/ms/blog',
    totalPages: 10,
    outputDir: './scraped-blog-posts/ms'
  },
  zh: {
    baseUrl: 'https://www.inghengcredit.my',
    blogPath: '/zh/blog',
    totalPages: 10,
    outputDir: './scraped-blog-posts/zh'
  }
};

// Get command line argument
const lang = process.argv[2] || 'en';
const config = SITES[lang];

if (!config) {
  console.error(`Unknown language: ${lang}. Use 'en', 'ms', or 'zh'.`);
  process.exit(1);
}

/**
 * Extract blog post data from a page
 */
async function extractBlogData(page, url) {
  console.log(`  Scraping: ${url}`);

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Wait a bit for dynamic content
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    // Extract title
    const title = document.querySelector('h1')?.textContent?.trim() ||
                 document.querySelector('article h1')?.textContent?.trim();

    // Extract meta description
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') ||
                           document.querySelector('meta[property="og:description"]')?.getAttribute('content');

    // Extract category - try multiple selectors
    const categoryEl = document.querySelector('.badge-brutalist') ||
                      document.querySelector('article span[class*="badge"]') ||
                      document.querySelector('article .text-sm.font-semibold');
    const category = categoryEl?.textContent?.trim() || 'Equipment Financing';

    // Extract date
    const dateEl = document.querySelector('time');
    const date = dateEl?.getAttribute('datetime') || dateEl?.textContent?.trim();

    // Extract read time
    const readTimeText = document.querySelector('article')?.textContent?.match(/(\d+)\s*min\s*read/i);
    const readTime = readTimeText ? parseInt(readTimeText[1]) : 7;

    // Extract author
    const authorEl = Array.from(document.querySelectorAll('span, div')).find(el =>
      el.textContent.includes('Ing Heng Credit')
    );
    const author = authorEl?.textContent?.trim().replace('By', '').trim() || 'Ing Heng Credit Team';

    // Extract breadcrumbs
    const breadcrumbs = Array.from(document.querySelectorAll('nav[aria-label="Breadcrumb"] a, ol li a'))
      .map(a => ({
        label: a.textContent.trim(),
        href: a.getAttribute('href')
      }))
      .filter(bc => bc.label && bc.href);

    // Extract slug from URL
    const urlMatch = window.location.pathname.match(/\/(?:en|ms|zh)\/blog\/([^\/]+)\/?/);
    const slug = urlMatch ? urlMatch[1] : window.location.pathname.split('/').filter(Boolean).pop();

    // Extract main content
    const contentDiv = document.querySelector('article .prose') ||
                      document.querySelector('article .prose-lg') ||
                      document.querySelector('article');

    let content = '';
    if (contentDiv) {
      content = contentDiv.innerHTML
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/style="[^"]*"/gi, '') // Remove inline styles
        .trim();
    }

    // Extract keywords from meta
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') ||
                    `${title}, ${category}, equipment financing, Malaysia`;

    // Extract image
    const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
                 document.querySelector('article img')?.src ||
                 '/images/blog/default.jpg';

    return {
      title,
      slug,
      excerpt: metaDescription || '',
      date,
      author,
      readTime,
      category,
      keywords,
      image,
      breadcrumbs,
      content,
      url: window.location.href
    };
  });

  return data;
}

/**
 * Get all blog post URLs from a page
 */
async function getBlogUrlsFromPage(page, pageNum) {
  const url = pageNum === 1
    ? `${config.baseUrl}${config.blogPath}`
    : `${config.baseUrl}${config.blogPath}/page/${pageNum}`;

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Wait for content to load
  await page.waitForTimeout(3000);

  const urls = await page.evaluate(({ langCode, baseUrl }) => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const blogLinks = links
      .map(a => {
        let href = a.getAttribute('href');
        if (href && href.includes(`/${langCode}/blog/`)) {
          // Filter out category, pagination, and other non-article pages
          if (!href.includes('/category/') &&
              !href.includes('/page/') &&
              !href.includes('/brand/') &&
              !href.includes('/location/') &&
              !href.includes('/topic/') &&
              !href.includes('#') &&
              !href.endsWith(`/${langCode}/blog/`) &&
              href.match(new RegExp(`\\/${langCode}\\/blog\\/[^\\/]+\\/?$`))) {
            // Construct full URL properly
            if (href.startsWith('http')) {
              return href;
            } else {
              return baseUrl + (href.startsWith('/') ? '' : '/') + href;
            }
          }
        }
        return null;
      })
      .filter(Boolean);

    return [...new Set(blogLinks)];
  }, { langCode: lang, baseUrl: config.baseUrl });

  return urls;
}

/**
 * Convert blog data to Astro file format
 */
function blogDataToAstro(data, lang) {
  const frontMatter = {
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    date: data.date || new Date().toISOString(),
    author: data.author,
    readTime: data.readTime,
    category: data.category,
    image: data.image
  };

  const keywords = data.keywords || [];
  const breadcrumbItems = data.breadcrumbs.length > 0 ? data.breadcrumbs : [
    { label: 'Home', href: `/${lang}` },
    { label: 'Blog', href: `/${lang}/blog` },
    { label: data.title, href: `/${lang}/blog/${data.slug}` }
  ];

  // Generate Astro file content
  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = '${lang}';
const post = ${JSON.stringify(frontMatter, null, 2)};

const keywords = ${JSON.stringify(keywords, null, 2)},
  breadcrumbItems = ${JSON.stringify(breadcrumbItems, null, 2)};
---

<BaseLayout title={post.title} description={post.excerpt} lang={lang} keywords={keywords}>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": post.author },
      "publisher": {
        "@type": "Organization",
        "name": "Ing Heng Credit & Leasing Sdn Bhd",
        "logo": {
          "@type": "ImageObject",
          "url": "https://inghengcredit.com/logo.png"
        }
      }
    }
  </script>

  <Breadcrumbs items={breadcrumbItems} />

  <article class="max-w-4xl mx-auto px-4 py-12">
    <header class="mb-8">
      <span class="text-sm font-semibold" style="color: #D4A574;">${data.category}</span>
      <h1 class="text-4xl font-bold mt-2" style="color: #2D1810; font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;">{post.title}</h1>
      <p class="text-gray-600 mt-4">{post.excerpt}</p>
      <div class="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span>{post.author}</span>
        <span>•</span>
        <time>{new Date(post.date).toLocaleDateString('${lang === 'ms' ? 'ms-MY' : lang === 'zh' ? 'zh-CN' : 'en-US'}, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>•</span>
        <span>{post.readTime} min read</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
      ${data.content}
    </div>

    <footer class="mt-12 pt-8 border-t">
      <CTAButton text="Get Equipment Financing" link={COMPANY_INFO.whatsapp.link} variant="accent" size="large" />
    </footer>
  </article>
</BaseLayout>

<style>
  h2 {
    color: #2D1810;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #D4A574;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #8B6F47;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.8;
    color: #374151;
  }

  strong {
    color: #2D1810;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1.8;
    color: #374151;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #D4A574;
    font-weight: bold;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
  }

  th, td {
    border: 2px solid #2D1810;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background: #D4A574;
    color: #2D1810;
    font-weight: bold;
  }

  em {
    display: block;
    margin-top: 0.5rem;
    color: #6B7280;
    font-style: normal;
  }

  br {
    display: none;
  }
</style>
`;
}

/**
 * Main scraping function
 */
async function scrapeBlog() {
  console.log(`\n=== Scraping ${lang.toUpperCase()} Blog ===`);
  console.log(`Base URL: ${config.baseUrl}`);
  console.log(`Total pages: ${config.totalPages}`);
  console.log(`Output directory: ${config.outputDir}\n`);

  // Create output directory
  await fs.mkdir(config.outputDir, { recursive: true });

  // Launch browser
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Collect all blog URLs
  console.log('Step 1: Collecting all blog post URLs...');
  const allUrls = new Set();

  for (let i = 1; i <= config.totalPages; i++) {
    console.log(`  Page ${i}/${config.totalPages}...`);
    try {
      const urls = await getBlogUrlsFromPage(page, i);
      urls.forEach(url => allUrls.add(url));
      console.log(`    Found ${urls.length} posts`);
    } catch (error) {
      console.error(`    Error: ${error.message}`);
    }
    // Small delay between requests
    await page.waitForTimeout(500);
  }

  const totalPosts = allUrls.size;
  console.log(`\nTotal posts found: ${totalPosts}`);

  if (totalPosts === 0) {
    console.log('\nNo posts found! Please check the site structure.');
    await browser.close();
    return;
  }

  // Scrape each post
  console.log('\nStep 2: Scraping each blog post...');
  let scraped = 0;
  let errors = 0;

  for (const url of allUrls) {
    try {
      const data = await extractBlogData(page, url);

      // Generate Astro file content
      const astroContent = blogDataToAstro(data, lang);

      // Save to file
      const filename = `${data.slug}.astro`;
      const filepath = path.join(config.outputDir, filename);
      await fs.writeFile(filepath, astroContent, 'utf8');

      scraped++;
      console.log(`  [${scraped}/${totalPosts}] Saved: ${filename}`);

      // Small delay between requests
      await page.waitForTimeout(1000);

    } catch (error) {
      errors++;
      console.error(`  [ERROR] Failed to scrape ${url}: ${error.message}`);
    }
  }

  await browser.close();

  console.log(`\n=== Scraping Complete ===`);
  console.log(`Successfully scraped: ${scraped}/${totalPosts}`);
  console.log(`Errors: ${errors}`);
  console.log(`Files saved to: ${config.outputDir}\n`);
}

// Run
scrapeBlog().catch(console.error);

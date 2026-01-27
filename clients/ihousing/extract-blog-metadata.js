import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const rootDir = 'C:/Users/walte/ing heng credit/ing-heng-credit-seo/clients/ihousing/website/src/pages';
const languages = ['en', 'ms', 'zh'];
const manifestPath = 'C:/Users/walte/ing heng credit/ing-heng-credit-seo/clients/ihousing/website/public/SLUG_MANIFEST.json';

// Read existing manifest
const existingManifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));

// Function to extract metadata from blog file
function extractBlogMetadata(filePath, lang) {
  const content = readFileSync(filePath, 'utf-8');
  const dirName = filePath.split(/[\\/]/).slice(-2)[0];

  // Extract title
  const titleMatch = content.match(/const title\s*=\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : '';

  // Extract description
  const descMatch = content.match(/const description\s*=\s*["']([^"']+)["']/);
  const description = descMatch ? descMatch[1] : '';

  // Extract date
  const dateMatch = content.match(/const date\s*=\s*["']([^"']+)["']/);
  const date = dateMatch ? dateMatch[1] : '2026-01-25';

  // Extract category
  const categoryMatch = content.match(/const category\s*=\s*["']([^"']+)["']/);
  const category = categoryMatch ? categoryMatch[1] : 'blog';

  // Extract language
  const langMatch = content.match(/const language\s*=\s*["']([^"']+)["']/);
  const language = langMatch ? langMatch[1] : lang;

  return {
    slug: dirName,
    title,
    category,
    publishedAt: date,
    updatedAt: '2026-01-25'
  };
}

// Function to scan blog directories
function scanBlogs() {
  const result = { en: [], ms: [], zh: [] };

  for (const lang of languages) {
    const blogPath = join(rootDir, lang, 'blog');
    try {
      const entries = readdirSync(blogPath, { withFileTypes: true });
      const blogs = [];

      for (const entry of entries) {
        if (entry.isDirectory()) {
          const indexPath = join(blogPath, entry.name, 'index.astro');
          try {
            const metadata = extractBlogMetadata(indexPath, lang);
            blogs.push(metadata);
          } catch (err) {
            console.error(`Error reading ${indexPath}:`, err.message);
          }
        }
      }

      // Sort by slug
      blogs.sort((a, b) => a.slug.localeCompare(b.slug));
      result[lang] = blogs;
    } catch (err) {
      console.error(`Error scanning ${blogPath}:`, err.message);
    }
  }

  return result;
}

// Scan and collect all blogs
console.log('Scanning blog files...');
const newBlogs = scanBlogs();

// Create set of existing slugs for deduplication
const existingSlugs = {
  en: new Set(existingManifest.blogs.en.map(b => b.slug)),
  ms: new Set(existingManifest.blogs.ms.map(b => b.slug)),
  zh: new Set(existingManifest.blogs.zh.map(b => b.slug))
};

// Merge existing with new (keeping existing entries, adding new ones)
const mergedBlogs = { en: [], ms: [], zh: [] };

for (const lang of languages) {
  // Keep existing entries
  mergedBlogs[lang] = [...existingManifest.blogs[lang]];

  // Add new entries not in existing
  for (const blog of newBlogs[lang]) {
    if (!existingSlugs[lang].has(blog.slug)) {
      mergedBlogs[lang].push(blog);
    }
  }

  // Sort by slug
  mergedBlogs[lang].sort((a, b) => a.slug.localeCompare(b.slug));
}

// Update manifest
const updatedManifest = {
  ...existingManifest,
  lastUpdated: '2026-01-25T00:00:00.000Z',
  blogs: mergedBlogs
};

// Write updated manifest
writeFileSync(manifestPath, JSON.stringify(updatedManifest, null, 2), 'utf-8');

// Print summary
console.log('\n=== BLOG METADATA EXTRACTION COMPLETE ===');
console.log(`Total blogs extracted:`);
console.log(`  EN: ${newBlogs.en.length} files`);
console.log(`  MS: ${newBlogs.ms.length} files`);
console.log(`  ZH: ${newBlogs.zh.length} files`);
console.log(`  TOTAL: ${newBlogs.en.length + newBlogs.ms.length + newBlogs.zh.length} files`);

console.log(`\nManifest totals after merge:`);
console.log(`  EN: ${mergedBlogs.en.length} entries`);
console.log(`  MS: ${mergedBlogs.ms.length} entries`);
console.log(`  ZH: ${mergedBlogs.zh.length} entries`);
console.log(`  TOTAL: ${mergedBlogs.en.length + mergedBlogs.ms.length + mergedBlogs.zh.length} entries`);

console.log(`\nNew entries added:`);
console.log(`  EN: ${mergedBlogs.en.length - existingManifest.blogs.en.length} new`);
console.log(`  MS: ${mergedBlogs.ms.length - existingManifest.blogs.ms.length} new`);
console.log(`  ZH: ${mergedBlogs.zh.length - existingManifest.blogs.zh.length} new`);

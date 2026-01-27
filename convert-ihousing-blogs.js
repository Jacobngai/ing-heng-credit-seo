/**
 * Convert iHousing blog posts from old Layout format to new BlogPost format
 *
 * Old format: Uses Layout component with HTML embedded in template
 * New format: Uses BlogPost layout component with content as prop
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_DIR = path.join(__dirname, 'clients', 'ihousing', 'website', 'src', 'pages');
const LANGUAGES = ['en', 'ms', 'zh'];
const SKIP_SLUGS = ['flat-fee-airbnb-management-melaka']; // Already converted

// Statistics
const stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  errorsList: []
};

/**
 * Extract content from old format blog post
 */
function extractContentFromOldFormat(content) {
  // Find the content section
  const contentMatch = content.match(/<section id="content"[^>]*class="blog-content">([\s\S]*?)<\/section>/);
  if (!contentMatch) {
    throw new Error('Could not find content section');
  }

  return contentMatch[1].trim();
}

/**
 * Extract frontmatter variables
 */
function extractFrontmatter(content) {
  const frontmatter = {};

  // Extract title
  const titleMatch = content.match(/const title = "([^"]+)"/);
  if (titleMatch) frontmatter.title = titleMatch[1];

  // Extract description
  const descMatch = content.match(/const description = "([^"]+)"/);
  if (descMatch) frontmatter.description = descMatch[1];

  // Extract image
  const imageMatch = content.match(/const image = "([^"]+)"/);
  if (imageMatch) frontmatter.image = imageMatch[1];

  // Extract slug
  const slugMatch = content.match(/const slug = "([^"]+)"/);
  if (slugMatch) frontmatter.slug = slugMatch[1];

  // Extract date
  const dateMatch = content.match(/const date = "([^"]+)"/);
  if (dateMatch) frontmatter.date = dateMatch[1];

  // Extract category
  const categoryMatch = content.match(/const category = "([^"]+)"/);
  if (categoryMatch) frontmatter.category = categoryMatch[1];

  // Extract language
  const languageMatch = content.match(/const language = "([^"]+)"/);
  if (languageMatch) frontmatter.language = languageMatch[1];

  return frontmatter;
}

/**
 * Generate new format blog post
 */
function generateNewFormat(frontmatter, htmlContent) {
  const { title, description, image, date, category, language } = frontmatter;

  return `---
import BlogPost from '../../../../layouts/BlogPost.astro';

const title = "${title}";
const description = "${description}";
const image = "${image || ''}";
const date = "${date}";
const category = "${category}";
const language = "${language}";

// Content as HTML directly - simpler and more reliable
const content = \`
${htmlContent}
\`;
---
<BlogPost
  title={title}
  description={description}
  image={image}
  date={date}
  category={category}
  language={language}
  content={content}
/>
`;
}

/**
 * Check if file is in old format
 */
function isOldFormat(content) {
  return content.includes("import Layout from '../../../../layouts/Layout.astro';") &&
         content.includes('<Layout title={title}');
}

/**
 * Check if file is already in new format
 */
function isNewFormat(content) {
  return content.includes("import BlogPost from '../../../../layouts/BlogPost.astro';") ||
         content.includes('const content = `');
}

/**
 * Convert a single blog post file
 */
function convertBlogPost(filePath, slug) {
  try {
    console.log(`Processing: ${filePath}`);

    // Read file
    const content = fs.readFileSync(filePath, 'utf-8');

    // Check if already converted
    if (isNewFormat(content)) {
      console.log(`  ✓ Already in new format, skipping`);
      stats.skipped++;
      return;
    }

    // Check if it's old format
    if (!isOldFormat(content)) {
      console.log(`  ⚠ Unknown format, skipping`);
      stats.skipped++;
      return;
    }

    // Extract frontmatter
    const frontmatter = extractFrontmatter(content);

    // Extract HTML content
    const htmlContent = extractContentFromOldFormat(content);

    // Generate new format
    const newContent = generateNewFormat(frontmatter, htmlContent);

    // Write back to file
    fs.writeFileSync(filePath, newContent, 'utf-8');

    console.log(`  ✓ Converted successfully`);
    stats.converted++;

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    stats.errors++;
    stats.errorsList.push({ filePath, error: error.message });
  }
}

/**
 * Get all blog post directories for a language
 */
function getBlogPostDirs(lang) {
  const blogDir = path.join(BASE_DIR, lang, 'blog');

  if (!fs.existsSync(blogDir)) {
    console.log(`No blog directory for language: ${lang}`);
    return [];
  }

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name => !SKIP_SLUGS.includes(name));
}

/**
 * Process all blog posts for a language
 */
function processLanguage(lang) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Processing ${lang.toUpperCase()} blog posts`);
  console.log('='.repeat(60));

  const slugs = getBlogPostDirs(lang);
  console.log(`Found ${slugs.length} blog post directories`);

  slugs.forEach(slug => {
    const filePath = path.join(BASE_DIR, lang, 'blog', slug, 'index.astro');
    if (fs.existsSync(filePath)) {
      stats.total++;
      convertBlogPost(filePath, slug);
    } else {
      console.log(`  ⚠ File not found: ${filePath}`);
    }
  });
}

/**
 * Main execution
 */
function main() {
  console.log('iHousing Blog Post Converter');
  console.log('============================\n');
  console.log(`Base directory: ${BASE_DIR}`);
  console.log(`Languages: ${LANGUAGES.join(', ')}`);
  console.log(`Skipping: ${SKIP_SLUGS.join(', ')}`);

  // Process each language
  LANGUAGES.forEach(processLanguage);

  // Print summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('CONVERSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total files processed: ${stats.total}`);
  console.log(`Converted: ${stats.converted}`);
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);

  if (stats.errorsList.length > 0) {
    console.log('\nErrors:');
    stats.errorsList.forEach(({ filePath, error }) => {
      console.log(`  - ${filePath}: ${error}`);
    });
  }

  console.log('\n✓ Conversion complete!');
}

// Run
main();

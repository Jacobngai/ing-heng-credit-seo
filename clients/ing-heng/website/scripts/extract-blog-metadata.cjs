/**
 * Extract blog metadata from all .astro files
 * and generate/update blog-posts.ts data file
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogDir = path.join(__dirname, '../src/pages');

// Categories mapping based on blog content
const categoryMap = {
  'equipment-financing': 'Equipment Financing',
  'government-tenders': 'Government Tenders',
  'crane-financing': 'Crane Financing',
  'fleet-financing': 'Fleet Financing',
  'technology-equipment': 'Technology Equipment',
  'tax-benefits': 'Tax Benefits',
};

const defaultCategory = 'Equipment Financing';

function extractSlugFromFilePath(filePath) {
  const filename = path.basename(filePath, '.astro');
  // Handle paths like '../pages/en/blog/file.astro'
  const parts = filePath.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.replace('.astro', '');
}

function extractFrontmatter(content) {
  const result = matter(content);
  return result.data;
}

function calculateReadTime(content) {
  // Simple heuristic: ~200 words per minute
  const wordCount = content.split(/\s+/).length;
  return Math.max(3, Math.ceil(wordCount / 200));
}

function extractCategory(title, slug) {
  // Check if slug matches known categories
  for (const [key, category] of Object.entries(categoryMap)) {
    if (slug.includes(key)) return category;
  }

  // Check title for keywords
  const titleLower = title.toLowerCase();
  if (titleLower.includes('tax') || titleLower.includes('compliance')) return 'Tax & Compliance';
  if (titleLower.includes('maintenance') || titleLower.includes('repair')) return 'Equipment Maintenance';
  if (titleLower.includes('growth') || titleLower.includes('expansion')) return 'Business Growth';
  if (titleLower.includes('government') || titleLower.includes('tender')) return 'Government Tenders';
  if (titleLower.includes('news') || titleLower.includes('trends')) return 'Industry News & Trends';
  if (titleLower.includes('contractor')) return 'Contractor Guides';

  return defaultCategory;
}

function processBlogDirectory(lang) {
  const dirPath = path.join(blogDir, lang, 'blog');

  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory not found: ${dirPath}`);
    return [];
  }

  const files = fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.astro') && f !== 'index.astro')
    .filter(f => !f.startsWith('category/') && !f.startsWith('topic/')); // Skip category/topic folders

  console.log(`Processing ${lang.toUpperCase()} blog: ${files.length} files found`);

  const posts = [];

  for (const file of files) {
    try {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const frontmatter = extractFrontmatter(content);

      const slug = extractSlugFromFilePath(file);

      // Extract publishDate
      const publishDate = frontmatter.publishDate || frontmatter.date || new Date().toISOString().split('T')[0];

      const category = extractCategory(frontmatter.title, slug);

      // Generate excerpt from content (first paragraph or description)
      let excerpt = frontmatter.description || '';
      if (!excerpt) {
        // Extract first paragraph from content
        const contentMatch = content.match(/---\n[\s\S]*?\n---\n([\s\S]*?)(?=\n##|$)/);
        if (contentMatch) {
          const firstParagraph = contentMatch[1].trim().split('\n\n')[0].replace(/^#\s+/, '').trim();
          excerpt = firstParagraph.substring(0, 150) + '...';
        }
      }

      // Calculate read time
      const readTime = calculateReadTime(content);

      posts.push({
        slug,
        title: frontmatter.title || 'Untitled',
        excerpt: excerpt || 'Blog post about ' + frontmatter.title,
        date: publishDate,
        author: frontmatter.author || 'Ing Heng Credit Team',
        readTime,
        category,
        image: '/images/blog/default.jpg', // Default image
        keywords: frontmatter.keywords || []
      });

    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  return posts;
}

function generateBlogPostsFile() {
  console.log('Extracting blog metadata from .astro files...\n');

  // Process all three languages
  const enPosts = processBlogDirectory('en');
  const msPosts = processBlogDirectory('ms');
  const zhPosts = processBlogDirectory('zh');

  const allPosts = [...enPosts, ...msPosts, ...zhPosts];

  console.log(`\nTotal posts extracted: ${allPosts.length}`);
  console.log(`  EN: ${enPosts.length}`);
  console.log(`  MS: ${msPosts.length}`);
  console.log(`  ZH: ${zhPosts.length}`);

  // Sort by date (newest first)
  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Generate TypeScript file
  const output = `/**
 * Blog posts metadata data file
 * Auto-generated from .astro blog post files
 * Generated: ${new Date().toISOString()}
 * Total posts: ${allPosts.length}
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  category: string;
  image: string;
  keywords?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
${allPosts.map(post => '  ' + JSON.stringify(post)).join(',\n')}
];

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get paginated blog posts
 */
export function getPaginatedBlogPosts(page: number = 1, perPage: number = 9) {
  const allPosts = getAllBlogPosts();
  const totalPages = Math.ceil(allPosts.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: page,
    totalPosts: allPosts.length,
  };
}

/**
 * Get featured posts (first N posts)
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter(post =>
    post.category.toLowerCase().includes(category.toLowerCase()) ||
    category.toLowerCase().includes(post.category.toLowerCase().split(' ')[0])
  );
}

/**
 * Get blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

/**
 * Get related posts (same category, excluding current)
 */
export function getRelatedPosts(currentSlug: string, category: string, limit: number = 4): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

/**
 * Get popular posts (first N posts as proxy)
 */
export function getPopularPosts(limit: number = 4): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

/**
 * Get categories with counts
 */
export function getBlogCategories(): { name: string; slug: string; count: number }[] {
  const categoryMap = new Map<string, number>();

  for (const post of getAllBlogPosts()) {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  }

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  }));
}
`;

  // Write to file
  const outputPath = path.join(__dirname, '../src/data/blog-posts.ts');

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, output, 'utf8');

  console.log(`\n✅ Blog metadata updated: ${outputPath}`);
  console.log(`   Posts included: ${allPosts.length}`);
  console.log(`   Categories: ${new Set(allPosts.map(p => p.category)).size}`);

  // Show category breakdown
  const categoryCounts = {};
  allPosts.forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });

  console.log('\nCategory breakdown:');
  Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => console.log(`  ${cat}: ${count} posts`));
}

// Run the function
generateBlogPostsFile();

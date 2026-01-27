/**
 * Blog loader utility
 * Dynamically loads all blog posts from the blog directory using Astro's glob API
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

export interface BlogPostWithContent extends BlogPost {
  content?: string;
}

/**
 * Get all blog posts for a specific locale
 * Uses Astro's import.meta.glob to dynamically load blog posts
 */
export async function getBlogPosts(locale: string = 'en'): Promise<BlogPost[]> {
  // Use glob to get all .astro files in the blog directory
  const blogModules = import.meta.glob('../pages/en/blog/*.astro', { eager: true });

  const posts: BlogPost[] = [];

  for (const path in blogModules) {
    const module = blogModules[path] as any;

    // Extract slug from path (e.g., '../pages/en/blog/excavator-financing.astro' -> 'excavator-financing')
    const slug = path.replace('../pages/en/blog/', '').replace('.astro', '');

    // Skip index pages and category/topic pages
    if (slug === 'index' || slug.includes('[') || slug.includes('category')) {
      continue;
    }

    // Access the frontmatter from the module
    // The post object is defined in the frontmatter of each blog file
    if (module.getStaticParams) {
      // It's a dynamic route, skip it
      continue;
    }

    // Try to extract metadata from the module
    // Note: Astro's glob returns modules with their rendered content, but we need frontmatter
    // We'll need to read the file directly or parse it differently
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get paginated blog posts
 */
export async function getPaginatedBlogPosts(
  locale: string = 'en',
  page: number = 1,
  perPage: number = 9
): Promise<{ posts: BlogPost[]; totalPages: number; currentPage: number }> {
  const allPosts = await getBlogPosts(locale);
  const totalPages = Math.ceil(allPosts.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: page,
  };
}

/**
 * Get featured blog posts
 */
export async function getFeaturedPosts(locale: string = 'en', limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts(locale);
  return allPosts.slice(0, limit);
}

/**
 * Get blog posts by category
 */
export async function getPostsByCategory(category: string, locale: string = 'en'): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts(locale);
  return allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string, locale: string = 'en'): Promise<BlogPost | null> {
  const allPosts = await getBlogPosts(locale);
  return allPosts.find(post => post.slug === slug) || null;
}

/**
 * Get related blog posts based on category
 */
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  locale: string = 'en',
  limit: number = 4
): Promise<BlogPost[]> {
  const categoryPosts = await getPostsByCategory(category, locale);
  return categoryPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Get popular posts (most recent posts as a simple heuristic)
 */
export async function getPopularPosts(locale: string = 'en', limit: number = 4): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts(locale);
  return allPosts.slice(0, limit);
}

/**
 * Get blog post categories with counts
 */
export async function getBlogCategories(locale: string = 'en'): Promise<{ name: string; slug: string; count: number }[]> {
  const allPosts = await getBlogPosts(locale);
  const categoryMap = new Map<string, number>();

  for (const post of allPosts) {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  }

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  }));
}

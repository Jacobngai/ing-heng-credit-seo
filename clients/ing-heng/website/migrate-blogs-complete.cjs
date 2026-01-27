const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = 'C:/Users/walte/ing heng credit/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/blog';
const destDir = 'C:/Users/walte/ing heng credit/ing-heng-credit-seo/clients/ing-heng/website restore/website/src/content/blogs/en';

// Category mapping to match the schema
const categoryMap = {
  'Business Growth': 'Business Financing',
  'Forklift Financing': 'Logistics Equipment',
  'Warehouse Equipment': 'Logistics Equipment',
  'Excavator Financing': 'Construction Equipment',
  'Lorry Financing': 'Logistics Equipment',
  'Prime Mover Financing': 'Logistics Equipment',
  'Equipment Financing': 'Equipment Financing',
  'Construction': 'Construction Equipment',
  'Logistics': 'Logistics Equipment',
  'Business Tips': 'Business Tips',
  'Financing Guides': 'Financing Guides',
  'Industry News': 'Industry News',
  'Case Studies': 'Case Studies',
  'Equipment': 'Equipment Financing',
  'SME Financing': 'Business Financing',
  'Tax & Compliance': 'Equipment Financing',
  'Fuel Cost': 'Equipment Financing',
  'Preventive Maintenance': 'Equipment Financing',
  'Equipment Financing Tips': 'Financing Guides',
};

// Get all .astro files (excluding index, subdirectories)
const sourcePath = path.resolve(__dirname, sourceDir);
const files = fs.readdirSync(sourcePath).filter(f =>
  f.endsWith('.astro') && f !== 'index.astro' && !fs.statSync(path.join(sourcePath, f)).isDirectory()
);

console.log(`Found ${files.length} blog posts to migrate`);

let migratedCount = 0;
let skippedCount = 0;

// Ensure destination directory exists
const destPath = path.resolve(__dirname, destDir);
if (!fs.existsSync(destPath)) {
  fs.mkdirSync(destPath, { recursive: true });
}

files.forEach(file => {
  const content = fs.readFileSync(path.join(sourcePath, file), 'utf8');

  try {
    let title, slug, excerpt, date, author, readTime, category, image, keywords = [];

    // Try Structure 1: const post = {...}
    const postMatch = content.match(/const post = \{([^}]+)\}/s);
    if (postMatch) {
      const postStr = postMatch[1];
      title = postMatchStr(postStr, 'title');
      slug = postMatchStr(postStr, 'slug');
      excerpt = postMatchStr(postStr, 'excerpt');
      date = postMatchStr(postStr, 'date');
      author = postMatchStr(postStr, 'author');
      readTime = postMatchInt(postStr, 'readTime');
      category = postMatchStr(postStr, 'category');
      image = postMatchStr(postStr, 'image');

      const keywordsMatch = content.match(/const keywords = (\[[^\]]+\])/);
      if (keywordsMatch) {
        try { keywords = eval(keywordsMatch[1]); } catch (e) {}
      }
    }

    // Try Structure 2: BaseLayout props and articleSchema
    if (!title) {
      const baseLayoutMatch = content.match(/<BaseLayout\s+title="([^"]+)"/);
      if (baseLayoutMatch) {
        title = baseLayoutMatch[1].replace(/\s*\|\s*Ing Heng Credit.*$/, '').trim();
      }

      const descriptionMatch = content.match(/description="([^"]+)"/);
      if (descriptionMatch) {
        excerpt = descriptionMatch[1];
      }

      const keywordsMatch = content.match(/keywords=\[\s*\(([\s\S]*?)\)\s*\]/);
      if (keywordsMatch) {
        const kwStr = keywordsMatch[1];
        keywords = kwStr.split(',').map(k => k.trim().replace(/^['"]|['"]$/g, '')).filter(k => k);
      }

      const articleDateMatch = content.match(/const articleDate = '([^']+)'/);
      if (articleDateMatch) {
        date = articleDateMatch[1];
      }

      const articleSchemaMatch = content.match(/"headline":\s*"([^"]+)"/);
      if (articleSchemaMatch) {
        title = articleSchemaMatch[1];
      }

      const categoryCommentMatch = content.match(/\*\s*Category:\s*([^\n*]+)/);
      if (categoryCommentMatch) {
        category = categoryCommentMatch[1].trim();
      }

      // Get slug from filename if not in metadata
      slug = file.replace('.astro', '');
    }

    if (!title || !slug) {
      console.log(`Skipping ${file}: Missing title or slug`);
      skippedCount++;
      return;
    }

    // Map category to schema value
    category = categoryMap[category] || 'Equipment Financing';

    // Set defaults
    author = author || 'Ing Heng Credit Team';
    date = date || '2025-01-23';
    readTime = readTime || 6;
    excerpt = excerpt || title;
    image = image || '/images/blog/default.jpg';

    // Extract article content - find the prose div and capture until article close
    const proseMatch = content.match(/<div class="prose[^"]*"[^>]*>([\s\S]*?)<\/article>/);
    if (!proseMatch) {
      console.log(`Skipping ${file}: No prose content found`);
      skippedCount++;
      return;
    }

    let articleContent = proseMatch[1];

    // Convert HTML to Markdown
    articleContent = convertHtmlToMarkdown(articleContent);

    // Create markdown file with frontmatter
    const outputFile = path.join(destPath, `${slug}.md`);

    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${excerpt.replace(/"/g, '\\"')}"
author: "${author}"
publishDate: ${date}
category: ${category}
tags:
${keywords.map(k => `  - ${k}`).join('\n')}
locale: en
featured: false
readingTime: ${readTime}
keywords:
${keywords.map(k => `  - ${k}`).join('\n')}
ogImage: ${image}
---

${articleContent}
`;

    // Write the file
    fs.writeFileSync(outputFile, frontmatter);
    migratedCount++;
    console.log(`✓ Migrated: ${file} -> ${slug}.md`);

  } catch (error) {
    console.log(`✗ Error migrating ${file}: ${error.message}`);
    skippedCount++;
  }
});

console.log(`\nMigration complete!`);
console.log(`Migrated: ${migratedCount} files`);
console.log(`Skipped: ${skippedCount} files`);

function postMatchStr(str, key) {
  const match = str.match(new RegExp(`${key}:\\s*['"`]([^'"`]+)['"`]'));
  return match ? match[1] : null;
}

function postMatchInt(str, key) {
  const match = str.match(new RegExp(`${key}:\\s*(\\d+)`));
  return match ? parseInt(match[1]) : null;
}

// HTML to Markdown conversion helper function
function convertHtmlToMarkdown(html) {
  let md = html;

  // Remove script tags
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<script[^>]*>[\s\S]*?(?=<script|<\/article)/gi, '');

  // Headers
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1');
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n\n## $1\n\n');
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n\n### $1\n\n');
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n\n#### $1\n\n');

  // Bold
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');

  // Italic
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');

  // Line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // Paragraphs
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gis, '\n\n$1\n\n');

  // Unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map(item => {
      const text = item.replace(/<\/?li[^>]*>/gi, '').trim();
      return `- ${text}`;
    }).join('\n') + '\n\n';
  });

  // Ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map((item, i) => {
      const text = item.replace(/<\/?li[^>]*>/gi, '').trim();
      return `${i + 1}. ${text}`;
    }).join('\n') + '\n\n';
  });

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, '\n\n> $1\n\n');

  // Code blocks
  md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '\n\n```\n$1\n```\n\n');

  // Div cleanup
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1');

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Clean up whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

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
    // Extract post metadata
    const postMatch = content.match(/const post = \{([^}]+)\}/s);
    if (!postMatch) {
      console.log(`Skipping ${file}: No post metadata found`);
      skippedCount++;
      return;
    }

    // Parse the post object
    const postStr = postMatch[1];
    const titleMatch = postStr.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const slugMatch = postStr.match(/slug:\s*['"`]([^'"`]+)['"`]/);
    const excerptMatch = postStr.match(/excerpt:\s*['"`]([^'"`]+)['"`]/);
    const dateMatch = postStr.match(/date:\s*['"`]([^'"`]+)['"`]/);
    const authorMatch = postStr.match(/author:\s*['"`]([^'"`]+)['"`]/);
    const readTimeMatch = postStr.match(/readTime:\s*(\d+)/);
    const categoryMatch = postStr.match(/category:\s*['"`]([^'"`]+)['"`]/);
    const imageMatch = postStr.match(/image:\s*['"`]([^'"`]+)['"`]/);

    // Extract keywords array
    const keywordsMatch = content.match(/const keywords = (\[[^\]]+\])/);
    let keywords = [];
    if (keywordsMatch) {
      try {
        keywords = eval(keywordsMatch[1]);
      } catch (e) {
        keywords = [];
      }
    }

    // Map category to schema value
    let category = categoryMatch ? categoryMatch[1] : 'Equipment Financing';
    category = categoryMap[category] || 'Equipment Financing';

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
    const slug = slugMatch ? slugMatch[1] : file.replace('.astro', '');
    const outputFile = path.join(destPath, `${slug}.md`);

    const frontmatter = `---
title: "${titleMatch ? titleMatch[1].replace(/"/g, '\\"') : ''}"
description: "${excerptMatch ? excerptMatch[1].replace(/"/g, '\\"') : ''}"
author: "${authorMatch ? authorMatch[1] : 'Ing Heng Credit Team'}"
publishDate: ${dateMatch ? dateMatch[1] : '2025-01-23'}
category: ${category}
tags:
${keywords.map(k => `  - ${k}`).join('\n')}
locale: en
featured: false
readingTime: ${readTimeMatch ? readTimeMatch[1] : 5}
keywords:
${keywords.map(k => `  - ${k}`).join('\n')}
ogImage: ${imageMatch ? imageMatch[1] : '/images/blog/default.jpg'}
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

// HTML to Markdown conversion helper function
function convertHtmlToMarkdown(html) {
  let md = html;

  // Remove script tags
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

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

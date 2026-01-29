const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('clients/ing-heng/website/src/pages/en/blog').filter(f => f.endsWith('.astro'));
files.sort();

console.log('=== Blog Migration ===');
console.log('Found ' + files.length + ' files');
console.log('');

const sourceDir = path.join(__dirname, 'clients', 'ing-heng', 'website', 'src', 'pages', 'en', 'blog');
const destDir = path.join(__dirname, 'clients', 'ing-heng', 'website restore', 'website', 'src', 'content', 'blogs', 'en');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function htmlToMarkdown(html) {
  let md = html;
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n');
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '\n\n> $1\n\n');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, content) => {
    const trimmed = content.trim();
    if (trimmed === '') return '\n';
    return '\n' + trimmed + '\n\n';
  });
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return '';
    return '\n' + items.map(item => {
      const text = item.replace(/<\/?li[^>]*>/gi, '').replace(/<strong[^>]*>/gi, '**').replace(/<\/strong>/gi, '**').trim();
      return '- ' + text;
    }).join('\n') + '\n\n';
  });
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
    let counter = 1;
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return '';
    return '\n' + items.map(item => {
      const text = item.replace(/<\/?li[^>]*>/gi, '').replace(/<strong[^>]*>/gi, '**').replace(/<\/strong>/gi, '**').trim();
      return counter++ + '. ' + text;
    }).join('\n') + '\n\n';
  });
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.replace(/^\s+|\s+$/g, '');
  return md;
}

function extractMetadata(content) {
  const metadata = {
    title: '',
    description: '',
    author: 'Ing Heng Credit Team',
    publishDate: '',
    category: '',
    tags: [],
    locale: 'en',
    featured: false,
    readingTime: 5,
    keywords: [],
    ogImage: ''
  };

  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) metadata.title = titleMatch[1];

  const slugMatch = content.match(/slug:\s*['"`]([^'"`]+)['"`]/);
  if (slugMatch) metadata.slug = slugMatch[1];

  const excerptMatch = content.match(/excerpt:\s*['"`]([^'"`]+)['"`]/s);
  if (excerptMatch) metadata.description = excerptMatch[1];

  const dateMatch = content.match(/date:\s*['"`]([^'"`]+)['"`]/);
  if (dateMatch) metadata.publishDate = dateMatch[1];

  const authorMatch = content.match(/author:\s*['"`]([^'"`]+)['"`]/);
  if (authorMatch) metadata.author = authorMatch[1];

  const readTimeMatch = content.match(/readTime:\s*(\d+)/);
  if (readTimeMatch) metadata.readingTime = parseInt(readTimeMatch[1]);

  const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)['"`]/);
  if (categoryMatch) metadata.category = categoryMatch[1];

  const imageMatch = content.match(/image:\s*['"`]([^'"`]+)['"`]/);
  if (imageMatch) metadata.ogImage = imageMatch[1];

  const keywordsMatch = content.match(/const keywords = \[([\s\S]*?)\]/);
  if (keywordsMatch) {
    const keywordsContent = keywordsMatch[1];
    const keywordMatches = keywordsContent.match(/['"`]([^'"`]+)['"`]/g);
    if (keywordMatches) {
      metadata.keywords = keywordMatches.map(k => k.replace(/['"`]/g, ''));
      metadata.tags = [...metadata.keywords];
      if (metadata.category && !metadata.tags.includes(metadata.category)) {
        metadata.tags.push(metadata.category);
      }
    }
  }

  return metadata;
}

function extractArticleBody(content) {
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  if (!articleMatch) return '';

  let articleContent = articleMatch[1];
  articleContent = articleContent.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
  articleContent = articleContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');

  const proseMatch = articleContent.match(/<div[^>]*class="[^"]*prose[^"]*"[^>]*>([\s\S]*?)<\/div>/);
  if (proseMatch) {
    articleContent = proseMatch[1];
  }

  return articleContent;
}

let successCount = 0;
let errorCount = 0;
const errors = [];

for (let i = 0; i < files.length; i++) {
  const filename = files[i];
  console.log(`[${i+1}/${files.length}] ${filename}`);

  try {
    const sourcePath = path.join(sourceDir, filename);
    const content = fs.readFileSync(sourcePath, 'utf8');
    const metadata = extractMetadata(content);
    const articleHtml = extractArticleBody(content);
    const markdownBody = htmlToMarkdown(articleHtml);

    const frontmatter = `---
title: "${metadata.title.replace(/"/g, '\\"')}"
description: "${metadata.description.replace(/"/g, '\\"')}"
author: "${metadata.author}"
publishDate: ${metadata.publishDate}
category: ${metadata.category}
tags:
${metadata.tags.map(t => `  - ${t}`).join('\n')}
locale: ${metadata.locale}
featured: ${metadata.featured}
readingTime: ${metadata.readingTime}
keywords:
${metadata.keywords.map(k => `  - ${k}`).join('\n')}
ogImage: ${metadata.ogImage}
---
# ${metadata.title}

${markdownBody}`;

    const destFilename = `${metadata.slug || filename.replace('.astro', '')}.md`;
    const destPath = path.join(destDir, destFilename);

    fs.writeFileSync(destPath, frontmatter, 'utf8');
    console.log(`  -> ${destFilename}`);
    successCount++;
  } catch (error) {
    console.error(`  ERROR: ${error.message}`);
    errorCount++;
    errors.push({ file: filename, error: error.message });
  }
}

console.log('');
console.log('=== Summary ===');
console.log(`Success: ${successCount}`);
console.log(`Errors: ${errorCount}`);

if (errors.length > 0) {
  console.log('');
  console.log('Errors:');
  errors.forEach(e => console.log(`  - ${e.file}: ${e.error}`));
}

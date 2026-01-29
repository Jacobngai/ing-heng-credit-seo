const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = 'C:/Users/walte/ing heng credit/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/blog';
const destDir = 'C:/Users/walte/ing heng credit/ing-heng-credit-seo/clients/ing-heng/website restore/website/src/content/blogs/en';

// Category mapping
const categoryMap = {
  'Business Growth': 'Business Financing',
  'Forklift Financing': 'Logistics Equipment',
  'Prime Mover Financing': 'Logistics Equipment',
  'Excavator Financing': 'Construction Equipment',
  'Lorry Financing': 'Logistics Equipment',
  'Equipment Financing': 'Equipment Financing',
  'Construction': 'Construction Equipment',
  'Logistics': 'Logistics Equipment',
  'Business Tips': 'Business Tips',
  'Financing Guides': 'Financing Guides',
  'Industry News': 'Industry News',
  'Case Studies': 'Case Studies',
};

const sourcePath = path.resolve(__dirname, sourceDir);
const destPath = path.resolve(__dirname, destDir);
const files = fs.readdirSync(sourcePath).filter(f =>
  f.endsWith('.astro') && f !== 'index.astro' && !fs.statSync(path.join(sourcePath, f)).isDirectory()
);

console.log('Found ' + files.length + ' blog posts to migrate');

let migratedCount = 0;
let skippedCount = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(sourcePath, file), 'utf8');

  try {
    let title, slug, excerpt, date, author, readTime, category, image, keywords = [];

    // Try Structure 1: const post = {...}
    const postMatch = content.match(/const post = \{[^}]+\}/s);
    if (postMatch) {
      const postStr = postMatch[0];

      const titleMatch = postStr.match(/title:\s*['"`]([^'"`]+)['"`]/);
      if (titleMatch) title = titleMatch[1];

      const slugMatch = postStr.match(/slug:\s*['"`]([^'"`]+)['"`]/);
      if (slugMatch) slug = slugMatch[1];

      const excerptMatch = postStr.match(/excerpt:\s*['"`]([^'"`]+)['"`]/);
      if (excerptMatch) excerpt = excerptMatch[1];

      const dateMatch = postStr.match(/date:\s*['"`]([^'"`]+)['"`]/);
      if (dateMatch) date = dateMatch[1];

      const authorMatch = postStr.match(/author:\s*['"`]([^'"`]+)['"`]/);
      if (authorMatch) author = authorMatch[1];

      const readTimeMatch = postStr.match(/readTime:\s*(\d+)/);
      if (readTimeMatch) readTime = parseInt(readTimeMatch[1]);

      const categoryMatch = postStr.match(/category:\s*['"`]([^'"`]+)['"`]/);
      if (categoryMatch) category = categoryMatch[1];

      const imageMatch = postStr.match(/image:\s*['"`]([^'"`]+)['"`]/);
      if (imageMatch) image = imageMatch[1];

      const keywordsArrayMatch = content.match(/const keywords = (\[[^\]]+\])/);
      if (keywordsArrayMatch) {
        try { keywords = eval(keywordsArrayMatch[1]); } catch (e) {}
      }
    }

    // Try Structure 2: BaseLayout props
    if (!title) {
      // Try meta.title pattern first
      const metaTitleMatch = content.match(/const meta = \{[^}]*title:\s*['"`]([^'"`]+)['"`]/);
      if (metaTitleMatch) {
        title = metaTitleMatch[1];
      }

      // Then try BaseLayout title
      const baseLayoutTitleMatch = content.match(/<BaseLayout\s+title="([^"]+)"/);
      if (baseLayoutTitleMatch && !title) {
        title = baseLayoutTitleMatch[1].replace(/\s*\|\s*Ing Heng Credit.*$/, '').trim();
      }

      const descMatch = content.match(/description="([^"]+)"/);
      if (descMatch) excerpt = descMatch[1];

      const keywordsMatch = content.match(/keywords=\[\s*\(([\s\S]*?)\)\s*\]/);
      if (keywordsMatch) {
        const kwStr = keywordsMatch[1];
        keywords = kwStr.split(',').map(k => k.trim().replace(/^['"]|['"]$/g, '')).filter(k => k);
      }

      const dateMatch = content.match(/const articleDate = '([^']+)'/);
      if (dateMatch) date = dateMatch[1];

      const headlineMatch = content.match(/"headline":\s*"([^"]+)"/);
      if (headlineMatch && title !== headlineMatch[1]) title = headlineMatch[1];

      const categoryCommentMatch = content.match(/\*\s*Category:\s*([^\n*]+)/);
      if (categoryCommentMatch) category = categoryCommentMatch[1].trim();

      slug = file.replace('.astro', '');
    }

    if (!title) {
      console.log('Skipping ' + file + ': No title found');
      skippedCount++;
      return;
    }

    // Map category
    category = categoryMap[category] || 'Equipment Financing';

    // Set defaults
    author = author || 'Ing Heng Credit Team';
    date = date || '2025-01-23';
    readTime = readTime || 6;
    excerpt = excerpt || title;
    image = image || '/images/blog/default.jpg';

    // Extract article content - try multiple structures
    let proseMatch = content.match(/<div class="prose[^"]*"[^>]*>([\s\S]*?)<\/article>/);
    if (!proseMatch) {
      // Try: <article class="prose prose-lg max-w-none">
      proseMatch = content.match(/<article class="[^"]*prose[^"]*"[^>]*>([\s\S]*?)<\/article>/);
    }
    if (!proseMatch) {
      // Try: <div class="lg:col-span-2 prose prose-lg max-w-none">
      proseMatch = content.match(/<div class="[^"]*prose[^"]*"[^>]*>([\s\S]*?)<\/article>/);
    }
    if (!proseMatch) {
      console.log('Skipping ' + file + ': No prose content found');
      skippedCount++;
      return;
    }

    let articleContent = proseMatch[1];
    articleContent = convertHtmlToMarkdown(articleContent);

    // Create markdown file
    const outputFile = path.join(destPath, slug + '.md');

    const frontmatter = '---\n' +
      'title: "' + title.replace(/"/g, '\\"') + '"\n' +
      'description: "' + excerpt.replace(/"/g, '\\"') + '"\n' +
      'author: "' + author + '"\n' +
      'publishDate: ' + date + '\n' +
      'category: ' + category + '\n' +
      'tags:\n' +
      keywords.map(k => '  - ' + k).join('\n') + '\n' +
      'locale: en\n' +
      'featured: false\n' +
      'readingTime: ' + readTime + '\n' +
      'keywords:\n' +
      keywords.map(k => '  - ' + k).join('\n') + '\n' +
      'ogImage: ' + image + '\n' +
      '---\n\n' +
      articleContent + '\n';

    fs.writeFileSync(outputFile, frontmatter);
    migratedCount++;
    console.log('✓ Migrated: ' + file + ' -> ' + slug + '.md');

  } catch (error) {
    console.log('✗ Error migrating ' + file + ': ' + error.message);
    skippedCount++;
  }
});

console.log('\nMigration complete!');
console.log('Migrated: ' + migratedCount + ' files');
console.log('Skipped: ' + skippedCount + ' files');

function convertHtmlToMarkdown(html) {
  let md = html;

  // Remove scripts
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

  // Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, function(match, content) {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map(function(item) {
      const text = item.replace(/<\/?li[^>]*>/gi, '').trim();
      return '- ' + text;
    }).join('\n') + '\n\n';
  });

  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, function(match, content) {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return '\n\n' + items.map(function(item, i) {
      const text = item.replace(/<\/?li[^>]*>/gi, '').trim();
      return (i + 1) + '. ' + text;
    }).join('\n') + '\n\n';
  });

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Clean up
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1');
  md = md.replace(/<[^>]+>/g, '');
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

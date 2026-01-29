const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_DIR = path.join(__dirname, 'clients/ihousing/content');
const TARGET_DIR = path.join(__dirname, 'clients/ihousing/website/src/pages');

// WhatsApp CTA templates by language
const WHATSAPP_CTA = {
  en: `<div class="bg-green-50 border-l-4 border-green-600 p-6 my-8">
  <h3 class="text-green-900 font-bold mb-2">Ready to Start Your Airbnb Journey?</h3>
  <p class="text-green-800 mb-4">Contact iHousing today for a free consultation about your Melaka property.</p>
  <a href="https://wa.me/60166996688?text=Hi%20iHousing,%20I'm%20interested%20in%20Airbnb%20management%20for%20my%20property" target="_blank" rel="noopener" class="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
    WhatsApp Us Now
  </a>
</div>`,
  ms: `<div class="bg-green-50 border-l-4 border-green-600 p-6 my-8">
  <h3 class="text-green-900 font-bold mb-2">Bersedia untuk Memulakan Perjalanan Airbnb Anda?</h3>
  <p class="text-green-800 mb-4">Hubungi iHousing hari ini untuk konsultasi percuma mengenai hartanah Melaka anda.</p>
  <a href="https://wa.me/60166996688?text=Hi%20iHousing,%20saya%20berminat%20dengan%20pengurusan%20Airbnb%20untuk%20hartanah%20saya" target="_blank" rel="noopener" class="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
    WhatsApp Kami Sekarang
  </a>
</div>`,
  zh: `<div class="bg-green-50 border-l-4 border-green-600 p-6 my-8">
  <h3 class="text-green-900 font-bold mb-2">准备开始您的民宿之旅？</h3>
  <p class="text-green-800 mb-4">立即联系 iHousing，获取关于您马六甲房产的免费咨询。</p>
  <a href="https://wa.me/60166996688?text=Hi%20iHousing,%20我对民宿管理很感兴趣" target="_blank" rel="noopener" class="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
    立即 WhatsApp 我们
  </a>
</div>`
};

// About iHousing footer by language
const ABOUT_FOOTER = {
  en: `<hr class="my-8">
<p class="text-sm text-gray-500 italic"><em>About iHousing:</em> We're Melaka's leading Airbnb property management company, specializing in turning vacant condos into profitable short-term rentals. We manage properties across 10+ condo developments in Melaka, delivering 60%+ average occupancy through our 5-platform listing strategy and in-house cleaning team.</p>`,
  ms: `<hr class="my-8">
<p class="text-sm text-gray-500 italic"><em>Tentang iHousing:</em> Kami adalah syarikat pengurusan hartanah Airbnb terkemuka di Melaka, pakar dalam menukar kondominium kosong menjadi sewa jangka pendek yang menguntungkan. Kami mengurus hartanah di 10+ pembangunan kondominium di Melaka, memberikan purata penghunian 60%+ melalui strategi penyenaraian 5-platform dan pasukan pembersihan dalaman kami.</p>`,
  zh: `<hr class="my-8">
<p class="text-sm text-gray-500 italic"><em>关于 iHousing：</em>我们是马六甲领先的民宿物业管理公司，专门将空置公寓转变为有利可图的短期租赁。我们管理马六甲10多个公寓开发项目的房产，通过5平台 listing 策略和内部清洁团队实现60%以上的平均入住率。</p>`
};

// Category label by language
const CATEGORY_LABELS = {
  en: {
    'problem-aware-empty': 'Problem Aware: Empty Condo',
    'investment-guide': 'Investment Guide',
    'comparison': 'Comparison',
    'management': 'Property Management',
    'renovation': 'Renovation Guide',
    'setup-guide': 'Setup Guide'
  },
  ms: {
    'problem-aware-empty': 'Masalah: Kondominium Kosong',
    'investment-guide': 'Panduan Pelaburan',
    'comparison': 'Perbandingan',
    'management': 'Pengurusan Hartanah',
    'renovation': 'Panduan Renovasi',
    'setup-guide': 'Panduan Persediaan'
  },
  zh: {
    'problem-aware-empty': '问题认知：空置公寓',
    'investment-guide': '投资指南',
    'comparison': '对比',
    'management': '物业管理',
    'renovation': '装修指南',
    'setup-guide': '设置指南'
  }
};

/**
 * Parse frontmatter from markdown
 */
function parseFrontmatter(content) {
  // Normalize line endings and handle different frontmatter formats
  const normalized = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Match frontmatter with flexible handling of whitespace
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = normalized.match(frontmatterRegex);

  if (!match) {
    return null;
  }

  const frontmatter = {};
  const lines = match[1].split('\n');
  let inMultiline = false;
  let multilineKey = '';
  let multilineValues = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Handle multiline arrays (like keywords, tags)
    if (trimmed.startsWith('- ') && inMultiline) {
      let value = trimmed.substring(2).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      multilineValues.push(value);
      continue;
    }

    // End multiline when we hit a new key
    if (inMultiline && trimmed.includes(':')) {
      frontmatter[multilineKey] = multilineValues;
      inMultiline = false;
      multilineValues = [];
    }

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmed.substring(0, colonIndex).trim();
      const valuePart = trimmed.substring(colonIndex + 1).trim();

      // Check if this might start a multiline array
      if (key === 'keywords' || key === 'tags') {
        inMultiline = true;
        multilineKey = key;
        if (valuePart) {
          let value = valuePart;
          if (value.startsWith('[')) {
            // Handle JSON array format
            try {
              frontmatter[key] = JSON.parse(value);
              inMultiline = false;
              continue;
            } catch (e) {
              // Not valid JSON, continue as multiline
            }
          }
        }
        continue;
      }

      // Remove quotes if present
      let value = valuePart;
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  }

  // Handle case where file ends with multiline
  if (inMultiline && multilineValues.length > 0) {
    frontmatter[multilineKey] = multilineValues;
  }

  // Ensure language is set
  if (!frontmatter.language) {
    frontmatter.language = 'en'; // default
  }

  return {
    frontmatter,
    content: match[2]
  };
}

/**
 * Convert markdown to HTML
 */
function markdownToHtml(markdown) {
  const lines = markdown.split('\n');
  let html = '';
  let inUl = false;
  let inOl = false;
  let inTable = false;
  let tableHeaders = [];
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines but close lists
    if (trimmed === '') {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      continue;
    }

    // Horizontal rule
    if (trimmed === '---') {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      html += '<hr class="my-8">\n        ';
      continue;
    }

    // Headers
    if (trimmed.startsWith('#### ')) {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      html += `<h4>${trimmed.substring(5).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h4>\n        `;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      html += `<h3>${trimmed.substring(4).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h3>\n        `;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      html += `<h2>${trimmed.substring(3).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h2>\n        `;
      continue;
    }
    if (trimmed.startsWith('# ')) {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      html += `<h1>${trimmed.substring(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h1>\n        `;
      continue;
    }

    // Table header
    if (trimmed.startsWith('|') && i + 1 < lines.length && lines[i + 1].trim().startsWith('|---')) {
      if (inUl) { html += '</ul>\n        '; inUl = false; }
      if (inOl) { html += '</ol>\n        '; inOl = false; }
      inTable = true;
      tableHeaders = trimmed.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`);
      i++; // Skip separator line
      continue;
    }

    // Table row
    if (inTable && trimmed.startsWith('|')) {
      const cells = trimmed.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`);
      tableRows.push(`<tr>${cells.join('')}</tr>`);
      if (i + 1 >= lines.length || !lines[i + 1].trim().startsWith('|')) {
        // End of table
        html += `<table>
          <thead>
            <tr>${tableHeaders.join('')}</tr>
          </thead>
          <tbody>
            ${tableRows.join('\n            ')}
          </tbody>
        </table>\n        `;
        inTable = false;
        tableHeaders = [];
        tableRows = [];
      }
      continue;
    }

    // Unordered list
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inUl) {
        if (inOl) { html += '</ol>\n        '; inOl = false; }
        html += '<ul>\n        ';
        inUl = true;
      }
      const content = trimmed.substring(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      html += `<li>${content}</li>\n        `;
      continue;
    }

    // Ordered list
    const olMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (olMatch) {
      if (!inOl) {
        if (inUl) { html += '</ul>\n        '; inUl = false; }
        html += '<ol>\n        ';
        inOl = true;
      }
      const content = olMatch[2].replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      html += `<li>${content}</li>\n        `;
      continue;
    }

    // Close lists before paragraph
    if (inUl) { html += '</ul>\n        '; inUl = false; }
    if (inOl) { html += '</ol>\n        '; inOl = false; }

    // Regular paragraph - inline formatting
    let content = trimmed;
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');
    content = content.replace(/_(.+?)_/g, '<em>$1</em>');
    content = content.replace(/`(.+?)`/g, '<code>$1</code>');

    // Check if line already contains HTML (from headers, lists, etc.)
    if (content.startsWith('<')) {
      html += content + '\n        ';
    } else {
      html += `<p>${content}</p>\n        `;
    }
  }

  // Close any remaining lists
  if (inUl) html += '</ul>\n        ';
  if (inOl) html += '</ol>\n        ';

  return html;
}

/**
 * Extract key takeaways from content
 */
function extractKeyTakeaways(content, frontmatter, language) {
  const takeaways = [];

  // Look for list items after headings like "Key Takeaways", "Summary", etc.
  const lines = content.split('\n');
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.match(/^(Key Takeaways|Summary|Poin Utama|要点|Takeaways)/i)) {
      inList = true;
      continue;
    }
    if (inList) {
      if (line.startsWith('- ') || line.startsWith('* ')) {
        takeaways.push(line.substring(2));
      } else if (line.match(/^\d+\./)) {
        takeaways.push(line.replace(/^\d+\.\s*/, ''));
      } else if (line === '' && takeaways.length > 0) {
        break;
      }
    }
  }

  // If no takeaways found, generate from frontmatter
  if (takeaways.length === 0) {
    takeaways.push(`Title: ${frontmatter.title || ''}`);
    if (frontmatter.description) {
      takeaways.push(frontmatter.description.substring(0, 100) + '...');
    }
  }

  return takeaways.slice(0, 4); // Max 4 takeaways
}

/**
 * Escape quotes for JavaScript template strings
 */
function escapeForTemplate(str) {
  if (!str) return '';
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

/**
 * Escape quotes for JavaScript strings
 */
function escapeForString(str) {
  if (!str) return '';
  return str.replace(/"/g, '\\"').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '');
}

/**
 * Generate Astro template
 */
function generateAstroTemplate(frontmatter, htmlContent, language) {
  const { title, description, slug, date, category } = frontmatter;
  const categoryLabel = CATEGORY_LABELS[language]?.[category] || category || 'Blog';

  const keyTakeaways = [
    `${escapeForString(title)}`,
    `Published: ${date}`,
    `Category: ${categoryLabel}`
  ];

  return `---
import Layout from '../../../../layouts/Layout.astro';

const title = "${escapeForString(title)}";
const description = "${escapeForString(description)}";
const image = "/images/blog/${slug}.jpg";
const slug = "${slug}";
const date = "${date}";
const category = "${category}";
const language = "${language}";
---
<Layout title={title} description={description} image={image}>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <article class="prose prose-lg max-w-none">
      <header class="mb-8">
        <p class="text-green-600 font-semibold mb-2">${categoryLabel}</p>
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">\${title}</h1>
        <p class="text-xl text-gray-600">\${description}</p>
        <p class="text-sm text-gray-500 mt-4">Published: \${date}</p>
      </header>

      <div class="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
        <p class="text-green-900 font-semibold mb-2">Key Takeaways:</p>
        <ul class="list-disc list-inside text-green-800 space-y-1">
          ${keyTakeaways.map(t => `<li>${escapeForTemplate(t)}</li>`).join('\n          ')}
        </ul>
      </div>

      <!-- Markdown content converted to HTML -->
      <section id="content" class="blog-content">
        ${escapeForTemplate(htmlContent)}
      </section>

      ${WHATSAPP_CTA[language]}

      ${ABOUT_FOOTER[language]}
    </article>
  </main>
</Layout>
`;
}

/**
 * Convert a single MD file to Astro
 */
function convertMdToAstro(sourcePath, targetPath) {
  try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    const parsed = parseFrontmatter(content);

    if (!parsed) {
      console.error(`  ❌ No frontmatter found in ${sourcePath}`);
      return false;
    }

    const { frontmatter, content: markdownContent } = parsed;
    const htmlContent = markdownToHtml(markdownContent);

    // Extract language from path
    const match = sourcePath.match(/content\/(en|zh|ms)\//);
    const language = match ? match[1] : 'en';

    const astroTemplate = generateAstroTemplate(frontmatter, htmlContent, language);

    // Create target directory if needed
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetPath, astroTemplate, 'utf8');
    return true;
  } catch (error) {
    console.error(`  ❌ Error converting ${sourcePath}:`, error.message);
    return false;
  }
}

/**
 * Main conversion function
 */
function convertAllBlogs() {
  console.log('🚀 Starting blog conversion...\n');

  const languages = ['en', 'zh', 'ms'];
  let totalConverted = 0;
  let totalFailed = 0;

  for (const lang of languages) {
    const sourceBlogsDir = path.join(SOURCE_DIR, lang, 'blogs');
    const targetBlogsDir = path.join(TARGET_DIR, lang, 'blog');

    if (!fs.existsSync(sourceBlogsDir)) {
      console.log(`⚠️  No blogs directory for ${lang}`);
      continue;
    }

    const mdFiles = fs.readdirSync(sourceBlogsDir).filter(f => f.endsWith('.md'));
    console.log(`📁 Processing ${lang.toUpperCase()} blogs: ${mdFiles.length} files\n`);

    for (const mdFile of mdFiles) {
      const sourcePath = path.join(sourceBlogsDir, mdFile);
      const slug = mdFile.replace('.md', '');
      const targetPath = path.join(targetBlogsDir, slug, 'index.astro');

      process.stdout.write(`  📝 Converting ${mdFile}... `);

      if (convertMdToAstro(sourcePath, targetPath)) {
        console.log('✅');
        totalConverted++;
      } else {
        console.log('❌');
        totalFailed++;
      }
    }

    console.log('');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Successfully converted: ${totalConverted} files`);
  if (totalFailed > 0) {
    console.log(`❌ Failed conversions: ${totalFailed} files`);
  }
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

// Run the conversion
convertAllBlogs();

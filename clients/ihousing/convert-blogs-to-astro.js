const fs = require('fs');
const path = require('path');

// Configuration
const CONTENT_DIR = path.join(__dirname, 'content');
const WEBSITE_DIR = path.join(__dirname, 'website/src/pages');
const WHATSAPP_NUMBER = '60166996688';

// Map of category to display name
const categoryNames = {
  'problem-aware-empty': 'Problem Aware: Empty Condo',
  'problem-aware-tenant': 'Problem Aware: Tenant Issues',
  'investment-guide': 'Investment Guide',
  'comparison': 'Comparison',
  'how-to': 'How To Guide',
  'location-guide': 'Location Guide',
  'airbnb-setup': 'Airbnb Setup',
  'management': 'Property Management',
  'profitability': 'Profitability',
  'pricing': 'Pricing Strategy',
  'amenities': 'Amenities Guide',
  'legal': 'Legal & Compliance',
  'investment': 'Investment',
  'renovation': 'Renovation Guide',
  'management-guide': 'Management Guide',
  'furniture': 'Furniture & Setup',
  'pricing-guide': 'Pricing Guide',
  'switching': 'Switching Managers',
  'operation': 'Operations',
  'seasonal': 'Seasonal Strategy',
  'property': 'Property Guide',
  'investment-potential': 'Investment Potential',
};

function convertMarkdownToHtml(markdown) {
  let html = markdown;

  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert unordered lists
  html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>\n$&</ul>\n');

  // Convert ordered lists (simplified)
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

  // Convert blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Convert code blocks
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Convert paragraphs (lines that aren't already HTML)
  html = html.split('\n').map(line => {
    if (line.trim() === '') return '';
    if (line.startsWith('<')) return line;
    if (line.startsWith('|')) return ''; // Skip table rows for now
    if (line.startsWith('-')) return '';
    if (line.match(/^\d+\./)) return '';
    return `<p>${line}</p>`;
  }).join('\n');

  // Clean up empty lines
  html = html.replace(/\n\n+/g, '\n\n');

  return html;
}

function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!frontmatterMatch) {
    console.error(`Invalid frontmatter in: ${filePath}`);
    return null;
  }

  const frontmatter = {};
  const frontmatterLines = frontmatterMatch[1].split(/\r?\n/);

  frontmatterLines.forEach(line => {
    // Match both quoted and unquoted values
    const match = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (match) {
      const [, key, value] = match;
      frontmatter[key] = value.replace(/^"|"$/g, '');
    }
  });

  const body = frontmatterMatch[2].trim();

  return { frontmatter, body };
}

function generateAstroTemplate(frontmatter, body, language) {
  const { title, description, slug, date, category } = frontmatter;
  const categoryName = categoryNames[category] || category || 'Blog';

  // Convert markdown body to HTML
  const htmlContent = convertMarkdownToHtml(body);

  // Get language-specific WhatsApp message
  const whatsappMessages = {
    en: `Hi iHousing, I'm interested in Airbnb management for my property`,
    ms: `Hai iHousing, saya berminat dengan pengurusan Airbnb untuk hartanah saya`,
    zh: `嗨 iHousing，我对我的房产的Airbnb管理感兴趣`
  };

  const ctaMessages = {
    en: `Contact iHousing today for a free consultation about your Melaka property.`,
    ms: `Hubungi iHousing hari ini untuk konsultasi percuma mengenai hartanah Melaka anda.`,
    zh: `立即联系 iHousing，免费咨询您的马六甲房产。`
  };

  const whatsappMessage = encodeURIComponent(whatsappMessages[language] || whatsappMessages.en);
  const ctaMessage = ctaMessages[language] || ctaMessages.en;

  return `---
import Layout from '../../../../layouts/Layout.astro';

const title = "${title}";
const description = "${description}";
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
        <p class="text-green-600 font-semibold mb-2">${categoryName}</p>
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">\${title}</h1>
        <p class="text-xl text-gray-600">\${description}</p>
        <p class="text-sm text-gray-500 mt-4">Published: \${date}</p>
      </header>

      <div class="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
        <p class="text-green-900 font-semibold mb-2">Key Takeaways:</p>
        <ul class="list-disc list-inside text-green-800 space-y-1">
          <li>\${title}</li>
          <li>Published: \${date}</li>
          <li>Category: ${categoryName}</li>
        </ul>
      </div>

      <!-- Markdown content converted to HTML -->
      <section id="content" class="blog-content">
${htmlContent}
      </section>

      <div class="bg-green-50 border-l-4 border-green-600 p-6 my-8">
  <h3 class="text-green-900 font-bold mb-2">Ready to Start Your Airbnb Journey?</h3>
  <p class="text-green-800 mb-4">${ctaMessage}</p>
  <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}" target="_blank" rel="noopener" class="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
    WhatsApp Us Now
  </a>
</div>

      <hr class="my-8">
<p class="text-sm text-gray-500 italic"><em>About iHousing:</em> We're Melaka's leading Airbnb property management company, specializing in turning vacant condos into profitable short-term rentals. We manage properties across 10+ condo developments in Melaka, delivering 60%+ average occupancy through our 5-platform listing strategy and in-house cleaning team.</p>
    </article>
  </main>
</Layout>
`;
}

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, '');
}

function main() {
  const languages = ['en', 'ms', 'zh'];
  const converted = [];
  const skipped = [];
  const errors = [];

  languages.forEach(lang => {
    const contentBlogDir = path.join(CONTENT_DIR, lang, 'blogs');
    const websiteBlogDir = path.join(WEBSITE_DIR, lang, 'blog');

    if (!fs.existsSync(contentBlogDir)) {
      console.log(`No content directory for ${lang}: ${contentBlogDir}`);
      return;
    }

    // Ensure website blog directory exists
    if (!fs.existsSync(websiteBlogDir)) {
      fs.mkdirSync(websiteBlogDir, { recursive: true });
    }

    // Get all markdown files
    const files = fs.readdirSync(contentBlogDir).filter(f => f.endsWith('.md'));
    console.log(`\nProcessing ${lang}: ${files.length} files`);

    files.forEach(file => {
      const slug = slugFromFilename(file);
      const contentFilePath = path.join(contentBlogDir, file);
      const outputDir = path.join(websiteBlogDir, slug);
      const outputFile = path.join(outputDir, 'index.astro');

      // Check if already converted
      if (fs.existsSync(outputFile)) {
        skipped.push({ lang, slug, reason: 'Already exists' });
        return;
      }

      try {
        // Parse markdown file
        const parsed = parseMarkdownFile(contentFilePath);
        if (!parsed) {
          errors.push({ lang, slug, reason: 'Invalid frontmatter' });
          return;
        }

        const { frontmatter, body } = parsed;

        // Create output directory
        fs.mkdirSync(outputDir, { recursive: true });

        // Generate Astro template
        const astroContent = generateAstroTemplate(frontmatter, body, lang);

        // Write file
        fs.writeFileSync(outputFile, astroContent);

        converted.push({ lang, slug });
        console.log(`  ✓ Converted: ${slug}`);

      } catch (error) {
        errors.push({ lang, slug, reason: error.message });
        console.error(`  ✗ Error converting ${slug}: ${error.message}`);
      }
    });
  });

  // Summary
  console.log('\n=== SUMMARY ===');
  console.log(`Converted: ${converted.length}`);
  console.log(`Skipped: ${skipped.length}`);
  console.log(`Errors: ${errors.length}`);

  if (converted.length > 0) {
    console.log('\nConverted files:');
    converted.forEach(({ lang, slug }) => {
      console.log(`  ${lang}/${slug}`);
    });
  }

  if (skipped.length > 0) {
    console.log('\nSkipped files:');
    skipped.forEach(({ lang, slug, reason }) => {
      console.log(`  ${lang}/${slug} - ${reason}`);
    });
  }

  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach(({ lang, slug, reason }) => {
      console.log(`  ${lang}/${slug} - ${reason}`);
    });
  }

  // Update SLUG_MANIFEST.json
  console.log('\n=== UPDATING SLUG_MANIFEST.json ===');
  updateSlugManifest(converted);
}

function updateSlugManifest(convertedBlogs) {
  const manifestPath = path.join(__dirname, 'website/public/SLUG_MANIFEST.json');

  let manifest = { blogs: { en: [], ms: [], zh: [] } };

  // Load existing manifest
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  }

  // Add new blogs
  const now = new Date().toISOString();

  convertedBlogs.forEach(({ lang, slug }) => {
    // Read frontmatter to get details
    const contentFilePath = path.join(__dirname, 'content', lang, 'blogs', `${slug}.md`);
    if (fs.existsSync(contentFilePath)) {
      const parsed = parseMarkdownFile(contentFilePath);
      if (parsed && parsed.frontmatter) {
        const { title, category, date } = parsed.frontmatter;
        manifest.blogs[lang].push({
          slug,
          title,
          category,
          publishedAt: date,
          updatedAt: now.split('T')[0]
        });
      }
    }
  });

  // Update timestamp
  manifest.lastUpdated = now;

  // Write manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Updated SLUG_MANIFEST.json with ${convertedBlogs.length} new entries`);
}

// Run the conversion
main();

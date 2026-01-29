const fs = require('fs');
const path = require('path');

const enDir = 'src/pages/en/blog';
const files = fs.readdirSync(enDir).filter(f => f.endsWith('.astro'));
const toFix = files.filter(f => {
  try {
    const content = fs.readFileSync(path.join(enDir, f), 'utf8');
    return content.includes('import Layout from') && !content.includes('import BaseLayout');
  } catch (e) {
    return false;
  }
});

console.log('Fixing', toFix.length, 'remaining EN blog files that use old Layout...');

const patterns = [
  [/excavator/i, 'Excavator Financing'],
  [/lorry|truck/i, 'Lorry Financing'],
  [/forklift/i, 'Forklift Financing'],
  [/bulldozer/i, 'Bulldozer Financing'],
  [/crane/i, 'Crane Financing'],
  [/backhoe/i, 'Backhoe Financing'],
  [/grader/i, 'Motor Grader Financing'],
  [/paver/i, 'Paver Financing'],
  [/roller|compactor/i, 'Roller Compactor Financing'],
  [/scraper/i, 'Scraper Financing'],
  [/skid.?steer/i, 'Skid Steer Financing'],
  [/telehandler/i, 'Telehandler Financing'],
  [/wheel.?loader/i, 'Wheel Loader Financing'],
  [/concrete.?mixer/i, 'Concrete Mixer Financing'],
  [/concrete.?pump/i, 'Concrete Pump Financing'],
  [/bad.credit|ccris|ctos|reject|blacklist/i, 'Bad Credit Solutions'],
  [/0.?deposit|0.?percent|down.?pay/i, '0% Deposit Financing'],
  [/cny|festive/i, 'CNY Special'],
  [/government|tender/i, 'Government Projects'],
  [/startup|new.?business/i, 'Startup Financing'],
  [/construction/i, 'Construction Equipment']
];

function getCategory(title) {
  const t = title.toLowerCase();
  for (const [p, c] of patterns) {
    if (p.test(t)) return c;
  }
  return 'Equipment Financing';
}

function readTime(content) {
  return Math.max(3, Math.ceil(content.split(/\s+/).length / 200));
}

const headerTemplate = (title, slug, desc, date, cat, rt, image, kw) => `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = 'en';
const post = {
  title: '${title}',
  slug: '${slug}',
  excerpt: '${desc}',
  date: '${date}',
  author: 'Ing Heng Credit Team',
  readTime: ${rt},
  category: '${cat}',
  image: '${image}'
};

const keywords = ${kw},
  breadcrumbItems = [
  { label: 'Home', href: '/en' },
  { label: 'Blog', href: '/en/blog' },
  { label: post.title, href: \`/en/blog/\${post.slug}\` }
];
---

<BaseLayout title={post.title} description={post.excerpt} lang={lang} keywords={keywords}>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": post.author },
      "publisher": {
        "@type": "Organization",
        "name": "Ing Heng Credit & Leasing Sdn Bhd",
        "logo": {
          "@type": "ImageObject",
          "url": "https://inghengcredit.com/logo.png"
        }
      }
    }
  </script>

  <Breadcrumbs items={breadcrumbItems} />

  <article class="max-w-4xl mx-auto px-4 py-12">
    <header class="mb-8">
      <span class="text-sm font-semibold" style="color: #D4A574;">${cat}</span>
      <h1 class="text-4xl font-bold mt-2" style="color: #2D1810; font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;">{post.title}</h1>
      <p class="text-gray-600 mt-4">{post.excerpt}</p>
      <div class="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span>{post.author}</span>
        <span>•</span>
        <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>•</span>
        <span>{post.readTime} min read</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
`;

const footerTemplate = `
    </div>

    <div class="mt-12 text-center">
      <CTAButton href="/en/contact">Apply for Equipment Financing</CTAButton>
    </div>
  </article>
</BaseLayout>`;

toFix.forEach((file, idx) => {
  try {
    const fp = path.join(enDir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    // Normalize line endings
    content = content.replace(/\r\n/g, '\n');
    
    // Extract content from <Layout> tag
    const layoutMatch = content.match(/<Layout[^>]*title=["']([^"']+)["'][^>]*>([\s\S]+?)<\/Layout>/);
    if (!layoutMatch) {
      console.log('SKIP:', file, '- no Layout tag found');
      return;
    }
    
    const layoutTitle = layoutMatch[1];
    const bodyContent = layoutMatch[2];
    
    // Extract meta info from title
    const slug = file.replace('.astro', '');
    const cat = getCategory(layoutTitle);
    const rt = readTime(bodyContent);
    
    // Create description from title
    const desc = layoutTitle.replace(/\|.*$/, '').trim() + '. Get 0% down payment equipment financing in Malaysia.';
    const title = layoutTitle.replace(/\s*\|.*$/, '').trim();
    const date = '2026-01-05';
    const image = '/images/blog/' + slug + '.jpg';
    const kw = JSON.stringify([cat.toLowerCase().replace(' ', '-'), 'equipment-financing', '0-down-payment']);
    
    // Clean up body content - remove Navbar and Footer
    let body = bodyContent
      .replace(/<Navbar\s*\/>/g, '')
      .replace(/<Footer\s*\/>/g, '')
      .replace(/<main[^>]*>/g, '')
      .replace(/<\/main>/g, '')
      .replace(/<EquipmentCalculator\s*\/>/g, '')
      .trim();
    
    const newContent = headerTemplate(title, slug, desc, date, cat, rt, image, kw) + body + footerTemplate;
    
    fs.writeFileSync(fp, newContent, 'utf8');
    console.log('[' + (idx + 1) + '/' + toFix.length + '] Fixed: ' + file);
  } catch (err) {
    console.error('ERROR:', file, err.message);
  }
});

console.log('\nDone! Fixed ' + toFix.length + ' remaining EN blog files.');

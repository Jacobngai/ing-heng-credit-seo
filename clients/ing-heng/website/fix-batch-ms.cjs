const fs = require('fs');
const path = require('path');

const msDir = 'src/pages/ms/blog';
const files = fs.readdirSync(msDir).filter(f => f.endsWith('.astro'));
const toFix = files.filter(f => !fs.readFileSync(path.join(msDir, f), 'utf8').includes('import BaseLayout'));

console.log('Fixing', toFix.length, 'MS blog files...');

const patterns = [
  [/ekskavator|excavator/i, 'Pembiayaan Ekskavator'],
  [/lori|lorry|truck/i, 'Pembiayaan Lori'],
  [/forklift|forklap/i, 'Pembiayaan Forklap'],
  [/bulldozer/i, 'Pembiayaan Bulldozer'],
  [/krane|crane/i, 'Pembiayaan Kran'],
  [/backhoe/i, 'Pembiayaan Backhoe'],
  [/prime.?mover/i, 'Pembiayaan Prime Mover'],
  [/refrigerat|reefer/i, 'Pembiayaan Lori Sejuk Beku'],
  [/kredit.?buruk|bad.?credit|ccris|ctos|reject/i, 'Penyelesaian Kredit Buruk'],
  [/0.?deposit|0.?percent|tanpa.?deposit/i, 'Pembiayaan 0% Deposit'],
  [/cny|tahun.?baru|cina/i, 'Istimewa TBC'],
  [/kerajaan|tender|government/i, 'Projek Kerajaan'],
  [/startup|baru|permulaan/i, 'Pembiayaan Startup'],
  [/gudang|warehouse/i, 'Peralatan Gudang'],
  [/pembinaan|construction/i, 'Peralatan Pembinaan']
];

function getCategory(title) {
  const t = title.toLowerCase();
  for (const [p, c] of patterns) {
    if (p.test(t)) return c;
  }
  return 'Pembiayaan Peralatan';
}

function readTime(content) {
  return Math.max(3, Math.ceil(content.split(/\s+/).length / 200));
}

const headerTemplate = (title, slug, desc, date, cat, rt, image, kw) => `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = 'ms';
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
  { label: 'Laman Utama', href: '/ms' },
  { label: 'Blog', href: '/ms/blog' },
  { label: post.title, href: \`/ms/blog/\${post.slug}\` }
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
        <time>{new Date(post.date).toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>•</span>
        <span>{post.readTime} min baca</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
`;

const footerTemplate = `
    </div>

    <div class="mt-12 text-center">
      <CTAButton href="/ms/contact">Mohon Pembiayaan Peralatan</CTAButton>
    </div>
  </article>
</BaseLayout>`;

toFix.forEach((file, idx) => {
  try {
    const fp = path.join(msDir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    const fmMatch = content.match(/^---\n([\s\S]+?)\n---/);
    if (!fmMatch) return;
    
    const fm = {};
    fmMatch[1].split('\n').forEach(line => {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) {
        let v = m[2].trim();
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
        else if (v.startsWith('[')) v = v.slice(1, -1).split(',').map(x => x.trim().replace(/'/g, ''));
        fm[m[1]] = v;
      }
    });
    
    if (!fm.title) {
      console.log('SKIP:', file, '- no title');
      return;
    }
    
    const body = content.replace(/^---\n[\s\S]+?\n---\n/, '');
    const slug = file.replace('.astro', '');
    const cat = getCategory(fm.title);
    const rt = readTime(body);
    const kw = Array.isArray(fm.tags) ? JSON.stringify(fm.tags) : '[]';
    const desc = fm.description.replace(/'/g, "\'");
    const title = fm.title.replace(/'/g, "\'");
    
    const newContent = headerTemplate(title, slug, desc, fm.date, cat, rt, fm.image, kw) + body + footerTemplate;
    
    fs.writeFileSync(fp, newContent, 'utf8');
    console.log('[' + (idx + 1) + '/' + toFix.length + '] Fixed: ' + file);
  } catch (err) {
    console.error('ERROR:', file, err.message);
  }
});

console.log('\nDone! Fixed MS blog files.');

const fs = require('fs');
const path = require('path');

const enDir = 'src/pages/en/blog';
const files = fs.readdirSync(enDir).filter(f => f.endsWith('.astro'));
const toFix = files.filter(f => !fs.readFileSync(path.join(enDir, f), 'utf8').includes('import BaseLayout'));

console.log('Fixing', toFix.length, 'EN blog files...');

const patterns = [
  [/excavator/i, 'Excavator Financing'],
  [/lorry|truck/i, 'Lorry Financing'],
  [/forklift/i, 'Forklift Financing'],
  [/bulldozer/i, 'Bulldozer Financing'],
  [/crane/i, 'Crane Financing'],
  [/backhoe/i, 'Backhoe Financing'],
  [/prime.?mover/i, 'Prime Mover Financing'],
  [/refrigerat|reefer/i, 'Refrigerated Truck Financing'],
  [/bad.credit|ccris|ctos|reject/i, 'Bad Credit Solutions'],
  [/0.?deposit|0.?percent|down.?pay/i, '0% Deposit Financing'],
  [/cny|festive/i, 'CNY Special'],
  [/government|tender/i, 'Government Projects'],
  [/startup|new.?business/i, 'Startup Financing'],
  [/warehouse/i, 'Warehouse Equipment'],
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

toFix.forEach((file, idx) => {
  try {
    const fp = path.join(enDir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    // Parse frontmatter
    const fmMatch = content.match(/^---\n([\s\S]+?)\n---/);
    if (!fmMatch) return;
    
    const fm = {};
    fmMatch[1].split('\n').forEach(line => {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) {
        let v = m[2].trim();
        if (v.startsWith('\"') && v.endsWith('\"')) v = v.slice(1, -1);
        else if (v.startsWith('[')) v = v.slice(1, -1).split(',').map(x => x.trim().replace(/[']/g, ''));
        fm[m[1]] = v;
      }
    });
    
    const body = content.replace(/^---\n[\s\S]+?\n---\n/, '');
    const slug = file.replace('.astro', '');
    const cat = getCategory(fm.title);
    const rt = readTime(body);
    const kw = Array.isArray(fm.tags) ? JSON.stringify(fm.tags) : '[]';
    const desc = fm.description.replace(/'/g, "\'");
    const title = fm.title.replace(/'/g, "\'");
    
    const newContent = `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = 'en';
const post = {
  title: '${title}',
  slug: '${slug}',
  excerpt: '${desc}',
  date: '${fm.date}',
  author: 'Ing Heng Credit Team',
  readTime: ${rt},
  category: '${cat}',
  image: '${fm.image}'
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
${body}
    </div>

    <div class="mt-12 text-center">
      <CTAButton href="/en/contact">Apply for Equipment Financing</CTAButton>
    </div>
  </article>
</BaseLayout>`;

    fs.writeFileSync(fp, newContent, 'utf8');
    console.log(\`[\${idx + 1}/\${toFix.length}] Fixed: \${file}\`);
  } catch (err) {
    console.error('ERROR:', file, err.message);
  }
});

console.log('\nDone! Fixed', toFix.length, 'files.');

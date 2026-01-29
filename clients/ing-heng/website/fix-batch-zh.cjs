const fs = require('fs');
const path = require('path');

const zhDir = 'src/pages/zh/blog';
const files = fs.readdirSync(zhDir).filter(f => f.endsWith('.astro') && !f.includes('[slug]') && !f.includes('backup'));
const toFix = files.filter(f => {
  try {
    const content = fs.readFileSync(path.join(zhDir, f), 'utf8');
    return !content.includes('import BaseLayout') && content.includes('title:');
  } catch (e) {
    return false;
  }
});

console.log('Fixing', toFix.length, 'ZH blog files...');

const patterns = [
  [/挖掘机|excavator/i, '挖掘机融资'],
  [/罗里|lori|truck|货车/i, '罗里融资'],
  [/叉车|forklift/i, '叉车融资'],
  [/推土机|bulldozer/i, '推土机融资'],
  [/起重机|krane|crane/i, '起重机融资'],
  [/反铲机|backhoe/i, '反铲机融资'],
  [/牵引车|prime.?mover/i, '牵引车融资'],
  [/冷藏|refrigerat|reefer/i, '冷藏货车融资'],
  [/信用不好|bad.?credit|ccris|ctos|reject/i, '不良信用解决方案'],
  [/0.?首|0.?deposit|down.?pay|无需定金/i, '0%首付融资'],
  [/农历年|cny|春节/i, '农历年特惠'],
  [/政府|tender|government/i, '政府项目'],
  [/初创|startup/i, '初创融资'],
  [/仓库|gudang|warehouse/i, '仓库设备'],
  [/建筑|pembinaan|construction/i, '建筑设备']
];

function getCategory(title, existingCategory) {
  if (existingCategory) return existingCategory;
  const t = title.toLowerCase();
  for (const [p, c] of patterns) {
    if (p.test(t)) return c;
  }
  return '设备融资';
}

function readTime(content) {
  return Math.max(3, Math.ceil(content.split(/\s+/).length / 200));
}

const headerTemplate = (title, slug, desc, date, cat, rt, image, kw) => `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = 'zh';
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
  { label: '首页', href: '/zh' },
  { label: '博客', href: '/zh/blog' },
  { label: post.title, href: \`/zh/blog/\${post.slug}\` }
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
        <time>{new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>•</span>
        <span>{post.readTime} 分钟阅读</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
`;

const footerTemplate = `
    </div>

    <div class="mt-12 text-center">
      <CTAButton href="/zh/contact">申请设备融资</CTAButton>
    </div>
  </article>
</BaseLayout>`;

let fixedCount = 0;
toFix.forEach((file, idx) => {
  try {
    const fp = path.join(zhDir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    // Normalize line endings
    content = content.replace(/\r\n/g, '\n');
    
    // Use a more flexible regex for frontmatter
    const fmMatch = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
    if (!fmMatch) {
      console.log('SKIP:', file, '- no frontmatter');
      return;
    }
    
    const fm = {};
    fmMatch[1].split('\n').forEach(line => {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) {
        let v = m[2].trim();
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
        else if (v.startsWith('[')) v = v.slice(1, -1).split(',').map(x => x.trim().replace(/'/g, '').replace(/"/g, ''));
        fm[m[1]] = v;
      }
    });
    
    if (!fm.title) {
      console.log('SKIP:', file, '- no title');
      return;
    }
    
    const body = content.replace(/^---[\s\S]+?---\r?\n/, '');
    const slug = fm.slug || file.replace('.astro', '');
    const cat = getCategory(fm.title, fm.category);
    const rt = readTime(body);
    const kw = Array.isArray(fm.keywords) ? JSON.stringify(fm.keywords) : '[]';
    const desc = (fm.description || '').replace(/'/g, "\'");
    const title = fm.title.replace(/'/g, "\'");
    const date = fm.publishDate || fm.date || '2026-01-01';
    const image = fm.image || '/images/blog/default.jpg';
    
    const newContent = headerTemplate(title, slug, desc, date, cat, rt, image, kw) + body + footerTemplate;
    
    fs.writeFileSync(fp, newContent, 'utf8');
    fixedCount++;
    if (fixedCount % 50 === 0) console.log('Progress:', fixedCount + '/' + toFix.length);
  } catch (err) {
    console.error('ERROR:', file, err.message);
  }
});

console.log('\nDone! Fixed', fixedCount, 'ZH blog files.');

# Multi-Language Deployment Strategy

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Deploy a single multilingual website to multiple Vercel projects, each with a different primary language, without duplicating content or code. For use with clients requiring language-specific domains.

## Key Principle
**One Codebase, Multiple Builds** - Like having dev/staging/prod environments, but for languages (en/zh/ms/etc.)

## Architecture Overview

### Problem Statement
Client needs:
- **3+ language versions** (e.g., English, Mandarin, Malay)
- **Separate Vercel deployments** per language
- **Each deployment has different default language**
- **No content duplication** (DRY principle)
- **Easy to add more languages** (scalable)

### Solution
**Shared Content + Language-Specific Build Targets**

```
/example-clients/[client-name]/
├── /content/                    ← SINGLE SOURCE OF TRUTH
│   ├── /en/                     ← English content
│   │   ├── /blogs/
│   │   └── /landing-pages/
│   ├── /zh/                     ← Chinese content
│   │   ├── /blogs/
│   │   └── /landing-pages/
│   ├── /ms/                     ← Malay content
│   │   ├── /blogs/
│   │   └── /landing-pages/
│   └── /[any-language]/         ← Extensible
│
├── /website/                    ← SINGLE CODEBASE
│   ├── /src/
│   │   ├── /content/ → symlink to ../../content/
│   │   ├── /pages/
│   │   │   ├── /en/
│   │   │   ├── /zh/
│   │   │   └── /ms/
│   │   └── /components/
│   ├── /config/
│   │   ├── languages.json       ← All supported languages
│   │   ├── deploy-en.json       ← English deployment config
│   │   ├── deploy-zh.json       ← Chinese deployment config
│   │   └── deploy-ms.json       ← Malay deployment config
│   ├── astro.config.mjs
│   └── package.json
│
└── /deployments/                ← GIT BRANCHES (one per language)
    ├── .git/
    │   ├── refs/heads/deploy-en ← English-primary branch
    │   ├── refs/heads/deploy-zh ← Chinese-primary branch
    │   └── refs/heads/deploy-ms ← Malay-primary branch
```

---

## Deployment Strategy

### Each Vercel Project

**Setup:**
```
Vercel Project 1: [client-name]-en
- Git branch: deploy-en
- Build command: npm run build:en
- Output: English-primary website
- Domain: [client-domain].com (or en.[client-domain].com)

Vercel Project 2: [client-name]-zh
- Git branch: deploy-zh
- Build command: npm run build:zh
- Output: Chinese-primary website
- Domain: zh.[client-domain].com

Vercel Project 3: [client-name]-ms
- Git branch: deploy-ms
- Build command: npm run build:ms
- Output: Malay-primary website
- Domain: ms.[client-domain].com
```

### Build Configuration

**package.json:**
```json
{
  "scripts": {
    "build:en": "BUILD_LANG=en astro build",
    "build:zh": "BUILD_LANG=zh astro build",
    "build:ms": "BUILD_LANG=ms astro build",
    "deploy:all": "node scripts/deploy-all-languages.js"
  }
}
```

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import { getDeployConfig } from './config/deploy-config.js';

const BUILD_LANG = process.env.BUILD_LANG || 'en';
const deployConfig = getDeployConfig(BUILD_LANG);

export default defineConfig({
  i18n: {
    defaultLocale: deployConfig.defaultLocale,  // 'en', 'zh', or 'ms'
    locales: deployConfig.locales,              // ['en', 'zh', 'ms']
    routing: {
      prefixDefaultLocale: false,               // English: /about, Chinese: /en/about
    }
  },
  // ... rest of config
});
```

**config/deploy-en.json:**
```json
{
  "defaultLocale": "en",
  "locales": ["en", "zh", "ms"],
  "fallbackLocale": "en",
  "domain": "[client-domain].com",
  "vercelProject": "[client-name]-en"
}
```

**config/deploy-zh.json:**
```json
{
  "defaultLocale": "zh",
  "locales": ["zh", "en", "ms"],
  "fallbackLocale": "en",
  "domain": "zh.[client-domain].com",
  "vercelProject": "[client-name]-zh"
}
```

**config/deploy-ms.json:**
```json
{
  "defaultLocale": "ms",
  "locales": ["ms", "en", "zh"],
  "fallbackLocale": "en",
  "domain": "ms.[client-domain].com",
  "vercelProject": "[client-name]-ms"
}
```

---

## How It Works

### User Experience

**English-primary deployment ([client-domain].com):**
```
Homepage: /                    ← English content
About:    /about               ← English content
Chinese:  /zh/about            ← Language switcher
Malay:    /ms/about            ← Language switcher
```

**Chinese-primary deployment (zh.[client-domain].com):**
```
Homepage: /                    ← Chinese content (默认中文)
About:    /about               ← Chinese content
English:  /en/about            ← Language switcher
Malay:    /ms/about            ← Language switcher
```

**Malay-primary deployment (ms.[client-domain].com):**
```
Homepage: /                    ← Malay content (Bahasa utama)
About:    /about               ← Malay content
English:  /en/about            ← Language switcher
Chinese:  /zh/about            ← Language switcher
```

### Content Resolution

**All deployments use SAME content:**
- `/content/en/blogs/2025-11-01-excavator.md` → Used by all 3 deployments
- `/content/zh/blogs/2025-11-01-excavator.md` → Used by all 3 deployments
- `/content/ms/blogs/2025-11-01-excavator.md` → Used by all 3 deployments

**No duplication!** Content is written once, read by all deployments.

---

## Publishing Workflow

### Single Command Deployment

**Command:** `/publish-approved [client-name]` (updated for specific client)

**Process:**
1. Find approved blog posts (A/ files) for the specified client
2. Generate final markdown (move A/ → production)
3. Copy to `/example-clients/[client-name]/content/[lang]/blogs/`
4. Commit to main branch
5. **Push to ALL deployment branches for this client:**
   ```bash
   cd /example-clients/[client-name]/website/
   git push origin main:deploy-en
   git push origin main:deploy-zh
   git push origin main:deploy-ms
   ```
6. **Vercel auto-deploys all 3 projects** (via webhooks)

**Result:**
- ✅ English site updates: [client-domain].com
- ✅ Chinese site updates: zh.[client-domain].com
- ✅ Malay site updates: ms.[client-domain].com

**Time:** ~5 minutes for all 3 deployments (parallel)

---

## File Structure Details

### Content Organization

```
/example-clients/[client-name]/content/
├── /en/
│   ├── /blogs/
│   │   ├── 2025-11-01-excavator-financing-guide.md
│   │   ├── 2025-11-02-forklift-leasing-tips.md
│   │   └── ...
│   ├── /landing-pages/
│   │   ├── excavator-financing.md
│   │   └── forklift-rental.md
│   └── /pages/
│       ├── about.md
│       ├── services.md
│       └── contact.md
│
├── /zh/
│   ├── /blogs/
│   │   ├── 2025-11-01-excavator-financing-guide.md  ← Same filename, different content
│   │   └── ...
│   ├── /landing-pages/
│   └── /pages/
│
└── /ms/
    ├── /blogs/
    ├── /landing-pages/
    └── /pages/
```

**Key Insight:**
- **Filenames are identical** across languages (e.g., `excavator-financing-guide.md`)
- **This enables language switching:** `/en/blogs/excavator-financing-guide` ↔ `/zh/blogs/excavator-financing-guide`
- **Content is language-specific** (not translated, but culturally adapted)

### Website Codebase (Single)

```
/example-clients/[client-name]/website/
├── /src/
│   ├── /content/              ← Symlink to ../../content/
│   ├── /pages/
│   │   ├── index.astro        ← Detects BUILD_LANG, shows correct default
│   │   ├── /[lang]/           ← Dynamic language routes
│   │   │   ├── /blogs/
│   │   │   │   └── [slug].astro
│   │   │   ├── /landing-pages/
│   │   │   └── about.astro
│   ├── /components/
│   │   ├── LanguageSwitcher.astro  ← Shows available languages
│   │   ├── Header.astro
│   │   └── Footer.astro
│   └── /layouts/
│       └── BlogLayout.astro
│
├── /config/
│   ├── languages.json         ← List of all supported languages
│   ├── deploy-en.json
│   ├── deploy-zh.json
│   └── deploy-ms.json
│
├── /scripts/
│   └── deploy-all-languages.js  ← Helper script for multi-deploy
│
├── astro.config.mjs           ← Reads BUILD_LANG env var
├── package.json
├── vercel.json                ← Generic Vercel config (overridden by deploy-*.json)
└── README.md
```

---

## Git Branch Strategy

### Main Branch
- Contains all code and content
- Never deployed directly
- Source of truth

### Deployment Branches
- `deploy-en` (mirrors main, triggers English Vercel)
- `deploy-zh` (mirrors main, triggers Chinese Vercel)
- `deploy-ms` (mirrors main, triggers Malay Vercel)

**Update Process:**
```bash
# After content approved and committed to main
git checkout main
git add content/
git commit -m "Add new blog posts EN/ZH/MS"

# Push to all deployment branches (automated)
git push origin main:deploy-en --force
git push origin main:deploy-zh --force
git push origin main:deploy-ms --force
```

**Vercel Webhooks:**
- Each Vercel project watches its respective branch
- Pushes trigger automatic builds
- Parallel deployment (all 3 at once)

---

## Vercel Project Setup

### Project 1: [client-name]-en

**Vercel Dashboard Settings:**
```
Project Name: [client-name]-en
Git Repository: github.com/your-org/[client-repo]
Git Branch: deploy-en
Build Command: npm run build:en
Output Directory: dist
Environment Variables:
  - BUILD_LANG=en
  - NODE_VERSION=18.x
```

**Domain:**
- Primary: [client-domain].com
- Alternate: en.[client-domain].com

### Project 2: [client-name]-zh

```
Project Name: [client-name]-zh
Git Branch: deploy-zh
Build Command: npm run build:zh
Environment Variables:
  - BUILD_LANG=zh
```

**Domain:**
- Primary: zh.[client-domain].com
- Alternate: cn.[client-domain].com

### Project 3: [client-name]-ms

```
Project Name: [client-name]-ms
Git Branch: deploy-ms
Build Command: npm run build:ms
Environment Variables:
  - BUILD_LANG=ms
```

**Domain:**
- Primary: ms.[client-domain].com
- Alternate: my.[client-domain].com

---

## Language Switcher Implementation

**LanguageSwitcher.astro:**
```astro
---
import { getDeployConfig } from '../config/deploy-config.js';

const currentPath = Astro.url.pathname;
const currentLang = Astro.currentLocale || 'en';
const config = getDeployConfig(process.env.BUILD_LANG);

// Generate language switch URLs
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ms', name: 'Bahasa', flag: '🇲🇾' }
];

function getLanguageUrl(langCode) {
  // If switching to default language, remove prefix
  if (langCode === config.defaultLocale) {
    return currentPath.replace(/^\/(en|zh|ms)/, '') || '/';
  }
  // Otherwise, add language prefix
  const cleanPath = currentPath.replace(/^\/(en|zh|ms)/, '') || '/';
  return `/${langCode}${cleanPath}`;
}
---

<div class="language-switcher">
  {languages.map(lang => (
    <a
      href={getLanguageUrl(lang.code)}
      class:list={['lang-option', { active: lang.code === currentLang }]}
      aria-label={`Switch to ${lang.name}`}
    >
      <span class="flag">{lang.flag}</span>
      <span class="name">{lang.name}</span>
    </a>
  ))}
</div>
```

**How it works:**
- On `apexmachinery.com` (English default):
  - English link: `/` (no prefix)
  - Chinese link: `/zh/current-page`
  - Malay link: `/ms/current-page`

- On `zh.apexmachinery.com` (Chinese default):
  - Chinese link: `/` (no prefix)
  - English link: `/en/current-page`
  - Malay link: `/ms/current-page`

---

## Adding New Languages

**To add a 4th language (e.g., Tamil - 'ta'):**

### Step 1: Create Config
```json
// config/deploy-ta.json
{
  "defaultLocale": "ta",
  "locales": ["ta", "en", "zh", "ms"],
  "fallbackLocale": "en",
  "domain": "ta.apexmachinery.com",
  "vercelProject": "apex-machinery-ta"
}
```

### Step 2: Update package.json
```json
{
  "scripts": {
    "build:ta": "BUILD_LANG=ta astro build"
  }
}
```

### Step 3: Create Deployment Branch
```bash
git checkout -b deploy-ta
git push origin deploy-ta
```

### Step 4: Create Vercel Project
- Project name: `apex-machinery-ta`
- Git branch: `deploy-ta`
- Build command: `npm run build:ta`
- Env var: `BUILD_LANG=ta`

### Step 5: Add Content Folder
```bash
mkdir -p content/ta/blogs
mkdir -p content/ta/landing-pages
mkdir -p content/ta/pages
```

### Step 6: Update Language Switcher
```javascript
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ms', name: 'Bahasa', flag: '🇲🇾' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }  // NEW
];
```

**Done!** No code changes needed. New language added in ~10 minutes.

---

## Benefits of This Architecture

### 1. **No Duplication**
- Content written once: `/content/en/blogs/post.md`
- Used by all deployments
- Single source of truth

### 2. **Scalable**
- Add new language: 10 minutes
- No code refactoring needed
- Just add config + Vercel project

### 3. **SEO Optimized**
- Each deployment has correct `<html lang="en">`, `<html lang="zh">`, etc.
- Proper hreflang tags across deployments
- Language-specific sitemaps

### 4. **Easy Language Switching**
- Consistent URLs across deployments
- `/en/blog/post` exists on all sites
- Users can switch seamlessly

### 5. **Independent Domains**
- Each language can have custom domain
- E.g., `.com` (English), `.cn` (Chinese), `.my` (Malay)
- Better local SEO and user trust

### 6. **Parallel Deployment**
- Push once → all 3 sites update
- Vercel builds in parallel
- 5 minutes total (not 15 minutes)

### 7. **Cost Effective**
- Free tier covers multiple projects
- Shared build cache (same codebase)
- Efficient bandwidth usage

---

## Publishing Automation

**Automated Script (`scripts/deploy-all-languages.js`):**

```javascript
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read all deploy configs
const configDir = path.join(__dirname, '../config');
const deployConfigs = fs.readdirSync(configDir)
  .filter(f => f.startsWith('deploy-') && f.endsWith('.json'))
  .map(f => require(path.join(configDir, f)));

console.log(`🚀 Deploying to ${deployConfigs.length} language versions...`);

// Ensure we're on main branch
execSync('git checkout main', { stdio: 'inherit' });

// Push to all deployment branches
deployConfigs.forEach(config => {
  const langCode = config.defaultLocale;
  const branch = `deploy-${langCode}`;

  console.log(`📤 Pushing to ${branch} (${config.domain})...`);

  try {
    execSync(`git push origin main:${branch} --force`, { stdio: 'inherit' });
    console.log(`✅ ${langCode.toUpperCase()} deployment triggered`);
  } catch (error) {
    console.error(`❌ Failed to push ${branch}`);
  }
});

console.log(`\n✅ All deployments triggered!`);
console.log(`⏱️  Estimated completion: 5 minutes`);
console.log(`\nMonitor builds:`);
deployConfigs.forEach(config => {
  console.log(`  - ${config.defaultLocale.toUpperCase()}: https://vercel.com/${config.vercelProject}`);
});
```

**Usage:**
```bash
cd /example-clients/[client-name]/website/
npm run deploy:all
```

**Output:**
```
🚀 Deploying to 3 language versions...
📤 Pushing to deploy-en ([client-domain].com)...
✅ EN deployment triggered
📤 Pushing to deploy-zh (zh.[client-domain].com)...
✅ ZH deployment triggered
📤 Pushing to deploy-ms (ms.[client-domain].com)...
✅ MS deployment triggered

✅ All deployments triggered!
⏱️  Estimated completion: 5 minutes

Monitor builds:
  - EN: https://vercel.com/[client-name]-en
  - ZH: https://vercel.com/[client-name]-zh
  - MS: https://vercel.com/[client-name]-ms
```

---

## Hreflang Tags for Cross-Deployment SEO

### Critical Rules for Multi-Domain Hreflang

**MUST-HAVE Requirements:**
1. **Self-referencing**: Every page MUST include a hreflang tag pointing to itself
2. **Bidirectional linking**: If page A links to page B, page B MUST link back to page A
3. **Absolute URLs**: Always use complete URLs with protocol (https://) and domain
4. **Protocol consistency**: Use HTTPS everywhere (never mix HTTP/HTTPS)
5. **Trailing slash consistency**: Be consistent across all deployments
6. **Include all language versions**: Every deployment must reference ALL other deployments

### Proper Implementation Examples

**On [client-domain].com/blog/excavator-guide (English deployment):**
```html
<!-- MUST include self-reference (same page) -->
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide" />

<!-- References to other language deployments -->
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide" />

<!-- x-default points to primary/fallback version -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/excavator-guide" />
```

**On zh.[client-domain].com/blog/excavator-guide (Chinese deployment):**
```html
<!-- MUST include self-reference (same page) -->
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide" />

<!-- Bidirectional references to other deployments -->
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide" />

<!-- x-default always points to primary language (usually English) -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/excavator-guide" />
```

**On ms.[client-domain].com/blog/excavator-guide (Malay deployment):**
```html
<!-- MUST include self-reference (same page) -->
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide" />

<!-- Bidirectional references to other deployments -->
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide" />

<!-- x-default points to primary language -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/excavator-guide" />
```

**Benefit:** Google knows all 3 versions are related, serves correct one to users based on language preference.

### URL Consistency Rules for Multi-Domain Setup

**CRITICAL:** All language versions of the same content MUST use identical URL paths (after domain):

**✅ CORRECT:**
```
English:  https://[client-domain].com/blog/excavator-guide
Chinese:  https://zh.[client-domain].com/blog/excavator-guide
Malay:    https://ms.[client-domain].com/blog/excavator-guide
```

**❌ WRONG (inconsistent paths):**
```
English:  https://[client-domain].com/blog/excavator-guide
Chinese:  https://zh.[client-domain].com/blogs/excavator-guide     ← Different (/blogs/ vs /blog/)
Malay:    https://ms.[client-domain].com/excavator-guide           ← Missing /blog/
```

**✅ CORRECT (with trailing slashes, but consistent):**
```
English:  https://[client-domain].com/blog/excavator-guide/
Chinese:  https://zh.[client-domain].com/blog/excavator-guide/
Malay:    https://ms.[client-domain].com/blog/excavator-guide/
```

**❌ WRONG (inconsistent trailing slashes):**
```
English:  https://[client-domain].com/blog/excavator-guide/
Chinese:  https://zh.[client-domain].com/blog/excavator-guide      ← Missing trailing slash
Malay:    https://ms.[client-domain].com/blog/excavator-guide/
```

---

### Hreflang Validation for Multi-Deployment

#### Critical Validation Rules

1. **Every deployment must include ALL language versions (including itself)**
   - If you have 3 languages, every page must have 3+ hreflang tags (3 languages + x-default)

2. **URLs must be absolute and match exactly across deployments**
   - Use full URLs: `https://domain.com/path` not `/path`
   - Protocol must match: all HTTPS or all HTTP (never mix)
   - Trailing slashes must be consistent

3. **Protocol consistency (HTTPS)**
   - Always use HTTPS in production
   - Never mix HTTP and HTTPS URLs

4. **Trailing slash consistency**
   - Choose one approach (with or without) and stick to it across ALL deployments
   - Astro default: no trailing slashes

5. **Each language deployment validates translation existence**
   - Before adding hreflang, verify the translation file exists
   - Don't link to 404 pages

#### Cross-Domain Verification Checklist

**Pre-Deployment Validation:**
```bash
# 1. Verify all translations exist for a content piece
ls -la content/en/blogs/excavator-guide.md
ls -la content/zh/blogs/excavator-guide.md
ls -la content/ms/blogs/excavator-guide.md

# 2. Verify URL structure consistency in routing config
grep -r "excavator-guide" src/pages/*/blog/

# 3. Check hreflang implementation in head component
cat src/components/SEOHead.astro | grep -A 10 "hreflang"
```

**Post-Deployment Testing:**
```bash
# 1. Test each deployment's hreflang tags
curl -s https://[client-domain].com/blog/excavator-guide | grep hreflang
curl -s https://zh.[client-domain].com/blog/excavator-guide | grep hreflang
curl -s https://ms.[client-domain].com/blog/excavator-guide | grep hreflang

# 2. Verify all referenced URLs return 200 (not 404)
curl -I https://[client-domain].com/blog/excavator-guide
curl -I https://zh.[client-domain].com/blog/excavator-guide
curl -I https://ms.[client-domain].com/blog/excavator-guide

# 3. Check for redirect loops
curl -L https://[client-domain].com/blog/excavator-guide 2>&1 | grep "redirect"
```

**Google Search Console Setup:**
Each domain needs its own property:
1. **English domain**: Add `https://[client-domain].com` property
2. **Chinese domain**: Add `https://zh.[client-domain].com` property
3. **Malay domain**: Add `https://ms.[client-domain].com` property

**In each Search Console property:**
- Submit sitemap: `https://domain.com/sitemap.xml`
- Monitor Coverage report for hreflang errors
- Check International Targeting > Language tab
- Verify no "alternate page with proper canonical tag" errors

#### Testing Each Deployment Independently

**Manual Testing Workflow:**

1. **Test English Deployment** (`[client-domain].com`):
```bash
# View page source
curl -s https://[client-domain].com/blog/excavator-guide | grep -A 5 "hreflang"

# Expected output:
# <link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide" />
# <link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide" />
# <link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide" />
# <link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/excavator-guide" />
```

2. **Test Chinese Deployment** (`zh.[client-domain].com`):
```bash
curl -s https://zh.[client-domain].com/blog/excavator-guide | grep -A 5 "hreflang"

# Verify:
# ✅ Self-reference to zh domain is present
# ✅ Bidirectional links to en and ms domains
# ✅ x-default points to primary domain
```

3. **Test Malay Deployment** (`ms.[client-domain].com`):
```bash
curl -s https://ms.[client-domain].com/blog/excavator-guide | grep -A 5 "hreflang"

# Verify same structure
```

**Automated Testing Script:**
```javascript
// scripts/validate-hreflang.js
const deployments = [
  { lang: 'en', domain: '[client-domain].com' },
  { lang: 'zh', domain: 'zh.[client-domain].com' },
  { lang: 'ms', domain: 'ms.[client-domain].com' }
];

async function validateHreflang(testPath = '/blog/excavator-guide') {
  for (const deployment of deployments) {
    const url = `https://${deployment.domain}${testPath}`;
    console.log(`\nTesting: ${url}`);

    try {
      const response = await fetch(url);
      const html = await response.text();

      // Extract hreflang tags
      const hreflangRegex = /<link[^>]*rel="alternate"[^>]*hreflang="([^"]*)"[^>]*href="([^"]*)"[^>]*>/g;
      const tags = [...html.matchAll(hreflangRegex)];

      console.log(`  Found ${tags.length} hreflang tags:`);

      // Validation checks
      const languages = tags.map(t => t[1]);
      const hasAllLanguages = deployments.every(d => languages.includes(d.lang));
      const hasSelfReference = languages.includes(deployment.lang);
      const hasXDefault = languages.includes('x-default');

      console.log(`  ✅ Has self-reference: ${hasSelfReference}`);
      console.log(`  ✅ Has all languages: ${hasAllLanguages}`);
      console.log(`  ✅ Has x-default: ${hasXDefault}`);

      // Verify URLs are absolute and HTTPS
      tags.forEach(([_, lang, href]) => {
        const isAbsolute = href.startsWith('https://');
        console.log(`    ${lang}: ${href} ${isAbsolute ? '✅' : '❌ Not absolute!'}`);
      });

    } catch (error) {
      console.error(`  ❌ Error fetching ${url}:`, error.message);
    }
  }
}

// Run validation
validateHreflang().catch(console.error);
```

**Usage:**
```bash
node scripts/validate-hreflang.js
```

---

### Common Cross-Deployment Mistakes

#### 1. Missing Self-Reference
**❌ WRONG:**
```html
<!-- On [client-domain].com - missing self-reference! -->
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/post" />
```

**✅ CORRECT:**
```html
<!-- On [client-domain].com - includes self-reference -->
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/post" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/post" />
```

#### 2. Inconsistent URLs Between Deployments
**❌ WRONG:**
```html
<!-- English deployment uses different path structure -->
<link rel="alternate" hreflang="en" href="https://[client-domain].com/articles/post" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
```

**✅ CORRECT:**
```html
<!-- All deployments use same path structure -->
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/post" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
```

#### 3. Canonical URL Conflicts
**❌ WRONG:**
```html
<!-- On zh.[client-domain].com -->
<link rel="canonical" href="https://[client-domain].com/blog/post" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
```
*Problem: Canonical points to different domain, confusing Google about which version is primary*

**✅ CORRECT:**
```html
<!-- On zh.[client-domain].com -->
<link rel="canonical" href="https://zh.[client-domain].com/blog/post" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
```
*Rule: Canonical should always point to SELF on each deployment*

#### 4. Relative URLs Instead of Absolute
**❌ WRONG:**
```html
<link rel="alternate" hreflang="en" href="/blog/post" />
<link rel="alternate" hreflang="zh" href="/blog/post" />
```

**✅ CORRECT:**
```html
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/post" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
```

#### 5. Linking to Non-Existent Translations
**❌ WRONG:**
```html
<!-- On [client-domain].com - but Chinese translation doesn't exist yet -->
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/post" />
```
*Result: 404 error when Google crawls the alternate URL*

**✅ CORRECT:**
```javascript
// Dynamic hreflang generation with existence check
function generateHreflang(currentPath, currentLang) {
  const translations = getAvailableTranslations(currentPath);
  return translations.map(lang => ({
    hreflang: lang.code,
    href: `https://${lang.domain}${currentPath}`
  }));
}
```

#### 6. Incorrect x-default Handling
**❌ WRONG:**
```html
<!-- Each deployment has different x-default -->
<!-- English: -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/post" />

<!-- Chinese: -->
<link rel="alternate" hreflang="x-default" href="https://zh.[client-domain].com/blog/post" />
```

**✅ CORRECT:**
```html
<!-- ALL deployments point x-default to the same primary domain -->
<!-- English: -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/post" />

<!-- Chinese: -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/post" />

<!-- Malay: -->
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/post" />
```

---

### Dynamic Hreflang Generation (Production-Ready)

**Implementation in Astro Component:**

```astro
---
// src/components/HreflangTags.astro
import { getCollection } from 'astro:content';
import { getDeployConfig } from '../config/deploy-config.js';

interface Props {
  currentPath: string;
  currentLang: string;
}

const { currentPath, currentLang } = Astro.props;
const deployConfig = getDeployConfig(process.env.BUILD_LANG || 'en');

// Domain configuration for each language
const DOMAIN_MAP = {
  en: '[client-domain].com',
  zh: 'zh.[client-domain].com',
  ms: 'ms.[client-domain].com'
};

// Extract the content slug from current path
const pathParts = currentPath.split('/').filter(Boolean);
const contentType = pathParts[1]; // 'blog', 'equipment', etc.
const slug = pathParts[2]; // 'excavator-guide', etc.

// Check which translations exist for this content
async function getAvailableTranslations() {
  const translations = [];

  for (const [langCode, domain] of Object.entries(DOMAIN_MAP)) {
    try {
      // Check if translation exists in content collection
      const collection = await getCollection(contentType);
      const hasTranslation = collection.some(
        entry => entry.slug === slug && entry.data.lang === langCode
      );

      if (hasTranslation) {
        translations.push({
          lang: langCode,
          domain: domain,
          url: `https://${domain}${currentPath}`
        });
      }
    } catch (error) {
      console.warn(`Translation check failed for ${langCode}:`, error.message);
    }
  }

  return translations;
}

// Get available translations (only include languages that have content)
const availableTranslations = await getAvailableTranslations();

// Add x-default (always points to primary domain)
const xDefaultUrl = `https://${DOMAIN_MAP.en}${currentPath}`;
---

{availableTranslations.map(({ lang, url }) => (
  <link rel="alternate" hreflang={lang} href={url} />
))}
<link rel="alternate" hreflang="x-default" href={xDefaultUrl} />
```

**Usage in Page Template:**

```astro
---
// src/pages/[lang]/blog/[slug].astro
import HreflangTags from '../../../components/HreflangTags.astro';

const { lang } = Astro.params;
const currentPath = Astro.url.pathname;
---

<html lang={lang}>
<head>
  <HreflangTags currentPath={currentPath} currentLang={lang} />
  <!-- other head tags -->
</head>
<body>
  <!-- content -->
</body>
</html>
```

---

### Error Handling for Missing Translations

**Strategy: Graceful Fallback**

```javascript
// src/utils/hreflang-validator.js

/**
 * Validates hreflang URLs before including them
 * Returns only translations that exist and are accessible
 */
export async function validateHreflangUrls(translations) {
  const validatedTranslations = [];

  for (const translation of translations) {
    try {
      // In build mode, check if file exists
      if (import.meta.env.MODE === 'production') {
        const response = await fetch(translation.url, { method: 'HEAD' });

        if (response.status === 200) {
          validatedTranslations.push(translation);
        } else {
          console.warn(`Skipping hreflang for ${translation.lang}: URL returns ${response.status}`);
        }
      } else {
        // In dev mode, trust the content collection
        validatedTranslations.push(translation);
      }
    } catch (error) {
      console.error(`Error validating ${translation.url}:`, error.message);
    }
  }

  return validatedTranslations;
}

/**
 * Generates safe hreflang tags with validation
 */
export function generateSafeHreflang(currentPath, availableLanguages, primaryDomain) {
  const hreflangTags = [];

  // Add validated language versions
  availableLanguages.forEach(({ lang, domain, exists }) => {
    if (exists) {
      hreflangTags.push({
        rel: 'alternate',
        hreflang: lang,
        href: `https://${domain}${currentPath}`
      });
    }
  });

  // Always add x-default (fallback)
  hreflangTags.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `https://${primaryDomain}${currentPath}`
  });

  return hreflangTags;
}
```

---

### Sitemap Coordination Across Deployments

Each deployment should generate its own sitemap, but include references to alternate language versions:

**sitemap-[lang].xml structure:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- English deployment sitemap -->
  <url>
    <loc>https://[client-domain].com/blog/excavator-guide</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>

    <!-- Hreflang in sitemap (optional but recommended) -->
    <xhtml:link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide"/>
    <xhtml:link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide"/>
    <xhtml:link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide"/>
  </url>

</urlset>
```

**Astro Sitemap Integration:**

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getDeployConfig } from './config/deploy-config.js';

const BUILD_LANG = process.env.BUILD_LANG || 'en';
const deployConfig = getDeployConfig(BUILD_LANG);

export default defineConfig({
  site: `https://${deployConfig.domain}`,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: deployConfig.defaultLocale,
        locales: deployConfig.locales.reduce((acc, locale) => {
          acc[locale] = locale;
          return acc;
        }, {})
      },
      // Custom sitemap generation with hreflang
      serialize(item) {
        // Add hreflang links to each sitemap entry
        item.links = deployConfig.locales.map(locale => ({
          lang: locale,
          url: item.url.replace(deployConfig.domain, DOMAIN_MAP[locale])
        }));
        return item;
      }
    })
  ]
});
```

---

### Pre-Deployment Hreflang Validation Checklist

**Before deploying any language version:**

- [ ] All hreflang tags include self-reference
- [ ] All hreflang URLs are absolute (start with https://)
- [ ] All hreflang URLs use HTTPS (not HTTP)
- [ ] Trailing slash usage is consistent across all URLs
- [ ] x-default points to primary domain for ALL deployments
- [ ] Canonical URL points to self (not to other domain)
- [ ] All referenced translations actually exist (no 404s)
- [ ] URL paths match exactly across all language deployments
- [ ] Each deployment includes ALL available language versions
- [ ] Sitemap includes hreflang references

**Automated Pre-Deployment Check:**

```bash
#!/bin/bash
# scripts/validate-before-deploy.sh

echo "🔍 Validating hreflang configuration..."

# Check 1: Verify hreflang implementation exists
if ! grep -r "hreflang" src/components/SEOHead.astro > /dev/null; then
  echo "❌ Hreflang implementation not found in SEOHead.astro"
  exit 1
fi

# Check 2: Verify all translations have matching filenames
for lang in en zh ms; do
  echo "Checking $lang translations..."
  if [ ! -d "content/$lang/blogs" ]; then
    echo "⚠️  Warning: content/$lang/blogs directory not found"
  fi
done

# Check 3: Verify domain configuration
if ! grep -r "DOMAIN_MAP" src/components/HreflangTags.astro > /dev/null; then
  echo "❌ DOMAIN_MAP not found in HreflangTags.astro"
  exit 1
fi

echo "✅ Pre-deployment validation passed"
```

**Run before every deployment:**
```bash
npm run validate:hreflang && npm run build:en
```

---

### Post-Deployment Testing Procedures

**Step 1: Verify Each Deployment Separately**
```bash
# Test English deployment
curl -s https://[client-domain].com/blog/test-post | grep hreflang | wc -l
# Expected: 4 lines (en, zh, ms, x-default)

# Test Chinese deployment
curl -s https://zh.[client-domain].com/blog/test-post | grep hreflang | wc -l
# Expected: 4 lines

# Test Malay deployment
curl -s https://ms.[client-domain].com/blog/test-post | grep hreflang | wc -l
# Expected: 4 lines
```

**Step 2: Verify Bidirectional Links**
```bash
# Check that English page links to Chinese
curl -s https://[client-domain].com/blog/test-post | grep 'hreflang="zh"'
# Should return: <link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/test-post" />

# Check that Chinese page links back to English
curl -s https://zh.[client-domain].com/blog/test-post | grep 'hreflang="en"'
# Should return: <link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/test-post" />
```

**Step 3: Verify No 404s**
```bash
# Extract all hreflang URLs and test them
curl -s https://[client-domain].com/blog/test-post | \
  grep -o 'hreflang="[^"]*" href="[^"]*"' | \
  grep -o 'https://[^"]*' | \
  xargs -I {} curl -I -s {} | grep "HTTP"
```

**Step 4: Google Search Console Verification**
1. Wait 24-48 hours after deployment
2. Check each domain's Search Console property
3. Navigate to: Coverage > Valid with warnings
4. Look for: "Alternate page with proper canonical tag"
5. Verify no hreflang errors in International Targeting tab

---

### Handling Deployment-Specific Issues

**Issue 1: One deployment has hreflang errors**

**Diagnosis:**
```bash
# Check if affected deployment's build included hreflang component
curl -s https://problem-domain.com/any-page | grep hreflang
```

**Solution:**
```bash
# Rebuild affected deployment with correct environment variables
cd clients/[client-name]/website
BUILD_LANG=zh npm run build
vercel --prod
```

**Issue 2: URLs don't match across deployments**

**Diagnosis:**
```bash
# Compare URL structures
curl -s https://[client-domain].com/sitemap.xml | grep "<loc>"
curl -s https://zh.[client-domain].com/sitemap.xml | grep "<loc>"
```

**Solution:**
- Ensure Astro routing configuration is identical across all builds
- Verify `astro.config.mjs` doesn't have language-specific path overrides
- Check for hardcoded URLs in components

**Issue 3: Missing translations causing broken hreflang**

**Diagnosis:**
```bash
# Test each hreflang URL
curl -I https://zh.[client-domain].com/blog/new-post
# Returns: 404 Not Found
```

**Solution:**
```javascript
// Implement translation existence check before adding hreflang
async function shouldIncludeHreflang(lang, path) {
  try {
    const response = await fetch(`https://${DOMAIN_MAP[lang]}${path}`, { method: 'HEAD' });
    return response.status === 200;
  } catch {
    return false;
  }
}
```

---

### Multi-Domain Hreflang Testing Tool

**Complete Testing Script:**

```javascript
// scripts/test-hreflang-production.js
import { JSDOM } from 'jsdom';

const DEPLOYMENTS = [
  { lang: 'en', domain: '[client-domain].com' },
  { lang: 'zh', domain: 'zh.[client-domain].com' },
  { lang: 'ms', domain: 'ms.[client-domain].com' }
];

const TEST_PATHS = [
  '/blog/excavator-guide',
  '/equipment/forklift',
  '/about'
];

async function testHreflangConfiguration() {
  console.log('🧪 Testing hreflang configuration across all deployments\n');

  let errors = 0;

  for (const testPath of TEST_PATHS) {
    console.log(`\nTesting path: ${testPath}`);
    console.log('='.repeat(60));

    for (const deployment of DEPLOYMENTS) {
      const url = `https://${deployment.domain}${testPath}`;
      console.log(`\n📍 ${deployment.lang.toUpperCase()} deployment: ${url}`);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.error(`  ❌ HTTP ${response.status} - Page not accessible`);
          errors++;
          continue;
        }

        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Extract hreflang tags
        const hreflangTags = Array.from(
          document.querySelectorAll('link[rel="alternate"][hreflang]')
        );

        console.log(`  Found ${hreflangTags.length} hreflang tags`);

        // Test 1: Self-reference exists
        const hasSelfReference = hreflangTags.some(
          tag => tag.getAttribute('hreflang') === deployment.lang
        );
        console.log(`  ${hasSelfReference ? '✅' : '❌'} Self-reference (hreflang="${deployment.lang}")`);
        if (!hasSelfReference) errors++;

        // Test 2: All languages present
        const languages = hreflangTags.map(tag => tag.getAttribute('hreflang'));
        const hasAllLanguages = DEPLOYMENTS.every(d => languages.includes(d.lang));
        console.log(`  ${hasAllLanguages ? '✅' : '❌'} All languages present`);
        if (!hasAllLanguages) errors++;

        // Test 3: x-default present
        const hasXDefault = languages.includes('x-default');
        console.log(`  ${hasXDefault ? '✅' : '❌'} x-default present`);
        if (!hasXDefault) errors++;

        // Test 4: All URLs are absolute HTTPS
        const allAbsoluteHttps = hreflangTags.every(tag => {
          const href = tag.getAttribute('href');
          return href && href.startsWith('https://');
        });
        console.log(`  ${allAbsoluteHttps ? '✅' : '❌'} All URLs are absolute HTTPS`);
        if (!allAbsoluteHttps) errors++;

        // Test 5: Bidirectional linking
        console.log('  Testing bidirectional links:');
        for (const otherDeployment of DEPLOYMENTS) {
          if (otherDeployment.lang === deployment.lang) continue;

          const linkToOther = hreflangTags.find(
            tag => tag.getAttribute('hreflang') === otherDeployment.lang
          );

          if (linkToOther) {
            const otherUrl = linkToOther.getAttribute('href');
            const otherResponse = await fetch(otherUrl, { method: 'HEAD' });

            if (otherResponse.ok) {
              console.log(`    ✅ ${otherDeployment.lang}: ${otherUrl} (HTTP ${otherResponse.status})`);
            } else {
              console.log(`    ❌ ${otherDeployment.lang}: ${otherUrl} (HTTP ${otherResponse.status})`);
              errors++;
            }
          } else {
            console.log(`    ❌ ${otherDeployment.lang}: Missing hreflang tag`);
            errors++;
          }
        }

        // Test 6: Canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
          const canonicalUrl = canonical.getAttribute('href');
          const isCorrect = canonicalUrl.includes(deployment.domain);
          console.log(`  ${isCorrect ? '✅' : '❌'} Canonical: ${canonicalUrl}`);
          if (!isCorrect) {
            console.log(`    ⚠️  Expected canonical to include: ${deployment.domain}`);
            errors++;
          }
        } else {
          console.log(`  ⚠️  No canonical tag found`);
        }

      } catch (error) {
        console.error(`  ❌ Error: ${error.message}`);
        errors++;
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Test Results: ${errors === 0 ? '✅ All tests passed!' : `❌ ${errors} error(s) found`}`);

  return errors === 0 ? 0 : 1;
}

// Run tests
testHreflangConfiguration()
  .then(exitCode => process.exit(exitCode))
  .catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
```

**Run after every deployment:**
```bash
npm install jsdom
node scripts/test-hreflang-production.js
```

---

### Quick Reference: Hreflang Best Practices

**DO:**
- ✅ Include self-referencing hreflang on every page
- ✅ Use absolute URLs with HTTPS
- ✅ Be consistent with trailing slashes
- ✅ Include x-default pointing to primary domain
- ✅ Verify bidirectional linking between deployments
- ✅ Test all hreflang URLs return 200 status
- ✅ Keep URL paths identical across language deployments
- ✅ Set canonical to self on each deployment

**DON'T:**
- ❌ Use relative URLs in hreflang tags
- ❌ Mix HTTP and HTTPS protocols
- ❌ Point canonical to a different domain
- ❌ Link to non-existent translations (404s)
- ❌ Use inconsistent URL paths across deployments
- ❌ Forget to include the page's own language
- ❌ Have different x-default values per deployment
- ❌ Deploy without testing hreflang implementation

---

## Execution Checklist

### Initial Setup (Website Generation Agent)
1. ✅ Create `/content/` with language folders
2. ✅ Create `/website/` with single codebase
3. ✅ Create `/config/deploy-*.json` for each language
4. ✅ Setup Astro i18n configuration
5. ✅ Create deployment branches (deploy-en, deploy-zh, deploy-ms)
6. ✅ Create Vercel projects (one per language)
7. ✅ Configure domains

### Daily Publishing (Publishing Agent)
1. Find approved content (A/ files)
2. Copy to `/content/[lang]/blogs/`
3. Commit to main
4. Push to ALL deployment branches
5. Vercel auto-deploys (parallel)
6. Archive published files

---

## Success Criteria

✅ Content written once (no duplication)
✅ Each deployment has correct default language
✅ Language switcher works across all deployments
✅ SEO optimized (hreflang, sitemaps, lang attributes)
✅ Easy to add new languages (10 min setup)
✅ Single command deploys all versions (`npm run deploy:all`)
✅ Parallel Vercel builds (5 min total, not N×5 min)
✅ Scalable to N languages

---

## Agent Usage

This skill is used by:
- **Website Generation Agent** (initial setup)
- **Publishing Agent** (daily deployment)

## Integration Points

- `website-generation.md` → Creates multi-language structure
- `publishing-workflow.md` → Deploys to all language versions
- `daily-seo-content.md` → Generates content for all languages

---

**This architecture eliminates duplication while enabling multiple language-specific deployments! 🚀**

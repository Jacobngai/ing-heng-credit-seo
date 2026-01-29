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

**Each deployment generates hreflang pointing to other deployments:**

**On [client-domain].com/blog/excavator-guide:**
```html
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/excavator-guide" />
```

**On zh.[client-domain].com/blog/excavator-guide:**
```html
<link rel="alternate" hreflang="zh" href="https://zh.[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="en" href="https://[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="ms" href="https://ms.[client-domain].com/blog/excavator-guide" />
<link rel="alternate" hreflang="x-default" href="https://[client-domain].com/blog/excavator-guide" />
```

**Benefit:** Google knows all 3 versions are related, serves correct one to users based on language preference.

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

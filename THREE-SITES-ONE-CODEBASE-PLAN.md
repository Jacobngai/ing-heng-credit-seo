# THREE SITES, ONE CODEBASE - IMPLEMENTATION PLAN
## Smart Multi-Domain Strategy with Environment-Based Language Defaults

**Version:** 1.0
**Date:** 2025-10-18
**Status:** RECOMMENDED APPROACH ✅

---

## EXECUTIVE SUMMARY

Deploy the **SAME codebase** to **3 different domains**, each with a **different default language**. All sites have all 3 languages available, but users land on different defaults based on which domain they visit.

### The Result:
- 🇲🇾 **inghengcredit.com.my** → Defaults to Malay (`/ms/`)
- 🇬🇧 **inghengcredit.com** → Defaults to English (`/en/`)
- 🇨🇳 **inghengcredit.cn** → Defaults to Chinese (`/zh/`)

**All three sites have ALL languages available via language switcher!**

---

## WHY THIS IS BRILLIANT

| Benefit | Explanation |
|---------|-------------|
| **Client Happy** | "We have 3 websites!" ✓ |
| **Developer Happy** | Only 1 codebase to maintain ✓ |
| **SEO Happy** | Cross-domain hreflang + local domains ✓ |
| **Cost Efficient** | No monorepo complexity ✓ |
| **Fast Implementation** | 2-3 hours total ✓ |
| **Easy Updates** | Change once, deploy everywhere ✓ |

---

## IMPLEMENTATION STEPS

### Step 1: Update Astro Config for Environment Variables

**File:** `website/astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Read environment variables
const DEFAULT_LOCALE = process.env.PUBLIC_DEFAULT_LOCALE || 'en';
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://ingheng-credit.vercel.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: {
          en: 'en-MY',
          zh: 'zh-Hans-MY',
          ms: 'ms-MY',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: ['en', 'zh', 'ms'],
    routing: {
      prefixDefaultLocale: true
    }
  },
});
```

### Step 2: Update Root Redirect Page

**File:** `website/src/pages/index.astro`

```astro
---
// Root redirect page - redirects to environment-specific default language
const defaultLocale = import.meta.env.PUBLIC_DEFAULT_LOCALE || 'en';
return Astro.redirect(`/${defaultLocale}/`);
---
```

### Step 3: Create Environment Files (Optional for Local Testing)

**File:** `website/.env.ms` (Malay Default)
```env
PUBLIC_DEFAULT_LOCALE=ms
PUBLIC_SITE_URL=https://inghengcredit.com.my
```

**File:** `website/.env.en` (English Default)
```env
PUBLIC_DEFAULT_LOCALE=en
PUBLIC_SITE_URL=https://inghengcredit.com
```

**File:** `website/.env.zh` (Chinese Default)
```env
PUBLIC_DEFAULT_LOCALE=zh
PUBLIC_SITE_URL=https://inghengcredit.cn
```

### Step 4: Update Language Switcher Component

**File:** `website/src/components/LanguageSwitcher.astro`

Add smart domain detection:

```javascript
---
// Get current path and locale
const currentPath = Astro.url.pathname;
const currentLocale = Astro.currentLocale || 'en';

// Determine which domain we're on
const hostname = Astro.url.hostname;
const isMainDomain = hostname.includes('.com.my');
const isEnglishDomain = hostname.includes('.com') && !hostname.includes('.com.my');
const isChineseDomain = hostname.includes('.cn');

// Language links that preserve current domain
const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    href: currentPath.replace(/^\/(en|zh|ms)/, '/en')
  },
  {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳',
    href: currentPath.replace(/^\/(en|zh|ms)/, '/zh')
  },
  {
    code: 'ms',
    name: 'Bahasa',
    flag: '🇲🇾',
    href: currentPath.replace(/^\/(en|zh|ms)/, '/ms')
  },
];
---
```

---

## VERCEL DEPLOYMENT SETUP

### Method 1: Via Vercel Dashboard (RECOMMENDED)

#### Project 1: Malay Site (inghengcredit.com.my)

1. **Go to Vercel Dashboard** → "Add New Project"
2. **Import Git Repository** → Select your repo
3. **Configure Project:**
   - **Project Name:** `ing-heng-malay`
   - **Framework Preset:** Astro
   - **Root Directory:** `website`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. **Environment Variables (CRITICAL):**
   ```
   PUBLIC_DEFAULT_LOCALE = ms
   PUBLIC_SITE_URL = https://inghengcredit.com.my
   ```

5. **Add Domain:**
   - Go to Settings → Domains
   - Add: `inghengcredit.com.my`
   - Add: `www.inghengcredit.com.my`

#### Project 2: English Site (inghengcredit.com)

1. **Create Second Project** → "Add New Project"
2. **Import SAME Repository** (Yes, same repo!)
3. **Configure Project:**
   - **Project Name:** `ing-heng-english`
   - **Same build settings as above**

4. **Environment Variables:**
   ```
   PUBLIC_DEFAULT_LOCALE = en
   PUBLIC_SITE_URL = https://inghengcredit.com
   ```

5. **Add Domain:**
   - Add: `inghengcredit.com`
   - Add: `www.inghengcredit.com`

#### Project 3: Chinese Site (inghengcredit.cn)

1. **Create Third Project** → "Add New Project"
2. **Import SAME Repository** (Yes, again!)
3. **Configure Project:**
   - **Project Name:** `ing-heng-chinese`
   - **Same build settings**

4. **Environment Variables:**
   ```
   PUBLIC_DEFAULT_LOCALE = zh
   PUBLIC_SITE_URL = https://inghengcredit.cn
   ```

5. **Add Domain:**
   - Add: `inghengcredit.cn`
   - Add: `www.inghengcredit.cn`
   - **Note:** Requires ICP license for China

---

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy Malay Site
cd website
vercel --name ing-heng-malay
# When prompted, add these env vars:
# PUBLIC_DEFAULT_LOCALE=ms
# PUBLIC_SITE_URL=https://inghengcredit.com.my

# Deploy English Site (same folder!)
vercel --name ing-heng-english
# Add env vars:
# PUBLIC_DEFAULT_LOCALE=en
# PUBLIC_SITE_URL=https://inghengcredit.com

# Deploy Chinese Site (same folder!)
vercel --name ing-heng-chinese
# Add env vars:
# PUBLIC_DEFAULT_LOCALE=zh
# PUBLIC_SITE_URL=https://inghengcredit.cn
```

---

## DOMAIN SETUP

### Step 1: Register Domains

| Domain | Registrar | Cost/Year | Notes |
|--------|-----------|-----------|-------|
| inghengcredit.com | Namecheap | $12 | For English |
| inghengcredit.com.my | MYNIC | $30 | For Malay |
| inghengcredit.cn | Aliyun | $60 | Needs ICP license |

**Alternative (if .cn is problematic):**
- Use `inghengcredit.asia` for Chinese ($15/year, no ICP needed)

### Step 2: Configure DNS

For each domain, add these DNS records:

```
Type  Name  Value
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### Step 3: Verify in Vercel

Each project will show domain verification steps. Follow them.

---

## LOCAL TESTING

### Test Different Defaults Locally

```bash
# Test Malay default
cd website
PUBLIC_DEFAULT_LOCALE=ms npm run dev

# Test English default (new terminal)
PUBLIC_DEFAULT_LOCALE=en npm run dev

# Test Chinese default (new terminal)
PUBLIC_DEFAULT_LOCALE=zh npm run dev
```

### Build Testing

```bash
# Build with Malay default
PUBLIC_DEFAULT_LOCALE=ms npm run build
npm run preview

# Build with English default
PUBLIC_DEFAULT_LOCALE=en npm run build
npm run preview

# Build with Chinese default
PUBLIC_DEFAULT_LOCALE=zh npm run build
npm run preview
```

---

## HREFLANG SETUP (CRITICAL FOR SEO)

### Update SEOHead Component

**File:** `website/src/components/SEOHead.astro`

Add cross-domain hreflang tags:

```astro
---
const { title, description, locale } = Astro.props;

// Get current page path without locale
const path = Astro.url.pathname.replace(/^\/(en|zh|ms)/, '');

// Generate hreflang URLs for all domains
const hreflangUrls = [
  { lang: 'en-MY', url: `https://inghengcredit.com/en${path}` },
  { lang: 'zh-Hans-MY', url: `https://inghengcredit.cn/zh${path}` },
  { lang: 'ms-MY', url: `https://inghengcredit.com.my/ms${path}` },
];
---

<!-- Hreflang tags for cross-domain language versions -->
{hreflangUrls.map(({ lang, url }) => (
  <link rel="alternate" hreflang={lang} href={url} />
))}
<link rel="alternate" hreflang="x-default" href={`https://inghengcredit.com/en${path}`} />
```

---

## AUTOMATIC DEPLOYMENT SETUP

### GitHub Actions (Optional but Recommended)

**File:** `.github/workflows/deploy-all.yml`

```yaml
name: Deploy All Sites

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        site:
          - name: malay
            project_id: ${{ secrets.VERCEL_PROJECT_ID_MS }}
          - name: english
            project_id: ${{ secrets.VERCEL_PROJECT_ID_EN }}
          - name: chinese
            project_id: ${{ secrets.VERCEL_PROJECT_ID_ZH }}

    steps:
      - uses: actions/checkout@v3

      - name: Deploy ${{ matrix.site.name }}
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ matrix.site.project_id }}
          working-directory: ./website
```

---

## TESTING CHECKLIST

### For Each Domain, Test:

- [ ] **Homepage Redirect**
  - [ ] `.com.my/` → redirects to `/ms/`
  - [ ] `.com/` → redirects to `/en/`
  - [ ] `.cn/` → redirects to `/zh/`

- [ ] **Language Switcher**
  - [ ] Can switch from MS → EN → ZH on any domain
  - [ ] URLs update correctly
  - [ ] Content changes appropriately

- [ ] **Direct URL Access**
  - [ ] `.com.my/en/` → Shows English (accessible!)
  - [ ] `.com/ms/` → Shows Malay (accessible!)
  - [ ] `.cn/en/` → Shows English (accessible!)

- [ ] **SEO Tags**
  - [ ] Check hreflang tags point to correct domains
  - [ ] Check canonical URLs are correct
  - [ ] Check sitemap includes all languages

- [ ] **404 Handling**
  - [ ] Invalid URLs redirect appropriately
  - [ ] 404 page shows in correct language

---

## COST COMPARISON

| Approach | Setup Time | Annual Cost | Maintenance |
|----------|------------|-------------|-------------|
| **This Solution** | 3 hours | $102 | Easy - 1 codebase |
| **True Monorepo** | 70 hours | $7,330+ | Hard - 3 codebases |
| **Single Domain** | 0 hours | $18 | Easiest |

---

## FAQ

### Q: Will all 3 sites rank separately in Google?
**A:** Yes! Each domain builds its own authority. Use hreflang tags to tell Google they're related but different language versions.

### Q: Can users still access other languages from each domain?
**A:** Yes! That's the beauty. `.com.my/en/` still works, just defaults to Malay.

### Q: What if we want to hide other languages per domain later?
**A:** Easy config change. Add middleware to redirect or 404 non-default languages.

### Q: Do we need 3 separate Git branches?
**A:** No! Same branch, same code. Vercel handles everything via environment variables.

### Q: What about staging/preview environments?
**A:** Each Vercel project gets its own preview URLs automatically.

---

## QUICK START COMMANDS

```bash
# 1. Update your code with environment variable support
cd website
# Edit astro.config.mjs and index.astro as shown above

# 2. Test locally
PUBLIC_DEFAULT_LOCALE=ms npm run dev

# 3. Deploy to Vercel (3 times)
vercel --name ing-heng-malay
vercel --name ing-heng-english
vercel --name ing-heng-chinese

# 4. Add environment variables in Vercel Dashboard
# 5. Add domains in Vercel Dashboard
# 6. Update DNS records
# 7. Done! 🎉
```

---

## TROUBLESHOOTING

### Issue: Wrong language showing
**Fix:** Check environment variables in Vercel project settings

### Issue: Deployment failing
**Fix:** Ensure `website` is set as root directory in Vercel

### Issue: Domain not working
**Fix:** Wait 24-48 hours for DNS propagation

### Issue: Language switcher broken
**Fix:** Check the regex pattern in LanguageSwitcher component

---

## NEXT STEPS

1. **Immediate (Today):**
   - [ ] Update astro.config.mjs with env variable support
   - [ ] Update index.astro redirect logic
   - [ ] Create 3 Vercel projects

2. **Tomorrow:**
   - [ ] Register domains (.com, .com.my)
   - [ ] Configure DNS
   - [ ] Add environment variables

3. **This Week:**
   - [ ] Test all language switching
   - [ ] Verify hreflang implementation
   - [ ] Submit sitemaps to Google

4. **Next Week:**
   - [ ] Monitor analytics per domain
   - [ ] Set up Google Search Console for each domain
   - [ ] Start domain-specific SEO campaigns

---

## CONCLUSION

This approach gives you:
- ✅ "3 websites" to satisfy client requirements
- ✅ Single codebase for easy maintenance
- ✅ Proper SEO with local domains
- ✅ Cost-effective solution
- ✅ Professional implementation
- ✅ Flexibility to adjust later

**Total Implementation Time: 2-3 hours**
**Total Cost: $102/year (just domains)**

---

**Document Version:** 1.0
**Last Updated:** 2025-10-18
**Status:** Ready for Implementation

<function_calls>
<invoke name="Read">
<parameter name="file_path">C:\Users\Vivobook\OneDrive\Desktop\ING HENG CREDIT\website\astro.config.mjs
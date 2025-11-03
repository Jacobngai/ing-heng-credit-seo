# Multi-Language Vercel Deployment Rules

**Last Updated**: 2025-11-03
**Project**: Ing Heng Credit SEO Website

## Critical Rules for Multi-Language Deployment

### 1. Environment Variables in Vercel Dashboard

**ALWAYS set these environment variables for EACH project:**

```
EN Project (ingheng-credit-en):
├── PUBLIC_DEFAULT_LOCALE=en
├── DEFAULT_LOCALE=en
├── PUBLIC_SITE_URL=https://ingheng-credit-en.vercel.app
└── SITE_URL=https://ingheng-credit-en.vercel.app

MS Project (ingheng-credit-ms):
├── PUBLIC_DEFAULT_LOCALE=ms
├── DEFAULT_LOCALE=ms
├── PUBLIC_SITE_URL=https://ingheng-credit-ms.vercel.app
└── SITE_URL=https://ingheng-credit-ms.vercel.app

ZH Project (ingheng-credit-zh):
├── PUBLIC_DEFAULT_LOCALE=zh
├── DEFAULT_LOCALE=zh
├── PUBLIC_SITE_URL=https://ingheng-credit-zh.vercel.app
└── SITE_URL=https://ingheng-credit-zh.vercel.app
```

⚠️ **IMPORTANT**:
- Set these in Vercel Dashboard → Project Settings → Environment Variables
- Apply to ALL environments (Production, Preview, Development)
- **NO trailing spaces or newlines** - Vercel won't trim them automatically!

### 2. Astro i18n Configuration Rules

**Dynamic Fallback Configuration** (REQUIRED):

```javascript
// ❌ WRONG - Hardcoded fallback causes errors when default locale changes
fallback: {
  zh: 'en',
  ms: 'en',
}

// ✅ CORRECT - Dynamic fallback based on DEFAULT_LOCALE
fallback: Object.fromEntries(
  ALL_LOCALES
    .filter(loc => loc !== DEFAULT_LOCALE)
    .map(loc => [loc, DEFAULT_LOCALE])
)
```

**Why?** Astro throws error: "You can't use the default locale as a key" when the default locale appears in the fallback object as a key.

### 3. Root Page Redirect Rules

**Dynamic Redirect in `src/pages/index.astro`:**

```astro
---
// ❌ WRONG - Hardcoded redirect always goes to English
return Astro.redirect('/en/', 301);

// ✅ CORRECT - Dynamic redirect based on environment variable
const defaultLocale = import.meta.env.PUBLIC_DEFAULT_LOCALE || 'en';
return Astro.redirect(`/${defaultLocale}/`, 301);
---
```

**Why?** Each Vercel project needs to redirect to its own default language.

### 4. Deployment Method Rules

**NEVER use Vercel CLI `--name` flag** (it's deprecated):

```bash
# ❌ WRONG - Will deploy to wrong project
vercel --prod --name ingheng-credit-en

# ✅ CORRECT - Deploy from Vercel Dashboard
# Go to: https://vercel.com/[team]/[project]/deployments
# Click "Redeploy" button
```

**Why?** The `--name` flag is deprecated and doesn't work reliably. All CLI deployments might go to the same project.

### 5. Build Command Configuration

**DO NOT set Build Command Override in Vercel Dashboard** for this setup.

**Why?**
- We use environment variables to control which language is built
- Build command is always `npm run build` (default)
- The `astro.config.mjs` reads `PUBLIC_DEFAULT_LOCALE` to configure itself dynamically

### 6. File Structure Rules

**One codebase, multiple Vercel projects:**

```
clients/ing-heng/website/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Dynamic redirect based on PUBLIC_DEFAULT_LOCALE
│   │   ├── en/                  # English pages
│   │   ├── ms/                  # Malay pages
│   │   └── zh/                  # Chinese pages
│   └── ...
├── astro.config.mjs             # Dynamic config reads environment variables
└── package.json                 # Single build script: "build": "astro build"

Vercel Projects (separate):
├── ingheng-credit-en   → Sets PUBLIC_DEFAULT_LOCALE=en
├── ingheng-credit-ms   → Sets PUBLIC_DEFAULT_LOCALE=ms
└── ingheng-credit-zh   → Sets PUBLIC_DEFAULT_LOCALE=zh
```

### 7. Troubleshooting Common Errors

#### Error: "Headers.append: '/en\n/' is an invalid header value"
**Cause**: Trailing newline in environment variable
**Fix**: Edit the environment variable in Vercel Dashboard and remove any trailing spaces/newlines

#### Error: "You can't use the default locale as a key"
**Cause**: Static fallback configuration in `astro.config.mjs`
**Fix**: Use dynamic fallback (see Rule #2)

#### Error: All deployments going to same project
**Cause**: Using deprecated `--name` flag in Vercel CLI
**Fix**: Deploy from Vercel Dashboard instead (see Rule #4)

#### Error: Wrong language showing after deployment
**Cause**: Environment variables not set or not applied
**Fix**:
1. Verify environment variables in Vercel Dashboard
2. Redeploy from Dashboard (not CLI) to pick up new env vars

### 8. Testing Checklist

After deployment, test each project:

```bash
# EN Project
curl -I https://ingheng-credit-en.vercel.app
# Should redirect to: /en/

# MS Project
curl -I https://ingheng-credit-ms.vercel.app
# Should redirect to: /ms/

# ZH Project
curl -I https://ingheng-credit-zh.vercel.app
# Should redirect to: /zh/
```

### 9. Git Workflow

**Single repository, same code for all languages:**

```bash
# Make changes in clients/ing-heng/website/
git add .
git commit -m "Your change"
git push

# Then manually redeploy all 3 projects from Vercel Dashboard
# 1. https://vercel.com/.../ingheng-credit-en/deployments → Redeploy
# 2. https://vercel.com/.../ingheng-credit-ms/deployments → Redeploy
# 3. https://vercel.com/.../ingheng-credit-zh/deployments → Redeploy
```

### 10. Custom Domain Rules

**For production custom domain (`inghengcredit.my`):**

Option A: Single primary language
- `inghengcredit.my` → Point to EN project
- `ms.inghengcredit.my` → Point to MS project
- `zh.inghengcredit.my` → Point to ZH project

Option B: Path-based routing (requires different architecture)
- Deploy all languages to one project
- Use `/en/`, `/ms/`, `/zh/` paths

**Current setup uses Option A** - Multiple domains, one language per domain.

---

## Quick Reference Commands

```bash
# Check environment variables
# Go to: https://vercel.com/[team]/[project]/settings/environment-variables

# Redeploy a project
# Go to: https://vercel.com/[team]/[project]/deployments
# Click "Redeploy" on latest deployment

# Test redirect
curl -I https://ingheng-credit-[LANG].vercel.app/

# View build logs
# Go to: https://vercel.com/[team]/[project]/deployments/[deployment-id]
```

---

## Contact & Support

- GitHub Repo: https://github.com/Jacobngai/ing-heng-credit-seo
- Vercel Team: ngsanzen-gmailcoms-projects
- Projects:
  - EN: https://vercel.com/ngsanzen-gmailcoms-projects/ingheng-credit-en
  - MS: https://vercel.com/ngsanzen-gmailcoms-projects/ingheng-credit-ms
  - ZH: https://vercel.com/ngsanzen-gmailcoms-projects/ingheng-credit-zh

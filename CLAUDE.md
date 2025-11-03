- 🚨 CRITICAL RULES - Multi-Language Vercel Deployment

  1. Environment Variables (Vercel Dashboard)

  Each project MUST have:
  - PUBLIC_DEFAULT_LOCALE = en | ms | zh (NO trailing newlines!)
  - DEFAULT_LOCALE = en | ms | zh
  - PUBLIC_SITE_URL = project URL
  - SITE_URL = project URL

  2. Astro i18n Fallback (astro.config.mjs)

  // ✅ MUST be dynamic - never hardcode
  fallback: Object.fromEntries(
    ALL_LOCALES
      .filter(loc => loc !== DEFAULT_LOCALE)
      .map(loc => [loc, DEFAULT_LOCALE])
  )

  3. Root Redirect (src/pages/index.astro)

  // ✅ MUST use environment variable
  const defaultLocale = import.meta.env.PUBLIC_DEFAULT_LOCALE || 'en';
  return Astro.redirect(`/${defaultLocale}/`, 301);

  4. Deployment

  - ❌ NEVER use vercel --name (deprecated)
  - ✅ ALWAYS deploy from Vercel Dashboard → Deployments → Redeploy

  5. Architecture

  - One GitHub repo
  - Same code for all languages
  - 3 separate Vercel projects (EN, MS, ZH)
  - Each project reads PUBLIC_DEFAULT_LOCALE to configure itself

  Full rules: See MULTI-LANGUAGE-DEPLOYMENT-RULES.md in repo root
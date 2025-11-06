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
  - ❌ NEVER use GitHub auto-deployment (we do manual deployments)
  - ✅ ALWAYS use manual CLI deployment method below

  **Manual Deployment Process (3 Projects):**

  ```bash
  # 1. DEPLOY ENGLISH (EN)
  # Update .vercel/project.json to EN project
  echo '{"projectId":"prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > clients/ing-heng/website/.vercel/project.json

  # Deploy to production with EN environment variables
  cd clients/ing-heng/website
  vercel --prod --yes \
    --env PUBLIC_DEFAULT_LOCALE=en \
    --env DEFAULT_LOCALE=en \
    --env PUBLIC_SITE_URL=https://www.inghengcredit.com \
    --env SITE_URL=https://www.inghengcredit.com

  # 2. DEPLOY MALAY (MS)
  # Update .vercel/project.json to MS project
  echo '{"projectId":"prj_eKJtQcTcOd69sER92xq8NeS1SD4y","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json

  # Deploy to production with MS environment variables
  vercel --prod --yes \
    --env PUBLIC_DEFAULT_LOCALE=ms \
    --env DEFAULT_LOCALE=ms \
    --env PUBLIC_SITE_URL=https://www.kreditloan.my \
    --env SITE_URL=https://www.kreditloan.my

  # 3. DEPLOY CHINESE (ZH)
  # Update .vercel/project.json to ZH project
  echo '{"projectId":"prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json

  # Deploy to production with ZH environment variables
  vercel --prod --yes \
    --env PUBLIC_DEFAULT_LOCALE=zh \
    --env DEFAULT_LOCALE=zh \
    --env PUBLIC_SITE_URL=https://www.inghengcredit.my \
    --env SITE_URL=https://www.inghengcredit.my
  ```

  **Project IDs:**
  - EN: prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw (www.inghengcredit.com)
  - MS: prj_eKJtQcTcOd69sER92xq8NeS1SD4y (www.kreditloan.my)
  - ZH: prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7 (www.inghengcredit.my)
  - Team ID: team_ZRACGuujUQkB6IRfNtWpe0T6

  5. Architecture

  - One GitHub repo
  - Same code for all languages
  - 3 separate Vercel projects (EN, MS, ZH)
  - Each project reads PUBLIC_DEFAULT_LOCALE to configure itself

  Full rules: See MULTI-LANGUAGE-DEPLOYMENT-RULES.md in repo root
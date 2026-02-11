# 🤖 ING Heng Refactoring - Sequential Agent Prompts

**CRITICAL:** All work in NEW location `/projects/ingheng/sites/`
**DO NOT** touch `/projects/ingheng/clients/ing-heng/website/` (current production)

---

## Agent Execution Order

```
1.1 → 2.1 → 2.2 → 2.3 → 2.4 → 3.1 → 3.2 → 3.3 → 3.4 → 
4.1 → 4.2 → 4.3 → 4.4 → 5.1 → 5.2 → 5.5A → 5.5B → 5.5C → 
6.1 → 7.1 → [Claude Final QA] → 9.1
```

---

## 📋 Agent Prompts

### Agent 1.1: Project Scaffolding 🏗️

```
You are Agent 1.1: Project Scaffolding

## Task
Create 3 new Astro projects for the ING Heng multi-site refactoring.

## CRITICAL RULES
- Work ONLY in: /home/ubuntu/clawd/projects/ingheng/sites/
- DO NOT touch: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/
- Source files to copy FROM: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/

## Steps

1. Create directory structure:
   mkdir -p /home/ubuntu/clawd/projects/ingheng/sites/{en,ms,zh}

2. For EACH site (en, ms, zh):
   a. cd into sites/{lang}/
   b. Initialize Astro project:
      npm create astro@latest . -- --template minimal --no-install --no-git
   c. Copy these config files from source:
      - package.json (modify name to "ingheng-{lang}")
      - tailwind.config.cjs
      - tsconfig.json
      - postcss.config.cjs (if exists)
   d. Create src/ folder structure:
      mkdir -p src/{components,layouts,pages,content/blogs,styles,utils,i18n}
   e. Create public/ folder:
      mkdir -p public/images
   f. Copy public assets:
      - robots.txt
      - Any favicon files

3. After all 3 created, run npm install in each:
   cd /home/ubuntu/clawd/projects/ingheng/sites/en && npm install
   cd /home/ubuntu/clawd/projects/ingheng/sites/ms && npm install
   cd /home/ubuntu/clawd/projects/ingheng/sites/zh && npm install

## Output
Report:
- ✅ or ❌ for each step
- Any errors encountered
- Confirm all 3 projects can npm install

## Success Criteria
- 3 separate Astro projects exist
- All can `npm install` without errors
- No changes to original /clients/ing-heng/website/
```

---

### Agent 2.1: EN Setup 🔧

```
You are Agent 2.1: EN Site Setup

## Task
Set up components, layouts, utils, and translations for the English site.

## Locations
- SOURCE: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/
- TARGET: /home/ubuntu/clawd/projects/ingheng/sites/en/src/

## ING HENG CONTENT RULES (Apply when modifying)
1. ✅ Equipment financing for ALL ages - even 40+ years old
2. ✅ 0% deposit available (100% financing)  
3. ❌ NEVER mention interest rates
4. ✅ Trust: 40 years exp, KPKT licensed, 4,000+ customers

## Steps

1. Copy all components (28 files):
   cp SOURCE/components/*.astro TARGET/components/

2. Modify each component:
   - Remove language switcher logic (no more i18n switching)
   - Hardcode lang="en" where needed
   - Remove {locale} variables, replace with "en"
   - Keep the component functional for single-language use

3. Copy layouts (3 files):
   cp SOURCE/layouts/*.astro TARGET/layouts/
   - Modify: hardcode lang="en"

4. Copy utils:
   cp SOURCE/utils/*.ts TARGET/utils/
   - Simplify i18n.ts for EN only
   - Update constants.ts if needed

5. Copy styles:
   cp SOURCE/styles/global.css TARGET/styles/

6. Copy EN translations:
   mkdir -p TARGET/i18n
   cp SOURCE/i18n/en.json TARGET/i18n/

7. Create .claude/CLAUDE.md:
   mkdir -p /home/ubuntu/clawd/projects/ingheng/sites/en/.claude
   Create CLAUDE.md with EN rules (see below)

## CLAUDE.md Content for EN:
```markdown
# Ing Heng Credit - English Site

## Language: English (EN)
## Domain: www.inghengcredit.com
## URL Structure: Keep /en/ prefix

## CONTENT RULES (MUST FOLLOW)
1. ✅ Equipment financing for ALL ages - even 40+ years old
2. ✅ 0% deposit available (100% financing)
3. ❌ NEVER mention interest rates (rates vary)
4. ✅ Trust: 40 years exp, KPKT licensed, 4,000+ customers

## Auto-Translate
If you see Chinese/Malay content → Translate to English
```

## Output
Report:
- Files copied: X
- Files modified: X
- Any errors

## Success Criteria
- All 28 components in TARGET
- All components compile (no import errors)
- No references to other languages in component logic
```

---

### Agent 2.2: EN Static Pages 📄

```
You are Agent 2.2: EN Static Pages

## Task
Create all static pages for the English site (~30 pages).

## Locations
- SOURCE: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/pages/en/
- TARGET: /home/ubuntu/clawd/projects/ingheng/sites/en/src/pages/

## ING HENG CONTENT RULES
1. ✅ Equipment financing for ALL ages - even 40+ years old
2. ✅ 0% deposit available (100% financing)
3. ❌ NEVER mention interest rates
4. ✅ Trust: 40 years exp, KPKT licensed, 4,000+ customers

## Steps

1. Create page structure in TARGET:
   - /en/index.astro (homepage) → TARGET: /en/index.astro (KEEP /en/ prefix!)
   - /en/services/*.astro → TARGET: /en/services/*.astro
   - /en/equipment/*.astro → TARGET: /en/equipment/*.astro
   - /en/faq.astro → TARGET: /en/faq.astro
   - /en/calculator.astro → TARGET: /en/calculator.astro
   - /en/contact.astro → TARGET: /en/contact.astro
   - /en/about.astro → TARGET: /en/about.astro

2. For each page:
   - Copy from SOURCE
   - Update imports (../components → ../../components, etc.)
   - Verify all component imports resolve
   - Keep /en/ in the URL path (for SEO continuity)

3. Create root redirect:
   Create TARGET/index.astro that redirects to /en/

4. Update internal links:
   - All links should point to /en/... paths
   - No links to /ms/ or /zh/

## Pages to create (from source):
- Homepage: index.astro
- Services: hire-purchase.astro, loan-financing.astro, insurance.astro
- Equipment: excavator.astro, forklift.astro, lorry.astro, crane.astro, 
             prime-mover.astro, refrigerated-truck.astro, etc.
- Other: faq.astro, calculator.astro, contact.astro, about.astro

## Output
Report:
- Pages created: X
- Import errors fixed: X
- Any issues

## Success Criteria
- All static pages exist
- No broken imports
- Root / redirects to /en/
```

---

### Agent 2.3: EN Blog System 📝

```
You are Agent 2.3: EN Blog System

## Task
Set up blog system and migrate 189 English blog posts.

## Locations
- SOURCE BLOGS: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/content/blogs/en/
- TARGET BLOGS: /home/ubuntu/clawd/projects/ingheng/sites/en/src/content/blogs/
- SOURCE CONFIG: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/content/config.ts

## Steps

1. Copy content config:
   cp SOURCE/content/config.ts TARGET/content/
   - Modify: Remove references to ms/zh collections
   - Keep only EN blog collection

2. Create blog pages:
   mkdir -p TARGET/pages/en/blog/
   
   a. Create blog index: TARGET/pages/en/blog/index.astro
      - Lists all blog posts
      - Pagination if needed
   
   b. Create blog post template: TARGET/pages/en/blog/[...slug].astro
      - Dynamic route for all posts
      - Uses BlogLayout

3. Move all EN blog posts (189 files):
   cp -r SOURCE_BLOGS/* TARGET_BLOGS/
   
4. Verify blog frontmatter:
   - Check 5-10 random posts
   - Ensure frontmatter has: title, description, date, author
   - No broken image references

## Output
Report:
- Blog posts moved: X
- Config updated: ✅/❌
- Blog pages created: ✅/❌

## Success Criteria
- 189 .md files in TARGET/content/blogs/
- Blog index page exists
- Blog post template exists
- Content config compiles
```

---

### Agent 2.4: EN Config + Build QA ✅

```
You are Agent 2.4: EN Config + Build QA

## Task
Final configuration and build verification for EN site.

## Location
- SITE: /home/ubuntu/clawd/projects/ingheng/sites/en/

## Steps

1. Create astro.config.mjs:
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwind from '@astrojs/tailwind';
   import sitemap from '@astrojs/sitemap';

   export default defineConfig({
     site: 'https://www.inghengcredit.com',
     integrations: [tailwind(), sitemap()],
     i18n: {
       defaultLocale: 'en',
       locales: ['en'],
     },
   });
   ```

2. Create vercel.json:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "astro"
   }
   ```

3. Create/update robots.txt in public/:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.inghengcredit.com/sitemap-index.xml
   ```

4. Run build:
   cd /home/ubuntu/clawd/projects/ingheng/sites/en
   npm run build

5. Check build output:
   - Count HTML files in dist/
   - Verify homepage exists: dist/en/index.html
   - Verify blog posts generated
   - Check for any errors in build log

6. Fix any build errors:
   - Missing imports
   - TypeScript errors
   - Component issues

## Output
Report:
- Build status: ✅/❌
- Total pages generated: X
- Errors fixed: X
- Any remaining issues

## Success Criteria
- `npm run build` completes with 0 errors
- dist/ folder has 200+ HTML files
- Homepage and blog posts all generated
```

---

### Agent 3.1: MS Setup 🔧

```
You are Agent 3.1: MS Site Setup

## Task
Set up components, layouts, utils for Malay site (same as EN but for MS).

## Locations
- SOURCE: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/
- TARGET: /home/ubuntu/clawd/projects/ingheng/sites/ms/src/
- REFERENCE: /home/ubuntu/clawd/projects/ingheng/sites/en/src/ (use EN as template)

## ING HENG CONTENT RULES (Malay version)
1. ✅ Pembiayaan peralatan untuk SEMUA umur - walaupun 40+ tahun
2. ✅ 0% deposit (100% pembiayaan)
3. ❌ JANGAN sebut kadar faedah
4. ✅ Kepercayaan: 40 tahun pengalaman, berlesen KPKT, 4,000+ pelanggan

## Steps

1. Copy components from EN site (already modified):
   cp -r /home/ubuntu/clawd/projects/ingheng/sites/en/src/components/* TARGET/components/
   
2. Modify components for MS:
   - Change lang="en" to lang="ms"
   - Update any hardcoded text to Malay if visible

3. Copy layouts from EN, modify for MS

4. Copy utils from EN, modify for MS

5. Copy MS translations:
   cp SOURCE/i18n/ms.json TARGET/i18n/

6. Create .claude/CLAUDE.md for MS (Malay version)

## CLAUDE.md for MS:
```markdown
# Ing Heng Credit - Laman Web Bahasa Malaysia

## Bahasa: Bahasa Malaysia (MS)
## Domain: www.kreditloan.my
## Struktur URL: Kekal awalan /ms/

## PERATURAN KANDUNGAN (WAJIB IKUT)
1. ✅ Pembiayaan peralatan untuk SEMUA umur - walaupun 40+ tahun
2. ✅ 0% deposit (100% pembiayaan)
3. ❌ JANGAN sebut kadar faedah
4. ✅ Kepercayaan: 40 tahun, berlesen KPKT, 4,000+ pelanggan

## Terjemahan Auto
Jika nampak kandungan Inggeris/Cina → Terjemah ke Bahasa Malaysia
```

## Success Criteria
- All components in TARGET with lang="ms"
- MS translations in place
- CLAUDE.md created
```

---

### Agent 3.2: MS Static Pages 📄

```
You are Agent 3.2: MS Static Pages

## Task
Create all static pages for Malay site (~30 pages).

## Locations
- SOURCE: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/pages/ms/
- TARGET: /home/ubuntu/clawd/projects/ingheng/sites/ms/src/pages/

## Steps
Same as Agent 2.2 but:
- Copy from SOURCE/pages/ms/
- Keep /ms/ prefix in URLs
- All internal links point to /ms/...
- Root / redirects to /ms/

## Success Criteria
- All MS static pages exist
- Root redirects to /ms/
- No references to /en/ or /zh/
```

---

### Agent 3.3: MS Blog System 📝

```
You are Agent 3.3: MS Blog System

## Task
Set up blog system and migrate 225 Malay blog posts.

## Locations
- SOURCE BLOGS: /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website/src/content/blogs/ms/
- TARGET BLOGS: /home/ubuntu/clawd/projects/ingheng/sites/ms/src/content/blogs/

## Steps
Same as Agent 2.3 but:
- Move 225 MS blog posts
- Blog pages at /ms/blog/

## Success Criteria
- 225 .md files in TARGET
- Blog system works
```

---

### Agent 3.4: MS Config + Build QA ✅

```
You are Agent 3.4: MS Config + Build QA

## Task
Final config and build for MS site.

## Key differences from EN:
- site: 'https://www.kreditloan.my'
- defaultLocale: 'ms'
- Sitemap URL: kreditloan.my

## Success Criteria
- Build succeeds
- 250+ pages generated
```

---

### Agent 4.1-4.4: ZH Site (Same Pattern)

```
Agents 4.1-4.4 follow the same pattern as MS:

4.1: ZH Setup - lang="zh", zh.json translations
4.2: ZH Static Pages - /zh/ prefix, copy from pages/zh/
4.3: ZH Blog System - 212 blog posts
4.4: ZH Config + Build - site: inghengcredit.my

CLAUDE.md for ZH:
## 语言: 中文 (ZH)
## 域名: www.inghengcredit.my
## URL结构: 保留 /zh/ 前缀

## 内容规则
1. ✅ 任何年龄设备融资 - 40年以上也可以
2. ✅ 零首付 (100%融资)
3. ❌ 不要提及利率
4. ✅ 信任: 40年经验, KPKT执照, 4,000+客户
```

---

### Agent 5.1: Redirect Mapping 🗺️

```
You are Agent 5.1: Redirect Mapping

## Task
Create complete redirect map for cross-domain SEO protection.

## Reference
GSC data: /home/ubuntu/clawd/projects/ingheng/gsc-data-inghengcredit-my/Pages.csv
GSC data: /home/ubuntu/clawd/projects/ingheng/gsc-inghengcredit-com/Pages.csv

## Redirect Rules Needed

### On inghengcredit.com (EN site):
- /ms/* → https://www.kreditloan.my/ms/*
- /zh/* → https://www.inghengcredit.my/zh/*

### On kreditloan.my (MS site):
- /en/* → https://www.inghengcredit.com/en/*
- /zh/* → https://www.inghengcredit.my/zh/*

### On inghengcredit.my (ZH site):
- /en/* → https://www.inghengcredit.com/en/*
- /ms/* → https://www.kreditloan.my/ms/*

## Steps

1. Read GSC Pages.csv files
2. Identify all URLs with clicks (high priority)
3. Create redirect mapping JSON:
   /home/ubuntu/clawd/projects/ingheng/sites/REDIRECTS.json

## Output Format
```json
{
  "en_site_redirects": [
    { "source": "/ms/:path*", "destination": "https://www.kreditloan.my/ms/:path*", "permanent": true },
    { "source": "/zh/:path*", "destination": "https://www.inghengcredit.my/zh/:path*", "permanent": true }
  ],
  "ms_site_redirects": [...],
  "zh_site_redirects": [...],
  "high_priority_urls": [
    { "old": "...", "new": "...", "clicks": X }
  ]
}
```

## Success Criteria
- Complete redirect mapping created
- All high-traffic URLs accounted for
```

---

### Agent 5.2: Redirect Implementation 🔀

```
You are Agent 5.2: Redirect Implementation

## Task
Implement redirects in vercel.json for each site.

## Input
Read: /home/ubuntu/clawd/projects/ingheng/sites/REDIRECTS.json

## Steps

1. Update sites/en/vercel.json:
   Add redirects array from REDIRECTS.json

2. Update sites/ms/vercel.json:
   Add redirects array

3. Update sites/zh/vercel.json:
   Add redirects array

## Vercel.json format:
```json
{
  "redirects": [
    {
      "source": "/ms/:path*",
      "destination": "https://www.kreditloan.my/ms/:path*",
      "permanent": true
    }
  ]
}
```

## Success Criteria
- All 3 vercel.json files have redirects
- Redirect syntax is valid
```

---

### Agents 5.5A/B/C: SEO Optimization

```
You are Agent 5.5A: EN Blog Optimization (or 5.5B/5.5C for MS/ZH)

## Task
Optimize 10-15 underperforming blogs using SEO best practices.

## Knowledge Base
Read first: /home/ubuntu/clawd/projects/ihousing/SEO_MASTERY_GUIDE.md

## ING HENG RULES (CRITICAL)
1. ✅ Equipment financing for ALL ages - even 40+ years old
2. ✅ 0% deposit available (100% financing)
3. ❌ NEVER mention interest rates
4. ✅ Trust: 40 years exp, KPKT licensed, 4,000+ customers

## Target Blogs (from GSC - high impressions, low CTR)
For EN: equipment financing malaysia, business building loan, etc.

## For each blog:
1. Improve title tag:
   - Add numbers ("Save RM50,000")
   - Add urgency ("24-Hour Approval")
   - Keep under 60 chars

2. Improve meta description:
   - Include CTA
   - Mention 0% deposit
   - Under 160 chars

3. Improve content:
   - Add "0% deposit" in first 100 words
   - Add "any age equipment" mention
   - Add trust signals (40 years, KPKT, 4,000+)
   - REMOVE any interest rate mentions
   - Add FAQ section if missing

4. Apply frameworks:
   - PAS (Problem → Agitation → Solution)
   - Social proof
   - Loss aversion ("Don't miss out...")

## Output
List of blogs optimized with changes made.

## Success Criteria
- 10-15 blogs improved
- No interest rates mentioned
- 0% deposit and any-age prominently featured
```

---

### Agent 6.1: Cross-Site Integration 🔗

```
You are Agent 6.1: Cross-Site SEO Integration

## Task
Add hreflang tags and update language switchers.

## Steps

1. Add hreflang to EN site layouts:
   <link rel="alternate" hreflang="en" href="https://www.inghengcredit.com/en/..." />
   <link rel="alternate" hreflang="ms" href="https://www.kreditloan.my/ms/..." />
   <link rel="alternate" hreflang="zh" href="https://www.inghengcredit.my/zh/..." />
   <link rel="alternate" hreflang="x-default" href="https://www.inghengcredit.com/en/..." />

2. Same for MS and ZH sites

3. Update language switcher component in each site:
   - EN link → https://www.inghengcredit.com/en/
   - MS link → https://www.kreditloan.my/ms/
   - ZH link → https://www.inghengcredit.my/zh/

4. Verify canonical URLs are absolute (include full domain)

## Success Criteria
- Hreflang tags in all layouts
- Language switcher uses external domains
- Canonicals are absolute URLs
```

---

### Agent 7.1: Deployment 🚀

```
You are Agent 7.1: Deployment

## Task
Push code and deploy all 3 sites to Vercel.

## Steps

1. Initialize git in sites/:
   cd /home/ubuntu/clawd/projects/ingheng/sites
   git init (if not already)

2. Create branches:
   git checkout -b site-en
   # Add only EN site files
   git checkout -b site-ms
   # Add only MS site files
   git checkout -b site-zh
   # Add only ZH site files

   OR push as subdirectories and configure Vercel root directory

3. Deploy each site:
   
   For EN:
   cd sites/en
   vercel --prod --yes

   For MS:
   cd sites/ms
   vercel --prod --yes

   For ZH:
   cd sites/zh
   vercel --prod --yes

4. Verify deployments:
   - Check Vercel dashboard
   - Visit each live URL
   - Confirm no build errors

## Success Criteria
- All 3 sites deployed
- All accessible at their domains
- No build errors in Vercel
```

---

### Agent 9.1: Cleanup 🧹

```
You are Agent 9.1: Cleanup

## Task
Archive old code and finalize documentation.

## Steps

1. Archive old codebase:
   mv /home/ubuntu/clawd/projects/ingheng/clients/ing-heng/website \
      /home/ubuntu/clawd/projects/ingheng/archive/website-monolith-backup

2. Update documentation:
   - Update /projects/ingheng/README.md
   - Create POST-REFACTOR-SUMMARY.md
   - Update MEMORY.md with completion

3. Final commit:
   git add .
   git commit -m "Complete: ING Heng 3-site refactoring"

## Success Criteria
- Old code archived (not deleted)
- Documentation updated
- Clean git state
```

---

## 🚀 Ready to Execute

To start, spawn Agent 1.1 with its prompt above.
After each agent completes, check off in REFACTOR-TRACKER-v2.md and spawn the next.

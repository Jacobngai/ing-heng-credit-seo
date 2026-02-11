# 🏗️ ING Heng Refactoring - Master Tracker

**Project:** Split ING Heng into 3 Independent Sites (Option A)
**Started:** 2026-01-26
**Status:** 🟡 PLANNING

---

## 📊 Progress Overview

| Phase | Agent | Status | QA Status |
|-------|-------|--------|-----------|
| 0 | Planning | 🟡 In Progress | - |
| 1 | Scaffolding | ⬜ Not Started | ⬜ |
| 2 | EN Site | ⬜ Not Started | ⬜ |
| 3 | MS Site | ⬜ Not Started | ⬜ |
| 4 | ZH Site | ⬜ Not Started | ⬜ |
| 5 | Cross-Site Integration | ⬜ Not Started | ⬜ |
| 6 | Deployment | ⬜ Not Started | ⬜ |
| 7 | Final QA & Cleanup | ⬜ Not Started | ⬜ |

**Legend:** ⬜ Not Started | 🟡 In Progress | ✅ Complete | ❌ Failed

---

## 🎯 Target Architecture

```
/projects/ingheng/
├── sites/
│   ├── en/                 # www.inghengcredit.com
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── content/blogs/
│   │   │   ├── layouts/
│   │   │   ├── pages/
│   │   │   ├── styles/
│   │   │   └── utils/
│   │   ├── public/
│   │   ├── astro.config.mjs
│   │   └── package.json
│   ├── ms/                 # www.kreditloan.my
│   │   └── (same structure)
│   └── zh/                 # www.inghengcredit.my
│       └── (same structure)
├── archive/                # Old monolithic codebase
│   └── clients/ing-heng/website/
└── docs/
    ├── REFACTOR-TRACKER.md (this file)
    └── REFACTORING-PLAN.md
```

---

## 👥 Agent Sequence

### Agent 0: Planning (YOU + ME) ✏️
**Purpose:** Define scope, create tracking docs, approve plan

- [x] Create REFACTORING-PLAN.md with options
- [x] Create REFACTOR-TRACKER.md (this file)
- [x] Confirm content counts (blogs per language)
- [ ] Review and approve agent sequence
- [ ] List all components to migrate
- [ ] List all utils/config to migrate
- [ ] Set success criteria for each phase

**Output:** Approved plan, all checklists ready
**Estimated Time:** 30 mins

---

## 🔧 Key Requirements (From Jacob)

### 1. Language-Specific CLAUDE.md
Each site MUST have a `.claude/CLAUDE.md` that:
- Declares the site's primary language
- Instructs Claude to translate any other language content it encounters
- Prevents mixing languages accidentally

**Template for EN site:**
```markdown
# CLAUDE.md - English Site

This is the ENGLISH version of Ing Heng Credit website.
- Primary language: English (EN)
- If you encounter content in Chinese (ZH) or Malay (MS), translate it to English
- All new content must be written in English
- URL structure: / (no language prefix)
- Domain: www.inghengcredit.com
```

### 2. QA Must Verify
- ✅ No 404 errors on any page
- ✅ Content is in the CORRECT language (no mixed languages)
- ✅ All links resolve properly
- ✅ Build succeeds without errors

### 3. QA Hierarchy
- **Per-Agent QA:** GLM can do basic checks (build passes, no errors)
- **Final QA:** Claude (main session) does comprehensive review
- **If issues found:** Spawn targeted fix agent → re-QA → loop until clean

---

## 📄 CLAUDE.md Templates (Create in each site)

### sites/en/.claude/CLAUDE.md
```markdown
# Ing Heng Credit - English Site

## Language Rules
- **Primary Language:** English (EN)
- **Domain:** www.inghengcredit.com
- **URL Structure:** No language prefix (e.g., /blog/post-title)

## Auto-Translate Policy
If you encounter content in other languages:
- Chinese (中文) → Translate to English
- Malay (Bahasa Malaysia) → Translate to English
- Mixed language → Translate non-English parts

## Content Guidelines
- All user-facing text must be in English
- Technical terms can stay as-is (e.g., "Sdn Bhd")
- Malaysian place names stay as-is (e.g., "Klang", "Selangor")

## SEO Context
- Target audience: English-speaking Malaysians, international
- Competitor keywords: equipment financing Malaysia, excavator loan
- Tone: Professional, trustworthy, informative
```

### sites/ms/.claude/CLAUDE.md
```markdown
# Ing Heng Credit - Laman Web Bahasa Malaysia

## Peraturan Bahasa
- **Bahasa Utama:** Bahasa Malaysia (MS)
- **Domain:** www.kreditloan.my
- **Struktur URL:** Tiada awalan bahasa (cth., /blog/tajuk-artikel)

## Polisi Terjemahan Auto
Jika anda menemui kandungan dalam bahasa lain:
- English → Terjemah ke Bahasa Malaysia
- Chinese (中文) → Terjemah ke Bahasa Malaysia
- Bahasa campuran → Terjemah bahagian bukan BM

## Panduan Kandungan
- Semua teks untuk pengguna mesti dalam Bahasa Malaysia
- Istilah teknikal boleh kekal (cth., "hire purchase", "financing")
- Nama tempat kekal (cth., "Klang", "Selangor")

## Konteks SEO
- Sasaran: Rakyat Malaysia berbahasa Melayu
- Kata kunci: pembiayaan peralatan, pinjaman jentera, kredit lori
- Nada: Profesional, dipercayai, mesra
```

### sites/zh/.claude/CLAUDE.md
```markdown
# Ing Heng Credit - 中文网站

## 语言规则
- **主要语言:** 中文 (ZH)
- **域名:** www.inghengcredit.my
- **URL结构:** 无语言前缀 (例如 /blog/文章标题)

## 自动翻译政策
如果遇到其他语言的内容：
- English → 翻译成中文
- Bahasa Malaysia → 翻译成中文
- 混合语言 → 翻译非中文部分

## 内容指南
- 所有面向用户的文本必须是中文
- 技术术语可保持原样（如 "hire purchase"）
- 马来西亚地名保持原样（如 "巴生", "雪兰莪"）

## SEO背景
- 目标受众: 马来西亚华人企业主
- 关键词: 设备融资, 挖掘机贷款, 重型机械融资
- 语气: 专业、值得信赖、亲切
```

---

### Agent 1: Scaffolding Agent 🏗️
**Purpose:** Create 3 empty Astro projects with correct structure

**Tasks:**
- [ ] Create `/projects/ingheng/sites/` directory
- [ ] Initialize EN Astro project (`sites/en/`)
- [ ] Initialize MS Astro project (`sites/ms/`)
- [ ] Initialize ZH Astro project (`sites/zh/`)
- [ ] Copy `package.json` dependencies (adjust per site)
- [ ] Copy `tailwind.config.cjs` to each
- [ ] Copy `tsconfig.json` to each
- [ ] Copy `public/` folder structure to each
- [ ] Create `src/` folder structure in each
- [ ] Verify all 3 projects can `npm install`

**QA Checklist:**
- [ ] `npm install` succeeds in sites/en/
- [ ] `npm install` succeeds in sites/ms/
- [ ] `npm install` succeeds in sites/zh/
- [ ] Folder structure matches target architecture
- [ ] No missing dependencies

**Output:** 3 empty but valid Astro projects
**Estimated Time:** 1-2 hours

---

### Agent 2: EN Site Agent 🇬🇧
**Purpose:** Fully set up English site with all content

**Tasks:**
- [ ] Copy all components to `sites/en/src/components/`
- [ ] Modify components: remove i18n switching, hardcode 'en'
- [ ] Copy layouts to `sites/en/src/layouts/`
- [ ] Copy utils to `sites/en/src/utils/`
- [ ] Simplify i18n.ts (EN only)
- [ ] Copy `en.json` translations
- [ ] Copy styles to `sites/en/src/styles/`
- [ ] Move EN blogs: `content/blogs/en/` → `sites/en/src/content/blogs/`
- [ ] Create EN pages (remove /en/ prefix from routes)
- [ ] Copy content config.ts, modify for EN only
- [ ] Create `astro.config.mjs` for EN
- [ ] Create `vercel.json` for EN
- [ ] Update all imports/paths
- [ ] Configure sitemap for inghengcredit.com

**Content to Move:**
- [ ] ~150 EN blog posts
- [ ] Homepage (index.astro)
- [ ] Service pages
- [ ] Equipment pages
- [ ] FAQ page
- [ ] Calculator page
- [ ] Other static pages

**QA Checklist:**
- [ ] `npm run dev` works
- [ ] Homepage loads at localhost:4321/
- [ ] All blog posts accessible
- [ ] No console errors
- [ ] No broken imports
- [ ] `npm run build` succeeds
- [ ] Build output looks correct

**Output:** Fully functional EN site
**Estimated Time:** 3-4 hours

---

### Agent 3: MS Site Agent 🇲🇾
**Purpose:** Fully set up Malay site with all content

**Tasks:**
- [ ] Copy all components to `sites/ms/src/components/`
- [ ] Modify components: remove i18n switching, hardcode 'ms'
- [ ] Copy layouts to `sites/ms/src/layouts/`
- [ ] Copy utils to `sites/ms/src/utils/`
- [ ] Simplify i18n.ts (MS only)
- [ ] Copy `ms.json` translations
- [ ] Copy styles to `sites/ms/src/styles/`
- [ ] Move MS blogs: `content/blogs/ms/` → `sites/ms/src/content/blogs/`
- [ ] Create MS pages (remove /ms/ prefix from routes)
- [ ] Copy content config.ts, modify for MS only
- [ ] Create `astro.config.mjs` for MS
- [ ] Create `vercel.json` for MS
- [ ] Update all imports/paths
- [ ] Configure sitemap for kreditloan.my

**Content to Move:**
- [ ] ~150 MS blog posts
- [ ] Homepage (index.astro)
- [ ] Service pages
- [ ] Equipment pages
- [ ] FAQ page
- [ ] Calculator page
- [ ] Other static pages

**QA Checklist:**
- [ ] `npm run dev` works
- [ ] Homepage loads at localhost:4321/
- [ ] All blog posts accessible
- [ ] No console errors
- [ ] No broken imports
- [ ] `npm run build` succeeds
- [ ] Malay text displays correctly

**Output:** Fully functional MS site
**Estimated Time:** 2-3 hours (faster, pattern established)

---

### Agent 4: ZH Site Agent 🇨🇳
**Purpose:** Fully set up Chinese site with all content

**Tasks:**
- [ ] Copy all components to `sites/zh/src/components/`
- [ ] Modify components: remove i18n switching, hardcode 'zh'
- [ ] Copy layouts to `sites/zh/src/layouts/`
- [ ] Copy utils to `sites/zh/src/utils/`
- [ ] Simplify i18n.ts (ZH only)
- [ ] Copy `zh.json` translations
- [ ] Copy styles to `sites/zh/src/styles/`
- [ ] Move ZH blogs: `content/blogs/zh/` → `sites/zh/src/content/blogs/`
- [ ] Create ZH pages (remove /zh/ prefix from routes)
- [ ] Copy content config.ts, modify for ZH only
- [ ] Create `astro.config.mjs` for ZH
- [ ] Create `vercel.json` for ZH
- [ ] Update all imports/paths
- [ ] Configure sitemap for inghengcredit.my

**Content to Move:**
- [ ] ~150 ZH blog posts
- [ ] Homepage (index.astro)
- [ ] Service pages
- [ ] Equipment pages
- [ ] FAQ page
- [ ] Calculator page
- [ ] Other static pages

**QA Checklist:**
- [ ] `npm run dev` works
- [ ] Homepage loads at localhost:4321/
- [ ] All blog posts accessible
- [ ] No console errors
- [ ] No broken imports
- [ ] `npm run build` succeeds
- [ ] Chinese characters display correctly

**Output:** Fully functional ZH site
**Estimated Time:** 2-3 hours

---

### Agent 5: Cross-Site Integration Agent 🔗
**Purpose:** Connect the 3 sites with proper SEO

**Tasks:**
- [ ] Add hreflang tags to EN site (pointing to MS, ZH)
- [ ] Add hreflang tags to MS site (pointing to EN, ZH)
- [ ] Add hreflang tags to ZH site (pointing to EN, MS)
- [ ] Update language switcher in Header (external links)
- [ ] Verify canonical URLs are correct
- [ ] Update robots.txt for each site
- [ ] Verify sitemap URLs are absolute
- [ ] Check Open Graph tags have correct URLs
- [ ] Verify schema.org has correct URLs

**QA Checklist:**
- [ ] Hreflang validator passes for EN
- [ ] Hreflang validator passes for MS
- [ ] Hreflang validator passes for ZH
- [ ] Language switcher links work (will test after deploy)
- [ ] No duplicate canonical issues

**Output:** SEO-connected trilingual sites
**Estimated Time:** 1-2 hours

---

### Agent 6: Deployment Agent 🚀
**Purpose:** Deploy all 3 sites to Vercel

**Tasks:**
- [ ] Create Git branch `sites/en` or new repo
- [ ] Create Git branch `sites/ms` or new repo
- [ ] Create Git branch `sites/zh` or new repo
- [ ] Push EN site code
- [ ] Push MS site code
- [ ] Push ZH site code
- [ ] Update Vercel EN project settings (root directory if needed)
- [ ] Update Vercel MS project settings
- [ ] Update Vercel ZH project settings
- [ ] Deploy EN to www.inghengcredit.com
- [ ] Deploy MS to www.kreditloan.my
- [ ] Deploy ZH to www.inghengcredit.my
- [ ] Verify all deployments succeed

**QA Checklist:**
- [ ] EN site live and accessible
- [ ] MS site live and accessible
- [ ] ZH site live and accessible
- [ ] All pages load without 404
- [ ] SSL certificates valid
- [ ] No build errors in Vercel logs

**Output:** 3 live production sites
**Estimated Time:** 1-2 hours

---

### Agent 7: Final QA & Cleanup Agent 🧹
**Purpose:** Verify everything works, clean up old code
**⚠️ THIS AGENT = CLAUDE (Main Session), NOT GLM**

**Tasks:**
- [ ] Full site crawl EN (check all links)
- [ ] Full site crawl MS (check all links)
- [ ] Full site crawl ZH (check all links)
- [ ] Test language switcher on live sites
- [ ] Verify GSC can access all sitemaps
- [ ] Test WhatsApp buttons work
- [ ] Test contact forms work
- [ ] Move old codebase to `archive/`
- [ ] Update REFACTORING-PLAN.md with completion notes
- [ ] Update this tracker with final status
- [ ] Create post-refactor documentation
- [ ] Update MEMORY.md with project completion

**QA Checklist:**
- [ ] Zero 404 errors
- [ ] Zero console errors
- [ ] All forms functional
- [ ] All CTAs working
- [ ] Mobile responsive verified
- [ ] Page speed acceptable (<3s)

**If Issues Found:**
→ Spawn fix agent for specific site (EN/MS/ZH)
→ Re-run QA on that site
→ Loop until all pass

**Output:** Verified production sites, clean repo
**Estimated Time:** 2-3 hours

---

## 📈 Content Inventory ✅ VERIFIED

| Content Type | EN | MS | ZH | Total |
|--------------|----|----|----|----|
| Blog Posts (.md) | 189 | 225 | 212 | **626** |
| Pages (.astro) | 514 | 577 | 577 | **1,668** |
| Components | 28 | (shared) | (shared) | 28 |
| Layouts | 3 | (shared) | (shared) | 3 |

⚠️ **Note:** Page count is high - likely includes blog pages generated from .astro templates

---

## ⏱️ Time Estimates

| Phase | Estimated | Actual |
|-------|-----------|--------|
| Planning | 30 min | |
| Scaffolding | 1-2 hrs | |
| EN Site | 3-4 hrs | |
| MS Site | 2-3 hrs | |
| ZH Site | 2-3 hrs | |
| Integration | 1-2 hrs | |
| Deployment | 1-2 hrs | |
| Final QA | 2-3 hrs | |
| **TOTAL** | **13-19 hrs** | |

With Z.AI rate limits (sequential agents), spread over 2-3 days.

---

---

## 📋 QA Prompt Templates

### Per-Site QA Prompt (GLM runs after each site agent)
```
You are QA for the {LANG} site at /projects/ingheng/sites/{lang}/

Run these checks and report results:

1. BUILD CHECK
   - Run: cd /projects/ingheng/sites/{lang} && npm run build
   - Expected: Build completes with 0 errors
   - Report: Build time, page count, any warnings

2. 404 CHECK  
   - After build, check dist/ folder
   - Count total HTML files generated
   - Verify key pages exist:
     - index.html (homepage)
     - blog/index.html (blog listing)
     - At least 100 blog post HTML files
   - Report: Total pages, missing pages if any

3. LANGUAGE CHECK
   - Sample 5 random blog posts from dist/
   - Read the HTML content
   - Verify ALL visible text is in {LANGUAGE}
   - Flag if you see: {OTHER_LANGUAGES}
   - Report: Pass/Fail, any mixed language found

4. LINK CHECK
   - Check for broken internal links (href starting with /)
   - Verify no links contain /{other_lang}/ prefixes
   - Report: Broken links found

Report format:
✅ PASS or ❌ FAIL for each check
Summary: Ready for deployment? Yes/No
Issues to fix: (list if any)
```

### Final QA Prompt (Claude runs after deployment)
```
Final QA for Ing Heng Credit 3-Site Deployment

Sites to verify:
- EN: https://www.inghengcredit.com
- MS: https://www.kreditloan.my  
- ZH: https://www.inghengcredit.my

For EACH site, verify:

1. HOMEPAGE
   - Loads without error
   - Content is in correct language
   - All images load
   - WhatsApp button works
   - Navigation links work

2. BLOG SECTION
   - Blog listing page loads
   - At least 10 blog posts accessible
   - Blog content in correct language
   - No 404s when clicking posts

3. CROSS-SITE
   - Language switcher links to correct domain
   - Hreflang tags present in <head>
   - Canonical URLs correct

4. SEO
   - Sitemap accessible at /sitemap.xml
   - Robots.txt accessible
   - Meta titles in correct language

Report issues by site. For each issue:
- Site: EN/MS/ZH
- Page: URL
- Issue: Description
- Fix needed: What agent should do

If ALL checks pass: Mark project complete
If issues found: List fixes needed, I will spawn fix agents
```

---

## 🔁 Fix Agent Prompt (When QA finds issues)
```
FIX AGENT for {SITE} site

Issue reported by QA:
{ISSUE_DESCRIPTION}

Location: /projects/ingheng/sites/{lang}/
File(s) affected: {FILES}

Your task:
1. Locate the problematic file(s)
2. Fix the issue
3. Run: npm run build
4. Verify the fix worked
5. Report: Fixed / Not Fixed + explanation

Do NOT modify other sites. Only fix {SITE}.
```

---

## 🛡️ Rollback Plan

If something goes wrong:
1. Old codebase preserved in `archive/`
2. Current Vercel deployments still point to old code
3. Can revert Vercel to previous deployment
4. Git history preserved

---

## 📝 Notes & Decisions

### 2026-01-26
- Decided on Option A (Full Split)
- Planning sequential agent approach
- Using GLM for coding, Claude for QA

---

## ✅ Final Sign-Off

- [ ] Jacob approves plan
- [ ] All agents completed
- [ ] All QA passed
- [ ] Sites live and working
- [ ] Documentation updated
- [ ] Old code archived

**Project Complete Date:** ___________

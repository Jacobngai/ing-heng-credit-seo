# 🏗️ ING Heng Refactoring - Master Tracker v2

**Project:** Split ING Heng into 3 Independent Sites
**Started:** 2026-01-26
**Status:** 🟡 PLANNING

---

## 📊 Content Scale (Why We Need Many Agents)

| Content | EN | MS | ZH | Total |
|---------|----|----|----|----|
| Blog Posts (.md) | 189 | 225 | 212 | **626** |
| Pages (.astro) | 514 | 577 | 577 | **1,668** |
| Components | 28 | - | - | 28 |
| Layouts | 3 | - | - | 3 |

**Rule:** ~50-100 files per agent max (context + quality)

---

## ⚠️ ING HENG CONTENT RULES (ALL AGENTS MUST FOLLOW)

```
┌─────────────────────────────────────────────────────────────────┐
│  1. ✅ Equipment financing for ALL ages - even 40+ years old    │
│  2. ✅ 0% deposit available (100% financing)                    │
│  3. ❌ NEVER mention interest rates (rates vary by case)        │
│  4. ✅ Highlight: Fast approval, high approval rate, flexible   │
│  5. ✅ Trust: 40 years exp, KPKT licensed, 4,000+ customers     │
└─────────────────────────────────────────────────────────────────┘
```

**Knowledge Base:** `/projects/ihousing/SEO_MASTERY_GUIDE.md`

---

## 👥 Complete Agent Breakdown (22 Agents)

### Phase 0: Planning ✅
- [x] Create plan
- [x] Inventory content
- [x] Design agent sequence
- [ ] Jacob approval

---

### Phase 1: Scaffolding (1 Agent)

#### Agent 1.1: Project Scaffolding 🏗️ ✅ COMPLETE
**Scope:** Create 3 empty Astro projects with configs
**Completed:** 2026-01-26 19:35 UTC | Runtime: 5m47s

**Tasks:**
- [x] Create `/projects/ingheng/sites/{en,ms,zh}/`
- [x] Initialize Astro in each
- [x] Copy `package.json` (adjust per site)
- [x] Copy `tailwind.config.cjs`
- [x] Copy `tsconfig.json`
- [x] Copy `public/` folder structure
- [x] Create `src/` folder structure
- [x] Run `npm install` in each

**QA:** All 3 projects can `npm install` ✅

---

### Phase 2: EN Site (4 Agents)

#### Agent 2.1: EN Setup 🔧 ✅ COMPLETE
**Scope:** Components, layouts, utils, translations
**Completed:** 2026-01-27 00:09 UTC | Runtime: 5m37s

**Tasks:**
- [x] Copy 29 components to `sites/en/src/components/`
- [x] Modify components: hardcode 'en', remove i18n switching
- [x] Copy 3 layouts to `sites/en/src/layouts/`
- [x] Copy 7 utils to `sites/en/src/utils/`
- [x] Simplify `i18n.ts` for EN only
- [x] Copy `en.json` translations
- [x] Copy `global.css` to styles/
- [x] Create `.claude/CLAUDE.md` for EN

**Files:** 41 files copied/modified
**QA:** All imports resolve, no TypeScript errors ✅

---

#### Agent 2.2: EN Static Pages 📄
**Scope:** Homepage, services, equipment, other static pages (~30 pages)

**Tasks:**
- [ ] Create `sites/en/src/pages/index.astro` (homepage)
- [ ] Create service pages: hire-purchase, loan, insurance
- [ ] Create equipment pages: excavator, forklift, lorry, crane, etc.
- [ ] Create FAQ page
- [ ] Create calculator page
- [ ] Create contact page
- [ ] Create about page
- [ ] Remove `/en/` prefix from all routes
- [ ] Update all internal links

**Files:** ~30 pages
**QA:** All static pages render without error

---

#### Agent 2.3: EN Blog System 📝
**Scope:** Blog architecture + migrate 189 blog posts

**Tasks:**
- [ ] Copy `content/config.ts`, modify for EN only
- [ ] Create `sites/en/src/pages/blog/index.astro` (listing)
- [ ] Create `sites/en/src/pages/blog/[...slug].astro` (posts)
- [ ] Move 189 EN blog .md files to `sites/en/src/content/blogs/`
- [ ] Verify frontmatter is correct
- [ ] Update any hardcoded paths in blog content

**Files:** 189 blog posts + 3 system files
**QA:** Blog listing shows posts, individual posts render

---

#### Agent 2.4: EN Config + Build QA ✅
**Scope:** Final config, build test, fix errors

**Tasks:**
- [ ] Create `astro.config.mjs` for EN (site: inghengcredit.com)
- [ ] Create `vercel.json` for EN
- [ ] Configure sitemap generation
- [ ] Configure robots.txt
- [ ] Run `npm run build`
- [ ] Fix any build errors
- [ ] Count output pages (should be ~220+)
- [ ] Verify no 404s in build output

**QA Checklist:**
- [ ] Build succeeds
- [ ] Homepage in dist/index.html
- [ ] Blog posts generated
- [ ] Sitemap generated
- [ ] No console errors

---

### Phase 3: MS Site (4 Agents)

#### Agent 3.1: MS Setup 🔧
**Scope:** Components, layouts, utils (same as EN but for MS)

**Tasks:**
- [ ] Copy 28 components to `sites/ms/src/components/`
- [ ] Modify components: hardcode 'ms', remove i18n switching
- [ ] Copy 3 layouts, modify for MS
- [ ] Copy utils, simplify for MS
- [ ] Copy `ms.json` translations
- [ ] Create `.claude/CLAUDE.md` for MS (Malay version)

**Files:** ~40 files

---

#### Agent 3.2: MS Static Pages 📄
**Scope:** Homepage, services, equipment (~30 pages)

**Tasks:**
- [ ] Create all static pages for MS
- [ ] Translate any remaining EN text
- [ ] Remove `/ms/` prefix from routes
- [ ] Update internal links

**Files:** ~30 pages

---

#### Agent 3.3: MS Blog System 📝
**Scope:** Blog architecture + migrate 225 blog posts

**Tasks:**
- [ ] Set up blog system for MS
- [ ] Move 225 MS blog .md files
- [ ] Verify frontmatter
- [ ] Fix any language issues

**Files:** 225 blog posts + 3 system files

---

#### Agent 3.4: MS Config + Build QA ✅
**Scope:** Config, build, verify

**Tasks:**
- [ ] Create `astro.config.mjs` for MS (site: kreditloan.my)
- [ ] Create `vercel.json` for MS
- [ ] Build and fix errors
- [ ] Verify ~260+ pages generated

---

### Phase 4: ZH Site (4 Agents)

#### Agent 4.1: ZH Setup 🔧
(Same structure as EN/MS)

#### Agent 4.2: ZH Static Pages 📄
(Same structure)

#### Agent 4.3: ZH Blog System 📝
**Files:** 212 blog posts

#### Agent 4.4: ZH Config + Build QA ✅
**Site:** inghengcredit.my

---

### Phase 5: Redirects (2 Agents)

#### Agent 5.1: Redirect Mapping 🗺️
**Scope:** Create complete redirect map

**Tasks:**
- [ ] Export all current URLs from each domain (from GSC data)
- [ ] Map old URL → new URL for each
- [ ] Handle cross-domain redirects:
  - `inghengcredit.my/en/*` → `inghengcredit.com/en/*`
  - `inghengcredit.my/ms/*` → `kreditloan.my/ms/*`
  - `inghengcredit.com/ms/*` → `kreditloan.my/ms/*`
  - `inghengcredit.com/zh/*` → `inghengcredit.my/zh/*`
- [ ] Create `redirects.json` master file
- [ ] Prioritize high-traffic URLs (from GSC)

**Output:** Complete redirect mapping document

---

#### Agent 5.2: Redirect Implementation 🔀
**Scope:** Implement redirects in Vercel config

**Tasks:**
- [ ] Add redirects to `sites/en/vercel.json`
- [ ] Add redirects to `sites/ms/vercel.json`
- [ ] Add redirects to `sites/zh/vercel.json`
- [ ] Verify redirect syntax is correct
- [ ] Test redirects locally if possible

**Output:** Updated vercel.json files with redirects

---

### Phase 5.5: SEO Optimization (3 Agents) 📈

**Purpose:** Improve underperforming blogs using SEO Mastery principles
**Knowledge Base:** `/projects/ihousing/SEO_MASTERY_GUIDE.md`

#### ⚠️ ING HENG CONTENT RULES (ALL AGENTS MUST FOLLOW)
```
1. ✅ Equipment financing for ALL ages - even 40+ years old equipment
2. ✅ 0% deposit available (100% financing)
3. ❌ NEVER mention interest rates (rates vary by case)
4. ✅ Focus on: Fast approval, high approval rate, flexible terms
5. ✅ Trust signals: 40 years experience, KPKT licensed, 4,000+ customers
```

---

#### Agent 5.5A: EN Blog Optimization 🇬🇧
**Scope:** Optimize underperforming EN blogs

**Target blogs (from GSC - high impressions, low CTR):**
- equipment financing malaysia (49 impressions, 0 clicks)
- business building loan malaysia (48 impressions, 0 clicks)
- loan for factory setup malaysia (43 impressions, 0 clicks)

**Tasks:**
- [ ] Read SEO_MASTERY_GUIDE.md for knowledge
- [ ] Identify 10-15 lowest CTR blogs with >20 impressions
- [ ] For each blog:
  - [ ] Improve title tag (add numbers, urgency, benefits)
  - [ ] Improve meta description (include CTA, benefits)
  - [ ] Add/improve H1 with primary keyword
  - [ ] Add social proof ("4,000+ equipment financed")
  - [ ] Add urgency ("24-hour approval")
  - [ ] Improve CTAs (WhatsApp, contact)
  - [ ] Add FAQ schema if missing
  - [ ] Ensure "0% deposit" is mentioned
  - [ ] Ensure "equipment any age" is mentioned
  - [ ] REMOVE any interest rate mentions

**Frameworks to apply:**
- PAS (Problem → Agitation → Solution)
- Social Proof (Cialdini)
- Loss Aversion ("Don't miss out on...")
- Authority (KPKT licensed, 40 years)

**Output:** 10-15 optimized blog posts

---

#### Agent 5.5B: MS Blog Optimization 🇲🇾
**Scope:** Optimize underperforming MS blogs

**Target blogs (from GSC - high impressions, low CTR):**
- pembiayaan peribadi malaysia (38 impressions, 0 clicks)
- pembiayaan peribadi yang dipercayai (30 impressions, 0 clicks)
- pembiayaan peribadi yang senang lulus (30 impressions, 0 clicks)

**Tasks:**
- [ ] Read SEO_MASTERY_GUIDE.md for knowledge
- [ ] Identify 10-15 lowest CTR blogs
- [ ] Apply same optimization as EN but in Malay:
  - [ ] Improve tajuk (title) with numbers, urgency
  - [ ] Improve meta description dengan CTA
  - [ ] Add social proof: "4,000+ pelanggan berpuas hati"
  - [ ] Add urgency: "Kelulusan 24 jam"
  - [ ] Mention "0% deposit" / "100% pembiayaan"
  - [ ] Mention "peralatan semua umur"
  - [ ] REMOVE any sebutan kadar faedah

**Malay-specific optimizations:**
- Use "Bumiputera" angle where appropriate
- Reference KPKT licensing prominently
- Local trust signals ("Berlesen di Malaysia")

**Output:** 10-15 optimized blog posts

---

#### Agent 5.5C: ZH Blog Optimization 🇨🇳
**Scope:** Optimize underperforming ZH blogs

**Target blogs (from GSC - potential):**
- 马来西亚个人贷款 (personal loan - good CTR, expand)
- 设备融资 (equipment financing)
- 重型机械贷款 (heavy machinery loan)

**Tasks:**
- [ ] Read SEO_MASTERY_GUIDE.md for knowledge
- [ ] Identify 10-15 blogs to optimize
- [ ] Apply optimization in Chinese:
  - [ ] Improve 标题 with numbers, urgency
  - [ ] Improve meta 描述 with CTA
  - [ ] Add social proof: "4,000+ 客户信赖"
  - [ ] Add urgency: "24小时批准"
  - [ ] Mention "零首付" / "100%融资"
  - [ ] Mention "任何年龄设备"
  - [ ] REMOVE 利率 mentions

**Chinese-specific optimizations:**
- Emphasize trust/relationship (关系, 信任)
- Reference Chinese business community angle
- Use both Simplified for content

**Output:** 10-15 optimized blog posts

---

### Phase 6: Integration (1 Agent)

#### Agent 6.1: Cross-Site SEO 🔗
**Scope:** Hreflang, language switcher, sitemaps

**Tasks:**
- [ ] Add hreflang tags to EN site (link to MS, ZH)
- [ ] Add hreflang tags to MS site (link to EN, ZH)
- [ ] Add hreflang tags to ZH site (link to EN, MS)
- [ ] Update language switcher to use external domain links
- [ ] Verify canonical URLs are absolute
- [ ] Verify sitemaps have correct domain URLs
- [ ] Verify robots.txt points to correct sitemap

**QA:** Hreflang validator passes for all 3 sites

---

### Phase 7: Deployment (1 Agent)

#### Agent 7.1: Git + Vercel Deploy 🚀
**Scope:** Push code, deploy all 3 sites

**Tasks:**
- [ ] Create git branches: `site-en`, `site-ms`, `site-zh`
- [ ] Push EN site code
- [ ] Push MS site code
- [ ] Push ZH site code
- [ ] Update Vercel EN project (root directory: sites/en)
- [ ] Update Vercel MS project (root directory: sites/ms)
- [ ] Update Vercel ZH project (root directory: sites/zh)
- [ ] Deploy EN site
- [ ] Deploy MS site
- [ ] Deploy ZH site
- [ ] Verify all deployments succeed

**QA:** All 3 sites live and accessible

---

### Phase 8: Final QA (Claude - Main Session)

#### Agent 8.1: Final QA 🔍
**⚠️ THIS IS CLAUDE (Main Session), NOT GLM**

**QA Script Location:** `/projects/ingheng/sites/qa-test.js`

**Comprehensive checks:**
- [ ] Run `node qa-test.js en` - verify EN site
- [ ] Run `node qa-test.js ms` - verify MS site
- [ ] Run `node qa-test.js zh` - verify ZH site
- [ ] **Sitemap Coverage:** Every built page must be in sitemap
- [ ] **No 404s:** Every sitemap URL must return 200
- [ ] **Language Check:** No mixed language content
- [ ] Test redirects work (old URLs → new)
- [ ] Verify language switcher links work
- [ ] Verify WhatsApp buttons work
- [ ] Verify forms work
- [ ] Check mobile responsiveness
- [ ] Check page speed

**Success Criteria:**
- Sitemap URLs = Built HTML pages (±5%)
- 0 pages returning 404
- All content in correct language

**If issues found:**
→ Spawn targeted fix agent
→ Re-deploy affected site
→ Re-test
→ Repeat until clean

---

### Phase 9: Cleanup (1 Agent)

#### Agent 9.1: Archive + Document 🧹
**Scope:** Clean up, document, finalize

**Tasks:**
- [ ] Move old codebase to `archive/`
- [ ] Update MEMORY.md with project completion
- [ ] Create POST-REFACTOR-SUMMARY.md
- [ ] Update all README files
- [ ] Commit and push final state

---

## 📊 Agent Summary

| Phase | Agents | Purpose |
|-------|--------|---------|
| 1. Scaffolding | 1 | Create 3 empty projects |
| 2. EN Site | 4 | Setup, Pages, Blog, Config/QA |
| 3. MS Site | 4 | Setup, Pages, Blog, Config/QA |
| 4. ZH Site | 4 | Setup, Pages, Blog, Config/QA |
| 5. Redirects | 2 | Map + Implement 301s |
| **5.5. SEO Optimize** | **3** | **Improve underperforming blogs (EN/MS/ZH)** |
| 6. Integration | 1 | Hreflang, cross-site SEO |
| 7. Deployment | 1 | Git + Vercel |
| 8. Final QA | 1 (Claude) | Comprehensive review |
| 9. Cleanup | 1 | Archive, docs |
| **TOTAL** | **22** | |

---

## ⏱️ Time Estimates

| Phase | Agents | Est. Time Each | Total |
|-------|--------|----------------|-------|
| Scaffolding | 1 | 30 min | 30 min |
| EN Site | 4 | 45 min | 3 hrs |
| MS Site | 4 | 45 min | 3 hrs |
| ZH Site | 4 | 45 min | 3 hrs |
| Redirects | 2 | 30 min | 1 hr |
| **SEO Optimize** | **3** | **1 hr** | **3 hrs** |
| Integration | 1 | 30 min | 30 min |
| Deployment | 1 | 45 min | 45 min |
| Final QA | 1 | 1 hr | 1 hr |
| Cleanup | 1 | 30 min | 30 min |
| **TOTAL** | **22** | | **~16 hrs** |

With Z.AI rate limits: **Spread over 4-5 days**

---

## 🔄 Workflow Per Agent

```
1. Spawn GLM sub-agent with specific task
2. Agent completes work
3. Agent reports completion
4. Claude (main) does quick QA check
5. If pass → check off, move to next agent
6. If fail → spawn fix agent → re-QA
7. Repeat until all agents complete
```

---

## 🚨 SEO Protection: Redirect Strategy

### Keep URL Prefixes!
To protect rankings, each site KEEPS its language prefix:
- EN site: `/en/blog/...` (not `/blog/...`)
- MS site: `/ms/blog/...`
- ZH site: `/zh/blog/...`

### Cross-Domain Redirects
Current state: All languages on all domains
After: Each domain serves only its language

**Required redirects:**

| From | To |
|------|-----|
| inghengcredit.my/en/* | inghengcredit.com/en/* |
| inghengcredit.my/ms/* | kreditloan.my/ms/* |
| inghengcredit.com/ms/* | kreditloan.my/ms/* |
| inghengcredit.com/zh/* | inghengcredit.my/zh/* |
| kreditloan.my/en/* | inghengcredit.com/en/* |
| kreditloan.my/zh/* | inghengcredit.my/zh/* |

### High-Priority Redirects (From GSC)
These URLs have clicks - MUST redirect correctly:

| URL | Clicks | Must Redirect To |
|-----|--------|------------------|
| inghengcredit.my/zh/blog/personal-loan-comparison-malaysia/ | 10 | Keep (same domain) |
| inghengcredit.com/en/ | 80 | Keep (same domain) |
| inghengcredit.my/ms/blog/huoche-daikuan-malaixiya/ | 4 | kreditloan.my/ms/blog/... |
| inghengcredit.my/en/equipment/crane/ | 2 | inghengcredit.com/en/equipment/crane/ |

---

## ✅ Approval Checklist

- [ ] Jacob approves agent breakdown (19 agents)
- [ ] Jacob approves redirect strategy (keep /lang/ prefix)
- [ ] Jacob approves timeline (3-4 days)
- [ ] Ready to start Agent 1.1

---

## 📝 Notes

### 2026-01-26
- v2 of tracker created with detailed agent breakdown
- 19 agents total (vs 7 in v1)
- Added redirect strategy to protect SEO
- Keeping /lang/ URL prefixes for safety

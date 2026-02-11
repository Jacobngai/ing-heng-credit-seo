# 🔧 ING Heng Credit - Multi-Site Refactoring Plan

**Date:** 2026-01-26
**Status:** PLANNING
**Author:** Claude + Jacob

---

## 📊 Current State Assessment

### Architecture Now
```
One Codebase → Three Vercel Projects
/projects/ingheng/clients/ing-heng/website/
├── src/content/blogs/
│   ├── en/ (~150+ blogs)
│   ├── ms/ (~150+ blogs)
│   └── zh/ (~150+ blogs)
├── src/pages/{en,ms,zh}/
└── Deploys to 3 domains via env vars
```

### Current Domains
| Language | Domain | Vercel Project ID |
|----------|--------|-------------------|
| EN | www.inghengcredit.com | prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw |
| MS | www.kreditloan.my | prj_eKJtQcTcOd69sER92xq8NeS1SD4y |
| ZH | www.inghengcredit.my | prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7 |

### Content Volume
- **~300+ blog posts** across 3 languages
- **18+ components**
- **11+ pages per language**
- **3 translation files** (en.json, zh.json, ms.json)

### Current Pain Points
1. **Deployment coupling** - Change to EN blog requires redeploying all 3
2. **Build time** - All 300+ blogs build every time
3. **Monolithic** - Can't easily hand off one language to different team
4. **Complex env management** - 3 project.json files to swap

---

## 🎯 Goal: "3 Websites, 3 Languages"

Jacob wants to refactor to a cleaner multi-site architecture (similar to iHousing which has `/en/`, `/ms/`, `/zh/` as separate projects).

### Key Questions to Decide

1. **Separate repos or monorepo?**
   - Separate = simpler per-site, harder to sync shared components
   - Monorepo = shared code, more complex build setup

2. **Shared components or duplicated?**
   - Shared = DRY, but requires careful coordination
   - Duplicated = independence, but maintenance overhead

3. **Content location?**
   - Per-site = each site has its own content folder
   - Centralized = one content source, filtered at build

4. **Hreflang/linking strategy?**
   - Current: All languages accessible on each domain
   - Future: Each domain serves only its language?

---

## 🏗️ Architecture Options

### Option A: Full Split (Like iHousing)
```
/projects/ingheng/
├── en/                    # Complete Astro project
│   ├── src/
│   │   ├── pages/
│   │   ├── content/blogs/  # EN blogs only
│   │   └── components/     # Copy of shared components
│   └── package.json
├── ms/                    # Complete Astro project
│   └── (same structure)
└── zh/                    # Complete Astro project
    └── (same structure)
```

**Pros:**
- ✅ Complete independence per language
- ✅ Teams can work on one language without affecting others
- ✅ Faster builds (only builds that language's content)
- ✅ Simpler deployment (one project = one domain)
- ✅ Easy to understand

**Cons:**
- ❌ Component changes must be synced 3x
- ❌ More disk space (3x code duplication)
- ❌ Version drift between sites
- ❌ Migration effort: HIGH (need to restructure everything)

**Migration Effort:** 🔴 HIGH (2-3 days)
- Create 3 separate Astro projects
- Copy and modify components for each
- Split blogs into respective folders
- Update all imports and paths
- Set up 3 separate Git repos (or branches)

---

### Option B: Monorepo with Shared Packages
```
/projects/ingheng/
├── packages/
│   ├── shared-components/  # @ingheng/components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── shared-utils/       # @ingheng/utils
│   │   ├── i18n.ts
│   │   ├── seo.ts
│   │   └── ...
│   └── shared-styles/      # @ingheng/styles
│       └── global.css
├── sites/
│   ├── en/                 # EN site
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   └── content/blogs/
│   │   ├── package.json    # depends on @ingheng/*
│   │   └── astro.config.mjs
│   ├── ms/                 # MS site
│   └── zh/                 # ZH site
├── pnpm-workspace.yaml
└── package.json            # Turborepo/nx config
```

**Pros:**
- ✅ Shared components = single source of truth
- ✅ Independent builds per site
- ✅ Modern monorepo tooling (Turborepo, Nx)
- ✅ Can still hand off individual sites
- ✅ DRY principle maintained

**Cons:**
- ❌ More complex setup (workspace management)
- ❌ Learning curve for monorepo tools
- ❌ Astro + monorepo can be tricky with dependencies
- ❌ Migration effort: HIGH

**Migration Effort:** 🔴 HIGH (2-3 days)
- Set up pnpm workspace or Turborepo
- Extract shared components to packages
- Create 3 site folders
- Configure build pipelines
- Update all imports to use package paths

---

### Option C: Smart Build with Filters (Minimal Change)
```
/projects/ingheng/clients/ing-heng/website/
├── src/
│   ├── content/blogs/
│   │   ├── en/
│   │   ├── ms/
│   │   └── zh/
│   ├── pages/
│   │   ├── en/
│   │   ├── ms/
│   │   └── zh/
│   └── components/
├── scripts/
│   ├── build-en.sh         # Build EN only
│   ├── build-ms.sh         # Build MS only
│   └── build-zh.sh         # Build ZH only
└── astro.config.mjs        # Dynamic config based on env
```

**Approach:**
- Keep current structure mostly intact
- Add build-time filtering to only include target language
- Use `LANGUAGE=en npm run build` to build EN-only
- Result: Each Vercel project gets a lean, language-specific build

**Pros:**
- ✅ Minimal restructuring
- ✅ Shared components stay shared
- ✅ Faster builds (filter at build time)
- ✅ Same codebase, different outputs
- ✅ Easy to implement

**Cons:**
- ❌ Still one codebase to manage
- ❌ All content in one repo (large)
- ❌ Requires custom build scripts

**Migration Effort:** 🟡 MEDIUM (4-8 hours)
- Create build filter scripts
- Modify astro.config for dynamic content loading
- Test builds for each language
- Update Vercel build commands

---

### Option D: Astro + Content Symlinks (Hybrid)
```
/projects/ingheng/
├── shared/                    # Shared assets
│   ├── components/
│   ├── utils/
│   └── styles/
├── content/                   # All content centralized
│   ├── blogs/
│   │   ├── en/
│   │   ├── ms/
│   │   └── zh/
│   └── landing-pages/
├── sites/
│   ├── en/
│   │   ├── src/
│   │   │   ├── components -> ../../../shared/components
│   │   │   ├── content/blogs -> ../../../content/blogs/en
│   │   │   └── pages/
│   │   └── astro.config.mjs
│   ├── ms/
│   └── zh/
```

**Pros:**
- ✅ Separate sites, shared code via symlinks
- ✅ Content stays centralized
- ✅ Each site is independently deployable
- ✅ No package manager complexity

**Cons:**
- ❌ Symlinks can be tricky on Windows
- ❌ Some build systems don't follow symlinks
- ❌ Vercel may not handle symlinks well

**Migration Effort:** 🟡 MEDIUM (1 day)

---

## 💡 My Recommendation

### For ING Heng: **Option C (Smart Build with Filters)**

**Why?**
1. **Least disruption** - Current working system stays mostly intact
2. **Fastest to implement** - Can do in a few hours
3. **Good enough** - Achieves faster builds and cleaner deployments
4. **Reversible** - Can migrate to Option A/B later if needed

### Implementation Plan for Option C

#### Phase 1: Build Configuration (2-4 hours)
```javascript
// astro.config.mjs - Dynamic content filtering
const targetLang = process.env.LANGUAGE || 'all';

const contentConfig = {
  all: { include: ['**/*.md'] },
  en: { include: ['en/**/*.md'] },
  ms: { include: ['ms/**/*.md'] },
  zh: { include: ['zh/**/*.md'] },
};
```

#### Phase 2: Page Generation (2-4 hours)
- Modify `src/pages/` to only generate routes for target language
- Use `getStaticPaths()` with language filter

#### Phase 3: Vercel Configuration (1-2 hours)
- Update each project's build command:
  - EN: `LANGUAGE=en npm run build`
  - MS: `LANGUAGE=ms npm run build`
  - ZH: `LANGUAGE=zh npm run build`

#### Phase 4: Testing (2-4 hours)
- Build each language locally
- Verify page counts
- Test hreflang tags
- Check sitemap generation

---

## 🚀 If You Want Option A (Full Split)

### Migration Steps

1. **Create 3 new Astro projects**
```bash
mkdir -p /projects/ingheng/sites/{en,ms,zh}
cd /projects/ingheng/sites/en
npm create astro@latest . -- --template basics
```

2. **Copy shared components** (with modifications)
   - Remove i18n switching logic
   - Hardcode language where needed
   - Simplify language-specific code

3. **Move content**
```bash
mv clients/ing-heng/website/src/content/blogs/en sites/en/src/content/blogs/
mv clients/ing-heng/website/src/content/blogs/ms sites/ms/src/content/blogs/
mv clients/ing-heng/website/src/content/blogs/zh sites/zh/src/content/blogs/
```

4. **Create language-specific pages**
   - Copy pages, remove `/{lang}/` prefix
   - Simplify routing

5. **Set up 3 Git repos** (or branches)
   - `ing-heng-en`
   - `ing-heng-ms`
   - `ing-heng-zh`

6. **Reconnect Vercel projects**
   - Each project linked to its own repo

### Time Estimate: 2-3 full days of focused work

---

## 📋 Decision Matrix

| Factor | Option A (Split) | Option B (Monorepo) | Option C (Filters) | Option D (Symlinks) |
|--------|------------------|---------------------|--------------------|--------------------|
| Migration Effort | 🔴 High | 🔴 High | 🟢 Low | 🟡 Medium |
| Independence | 🟢 Full | 🟢 Full | 🟡 Partial | 🟢 Full |
| Shared Code | 🔴 Duplicated | 🟢 Shared | 🟢 Shared | 🟢 Shared |
| Build Speed | 🟢 Fast | 🟢 Fast | 🟢 Fast | 🟢 Fast |
| Maintenance | 🟡 3x work | 🟢 Centralized | 🟢 Centralized | 🟢 Centralized |
| Complexity | 🟢 Simple | 🔴 Complex | 🟢 Simple | 🟡 Medium |
| Vercel Friendly | 🟢 Yes | 🟡 Maybe | 🟢 Yes | 🔴 Risky |

---

## ❓ Questions for Jacob

1. **How independent do the sites need to be?**
   - Same team managing all 3? → Option C
   - Different teams per language? → Option A

2. **Do you want separate Git repos?**
   - Yes → Option A
   - No → Option C

3. **Is component consistency important?**
   - Must be identical → Option B/C
   - Can drift → Option A

4. **Timeline pressure?**
   - Need it fast → Option C (can do today)
   - Have time → Option A or B

5. **Future plans?**
   - Adding more languages? → Option B or C
   - Just these 3 forever? → Option A

---

## 🔜 Next Steps

1. **Review this document together**
2. **Answer the questions above**
3. **Pick an option**
4. **Create detailed implementation tasks**
5. **Execute in phases**

---

*Let me know which direction you want to go, and we can break it down into actionable tasks!*

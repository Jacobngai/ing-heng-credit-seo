# Blog QA System - Quick Start Guide

**Created:** 2025-01-25
**Purpose:** Fix blog 404 issues and create automated QA system

---

## 🐛 What Was Wrong

### Root Cause Identified:

| Issue | Description |
|-------|-------------|
| **Missing Template** | `/en/blog/[slug].astro` didn't exist |
| **404 Errors** | All blog post links returned 404 in production |
| **No Testing** | No way to verify blog health before deployment |
| **Opaque Errors** | AI said "done" but nothing actually happened |

### Why It Happened:

- Blog index (`/en/blog/index.astro`) ✅ existed
- Dynamic pages like `/en/blog/brand/[brand].astro` ✅ existed
- **Individual blog post template** `/en/blog/[slug].astro` ❌ was **MISSING**

When users clicked blog post links like `/en/blog/bank-rejected-equipment-financing-2026`, there was no route handler → **404 error**.

---

## ✅ What I Fixed

### 1. Created Missing Template

**File:** `website/src/pages/en/blog/[slug].astro`

This template now handles all individual blog post URLs. It:
- Reads slug from URL
- Finds matching post in `blog-posts.ts` data
- Renders the blog post with proper layout
- Returns 404 if post not found

### 2. Created Automated QA Script

**File:** `website/scripts/qa-blog.mjs`

This Playwright script tests ALL blog posts for:
- ✅ **404 Detection** - Verifies pages load successfully
- ✅ **Console Errors** - Catches JavaScript errors
- ✅ **Broken Links** - Tests internal links
- ✅ **SEO Validation** - Checks meta tags, titles, canonicals

### 3. Created Claude Command

**File:** `.claude/commands/qa-blog.md`

Run: `/qa-blog` in Claude Code

The command will:
1. Check if dev server is running
2. Start it if needed
3. Run the Playwright tests
4. Show results with actionable recommendations

### 4. Added npm Scripts

```bash
npm run qa        # Run full QA suite
npm run qa:blog   # Alias for QA
```

---

## 🚀 How to Use

### Quick Start (Right Now)

```bash
# 1. In one terminal, start dev server
cd website
npm run dev

# 2. In another terminal (or Claude Code), run QA
npm run qa

# OR use Claude Code command
/qa-blog
```

### Before Every Deployment

```bash
# 1. Run QA
npm run qa

# 2. If all pass, deploy
npm run build:en
# (or build:ms, build:zh)

# 3. Deploy to Vercel
vercel --prod
```

### After Making Changes

```bash
# 1. Make your changes (edit files, add posts, etc.)
# 2. Run QA to verify
npm run qa
# 3. Fix any issues found
# 4. Run QA again to confirm fixes
npm run qa
```

---

## 📊 Understanding QA Results

### Success Example:
```
📊 BLOG QA TEST RESULTS
============================================================
Total Tested:  538
✅ Passed:      538 (100.0%)
❌ Failed:      0 (0.0%)

🎉 ALL TESTS PASSED! Your blog is healthy.
============================================================
```

### Failure Example:
```
📊 BLOG QA TEST RESULTS
============================================================
Total Tested:  538
✅ Passed:      535 (99.4%)
❌ Failed:      3 (0.6%)

❌ ISSUES FOUND:

  1. ❌ /en/blog/example-post - 404 Page Not Found
  2. ⚠️ /en/blog/another-post - 2 console error(s)
  3. ⚠️ /en/blog/third-post - Broken link: /en/bad-link (404)

📋 FAILED PAGES DETAILS:

📄 example-post
   URL: http://localhost:4321/en/blog/example-post
   Title: Example Post Title
   Issues:
     ❌ 404 Page Not Found
     ⚠️ No meta description
     ⚠️ No canonical URL

💡 RECOMMENDED ACTIONS:
   1. Fix broken routes (missing [slug].astro templates)
   2. Fix console errors in components
   3. Update broken internal links
   4. Add missing meta descriptions
   5. Add canonical URLs
============================================================
```

---

## 🏗️ New Architecture

### Before (Broken):
```
User clicks blog link
    ↓
/en/blog/some-slug
    ↓
Astro routing looks for [slug].astro
    ↓
NOT FOUND → 404 Error ❌
```

### After (Fixed):
```
User clicks blog link
    ↓
/en/blog/some-slug
    ↓
Astro routing finds [slug].astro ✅
    ↓
Template loads post from blog-posts.ts
    ↓
Page renders successfully ✅
```

### With QA (Stable):
```
Before deployment:
    ↓
Run QA: npm run qa
    ↓
Playwright tests all 538 posts
    ↓
Results: All pass ✅
    ↓
Deploy with confidence 🚀
```

---

## 📁 Files Created/Modified

### New Files Created:
1. `website/src/pages/en/blog/[slug].astro` - Blog post template
2. `website/scripts/qa-blog.mjs` - Playwright QA script
3. `.claude/commands/qa-blog.md` - Claude command definition

### Files Modified:
1. `website/package.json` - Added `qa` and `qa:blog` scripts

---

## 🎯 Next Steps

### Immediate:
1. ✅ Test the fix - run `npm run qa`
2. ✅ Verify blog posts load in browser
3. ✅ Deploy to one language first (EN)

### Short-term:
1. Create `[slug].astro` for MS and ZH languages too
2. Add actual blog content (currently placeholder)
3. Set up pre-commit hooks to run QA

### Long-term:
1. Migrate from hardcoded `blog-posts.ts` to Content Collections
2. Set up CI/CD with automatic QA
3. Extend QA to test all pages, not just blog

---

## 🔧 Troubleshooting

### "Port 4321 already in use"
- Good! Dev server is already running
- Proceed to run QA

### "Command not found: playwright"
- Install Playwright: `npm install -D @playwright/test`
- Run: `npx playwright install`

### "Cannot find module '../src/data/blog-posts.js'"
- Make sure you're in the `website/` directory
- Use: `cd website` then `node scripts/qa-blog.mjs`

### QA takes too long
- The script tests 538 pages
- Normal time: 5-15 minutes
- You can reduce `CONCURRENT_BROWSERS` in the script to test fewer pages at once

---

## 💡 Tips

1. **Run QA often** - Catch issues early when they're easier to fix
2. **Keep dev server running** - Saves time between test runs
3. **Fix critical issues first** - 404s before console errors before SEO
4. **Keep the QA script updated** - Add new checks as needed

---

## 📞 Need Help?

Run `/qa-blog` in Claude Code and describe your issue. The QA assistant will help you:
- Diagnose problems
- Fix configuration issues
- Interpret test results
- Suggest improvements

---

**Remember:** Quality first, deploy second. Always run QA before production deployments! 🚀

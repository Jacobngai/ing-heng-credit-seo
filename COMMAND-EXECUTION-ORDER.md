# Command Execution Order: Quick Reference

**Last Updated:** 2025-11-10
**Total Commands:** 14 (numbered ①-⑭)

---

## 📋 Complete Execution Order

| # | Command | Phase | Requirements | Creates | Time |
|---|---------|-------|--------------|---------|------|
| **①** | `/research-business` | **ONBOARD** | ❌ Nothing (START HERE) | business-brief.md, personas.md, competitor-report.md, keyword-opportunities.csv | 2-4 hrs |
| **②** | `/organize-by-intent` | **ONBOARD** | ✅ Outputs from ① | content-strategy-map.md, hub-spoke-plan.md, keyword-database.csv | 2-3 hrs |
| **③** | `/plan-authority` | **ONBOARD** | ✅ Outputs from ① | authority-plan.md, author-profiles.md, trust-signals.md | 1-2 hrs |
| **④** | `/design-brand-options` | **ONBOARD** | ✅ Outputs from ① + brand materials | 10 HTML mockups (ci-option-1 to ci-option-10) | 15 min |
| **⑤** | `/build-author` | **BUILD** | ✅ Outputs from ③④ | Author bio page (.astro) | 1-2 hrs |
| **⑥** | `/build-hub-page` | **BUILD** | ✅ Outputs from ①②③④ | Hub page (.astro) 3,000-5,000 words | 4-8 hrs |
| **⑦** | `/build-blog` | **BUILD** | ✅ Outputs from ①②③④ | Blog post (.astro) 1,500-2,500 words | 2-4 hrs |
| **⑧** | `/build-service-page` | **BUILD** | ✅ Outputs from ①③④ | Service page (.astro) | 2-3 hrs |
| **⑨** | `/review-seo` | **REVIEW** | ✅ Any page from ⑤⑥⑦⑧ | seo-audit-report.md (PASS/FAIL) | 30 min |
| **⑩** | `/review-eeat` | **REVIEW** | ✅ Any page from ⑤⑥⑦⑧ | eeat-score-report.md (0-100) | 30 min |
| **⑪** | `/review-readability` | **REVIEW** | ✅ Any page from ⑤⑥⑦⑧ | readability-report.md (Flesch score) | 30 min |
| **⑫** | `/translate-content` | **PUBLISH** | ✅ Passed ⑨⑩⑪ all | EN, MS, ZH versions of page | 1-2 hrs |
| **⑬** | `/deploy-multilang` | **PUBLISH** | ✅ Outputs from ⑫ | 3 live websites (EN, MS, ZH) | 15 min |
| **⑭** | `/submit-search` | **PUBLISH** | ✅ Outputs from ⑬ | Sitemaps + Search engine submissions | 10 min |

---

## 🚨 Error Messages & Solutions

### When Requirements Are Missing:

| Error | Solution |
|-------|----------|
| ❌ `business-brief.md not found` | Run **① /research-business** for this client |
| ❌ `personas.md not found` | Run **① /research-business** for this client |
| ❌ `content-strategy-map.md not found` | Run **② /organize-by-intent** for this client |
| ❌ `author-profiles.md not found` | Run **③ /plan-authority** for this client |
| ❌ `trust-signals.md not found` | Run **③ /plan-authority** for this client |
| ❌ `No brand design selected` | Run **④ /design-brand-options**, ask client to choose |
| ❌ `No content to review` | Run **BUILD commands ⑤-⑧** to create content first |
| ❌ `SEO review failed` | Fix issues in content, run **⑨ /review-seo** again |
| ❌ `E-E-A-T review failed` | Fix issues in content, run **⑩ /review-eeat** again |
| ❌ `Readability review failed` | Fix issues in content, run **⑪ /review-readability** again |
| ❌ `Translations not found` | Run **⑫ /translate-content** first |
| ❌ `Sites not deployed` | Run **⑬ /deploy-multilang** first |

---

## 🎯 Required Files by Phase

### ✅ To Start BUILD Phase (⑤-⑧):
```
clients/[client-name]/
├── onboarding/
│   ├── business-brief.md          ← from ①
│   ├── personas.md                ← from ①
│   ├── content-strategy-map.md    ← from ②
│   ├── author-profiles.md         ← from ③
│   └── trust-signals.md           ← from ③
└── brand-identity/
    ├── selected-design.html       ← from ④ (client picked)
    └── tailwind.config.js         ← from ④
```

### ✅ To Start REVIEW Phase (⑨-⑪):
```
clients/[client-name]/website/src/pages/en/
├── authors/[name].astro           ← from ⑤
├── guides/[topic].astro           ← from ⑥
├── blog/[slug].astro              ← from ⑦
└── services/[service].astro       ← from ⑧
```
**Note:** Only need ONE page minimum to start reviewing

### ✅ To Start PUBLISH Phase (⑫-⑭):
```
clients/[client-name]/reviews/
├── seo-audit-report.md            ← from ⑨ (status: PASS)
├── eeat-score-report.md           ← from ⑩ (status: PASS)
└── readability-report.md          ← from ⑪ (status: PASS)
```
**Note:** ALL three reviews must PASS

### ✅ To Complete Workflow (⑭):
```
clients/[client-name]/website/src/pages/
├── en/blog/post.astro             ← from ⑫
├── ms/blog/post.astro             ← from ⑫
└── zh/blog/post.astro             ← from ⑫

Live websites:
✅ www.inghengcredit.com (EN)      ← from ⑬
✅ www.kreditloan.my (MS)          ← from ⑬
✅ www.inghengcredit.my (ZH)       ← from ⑬
```

---

## 🏃 Quick Start: First Blog Post

**New client? Follow this exact order:**

```bash
# Day 1: ONBOARD (complete foundation)
① /research-business
② /organize-by-intent
③ /plan-authority
④ /design-brand-options
   → Send 10 HTML files to client
   → Client picks favorite
   → Save selection

# Day 2: BUILD (create author + first blog)
⑤ /build-author
⑦ /build-blog

# Day 3: REVIEW (check quality)
⑨ /review-seo
⑩ /review-eeat
⑪ /review-readability
   → Fix any issues
   → Re-run reviews until all PASS

# Day 4: PUBLISH (go live in 3 languages)
⑫ /translate-content
⑬ /deploy-multilang
⑭ /submit-search
```

**Total time:** 4 days, 15-20 hours
**Result:** Professional blog post live in 3 languages

---

## 🔄 Ongoing: Content Production

**After initial setup, typical blog post workflow:**

```bash
# Create new blog post
⑦ /build-blog

# Review
⑨ /review-seo
⑩ /review-eeat
⑪ /review-readability

# Publish
⑫ /translate-content
⑬ /deploy-multilang
⑭ /submit-search
```

**Time per post:** 4-6 hours (including translation & deployment)

---

## 📊 Command Frequency

| Commands | Frequency | When |
|----------|-----------|------|
| **①-④** (ONBOARD) | Once per client | New client onboarding |
| **⑤** (Build Author) | Once per client | After ONBOARD complete |
| **⑥** (Build Hub) | 1-2 per quarter | Major pillar content |
| **⑦** (Build Blog) | Daily/Weekly | Ongoing content production |
| **⑧** (Build Service) | Once per service | New service offering |
| **⑨-⑪** (REVIEW) | Every publish | Before EVERY deploy |
| **⑫-⑭** (PUBLISH) | Every publish | After reviews pass |

---

## ⚠️ Critical Rules

### Rule #1: Never Skip ONBOARD
❌ **Wrong:** Jump straight to `/build-blog`
- Result: Generic content, no brand consistency, missing personas
- Wastes time: Have to redo content later

✅ **Right:** Complete ①-④ first
- Result: Every piece of content is on-brand, targeted, authoritative
- Saves time: Get it right the first time

### Rule #2: Never Skip REVIEW
❌ **Wrong:** Build → Translate → Deploy directly
- Result: SEO mistakes go live in 3 languages
- 3x the work to fix later

✅ **Right:** Build → Review → Fix → Translate → Deploy
- Result: Only high-quality content goes live
- Fix once, publish everywhere

### Rule #3: Follow Linear Order
The numbers exist for a reason:
- ① creates foundation for ②③④
- ②③④ create assets for ⑤⑥⑦⑧
- ⑤⑥⑦⑧ create content for ⑨⑩⑪
- ⑨⑩⑪ validate content for ⑫
- ⑫ creates translations for ⑬
- ⑬ creates live sites for ⑭

**Skip a number = Missing requirements = Error**

---

## 🎓 For New Employees

**Confused about what to run next?**

1. Open this document
2. Find the last command you ran successfully
3. Run the next number in sequence
4. If you get an error about missing files, check the "Error Messages & Solutions" table above

**Example:**
- You ran ⑦ `/build-blog` successfully
- Next: Run ⑨ `/review-seo`
- Got error "No content to review"?
- Solution: The blog wasn't created. Run ⑦ again or check if file exists

---

## 💡 Understanding the Numbers

Think of it like cooking a meal:

**① Research Business** = Read the recipe, check ingredients
**② Organize by Intent** = Plan the meal sequence
**③ Plan Authority** = Choose the chef (credentials)
**④ Design Brand Options** = Choose the plating style
**⑤ Build Author** = Introduce the chef
**⑥ Build Hub Page** = Make the main course
**⑦ Build Blog** = Make the side dishes
**⑧ Build Service Page** = Make the dessert
**⑨ Review SEO** = Taste test (flavor/seasoning)
**⑩ Review E-E-A-T** = Check presentation (looks professional?)
**⑪ Review Readability** = Confirm it's easy to eat
**⑫ Translate Content** = Create 3 regional versions
**⑬ Deploy Multilang** = Serve to 3 different tables
**⑭ Submit Search** = Tell guests the food is ready

You wouldn't serve dessert (⑧) before making the main course (⑥).
You wouldn't skip taste testing (⑨-⑪) before serving.
You wouldn't serve food without telling guests it's ready (⑭).

**Same logic applies to our commands.**

---

## 🎯 Visual References

For visual learners, see:
- **SEO-WORKFLOW-SWIMLANE.html** - Full swimlane diagram with dependencies
- **presentation-2-agents-and-skills.html** - Agent and skill architecture

---

**Remember:** Follow the numbers. The system works when you don't skip steps.

If confused, start at ① and work your way through ⑭ for your first client.
After that, you'll understand the logic and can work more flexibly (but still following dependencies).

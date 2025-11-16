# Updated Command Execution Order (Post-Redundancy Fixes)

**Last Updated:** November 13, 2025
**Status:** Optimized workflow - no redundant keyword research

---

## ⚡ STREAMLINED WORKFLOW

### ONBOARD Phase (Research)

```
① /1-research-business
   ↓ Creates:
   - business-brief.md
   - personas.md (9 personas)
   - competitor-report.md
   - keyword-opportunities.csv (118 seed keywords)

①b /1b-research-long-tail-keywords
   ↓ Creates:
   - long-tail-keywords.csv (358 keywords with metadata)
   - topic-clusters.json (22 clusters)
   - 12-month-longtail-calendar.md (publishing schedule)

② /2-organize-by-intent ← ⚠️ SKIP (redundant - ①b covers this)

③ /3-plan-authority ← OPTIONAL (only if need author pages)
   ↓ Creates:
   - author-profiles.md
   - trust-signals.md

④ /4-design-brand-options
   ↓ Creates:
   - 3 brand design options
   - User selects one → selected-design saved

④b /4b-generate-website-scaffold
   ↓ Creates:
   - Complete Astro website structure
   - All components, layouts, utilities
```

### BUILD Phase (Content Creation)

```
⑤ /5-build-author ← OPTIONAL (only if have author-profiles.md)
   ↓ Creates:
   - Author bio pages
   READS FROM: author-profiles.md, personas.md

⑥ /6-build-hub-page
   ↓ Creates:
   - Hub pages (1 per cluster, 3,000-5,000 words)
   READS FROM: topic-clusters.json, long-tail-keywords.csv, personas.md
   NO KEYWORD RESEARCH - data already exists!

⑦ /7-build-blog
   ↓ Creates:
   - Blog posts (1,500-2,500 words)
   READS FROM: long-tail-keywords.csv, personas.md, 12-month-calendar.md
   NO KEYWORD RESEARCH - data already exists!

⑧ /8-build-service-page
   ↓ Creates:
   - Service pages (hire purchase, loan financing, insurance)
   READS FROM: business-brief.md, personas.md, keyword-opportunities.csv
```

### REVIEW Phase

```
⑨ /9-review-seo
⑩ /10-review-eeat
⑪ /11-review-readability
```

### PUBLISH Phase

```
⑫ /12-translate-content
⑬ /13-deploy-vercel
⑭ /14-submit-search-engines
```

---

## Key Workflow Changes

### What Changed:

1. **Command ②** is now **OPTIONAL** (skip if you ran ①b)
   - Reason: ①b already does intent classification, clustering, and prioritization

2. **Command ⑦** NO LONGER calls DataForSEO APIs
   - Reason: All keyword data already in CSV files

3. **Command ⑥** reads from topic-clusters.json (not hub-spoke-plan.md)
   - Reason: Clusters are better organized and include hub page URLs

### What Stayed the Same:

- Command ① still required (foundation)
- Command ③ still optional (only if need author pages)
- Command ④ still required (brand design)
- Command ④b still required (website scaffold)
- REVIEW and PUBLISH phases unchanged

---

## Minimum Viable Workflow

**Fastest path from zero to published content:**

```
① → ①b → ④ → ④b → ⑦ → ⑫ → ⑬
```

**Breakdown:**
1. ① Research business (2-4 hours)
2. ①b Long-tail keywords (1-2 hours)
3. ④ Design brand (1 hour + client selection)
4. ④b Generate website (30 min)
5. ⑦ Build blog post (2-4 hours per post)
6. ⑫ Translate content (1-2 hours per post)
7. ⑬ Deploy to Vercel (30 min per language)

**Total:** ~8-12 hours to first published blog post

**Commands SKIPPED:**
- ② (redundant)
- ③ (optional - author pages)
- ⑤ (optional - depends on ③)
- ⑥ (optional - hub pages can wait)
- ⑧ (optional - service pages can wait)
- ⑨⑩⑪ (optional - can self-review)

---

## Complete Workflow (All Features)

**For clients who want everything:**

```
① → ①b → ③ → ④ → ④b → ⑤ → ⑥ → ⑦ → ⑧ → ⑨ → ⑩ → ⑪ → ⑫ → ⑬ → ⑭
```

**Total:** ~40-60 hours for complete SEO-optimized website with:
- Business research
- 358 keywords mapped
- 9 comprehensive personas
- Author authority pages
- Custom brand design
- Complete website
- Hub pages (3,000-5,000 words each)
- Blog posts (1,500-2,500 words each)
- Service pages
- Quality reviews
- Multi-language translations
- Deployed to production
- Submitted to search engines

---

## Command Dependencies (Updated)

### No Dependencies:
- ① /1-research-business (START HERE)

### Depends on ①:
- ①b /1b-research-long-tail-keywords (needs keyword-opportunities.csv)
- ③ /3-plan-authority (needs business-brief.md, personas.md)
- ④ /4-design-brand-options (can run anytime)

### Depends on ①b:
- ⑥ /6-build-hub-page (needs topic-clusters.json, long-tail-keywords.csv)
- ⑦ /7-build-blog (needs long-tail-keywords.csv, personas.md)

### Depends on ③:
- ⑤ /5-build-author (needs author-profiles.md)

### Depends on ④:
- ④b /4b-generate-website (needs selected brand design)

### Depends on ④b:
- ⑤⑥⑦⑧ (need website structure to create pages)

### Depends on ⑤⑥⑦⑧:
- ⑨⑩⑪ (need content to review)

### Depends on ⑨⑩⑪:
- ⑫ /12-translate-content (need approved content)

### Depends on ⑫:
- ⑬ /13-deploy-vercel (need translated content)

### Depends on ⑬:
- ⑭ /14-submit-search-engines (need deployed URLs)

---

## Quick Reference

### "I want to write a blog post NOW"

**Required:**
1. ✅ long-tail-keywords.csv exists
2. ✅ personas.md exists
3. ✅ Website scaffold exists

**Command:**
```bash
/7-build-blog "excavator financing bad credit Malaysia"
```

**Time:** 2-4 hours (agent working)

### "I want to create a hub page NOW"

**Required:**
1. ✅ topic-clusters.json exists
2. ✅ long-tail-keywords.csv exists
3. ✅ personas.md exists
4. ✅ Website scaffold exists

**Command:**
```bash
/6-build-hub-page "Excavator Financing"
```

**Time:** 4-8 hours (agent working)

### "I want to create service page NOW"

**Required:**
1. ✅ business-brief.md exists
2. ✅ personas.md exists
3. ✅ Website scaffold exists

**Command:**
```bash
/8-build-service-page "Hire Purchase"
```

**Time:** 2-3 hours (agent working)

---

## For Ing Heng: Current Status

### Completed:
- ✅ Command ①
- ✅ Command ①b ← JUST FINISHED
- ✅ Command ④ (brand design selected)
- ✅ Command ④b (website exists)

### Ready to Execute:
- ✅ Command ⑦ /7-build-blog (all prerequisites met)
- ✅ Command ⑥ /6-build-hub-page (all prerequisites met)
- ✅ Command ⑧ /8-build-service-page (all prerequisites met)

### Can Skip:
- ② /2-organize-by-intent (redundant)
- ③ /3-plan-authority (optional)
- ⑤ /5-build-author (optional)

---

**Next Recommended Action:**
```bash
/7-build-blog "how to apply for excavator financing Malaysia"
```

This will create your first blog post using:
- Keyword data from long-tail-keywords.csv (no API calls!)
- Persona data from personas.md (Contractor Ahmad)
- Calendar guidance from 12-month-longtail-calendar.md (Month 1, Post #1)

---

**Document Purpose:** Command execution guidance post-redundancy fixes
**For:** SEO workflow users
**Status:** Active workflow - use this order going forward
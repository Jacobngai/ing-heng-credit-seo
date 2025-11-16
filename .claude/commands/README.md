# SEO Workflow Commands - Master Index

**Total Commands:** 14
**Organization:** 4 phases, 1 primary agent per command
**Philosophy:** Ultra-simple commands, agents do complex work

---

## 📋 Command List by Execution Order

### 🔍 PHASE 1: ONBOARD (①-④)

| # | Command | Agent | Time | Prerequisites |
|---|---------|-------|------|---------------|
| **①** | `/1-research-business` | client-onboarding | 2-4 hrs | ❌ None (START HERE) |
| **①b** | `/1b-research-long-tail-keywords` | long-tail-keyword-researcher | 30-60 min | ① outputs |
| **②** | `/2-organize-by-intent` | hub-and-spoke-architect | 2-3 hrs | ①+①b outputs |
| **③** | `/3-plan-authority` | eeat-documentation | 1-2 hrs | ① outputs |
| **④** | `/4-design-brand-options` | brand-identity | 15 min | ① outputs + brand materials |

**Phase Goal:** Create foundational assets for content creation (including 200-500 long-tail keywords)
**Total Time:** 6-10 hours (mostly AI working)

---

### 🏗️ PHASE 2: BUILD (⑤-⑧)

| # | Command | Agent | Time | Prerequisites |
|---|---------|-------|------|---------------|
| **⑤** | `/5-build-author` | content-generation | 1-2 hrs | ③④ outputs |
| **⑥** | `/6-build-hub-page` | content-generation | 4-8 hrs | ①②③④ outputs |
| **⑦** | `/7-build-blog` | content-generation | 2-4 hrs | ①②③④ outputs |
| **⑧** | `/8-build-service-page` | content-generation | 2-3 hrs | ①③④ outputs |

**Phase Goal:** Create SEO-optimized content in English
**Total Time:** Varies by content volume (9-17 hours for full suite)

---

### ✅ PHASE 3: REVIEW (⑨-⑪)

| # | Command | Agent | Time | Prerequisites |
|---|---------|-------|------|---------------|
| **⑨** | `/9-review-seo` | content-qa | 30 min | Any page from ⑤⑥⑦⑧ |
| **⑩** | `/10-review-eeat` | content-qa | 30 min | Any page from ⑤⑥⑦⑧ |
| **⑪** | `/11-review-readability` | content-qa | 30 min | Any page from ⑤⑥⑦⑧ |

**Phase Goal:** Ensure content meets quality standards
**Total Time:** 1.5 hours per page
**Critical:** ALL THREE must PASS before proceeding to ⑫

---

### 🚀 PHASE 4: PUBLISH (⑫-⑭)

| # | Command | Agent | Time | Prerequisites |
|---|---------|-------|------|---------------|
| **⑫** | `/12-translate-content` | content-generation | 1-2 hrs | ⑨⑩⑪ all PASS |
| **⑬** | `/13-deploy-multilang` | publishing | 15 min | ⑫ translations |
| **⑭** | `/14-submit-search` | publishing | 10 min | ⑬ live sites |

**Phase Goal:** Deploy content in 3 languages to live sites
**Total Time:** 1.5-2.5 hours

---

## 🎯 Agent Summary

| Agent | Used In Commands | Responsibility |
|-------|------------------|----------------|
| **client-onboarding** | ① | Business research, competitor analysis, persona creation |
| **long-tail-keyword-researcher** | ①b | Mine 200-500 long-tail keywords, create 12-month calendar |
| **hub-and-spoke-architect** | ② | Content strategy, intent mapping, hub-spoke planning |
| **eeat-documentation** | ③ | E-E-A-T strategy, author profiles, trust signals |
| **brand-identity** | ④ | Generate 10 brand mockup options |
| **content-generation** | ⑤⑥⑦⑧⑫ | Write all content, author pages, translations |
| **content-qa** | ⑨⑩⑪ | Quality assurance, SEO audits, E-E-A-T scoring |
| **publishing** | ⑬⑭ | Deployment, search engine submission |

**Total Agents:** 8 (each with specialized expertise)

---

## 🚨 Common Error Messages & Solutions

| Error | Solution |
|-------|----------|
| `business-brief.md not found` | Run **① /1-research-business** |
| `personas.md not found` | Run **① /1-research-business** |
| `content-strategy-map.md not found` | Run **② /2-organize-by-intent** |
| `author-profiles.md not found` | Run **③ /3-plan-authority** |
| `trust-signals.md not found` | Run **③ /3-plan-authority** |
| `No brand design selected` | Run **④ /4-design-brand-options**, client picks |
| `No content to review` | Run **⑤⑥⑦⑧ BUILD commands** first |
| `Review status: FAIL` | Fix issues, re-run **⑨⑩⑪** |
| `Review status: NEEDS WORK` | Fix priority issues, re-run **⑨⑩⑪** |
| `Translations not found` | Run **⑫ /12-translate-content** |
| `Sites not deployed` | Run **⑬ /13-deploy-multilang** |

**Rule:** Error message always tells you which command number to run.

---

## 📁 Folder Structure

```
.claude/commands/
├── 1-onboard/
│   ├── 1-research-business.md
│   ├── 2-organize-by-intent.md
│   ├── 3-plan-authority.md
│   └── 4-design-brand-options.md
├── 2-build/
│   ├── 5-build-author.md
│   ├── 6-build-hub-page.md
│   ├── 7-build-blog.md
│   └── 8-build-service-page.md
├── 3-review/
│   ├── 9-review-seo.md
│   ├── 10-review-eeat.md
│   └── 11-review-readability.md
├── 4-publish/
│   ├── 12-translate-content.md
│   ├── 13-deploy-multilang.md
│   └── 14-submit-search.md
└── README.md (this file)
```

---

## 🏃 Quick Start Workflows

### New Client (Full Workflow)
```bash
# ONBOARD (Day 1)
/1-research-business
/1b-research-long-tail-keywords  # NEW! Discovers 200-500 long-tail keywords
/2-organize-by-intent
/3-plan-authority
/4-design-brand-options
# → Client picks brand design

# BUILD (Day 2-3)
/5-build-author
/7-build-blog

# REVIEW (Day 4)
/9-review-seo
/10-review-eeat
/11-review-readability
# → Fix any issues, re-review until all PASS

# PUBLISH (Day 5)
/12-translate-content
/13-deploy-multilang
/14-submit-search

# ✅ Done! First blog post live in 3 languages
```

### New Blog Post (Existing Client)
```bash
# Already have ONBOARD assets (①②③④)
# Just need to build new content

/7-build-blog
/9-review-seo
/10-review-eeat
/11-review-readability
# → Fix issues, re-review until PASS

/12-translate-content
/13-deploy-multilang
/14-submit-search

# ✅ Done! New post live in 3 languages
```

### Hub Page + 10 Spokes
```bash
# Create hub first
/6-build-hub-page
/9-review-seo
/10-review-eeat
/11-review-readability
/12-translate-content
/13-deploy-multilang
/14-submit-search

# Then create spokes (1 per week)
/7-build-blog  # Spoke 1
# ... review, publish

/7-build-blog  # Spoke 2
# ... review, publish

# Repeat 10 times
```

---

## 🎓 Learning Path

### Week 1: Learn ONBOARD
- Read: commands/1-onboard/*.md
- Practice: Run ① on test client
- Understand: What assets are created and why

### Week 2: Learn BUILD
- Read: commands/2-build/*.md
- Practice: Run ⑦ /7-build-blog
- Understand: How ONBOARD assets are used

### Week 3: Learn REVIEW
- Read: commands/3-review/*.md
- Practice: Run ⑨⑩⑪ on test content
- Understand: Quality standards

### Week 4: Learn PUBLISH
- Read: commands/4-publish/*.md
- Practice: Full workflow ①→⑭
- Understand: Multi-language deployment

---

## 📊 Expected Outputs by Phase

### After ONBOARD (①-④):
```
clients/[client-name]/
├── onboarding/
│   ├── business-brief.md
│   ├── competitor-report.md
│   ├── personas.md
│   ├── keyword-opportunities.csv
│   └── long-tail-keywords.csv (NEW! 200-500 long-tail keywords)
├── content-strategy/
│   ├── content-strategy-map.md
│   ├── hub-spoke-plan.md
│   ├── keyword-database.csv
│   ├── 12-month-longtail-calendar.md (NEW! Monthly content plan)
│   └── topic-clusters.json (NEW! 15-20 keyword clusters)
├── eeat-strategy/
│   ├── authority-plan.md
│   ├── author-profiles.md
│   └── trust-signals.md
└── brand-identity/
    ├── ci-option-1.html (through 10)
    └── selected-design.html (client's choice)
```

### After BUILD (⑤-⑧):
```
clients/[client-name]/website/src/pages/en/
├── authors/[name].astro
├── guides/[topic].astro
├── blog/[slug].astro
└── services/[service].astro
```

### After REVIEW (⑨-⑪):
```
clients/[client-name]/reviews/
├── [page]-seo-audit.md (PASS/FAIL)
├── [page]-eeat-score.md (0-100)
└── [page]-readability-report.md (0-100)
```

### After PUBLISH (⑫-⑭):
```
clients/[client-name]/website/src/pages/
├── en/blog/[slug].astro
├── ms/blog/[slug-ms].astro
└── zh/blog/[slug-zh].astro

Live at:
✅ www.inghengcredit.com/en/blog/slug
✅ www.kreditloan.my/ms/blog/slug-ms
✅ www.inghengcredit.my/zh/blog/slug-zh
```

---

## ⚡ Power User Tips

### Parallel Execution
Some commands can run in parallel:

```bash
# After ①, run ②③④ in parallel (they all use ① outputs)
/2-organize-by-intent &
/3-plan-authority &
/4-design-brand-options &

# After content built, run all reviews in parallel
/9-review-seo &
/10-review-eeat &
/11-review-readability &
```

### Batch Processing
Review multiple pages at once:

```bash
# Review all blog posts
for post in blog/*; do
  /9-review-seo $post
  /10-review-eeat $post
  /11-review-readability $post
done
```

### Skip Phases (With Caution)
If you already have ONBOARD assets from previous client in same industry:

```bash
# Copy ONBOARD assets
cp -r clients/previous-client/onboarding clients/new-client/
cp -r clients/previous-client/eeat-strategy clients/new-client/

# Customize for new client
# Edit business-brief.md, personas.md

# Start at BUILD phase
/5-build-author
/7-build-blog
# ...
```

⚠️ **Warning:** Only skip if truly similar business. When in doubt, run full ONBOARD.

---

## 📚 Additional Resources

- **SEO-WORKFLOW-SWIMLANE.html** - Visual swimlane diagram
- **presentation-2-agents-and-skills.html** - Agent architecture
- **SEO-WORKFLOW-COMPREHENSIVE-GUIDE.md** - Detailed guide
- **COMMAND-EXECUTION-ORDER.md** - Quick reference
- **SEO-pro.md** - 30-year SEO knowledge base

---

## 🆘 Getting Help

**Stuck? Follow this decision tree:**

1. **"What command do I run next?"**
   → Check this README, follow the numbers ①→⑭

2. **"I got an error about missing file"**
   → Check "Common Error Messages" table above
   → Run the command number it suggests

3. **"Review failed, what do I do?"**
   → Read the review report (lists specific fixes)
   → Fix the issues
   → Re-run the review command
   → Repeat until PASS

4. **"Can I skip a phase?"**
   → No. Follow ①→⑭ order. Dependencies are strict.

5. **"How long does the whole workflow take?"**
   → New client: 15-20 hours (spread over 5 days)
   → New blog post: 4-6 hours (can be done in 1 day)

---

## ✅ Success Metrics

**You're doing it right when:**
- ✅ No files are missing (dependencies satisfied)
- ✅ All reviews pass on first or second try
- ✅ Deployments succeed without errors
- ✅ Content ranks within 30 days
- ✅ Team can follow workflow without constant questions

**Warning signs:**
- ❌ Frequently getting "file not found" errors (skipping steps)
- ❌ Reviews always fail (BUILD quality issues)
- ❌ Deployments break (PUBLISH configuration issues)
- ❌ Team confused about what to do next (need better training)

---

## 🎯 NEW: Long-Tail Keyword Strategy (Command ①b)

**Why Command ①b Was Added:**

Traditional keyword research (Command ①) focuses on:
- Primary keywords (1-2 words)
- High-volume, high-competition terms
- Competitor gap analysis

But **70% of all search traffic comes from long-tail keywords** (3-7+ words):
- Lower competition → Easier to rank
- Higher intent → Better conversion rates (15-20% vs. 2-3%)
- Faster results → Rank in 2-4 weeks vs. 6-12 months
- More specific → Attracts ready-to-buy customers

**Command ①b specifically:**
- Discovers 200-500 long-tail variations using DataForSEO
- Organizes them into 15-20 topic clusters
- Creates a 12-month content calendar
- Provides monthly scheduling for consistent content production

**Example:**
```
Head Term (Command ①):
  "equipment financing" → 10,000 searches/month, VERY HIGH difficulty, 2% conversion

Long-Tail (Command ①b):
  "how to finance mini excavator for small construction business Malaysia"
  → 45 searches/month, LOW difficulty, 18% conversion

Strategy: Target 150+ long-tail terms = 3,000 monthly sessions + 540 leads
```

**When to Run:**
- **Always run after Command ①** for new clients
- **Monthly refresh** to discover new opportunities
- **Quarterly deep-dive** to expand topic clusters

**Success Metrics (6 months):**
- 150+ long-tail keywords ranking top 10
- 2,500-4,000 monthly organic sessions
- 300+ qualified leads/month
- RM 60,000-100,000 monthly revenue

Long-tail keywords = competitive advantage for SMBs competing with large companies.

---

**System Version:** 2.1 (Added Long-Tail Keyword Research)
**Last Updated:** 2025-11-10
**Maintained by:** SEO Workflow Team

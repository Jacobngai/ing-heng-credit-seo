# Command ② /2-organize-by-intent

**Phase:** ONBOARD
**Primary Agent:** hub-and-spoke-architect
**Time:** 2-3 hours (AI working)
**Status:** ⚠️ DEPRECATED - Functionality now in Command ①b

## ⚠️ IMPORTANT: This Command May Be Redundant

**If you've run Command ①b /1b-research-long-tail-keywords:**
- ✅ Intent classification already done (CSV "intent" column)
- ✅ Topic clusters already created (topic-clusters.json)
- ✅ Hub-spoke structure already planned (recommended_hub_page in clusters)
- ✅ Prioritization already done (12-month-longtail-calendar.md)

**You can SKIP this command** and go directly to BUILD phase (Commands ⑤⑥⑦⑧).

---

## When to Still Use This Command

Use Command ② ONLY if:
1. You did NOT run Command ①b (no long-tail keyword research)
2. You want ADDITIONAL intent analysis beyond what's in CSV
3. You want custom hub-spoke structure different from topic clusters

Otherwise, skip to BUILD phase.

---

## Purpose (If Still Using)
Map all keywords and content ideas to the 4 search intents, then create hub-and-spoke content architecture.

## Prerequisites

✅ **Required files from ① /1-research-business:**
- `business-brief.md` - Understanding of business
- `personas.md` - Target audience understanding
- `keyword-opportunities.csv` - Main keyword database
- `long-tail-keywords.csv` - Long-tail keyword database (optional, if exists)

### Validation Check
```
❌ If missing any file above:
→ Go back: Run ① /1-research-business for this client first
```

## What This Command Does

The **hub-and-spoke-architect** agent will:

1. **Load Previous Research**
   - Read business-brief.md
   - Read personas.md
   - Import keyword-opportunities.csv
   - Import long-tail-keywords.csv (if exists)

2. **Classify Keywords by Intent** (SEO-pro.md Chapter 2)
   - **Informational:** How-to, what is, why
   - **Commercial Investigation:** Best X, X vs Y, reviews
   - **Transactional:** Buy, price, service pages
   - **Local:** Near me, in [city]

3. **Map to Customer Journey**
   - TOFU (Top of Funnel) → Informational
   - MOFU (Middle) → Commercial Investigation
   - BOFU (Bottom) → Transactional

4. **Design Hub-and-Spoke Architecture**
   - Identify 2-3 hub topics (broad, high-authority)
   - Map 8-12 spoke topics per hub
   - Create internal linking strategy

5. **Prioritize Content Creation**
   - Score by: Search volume + Difficulty + Business value
   - Create content calendar (what to build first)

## Output Files Created

```
clients/[client-name]/content-strategy/
├── content-strategy-map.md
│   ├── Informational keywords (TOFU)
│   ├── Commercial investigation keywords (MOFU)
│   ├── Transactional keywords (BOFU)
│   ├── Local keywords (if applicable)
│   └── Intent mapping table
│
├── hub-spoke-plan.md
│   ├── Hub 1: [Topic]
│   │   ├── Spoke 1: [Subtopic]
│   │   ├── Spoke 2: [Subtopic]
│   │   └── ... (8-12 spokes)
│   ├── Hub 2: [Topic]
│   │   └── ... (8-12 spokes)
│   └── Internal linking map
│
├── priority-matrix.md
│   ├── HIGH PRIORITY (build first)
│   ├── MEDIUM PRIORITY (build second)
│   └── LOW PRIORITY (build later)
│
└── keyword-database.csv
    └── Enhanced with intent classification and priority scores
```

## Skills Used
- `keyword-research` - Keyword discovery and analysis
- `intent-mapping` - Classify keywords by search intent
- `content-clustering` - Group related keywords
- `priority-scoring` - Score content opportunities
- `hub-spoke-planning` - Design content architecture

## Agent Instructions

```
You are the hub-and-spoke-architect agent. Organize content strategy by search intent.

CLIENT: [client-name]

STEP 1: LOAD RESEARCH
Read from clients/[client-name]/onboarding/:
- business-brief.md
- personas.md
- keyword-opportunities.csv
- long-tail-keywords.csv (if exists - merge with keyword-opportunities.csv)

STEP 2: CLASSIFY BY INTENT
For each keyword, determine:
- Informational (how-to, what is, guide)
- Commercial (best X, X vs Y, comparison)
- Transactional (buy, price, service)
- Local (near me, in [city])

Use SEO-pro.md Chapter 2 as reference.

STEP 3: CREATE HUB-SPOKE ARCHITECTURE
- Identify 2-3 hub topics (broad authority topics)
- Map 8-12 spoke topics per hub
- Design internal linking strategy

STEP 4: PRIORITIZE
Score each content piece:
- Search volume (0-10)
- Keyword difficulty (0-10, lower is better)
- Business value (0-10)
- Total score = priority

STEP 5: CREATE FILES
Save to clients/[client-name]/content-strategy/:
✅ content-strategy-map.md
✅ hub-spoke-plan.md
✅ priority-matrix.md
✅ keyword-database.csv (enhanced)

These files are REQUIRED for commands ⑥⑦⑧.
```

## Success Criteria
- [ ] content-strategy-map.md has all 4 intent categories
- [ ] hub-spoke-plan.md defines 2-3 hubs with 8-12 spokes each
- [ ] priority-matrix.md ranks content by importance
- [ ] keyword-database.csv enhanced with intent + priority
- [ ] All files saved in `clients/[client-name]/content-strategy/`

## Next Step
After this completes successfully:
→ Run **③ /3-plan-authority** or **④ /4-design-brand-options** (can run in parallel)

## Common Errors

**Error:** `business-brief.md not found`
**Solution:** Run **① /1-research-business** first

**Error:** `keyword-opportunities.csv empty`
**Solution:** Re-run **① /1-research-business** with proper keyword research

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10

# Command ①b /1b-research-long-tail-keywords

**Phase:** ONBOARD
**Primary Agent:** long-tail-keyword-researcher
**Time:** 30-60 minutes (AI working)

## Purpose
Discover 200-500+ long-tail keywords (3-7+ word phrases) that the client can realistically rank for and organize them into a 12-month content calendar.

## Prerequisites
✅ **Command ① must complete first** - Need business-brief.md and keyword-opportunities.csv

## What This Command Does

The **long-tail-keyword-researcher** agent will:

1. **Extract Seed Keywords**
   - Read keyword-opportunities.csv from command ①
   - Identify 8-12 primary seed keywords
   - Use these as foundation for expansion

2. **DataForSEO Long-Tail Mining**
   - Related Keywords API (depth 3)
   - Keyword Suggestions API
   - Keywords For Keywords API
   - Filter for 3-7+ word queries
   - Target 20-500 monthly search volume
   - Filter for LOW to MEDIUM difficulty

3. **Specialized Long-Tail Research**
   - Question-based keywords (how, what, when, where, why)
   - Location-specific (Kuala Lumpur, Selangor, Johor, etc.)
   - Problem/solution (bad credit, no deposit, fast approval)
   - Comparison keywords (vs, versus, or, alternative)
   - Industry-specific (construction, logistics, manufacturing)

4. **Organize Into Topic Clusters**
   - Group 200-500 keywords into 15-20 clusters
   - Example: "Forklift Financing" (45 keywords), "Excavator Financing" (38 keywords)
   - Assign priority: High, Medium, Low
   - Score by opportunity (volume + difficulty + intent)

5. **Generate 12-Month Content Calendar**
   - Month 1-3: Quick wins (low-hanging fruit)
   - Month 4-6: Topic authority building
   - Month 7-12: Expansion and optimization
   - Allocate 8-12 posts/month
   - Map keywords to specific publishing dates

## Output Files Created

```
clients/[client-name]/
├── onboarding/
│   └── long-tail-keywords.csv
│       └── 200-500 long-tail keywords with metadata
│           (keyword, volume, difficulty, intent, cluster, priority, word_count)
│
└── content-strategy/
    ├── 12-month-longtail-calendar.md
    │   └── Monthly content plan with keyword assignments
    │
    └── topic-clusters.json
        └── 15-20 topic clusters with grouped keywords
```

### Sample long-tail-keywords.csv:
```csv
keyword,search_volume,difficulty,intent,topic_cluster,priority,word_count,estimated_cpc,competition
"how to apply for equipment financing Malaysia",60,low,commercial,equipment-financing-general,high,7,2.40,low
"forklift rental no deposit Selangor",35,low,transactional,forklift-leasing,high,5,1.80,low
"bad credit equipment loan options",80,medium,commercial,financing-alternatives,medium,5,3.20,medium
"equipment financing vs cash purchase",120,medium,informational,buying-guides,medium,5,1.90,low
"electric forklift financing Malaysia",45,low,commercial,forklift-leasing,high,5,2.10,low
"mini excavator loan application process",38,low,commercial,excavator-financing,high,6,1.95,low
"lorry financing fast approval KL",55,low,transactional,lorry-financing,high,5,2.30,low
... (200-500 more)
```

### Sample topic-clusters.json:
```json
{
  "client": "ing-heng-credit",
  "language": "en",
  "total_clusters": 18,
  "total_keywords": 428,
  "clusters": [
    {
      "cluster_id": 1,
      "name": "Equipment Financing General",
      "keyword_count": 80,
      "priority": "high",
      "avg_search_volume": 72,
      "keywords": [
        "how to apply for equipment financing Malaysia",
        "equipment financing for small business",
        "equipment financing calculator Malaysia"
      ],
      "content_opportunities": 10
    },
    {
      "cluster_id": 2,
      "name": "Forklift Financing",
      "keyword_count": 45,
      "priority": "high",
      "avg_search_volume": 58,
      "keywords": [
        "forklift rental no deposit Selangor",
        "electric forklift financing Malaysia",
        "used forklift loan options"
      ],
      "content_opportunities": 6
    }
  ]
}
```

### Sample 12-month-longtail-calendar.md:
```markdown
# 12-Month Long-Tail Keyword Content Calendar

Client: ing-heng-credit
Total Keywords: 428 long-tail opportunities
Publishing Frequency: 10 posts/month
Expected Results: 3,200 monthly sessions (6 months)

---

## Month 1 (November 2025) - Quick Wins

### Week 1: Equipment Financing General
1. **"how to apply for equipment financing Malaysia"** (60 vol, LOW diff)
   - Publish: Nov 4, 2025
   - Content type: Step-by-step guide
   - Word count: 1,800
   - Target rank: Top 10 within 2 weeks

2. **"equipment financing for small business Malaysia"** (85 vol, LOW diff)
   - Publish: Nov 7, 2025
   - Content type: Comprehensive guide
   - Word count: 2,200
   - Target rank: Top 10 within 3 weeks

### Week 2: Forklift Financing
3. **"forklift rental no deposit required Selangor"** (35 vol, LOW diff)
4. **"electric forklift financing Malaysia"** (45 vol, LOW diff)

... (8-12 posts total)

---

## Month 2-12 (December 2025 - October 2026)
[Detailed monthly plans...]
```

## Skills Used
- DataForSEO MCP tools for keyword discovery
- Long-tail keyword expansion techniques
- Topic clustering and organization
- Content calendar planning

## Agent Instructions

When this command is run, invoke the **long-tail-keyword-researcher** agent with this prompt:

```
You are the long-tail-keyword-researcher agent. Mine 200-500 long-tail keywords for this client.

CLIENT: [client-name]
LANGUAGE: [en/ms/zh]
SEED KEYWORDS: Read from clients/[client-name]/onboarding/keyword-opportunities.csv

TASKS:
1. Extract 8-12 seed keywords from keyword-opportunities.csv
2. Use DataForSEO MCP tools to discover 200-500 long-tail variations:
   - mcp__dataforseo__dataforseo_labs_google_related_keywords
   - mcp__dataforseo__dataforseo_labs_google_keyword_suggestions
   - mcp__dataforseo__dataforseo_labs_google_keyword_ideas
3. Filter for:
   - 3-7+ word queries
   - 20-500 monthly search volume
   - LOW to MEDIUM difficulty
   - Commercial/transactional intent
4. Organize into 15-20 topic clusters
5. Assign priority scores (high/medium/low)
6. Generate 12-month content calendar
7. Export to CSV with all metadata

VALIDATION:
Before finishing, verify these files exist:
✅ long-tail-keywords.csv (200+ keywords)
✅ 12-month-longtail-calendar.md (monthly plans for 12 months)
✅ topic-clusters.json (15-20 clusters)

These files are REQUIRED for monthly content planning.
Do not skip any file.

OUTPUT LOCATION:
- CSV: clients/[client-name]/onboarding/
- Calendar: clients/[client-name]/content-strategy/
- Clusters: clients/[client-name]/content-strategy/
```

## Success Criteria
- [ ] long-tail-keywords.csv contains 200-500 keywords
- [ ] Average keyword length is 4+ words
- [ ] 15-20 topic clusters created
- [ ] 12-month content calendar generated
- [ ] High priority keywords identified (50-100)
- [ ] Keywords include question-based, location-specific, and problem-solving variants

## Expected Results (6 Months)

**Traffic Growth:**
- 150+ long-tail keywords ranking in top 10
- 80+ keywords in positions 1-3
- 2,500-4,000 additional monthly sessions

**Business Impact:**
- 15-20% conversion rate (vs. 2-3% for head terms)
- 50-80 qualified leads/month from long-tail traffic
- RM 60,000-100,000 monthly revenue from long-tail keywords

**Why This Matters:**
Long-tail keywords = 70% of search traffic + easier to rank + higher conversion

## Next Step
After this completes successfully:
→ Run **② /2-organize-by-intent** (uses long-tail keywords in content strategy)

## Common Errors

**Error:** "keyword-opportunities.csv not found"
**Solution:** Run **① /1-research-business** first

**Error:** "DataForSEO rate limit exceeded"
**Solution:** Add delays between API calls, or run in smaller batches

**Error:** "Insufficient long-tail variations found"
**Solution:** Lower search volume threshold to 10/month, or increase depth to 4

**Error:** "Too many keywords (1000+)"
**Solution:** Apply stricter filters (difficulty LOW only, volume >30)

---

## Why Long-Tail Keywords Win

**Example:**

**Head Term:**
- Keyword: "equipment financing"
- Volume: 10,000/month
- Difficulty: VERY HIGH
- Time to rank: 12+ months
- Conversion rate: 2%
- Your chance of ranking: 5%

**Long-Tail:**
- Keyword: "how to finance mini excavator for small construction business Malaysia"
- Volume: 45/month
- Difficulty: LOW
- Time to rank: 2-4 weeks
- Conversion rate: 18%
- Your chance of ranking: 80%

**Math:**
- 1 head term at 2% conversion = 200 leads/month (IF you rank)
- 150 long-tail terms at 18% conversion = 300 leads/month (you WILL rank)

**Long-tail = faster, easier, more profitable**

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10

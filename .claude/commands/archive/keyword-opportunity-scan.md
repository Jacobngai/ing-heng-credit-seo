# /keyword-opportunity-scan

Launch the Analytics Agent to scan all keyword data using DataForSEO MCP, identifying high-opportunity keywords that are underexploited (high search volume, low competition, we can rank for) and recommending content to capture them.

**What this command does:**
1. Loads Analytics Agent from `.claude/agents/analytics.md`
2. Agent executes `keyword-opportunity-scan.md` skill
3. Uses DataForSEO MCP to analyze keyword landscape:
   - Search volume for 10,000+ keyword variations
   - Competition level (difficulty score)
   - Current ranking positions
   - Featured snippet opportunities
   - SERP feature analysis
   - Trend analysis (growing keywords)
4. Filters for high-opportunity keywords:
   - Search volume 100-5,000/month (sweet spot)
   - Competition LOW-MEDIUM
   - We don't rank yet (gap opportunity)
   - Growing trend (increasing interest)
5. Ranks by opportunity value
6. Recommends content to capture
7. Generates roadmap for content creation

**Expected output:**
- Keyword opportunity list (top 50-100)
- Ranked by opportunity value
- Content recommendations per keyword
- Estimated traffic potential
- Competition analysis
- Content priority roadmap
- Execution time: ~18-20 minutes

**Usage:**
```bash
/keyword-opportunity-scan
```

**No arguments needed** - agent scans all client keywords and opportunities.

**Opportunity scoring methodology:**

**Opportunity Score = (Search Volume × Authority Potential) / Competition Level**

- **High Opportunity:** Score 500+ (GOLD - prioritize)
- **Good Opportunity:** Score 300-500 (SILVER - pursue)
- **Fair Opportunity:** Score 100-300 (BRONZE - consider)
- **Low Opportunity:** Score <100 (skip for now)

**Filtering criteria:**

**Search Volume:**
- Minimum: 50 searches/month (has demand)
- Maximum: 10,000 searches/month (easier to rank)
- Sweet spot: 200-2,000/month (high value, rankable)

**Competition:**
- Easy: Keyword Difficulty <30
- Medium: Keyword Difficulty 30-50
- Hard: Keyword Difficulty 50+
- **Target:** Easy + Medium only

**Ranking Status:**
- We don't rank: Priority (new opportunity)
- We rank position 11-20: Can improve (push to top 10)
- We rank position 21+: Opportunity (significant work needed)

**Trend:**
- Growing: Positive (increasing interest)
- Stable: OK (consistent demand)
- Declining: Skip (demand decreasing)

**Generated files:**

```
/analytics/keyword-opportunities/
├── [date]-keyword-opportunity-scan.csv (top 100)
├── [date]-content-roadmap.md (prioritized list)
├── [date]-opportunity-analysis.md (detailed breakdown)
└── [client-name]-keyword-opportunities.md (per client)

/clients/[client-name]/research/
└── keyword-opportunities/
    ├── immediate-opportunities.md (top 10)
    ├── short-term-opportunities.md (top 20)
    └── long-term-opportunities.md (next 30)
```

**Example opportunity scan results:**

```markdown
# Keyword Opportunity Scan Report
## November 2024

---

## SUMMARY

**Total Keywords Analyzed:** 12,450
**High-Opportunity Keywords Found:** 47 (GOLD)
**Good-Opportunity Keywords:** 95 (SILVER)
**Fair-Opportunity Keywords:** 156 (BRONZE)
**Total Exploitable Opportunities:** 298+

**Estimated Traffic Potential:** +3,200-4,100 monthly visitors
**Estimated Leads:** +120-160 qualified leads

---

## TOP 10 GOLD OPPORTUNITIES (Highest Priority)

### 1. "Equipment Financing for Startups"
- **Search Volume:** 720/month
- **Keyword Difficulty:** 28 (Easy)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #4 (da 62)
- **Opportunity Score:** 892 (HIGHEST)
- **SERP Features:** None (pure organic)
- **Trend:** Growing +12% YoY
- **Content Recommendation:**
  - Type: Comprehensive guide (2,500-3,000 words)
  - Focus: Startup-specific financing challenges
  - Include: Case study of funded startup
  - Target: Long-tail variations (startup + equipment + financing)
- **Estimated Traffic:** 180-220 visitors/month
- **Timeline:** 1-2 weeks for content, 4-6 weeks for ranking
- **Priority:** IMMEDIATE

### 2. "Used Equipment Financing Malaysia"
- **Search Volume:** 580/month
- **Keyword Difficulty:** 32 (Easy)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #3 (da 58)
- **Opportunity Score:** 814
- **SERP Features:** Featured snippet opportunity (no current snippet)
- **Trend:** Growing +8% YoY
- **Content Recommendation:**
  - Type: Buying guide with financing focus
  - Include: Price ranges for used equipment
  - Add: Depreciation impact on financing
  - Structure: FAQ format for featured snippet
- **Estimated Traffic:** 150-190 visitors/month
- **Timeline:** 1-2 weeks for content, 3-5 weeks for ranking
- **Priority:** IMMEDIATE

### 3. "Equipment Financing ROI Calculator"
- **Search Volume:** 420/month
- **Keyword Difficulty:** 18 (Easy)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** None (content gap)
- **Opportunity Score:** 1,050
- **SERP Features:** Calculator tool potential
- **Trend:** Stable (consistent demand)
- **Content Recommendation:**
  - Type: Interactive tool + guide
  - Include: ROI calculator (interactive)
  - Explain: How to calculate equipment financing ROI
  - Content: 1,500 words + calculator
- **Estimated Traffic:** 120-160 visitors/month
- **Timeline:** 2-3 weeks (needs tool development)
- **Priority:** HIGH

### 4. "Fast Equipment Financing No Credit Check"
- **Search Volume:** 380/month
- **Keyword Difficulty:** 35 (Easy-Medium)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #7 (da 55)
- **Opportunity Score:** 687
- **SERP Features:** None
- **Trend:** Growing +6% YoY
- **Content Recommendation:**
  - Type: Landing page + guide
  - Focus: Speed and accessibility
  - Include: Application process details
  - Content: 1,200-1,500 words
- **Estimated Traffic:** 100-140 visitors/month
- **Timeline:** 5-7 days for content, 2-4 weeks for ranking
- **Priority:** HIGH

### 5. "Equipment Financing Tax Deduction"
- **Search Volume:** 350/month
- **Keyword Difficulty:** 28 (Easy)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #5 (da 60)
- **Opportunity Score:** 745
- **SERP Features:** None (but YMYL - financial)
- **Trend:** Growing +15% YoY (seasonally increases at tax time)
- **Content Recommendation:**
  - Type: Tax guide (2,000-2,500 words)
  - Include: Malaysian tax incentives
  - Cite: Official tax authority sources
  - Add: Professional/government E-E-A-T
- **Estimated Traffic:** 110-150 visitors/month
- **Timeline:** 1-2 weeks for content, 3-5 weeks for ranking
- **Priority:** HIGH

### 6. "Equipment Leasing vs Buying Comparison"
- **Search Volume:** 620/month
- **Keyword Difficulty:** 42 (Medium)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #2 (da 65)
- **Opportunity Score:** 542
- **SERP Features:** Comparison table, featured snippet
- **Trend:** Stable
- **Content Recommendation:**
  - Type: Detailed comparison (2,500+ words)
  - Include: Side-by-side comparison table
  - Add: Financial analysis and ROI
  - Content: Interactive comparison tool
- **Estimated Traffic:** 120-160 visitors/month
- **Timeline:** 2 weeks for content, 6-8 weeks for ranking (higher difficulty)
- **Priority:** MEDIUM-HIGH

### 7. "Commercial Vehicle Financing"
- **Search Volume:** 500/month
- **Keyword Difficulty:** 48 (Medium)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #1 (da 72)
- **Opportunity Score:** 358
- **SERP Features:** None
- **Trend:** Stable
- **Content Recommendation:**
  - Type: Commercial vehicle guide (2,000-2,500 words)
  - Focus: Lorries, buses, vehicles
  - Include: Financing options specific to vehicles
- **Estimated Traffic:** 80-120 visitors/month
- **Timeline:** 1-2 weeks for content, 8-12 weeks for ranking (high difficulty)
- **Priority:** MEDIUM

### 8. "Equipment Financing for Retailers"
- **Search Volume:** 280/month
- **Keyword Difficulty:** 25 (Easy)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** Not ranking (gap)
- **Opportunity Score:** 823
- **SERP Features:** None
- **Trend:** Growing +10% YoY
- **Content Recommendation:**
  - Type: Industry-specific guide
  - Focus: Retail equipment (POS, fixtures, displays)
  - Include: Case study from retail client
- **Estimated Traffic:** 70-100 visitors/month
- **Timeline:** 5-7 days for content, 2-4 weeks for ranking
- **Priority:** HIGH

### 9. "Equipment Financing for Nonprofits"
- **Search Volume:** 190/month
- **Keyword Difficulty:** 22 (Easy)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** Not ranking (content gap)
- **Opportunity Score:** 712
- **SERP Features:** None
- **Trend:** Stable
- **Content Recommendation:**
  - Type: Nonprofit-specific guide
  - Focus: Grant opportunities + financing
  - Include: Government programs for nonprofits
- **Estimated Traffic:** 50-80 visitors/month
- **Timeline:** 5-7 days for content, 2-4 weeks for ranking
- **Priority:** MEDIUM

### 10. "Equipment Financing Bad Credit"
- **Search Volume:** 410/month
- **Keyword Difficulty:** 38 (Medium)
- **Our Rank:** Not ranking
- **Top Competitor Rank:** #6 (da 58)
- **Opportunity Score:** 625
- **SERP Features:** None
- **Trend:** Growing +7% YoY
- **Content Recommendation:**
  - Type: Guide for challenged borrowers
  - Focus: Improve credit while financing
  - Include: Alternative financing options
- **Estimated Traffic:** 100-140 visitors/month
- **Timeline:** 1-2 weeks for content, 4-6 weeks for ranking
- **Priority:** MEDIUM-HIGH

---

## SILVER OPPORTUNITIES (20 examples from 95)

### 11-30: Medium Priority
(Similar format but lower opportunity score)

Examples:
- "Equipment Financing Agreement Template" (Score: 485)
- "Small Business Equipment Financing" (Score: 472)
- "Construction Equipment Rental Financing" (Score: 458)
- [... 17 more at scores 300-450]

**Aggregate estimated traffic:** +800-1,000 monthly visitors

---

## BRONZE OPPORTUNITIES (30 examples from 156)

### 31-60: Lower Priority
(Fair opportunities for longer-term planning)

**Aggregate estimated traffic:** +400-600 monthly visitors

---

## CONTENT CREATION ROADMAP

### PHASE 1: Immediate (Next 2 Weeks)
**Target: Top 5 GOLD opportunities**

1. "Equipment Financing for Startups" (720/mo) - 2,500 words
2. "Used Equipment Financing Malaysia" (580/mo) - 2,000 words
3. "Fast Equipment Financing No Credit Check" (380/mo) - 1,500 words
4. "Equipment Financing Tax Deduction" (350/mo) - 2,000 words
5. "Equipment Financing for Retailers" (280/mo) - 1,800 words

**Total Content:** 9,800 words (~5-7 days writing)
**Estimated Traffic Gain:** 560-740 visitors/month

### PHASE 2: Short-term (Weeks 3-4)
**Target: Next 5 GOLD + top SILVER opportunities**

- "Equipment Leasing vs Buying" (620/mo)
- "Equipment Financing ROI Calculator" (420/mo)
- "Equipment Financing for Nonprofits" (190/mo)
- Plus 5 SILVER opportunities

**Total Content:** 12,000+ words
**Estimated Traffic Gain:** 800-1,100 visitors/month

### PHASE 3: Medium-term (Month 2)
**Target: Remaining GOLD and top SILVER**

- Build interactive tools (calculators, comparisons)
- Create industry-specific guides
- Expand on quick-win opportunities

**Estimated Traffic Gain:** 600-900 visitors/month

### PHASE 4: Long-term (Months 3-6)
**Target: BRONZE and related keywords**

- Fill out content network
- Create comprehensive topic clusters
- Build authority in all niches

**Estimated Traffic Gain:** 400-600 visitors/month

---

## ESTIMATED TIMELINE TO FULL CAPTURE

- **Month 1:** Rank for 5-8 GOLD keywords = +500-800 vis/mo
- **Month 2:** Rank for 15-20 GOLD + SILVER = +1,500-2,000 vis/mo total
- **Month 3:** Rank for 30-40 keywords = +2,200-2,800 vis/mo total
- **Month 4-6:** Rank for 70%+ of opportunities = +3,200-4,100 vis/mo total

---

## TRENDING KEYWORDS (Emerging Opportunities)

**Keywords with 10%+ YoY growth:**
1. "Equipment Financing for Startups" (+12%)
2. "Equipment Financing Tax Deduction" (+15%)
3. "Sustainability Equipment Financing" (new, emerging)
4. "Digital Equipment Financing" (+18%, emerging)
5. "Green Equipment Financing" (+8%)

**Recommendation:** Prioritize high-growth keywords for first-mover advantage

---

## FEATURED SNIPPET OPPORTUNITIES

**Keywords with featured snippet potential:**
- "Used Equipment Financing" (FAQ format)
- "Equipment Leasing vs Buying" (Table format)
- "Equipment Financing Process" (Step format)
- "Equipment Financing Calculator" (Tool format)

**Estimated snippet wins:** 3-5 featured snippets = +100-200 traffic

---

## LONG-TAIL OPPORTUNITY CLUSTERS

**Long-tail keyword combinations:**
1. "Equipment Financing" + Equipment Types
   - Excavator financing (already ranking #8)
   - Forklift financing (already ranking #5)
   - Lorry financing (rank #12, can improve)
   - Boom lift financing (not ranking)

2. "Equipment Financing" + Use Cases
   - Startup financing (GOLD opportunity)
   - Contractor financing (good opportunity)
   - Retail financing (good opportunity)

3. "Equipment Financing" + Financial Status
   - Bad credit financing (medium opportunity)
   - Fast approval financing (good opportunity)
   - No credit check financing (good opportunity)

---

## NEXT STEPS

### This Week
1. Review keyword opportunity scan
2. Prioritize top 10-15 opportunities
3. Create content briefs
4. Begin writing top 5

### This Month
1. Publish top 10 GOLD opportunities (5,000-7,000 words)
2. Monitor rankings weekly
3. Build backlinks to new content
4. Plan SILVER opportunity content

### Next 3 Months
1. Publish 40+ GOLD + SILVER opportunities
2. Build featured snippet content
3. Create interactive tools
4. Monitor traffic gains

---

## EXPECTED TOTAL IMPACT

**Conservative Estimate:**
- New content pieces: 50+
- New keywords ranked: 40-50
- New monthly traffic: +2,500-3,500 visitors
- New qualified leads: +80-120 per month
- Revenue impact: +RM 40,000-60,000/month (estimated)

**Timeline:** 3-6 months to full implementation
**Investment:** 60-80 hours content writing + strategy
**ROI:** Extremely high (compounding growth)

---

**Recommendation:** Pursue GOLD opportunities first (high volume, low difficulty). These will compound over time, making SILVER and BRONZE increasingly valuable. This represents 6+ months of high-impact growth opportunities.
```

**After execution:**

1. **Review opportunity scan** (~25 minutes)
   - Verify keyword difficulty scores
   - Assess opportunity rankings
   - Identify quick wins

2. **Prioritize content plan** (~20 minutes)
   - Select top 10-20 opportunities
   - Organize by difficulty and traffic
   - Create content brief list

3. **Create content roadmap** (~15 minutes)
   - Timeline for creating content
   - Assign to content calendar
   - Set ranking targets

4. **Begin content creation** (ongoing)
   - Start with GOLD opportunities
   - Track rankings as content publishes
   - Monitor traffic gains

5. **Monitor and adjust** (ongoing)
   - Track new content rankings
   - Monitor keyword trends
   - Rerun scan quarterly

**Opportunity scoring factors:**

- **Search volume:** Higher volume = higher value
- **Keyword difficulty:** Lower difficulty = easier to rank
- **Current ranking:** Not ranking = gap opportunity
- **Trend:** Growing = increasing opportunity
- **Competition:** Fewer ranking sites = better opportunity
- **Intent match:** Good fit with services = better convert

**When to run keyword opportunity scan:**

- **Monthly:** Track emerging opportunities
- **Quarterly:** Full scan and planning
- **When launching new service:** Find keywords for new offering
- **Competitor launches content:** Identify what they're targeting
- **Traffic plateaus:** Find new growth opportunities

**Typical GOLD opportunity metrics:**
- 200-1,000 searches/month (high value, rankable)
- Difficulty <40 (easy to rank)
- Not currently ranked (new opportunity)
- Growing trend (expanding market)
- Good intent match (will convert)

**Expected outcomes:**
- 50-100+ new keyword opportunities identified
- Ranked by opportunity value (score)
- Content recommendations per keyword
- Estimated traffic for each
- 3-6 months of content planning

**Employee next steps:**
1. Review keyword opportunity scan (25 min)
2. Prioritize top 10-15 GOLD opportunities
3. Create detailed content briefs
4. Plan content calendar around opportunities
5. Begin with highest-opportunity keywords
6. Track rankings and traffic gains

**This is PHASE 4** - Intelligent keyword research and opportunity identification for sustained, strategic growth.

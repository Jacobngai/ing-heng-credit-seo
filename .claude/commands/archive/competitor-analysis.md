# /competitor-analysis

Launch the Competitor Intelligence Agent to analyze a competitor domain using DataForSEO MCP, identifying their content strategy, ranking keywords, backlink profile, and actionable opportunities for differentiation.

**What this command does:**
1. Loads Competitor Intelligence Agent from `.claude/agents/competitor-intelligence.md`
2. Agent executes `competitor-analysis-dataforseo.md` skill
3. Uses DataForSEO MCP to analyze target competitor:
   - Keywords they rank for (all keywords)
   - Ranking positions and changes
   - Estimated traffic and value
   - Backlink profile (top referring domains)
   - Content strategy (blog topics, structure)
   - Domain authority and ranking power
   - Featured snippets captured
   - Content gaps and opportunities
4. Compares to client domain
5. Identifies win opportunities (keywords to target)
6. Generates strategic recommendations
7. Creates detailed competitor analysis report

**Expected output:**
- Comprehensive competitor analysis
- Keywords they rank for (top 50+)
- Backlink analysis
- Content strategy assessment
- Keyword gap analysis
- Opportunity identification
- Strategic recommendations
- Execution time: ~12-15 minutes per competitor

**Usage:**
```bash
/competitor-analysis [domain]
```

**Example:**
```bash
/competitor-analysis "competitor-equipment-financing.com.my"
```

**Analysis scope:**

1. **Keyword Rankings:**
   - All keywords competitor ranks for
   - Rank positions (top 10, top 20, top 100)
   - Search volume per keyword
   - Traffic estimates
   - Trend analysis (gaining/losing)

2. **Content Strategy:**
   - Topics covered (clusters)
   - Content types (blogs, guides, tools)
   - Publishing frequency
   - Content format preferences
   - Content length analysis

3. **Backlink Profile:**
   - Total referring domains
   - Total backlinks
   - Top referring sources
   - Backlink quality (authority)
   - Anchor text distribution
   - Link acquisition patterns

4. **Technical SEO:**
   - Domain authority estimate
   - Trust score
   - Backlink velocity
   - Indexation status (estimated)

5. **Opportunity Analysis:**
   - Keywords we can rank for but they don't
   - Keywords they rank for (we can beat)
   - Content gaps (topics they don't cover)
   - Backlink sources we can target

**Generated files:**

```
/clients/[client-name]/research/
├── competitor-analysis/
│   ├── [competitor-domain]-analysis.md (detailed report)
│   ├── [competitor-domain]-keywords.csv (ranked keywords)
│   ├── [competitor-domain]-backlinks.csv (top sources)
│   ├── [competitor-domain]-content-strategy.md (strategy assessment)
│   └── [competitor-domain]-opportunities.md (action items)
│
└── competitive-intelligence/
    └── competitor-comparison-matrix.md (vs client)
```

**Example competitor analysis report:**

```markdown
# Competitor Analysis Report
## Domain: competitor-equipment-financing.com.my
## Date: November 2024

---

## EXECUTIVE SUMMARY

### Competitor Overview
- **Domain:** competitor-equipment-financing.com.my
- **Domain Authority:** 58 (established authority)
- **Estimated Monthly Traffic:** 12,400 visitors
- **Keywords Ranked:** 847 keywords (all positions)
- **Top 10 Keywords:** 34 keywords
- **Total Backlinks:** 1,240 links
- **Referring Domains:** 186 domains

### Competitive Strength: MODERATE
- They have good authority but not dominant
- Content coverage is good but gaps exist
- We can compete with better content and links

---

## KEYWORD ANALYSIS

### Keywords They Rank For: 847 Total

#### Top 10 Keywords (High Value)
1. "Equipment Financing Malaysia" - Rank #2, 4,200 searches/mo, 890 vis/mo
2. "Forklift Financing" - Rank #4, 2,100 searches/mo, 420 vis/mo
3. "Equipment Leasing Options" - Rank #6, 1,800 searches/mo, 340 vis/mo
4. "How to Finance Equipment" - Rank #7, 1,600 searches/mo, 315 vis/mo
5. "Business Equipment Financing" - Rank #3, 1,400 searches/mo, 350 vis/mo
6. "Excavator Financing" - Rank #11, 900 searches/mo, 140 vis/mo (our opportunity)
7. "Equipment Financing for SME" - Rank #8, 850 searches/mo, 210 vis/mo
8. "Get Equipment Loan Fast" - Rank #5, 720 searches/mo, 175 vis/mo
9. "Construction Equipment Financing" - Rank #9, 680 searches/mo, 165 vis/mo
10. "Financing New Equipment" - Rank #15, 620 searches/mo (our opportunity)

#### Keywords We Can Rank For (Gap Analysis)
- "Excavator Financing" (rank #11 for them, can we beat for top 5?)
- "Equipment Financing for Startups" (they don't rank)
- "Used Equipment Financing" (they don't rank)
- "Equipment Depreciation Calculator" (they don't rank, tool opportunity)
- "DIY Equipment Maintenance" (they don't rank)
- "Equipment Financing ROI" (they don't rank)

#### Keywords Opportunities Summary
- Keywords they own and rank well: 34 (hard to beat)
- Keywords they rank for but moderate position: 120 (can beat)
- Keywords they don't rank for at all: 5+ identified (easy wins)
- **Estimated traffic opportunity:** +500-800 vis/mo from targeted content

---

## TRAFFIC ANALYSIS

### Estimated Monthly Traffic: 12,400 visitors

#### Traffic Distribution by Keyword Position
- Top 3: 4,200 visitors (34% of traffic)
- Rank 4-10: 5,100 visitors (41% of traffic)
- Rank 11-20: 2,000 visitors (16% of traffic)
- Rank 21+: 1,100 visitors (9% of traffic)

#### Traffic by Content Type (Estimated)
- Informational (guides, how-to): 6,200 vis (50%)
- Commercial (comparisons, reviews): 4,100 vis (33%)
- Transactional (financing, quotes): 2,100 vis (17%)

### Traffic Trends
- 3-month growth: +8% (modest growth)
- 6-month growth: +15% (steady growth)
- Trend: STABLE with slight upward trajectory

---

## CONTENT STRATEGY ANALYSIS

### Content Coverage by Topic
- Equipment Financing: 89 pieces (comprehensive)
- Equipment Leasing: 34 pieces (good)
- Specific Equipment (Excavators, Forklifts): 45 pieces
- Business/SME Financing: 28 pieces
- DIY Guides: 12 pieces
- Tools (Calculators, Comparisons): 8 pieces
- **Total Content:** ~216 pieces

### Content Format Analysis
- Blog posts (1,000-2,000 words): 70% (main focus)
- Long-form guides (3,000-5,000 words): 15%
- Landing pages (service pages): 10%
- Tools/Calculators: 5%

### Content Quality Assessment
- Readability: Good (8.0/10 average)
- Depth: Good (covers main topics well)
- E-E-A-T: Fair (could improve author credentials)
- Internal linking: Good (decent hub structure)
- Freshness: Fair (not all updated regularly)

### Content Gaps Identified (What They DON'T Cover)
1. Equipment Financing for Startups (no content)
2. Used/Second-Hand Equipment Financing (minimal coverage)
3. Equipment Depreciation Impact (no detailed guide)
4. Equipment Maintenance as Financing Factor (no coverage)
5. Digital Equipment Financing (no coverage)
6. Equipment Financing Alternatives (limited)

### Opportunities to Differentiate
1. **Go Deeper:** More detailed guides on existing topics
2. **Fill Gaps:** Cover topics they completely miss
3. **Better Structure:** Hub-and-spoke for main topics
4. **Tools:** Create calculators and comparison tools
5. **Case Studies:** More real client examples
6. **Freshness:** Regularly update with latest data

---

## BACKLINK PROFILE ANALYSIS

### Backlink Summary
- **Total Backlinks:** 1,240 links
- **Referring Domains:** 186 domains
- **Average Links per Domain:** 6.7 links
- **Backlink Velocity:** ~30 links/month (estimated)

### Top Referring Domains (Authority)
1. financemedia.my (DA 72) - 45 links
2. businessmalaysia.gov.my (DA 85) - 28 links
3. equipmentdirectory.asia (DA 62) - 22 links
4. smebusiness.my (DA 68) - 18 links
5. constructionnews.my (DA 70) - 15 links
6. logisticsasia.org (DA 58) - 12 links
7. industryguide.asia (DA 55) - 10 links
8. businessreview.my (DA 64) - 9 links
9. equipmentleasing.asia (DA 52) - 8 links
10. tenderboard.gov.my (DA 78) - 7 links

### Backlink Source Analysis
- Government/SME sites: 32% (high authority)
- Industry directories: 28% (medium authority)
- Industry publications/blogs: 25% (medium to high)
- Partner websites: 10% (medium)
- News mentions: 5% (high authority)

### Link Acquisition Opportunities
- We can target same high-authority sites (financial news, government SME programs)
- Guest post opportunities with equipment/finance bloggers
- Industry directory listings (many available)
- Government SME program links

---

## COMPETITIVE POSITIONING

### Strengths (Why We Should be Concerned)
1. **Higher Domain Authority** (58 vs client's ~45)
2. **More Content** (216 pieces vs client's ~127)
3. **More Backlinks** (1,240 links vs client's ~400)
4. **Better Rankings** (Rank #2 for "Equipment Financing Malaysia")
5. **Higher Traffic** (12,400 vis/mo vs client's ~2,890 vis/mo)

### Weaknesses (Our Opportunities)
1. **Poor E-E-A-T** (minimal author credentials)
2. **Content Gaps** (doesn't cover startups, used equipment)
3. **Low Conversion Focus** (mostly informational, weak transactional)
4. **Outdated Content** (many pieces 12+ months old)
5. **Weak Hub Structure** (content not well-organized by topic)
6. **Limited Tools** (no calculators, calculators are user magnets)

### Client Strengths to Leverage
1. Better personalization (equipment financing specialist)
2. Better conversion focus (landing pages optimized)
3. Better E-E-A-T (more author credentials)
4. Better content freshness (updated regularly)
5. Better internal linking (hub-spoke structure)

---

## STRATEGIC RECOMMENDATIONS

### PRIORITY 1: Content Gap Filling (HIGH IMPACT)
**They don't cover - we can own**

1. "Equipment Financing for Startups" (200+ searches/mo)
   - Create comprehensive guide
   - Target startup-specific financing
   - Estimated traffic: +150 vis/mo

2. "Used Equipment Financing Guide" (180+ searches/mo)
   - Fill gap in their coverage
   - Strong buyer intent
   - Estimated traffic: +120 vis/mo

3. "Equipment Financing for Businesses Under 1 Year Old" (140+ searches/mo)
   - Underserved niche
   - High intent
   - Estimated traffic: +90 vis/mo

**Expected Impact:** +360 monthly visitors from gap-filling content

### PRIORITY 2: Better Content Depth (MEDIUM IMPACT)
**We can beat them by going deeper on their topics**

Identify 5-10 of their top keywords and create better content:
- Longer, more comprehensive
- Better structure and readability
- More examples and case studies
- Better E-E-A-T signals
- Interactive elements (tools, calculators)

Example:
- Their "How to Finance Equipment" (rank #7): 1,500 words
- Our version could be: 2,500 words + calculator + case studies
- Could move from rank #7 to #3-4

**Expected Impact:** +500-800 monthly visitors from improved content

### PRIORITY 3: Link Building (MEDIUM IMPACT)
**Target their link sources**

1. Government/SME program links (32% of their links)
   - Financial media sites
   - SME business sites
   - Government resources

2. Industry directories (28% of their links)
   - Equipment databases
   - Finance directories
   - B2B listings

3. Partner/Guest post opportunities
   - Equipment blogs
   - Finance publications
   - Business websites

**Expected Impact:** +200-300 monthly traffic improvement from better rankings

### PRIORITY 4: Conversion Optimization (ONGOING)
**They have traffic but weak conversion**

- They focus on traffic, we should focus on conversions
- Create more transactional content
- Optimize landing pages
- Add CTAs and lead capture
- Better funnel structure

**Expected Impact:** +40-60 additional leads/month (from same traffic)

---

## 12-MONTH COMPETITIVE STRATEGY

**Month 1-3: Foundation**
- Create gap-filling content (3-5 new pieces)
- Begin link building to authority sites
- Start content refresh program
- Build hub pages for main topics

**Month 4-6: Scale**
- Publish 15-20 gap-filling pieces
- Launch 2 guest post campaigns
- Deepen existing content
- Acquire 30-40 quality backlinks

**Month 9-12: Dominate**
- Rank for most of their top keywords
- Better content depth and structure
- Strong backlink profile
- Position as authority vs them

---

## COMPETITIVE INTELLIGENCE SUMMARY

| Factor | Them | Us | Winner |
|--------|------|-----|--------|
| Domain Authority | 58 | 45 | Them (for now) |
| Content Volume | 216 | 127 | Them |
| Content Quality | Good | Excellent | Us |
| E-E-A-T | Fair | Good | Us |
| Conversion Focus | Weak | Strong | Us |
| Backlink Quality | Medium | Medium | Tie |
| Topic Coverage | Good | Fair | Them |
| Gaps Covered | Poor | Better | Us |
| Publishing Pace | Slow | Good | Us |
| Traffic Growth | +8% | +18% | Us |

---

## NEXT STEPS

### This Month
1. Create 3 gap-filling content pieces
2. Research link opportunities
3. Identify top 10 competitor keywords we can beat

### This Quarter
1. Publish 10+ gap-filling pieces
2. Launch 2 backlink campaigns
3. Refresh 5-10 pieces to beat their content

### Next Year
1. Rank for 70%+ of their high-value keywords
2. Position as primary authority in space
3. Exceed their traffic and lead generation

---

**Competitive Assessment:** WINNABLE - They are strong but have weaknesses we can exploit. With better content, gaps filled, and strategic links, we can surpass them in 9-12 months.
```

**After execution:**

1. **Review competitor analysis** (~20 minutes)
   - Verify keyword rankings accuracy
   - Assess competitive threats
   - Identify opportunity potential

2. **Prioritize opportunities** (~15 minutes)
   - Select top 5 keywords to target
   - Identify top 5 gaps to fill
   - Plan backlink sources

3. **Create opportunity roadmap** (~30 minutes)
   - Plan content to fill gaps
   - Create topic priority list
   - Assign to content calendar

4. **Launch competitive campaigns**
   - Create gap-filling content
   - Pursue competitor's backlink sources
   - Target their high-value keywords

5. **Monitor competitive progress** (ongoing)
   - Track keyword position changes
   - Monitor their new content
   - Update analysis quarterly

**When to conduct competitor analysis:**

- **Onboarding:** Analyze top 3 competitors per client
- **Quarterly:** Update competitor analysis
- **New keywords:** When targeting high-competition keywords
- **Stalled growth:** Identify competitive strategy shifts
- **Benchmark analysis:** Compare multiple competitors

**Key metrics to track competitor:**
- Ranking positions (all keywords)
- Traffic estimates
- Content count and quality
- Backlink count and quality
- Content gaps
- Publishing frequency
- Content freshness

**Expected insights:**
- Keyword opportunities (what they don't rank for)
- Content gaps (topics they miss)
- Backlink sources (high-authority targets)
- Content strategy (what's working for them)
- Ranking opportunities (which keywords we can beat)

**Employee next steps:**
1. Review competitor analysis report (20 min)
2. Identify top 5-10 opportunities
3. Create content plan to fill gaps
4. Plan link building to competitor's sources
5. Track results monthly

**This is PHASE 4** - Competitive intelligence gathering and opportunity identification for strategic advantage.

# /organize-by-intent

Launch the Content Generation Agent to analyze and reorganize all existing content by search intent (Informational/Commercial/Transactional/Navigational), identifying gaps and optimization opportunities by intent category.

**What this command does:**
1. Loads Content Generation Agent from `.claude/agents/content-generation.md`
2. Agent executes intent classification skill
3. Scans all content across all clients
4. Uses DataForSEO MCP to analyze keyword intent
5. Classifies each content piece by primary intent
6. Generates intent-based inventory reports
7. Identifies content gaps by intent (what's missing)
8. Provides recommendations for intent-based optimization
9. Suggests new content to fill gaps

**Expected output:**
- Content organized by intent type
- Content inventory by intent
- Intent-based gap analysis
- Recommendations for new content
- Execution time: ~12-15 minutes

**Usage:**
```bash
/organize-by-intent
```

**No arguments needed** - agent analyzes all content across all clients.

**Intent types and definitions:**

**1. INFORMATIONAL Intent**
- User wants to learn something
- Not ready to buy
- Examples: "how to," "what is," "guide to," "best practices"
- Content: Blog posts, guides, tutorials, comparison articles
- Ranking: Usually ranks naturally for long-tail keywords
- Goal: Build authority and organic traffic

**2. COMMERCIAL Intent**
- User wants to compare options
- Researching before purchase decision
- Examples: "best," "review," "compare," "for sale"
- Content: Comparisons, reviews, buying guides, product comparisons
- Ranking: Valuable for mid-funnel conversions
- Goal: Attract decision-makers, drive toward purchase

**3. TRANSACTIONAL Intent**
- User is ready to buy/convert
- Looking for specific product/service
- Examples: "buy," "financing," "contact," brand + keyword
- Content: Landing pages, service pages, product pages, CTAs
- Ranking: Highest commercial value
- Goal: Convert ready-to-buy users

**4. NAVIGATIONAL Intent**
- User looking for specific website/brand
- Examples: "brand name," "brand name + service," official pages
- Content: Homepage, brand pages, service pages
- Ranking: Company controls these
- Goal: Brand awareness and direct traffic

**Generated files:**

```
/clients/[client-name]/content-organization/
├── intent-analysis/
│   ├── content-by-intent-informational.csv
│   ├── content-by-intent-commercial.csv
│   ├── content-by-intent-transactional.csv
│   ├── content-by-intent-navigational.csv
│   └── intent-inventory-summary.md
│
└── intent-gaps/
    ├── missing-informational-content.md
    ├── missing-commercial-content.md
    ├── missing-transactional-content.md
    └── content-recommendations.md
```

**Example content inventory by intent:**
```markdown
# Content Inventory by Intent - Apex Machinery

## INFORMATIONAL (47 pieces - 37%)
Goal: Build authority and organic traffic

### Top Performers
1. "Equipment Financing Guide" - Rank #8, 1,200 vis/mo
2. "How to Finance an Excavator" - Rank #12, 850 vis/mo
3. "Logistics Management Best Practices" - Rank #15, 450 vis/mo

### Underperformers
- "Equipment Maintenance Tips" - Rank #47, 50 vis/mo → REFRESH CANDIDATE

### Content by subtopic:
- Excavators: 8 pieces
- Forklifts: 6 pieces
- Lorries: 5 pieces
- General financing: 15 pieces
- Logistics management: 8 pieces
- SME management: 5 pieces

---

## COMMERCIAL (28 pieces - 22%)
Goal: Attract decision-makers, drive research phase

### Top Performers
1. "Excavator Financing vs Leasing Comparison" - Rank #5, 650 vis/mo
2. "Best Forklift Financing Options" - Rank #8, 420 vis/mo
3. "Equipment Financing Reviews" - Rank #12, 380 vis/mo

### Missing Commercial Content:
- Financing for new equipment (gap identified)
- Comparison: Company A vs Company B (competitive)
- ROI calculator (tool)
- Financing approval calculator (tool)

### Content by subtopic:
- Comparisons: 8 pieces
- Reviews: 7 pieces
- Buying guides: 8 pieces
- Rankings: 5 pieces

---

## TRANSACTIONAL (22 pieces - 17%)
Goal: Convert ready-to-buy users

### High-Converting Content:
1. "Get Equipment Financing Quote" - 12% conversion rate, 180 conversions/mo
2. "Fast Approval Financing" - 8% conversion rate, 95 conversions/mo
3. "Finance Equipment Today" - 6% conversion rate, 75 conversions/mo

### Underperforming:
- "Financing Application" - 1.2% conversion rate → OPTIMIZE
- "Equipment Financing for Businesses" - 2% conversion rate → IMPROVE CTA

### Content by subtopic:
- Service pages: 10 pieces
- Landing pages: 8 pieces
- Conversion-focused: 4 pieces

---

## NAVIGATIONAL (10 pieces - 8%)
Goal: Brand awareness and direct traffic

### Content:
- Homepage
- Services page
- About page
- Contact page
- [Company] Financing
- [Company] Leasing
- [Company] + Equipment Types (6 pages)

---

## CONTENT DISTRIBUTION
- Informational: 37% (optimal for building authority)
- Commercial: 22% (good, helping decision-making)
- Transactional: 17% (could increase 5-10%)
- Navigational: 8% (standard, don't increase)
- Unclassified: 16% (need to categorize)

---

## INTENT-BASED GAPS IDENTIFIED

### Missing INFORMATIONAL (Authority Building)
- "Equipment Maintenance Schedule" (gap)
- "Financing for Used Equipment" (gap)
- "Equipment Depreciation Calculator Guide" (gap)
- Recommended: +5 informational pieces

### Missing COMMERCIAL (Decision Making)
- "New vs Used Equipment Comparison" (gap)
- "Financing Term Comparison Tool" (gap)
- "Equipment Financing Case Studies" (gap - have results, no case studies)
- "Financing Approval Rate Comparison" (gap)
- Recommended: +4 commercial pieces

### Weak TRANSACTIONAL (Conversions)
- Service pages missing CTAs
- Landing pages could be more conversion-optimized
- Contact forms buried (not prominent)
- Recommended: Optimize 5 existing transactional pieces
- Recommended: +2-3 new landing pages

---

## RECOMMENDATIONS (Priority Order)

### IMMEDIATE (High Impact, Low Effort)
1. Optimize 5 existing transactional pages:
   - Improve CTAs visibility
   - Add trust signals (testimonials, certifications)
   - Simplify contact/application process
   - Estimated impact: +20-30% conversion rate

2. Create 3 new case study pieces (commercial intent):
   - "Case Study: How Company X Got Equipment Financing"
   - Target: Decision-makers researching similar situations
   - Estimated impact: +200 qualified leads/mo

### MEDIUM (Good Impact, Medium Effort)
3. Create 5 informational guides:
   - "Complete Equipment Maintenance Schedule"
   - "Used Equipment Financing Guide"
   - "Equipment Depreciation and Financing Impact"
   - Estimated impact: +500 organic traffic/mo

4. Build commercial comparison tools:
   - "Financing Term Comparison Tool"
   - "New vs Used Equipment Calculator"
   - Estimated impact: +300 qualified leads/mo

### LONGER-TERM (Foundation Building)
5. Reorganize website navigation by intent
6. Optimize internal linking strategy by intent
7. Create content calendar organized by intent distribution

---

## INTENT-BASED OPPORTUNITY MATRIX

| Intent | Quantity | Quality | Traffic | Conversions | Priority |
|--------|----------|---------|---------|------------|----------|
| Informational | 47 | Good | High | Low | MAINTAIN |
| Commercial | 28 | Fair | Medium | Medium | IMPROVE |
| Transactional | 22 | Fair | Low | Fair | OPTIMIZE |
| Navigational | 10 | Good | Medium | N/A | MAINTAIN |

Priority Actions:
1. Optimize transactional (highest impact for revenue)
2. Expand commercial (funnel middle)
3. Maintain informational (already strong)
```

**After execution:**

1. **Review intent analysis** (~20 minutes)
   - Verify content classifications are accurate
   - Check content distribution balance
   - Identify biggest gaps

2. **Prioritize gap-filling** (~15 minutes)
   - Select top 5 gaps to fill
   - Determine content type (blog, landing page, tool, etc.)
   - Plan creation timeline

3. **Optimize transactional content** (~1-2 hours)
   - Review existing landing pages/service pages
   - Improve CTAs and trust signals
   - Simplify conversion paths
   - A/B test changes

4. **Create gap-filling content**
   - Use intent-based planning for content calendar
   - Prioritize commercial and transactional gaps
   - Create content roadmap

5. **Reorganize content structure**
   - Update website navigation if needed
   - Improve internal linking by intent
   - Create intent-based content hub pages

**Intent-based content distribution targets:**

**Ideal balance for most clients:**
- **Informational:** 40-50% (build authority)
- **Commercial:** 20-30% (guide decisions)
- **Transactional:** 15-25% (drive conversions)
- **Navigational:** 5-10% (brand awareness)

**By business model:**

**High-Authority Blogs:**
- 60% Informational
- 25% Commercial
- 10% Transactional
- 5% Navigational

**E-Commerce/Direct Sales:**
- 30% Informational
- 20% Commercial
- 40% Transactional
- 10% Navigational

**B2B Services:**
- 40% Informational
- 35% Commercial
- 15% Transactional
- 10% Navigational

**Local Service Businesses:**
- 35% Informational
- 20% Commercial
- 30% Transactional
- 15% Navigational

**When to use this command:**

- **After 50+ content pieces published:** Minimum volume for meaningful analysis
- **Quarterly review:** Analyze and rebalance quarterly
- **Before content planning:** Use to guide content calendar
- **Performance plateauing:** Identify gaps when traffic stalls
- **Low conversion rates:** Diagnose transactional content quality

**Expected insights:**

- Content gaps by intent (what's missing)
- Content distribution (balanced or skewed)
- Weak performing content (optimization candidates)
- Opportunity areas (highest impact gaps)
- Content organization issues
- Internal linking optimization needs
- Navigation improvement opportunities

**Employee next steps:**
1. Review intent analysis report (20 min)
2. Verify content classifications accuracy
3. Prioritize top 5 gaps to fill
4. Plan 5-10 new pieces addressing gaps
5. Optimize existing transactional pages
6. Reorganize navigation/internal links if needed
7. Create intent-based content calendar

**This is PHASE 2-3** - Strategic content organization and gap-filling based on search intent alignment.

# /generate-monthly-report

Launch the Analytics Agent to generate comprehensive monthly performance reports for all clients, including content metrics, traffic, rankings, conversions, and strategic recommendations.

**What this command does:**
1. Loads Analytics Agent from `.claude/agents/analytics.md`
2. Agent executes `performance-tracking.md` skill
3. Pulls monthly performance data from multiple sources:
   - Google Search Console (impressions, clicks, rankings)
   - Google Analytics (traffic, engagement, conversions)
   - DataForSEO MCP (ranking positions, keywords)
   - Content metrics (publish count, quality scores)
   - Link building metrics (backlinks acquired)
4. Analyzes trends and changes
5. Generates comprehensive HTML/PDF report
6. Includes visualizations (charts, graphs)
7. Provides strategic recommendations
8. Identifies top performers and underperformers

**Expected output:**
- Month PDF/HTML report (per client)
- Executive summary
- KPI dashboard (charts/graphs)
- Content performance analysis
- Traffic and ranking analysis
- Link building progress
- Conversion tracking
- Strategic recommendations
- Execution time: ~15-20 minutes total (all clients)

**Usage:**
```bash
/generate-monthly-report
```

**No arguments needed** - agent generates reports for all active clients.

**Report sections:**

```
Monthly Performance Report
├── Executive Summary (1-2 pages)
├── KPI Dashboard (visual)
├── Content Production (metrics)
├── Traffic & Rankings (analysis)
├── Link Building Progress (tracking)
├── E-E-A-T Coverage (metrics)
├── Conversion & Lead Generation (if applicable)
├── Recommendations (strategic)
└── Month-over-Month Comparison (trends)
```

**Example report structure:**

```markdown
# Monthly Performance Report
## [Client Name] - November 2024

---

## EXECUTIVE SUMMARY

### Key Highlights
- **Content Published:** 12 blog posts (all approved on first submission)
- **Organic Traffic:** +18% vs October (2,450 → 2,890 visitors)
- **Keywords in Top 10:** +8 (42 → 50 keywords)
- **Backlinks Acquired:** 12 new links from 8 domains
- **New Conversions:** 87 leads (estimated value: RM 43,500)

### Performance Grade: A (Excellent Month)

### Key Takeaways
1. Content production is scaling (12 pieces/month)
2. Content quality improving (90% approval rate)
3. Organic traffic growth consistent (+15-18% monthly)
4. Link building gaining momentum (12 links/month)
5. E-E-A-T signals improving rankings in competitive areas

---

## KPI DASHBOARD

[Charts showing:]
- Monthly traffic trend (up-trending)
- Keyword ranking distribution (more top-10)
- Conversion funnel (leads by source)
- Backlink growth (cumulative)
- Content production pace
- Content approval rate

---

## CONTENT PRODUCTION

### Content Published: 12 pieces
- Informational (5): "How to Finance...", "Guide to..."
- Commercial (4): "Best Equipment Financing...", "Comparison..."
- Transactional (3): "Get Financing Quote", "Fast Approval"
- Average word count: 1,650 words
- All pieces E-E-A-T enhanced
- Average approval time: Same-day (excellent)

### Content Quality Metrics
- Average readability score: 8.2/10
- E-E-A-T coverage: 92% of pieces
- Internal link density: 4.2 links per piece (good)
- Image inclusion: 100% of pieces
- Video inclusion: 33% of pieces

### Top Performing New Content
1. "How to Get Equipment Financing in Malaysia" - 280 visitors (first week)
2. "Excavator Financing vs Leasing" - 210 visitors (first week)
3. "Fast Equipment Financing for Contractors" - 185 visitors (first week)

### Content Gaps Identified
- Missing: "Equipment Financing for Startups" (identified competitor ranking)
- Missing: "DIY Equipment Maintenance Guide" (common search)
- Opportunity: Equipment financing calculator (tool)

---

## TRAFFIC & RANKINGS

### Organic Traffic
- **November:** 2,890 visitors (+18% vs October)
- **Month-over-Month:** +18% (consistent growth)
- **Year-to-Date:** +145% (from January baseline)
- **Traffic Quality:** Avg 2:45 time on page (excellent)
- **Bounce Rate:** 38% (good for industry)

### Keyword Rankings
- **Keywords in Top 10:** 50 (up from 42)
- **Keywords in Top 20:** 128 (up from 115)
- **Keywords in Top 30:** 185 (up from 168)
- **New Top 10 Keywords:** 8 (strong growth)
- **Trending Up:** 25 keywords gaining positions
- **Stable:** 120 keywords maintaining positions
- **Declined:** 8 keywords (mostly seasonal)

### Top Ranking Keywords
1. "Equipment Financing Malaysia" - Rank #6, 450 vis/mo
2. "How to Finance Excavator" - Rank #8, 380 vis/mo
3. "Forklift Financing Options" - Rank #12, 250 vis/mo
4. "Equipment Leasing vs Financing" - Rank #9, 220 vis/mo
5. "Business Equipment Financing" - Rank #14, 180 vis/mo

### Ranking Opportunities
- 15 keywords at rank 11-15 (could push to top 10 with refresh)
- 22 keywords at rank 21-30 (better content could move to 11-20)
- 8 keywords ranking but not in top 30 (opportunity for improvement)

---

## LINK BUILDING PROGRESS

### Backlinks Acquired: 12 (November)
- From 8 different domains
- Average referring domain authority: 62
- Breakdown:
  - 4 resource page links (editorial)
  - 3 industry directory links
  - 2 guest post links
  - 2 broken link replacement links
  - 1 testimonial link

### Backlink Quality Metrics
- Average domain authority: 62 (good)
- All links are dofollow (100%)
- All links are editorial (contextual)
- Anchor text optimization: Good (mix of branded/generic/keyword)

### Backlink Velocity
- 3-month average: 10 links/month
- 6-month average: 8 links/month
- Velocity is accelerating (positive trend)

### Outreach Campaigns in Progress
- "Equipment Financing Guide" campaign: 45 prospects, 3 links placed
- "Logistics Management" campaign: 38 prospects, 2 links pending
- "Forklift Financing" campaign: 52 prospects, 1 link placed

### Next Month Forecast
- Estimated backlinks: 15-18 (based on pending responses)
- Expected rank improvements: +2-3 positions for link-receiving content

---

## E-E-A-T COVERAGE

### E-E-A-T Implementation
- Content with author credentials: 92% (excellent)
- Content with trust signals: 88%
- Content with expert citations: 78%
- Content with source links: 95%
- Average E-E-A-T score: 7.8/10 (improving)

### Trust Signal Improvements
- Added client testimonials: 8 new
- Added certifications/awards: 3 new
- Added case studies: 2 new
- Added expert quotes: 15 new

### E-E-A-T Impact
- Keywords improved due to E-E-A-T: 12
- Average rank lift from E-E-A-T: +1.8 positions
- Featured snippet opportunities: +3 (from E-E-A-T signals)

---

## CONVERSION & LEAD GENERATION

### Lead Generation Summary
- **Total Leads:** 87 (up from 72 in October, +21%)
- **Lead Quality:** 78% sales-qualified
- **Estimated Lead Value:** RM 43,500
- **Cost per Lead:** RM 145 (organic, very efficient)
- **Lead Source Attribution:**
  - 45% from transactional content (service pages)
  - 32% from commercial content (comparisons, reviews)
  - 18% from informational content (guides)
  - 5% from navigation/brand

### Conversion Funnel
- **Top of Funnel:** 2,890 visitors (organic)
- **Mid-Funnel:** 340 engaged (visited 2+ pages, 11.8%)
- **Bottom Funnel:** 87 conversions (leads/inquiries, 25.6% of engaged)

### High-Converting Pages
1. "Get Equipment Financing Quote" - 14% conversion rate, 38 leads
2. "Fast Approval Process" - 12% conversion rate, 24 leads
3. "Contact Equipment Specialist" - 10% conversion rate, 18 leads
4. "Financing Application" - 7% conversion rate, 7 leads

### Conversion Rate Improvements Needed
- "Equipment Financing Guide" - 1.2% conversion (should be 3-5%)
- "Financing FAQs" - 0.8% conversion (should be 2-3%)
- Recommendation: Add CTAs and trust signals to improve conversions

---

## STRATEGIC RECOMMENDATIONS

### PRIORITY 1: Optimize High-Traffic Content (IMMEDIATE)
**"Equipment Financing Guide" - Rank #6, 450 vis/mo, 1.2% conversion**

Current Issue: Good traffic but low conversion rate
Action:
1. Add client testimonials (add trust)
2. Add "Get Quote" CTA at mid-content (increase conversions)
3. Update financing options (keep current)
4. Add financing calculator (improve engagement)

Expected Impact: +2-3% conversion rate = +9-13 additional leads/month

---

### PRIORITY 2: Refresh Content Ranking 11-15 (HIGH)
**15 keywords at rank 11-15 (opportunity to push to top 10)**

Action:
1. Run `/refresh-content` on 5 highest-opportunity pieces
2. Focus on commercial and transactional content
3. Add competitor analysis and updated data
4. Implement new internal links

Expected Impact: 8-10 of these keywords could move to top 10 = +500 additional visitors

---

### PRIORITY 3: Build Topic Hubs (MEDIUM)
**Improve topical authority and content organization**

Action:
1. Run `/build-hub-page "Equipment Financing"` (main hub)
2. Link all equipment financing pieces to hub
3. Reorganize content by equipment type

Expected Impact: Better topical authority, featured snippet wins, +15% traffic

---

### PRIORITY 4: Expand Transactional Content (MEDIUM)
**Capture more conversion opportunity**

Action:
1. Create 3 new landing pages:
   - "Quick Equipment Financing Approval"
   - "Equipment Financing for Contractors"
   - "Commercial Equipment Leasing"
2. Focus on high-intent keywords (financing, leasing, approval)

Expected Impact: +30-40 additional qualified leads/month

---

### PRIORITY 5: Continue Link Building (ONGOING)
**Backlinks showing positive ROI**

Action:
1. Launch 2 new outreach campaigns (new topics)
2. Target 50+ prospects per campaign
3. Focus on resource pages and guest posts

Expected Impact: +15-18 backlinks/month, continued ranking improvements

---

## MONTH-OVER-MONTH COMPARISON

| Metric | October | November | Change | Trend |
|--------|---------|----------|--------|-------|
| Organic Traffic | 2,450 | 2,890 | +440 (+18%) | ↗ |
| Impressions | 45,200 | 52,100 | +6,900 (+15%) | ↗ |
| Avg CTR | 5.4% | 5.5% | +0.1% | → |
| Keywords Top 10 | 42 | 50 | +8 (+19%) | ↗ |
| Content Published | 10 | 12 | +2 (+20%) | ↗ |
| Backlinks | 9 | 12 | +3 (+33%) | ↗ |
| Leads Generated | 72 | 87 | +15 (+21%) | ↗ |
| Lead Value | RM 36,000 | RM 43,500 | +RM 7,500 (+21%) | ↗ |

---

## QUARTERLY PERFORMANCE (Last 3 Months)

| Quarter | Traffic | Top 10 | Links | Leads | Value |
|---------|---------|--------|-------|-------|-------|
| September | 1,950 vis | 28 kw | 18 links | 52 leads | RM 26,000 |
| October | 2,450 vis | 42 kw | 27 links | 72 leads | RM 36,000 |
| November | 2,890 vis | 50 kw | 39 links | 87 leads | RM 43,500 |
| Q3 Total | 7,290 vis | - | 84 links | 211 leads | RM 105,500 |
| Monthly Avg | 2,430 vis | 40 kw | 28 links | 70 leads | RM 35,167 |

---

## FORECAST: DECEMBER TARGETS

Based on current trajectory:
- **Organic Traffic:** 3,100-3,300 visitors (target: +10%)
- **Keywords Top 10:** 55-58 keywords
- **Backlinks:** 15-18 links
- **Leads:** 100-110 leads
- **Lead Value:** RM 50,000-55,000

---

## NEXT STEPS

### This Week
1. Review report and recommendations
2. Prioritize top 3 action items
3. Schedule content optimization work

### This Month
1. Refresh content at rank 11-15
2. Build hub pages for main topics
3. Continue link building outreach
4. Add CTAs to low-converting pages

### Next Month
1. Review December performance
2. Generate Q4 quarterly analysis
3. Plan 2025 content strategy
4. Set annual growth targets

---

## ABOUT THIS REPORT

**Report Generated:** November 2024
**Data Sources:** Google Search Console, Google Analytics, DataForSEO API
**Report Period:** November 1-30, 2024
**Client:** [Client Name]

For questions or clarifications, contact your SEO specialist.

---

**Performance Grade: A (Excellent - Continue current strategy with optimizations)**
```

**Generated files:**

```
/clients/[client-name]/analytics/
└── monthly-reports/
    ├── 2024-11-monthly-report.pdf
    ├── 2024-11-monthly-report.html
    ├── 2024-11-performance-summary.csv
    └── 2024-11-recommendations.md

/analytics/all-clients/
├── 2024-11-summary-all-clients.pdf (executive summary)
├── 2024-11-kpis-all-clients.xlsx (comparison)
└── 2024-11-top-performers.md (best clients)
```

**Report frequency and timing:**

- **Monthly:** Generate on first day of month (1st)
- **Timing:** Early morning (best for data availability)
- **Distribution:** Email to clients on 2nd business day
- **Archiving:** Store in `/analytics/monthly-reports/`

**Report customization options:**

- **By client:** Individual detailed reports
- **All clients summary:** Executive summary across all clients
- **By metric:** Traffic-focused, ranking-focused, conversion-focused
- **Custom date ranges:** Ability to generate for any period

**Key metrics included:**

1. **Traffic Metrics**
   - Organic visitors
   - Impressions and clicks
   - Average CTR
   - Traffic trends

2. **Ranking Metrics**
   - Keywords in top 10/20/30
   - Ranking position distribution
   - New top-10 keywords
   - Declining keywords

3. **Content Metrics**
   - Content published count
   - Content quality scores
   - Approval rates
   - Top performing content

4. **Link Metrics**
   - Backlinks acquired
   - Domain authority of links
   - Link velocity
   - Outreach campaign status

5. **Conversion Metrics**
   - Lead generation count
   - Lead source attribution
   - Conversion rates by page
   - Estimated lead value

6. **E-E-A-T Metrics**
   - E-E-A-T coverage percentage
   - Trust signal implementation
   - Impact on rankings

7. **Trend Analysis**
   - Month-over-month changes
   - Quarter-over-quarter trends
   - Annual growth trajectory

8. **Recommendations**
   - Prioritized action items
   - Estimated impact projections
   - Next month forecasts

**Employee next steps:**

1. Review all generated reports (30-45 min)
2. Verify data accuracy and calculations
3. Customize recommendations if needed
4. Prepare for client presentation
5. Share reports with clients (PDF recommended)
6. Schedule client performance review calls
7. Prioritize recommended actions

**When to generate reports:**

- **Monthly:** Standard cadence (1st of each month)
- **Before client calls:** Send 1-2 days before meeting
- **Quarterly:** Deeper analysis with trends
- **Annual:** Full-year review and goal setting
- **As needed:** On-demand for specific requests

**Expected time per client:**
- Small client (1-2 months history): 5-8 minutes
- Medium client (6+ months): 10-15 minutes
- Large client (1+ year): 15-20 minutes
- **All clients:** 15-20 minutes total (batch processing)

**This is PHASE 4** - Intelligence gathering and performance tracking for continuous optimization and growth.

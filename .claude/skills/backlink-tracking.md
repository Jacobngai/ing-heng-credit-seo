# Backlink Tracking Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Track link building progress, monitor new backlinks, analyze link quality, and detect lost links requiring action.

## Prerequisites
- Client domain identified and verified
- Link building campaigns initiated (from outreach-email-generation skill)
- Historical baseline backlink data available (for comparison)
- Access to backlink tracking data (DataForSEO or similar)

## Methodology

### Step 1: Establish Baseline Metrics

Before tracking changes, document current state:

1. **Domain-Level Backlink Metrics**
   ```
   Metric: [Current Value] | [Change from 30/60/90 days ago]

   - Total Backlinks: X | +Y
   - Referring Domains: X | +Y
   - Domain Authority: X | +Y
   - Page Authority (homepage): X | +Y
   - Trust Flow: [Score] | [Change]
   - Spam Score: X% | [Change]
   - Anchor Text Diversity Score: [Metric]
   ```

2. **Backlink Quality Distribution**
   ```
   By Domain Authority:
   - DA 70+: X backlinks (high authority)
   - DA 50-69: X backlinks (authority)
   - DA 30-49: X backlinks (moderate)
   - DA 10-29: X backlinks (low)
   - DA <10: X backlinks (minimal value)

   By Link Type:
   - Dofollow: X% (authority pass-through)
   - Nofollow: X% (branded mentions, not authority)
   - Sponsored: X%
   - UGC: X%

   By Traffic Source:
   - Referred traffic from links: X monthly visitors
   - Top referring domains: [List]
   - Conversion rate from referred traffic: X%
   ```

3. **Content-Level Metrics**
   For each major content piece:
   ```
   Content: [Title/URL]
   - Linking domains: X
   - Total backlinks: X
   - Average referring domain DA: X
   - Top referring source: [Domain]
   - Traffic from links: X monthly
   ```

### Step 2: Monitor New Links (Weekly Check)

Track links acquired from active campaigns:

1. **New Links Detected**
   ```
   Check for:
   - Links from prospect outreach targets (expected results)
   - Mentions of brand/content on new domains
   - Links from competitors linking to similar content
   - Links from resource pages or guides
   - Expert comment bio links

   Track:
   - Source domain and URL
   - Target page/keyword
   - Anchor text used
   - Link type (dofollow/nofollow)
   - Referring domain DA
   - Expected impact (SEO value)
   ```

2. **New Link Evaluation**
   ```
   For each new link:

   Quality Assessment:
   - Authority: Is DA 30+?
   - Relevance: Is it in same niche/industry?
   - Placement: Is it contextual or in sidebar?
   - Anchor text: Is it keyword-relevant or branded?

   Scoring:
   - Quality Score = (DA/100 × 0.4) + (Relevance/10 × 0.3) + (Placement/5 × 0.2) + (AnchorText/5 × 0.1)
   - Expected Authority Lift: Based on referring domain DA
   ```

3. **Track Acquisition Source**
   ```
   From Outreach:
   - Email sent date: [Date]
   - Target prospect: [Domain]
   - Campaign: [Campaign name]
   - Time to link: [Days from first outreach]
   - Response rate: [Y/N]

   From Organic (Mentions/Natural):
   - Discovery date
   - Context of mention
   - No outreach required
   - "Found via" source
   ```

### Step 3: Identify Lost Links (Monthly Check)

Monitor for links that disappeared:

1. **Lost Link Detection**
   ```
   Compare current backlink profile with previous month:
   - Links that existed last month but not this month
   - Referring domains that no longer point to you
   - Broken backlinks (target page 404'd)

   For each lost link:
   - Source domain and URL
   - What was linked (target page/keyword)
   - Anchor text used
   - Loss reason: Site update/redesign/deletion/spam/manual
   - Recovery action needed: Yes/No
   ```

2. **Assess Impact of Lost Links**
   ```
   Calculate loss impact:
   - Lost authority points (based on source DA)
   - Lost referred traffic (if any)
   - Lost keyword lift (if anchor text matched keyword)
   - Recovery difficulty (easy/medium/hard)

   Priority for recovery:
   - High: High-authority lost links (DA 50+) with keyword anchor text
   - Medium: Moderate authority links (DA 30-49) or traffic drivers
   - Low: Low-authority links (DA <30) or no keyword relevance
   ```

3. **Recovery Strategy**
   ```
   For lost links worth recovering:

   Option 1: Reach Out Again
   - Check if reason was site redesign
   - Contact with "noticed link disappeared" message
   - Offer updated content if applicable

   Option 2: 301 Redirect
   - If target page moved, check for proper 301 redirect
   - Verify redirect passes authority correctly

   Option 3: Accept Loss
   - Link quality was low
   - Benefit not worth recovery effort
   - Focus on new link acquisition instead

   Option 4: Monitor Status
   - If site appears to be down, wait 30 days
   - If comes back online, reach out again
   - Document for future outreach timing
   ```

### Step 4: Generate Weekly Tracking Report

```markdown
## Backlink Tracking Report - Week of [Date]

**Client:** Ing Heng Credit
**Reporting Period:** [Start date] to [End date]

### New Links Acquired

| Source Domain | Link Target | Anchor Text | DA | Type | Date |
|---|---|---|---|---|---|
| equipment-guide.com | /en/blogs/equipment-leasing | equipment leasing options | 52 | Dofollow | 2025-11-04 |
| machinery-blog.com | /en/blogs/forklift-financing | forklift financing | 48 | Dofollow | 2025-11-03 |
| warehouse-resources.com | / | Ing Heng Credit | 40 | Nofollow | 2025-11-01 |

**New Links This Week:** 3
**Total New Backlinks:** 3
**Average Referring Domain DA:** 47
**Quality Score (Avg):** 8.2/10

### Lost Links

| Source Domain | Loss Date | Reason | DA | Recovery |
|---|---|---|---|---|
| [example].com | 2025-10-28 | Site redesign | 35 | Monitor (will reach out if returns) |

**Lost Links This Week:** 1
**Authority Impact:** -0.5 points

### Domain-Level Progress

| Metric | Current | Last Week | Change | Trend |
|--------|---------|-----------|--------|-------|
| Total Backlinks | 127 | 125 | +2 | ↑ |
| Referring Domains | 42 | 41 | +1 | ↑ |
| Domain Authority | 28 | 28 | 0 | → |
| Spam Score | 2% | 2% | 0 | → |

*Note: Domain Authority updates monthly, not weekly*

### Campaign Performance

| Campaign | Target | Sent | Responses | Links | Response Rate |
|----------|--------|------|-----------|-------|---|
| Equipment Financing | 25 | 12 | 3 | 2 | 25% |
| Forklift Financing | 20 | 8 | 1 | 1 | 12.5% |
| **TOTAL** | **45** | **20** | **4** | **3** | **20%** |

### Top Referring Domains

| Domain | Backlinks | DA | Traffic (Est.) |
|--------|-----------|----|----|
| equipment-guide.com | 2 | 52 | 12 visitors/month |
| machinery-blog.com | 1 | 48 | 8 visitors/month |
| warehouse-resources.com | 1 | 40 | 4 visitors/month |

### Next Actions

1. Follow up with 2 non-responsive Priority A prospects
2. Continue Priority B outreach (5 emails scheduled)
3. Monitor newly acquired link from equipment-guide.com (verify indexing)
4. Investigate lost link from [domain] - check if site recovering

---

**Created by:** Link Building Agent
**Next Report:** [Date]
```

### Step 5: Generate Monthly Comprehensive Report

More detailed monthly analysis:

```markdown
## Monthly Backlink Tracking Report
**Client:** Ing Heng Credit
**Period:** October 2025
**Report Generated:** November 4, 2025

## Executive Summary

- **New Links Acquired:** 14 (vs. 8 last month, +75% improvement)
- **Lost Links:** 2 (vs. 3 last month, -33%)
- **Net Gain:** +12 links
- **Domain Authority:** 28 (stable)
- **Referred Traffic:** 127 visitors (+32% month-over-month)
- **Link Quality Average:** 8.1/10

## Detailed Metrics

### New Links Breakdown

**By Source Type:**
- From Outreach: 9 links (64%)
- From Brand Mentions: 3 links (21%)
- From Resource Pages: 2 links (14%)

**By Link Quality:**
- High Authority (DA 50+): 6 links (43%)
- Moderate Authority (DA 30-49): 7 links (50%)
- Lower Authority (DA <30): 1 link (7%)

**By Anchor Text:**
- Keyword-Focused: 8 links (57%) - "equipment financing", "forklift financing"
- Branded: 4 links (29%) - "Ing Heng Credit"
- Generic: 2 links (14%) - "click here", "link"

### Impact Analysis

**Authority Lift:**
- Estimated DA contribution: ~0.5 points (monthly accumulation)
- Expected yearly DA impact: +6 points (from current acquisition rate)
- Current pace: On track to gain 24 links/year at 2 links/week

**Referred Traffic Impact:**
- Visitors from backlinks: 127 visitors
- Click-through rate from backlinks: 2.1%
- Conversion rate from referred traffic: 3.2% (4 leads)
- Estimated value per referred visitor: $X (based on conversion)

**Keyword Impact:**
- Links with target keywords: 8 (57%)
- Estimated keyword lift: Moderate (helps with "equipment financing" positioning)
- Expected SERP improvement: 1-3 positions in next 60 days

### Lost Links Analysis

**Links Lost:**
1. Domain: [example1.com] - Reason: Site redesign
   - Original DA: 38
   - Recovery: Likely if site returns (set reminder for 2 weeks)

2. Domain: [example2.com] - Reason: Content deleted
   - Original DA: 25
   - Recovery: Low priority (low authority, not pursuing)

**Recovery Status:**
- Links attempted to recover: 1 (waiting for site to return)
- Links accepted as permanent loss: 1 (low value, not worth effort)
- Success rate: 0% (typical 30-day recovery rate is 40%)

### Campaign Performance

**Active Campaigns:**
1. Equipment Financing Outreach
   - Emails sent: 25
   - Responses: 6 (24% response rate)
   - Links acquired: 5
   - Conversion rate: 20% (5 of 25 prospects)
   - Average time to link: 7 days
   - Status: Excellent performance

2. Forklift Financing Outreach
   - Emails sent: 20
   - Responses: 3 (15% response rate)
   - Links acquired: 2
   - Conversion rate: 10%
   - Status: Moderate performance (continue with follow-ups)

3. Content Links (Organic, Not From Outreach)
   - Mentions detected: 4
   - Followed up on mentions: 3
   - Links acquired: 3
   - Status: Excellent organic uptake

### Competitive Backlink Comparison

**vs. Top Competitor (competitor-a.com):**
- Their new links/month: 18
- Our new links/month: 14
- Status: Performing 78% as well (closing gap)
- Their average link DA: 42
- Our average link DA: 47
- Status: We're acquiring higher-quality links

### Content Performance via Backlinks

**Top Content by Backlinks:**
1. /en/blogs/equipment-financing-guide - 8 backlinks
2. /en/blogs/forklift-financing - 6 backlinks
3. /en/blogs/bad-credit-financing - 4 backlinks
4. / (Homepage) - 2 backlinks

**Content Acquisition Strategy:**
- Focus equipment financing content → Getting 50% of links
- Forklift financing strong → Growing segment
- Diversify to other equipment types in Month 2

### Outreach Effectiveness

**Response Rate by Prospect Type:**
- Broken link prospects: 35% response rate (best)
- Mentioned but not linked: 18% response rate
- Resource page: 12% response rate
- Overall average: 20% (industry average: 15-25%)

**Time to Conversion Metrics:**
- Average time from email to response: 3 days
- Average time from response to link live: 4 days
- Total time to acquisition: 7 days average (good - industry: 10-14 days)

### Recommendations for Next Month

1. **Increase Volume:** Current pace (14 links/month) is solid. Scale to 3 emails/day (from 2) = 60 emails/month = estimated 12 links/month
2. **Improve Quality:** Focus outreach on DA 50+ prospects (currently 43% - target 60%)
3. **Diversify Content:** Add outreach for non-financing equipment (excavators, heavy machinery)
4. **Track Response Rate:** Monitor email quality - if response rate drops below 15%, adjust messaging
5. **Lost Link Recovery:** Proactive outreach to recovered lost link sites

## Forecast

**Projected Performance (Next 3 Months):**
- Estimated new links: 40-50 links
- Estimated referring domains: +10-12
- Estimated DA gain: +1-2 points
- Estimated referred traffic: +300-400 monthly visitors
- Estimated leads from referral traffic: 12-15

## Next Month Priorities

1. Scale equipment financing outreach
2. Launch secondary niche outreach (excavator, truck financing)
3. Monitor newly acquired links for indexing
4. Follow up on non-responsive Priority B prospects
5. Analyze top referring domains for additional link opportunities

---

**Report Generated By:** Link Building Agent
**Next Month Report:** December 4, 2025
```

## Output Format

### Weekly Status JSON
```json
{
  "report_type": "weekly",
  "client": "ing-heng-credit",
  "week_of": "2025-11-04",
  "metrics": {
    "new_links": 3,
    "lost_links": 0,
    "total_backlinks": 127,
    "referring_domains": 42,
    "domain_authority": 28
  },
  "new_links_acquired": [
    {
      "source_domain": "equipment-guide.com",
      "target_page": "/en/blogs/equipment-leasing/",
      "anchor_text": "equipment leasing options",
      "da": 52,
      "dofollow": true,
      "acquisition_source": "outreach",
      "outreach_campaign": "equipment-financing-links",
      "date_acquired": "2025-11-04",
      "quality_score": 8.5
    }
  ]
}
```

### Monthly Summary JSON
```json
{
  "report_type": "monthly",
  "client": "ing-heng-credit",
  "month": "2025-10",
  "summary": {
    "new_links": 14,
    "lost_links": 2,
    "net_gain": 12,
    "new_referring_domains": 1,
    "referred_traffic": 127,
    "leads_generated": 4
  },
  "campaign_performance": [
    {
      "campaign_name": "equipment-financing-links",
      "emails_sent": 25,
      "responses": 6,
      "links_acquired": 5,
      "response_rate": 0.24,
      "conversion_rate": 0.20
    }
  ],
  "competitive_analysis": {
    "competitor_domain": "competitor-a.com",
    "their_monthly_links": 18,
    "our_monthly_links": 14,
    "performance_percentage": 0.78,
    "our_avg_link_da": 47,
    "their_avg_link_da": 42
  }
}
```

## Quality Standards

- All new links verified and documented (source, target, anchor, DA)
- Lost links analyzed with reason and recovery strategy
- Quality scoring consistent and transparent
- Campaign performance metrics tracked (response rate, conversion rate, time to link)
- Competitive analysis relevant and actionable
- Forecasting conservative but based on historical data
- Recommendations specific and prioritized
- Reports generated on consistent schedule (weekly and monthly)

## Execution Timing

- Weekly check (new links, campaign tracking): 15 minutes
- Monthly comprehensive analysis: 45 minutes
- Quarterly competitive analysis: 30 minutes
- Total monthly effort: ~1.5 hours

## Agent Usage

This skill is used by: **Link Building Agent**
Triggered by: Weekly/monthly schedule, or `/audit-content-performance` for competitive analysis
Related skills: `link-prospect-research.md`, `outreach-email-generation.md`

## Success Criteria

✅ All new links tracked with quality scoring
✅ Lost links analyzed with recovery strategy
✅ Campaign metrics tracked and reported
✅ Referred traffic and conversion tracked
✅ Weekly reports generated consistently
✅ Monthly comprehensive analysis completed
✅ Competitive positioning assessed
✅ Actionable recommendations provided
✅ Historical data maintained for trend analysis
✅ Forecasts based on actual performance data

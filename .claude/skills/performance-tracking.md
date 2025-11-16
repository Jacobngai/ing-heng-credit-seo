# Performance Tracking Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Track content performance metrics, identify decay patterns, and flag content requiring refresh.

## Prerequisites
- Client has published content in `/10-ANALYTICS/[client-name]/`
- Analytics data available from Google Analytics or logs
- Content inventory exists in `/3-WEBSITE/[client-name]/`

## Methodology

### Step 1: Collect Baseline Metrics
For each published piece of content:

1. **Identify all published content**
   - Scan: `/3-WEBSITE/[client-name]/content/[lang]/blogs/` and `/landing-pages/`
   - Extract: URL, publication date, last modified date, slug, language
   - Create inventory list

2. **Gather performance data**
   - Page views (monthly trend)
   - Click-through rate (CTR) from search results
   - Average position in SERPs
   - Bounce rate
   - Time on page
   - Conversion events (if tracked)
   - Backlink count (if available)

3. **Calculate baseline scores**
   ```
   Baseline Score = (Views × 0.4) + (CTR × 0.3) + (Position Inverse × 0.2) + (Engagement × 0.1)
   Position Inverse = (100 - Position) / 100 (so position 1 = 0.99, position 10 = 0.90)
   ```

### Step 2: Identify Decay Patterns
Analyze performance trends over time:

1. **Calculate decay rate**
   ```
   Decay Rate = (Previous Month Views - Current Month Views) / Previous Month Views × 100

   Threshold:
   - Green (0-10%): Normal seasonal variation
   - Yellow (10-25%): Monitor, consider refresh
   - Red (25%+): Immediate action needed
   ```

2. **Identify decay type**
   - **Traffic Decay:** Views dropping while position stable (content stale/competing better content)
   - **Ranking Decay:** Position dropping (content outdated, authority loss, algorithm change)
   - **Engagement Decay:** High bounce rate increase (poor relevance or UX issue)
   - **Conversion Decay:** Views stable but conversions dropping (CTA ineffective, trust issue)

3. **Flag decay causes**
   - Competitive content published (check SERP)
   - Keyword trend shift (check Google Trends)
   - Algorithm update timing (check SEMrush/Moz calendars)
   - Content freshness (older posts typically decay)
   - Topic relevance expired (seasonal, product discontinued)

### Step 3: Calculate Decay Score
For each piece of content:

```
Decay Score = (Views Decay % × 0.4) + (Position Change % × 0.3) + (Bounce Rate Change × 0.2) + (Conversion Change % × 0.1)

Status:
- Decay Score < 10: ✅ Healthy
- Decay Score 10-25: ⚠️ Monitor
- Decay Score 25-50: 🔴 Refresh Soon
- Decay Score 50+: 🔴🔴 Refresh Immediately
```

### Step 4: Segment by Priority
Group content into action buckets:

1. **High Priority (Refresh Now)**
   - Decay Score > 50
   - Still receiving traffic (>50 monthly views)
   - High conversion potential (was converting, now isn't)
   - Ranking 15+ (was top 10, now isn't)

2. **Medium Priority (Plan Refresh)**
   - Decay Score 25-50
   - Moderate traffic (20-50 monthly views)
   - Keyword still relevant
   - Position 11-20

3. **Low Priority (Monitor)**
   - Decay Score 10-25
   - Low traffic or evergreen content
   - Position stable in top 10
   - Recent publication (< 3 months)

4. **Archive (Consider Removal)**
   - Decay Score > 75 for 6+ months
   - No traffic last quarter
   - Outdated topic/product
   - Canonical/redirect alternative exists

### Step 5: Identify Refresh Opportunities
For content flagged for refresh:

1. **Analyze SERP changes**
   - What new content is ranking?
   - What new sections are in top results?
   - What PAA questions appeared?
   - What content gaps exist now?

2. **Check keyword trends**
   - Search volume changes
   - Related keyword emergence
   - Seasonal/trending shifts
   - New long-tail variations

3. **Review competitor updates**
   - When did competitors update similar content?
   - What new information did they add?
   - What angle did they take?

4. **Define refresh scope**
   ```
   Light Refresh (5-10% content):
   - Add new stats/examples
   - Update intro/conclusion
   - Add new FAQ questions
   - Refresh image/video

   Medium Refresh (25-40% content):
   - Add new section
   - Reorganize structure
   - Expand underperforming section
   - Modernize examples

   Complete Refresh (50%+ content):
   - Rewrite from scratch
   - Change angle/approach
   - Completely new structure
   - Different type (blog → guide, comparison, etc.)
   ```

### Step 6: Generate Performance Report
Create comprehensive tracking document.

## Output Format

### Performance Report Structure
```
# Performance Tracking Report - [Client Name]

**Report Date:** YYYY-MM-DD
**Reporting Period:** [Start Date] to [End Date]
**Total Content Analyzed:** [X] pieces

---

## Overview Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Total Monthly Views | X,XXX | ↓ -15% |
| Average Position | 8.2 | ↑ +0.3 |
| Avg Bounce Rate | 62% | ↑ +5% |
| Conversion Rate | 2.1% | ↓ -0.3% |
| Avg Time on Page | 2:15 | ↓ -0:30 |

---

## Content Decay Analysis

### 🔴 High Priority - Refresh Immediately (Decay Score > 50)

#### 1. [Content Title] | [Slug]
**Performance Stats:**
- Current: 145 views/month ↓ 48% (was 280 last month)
- Position: 18 ↓ from 8 (dropped 10 positions)
- Bounce Rate: 78% ↑ (was 60%)
- Topic: Equipment Financing Guide
- Published: 2024-04-15
- Last Updated: 2024-08-20 (3+ months old)

**Decay Analysis:**
- Type: Ranking Decay + Engagement Decay
- Root Cause: Competitor published more comprehensive guide (rank 5), search intent shifted to comparison content
- Keyword Trend: Search volume stable, but -15% YoY

**Recommended Action:**
- Refresh Type: Complete Refresh (60% new content)
- Estimated New Sections:
  - Add side-by-side comparison table (buying vs. leasing)
  - Expand calculator tool integration
  - Add recent case studies (2025)
  - Add industry expert quotes
- Estimated Impact: Should recover to top 5 within 4 weeks
- Effort: 3-4 hours
- Priority: Week 1

**SERP Insights:**
- #1: [Competitor] - Equipment Buying Guide (2,500 words, comprehensive)
- #2: [Competitor] - Finance Calculator Review (interactive tool)
- #3: Your Content (current position)
- Gap: No Malaysia-specific regulatory info, no comparison tables

---

### ⚠️ Medium Priority - Plan Refresh (Decay Score 25-50)

#### 1. [Content Title] | [Slug]
**Performance Stats:**
- Current: 89 views/month ↓ 32% (was 131)
- Position: 12 ↓ from 9
- Bounce Rate: 71% (stable)
- Topic: Forklift Rental Pricing
- Published: 2024-06-01
- Last Updated: 2024-09-15

**Decay Analysis:**
- Type: Ranking Decay (competitor focus)
- Root Cause: 3 new competitors entered market, published localized content
- Keyword Trend: +8% YoY, growing search volume

**Recommended Action:**
- Refresh Type: Medium Refresh (30% new content)
- New Sections: Regional pricing comparison, local regulations
- Effort: 1.5-2 hours
- Priority: Week 3-4

---

### ✅ Healthy Content (Decay Score < 10)

#### 1. [Content Title] | [Slug]
**Performance Stats:**
- Current: 312 views/month ↑ 5% (stable growth)
- Position: 3 (stable)
- Bounce Rate: 52% (good)
- Conversions: 8/month
- Topic: Excavator Financing 101

**Status:** No action needed. Monitor quarterly.

---

## Seasonal/Evergreen Analysis

**High Seasonality (Need Seasonal Refresh):**
- End-of-year equipment purchases topic
- Post-CNY renewal content

**Evergreen (Stable):**
- How-to guides
- Educational content
- Comparison articles

---

## Recommendation Summary

| Priority | Count | Total Effort | Timeline |
|----------|-------|--------------|----------|
| Refresh Immediately | 3 | 10-12 hours | Week 1-2 |
| Plan Refresh | 7 | 12-15 hours | Week 3-4 |
| Monitor | 12 | 0 | Ongoing |
| Archive/Redirect | 2 | 2 hours | Week 5 |

**Total Recommended Work:** 24-29 hours across 5 weeks

---

## Next Steps

1. Approve refresh priorities
2. Schedule refreshes in content calendar
3. Generate specific refresh briefs for each piece
4. Execute refreshes (use content-refresh-skyscraper.md skill)
5. Monitor performance improvement (2-4 weeks post-refresh)
```

### Decay Dashboard (JSON)
```json
{
  "report_date": "2025-11-04",
  "client": "[client-name]",
  "period_days": 90,
  "summary": {
    "total_content": 47,
    "healthy": 28,
    "monitor": 12,
    "refresh_soon": 5,
    "refresh_urgent": 2
  },
  "content_by_status": [
    {
      "slug": "excavator-financing-guide-en",
      "title": "Complete Guide to Excavator Financing in Malaysia",
      "language": "en",
      "url": "/en/blogs/excavator-financing-guide/",
      "published_date": "2024-04-15",
      "last_updated": "2024-08-20",
      "decay_score": 62,
      "status": "refresh_urgent",
      "current_metrics": {
        "monthly_views": 145,
        "views_change_percent": -48,
        "position": 18,
        "position_change": -10,
        "bounce_rate": 0.78,
        "bounce_change": 0.18,
        "time_on_page_seconds": 145,
        "conversions_monthly": 1
      },
      "previous_metrics": {
        "monthly_views": 280,
        "position": 8,
        "bounce_rate": 0.60
      },
      "decay_type": "ranking_decay",
      "root_cause": "competitor_dominance",
      "refresh_recommendation": {
        "type": "complete_refresh",
        "coverage_percent": 60,
        "estimated_hours": 3.5,
        "priority_week": 1,
        "expected_position": 5,
        "new_sections": [
          "buy_vs_lease_comparison",
          "calculator_tool",
          "case_studies",
          "expert_quotes"
        ]
      }
    }
  ]
}
```

## Quality Standards

- All metrics sourced and documented (GA, Search Console, or similar)
- Decay score calculation transparent and reproducible
- Root cause analysis supported by SERP/trend data
- Refresh recommendations include scope and estimated effort
- Historical data tracked (minimum 90 days comparison)
- Report generated monthly or before decision-making

## Execution Timing

- Initial analysis (50 content pieces): ~15-20 minutes
- Monthly update: ~10 minutes
- Generate refresh recommendations: ~5 minutes per content piece
- Total monthly effort: ~30 minutes

## Agent Usage

This skill is used by: **Content Maintenance Agent**
Triggered by command: `/audit-content-performance`
Related skill: `content-refresh-skyscraper.md` (for implementing refreshes)

## Success Criteria

✅ All published content analyzed and scored
✅ Decay patterns identified with root causes
✅ Clear priority grouping (urgent/soon/monitor/archive)
✅ Specific refresh recommendations with scope
✅ Estimated effort and timeline provided
✅ Report actionable for content team
✅ Historical tracking maintained

# /monthly-review

**🆕 CONSOLIDATED MONTHLY WORKFLOW**

Launch the Analytics Agent to perform a comprehensive monthly review combining performance tracking, system health diagnostics, and content audit - all in one execution.

---

## What This Command Does

This command runs THREE critical monthly assessments in parallel:

### 1. **Performance Tracking** (from /generate-monthly-report)
- Pull metrics from Google Search Console, Google Analytics, DataForSEO
- Generate client-facing performance reports (PDF/HTML)
- Calculate month-over-month trends
- Identify wins and losses
- Create KPI dashboards
- Provide strategic recommendations

### 2. **Health Diagnostics** (from /health-check)
- Assess 6 health dimensions: Content, Technical SEO, Backlinks, Conversion, Competitive, Traffic
- Identify critical issues and bottlenecks
- Score system health (0-100)
- Flag urgent fixes needed
- Generate internal diagnostic report

### 3. **Content Audit** (from /audit-content-performance)
- Identify declining content (25%+ traffic drop)
- Prioritize refresh candidates by impact
- Calculate content decay rate
- Generate refresh priority list
- Recommend content consolidation opportunities

**Total Time:** 30 minutes (AI automated, runs in parallel)

---

## When to Use

**Frequency:** Monthly (1st of each month)

**Best Time:** First Monday morning (start month with insights)

**Before:**
- Client performance review calls
- Monthly strategy planning sessions
- Quarterly business reviews

**After:**
- Use insights to update content calendar
- Schedule content refreshes for declining posts
- Plan link building campaigns
- Set monthly goals

---

## Prerequisites

### Required Data Sources
✅ **Google Search Console** - Traffic and ranking data
✅ **Google Analytics** - Engagement and conversion data
✅ **DataForSEO API** - Ranking positions and competitor data
✅ **Published Content** - Minimum 30 days of data

### Required Client Status
✅ **At least 1 active client** with published content
✅ **Minimum 30 days operational** (for meaningful trends)

### Configuration Check
```bash
# Verify all data sources are connected
node scripts/check-integrations.js

# Should show:
✅ Google Search Console: Connected (50 properties)
✅ Google Analytics: Connected (50 properties)
✅ DataForSEO API: Connected (234/1000 quota used)
✅ Active clients: 50
```

**If any source is missing:**
- Performance report will have data gaps (flag in report)
- Health check will score lower in affected dimensions
- Content audit may lack ranking data

---

## Usage

```bash
/monthly-review
```

**No parameters needed** - automatically processes all active clients.

### Optional Parameters (Advanced)

```bash
# Review specific client only
/monthly-review --client=apex-machinery

# Review specific month (historical)
/monthly-review --month=2024-10

# Skip specific component
/monthly-review --skip-health  # Only performance + content audit
/monthly-review --skip-content # Only performance + health
/monthly-review --skip-performance # Only health + content audit
```

---

## Step-by-Step Execution

### Step 1: Initialize (30 seconds)
```
🤖 Monthly Review Agent starting...

Scanning for active clients...
✅ Found 50 active clients

Checking data source availability...
✅ Google Search Console: Connected
✅ Google Analytics: Connected
✅ DataForSEO API: Connected (quota: 234/1000)

Loading configurations...
✅ All clients have complete data (30+ days)

Starting parallel execution (3 components)...
```

### Step 2: Parallel Execution (25 minutes)

#### 2A. Performance Tracking (20 minutes)
```
📊 Component 1/3: Performance Tracking

[00:00] Fetching data from Google Search Console...
        Clients 1-10: Traffic data retrieved
        Clients 11-20: Traffic data retrieved
        ...

[05:00] Fetching data from Google Analytics...
        Engagement metrics retrieved for all clients

[10:00] Fetching ranking data from DataForSEO...
        Keywords tracked: 4,750 across 50 clients
        Position data retrieved

[15:00] Calculating trends and changes...
        Month-over-month comparisons complete
        Top performers identified
        Underperformers flagged

[18:00] Generating client-facing reports...
        50 PDF reports created
        Executive summary generated

[20:00] ✅ Performance tracking complete
```

#### 2B. Health Diagnostics (25 minutes)
```
🏥 Component 2/3: Health Diagnostics

[00:00] Dimension 1: Content Health
        Scanning 6,840 published posts...
        Freshness check: 85% updated <6 months (good)
        Decay detection: 124 posts declining >25% (flagged)
        Quality check: 92% passing standards

[05:00] Dimension 2: Technical SEO Health
        Crawl test: All sites accessible
        Core Web Vitals: 88% passing (good)
        Mobile optimization: 100% passing
        HTTPS: 100% secure
        Schema markup: 78% coverage (needs improvement)

[10:00] Dimension 3: Backlink Health
        Total backlinks: 1,240 across 50 clients
        Quality distribution: 85% good, 12% medium, 3% spam
        Toxic links: 18 flagged (need disavow)
        Link velocity: Healthy growth pattern

[15:00] Dimension 4: Conversion Health
        Average conversion rate: 2.8% (industry standard)
        Funnel analysis: 340 drop-offs identified
        CTA visibility: 67% need improvement

[20:00] Dimension 5: Competitive Health
        Top 10 share: 42% (vs 58% competitors)
        Content gaps: 234 opportunities identified
        Backlink gaps: Competitors have +2,400 links

[22:00] Dimension 6: Traffic Health
        Overall traffic: +18% average MoM (excellent)
        Anomalies: 3 clients traffic dropped >20% (investigate)
        Quality: 2:45 avg time on page (good)

[25:00] Generating health scorecard...
        Overall Health Score: 78/100 (Good)
        Critical issues: 12
        High-priority issues: 45
        Medium-priority: 89
        Low-priority: 134

[25:00] ✅ Health diagnostics complete
```

#### 2C. Content Audit (15 minutes)
```
📉 Component 3/3: Content Performance Audit

[00:00] Scanning all published content...
        Total posts analyzed: 6,840

[03:00] Comparing current vs 30-day-ago metrics...
        Traffic comparisons complete

[06:00] Identifying declining content...
        Posts with >25% decline: 124 posts
        Posts with >50% decline: 38 posts (urgent)
        Posts with >75% decline: 12 posts (critical)

[09:00] Prioritizing refresh candidates...
        HIGH Priority: 38 posts (>50% decline, high traffic)
        MEDIUM Priority: 86 posts (25-50% decline)
        LOW Priority: 124 posts (maintenance)

[12:00] Generating refresh recommendations...
        Content refresh strategies created
        Impact estimates calculated

[15:00] ✅ Content audit complete
```

### Step 3: Consolidation (2 minutes)
```
🔄 Consolidating all findings...

Generating unified reports:
✅ Executive summary (all 3 components)
✅ Cross-component insights
✅ Unified action plan
✅ Priority matrix (what to fix first)

Complete!
```

### Step 4: Output Summary (10 seconds)
```
✅ MONTHLY REVIEW COMPLETE

Execution time: 27 minutes 18 seconds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPONENT 1: PERFORMANCE TRACKING
✅ 50 client reports generated
✅ Overall traffic: +18% MoM (excellent)
✅ Overall rankings: +12% top-10 keywords
✅ Overall leads: +21% MoM
📊 Top performer: Client A (+45% traffic)
📉 Needs attention: Client B (-23% traffic)

COMPONENT 2: HEALTH DIAGNOSTICS
✅ System health score: 78/100 (Good)
🚨 Critical issues: 12 (need immediate fix)
⚠️  High priority: 45 issues
💡 Quick wins: 23 (easy fixes, high impact)
📋 Strategic blockers: 8 (need planning)

COMPONENT 3: CONTENT AUDIT
✅ Total content analyzed: 6,840 posts
📉 Declining content: 124 posts (flagged)
🔥 Urgent refreshes: 38 posts (>50% decline)
💎 High-impact candidates: Top 10 prioritized

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FILES GENERATED:

📊 Performance Reports:
   /analytics/monthly-reports/2025-11-performance-all-clients.pdf
   /clients/*/analytics/monthly-reports/2025-11-report.pdf (50 files)

🏥 Health Reports:
   /analytics/health-checks/2025-11-system-health.pdf
   /analytics/health-checks/2025-11-issue-inventory.csv
   /analytics/health-checks/2025-11-quick-wins.md

📉 Content Audits:
   /analytics/content-audits/2025-11-declining-content.csv
   /analytics/content-audits/2025-11-refresh-priorities.md

🎯 Unified Action Plan:
   /analytics/monthly-reviews/2025-11-ACTION-PLAN.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RECOMMENDED NEXT STEPS:

THIS WEEK (Critical Issues):
1. Fix 12 critical technical issues (broken links, indexation)
2. Disavow 18 toxic backlinks
3. Refresh 10 highest-priority declining posts

THIS MONTH (High Priority):
1. Refresh remaining 28 urgent posts
2. Build 3 hub pages for mature topics
3. Launch 2 link building campaigns
4. Fix 45 high-priority issues

STRATEGIC (Ongoing):
1. Address 8 strategic blockers
2. Implement 23 quick wins
3. Monitor Client B's traffic drop
4. Capitalize on Client A's momentum
```

---

## Expected Outputs

### For Clients (External)
```
/clients/[client-name]/analytics/monthly-reports/
└── 2025-11-monthly-report.pdf
    - Executive summary
    - KPI dashboard
    - Traffic and ranking trends
    - Content performance
    - Link building progress
    - Strategic recommendations
    - Next month forecast
```

### For Internal Use
```
/analytics/monthly-reviews/2025-11/
├── executive-summary.md (all 50 clients)
├── system-health-score.json (78/100)
├── issue-inventory.csv (280 total issues)
├── quick-wins.md (23 opportunities)
├── strategic-blockers.md (8 major issues)
├── content-refresh-priorities.csv (124 posts)
└── ACTION-PLAN.md (unified next steps)
```

### Cross-Component Insights
```
/analytics/insights/
└── 2025-11-cross-insights.md
    - Traffic decline correlates with content age
    - Technical issues blocking 15% of potential traffic
    - Link building ROI: +1.8 rank positions per quality link
    - E-E-A-T content ranks 2.3x better on average
    - Mobile speed issues cost ~8% conversion rate
```

---

## Success Criteria

### ✅ Command Succeeded If:
1. All 3 components completed without errors
2. 50 client performance reports generated
3. System health score calculated
4. Content audit identified declining posts
5. Unified action plan created
6. No data source failures

### ⚠️ Partial Success If:
1. 1-2 data sources unavailable (reports flagged with gaps)
2. Some clients lack 30-day data (noted in report)
3. API quota hit mid-execution (partial data retrieved)

### ❌ Command Failed If:
1. No active clients found
2. All data sources failed
3. Execution crashed or timed out

---

## Common Errors

### Error 1: "No Active Clients Found"
```
❌ ERROR: Cannot perform monthly review
   No active clients detected

Required: At least 1 client with status = "active"

Fix:
1. Run /finalize-client [client-name] for new clients
2. Verify status.json shows "active"
3. Retry command
```

### Error 2: "Insufficient Data for Analysis"
```
⚠️  WARNING: Limited data available
   Client 'new-client' has only 12 days of data
   Recommended: 30+ days for meaningful analysis

Action: Continuing with available data (trends will be limited)
```

### Error 3: "DataForSEO Quota Exceeded"
```
❌ ERROR: API quota exhausted
   Daily limit: 1,000 requests
   Used: 1,000

Partial completion:
✅ Performance reports: Generated (used GSC/GA only)
⚠️  Ranking data: Limited (missing DataForSEO data)
⚠️  Competitor analysis: Skipped

Fix: Wait until tomorrow or upgrade API plan
```

### Error 4: "Google Search Console Authentication Expired"
```
❌ ERROR: GSC API authentication failed
   Last successful auth: 45 days ago
   Tokens expired

Impact:
❌ Performance reports: Cannot generate (missing traffic data)
✅ Health check: Partial (technical SEO only)
✅ Content audit: Limited (using cached data)

Fix:
1. Re-authenticate GSC: node scripts/auth-gsc.js
2. Retry command
```

---

## What Makes This Better Than Running 3 Commands

### Old Way (Running Separately)
```
$ /generate-monthly-report     (20 min AI + 60 min review)
$ /health-check                (25 min AI + 30 min review)
$ /audit-content-performance   (15 min AI + 15 min review)

Total: 60 min AI + 105 min human = 165 minutes (2h 45min)
```

### New Way (Consolidated)
```
$ /monthly-review              (30 min AI + 120 min review)

Total: 30 min AI + 120 min human = 150 minutes (2h 30min)

Time saved: 15 minutes (less overhead)
Benefit: Unified insights, cross-component analysis
```

**Why faster:**
- Single data pull (vs 3 separate pulls)
- Parallel execution (all 3 at once)
- No duplicate analysis
- Unified reporting (vs 3 separate reports)

---

## Employee Workflow

### 1. Trigger Command (1 minute)
```bash
# First Monday of month at 9 AM
/monthly-review
```

### 2. Wait for Completion (30 minutes)
**During this time:**
- Get coffee ☕
- Check emails
- Plan your day
- AI does all the work

### 3. Review All Reports (2 hours)
```
📊 Performance Reports (60 min):
- Review each client's monthly report
- Note major wins and losses
- Identify trends
- Flag clients needing attention

🏥 Health Diagnostic (30 min):
- Check overall health score
- Review critical issues (fix this week)
- Note quick wins (easy improvements)
- Review strategic blockers

📉 Content Audit (30 min):
- Review declining content list
- Select top 10 for immediate refresh
- Note seasonal declines (acceptable)
- Plan hub page creation for mature topics
```

### 4. Create Action Plan (30 minutes)
```
Based on all 3 reports:

THIS WEEK:
□ Fix 12 critical health issues
□ Refresh top 10 declining posts
□ Disavow 18 toxic backlinks

THIS MONTH:
□ Refresh remaining 28 urgent posts
□ Build 3 hub pages
□ Launch 2 link campaigns
□ Address 45 high-priority issues

STRATEGIC:
□ Plan Q1 content for top performers
□ Investigate 3 traffic-declining clients
□ Implement 23 quick wins
□ Address 8 strategic blockers
```

### 5. Distribute Reports (30 minutes)
```
□ Email performance reports to all 50 clients
□ Schedule performance review calls with key clients
□ Share health diagnostic with team
□ Update content calendar based on insights
```

**Total Monthly Review Time: 4 hours (first Monday of month)**

---

## Output Files

### Client-Facing (External)
```
/clients/[client-name]/analytics/monthly-reports/
└── 2025-11-performance-report.pdf
    - Professional branded report
    - KPI dashboard with charts
    - Traffic and ranking analysis
    - Link building progress
    - Strategic recommendations
    - Next month forecast
```

### Internal (Team Use)
```
/analytics/monthly-reviews/2025-11/
├── 00-EXECUTIVE-SUMMARY.md (overview of all 50 clients)
├── 01-system-health-score.json (78/100)
├── 02-issue-inventory.csv (280 total issues)
│   ├── Critical: 12 issues
│   ├── High: 45 issues
│   ├── Medium: 89 issues
│   └── Low: 134 issues
├── 03-quick-wins.md (23 opportunities)
├── 04-strategic-blockers.md (8 major challenges)
├── 05-declining-content.csv (124 posts)
├── 06-refresh-priorities.md (top 38 urgent)
├── 07-cross-insights.md (connections between metrics)
└── 08-ACTION-PLAN.md (unified next steps)
```

### Summary Dashboard
```
/analytics/dashboards/
└── monthly-review-dashboard.html
    - Interactive dashboard
    - All 50 clients at a glance
    - Click into individual reports
    - Filter by metric, trend, priority
    - Export capabilities
```

---

## Cross-Component Insights (Why This Is Powerful)

### Example Insight 1: Content Age → Traffic → Health
```
FINDING:
- Content audit shows: 124 posts declining >25%
- Health check shows: Content freshness 85% <6 months
- Performance shows: Overall traffic still growing +18%

INSIGHT:
✅ New content is performing well (driving growth)
❌ Old content is decaying (124 posts declining)
💡 Insight: Refresh old content to unlock another +10-15% traffic

ACTION:
- Refresh top 38 declining posts (highest impact)
- Expected result: +12-18% additional traffic
```

### Example Insight 2: Technical Issues → Conversion Loss
```
FINDING:
- Health check shows: 45 pages with slow mobile load
- Performance shows: Conversion rate 2.8% (standard)
- Cross-analysis: Slow pages convert at 1.2% vs 3.5% for fast pages

INSIGHT:
💰 Fixing page speed on 45 pages could double conversions on those pages
   Current: 1.2% × 450 visitors = 5.4 conversions
   Potential: 3.5% × 450 visitors = 15.8 conversions
   Gain: +10.4 conversions × RM500 = RM5,200/month

ACTION:
- Optimize 45 slow pages (compress images, lazy load)
- Expected result: +10 conversions/month, +RM5,200
```

### Example Insight 3: Backlinks → Rankings → Revenue
```
FINDING:
- Link building: 12 new links acquired
- Rankings: +8 keywords moved to top 10
- Traffic: +440 visitors
- Conversions: +15 leads

INSIGHT:
💎 Link building ROI = 12 links → +440 visitors → +15 leads → +RM7,500
   Per link value: RM625

ACTION:
- Accelerate link building to 15-20 links/month
- Expected result: +25 leads/month, +RM12,500 revenue
```

**This is why consolidation is powerful** - see connections between metrics!

---

## Time Investment

### AI Execution Time
- Performance tracking: 20 minutes
- Health diagnostics: 25 minutes
- Content audit: 15 minutes
- **Parallel execution: 30 minutes** (overlapping work)

### Human Review Time
- Performance reports: 60 minutes
- Health diagnostic: 30 minutes
- Content audit: 30 minutes
- **Total: 120 minutes (2 hours)**

### Total Monthly Review
- AI: 30 minutes (one-time, first Monday)
- Human: 2 hours (strategic review)
- **Grand Total: 2.5 hours/month**

---

## Frequency & Timing

### When to Run

**Monthly (Standard):**
- 1st of each month
- First Monday morning (best for planning)
- Before monthly strategy meetings
- Before client review calls

**Quarterly (Deep Dive):**
- Every 3 months for deeper analysis
- Includes quarterly trends
- Strategic planning sessions

**On-Demand:**
- Before major client presentations
- When investigating specific issues
- When preparing business reviews

### Recommended Schedule
```
1st Monday of Month:
9:00 AM  - Trigger /monthly-review
9:30 AM  - Coffee break (AI works)
10:00 AM - Review performance reports (60 min)
11:00 AM - Review health diagnostic (30 min)
11:30 AM - Review content audit (30 min)
12:00 PM - LUNCH
1:00 PM  - Create action plan (30 min)
1:30 PM  - Email reports to clients
2:00 PM  - Update content calendar
2:30 PM  - DONE! ✅
```

---

## Integration with Other Commands

### This Command Informs:
- `/refresh-content` - Use content audit to select targets
- `/build-hub-page` - Use content analysis to find mature topics
- `/keyword-opportunity-scan` - Use gaps identified in reports
- `/competitor-analysis` - Use competitive health insights
- Daily/weekly workflows - Adjust based on health findings

### Run These After Monthly Review:
```
Priority 1: Fix critical issues from health check
Priority 2: Refresh top 10 declining posts from content audit
Priority 3: Update content calendar based on performance insights
Priority 4: Schedule client calls to discuss reports
```

---

## Alternative: Run Components Individually

**If you need just ONE component:**

### For Performance Reports Only
```bash
/generate-monthly-report
```
**When:** Need client-facing reports only
**Time:** 20 min AI + 60 min review

### For Health Diagnostic Only
```bash
/health-check
```
**When:** Troubleshooting specific issues
**Time:** 25 min AI + 30 min review

### For Content Audit Only
```bash
/audit-content-performance
```
**When:** Weekly content maintenance (not monthly)
**Time:** 15 min AI + 15 min review

**All 3 commands still exist and work independently!**

---

## Why Use /monthly-review vs Individual Commands?

### Use /monthly-review When:
✅ It's 1st of month (scheduled monthly review)
✅ Need comprehensive understanding across all dimensions
✅ Want cross-component insights
✅ Preparing strategic planning session
✅ Managing 20+ clients (need efficiency)

### Use Individual Commands When:
✅ Only need one dimension (e.g., just performance for client call)
✅ Troubleshooting specific issue (e.g., health check for technical problem)
✅ Weekly content maintenance (content audit separate from monthly review)
✅ Ad-hoc reporting (client requests mid-month report)
✅ Managing <10 clients (overhead isn't worth it)

---

## Pro Tips

### 1. Schedule It
```
Set calendar reminder:
- First Monday of every month at 9 AM
- Blocks 4 hours on your calendar
- Recurring monthly
```

### 2. Batch Client Calls
```
Week of monthly review:
- Monday: Generate reports
- Tuesday-Thursday: Client review calls
- Friday: Implement quick wins
```

### 3. Track Improvements
```
Keep scorecard:
Month | Health Score | Avg Traffic Growth | Issues Fixed
Nov   | 78/100       | +18%              | 67
Dec   | 82/100       | +15%              | 89
Jan   | 85/100       | +12%              | 92

Goal: Health score 90+ by Month 6
```

### 4. Delegate Review
```
For 50+ clients:
- AI generates reports (30 min)
- Junior reviewer pre-filters (60 min)
  - Flags critical issues
  - Highlights top/bottom performers
- You review flags only (30 min vs 120 min)
```

---

## This Is PHASE 4 - Strategic Intelligence

**Monthly workflow:**
- **Phase 1:** Onboarding (one-time per client)
- **Phase 2:** Setup (one-time per client)
- **Phase 3:** Daily operations (Mon-Fri, 15 min/day)
- **Phase 4 (THIS):** Monthly intelligence (first Monday, 4 hours)
- **Phase 5:** Quarterly planning (every 3 months)

This command provides the strategic intelligence needed to optimize operations, improve results, and scale effectively.

---

**Next:** Review reports and create action plan for the month!

# COMMAND TAXONOMY: Final Clean Architecture
## What Employees ACTUALLY Need to Run Daily, Weekly, Monthly

---

## EXECUTIVE SUMMARY

**Current State:** 18 slash commands across 4 workflow phases
**Recommendation:** Keep all 18 - each serves a distinct purpose
**User Experience:** Commands organized by frequency, not complexity
**Key Insight:** Employees should see "WHEN to run" not "HOW it works"

---

## 1. DAILY COMMANDS (Run Every Morning)
**Time Required:** 15-30 minutes total
**Best Time:** 9:00 AM (start of workday)

### Command 1: `/generate-daily-blogs`
**What it does:** Generates 150 draft blog posts (50 clients × 3 languages)
**AI Time:** 15 minutes (parallel processing)
**Human Time:** 0 minutes (runs unattended)
**Output:** 150 files in `/drafts/D/` folders
**Status:** ✅ KEEP - Core daily workflow

**When to run:**
- Every morning at 9:00 AM
- Before coffee break
- Set as calendar reminder

---

### Command 2: `/review-quality` (OPTIONAL)
**What it does:** AI quality-checks all D/ drafts, recommends approve/reject
**AI Time:** 2 minutes
**Human Time:** 0 minutes (generates report)
**Output:** Quality scores + approval recommendations
**Status:** ⭐ KEEP - Makes review 5x faster

**When to run:**
- After `/generate-daily-blogs` completes
- Before human review
- Optional but highly recommended

---

### Command 3: `/publish-approved`
**What it does:** Deploys all A/ approved content to live websites
**AI Time:** 5-7 minutes (50 clients, 3 languages each, parallel)
**Human Time:** 0 minutes (automated deployment)
**Output:** Live blog posts on client websites
**Status:** ✅ KEEP - Core daily workflow

**When to run:**
- After human review (moved D/ → A/)
- Usually around 9:30-10:00 AM
- Can run multiple times per day

---

**DAILY WORKFLOW SEQUENCE:**
```
9:00 AM  → Run /generate-daily-blogs (15 min AI)
9:15 AM  → Run /review-quality (2 min AI, optional)
9:17 AM  → Human reviews D/ folder (10-15 min)
           - Open quality report
           - Skim each draft (30 sec)
           - Move good → A/
           - Move bad → F/
9:30 AM  → Run /publish-approved (5 min AI)
9:35 AM  → Done! Rest of day is yours
```

**Total Human Time:** 10-15 minutes per day
**Total AI Time:** 22 minutes per day
**Output:** 150 live blog posts across 50 clients

---

## 2. ONBOARDING COMMANDS (Run Once Per New Client)
**Time Required:** 1-2 hours per client (includes client interaction)
**Frequency:** Ad hoc (when new client signs up)

### Command 4: `/onboard-client [client-name]`
**What it does:** Generates keyword research, personas, strategic brief
**AI Time:** 5 minutes
**Human Time:** 45 minutes (review + approve)
**Output:** 11+ draft files for review
**Status:** ✅ KEEP - Critical onboarding step

**When to run:**
- After client questionnaire completed
- Before brand setup or finalization
- First step in client lifecycle

**Example:** `/onboard-client apex-machinery`

---

### Command 5: `/setup-brand [client-name]`
**What it does:** Analyzes client photos, extracts keywords, generates 5 CI options
**AI Time:** 25-30 minutes
**Human Time:** 90-120 minutes (review + client presentation)
**Output:** Image briefs + 5 brand identity options
**Status:** ⭐ KEEP - Critical for brand consistency

**When to run:**
- After `/onboard-client` approved
- After client uploads photos
- Before `/finalize-client`

**Example:** `/setup-brand apex-machinery`

---

### Command 6: `/finalize-client [client-name]`
**What it does:** Converts approved drafts to production, generates website, deploys to Vercel
**AI Time:** 10 minutes
**Human Time:** 0 minutes (automated)
**Output:** Live website + 10 first blog posts
**Status:** ✅ KEEP - Completes onboarding

**When to run:**
- After all D/ files approved (A/)
- After brand identity selected
- Final onboarding step before daily workflow

**Example:** `/finalize-client apex-machinery`

---

### Command 7: `/setup-vercel-projects [client-name]`
**What it does:** Creates 3 Vercel projects for multi-language deployment
**AI Time:** 2-3 minutes
**Human Time:** 0 minutes (automated)
**Output:** 3 Vercel projects (EN, MS, ZH)
**Status:** ⚠️ CONSIDER MERGING into `/finalize-client`

**When to run:**
- During `/finalize-client` (should be automatic)
- Only if Vercel projects don't exist

**Recommendation:** Merge this into `/finalize-client` as automated step
**Reason:** Employees shouldn't need to think about this

---

**ONBOARDING WORKFLOW SEQUENCE:**
```
Day 1  → Client completes questionnaire (30 min)
       → Run /onboard-client apex-machinery (5 min AI)
       → Employee reviews drafts (45 min)
       → Employee approves keywords/personas/brief (D/ → A/)

Day 2  → Client uploads photos to /images/original/ (15 min)
       → Run /setup-brand apex-machinery (30 min AI)
       → Employee reviews image briefs (60 min)
       → Employee presents 5 CI options to client
       → Client selects preferred CI option
       → Employee approves selected CI (D/ → A/)

Day 3  → Run /finalize-client apex-machinery (10 min AI)
       → Website generated and deployed
       → 10 first blog posts created as drafts
       → Employee reviews first 10 posts (15 min)
       → Employee approves (D/ → A/)
       → Run /publish-approved (5 min AI)
       → Client LIVE!

Day 4+ → Daily workflow begins (/generate-daily-blogs)
```

**Total Time:** ~3 hours total (spread across 3 days)
**Human Time:** ~2 hours
**AI Time:** ~50 minutes

---

## 3. WEEKLY COMMANDS (Run Once Per Week)
**Time Required:** 30-45 minutes
**Best Day:** Friday afternoon (review week's performance)

### Command 8: `/audit-content-performance`
**What it does:** Scans all content, identifies declining pieces, flags for refresh
**AI Time:** 12-15 minutes
**Human Time:** 30 minutes (review + decisions)
**Output:** Performance audit report + refresh candidates
**Status:** ✅ KEEP - Prevents traffic decay

**When to run:**
- Every Friday at 2:00 PM
- After 50+ posts published per client
- Before running `/refresh-content`

---

### Command 9: `/refresh-content [url]`
**What it does:** Refreshes declining content with skyscraper technique
**AI Time:** 8-10 minutes per piece
**Human Time:** 15 minutes per piece (review)
**Output:** Refreshed content as D/ draft
**Status:** ✅ KEEP - Critical for maintenance

**When to run:**
- After `/audit-content-performance` identifies red-flag content
- For top 5 declining pieces
- Can run 5 refreshes in 45 minutes (AI) + 75 minutes (review)

**Example:** `/refresh-content clients/apex-machinery/content/en/blogs/excavator-financing-guide.md`

---

**WEEKLY WORKFLOW SEQUENCE:**
```
Friday 2:00 PM  → Run /audit-content-performance (15 min AI)
Friday 2:15 PM  → Review audit report (15 min human)
                  - Identify top 5 red-flag pieces
                  - Prioritize by traffic impact
Friday 2:30 PM  → Run /refresh-content for top 5 (45 min AI, batched)
Friday 3:15 PM  → Review refreshed drafts next week
                  - Or do it now if time permits
```

**Weekly Time:** 30 minutes minimum, 2 hours if refreshing 5 pieces
**Impact:** Prevents 15-30% annual traffic decay

---

## 4. MONTHLY COMMANDS (Run Once Per Month)
**Time Required:** 2-3 hours
**Best Day:** First Monday of each month

### Command 10: `/generate-monthly-report`
**What it does:** Generates performance reports for all clients
**AI Time:** 15-20 minutes (all clients)
**Human Time:** 30-45 minutes (review)
**Output:** Monthly performance reports (PDF/HTML)
**Status:** ✅ KEEP - Client reporting + strategy

**When to run:**
- First Monday of each month
- Early morning (9:00 AM) for fresh data
- Before client calls/meetings

---

### Command 11: `/health-check`
**What it does:** Comprehensive system health assessment across all clients
**AI Time:** 20-25 minutes
**Human Time:** 30 minutes (review + prioritize fixes)
**Output:** Health scorecard + issue inventory + recommendations
**Status:** ✅ KEEP - Strategic diagnostics

**When to run:**
- First Monday of each month (after monthly report)
- When growth stalls
- Quarterly deep-dive

---

### Command 12: `/keyword-opportunity-scan`
**What it does:** Identifies high-value keyword opportunities (DataForSEO)
**AI Time:** 18-20 minutes
**Human Time:** 25 minutes (review + plan)
**Output:** Top 50-100 keyword opportunities ranked by value
**Status:** ✅ KEEP - Growth intelligence

**When to run:**
- Monthly (first Monday)
- When planning content calendar
- Before creating new content

---

### Command 13: `/competitor-analysis [domain]`
**What it does:** Analyzes competitor strategy, identifies gaps and opportunities
**AI Time:** 12-15 minutes per competitor
**Human Time:** 20 minutes per competitor (review)
**Output:** Competitor analysis report + opportunity roadmap
**Status:** ✅ KEEP - Competitive intelligence

**When to run:**
- Monthly for top 3 competitors
- When launching competitive campaigns
- Quarterly benchmark analysis

**Example:** `/competitor-analysis competitor-equipment-financing.com.my`

---

**MONTHLY WORKFLOW SEQUENCE:**
```
First Monday 9:00 AM  → Run /generate-monthly-report (20 min AI)
                      → Review reports (30 min human)
                      → Email reports to clients

First Monday 10:00 AM → Run /health-check (25 min AI)
                      → Review health scorecard (30 min human)
                      → Prioritize critical issues

First Monday 11:00 AM → Run /keyword-opportunity-scan (20 min AI)
                      → Review opportunities (25 min human)
                      → Update content calendar

First Monday 12:00 PM → Run /competitor-analysis for top 3 (45 min AI)
                      → Review competitor reports (60 min human)
                      → Adjust strategy

First Monday 2:00 PM  → Done! Strategic planning complete
```

**Monthly Time:** 2-3 hours
**Output:** 4 major strategic reports
**Impact:** Data-driven decision making

---

## 5. ON-DEMAND COMMANDS (Run When Needed)
**Frequency:** As needed (not scheduled)

### Command 14: `/build-hub-page [topic]`
**What it does:** Creates comprehensive hub page for topic cluster
**AI Time:** 10-12 minutes
**Human Time:** 45 minutes (review + link updates)
**Output:** Hub page + internal link recommendations
**Status:** ✅ KEEP - Authority building

**When to use:**
- After 5+ related spokes published
- To improve topical authority
- For main service/product categories

**Example:** `/build-hub-page "Equipment Financing"`

---

### Command 15: `/research-link-prospects [topic]`
**What it does:** Finds 50-100 backlink prospects for topic
**AI Time:** 15-18 minutes
**Human Time:** 20 minutes (review)
**Output:** Prospect list with contact info + outreach angles
**Status:** ✅ KEEP - Link building foundation

**When to use:**
- Before launching outreach campaigns
- Monthly link building planning
- For new content pieces

**Example:** `/research-link-prospects "Equipment Financing"`

---

### Command 16: `/launch-outreach-campaign [topic]`
**What it does:** Generates 50-100 personalized outreach emails
**AI Time:** 10-12 minutes
**Human Time:** 40 minutes (review + sending)
**Output:** Personalized email templates + follow-up sequences
**Status:** ✅ KEEP - Link acquisition automation

**When to use:**
- After `/research-link-prospects` completes
- Monthly link building campaigns
- 2-3 campaigns per month

**Example:** `/launch-outreach-campaign "Equipment Financing"`

---

### Command 17: `/document-eeat [url]`
**What it does:** Enhances content with E-E-A-T trust signals
**AI Time:** 8-10 minutes per piece
**Human Time:** 15 minutes per piece (review)
**Output:** Enhanced content + author credentials + schema markup
**Status:** ✅ KEEP - Trust signal optimization

**When to use:**
- For high-value content (hubs, cornerstone)
- For competitive keywords
- During content refresh campaigns
- For YMYL topics

**Example:** `/document-eeat clients/apex-machinery/content/en/blogs/excavator-financing-guide.md`

---

### Command 18: `/organize-by-intent`
**What it does:** Analyzes and reorganizes content by search intent
**AI Time:** 12-15 minutes
**Human Time:** 20 minutes (review)
**Output:** Content organized by intent + gap analysis
**Status:** ✅ KEEP - Strategic organization

**When to use:**
- After 50+ content pieces published
- Quarterly review
- When conversion rates are low
- Before content planning

---

**ON-DEMAND USAGE PATTERNS:**

**Authority Building (Monthly):**
- `/build-hub-page` for main topics
- `/document-eeat` for high-value content

**Link Building (Monthly):**
- `/research-link-prospects` (2-3 topics)
- `/launch-outreach-campaign` (2-3 campaigns)

**Strategic Organization (Quarterly):**
- `/organize-by-intent` for all clients

---

## COMMAND RECOMMENDATIONS

### ✅ KEEP ALL 18 COMMANDS
**Reasoning:**
- Each serves a distinct purpose
- No overlap or redundancy
- All are essential to complete workflow
- Different frequency patterns (daily/weekly/monthly/on-demand)

### ⚠️ MERGE RECOMMENDATION
**Merge:** `/setup-vercel-projects` → `/finalize-client`
- Employees shouldn't think about Vercel project setup
- Should be automatic during finalization
- Reduces command count from 18 to 17

### ⭐ HIGHLIGHT IN ARCHITECTURE
**Priority 1 (Daily - Show First):**
1. `/generate-daily-blogs` - CORE workflow
2. `/review-quality` - Makes review 5x faster
3. `/publish-approved` - CORE workflow

**Priority 2 (Onboarding - Show Second):**
4. `/onboard-client`
5. `/setup-brand`
6. `/finalize-client`

**Priority 3 (Weekly - Show Third):**
7. `/audit-content-performance`
8. `/refresh-content`

**Priority 4 (Monthly - Show Fourth):**
9. `/generate-monthly-report`
10. `/health-check`
11. `/keyword-opportunity-scan`
12. `/competitor-analysis`

**Priority 5 (On-Demand - Show Last):**
13. `/build-hub-page`
14. `/research-link-prospects`
15. `/launch-outreach-campaign`
16. `/document-eeat`
17. `/organize-by-intent`

---

## UPDATED ARCHITECTURE PRESENTATION STRUCTURE

### Recommended Flow for architecture-presentation.html:

**Section 1: At a Glance (Current)**
- Keep existing stats
- Perfect overview

**Section 2: Daily Workflow (15 Minutes)**
- Show: `/generate-daily-blogs` → `/review-quality` → `/publish-approved`
- Emphasize: 15 min total, 150 posts published
- Sequence diagram: Current is perfect

**Section 3: Onboarding Workflow (3 Days, 2 Hours Human)**
- Show: `/onboard-client` → `/setup-brand` → `/finalize-client`
- Timeline: Day 1, Day 2, Day 3
- Emphasize: One-time per client

**Section 4: Weekly Maintenance (30 Minutes)**
- Show: `/audit-content-performance` → `/refresh-content`
- Emphasize: Prevent traffic decay
- Frequency: Friday afternoons

**Section 5: Monthly Strategy (2 Hours)**
- Show: `/generate-monthly-report` → `/health-check` → `/keyword-opportunity-scan` → `/competitor-analysis`
- Emphasize: Data-driven decisions
- Frequency: First Monday

**Section 6: Growth Commands (On-Demand)**
- Hub Pages: `/build-hub-page`
- Link Building: `/research-link-prospects` → `/launch-outreach-campaign`
- Trust Signals: `/document-eeat`
- Organization: `/organize-by-intent`
- Emphasize: Run as needed for growth

**Section 7: D/A/F Workflow (Current)**
- Keep existing section
- Perfect explanation

**Section 8: Folder Architecture (Current)**
- Keep existing section
- Perfect visualization

**Section 9: Scaling Economics (Current)**
- Keep existing section
- Perfect economics breakdown

**Section 10: Quick Command Reference**
- Update to show 5 categories:
  1. Daily (3 commands)
  2. Onboarding (3 commands)
  3. Weekly (2 commands)
  4. Monthly (4 commands)
  5. Growth/On-Demand (5 commands)

---

## EMPLOYEE QUICK REFERENCE CARD

### What to Run Daily (9:00 AM - 9:35 AM)
```
/generate-daily-blogs     (AI: 15 min)
/review-quality          (AI: 2 min, optional)
[Human reviews D/]       (Human: 10-15 min)
/publish-approved        (AI: 5 min)
```

### What to Run Weekly (Friday 2:00 PM - 3:00 PM)
```
/audit-content-performance  (AI: 15 min)
[Human reviews report]      (Human: 15 min)
/refresh-content [url] × 5  (AI: 45 min)
[Human reviews next week]   (Human: 75 min later)
```

### What to Run Monthly (First Monday 9:00 AM - 2:00 PM)
```
/generate-monthly-report     (AI: 20 min, Human: 30 min)
/health-check                (AI: 25 min, Human: 30 min)
/keyword-opportunity-scan    (AI: 20 min, Human: 25 min)
/competitor-analysis × 3     (AI: 45 min, Human: 60 min)
```

### What to Run for New Clients (Over 3 Days)
```
Day 1: /onboard-client [name]    (AI: 5 min, Human: 45 min)
Day 2: /setup-brand [name]       (AI: 30 min, Human: 2 hours)
Day 3: /finalize-client [name]   (AI: 10 min, Human: 0 min)
```

### What to Run for Growth (As Needed)
```
/build-hub-page [topic]              (Monthly, 1 hour)
/research-link-prospects [topic]     (Monthly, 35 min)
/launch-outreach-campaign [topic]    (Monthly, 50 min)
/document-eeat [url]                 (As needed, 25 min/piece)
/organize-by-intent                  (Quarterly, 35 min)
```

---

## TIME BUDGETS BY WORKFLOW

### Daily (Every Day)
- AI Time: 22 minutes
- Human Time: 10-15 minutes
- Total: 35 minutes max
- Output: 150 live blog posts

### Weekly (Every Friday)
- AI Time: 60 minutes (audit + refresh)
- Human Time: 90 minutes (review + approve)
- Total: 2.5 hours
- Output: 5 refreshed posts

### Monthly (First Monday)
- AI Time: 110 minutes (reports + scans)
- Human Time: 145 minutes (review + strategy)
- Total: 4-5 hours
- Output: 4 strategic reports

### Onboarding (Per New Client)
- AI Time: 45 minutes (over 3 days)
- Human Time: 3+ hours (includes client interaction)
- Total: ~4 hours
- Output: 1 live client website

### Growth (As Needed)
- Variable based on campaigns
- Link building: 2-3 campaigns/month = 3 hours
- Hub pages: 1-2/month = 2 hours
- E-E-A-T: 5-10 pieces/month = 3-5 hours

---

## TOTAL TIME INVESTMENT (50 Clients)

### Daily Operations
- 15 minutes × 5 days = 1.25 hours/week
- 5 hours/month

### Weekly Maintenance
- 30 minutes × 4 weeks = 2 hours/month

### Monthly Strategy
- 4 hours × 1 = 4 hours/month

### Growth Activities
- 8 hours/month (average)

**TOTAL: 19 hours/month for 50 clients**
**Per Client: 22 minutes/month**
**Revenue at $500/client: $25,000/month**
**Hourly Rate: $1,315/hour**

---

## CONCLUSION

**All 18 commands are essential.**

Each command serves a distinct purpose in the workflow:
- **Daily commands (3):** Core content production
- **Onboarding commands (3):** Client lifecycle
- **Weekly commands (2):** Maintenance & decay prevention
- **Monthly commands (4):** Strategy & intelligence
- **Growth commands (5):** Authority & link building

**Recommendation for architecture-presentation.html:**
1. Keep existing structure (it's excellent)
2. Add "Weekly Workflow" section (currently missing)
3. Update "Quick Command Reference" to show 5 categories
4. Merge `/setup-vercel-projects` into `/finalize-client` (optional)

**Key Insight:**
Employees don't need to understand HOW commands work.
They need to understand WHEN to run them.

Organize by frequency, not by complexity.

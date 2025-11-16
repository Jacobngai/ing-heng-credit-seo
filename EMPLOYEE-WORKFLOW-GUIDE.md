# Employee Workflow Guide
## Simple, Clean Commands for Daily Operations

---

## YOUR DAILY SCHEDULE (15 Minutes Total)

### Every Morning: 9:00 AM - 9:35 AM

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Run /generate-daily-blogs                     │
│  AI generates 150 blog posts (15 min)                   │
│  ☕ Get coffee while AI works                           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Run /review-quality (OPTIONAL)                │
│  AI scores each post quality (2 min)                    │
│  Helps you review 5x faster                             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Review D/ Folder (15 min)                     │
│  Human Decision Time:                                   │
│  • Open quality report (if you ran /review-quality)    │
│  • Skim each post (30 seconds)                          │
│  • Good quality? → Move to A/                           │
│  • Bad quality? → Move to F/                            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 4: Run /publish-approved                         │
│  AI deploys all A/ posts to live websites (5 min)      │
│  🎉 150 posts are LIVE!                                 │
└─────────────────────────────────────────────────────────┘

TOTAL TIME: 15 minutes (human)
OUTPUT: 150 live blog posts across 50 clients
```

---

## YOUR WEEKLY TASK (30 Minutes)

### Every Friday: 2:00 PM - 3:00 PM

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Run /audit-content-performance                │
│  AI scans all content for traffic decline (15 min)     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Review Audit Report (15 min)                  │
│  Human Decision Time:                                   │
│  • Open declining-content.json                          │
│  • Identify top 5 red-flag posts (traffic down >20%)   │
│  • Decide: Refresh or Archive?                          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Run /refresh-content [url] × 5                │
│  AI refreshes top 5 declining posts (45 min)           │
│  Review refreshed drafts next week                      │
└─────────────────────────────────────────────────────────┘

TOTAL TIME: 30 minutes (human), 60 minutes (AI)
OUTPUT: 5 refreshed posts, traffic decay prevented
```

---

## YOUR MONTHLY TASKS (4 Hours)

### First Monday of Each Month: 9:00 AM - 2:00 PM

```
┌─────────────────────────────────────────────────────────┐
│  TASK 1: Performance Reports                           │
│  /generate-monthly-report                               │
│  AI: 20 min | Human: 30 min review                     │
│  Output: Monthly reports for all clients                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  TASK 2: System Health Check                           │
│  /health-check                                          │
│  AI: 25 min | Human: 30 min review                     │
│  Output: Health scorecard + critical issues             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  TASK 3: Keyword Opportunities                         │
│  /keyword-opportunity-scan                              │
│  AI: 20 min | Human: 25 min review                     │
│  Output: Top 50-100 keyword opportunities               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  TASK 4: Competitor Analysis                           │
│  /competitor-analysis [competitor1.com]                 │
│  /competitor-analysis [competitor2.com]                 │
│  /competitor-analysis [competitor3.com]                 │
│  AI: 45 min | Human: 60 min review                     │
│  Output: 3 competitor reports + opportunities           │
└─────────────────────────────────────────────────────────┘

TOTAL TIME: 145 min human, 110 min AI
OUTPUT: 4 strategic reports per client
```

---

## ONBOARDING A NEW CLIENT (3 Days, 2 Hours Human)

### Day 1: Strategic Planning

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Client Completes Questionnaire (30 min)       │
│  Client answers 30+ questions:                          │
│  • Business info, target audience, competitors          │
│  • Services/products, SEO goals, brand voice            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Run /onboard-client [client-name]             │
│  AI generates:                                          │
│  • Keyword research (5 files)                           │
│  • Persona ideas (5-8 files)                            │
│  • Strategic brief (1 file)                             │
│  AI: 5 min                                              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Review and Approve (45 min)                   │
│  Human Decision Time:                                   │
│  • Review all 11+ draft files                           │
│  • Good files → Move D/ to A/                           │
│  • Bad files → Move D/ to F/                            │
│  • Need at least 3 keywords, 3 personas, 1 brief        │
└─────────────────────────────────────────────────────────┘

DAY 1 COMPLETE
```

### Day 2: Brand Identity

```
┌─────────────────────────────────────────────────────────┐
│  STEP 4: Client Uploads Photos (15 min)                │
│  Client uploads to /images/original/:                   │
│  • Product photos (equipment, vehicles)                 │
│  • Testimonial photos (customers, projects)             │
│  • Premises photos (office, warehouse)                  │
│  • Logo (if exists)                                     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 5: Run /setup-brand [client-name]                │
│  AI analyzes photos and generates:                      │
│  • Image briefs with keyword extraction (47 files)      │
│  • 5 complete CI (Corporate Identity) options           │
│  AI: 30 min                                             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 6: Review Image Briefs (60 min)                  │
│  Human Decision Time:                                   │
│  • Review all 47 image briefs                           │
│  • Verify keyword extraction accuracy                   │
│  • Approve good briefs (D/ → A/)                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 7: Present CI Options to Client (30 min)         │
│  Human Task:                                            │
│  • Present all 5 CI options to client                   │
│  • Client selects preferred option                      │
│  • Approve selected CI (D/ → A/)                        │
└─────────────────────────────────────────────────────────┘

DAY 2 COMPLETE
```

### Day 3: Website Launch

```
┌─────────────────────────────────────────────────────────┐
│  STEP 8: Run /finalize-client [client-name]            │
│  AI finalizes everything:                               │
│  • Converts A/ drafts to production JSON                │
│  • Generates complete Astro website                     │
│  • Creates 3 Vercel projects (EN, MS, ZH)              │
│  • Deploys to production                                │
│  • Creates first 10 blog posts as drafts                │
│  AI: 10 min                                             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 9: Review First Blog Posts (15 min)              │
│  Human Decision Time:                                   │
│  • Review first 10 blog posts in D/                     │
│  • Approve good posts (D/ → A/)                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 10: Run /publish-approved                        │
│  AI deploys first batch of content                      │
│  🎉 CLIENT IS LIVE!                                     │
└─────────────────────────────────────────────────────────┘

DAY 3 COMPLETE - CLIENT READY FOR DAILY WORKFLOW
```

**Total Time:** ~2 hours human, ~45 minutes AI
**Output:** 1 live client website with first 10 posts

---

## GROWTH COMMANDS (As Needed)

### Authority Building (1-2 Times Per Month)

```
┌─────────────────────────────────────────────────────────┐
│  Build Topic Hub                                        │
│  /build-hub-page "Equipment Financing"                  │
│  Creates comprehensive hub page for topic cluster       │
│  Time: 45 min (10 min AI + 35 min human)               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Add Trust Signals                                      │
│  /document-eeat [url]                                   │
│  Enhances content with E-E-A-T trust signals            │
│  Time: 25 min per piece (10 min AI + 15 min human)     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Organize Content                                       │
│  /organize-by-intent                                    │
│  Reorganizes all content by search intent               │
│  Time: 35 min (15 min AI + 20 min human)               │
│  Frequency: Quarterly                                   │
└─────────────────────────────────────────────────────────┘
```

### Link Building (2-3 Campaigns Per Month)

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Find Link Prospects                           │
│  /research-link-prospects "Equipment Financing"         │
│  AI finds 50-100 backlink prospects                     │
│  Time: 35 min (18 min AI + 17 min human)               │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 2: Launch Outreach Campaign                      │
│  /launch-outreach-campaign "Equipment Financing"        │
│  AI generates 50-100 personalized emails                │
│  Time: 50 min (12 min AI + 38 min human)               │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Send Emails & Track Responses                 │
│  Human sends emails, tracks responses                   │
│  Time: 1-2 weeks (ongoing)                              │
│  Expected: 5-10 backlinks acquired per campaign         │
└─────────────────────────────────────────────────────────┘

TOTAL TIME: 85 min per campaign
OUTPUT: 5-10 quality backlinks
```

---

## COMMAND QUICK REFERENCE

### Daily Commands (Run Every Workday)
```
/generate-daily-blogs      Generate 150 blog posts
/review-quality            Score draft quality (optional)
/publish-approved          Deploy approved content
```

### Weekly Commands (Run Every Friday)
```
/audit-content-performance  Scan for declining content
/refresh-content [url]      Refresh specific post
```

### Monthly Commands (Run First Monday)
```
/generate-monthly-report    Performance reports
/health-check               System health assessment
/keyword-opportunity-scan   Find keyword opportunities
/competitor-analysis [url]  Analyze competitor
```

### Onboarding Commands (Run Once Per Client)
```
/onboard-client [name]      Generate strategy
/setup-brand [name]         Analyze photos, create CI
/finalize-client [name]     Deploy website
```

### Growth Commands (Run As Needed)
```
/build-hub-page [topic]              Create topic hub
/document-eeat [url]                 Add trust signals
/organize-by-intent                  Reorganize content
/research-link-prospects [topic]     Find link prospects
/launch-outreach-campaign [topic]    Generate outreach emails
```

---

## TIME BREAKDOWN (50 Clients)

### Daily Operations
- **Mon-Fri:** 15 min/day = 1.25 hours/week
- **Monthly:** 5 hours

### Weekly Maintenance
- **Friday:** 30 min/week
- **Monthly:** 2 hours

### Monthly Strategy
- **First Monday:** 4 hours
- **Monthly:** 4 hours

### Growth Activities
- **Variable:** 2-3 campaigns/month
- **Monthly:** 8 hours average

### Total Per Month
- **Human Time:** 19 hours for 50 clients
- **Per Client:** 22 minutes per month
- **Revenue:** $25,000/month ($500 × 50 clients)
- **Hourly Rate:** $1,315/hour

---

## D/A/F WORKFLOW (The Only Thing You Need to Remember)

```
┌─────────────┐
│   AI WORK   │  AI generates content and saves to D/
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  D/ DRAFT   │  All AI-generated content awaits review
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  YOU DECIDE │  Skim content (30 sec per item)
└──────┬──────┘
       │
       ├──────────────┐
       │              │
       ▼              ▼
┌─────────────┐  ┌─────────────┐
│ A/ APPROVED │  │  F/ FAILED  │
│  (Good)     │  │   (Bad)     │
└──────┬──────┘  └─────────────┘
       │
       ▼
┌─────────────┐
│   AI WORK   │  AI deploys A/ content to websites
└─────────────┘
```

**Your job in 3 steps:**
1. Open D/ folder
2. Move good files → A/
3. Move bad files → F/

That's it!

---

## WHAT YOU NEVER DO

❌ You don't write content
❌ You don't translate
❌ You don't research keywords
❌ You don't analyze competitors
❌ You don't create reports
❌ You don't manage deployments
❌ You don't configure websites
❌ You don't track analytics

**AI does all of that.**

**You just review and approve.**

---

## YOUR ACTUAL RESPONSIBILITIES

✅ Review AI-generated content (30 sec per piece)
✅ Move good files from D/ to A/
✅ Move bad files from D/ to F/
✅ Make strategic decisions (monthly)
✅ Interact with clients (onboarding, presentations)

**That's the complete job description.**

---

## SCALING YOUR OPERATION

### 1-10 Clients
- Time: 15 min/day
- Revenue: $500-$5,000/month
- You: Solo operation

### 10-50 Clients
- Time: 15 min - 1 hour/day
- Revenue: $5,000-$25,000/month
- You: Solo operation (still manageable)

### 50-100 Clients
- Time: 1-2 hours/day
- Revenue: $25,000-$50,000/month
- You: Hire 1 reviewer ($3K/month)

### 100-200 Clients
- Time: 2-4 hours/day
- Revenue: $50,000-$100,000/month
- You: Hire 2-3 reviewers ($6-9K/month)

### 200+ Clients
- Time: Full team operation
- Revenue: $100,000+/month
- You: Build review team
- Margins: 60-70% after staffing

**Key Insight:** Reviewers don't need SEO skills. They just move files from D/ to A/ or F/. You train them in 2 hours.

---

## PRINT THIS PAGE AND PUT ON YOUR DESK

**Daily (9:00 AM):**
1. `/generate-daily-blogs`
2. Review D/ folder (15 min)
3. `/publish-approved`

**Weekly (Friday 2 PM):**
1. `/audit-content-performance`
2. `/refresh-content` for top 5

**Monthly (First Monday):**
1. `/generate-monthly-report`
2. `/health-check`
3. `/keyword-opportunity-scan`
4. `/competitor-analysis` × 3

**New Client:**
1. Day 1: `/onboard-client`
2. Day 2: `/setup-brand`
3. Day 3: `/finalize-client`

**You're done!**

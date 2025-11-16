# All Commands Quick Reference

**All 14 slash commands on one page**

---

## Analytics & Monitoring

### /health-check
**Purpose**: Daily site health scan
**When to use**: Every morning, or when issues suspected
**Output**: Technical issues, traffic anomalies, SEO problems

```bash
/health-check
```

**Checks:**
- Build status
- Page speed
- Broken links
- Search Console errors
- Traffic anomalies
- Ranking drops

---

### /audit-content-performance
**Purpose**: Identify content optimization opportunities
**When to use**: Weekly, or monthly deep dive
**Output**: Ranked list of refresh/amplify/remove candidates

```bash
/audit-content-performance
```

**Provides:**
- Underperforming content (refresh)
- High-potential content (amplify)
- Outdated content (update/remove)
- Content quality scores
- Engagement metrics

---

### /generate-monthly-report
**Purpose**: Comprehensive monthly performance report
**When to use**: First Monday of each month
**Output**: Full analytics, SEO, content, and link building metrics

```bash
/generate-monthly-report
```

**Includes:**
- Traffic analysis (MoM trends)
- Keyword ranking changes
- Top/bottom performing content
- Link acquisition summary
- Goal achievement tracking
- Recommendations for next month

---

## Competitive Intelligence

### /competitor-analysis
**Purpose**: Analyze competitor's SEO strategy
**When to use**: Weekly for top 3 competitors
**Output**: Competitor content gaps, keyword opportunities, backlink analysis

```bash
/competitor-analysis [competitor-domain]
```

**Analyzes:**
- New content published
- Keyword rankings gained/lost
- Backlink profile changes
- Content gaps to exploit
- Site improvements
- Traffic estimates

---

## Keyword Research

### /keyword-opportunity-scan
**Purpose**: Find low-competition, high-value keywords
**When to use**: Weekly, or when planning new content
**Output**: Prioritized keyword list with metrics

```bash
/keyword-opportunity-scan
```

**Finds:**
- Long-tail keywords
- Question-based keywords
- Low difficulty opportunities
- Search volume estimates
- Ranking difficulty scores
- Content intent mapping

---

## Content Strategy

### /organize-by-intent
**Purpose**: Group keywords by search intent
**When to use**: Before writing new content
**Output**: Content brief organized by intent

```bash
/organize-by-intent [primary-keyword]
```

**Organizes into:**
- Informational intent
- Navigational intent
- Commercial intent
- Transactional intent
- Content structure recommendations
- Related keywords to include

---

### /build-hub-page
**Purpose**: Create comprehensive pillar content
**When to use**: Monthly, for strategic topics
**Output**: Hub page outline with spoke page suggestions

```bash
/build-hub-page [pillar-topic]
```

**Creates:**
- 3,000+ word hub outline
- 10+ spoke page topics
- Internal linking structure
- Content hierarchy
- FAQ sections
- Comparison tables

---

### /refresh-content
**Purpose**: Update existing content with skyscraper technique
**When to use**: Daily, for declining or stagnant content
**Output**: Updated content with improvements highlighted

```bash
/refresh-content [page-url]
```

**Updates:**
- Outdated statistics
- New examples/case studies
- Expanded sections
- Improved visuals
- Added internal links
- Enhanced E-E-A-T signals
- Updated publish date

---

## E-E-A-T Documentation

### /document-eeat
**Purpose**: Add Experience, Expertise, Authoritativeness, Trust signals
**When to use**: For money/health pages, or competitive topics
**Output**: E-E-A-T enhancements for specific page

```bash
/document-eeat [page-url]
```

**Adds:**
- Author credentials
- Citations and sources
- Real-world examples
- Trust indicators
- Expert quotes
- Case studies
- Certifications/awards

---

## Link Building

### /research-link-prospects
**Purpose**: Find high-quality link opportunities
**When to use**: Weekly, to maintain outreach pipeline
**Output**: Qualified prospect list with contact info

```bash
/research-link-prospects [topic]
```

**Finds:**
- Resource pages
- Broken link opportunities
- Guest post sites
- Unlinked mentions
- Competitor backlinks
- Contact information (DR 30+)

---

### /launch-outreach-campaign
**Purpose**: Send personalized outreach emails
**When to use**: Daily/weekly for link building
**Output**: Sent emails log and tracking

```bash
/launch-outreach-campaign [prospect-file]
```

**Handles:**
- Email personalization
- Template selection
- Send scheduling
- Follow-up tracking
- Response monitoring
- Success rate calculation

---

## Client Onboarding

### /client-onboarding
**Purpose**: Initialize new client project
**When to use**: At project start
**Output**: Complete project setup with all configs

```bash
/client-onboarding [client-name]
```

**Sets up:**
- Directory structure
- Config files
- Brand guidelines
- Persona research
- Keyword research
- Content calendar
- Analytics tracking

---

## Workflow Management

### /weekly-planning
**Purpose**: Plan week's content and priorities
**When to use**: Every Monday morning
**Output**: Weekly task list and content calendar

```bash
/weekly-planning
```

**Plans:**
- Content to publish (5-7 posts)
- Content to refresh (3-5 posts)
- Link building targets
- Optimization tasks
- Keyword research needs

---

### /daily-standup
**Purpose**: Quick daily priorities
**When to use**: Every morning
**Output**: Top 3 priorities for the day

```bash
/daily-standup
```

**Provides:**
- Today's content tasks
- Today's outreach tasks
- Yesterday's metrics
- Blockers/issues to address

---

## Command Categories

### Daily Commands (Every Day)
1. `/health-check`
2. `/daily-standup`

### Weekly Commands (Every Week)
1. `/keyword-opportunity-scan`
2. `/audit-content-performance`
3. `/competitor-analysis` (x3)
4. `/research-link-prospects`
5. `/launch-outreach-campaign`
6. `/weekly-planning`

### Monthly Commands (Once/Month)
1. `/generate-monthly-report`
2. `/build-hub-page` (2-4x)

### As-Needed Commands
1. `/organize-by-intent` (before new content)
2. `/refresh-content` (for underperforming posts)
3. `/document-eeat` (for YMYL pages)
4. `/client-onboarding` (new projects)

---

## Command Workflow Examples

### New Content Creation Flow
```bash
# 1. Find opportunity
/keyword-opportunity-scan

# 2. Organize keywords
/organize-by-intent [chosen-keyword]

# 3. Write content
# (Manual writing or AI-assisted)

# 4. Add E-E-A-T (if needed)
/document-eeat [new-page-url]
```

### Content Refresh Flow
```bash
# 1. Identify candidates
/audit-content-performance

# 2. Refresh each candidate
/refresh-content [url-1]
/refresh-content [url-2]
/refresh-content [url-3]

# 3. Re-publish and monitor
```

### Link Building Flow
```bash
# 1. Research prospects
/research-link-prospects [topic]

# 2. Launch campaign
/launch-outreach-campaign [prospect-file]

# 3. Track responses
# (Built into campaign command)
```

### Hub Page Development Flow
```bash
# 1. Build hub structure
/build-hub-page [pillar-topic]

# 2. Create spoke pages
/organize-by-intent [spoke-keyword-1]
/organize-by-intent [spoke-keyword-2]
# etc.

# 3. Implement internal linking
# (Manual or automated)
```

---

## Command Output Formats

### All commands output to:
```
framework-docs/8-outputs/
├── analytics/
├── audits/
├── competitors/
├── keywords/
├── content-briefs/
├── hub-pages/
├── link-prospects/
└── reports/
```

### Typical output includes:
- Markdown summary report
- CSV data files (when applicable)
- Action item checklists
- Timestamped for tracking

---

## Command Success Metrics

### Analytics Commands
- **Success**: Clear action items identified
- **Frequency**: Daily to monthly
- **Time**: 5-30 minutes per run

### Content Commands
- **Success**: Publishable content/outline created
- **Frequency**: Daily
- **Time**: 15-60 minutes per run

### Link Building Commands
- **Success**: 10+ qualified prospects found
- **Frequency**: Weekly
- **Time**: 30-60 minutes per campaign

### Strategy Commands
- **Success**: Clear priorities set
- **Frequency**: Weekly to monthly
- **Time**: 30-120 minutes per run

---

**Pro Tips:**
1. Chain commands for efficiency
2. Save outputs to dated folders
3. Review command history weekly
4. Automate repetitive commands
5. Document custom command workflows

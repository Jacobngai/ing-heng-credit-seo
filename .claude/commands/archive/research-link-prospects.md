# /research-link-prospects

Launch the Link Building Agent to research and identify high-quality link prospects for a specific topic, using DataForSEO MCP to find relevant sites, competitor backlink analysis, and contact information.

**What this command does:**
1. Loads Link Building Agent from `.claude/agents/link-building.md`
2. Agent executes `link-prospect-research.md` skill
3. Uses DataForSEO MCP to analyze:
   - Competitor backlink profiles (top 10 ranking pages)
   - Relevant industry directories and resource pages
   - Journalist/blogger coverage of topic
   - Guest posting opportunities
4. Identifies 50-100+ link prospects organized by opportunity level
5. Scores each prospect (domain authority, relevance, difficulty)
6. Generates prospect list with contact information where available
7. Creates personalized outreach angles for each prospect

**Expected output:**
- Comprehensive link prospect list (50-100+ sites)
- Organized by difficulty level (Easy/Medium/Hard)
- Contact information included
- Outreach angles customized per prospect
- Execution time: ~15-18 minutes

**Usage:**
```bash
/research-link-prospects [topic]
```

**Example:**
```bash
/research-link-prospects "Equipment Financing"
```

**Topic examples:**
- "Equipment Financing"
- "Construction Equipment"
- "Logistics Management"
- "Financial Services"
- "Fleet Management"

**Research methodology:**

1. **Competitor Backlink Analysis:**
   - Analyze top 10 ranking pages for topic
   - Extract all backlinks (using DataForSEO)
   - Identify common linking sources
   - Find high-authority referring domains

2. **Resource Page Discovery:**
   - Find "resources," "tools," "guides" pages
   - Identify industry directories and lists
   - Locate equipment databases and catalogs
   - Find financial services resource pages

3. **Journalist/Influencer Discovery:**
   - Identify journalists covering equipment/finance
   - Find bloggers in logistics/construction niches
   - Locate industry podcast hosts and contributors
   - Research thought leaders in space

4. **Guest Post Opportunities:**
   - Find sites accepting guest posts
   - Identify industry publications with guest options
   - Locate blog networks and syndication sites
   - Find partnership opportunities

5. **Local and Directory Opportunities:**
   - Chamber of commerce listings
   - Industry association directories
   - Local business listings (by client location)
   - Government/regulatory resources

**Generated files:**

```
/clients/[client-name]/link-building/
├── prospect-research/
│   ├── [topic]-link-prospects-PRIORITY.csv
│   ├── [topic]-link-prospects-MEDIUM.csv
│   ├── [topic]-link-prospects-HARD.csv
│   └── prospect-analysis.md (detailed analysis)
│
└── campaign-assets/
    └── [topic]-outreach-angles.md
```

**Example prospect list:**
```markdown
# Equipment Financing - Link Prospects

## PRIORITY PROSPECTS (High Authority, Easy Win)
### 1. MalaysiaFinance.com - Equipment Financing Guide
- Domain Authority: 68
- Relevance: 95/100
- Difficulty: Easy
- Suggested angle: "New financing options for construction equipment in Malaysia"
- Contact: editorial@malaysiafinance.com

### 2. ConstructionNews.my - Resources Page
- Domain Authority: 72
- Relevance: 90/100
- Difficulty: Easy
- Suggested angle: "Complete guide to equipment financing for contractors"
- Contact: submissions@constructionnews.my

### 3. LogisticsAsia.org - Industry Directory
- Domain Authority: 58
- Relevance: 88/100
- Difficulty: Easy
- Suggested angle: Request inclusion in equipment financing section
- Contact: directory@logisticsasia.org

## MEDIUM PROSPECTS (Good Authority, Moderate Effort)
### 4. EquipmentLeasing.asia - Blog
- Domain Authority: 52
- Relevance: 85/100
- Difficulty: Medium (guest post required)
- Suggested angle: "5 Financing Mistakes Equipment Buyers Make"
- Contact: blog@equipmentleasing.asia

### 5. SMEBusinessMalaysia.gov.my - Government Resources
- Domain Authority: 78
- Relevance: 82/100
- Difficulty: Hard (government approval)
- Suggested angle: "Equipment financing programs for SME development"
- Contact: smebusiness@gov.my

## HARD PROSPECTS (Very High Authority, Significant Effort)
### 10. Bloomberg.com - Equipment Finance Section
- Domain Authority: 98
- Relevance: 75/100
- Difficulty: Hard (major publication)
- Suggested angle: "Market trend analysis for equipment financing sector"
- Contact: pitches@bloomberg.com
```

**Scoring factors:**

- **Domain Authority (0-100):** Trust and authority of referring domain
- **Relevance (0-100):** How relevant site is to client topic
- **Difficulty (1-5):** Effort required to get link (1=easy, 5=very hard)
- **Traffic (0-1000+):** Estimated monthly traffic to referring page
- **Backlink Quality:** Number and quality of links to referring page
- **Opportunity Type:** Directory, resource page, guest post, etc.

**Opportunity types identified:**

1. **Resource Pages:** Sites with curated lists/resources → easy link request
2. **Guest Posts:** Allow bylined articles → moderate effort, high value
3. **Directories:** Business listings, industry directories → easy to moderate
4. **Competitor Backers:** Sites linking to competitors → good relevance
5. **Journalist/Blogger:** Coverage opportunities → medium to hard
6. **Industry Associations:** Membership/listing opportunities → easy to hard
7. **Local Directories:** City/region specific → easy
8. **Government Resources:** SME programs, business support → hard
9. **Podcast/Video:** Interview opportunities → medium
10. **Partnerships:** Co-marketing and joint ventures → hard

**After execution:**

1. **Review prospects** (~20 minutes)
   - Verify sites are legitimate and relevant
   - Check contact information accuracy
   - Assess difficulty ratings

2. **Prioritize list** (~15 minutes)
   - Select top 20 prospects to target first
   - Focus on Easy and Medium difficulty
   - Save Hard prospects for later campaigns

3. **Launch outreach campaign**
   - Run `/launch-outreach-campaign "Equipment Financing"` with prospect list
   - Start with easiest prospects (higher conversion)
   - Move to harder prospects after early wins

4. **Track results** (ongoing)
   - Monitor link placements
   - Track referring traffic
   - Update prospect list with results

**Link prospect quality signals:**

- **High Authority (DA 60+):** Links pass substantial authority
- **Relevant Content:** Links from topically relevant pages rank higher
- **Natural Link Text:** Includes target keywords but not over-optimized
- **Editorial Links:** Links in article body > sidebar links
- **Traffic:** More valuable if referring page gets traffic
- **Freshness:** Recently updated pages better for link opportunities

**When to research prospects:**

- **Before outreach campaigns:** Always research before reaching out
- **Quarterly:** Refresh prospect list with new opportunities
- **Competitor launched content:** When competitors get links, research same prospects
- **New topic clusters:** Research prospects for each new hub page
- **Seasonal opportunities:** Industry events, conferences, publications

**Employee next steps:**
1. Review full prospect list (20-30 min)
2. Analyze top 20 priority prospects
3. Verify contact information accuracy
4. Categorize by outreach difficulty
5. Create personalized outreach templates
6. Launch outreach campaign via `/launch-outreach-campaign`

**Typical campaign workflow:**
```
1. Run /research-link-prospects [topic]         (15-18 min)
2. Review and prioritize prospects              (30 min)
3. Run /launch-outreach-campaign [topic]        (initial setup)
4. Monitor outreach responses                   (ongoing)
5. Track link placements                        (ongoing)
6. Measure link impact on rankings              (30 days)
```

**Success rates by difficulty:**
- **Easy:** 50-70% conversion rate
- **Medium:** 20-40% conversion rate
- **Hard:** 5-15% conversion rate
- **Average:** 30-40% overall if mix of difficulty levels

**Expected outcomes:**
- 50-100 qualified prospects identified
- 20-30 actively pursued (easy/medium)
- 5-10 links acquired per 100 prospects researched
- Links distributed across authority levels
- Natural link velocity (not all at once)

**This is PHASE 3** - Systematic link building through research-driven prospect identification and strategic outreach.

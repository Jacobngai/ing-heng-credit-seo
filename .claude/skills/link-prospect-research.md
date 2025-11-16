# Link Prospect Research Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Identify and research high-quality link prospects for systematic link building campaigns.

## Prerequisites
- Client content exists and is worth linking to
- Target topic/keyword cluster identified
- Client has E-E-A-T credentials documented (for credibility)
- Outreach team ready for follow-up

## Methodology

### Step 1: Define Link Prospect Criteria

1. **Authority Metrics**
   - Domain Authority (DA) 30+ (minimum)
   - DA 50+ (preferred for competitive niches)
   - Trust Flow good/excellent
   - No spam indicators (manual action history, bad neighborhood)
   - Relevant backlink profile

2. **Relevance Requirements**
   - Content in same industry/niche
   - Topically related to client business
   - Content type: Blog posts, guides, resource pages
   - NOT: Directories, press release sites, low-quality farms
   - Geographic relevance (Malaysia-focused preferred)

3. **Link Opportunity Type**
   - Broken link opportunity (competitor link, broken reference)
   - Mentioned but not linked (Brand mention, competitor mention, gap fill)
   - Resource page opportunity (curated lists, resource compilation)
   - Editorial link opportunity (high-quality content worth linking to)
   - Expert comment opportunity (industry expert comment with bio link)

### Step 2: Identify Prospect Sources

1. **Competitor Backlink Analysis**
   - Use DataForSEO backlinks API
   - Analyze top 3 competitors
   - Identify referring domains
   - Filter for high DA (40+)
   - Note anchor text and link context

   Example search:
   ```
   Target: competitor-domain.com
   Filter: DA >= 40, Trust Flow good+
   Result: List of 50-100 quality linking domains
   ```

2. **Topic Authority Domains**
   - Search "[topic] guide" on Google
   - Search "[topic] resource page"
   - Search "[topic] checklist"
   - Search "[industry] blog" or "[industry] news"
   - Note top 20 results' linking opportunities

3. **Industry-Specific Sources**
   - Industry associations websites
   - Trade publication sites
   - Local business directories (Malaysia-based)
   - Professional networks
   - Government resources (if applicable)

4. **Niche Authority Discovery**
   - Search "best [topic] resources"
   - Search "[topic] tools and resources"
   - Check links in Wikipedia articles (if applicable)
   - Review bibliography of academic papers
   - Analyze expert resource compilations

### Step 3: Qualify Prospects

Score each prospect using qualification matrix:

```
## Link Prospect Qualification Score

Prospect: [Domain Name]
URL: [Specific page URL or homepage]
Found via: [Source of discovery]

### Authority (30 points)
- Domain Authority: ___/100 (DA >= 50 = 10 pts, 40-49 = 5 pts)
- Trust Flow: Good/Excellent = 10 pts, Fair = 5 pts
- No penalties/manual actions = 10 pts
- Score: ___/30

### Relevance (30 points)
- Content relevance to client topic: Highly relevant = 10 pts, Relevant = 5 pts
- Niche fit (equipment/finance/machinery): Perfect = 10 pts, Good = 5 pts
- Geographic relevance (Malaysia): Yes = 10 pts, No = 5 pts
- Score: ___/30

### Opportunity Quality (25 points)
- Linkable asset quality: High = 10 pts, Medium = 5 pts
- Link placement potential: Multiple spots = 10 pts, Single = 5 pts
- Likelihood of acceptance: High = 5 pts, Medium = 3 pts
- Score: ___/25

### Accessibility (15 points)
- Contact info available: Yes = 5 pts
- Outreach history (if known): Responsive = 10 pts, Unknown = 5 pts
- Estimated effort to secure: Low = 15 pts, Medium = 10 pts, High = 5 pts
- Score: ___/15

### TOTAL SCORE: ___/100

**Qualification Level:**
- 80-100: Priority A (immediate outreach)
- 60-79: Priority B (schedule outreach)
- 40-59: Priority C (secondary outreach)
- <40: Archive (revisit in 6 months)
```

### Step 4: Map Opportunity Types

For each qualified prospect, identify specific linking opportunities:

1. **Broken Link Opportunities**
   - Locate broken links on prospect's pages
   - Identify what was originally linked to
   - Determine if client content is better/similar replacement
   - Note broken link URL and context

   Example:
   ```
   Prospect: equipment-guide.com
   Page: /equipment-financing-types/
   Broken link: "equipment leasing options" → (404)
   Replacement: Link to your leasing guide
   Anchor text: "equipment leasing options"
   ```

2. **Mentioned But Not Linked**
   - Search prospect domain for brand mentions
   - Identify unlinked competitor mentions
   - Find gaps where similar content should link
   - Note context and anchor text opportunity

   Example:
   ```
   Prospect: machinery-blog.com
   Page: /financing-guide/
   Text: "Many businesses choose forklift leasing over purchase..."
   Opportunity: "Forklift leasing" should link to your forklift content
   Current: Unlinked
   ```

3. **Resource Page Opportunities**
   - Identify resource/tools/guides pages
   - Check if similar client content listed
   - Determine if client content worthy addition
   - Plan pitch for inclusion

   Example:
   ```
   Prospect: construction-resources.com
   Page: /equipment-financing-tools/
   Format: Annotated list of 20+ financing resources
   Opportunity: Add your calculator/guide to list
   Pitch: "We offer free equipment financing calculator with detailed breakdown"
   ```

4. **Expert Comment/Bio Links**
   - Identify expert contributor opportunities
   - Check if expert bios have bio links
   - Assess if client qualifies as expert
   - Note submission requirements

### Step 5: Research Outreach Angle

For each prospect, develop specific outreach approach:

1. **Understand Prospect's Angle**
   - What's their primary focus? (education, entertainment, sales)
   - Who's their audience?
   - What problems do they solve?
   - How do you add value?

2. **Develop Value Proposition**
   - How does linking to client benefit their readers?
   - What unique value does client content provide?
   - What problem does it solve for their audience?

3. **Craft Outreach Premise**
   - NOT: "Link to my content"
   - YES: "Your readers would benefit from [specific value]"
   - Reference specific page/post where link would be useful
   - Show you've read and understood their content

### Step 6: Document Prospect Details

```markdown
## Link Prospect Profile: [Prospect Domain]

### Basic Information
- **Domain:** [domain.com]
- **Main Topic:** [What they write about]
- **Audience:** [Who reads their content]
- **Found Via:** [How you discovered]
- **Priority:** A/B/C
- **Qualification Score:** __/100

### Authority Metrics
- Domain Authority: __/100
- Referring Domains: __
- Backlink Count: __
- Trust Flow: [Good/Fair/Excellent]
- Spam Score: __%
- Last Verified: [Date]

### Relevance Assessment
- Topic Match: ▓▓▓▓▓ [5/5 or less]
- Niche Fit: Perfect / Good / Fair
- Geographic Fit: Malaysia / Regional / Irrelevant
- Content Quality: High / Medium / Low

### Link Opportunity Details
**Opportunity Type:** [Broken link/Mentioned but unlinked/Resource page/Expert bio]

**Target Page:** [URL]
**Page Topic:** [Main subject]
**Page Authority:** DA __

**Specific Opportunity:**
- Location: [Where link could go]
- Current text/context: [What's there now if applicable]
- Suggested anchor text: [Recommended keywords]
- Client content to link: [URL of best content]
- Link placement context: [Natural fit example]

### Contact Information
- **Website Contact Form:** [URL]
- **Email Contact:** [email] (if found)
- **Social Media:** [Twitter/LinkedIn contact]
- **Editor Name:** [If found]

### Outreach Strategy
**Hook:** [Opening that shows you understand their content]
**Value Prop:** [Why linking helps their readers]
**Pitch:** [Specific, non-sales approach]
**Success Likelihood:** High / Medium / Low

### Outreach Status
- **Status:** Not started / In progress / Sent / Accepted / Rejected
- **First Contact Date:** [Date if sent]
- **Follow-up Status:** [Any follow-up sent]
- **Result:** [Link secured/Pending/Rejected]
- **Notes:** [Any relevant observations]

### Related Prospects
- [Similar domain 1]
- [Similar domain 2]
```

## Output Format

### Link Prospect Database (JSON)
```json
{
  "campaign": "ing-heng-credit-equipment-financing",
  "language": "en",
  "client": "ing-heng-credit",
  "creation_date": "2025-11-04",
  "total_prospects": 47,
  "prospects_by_priority": {
    "priority_a": 12,
    "priority_b": 18,
    "priority_c": 17
  },
  "prospects": [
    {
      "prospect_id": "LINK_PROSPECT_001",
      "domain": "equipment-guide.com",
      "homepage_url": "https://equipment-guide.com",
      "authority": {
        "domain_authority": 52,
        "referring_domains": 287,
        "backlink_count": 4521,
        "trust_flow": "excellent",
        "spam_score": 2
      },
      "relevance": {
        "topic_match": "high",
        "niche_fit": "perfect",
        "geographic": "malaysia",
        "quality_rating": "high"
      },
      "opportunity": {
        "type": "broken_link",
        "target_page": "https://equipment-guide.com/equipment-financing-types/",
        "target_page_da": 48,
        "anchor_text_opportunity": "equipment leasing options",
        "client_content_url": "/en/blogs/equipment-leasing-guide/",
        "priority_score": 92
      },
      "contact": {
        "email": "editor@equipment-guide.com",
        "contact_form": "https://equipment-guide.com/contact/",
        "editor_name": "John Smith"
      },
      "outreach": {
        "hook": "Noticed broken link to equipment leasing resource on your financing types page",
        "value_prop": "Our comprehensive leasing guide would help your readers understand lease vs. buy trade-offs",
        "status": "not_started",
        "likelihood": "high"
      }
    },
    {
      "prospect_id": "LINK_PROSPECT_002",
      "domain": "machinery-blog.com",
      "homepage_url": "https://machinery-blog.com",
      "opportunity": {
        "type": "mentioned_not_linked",
        "target_page": "https://machinery-blog.com/financing-guide/",
        "unlinked_mention": "Forklift leasing is popular with warehouse operators",
        "context_snippet": "...operators often choose forklift leasing over purchase...",
        "client_content_url": "/en/blogs/forklift-financing/",
        "priority_score": 78
      },
      "outreach": {
        "status": "sent",
        "sent_date": "2025-10-25",
        "response": "pending"
      }
    }
  ]
}
```

### Link Prospect Research Report
```markdown
# Link Prospect Research Report
**Client:** Ing Heng Credit
**Topic:** Equipment Financing
**Language:** English
**Report Date:** November 4, 2025

## Executive Summary
- **Total Prospects Identified:** 47
- **Priority A (Immediate):** 12
- **Priority B (Schedule):** 18
- **Priority C (Secondary):** 17
- **Estimated High-Quality Links Possible:** 8-12
- **Timeline to First Link:** 2-4 weeks

## Top 10 Priority A Prospects

| Rank | Domain | DA | Opportunity | Priority | Likelihood |
|------|--------|----|----|----------|-----------|
| 1 | equipment-guide.com | 52 | Broken link, financing-types page | A | High |
| 2 | machinery-blog.com | 48 | Mentioned (forklift leasing) | A | High |
| 3 | warehouse-guide.com | 45 | Resource page update opportunity | A | Medium |
| ... | ... | ... | ... | ... | ... |

## Campaign Strategy
- **Week 1:** Reach out to 6 Priority A prospects (broken links + best fit)
- **Week 2:** Follow up on non-responses, start Priority B outreach
- **Week 3-4:** Continue campaign, document results

## Expected Outcomes
- Links to secure: 8-12 high-quality links
- Average prospect DA: 45+
- Estimated domain authority lift: 3-5 points over 2 months
- Traffic increase: 15-25% from referral traffic

## Next Steps
1. Approve prospect list
2. Customize outreach emails by prospect
3. Begin Priority A outreach
4. Schedule follow-ups (7 days later)
5. Track results and update status
```

## Quality Standards

- All prospects verified to have authority metrics (DA 30+)
- Topical relevance confirmed (same industry/niche)
- Specific linking opportunities documented (not generic)
- No spam sites, low-quality directories, or manually penalized domains
- Malaysia-focused prospects prioritized
- Contact information attempted to be found (email/form)
- Outreach strategy customized per prospect (not template)
- Priority scoring transparent and repeatable

## Execution Timing

- Source identification: 20 minutes
- Prospect research per prospect (basic): 5 minutes
- Prospect research per prospect (detailed): 10 minutes
- Qualification scoring: 3 minutes per prospect
- For 50 prospects (basic sourcing): ~5 hours
- For 50 prospects (detailed research): ~10 hours
- Create outreach angles: ~1 minute per prospect (50 minutes total)

## Agent Usage

This skill is used by: **Link Building Agent**
Triggered by command: `/research-link-prospects [topic]`
Input required: Target topic/keyword cluster, client name
Related skills: `outreach-email-generation.md`, `backlink-tracking.md`

## Success Criteria

✅ 40-50+ qualified link prospects identified
✅ Each prospect has DA 30+ with relevance verification
✅ Specific linking opportunities documented (not generic)
✅ Priority scoring completed for all prospects
✅ Contact information researched
✅ Outreach angles customized per prospect
✅ Exported in structured format ready for outreach team
✅ Documented findings for team review
✅ Estimated outcomes realistic and tracked

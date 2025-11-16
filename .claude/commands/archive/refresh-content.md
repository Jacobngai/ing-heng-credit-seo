# /refresh-content

Launch the Content Maintenance Agent to refresh and optimize a specific piece of content using skyscraper methodology with updated data, new examples, and improved structure.

**What this command does:**
1. Loads Content Maintenance Agent from `.claude/agents/content-maintenance.md`
2. Agent executes `content-refresh-skyscraper.md` skill
3. Analyzes target content and current ranking position
4. Uses DataForSEO MCP to research competitor content in top 10
5. Identifies gaps and opportunities (more data, recent examples, better structure)
6. Rewrites content with skyscraper methodology:
   - Makes it 20-30% longer and more comprehensive
   - Adds recent case studies and statistics
   - Improves visual structure and readability
   - Updates all outdated information
   - Adds new internal links to newer content
7. Generates refreshed version as D/ draft
8. Tracks version history

**Expected output:**
- Refreshed content (D/ draft for review)
- Competitor gap analysis
- Improvement summary (what changed and why)
- Estimated ranking lift projections
- Execution time: ~8-10 minutes per piece

**Usage:**
```bash
/refresh-content [url]
```

**Example:**
```bash
/refresh-content clients/apex-machinery/content/en/blogs/excavator-financing-guide.md
```

**Prerequisites:**
- Content URL or file path
- Content currently ranks position 11+ (needs boost)
- OR content is 12+ months old (needs update)
- OR content has >30% traffic decline (decaying)

**Refresh methodology:**

1. **Analysis Phase:**
   - Current content length and structure
   - Current ranking position and CTR
   - Top 5 competitor content (from DataForSEO)
   - Gaps in coverage vs competitors

2. **Data Enrichment:**
   - Add current year statistics (2024 data)
   - Include recent case studies
   - Update regulatory/industry changes
   - Add new examples from last 6-12 months

3. **Structure Improvement:**
   - Better heading hierarchy
   - Shorter paragraphs (scannability)
   - Add visual breaks (lists, callouts, tables)
   - More comprehensive table of contents
   - Better intro hook

4. **Authority Enhancement:**
   - Add quotes from industry experts
   - Link to primary research/studies
   - Include client success stories
   - Add E-E-A-T signals

5. **SEO Optimization:**
   - Better keyword density (natural)
   - Improved meta description (if ranking CTR is low)
   - New internal links (link to 3-5 newer pieces)
   - Better structured data (FAQ schema, etc.)

**Generated files:**

```
/clients/[client-name]/content-maintenance/
├── refresh-queue/
│   ├── [content-title]-refresh-analysis.md (gap analysis)
│   └── [content-title]-before-after.md (comparison)
│
/clients/[client-name]/content/
├── [language]/blogs/
│   ├── D/[content-title]-REFRESHED.md (new version for review)
│   └── A/[content-title].md (original - replace after approval)
```

**Example refresh output:**
```markdown
# Content Refresh: "Equipment Financing Guide"

## Refresh Summary
- Original length: 1,200 words
- Refreshed length: 1,600 words
- New sections added: 3 (2024 trends, new case study, FAQ)
- Updated data points: 12
- New internal links: 5
- Estimated ranking improvement: +2-3 positions

## Gaps Filled
1. Added 2024 equipment financing trends (original was 2022 data)
2. Added case study: "How ABC Company Financed 5 Excavators" (new)
3. Added FAQ section (competitor had this, original didn't)
4. Updated equipment price ranges (2024 current)
5. Added "Financing vs Leasing" comparison table (data-driven)
6. Improved internal linking to newer content

## What Changed
- **Before:** 4 main sections, minimal examples
- **After:** 7 main sections, 5+ detailed examples + case study
- Added: Current financing rates, 2024 tax incentives, recent case study
- Improved: Headings, readability, visual structure
- Enhanced: Authority signals, internal links, schema markup

## Estimated Impact
- Current rank: #34
- Projected rank: #31-32 (2-3 position lift)
- Current traffic: 156 vis/mo
- Projected traffic: +15-25% = 180-195 vis/mo
```

**After execution:**

1. **Review refreshed content** (~15 minutes)
   - Check new sections make sense
   - Verify data accuracy
   - Ensure flow and readability

2. **Approve or edit**
   - Good content: Rename D/ → A/
   - Needs edits: Edit first, then rename to A/
   - Major issues: Rename D/ → F/ and try again

3. **Publish with `/publish-approved`**
   - Refreshed content replaces original
   - Version history preserved in git
   - Metadata updated (publication date, etc.)

4. **Monitor results** (30 days)
   - Track ranking changes
   - Monitor traffic impact
   - Compare against pre-refresh metrics

**Key metrics to track after refresh:**
- Ranking position change
- Traffic change (impressions, clicks, CTR)
- Bounce rate impact
- Time on page improvement
- Internal link clicks (new links)
- Conversion impact (if applicable)

**When to use this command:**

- **Content is ranked 11-20:** Refresh to push into top 10
- **Content is 12+ months old:** Refresh with current data
- **Traffic declined >20%:** Refresh to recover traffic
- **Competitor content outranks:** Refresh to compete
- **Industry trends changed:** Refresh to stay current

**Skyscraper methodology notes:**
- This is NOT a full rewrite - original good content kept
- Adding 20-30% length through comprehensive gaps
- Beating competitors on depth, recency, and authority
- Maintaining original keywords and structure
- Better positioning for featured snippets

**Employee next steps:**
1. Review refreshed draft (10-15 min)
2. Approve (A/) or edit and approve
3. Publish via `/publish-approved`
4. Set reminder to check ranking/traffic in 30 days
5. Document results for case study

**Execution time:**
- Per piece: ~8-10 minutes (AI analysis + rewrite)
- Review time: ~15 minutes
- Total: ~25 minutes per piece

**Best practice workflow:**
```
1. Run /audit-content-performance (monthly)
2. Identify top 5 red-flag pieces
3. Run /refresh-content for each (5 refreshes = 2-3 hours)
4. Review and approve all (1-1.5 hours)
5. Publish all at once (10 minutes)
6. Track results (30 days)
7. Report on improvements
```

**This is PHASE 2** - Content lifecycle management through systematic refreshing and optimization.

# Command ⑥ /6-build-hub-page

**Phase:** BUILD
**Primary Agent:** content-generation
**Helper Agent:** hub-and-spoke-architect (for structure)
**Time:** 4-8 hours (AI working)

## Purpose
Create comprehensive pillar content (3,000-5,000 words) that serves as authoritative hub page linking to 8-12 spoke articles.

## How to Choose Hub Topic

Open `clients/[client-name]/content-strategy/topic-clusters.json`

**22 clusters available:**
1. Equipment Financing General (52 keywords, HIGH priority)
2. Financing Alternatives (32 keywords, HIGH priority)
3. Excavator Financing (28 keywords, HIGH priority)
4. Lorry Financing (30 keywords, HIGH priority)
5. Forklift Financing (22 keywords, HIGH priority)
... (see topic-clusters.json for all 22)

**Recommended order:**
- Start with cluster_id: 1 (Equipment Financing General) - broadest appeal
- Then cluster_id: 3, 4, 5 (specific equipment types)
- Then niche clusters (19-22) later

**Each cluster has:**
- `recommended_hub_page`: URL where hub should be created
- `keywords`: Array of all keywords to cover in hub
- `content_opportunities`: Number of spoke articles needed

## Prerequisites

✅ **Required files from ONBOARD phase:**
- `topic-clusters.json` (from ①b) - 22 topic clusters with hub page recommendations
- `long-tail-keywords.csv` (from ①b) - 358 keywords organized by cluster
- `personas.md` (from ①) - Target audience (9 personas)
- `author-profiles.md` (from ③) - Author attribution (OPTIONAL)
- `Selected brand design` (from ④) - Visual styling

### Validation Check
```
❌ If ANY file missing:
→ Go back: Complete ONBOARD phase ① and ①b first

Check specifically:
✅ clients/[client-name]/content-strategy/topic-clusters.json exists
✅ clients/[client-name]/onboarding/long-tail-keywords.csv exists
✅ clients/[client-name]/onboarding/personas.md exists

NOTE: hub-spoke-plan.md is OPTIONAL - we use topic-clusters.json instead
```

## What This Command Does

The **content-generation** agent will:

1. **Load Hub Topic from Clusters**
   - Read topic-clusters.json (22 clusters)
   - Identify which cluster to build hub page for (user specifies or takes highest priority)
   - Load all keywords in that cluster from long-tail-keywords.csv
   - Load recommended hub page URL from cluster metadata
   - Identify target persona(s) for this cluster

2. **Research Competitors** (Content Analysis Only - NO Keyword Research)
   - Google the primary cluster keyword
   - Analyze top 3 ranking pages for CONTENT approach only
   - Identify content gaps (what they miss)
   - Apply Skyscraper Technique (make it 10x better)

3. **Generate Comprehensive Content** (SEO-pro.md Chapter 4)
   - **Length:** 3,000-5,000 words
   - **Structure:**
     - Introduction (150 words) - What, who, why
     - 8-12 major sections (H2s) covering all subtopics
     - H3 subsections with question-based formatting
     - FAQ section (8-10 questions)
     - Conclusion with CTA
   - **Optimization:**
     - Target keyword in title, H1, first 100 words
     - Semantic keywords throughout
     - Internal links to 8-12 spoke pages (even if not created yet)
     - Featured snippet optimization
     - Table of contents

4. **Add E-E-A-T Elements**
   - Author byline with credentials
   - First-person experience language
   - Cited authoritative sources (5-10 citations)
   - Original insights/research
   - Last updated date

5. **Implement Technical SEO**
   - Meta title (50-60 chars)
   - Meta description (150-160 chars)
   - Article schema markup
   - Breadcrumb schema
   - FAQ schema
   - Image optimization

6. **Apply Brand Design**
   - Use selected color palette
   - Typography system
   - Component styling

## Output File Created

```
clients/[client-name]/website/src/pages/en/guides/[hub-topic-slug].astro
```

**Example:** `src/pages/en/guides/complete-equipment-financing-guide.astro`

## Skills Used
- `hub-page-generation` - Create comprehensive pillar content
- `internal-linking` - Strategic link placement to spokes
- `semantic-optimization` - Add LSI keywords
- `comprehensive-research` - Deep topic coverage
- `table-of-contents-generation` - Create navigable TOC
- `seo-optimization` - On-page SEO elements
- `schema-markup` - Structured data

## Agent Instructions

```
You are the content-generation agent. Build comprehensive hub page.

CLIENT: [client-name]
HUB TOPIC: [cluster name] (from topic-clusters.json)

STEP 1: LOAD CLUSTER DATA
Read:
- clients/[client-name]/content-strategy/topic-clusters.json (find target cluster)
- clients/[client-name]/onboarding/long-tail-keywords.csv (load all keywords in cluster)
- clients/[client-name]/onboarding/personas.md (identify target persona)
- clients/[client-name]/eeat-strategy/author-profiles.md (if exists)

Extract from cluster:
- Cluster name and ID
- All keywords in cluster (to cover comprehensively)
- Recommended hub page URL
- Target persona(s)
- Content opportunities count

STEP 2: RESEARCH COMPETITORS ONLY (NO KEYWORD RESEARCH)
- Google the primary cluster keyword
- Analyze top 3 results for CONTENT approach only
- Identify: What they cover, what they miss
- Plan: How to make yours 10x better

NOTE: DO NOT use DataForSEO - keyword data already in CSV files!

STEP 3: CREATE OUTLINE
Generate structure:
- Introduction
- 8-12 H2 sections (cover all aspects of topic)
- H3 subsections (question-based for featured snippets)
- FAQ section
- Conclusion

STEP 4: WRITE CONTENT (3,000-5,000 words)
Apply SEO-pro.md Chapter 4 principles:
- Comprehensive coverage
- Clear, scannable formatting
- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Internal links to spoke pages
- Author voice (first-person where appropriate)
- Cited sources

STEP 5: OPTIMIZE FOR SEO
- Title tag with target keyword (front-loaded)
- Meta description (compelling, includes keyword)
- H1 matches title intent
- Keyword in first 100 words
- Semantic keywords throughout
- Alt text for all images
- Schema markup (Article, Breadcrumb, FAQ)

STEP 6: ADD E-E-A-T
- Author byline with link to author page
- First-person experience examples
- Cited authoritative sources
- Original insights
- Last updated date

STEP 7: SAVE FILE
Output to: clients/[client-name]/website/src/pages/en/guides/[slug].astro

Ready for ⑨⑩⑪ REVIEW phase.
```

## Success Criteria
- [ ] Hub page is 3,000-5,000 words
- [ ] Contains 8-12 H2 sections
- [ ] Links to 8-12 spoke topics
- [ ] Has table of contents
- [ ] Has FAQ section with schema
- [ ] Author attribution present
- [ ] Schema markup implemented
- [ ] Brand design applied
- [ ] File saved at correct path

## Next Step
After this completes:
→ Run **⑨ /9-review-seo** to check quality
→ Run **⑩ /10-review-eeat** to verify authority
→ Run **⑪ /11-review-readability** to ensure user-friendly

## Common Errors

**Error:** `topic-clusters.json not found`
**Solution:** Run **①b /1b-research-long-tail-keywords** first (creates topic-clusters.json)

**Error:** `long-tail-keywords.csv not found`
**Solution:** Run **①b /1b-research-long-tail-keywords** first

**Error:** `personas.md not found`
**Solution:** Run **① /1-research-business** first

**Error:** `Cluster not found in topic-clusters.json`
**Solution:** Check cluster name spelling, or choose from available clusters (1-22)

**Error:** `No brand design selected`
**Solution:** Run **④ /4-design-brand-options**, have client choose

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10

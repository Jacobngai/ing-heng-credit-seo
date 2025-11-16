# Hub Page Generation Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Create comprehensive hub pages that establish topical authority through hub-and-spoke structure with internal linking strategy.

## Prerequisites
- Client has 5+ published blog posts on related subtopic
- Keyword cluster identified and grouped
- Cluster contains primary keyword (hub) and supporting keywords (spokes)
- Related content inventory available

## Methodology

### Step 1: Define Hub Topic and Cluster

1. **Identify Hub Topic**
   - Primary keyword with commercial/informational intent
   - Broad enough to cover multiple subtopics
   - High search volume (1000+ monthly searches)
   - Strategic importance to client business

   Examples:
   - "Equipment Financing" (hub) for equipment financing clients
   - "Forklift Rental" (hub) for logistics company
   - "Construction Financing" (hub) for equipment company

2. **Map Keyword Cluster**
   ```
   Hub (Primary): "Equipment Financing Malaysia"
   │
   ├─ Spoke 1: "Excavator Financing"
   ├─ Spoke 2: "Forklift Financing"
   ├─ Spoke 3: "Truck Financing"
   ├─ Spoke 4: "Construction Equipment Lease"
   ├─ Spoke 5: "Equipment Financing for Small Business"
   └─ Spoke 6: "Bad Credit Equipment Financing"
   ```

3. **Conduct Cluster Research**
   - Map which content pieces address which keywords
   - Identify content gaps in the cluster
   - Analyze SERP for hub keyword (top 10 results)
   - Check competitor hub page structures (if they have them)
   - Identify questions in People Also Ask section

### Step 2: Analyze Hub SERP

Research what's currently ranking for hub keyword:

1. **SERP Composition**
   - How many results are hub-style pages vs. standalone?
   - Are there category pages or guide pages ranking?
   - What content type dominates (blog posts, guides, product pages)?

2. **Top Hub Competitor Analysis**
   - If hub page exists in top 10, analyze it
   - Structure (how many subtopics covered?)
   - Depth (word count, number of sections)
   - Internal link strategy
   - Sections and H2 organization

3. **Content Gaps in Current Results**
   - What subtopics aren't covered by top 10?
   - What comparison angles are missing?
   - What regulatory/safety info is absent?

### Step 3: Organize Content Architecture

Create logical grouping of spokes:

1. **Categorical Organization**
   ```
   Hub Page: Equipment Financing Guide

   Category 1: By Equipment Type
   - Excavator Financing
   - Forklift Financing
   - Truck Financing
   - Heavy Machinery Financing

   Category 2: By Business Size
   - Small Business Equipment Financing
   - Mid-size Business Equipment Financing
   - Enterprise Equipment Financing

   Category 3: By Scenario
   - Bad Credit Equipment Financing
   - New Business Equipment Financing
   - Lease vs. Buy Comparison

   Category 4: Educational
   - Equipment Financing 101
   - How to Apply
   - Approval Requirements
   ```

2. **Create Navigation Structure**
   - Hub page links to all spoke content
   - Each spoke links back to hub
   - Cross-linking between related spokes
   - Clear categorization hierarchy

### Step 4: Build Hub Page Structure

Comprehensive hub page architecture:

```
## Hub Page Outline Structure

H1: [Hub Topic Title] - Ultimate Guide

### Introduction Section
- Problem statement
- What reader will learn
- Quick reference (table of contents)
- Authority statement

### Section 1: [Category 1 Name]
Overview + links to 3-4 related spokes

### Section 2: [Category 2 Name]
Overview + links to 3-4 related spokes

### Section 3: [Category 3 Name]
Overview + links to 3-4 related spokes

### Section 4: Comparison Table
- Side-by-side of major options
- Pros/cons summary
- Links to detailed posts

### Section 5: Buyer Journey Section
- Awareness stage resources
- Consideration stage resources
- Decision stage resources
- Each with internal links

### Section 6: Frequently Asked Questions
- 10-15 comprehensive questions
- References to detailed posts where applicable

### Section 7: Resources & Tools
- Calculators
- Comparison matrices
- Templates
- Links to detailed guides

### Conclusion
- Summary of key points
- Call to action
```

### Step 5: Research Hub Content

Develop unique, authoritative content for hub page itself:

1. **Primary Research**
   - Compile statistics from spokes + new data
   - Create original comparison tables
   - Industry expert insights specific to hub topic
   - Market trends and opportunities

2. **Content Synthesis**
   - Combine key insights from spoke articles
   - Create overview/summary of each subtopic
   - Identify common questions across subtopics
   - Develop comparative frameworks

3. **Original Elements**
   - Interactive comparison tool (if relevant)
   - Decision matrix or flowchart
   - Checklist for major decision points
   - Timeline or roadmap

### Step 6: Write Hub Page

Create comprehensive hub content:

1. **Title & Description**
   - Include primary keyword
   - Use power word (Complete, Ultimate, Definitive, etc.)
   - Make compelling for SERP (50-60 chars)
   - Meta description: 150-160 chars, keywords naturally included

2. **Content Requirements**
   - Word count: 3500-5000 words (longer than spokes)
   - Comprehensive coverage of all subtopics
   - Original synthesis and analysis
   - Clear internal linking opportunities
   - Multiple call-to-action points

3. **Structure Best Practices**
   - Clear H1 title
   - 6-8 H2 sections (main categories)
   - H3 subsections within each H2
   - Bulleted lists for scanability
   - Pull quotes for key statistics
   - Bold key terms

4. **Internal Linking Strategy**
   ```
   Hub Linking Rules:
   - Intro paragraph: Link to 2-3 main spokes with variation anchor text
   - Each H2 section: 2-3 links to related spoke articles
   - Comparison table: Link specific rows to detailed articles
   - FAQ: 5-7 answers include contextual links
   - Related resources: 3-5 additional spoke links

   Total internal links in hub: 15-25 links to spoke content

   Spoke Linking Rules:
   - Intro: Link back to hub with "Learn more about [hub topic]"
   - Each spoke: 1 link to hub (preferably in intro or conclusion)
   - If applicable: Cross-link to 1-2 related spokes
   ```

### Step 7: Create Linking Strategy Document

```markdown
## Internal Linking Strategy for Hub

### Hub Page Structure
- URL: /en/guides/equipment-financing-complete-guide/
- Focus Keyword: "Equipment Financing Guide"
- Target: Top 3 for primary keyword

### Links FROM Hub TO Spokes: 18 total

#### Category 1: Equipment Type (8 links)
1. "Excavator Financing" → /blogs/excavator-financing/
2. "Forklift Financing" → /blogs/forklift-financing/
3. "Truck Financing" → /blogs/truck-financing/
4. "Heavy Machinery" → /blogs/machinery-financing/
+ 4 more with varied anchor text

#### Category 2: Scenarios (5 links)
1. "Bad Credit Options" → /blogs/bad-credit-financing/
2. "New Business Financing" → /blogs/new-business-financing/
3. "Lease vs Buy" → /blogs/lease-vs-buy-comparison/
+ 2 more

#### Category 3: Resources (5 links)
1. "How to Apply" → /blogs/equipment-financing-application/
2. "Approval Requirements" → /blogs/financing-requirements/
3. "Interest Rates Guide" → /blogs/equipment-financing-rates/
...

### Links FROM Spokes TO Hub: 1 per spoke

Each spoke article should include 1 contextual link back to hub:

Example (in spoke intro):
"For a comprehensive overview of equipment financing options, see our [complete equipment financing guide]."
```

### Step 8: Implement Hub & Spoke System

1. **Create Hub Page**
   - Generate content according to structure
   - Implement all internal links with proper anchor text variation
   - Add schema markup (FAQ schema, Article schema)
   - Format with proper heading hierarchy

2. **Update Existing Spoke Content**
   - Add linking back to hub (if not already present)
   - Add contextual cross-links to related spokes
   - Update metadata to reinforce hub-and-spoke relationship
   - Note internal links in SEO metadata

3. **Document Hub Architecture**
   - Create visual map of hub-spoke structure
   - Document all internal links
   - Note keyword targeting for hub and each spoke
   - Create maintenance guide

## Output Format

### Hub Page Content Structure
```markdown
---
title: "[Hub Topic] - Complete Guide [Language]"
description: "Comprehensive guide to [hub topic] covering [spoke1], [spoke2], [spoke3]..."
pubDate: 2025-11-04
author: "[Client Author]"
language: "en"
persona: "all"
keywords:
  - hub-primary-keyword
  - hub-secondary-keyword
  - topical-authority-keyword
status: "draft"
type: "hub-page"
spokes:
  - excavator-financing
  - forklift-financing
  - truck-financing
---

# [Hub Topic Title]: The Complete [YYYY] Guide

## Table of Contents
[Auto-generated from H2s]

## Introduction

[Compelling introduction explaining what reader will learn]

Need to compare specific financing options? Jump to [comparison table](#comparison).

### Quick Reference: [Hub Topic] Overview

| Aspect | Details |
|--------|---------|
| Definition | ... |
| Average Cost | ... |
| Processing Time | ... |

---

## Section 1: Equipment Financing by Type

Overview text explaining how equipment type affects financing...

### Excavator Financing
[Overview] Learn more in our [complete excavator financing guide](/en/blogs/excavator-financing/).

### Forklift Financing
[Overview] For detailed information, see [forklift financing options](/en/blogs/forklift-financing/).

### Truck Financing
[Overview] [Learn about truck financing specifics](/en/blogs/truck-financing/).

---

## Section 2: Financing by Scenario

### Bad Credit? No Problem.
[Overview] If you have less-than-perfect credit, our [bad credit equipment financing guide](/en/blogs/bad-credit-financing/) covers your options.

### New Business Considerations
[Overview] [Equipment financing for new businesses](/en/blogs/new-business-financing/) requires different approach.

---

## Comparison Table: Quick Comparison

| Financing Type | Best For | Interest Rate | Term Length | Link |
|---|---|---|---|---|
| Standard Financing | Established businesses | 6-12% | 3-7 years | [Learn more](/blogs/standard-financing/) |
| Lease | Frequent upgrades | Lower cost/month | 2-4 years | [Learn more](/blogs/equipment-leasing/) |
| Bad Credit | Lower credit score | 12-18% | 2-5 years | [Learn more](/blogs/bad-credit-financing/) |

---

## Frequently Asked Questions

### Q1: What's the difference between equipment financing and leasing?
A: Equipment financing is [definition] while leasing means [definition]. For detailed comparison, see our [lease vs. buy guide](/blogs/lease-vs-buy-comparison/).

### Q2: How long does approval take?
A: Typical timeline is... [For step-by-step process, see our application guide.](/blogs/application-process/)

...9-13 more questions...

---

## Next Steps

Start with determining your equipment type, then explore specific guides:
- [Excavator Financing](/blogs/excavator-financing/)
- [Forklift Financing](/blogs/forklift-financing/)
- [Truck Financing](/blogs/truck-financing/)

Or [contact our team](/contact/) for personalized solution.

---

## Hub Metadata

**Hub Article Type:** Topical Authority Hub
**Related Spokes:** 7 articles
**Internal Links:** 18 to spoke content
**Last Updated:** 2025-11-04
```

### Hub Architecture Document
```json
{
  "hub_page": {
    "client": "[client-name]",
    "language": "en",
    "hub_title": "Equipment Financing Guide",
    "hub_slug": "equipment-financing-guide",
    "hub_keyword": "equipment financing",
    "target_position": 3,
    "content_stats": {
      "word_count": 4200,
      "sections": 8,
      "internal_links": 18,
      "faq_count": 12
    },
    "spoke_structure": {
      "category_1": {
        "name": "By Equipment Type",
        "spokes": [
          {
            "title": "Excavator Financing",
            "slug": "excavator-financing",
            "keyword": "excavator financing",
            "status": "published",
            "hub_link_text": "Complete excavator financing guide"
          },
          {
            "title": "Forklift Financing",
            "slug": "forklift-financing",
            "keyword": "forklift financing",
            "status": "published"
          }
        ]
      }
    },
    "cross_links": {
      "hub_to_spokes": 18,
      "spokes_to_hub": 7,
      "spoke_to_spoke": 5
    },
    "content_gaps": [
      "None identified - all major equipment types covered"
    ],
    "expected_impact": {
      "hub_position_target": 3,
      "timeline_weeks": 6,
      "spoke_position_improvement": "average 2-4 spots higher due to hub authority"
    }
  }
}
```

## Quality Standards

- Hub page is 3500-5000 words (minimum 2x spoke length)
- Every spoke article linked from hub (minimum 1 link per spoke)
- Every spoke links back to hub (1 contextual link)
- Hub covers all subtopic categories comprehensively
- Comparison elements included (table, matrix, or framework)
- Original synthesis not just spoke summaries
- FAQ includes 10-15 questions
- Internal anchor text varied (not "click here")
- Schema markup implemented for hub structure

## Execution Timing

- Research hub SERP and competitor analysis: 20 minutes
- Plan hub-spoke architecture: 15 minutes
- Write hub page content: 2-3 hours
- Implement internal links: 30 minutes
- Update spoke pages: 30 minutes
- QA and finalization: 15 minutes
- Total: 4.5-5.5 hours per hub page

## Agent Usage

This skill is used by: **Hub-and-Spoke Architect Agent**
Triggered by command: `/build-hub-page [topic]`
Related skills: Uses content already generated by content generation agent

## Success Criteria

✅ Hub page created as comprehensive topical authority resource
✅ All spoke articles identified and linked from hub
✅ Hub links back to all spokes (minimum 1 each)
✅ Cross-linking strategy documented
✅ Original hub content (not just spoke summaries)
✅ Passes content quality checks
✅ Schema markup for hub structure implemented
✅ Ready for D/ approval workflow
✅ Architecture documented for maintenance

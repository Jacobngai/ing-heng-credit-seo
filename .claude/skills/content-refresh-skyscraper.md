# Content Refresh & Skyscraper Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Refresh underperforming content and improve it beyond competitor content (Skyscraper technique).

## Prerequisites
- Content has been flagged by `performance-tracking.md` skill
- Original content exists in `/3-WEBSITE/[client-name]/content/[lang]/`
- Refresh brief with scope and objectives prepared
- Competitor analysis available

## Methodology

### Step 1: Analyze Competitor Content (Skyscraper Research)
Before refreshing, research what's outranking your content:

1. **SERP Analysis**
   - Identify top 5 ranking pieces for target keyword
   - Check publication/update dates
   - Analyze length, structure, depth
   - Document unique sections in top results

2. **Content Mapping**
   ```
   For each top 5 competitor piece:
   - Title and URL
   - Word count
   - Main sections (H2s)
   - Unique angles/data/tools
   - Media (images, videos, calculators)
   - Author credentials
   - Publish + update dates
   ```

3. **Identify Content Gaps**
   - What's covered in all top 5? (must include)
   - What's covered by 3-4? (should include)
   - What's missing from all? (your differentiator)
   - What's outdated in competitors?

### Step 2: Define Refresh Scope
Determine depth of refresh needed:

1. **Light Refresh (5-10% new content)**
   - Situation: Minor ranking decay, still top 10
   - Actions:
     - Update stats and examples
     - Add 1-2 new FAQ questions
     - Refresh hero image/data
     - Fix broken links
   - Estimated time: 0.5-1 hour
   - Expected position improvement: 1-3 spots

2. **Medium Refresh (25-40% new content)**
   - Situation: Moderate decay, outside top 10, competitor advantage
   - Actions:
     - Add 1-2 new H2 sections
     - Expand most important section
     - Add new data/statistics
     - Include missing angle from competitors
     - Improve formatting/readability
   - Estimated time: 2-3 hours
   - Expected position improvement: 5-8 spots

3. **Complete Refresh (50-70% new content)**
   - Situation: Major decay, competitors significantly better, needs repositioning
   - Actions:
     - Rewrite entire intro/conclusion
     - Reorganize section structure
     - Change angle/perspective
     - Add new content type (calculator, comparison table, video summary)
     - Completely new research/data
     - Double content depth
   - Estimated time: 4-6 hours
   - Expected position improvement: 10+ spots

### Step 3: Conduct Deeper Research
Build superior content through better research:

1. **Primary Research**
   - Interview industry expert (if time permits)
   - Collect recent statistics (< 6 months old)
   - Real case studies from own experience
   - Regional data (Malaysia-specific insights)
   - Regulatory/compliance updates

2. **Secondary Research**
   - Government sources (.gov, .edu websites)
   - Industry publications
   - Academic research (but make accessible)
   - Competitor blogs (for gaps, not copying)
   - Trend reports and market research

3. **Tools & Data**
   - Industry-specific statistics
   - Calculators or interactive tools
   - Comparison matrices
   - Checklists
   - Templates

### Step 4: Create Content Brief
Structure the refresh with specific requirements:

```markdown
## Content Refresh Brief

**Original Content:** [Title] | [URL]
**Published Date:** YYYY-MM-DD
**Current Position:** [X]
**Target Position:** [Y]

### Refresh Scope
**Type:** [Light/Medium/Complete]
**Target Word Count:** [X words] (current: Y)
**Estimated Hours:** [X]

### Must Include Sections
- [From competitor analysis]
- [Your unique angle]
- [New research/data]

### Competitive Advantage (Skyscraper Elements)
1. [Section/data that competitors lack]
2. [Better explanation/examples]
3. [Updated statistics]
4. [Original research/perspective]

### Content Structure
```
H1: [Improved title]
  H2: [Section 1]
    H3: [Subsection]
  H2: [Section 2 - NEW]
    H3: [Subsection]
  ...
  H2: FAQ (expanded)
```

### SEO Targets
- Primary keyword: [keyword]
- Target density: 1-2%
- LSI keywords to include: [list]
- Internal links to add: [list]
- External links to update: [list]
```

### Step 5: Execute Content Refresh

#### For Light Refresh:
1. Open original file
2. Update intro with fresh angle/stat
3. Add 2-3 new FAQ questions
4. Update any outdated stats
5. Replace old image
6. Check and fix internal links
7. Update metadata (description, keywords)

#### For Medium Refresh:
1. Keep core structure
2. Expand weakest 2-3 sections (add examples, details)
3. Add 1 new H2 section for missing angle
4. Upgrade FAQ to 7-8 questions
5. Add comparison table if missing
6. Insert 2-3 new statistics
7. Update all external links
8. Improve internal link strategy

#### For Complete Refresh:
1. Create new document with same slug
2. Rewrite from competitive advantage perspective
3. Reorganize sections for better flow
4. Double length (if currently 2000 words, target 4000)
5. Add unique element (calculator, comparison, case study)
6. Completely new examples/stories
7. Expert quotes/research
8. Enhanced FAQ (8-10 questions)
9. New H1 title (if needed for better keyword match)
10. Update all metadata

### Step 6: Optimize for Skyscraper Success

1. **Title Optimization**
   - Include primary keyword
   - Add power word (Complete, Ultimate, Proven, etc.)
   - Consider keyword variant competitors use
   - Test: Should be click-worthy

2. **Intro Impact**
   - Answer question immediately
   - Show unique angle
   - Include statistic or hook
   - Make skimmable (bold, short paragraphs)

3. **Structure Excellence**
   - Logical flow from basic to advanced
   - Each H2 should answer specific question
   - No repetition between sections
   - Progressive depth

4. **Comparison Advantage**
   - Create table comparing your approach vs. competitors
   - Highlight what makes yours better
   - Include specific examples (Malaysia-focused if applicable)

5. **Interactive Elements**
   - Add calculator if relevant
   - Checklist for actionable content
   - Downloadable template
   - Comparison matrix

### Step 7: Quality Assurance

1. **Content Quality**
   - Run through content-quality-check.md skill
   - Verify meets all standards
   - Check readability (Flesch 60+)
   - Verify keyword density (1-2%)

2. **Formatting Check**
   - Proper heading hierarchy
   - Consistent spacing
   - Readable paragraph length (3-5 sentences)
   - Bold key terms

3. **Link Verification**
   - All internal links functional
   - External links to authority sources
   - Anchor text optimized
   - Links open in new tab where appropriate

4. **Metadata Check**
   - Title: 50-60 characters, keyword-optimized
   - Description: 150-160 characters, compelling, includes keyword
   - Keywords: 3-5 relevant keywords
   - Updated publication date or note refresh date

## Output Format

### Refreshed Content File
```markdown
---
title: "Improved Title with Better Keyword Match"
description: "Updated meta description that's more compelling and includes primary keyword"
pubDate: 2025-11-04
lastUpdated: 2025-11-04
author: "[Client Author]"
language: "en"
persona: "contractor-bob"
keywords:
  - primary-keyword
  - secondary-keyword
  - related-keyword
status: "draft"
---

# [H1 Title - Same as meta title or improved]

**Last Updated:** November 4, 2025

## Introduction

[Completely rewritten or significantly updated intro with fresh angle and current stat]

## Section 1: [Improved H2]

[Content with better examples, updated data, and skyscraper elements]

### Subsection 1.1
...

### Subsection 1.2
...

## Section 2: [NEW - Competitive Gap]

[Entirely new section addressing gap in competitor content]

...

## Frequently Asked Questions

### Q: [Question 1]
A: [Updated answer with current year data]

### Q: [Question 2 - NEW]
A: [New question addressing recent trend or common concern]

...

## Conclusion

[Refreshed conclusion with call-to-action]

---

## Refresh Summary

**Original Publication:** 2024-04-15
**Refresh Completed:** 2025-11-04
**Refresh Type:** [Light/Medium/Complete]
**Content Added:** [X words] (from Y to Z total)
**Key Updates:**
- Updated [statistic] to 2025 figures
- Added new section on [topic]
- Improved [original weakness]
- Enhanced with [competitive advantage element]
```

### Refresh Report
```json
{
  "refresh_data": {
    "client": "[client-name]",
    "content_slug": "excavator-financing-guide-en",
    "language": "en",
    "refresh_date": "2025-11-04",
    "refresh_type": "complete_refresh",
    "original_metrics": {
      "word_count": 1850,
      "position": 18,
      "monthly_views": 145,
      "published_date": "2024-04-15",
      "last_updated": "2024-08-20"
    },
    "refreshed_metrics": {
      "word_count": 3200,
      "sections_count": 7,
      "faq_count": 9,
      "new_sections": 2,
      "images_updated": 3,
      "external_links": 4,
      "internal_links": 5
    },
    "competitive_analysis": {
      "original_position_1": "competitor-a-url",
      "original_position_2": "competitor-b-url",
      "gaps_addressed": [
        "Malaysia-specific regulatory information",
        "Comparison table (buy vs. lease)",
        "Recent case studies from 2025",
        "Interactive calculator integration"
      ],
      "skyscraper_elements": [
        "Depth doubled from 1850 to 3200 words",
        "Added missing regulatory section",
        "Expert quotes from 2 local industry leaders",
        "New case study with real numbers"
      ]
    },
    "estimated_impact": {
      "target_position": 5,
      "expected_improvement_weeks": 4,
      "traffic_projection": 400,
      "confidence": "high"
    }
  }
}
```

## Quality Standards

- Content is 10-50% more comprehensive than top-ranking competitors
- Includes at least 2-3 unique skyscraper elements
- Refresh maintains original SEO equity (same URL)
- Updated metadata optimized for target keyword
- All quality checks pass (content-quality-check.md)
- Includes at least 1 new interactive element
- References are current (< 6 months old)

## Execution Timing

- Light Refresh: 0.5-1 hour
- Medium Refresh: 2-3 hours
- Complete Refresh: 4-6 hours
- QA and finalization: 0.5 hours

## Agent Usage

This skill is used by: **Content Maintenance Agent**
Triggered by command: `/refresh-content [url]`
Requires input from: `performance-tracking.md` (identifies content needing refresh)

## Success Criteria

✅ Refresh completed according to defined scope
✅ Competitive research thoroughly documented
✅ Skyscraper elements clearly identified and implemented
✅ Content passes all quality checks
✅ Metadata optimized for target keyword
✅ Historical information preserved (last updated date added)
✅ Ready for D/ approval workflow
✅ Estimated position improvement and timeline documented

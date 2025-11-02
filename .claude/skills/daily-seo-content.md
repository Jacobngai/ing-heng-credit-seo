# Daily SEO Content Generation Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Master workflow for generating daily blog posts for a specific client in multiple languages.

## Prerequisites
- Client has completed onboarding (`brief.json`, `personas/`, `keyword-strategy.json` exist)
- Client folder structure is set up at: `/example-clients/[client-name]/`

## Workflow Steps

### 1. Load Client Configuration
For the specified client in `/example-clients/[client-name]/`:
```
Read: brief.json
Read: personas/*.json
Read: keyword-strategy.json
```

### 2. Select Today's Topic
**Decision criteria:**
- Use content calendar from `keyword-strategy.json`
- Prioritize keywords by: search volume, difficulty, persona relevance
- Rotate personas to ensure balanced content
- Avoid duplicate topics from last 30 days

### 3. Invoke Keyword Research Skill
**For the selected topic:**
- Load `keyword-research.md` skill
- Research SERP for this specific keyword
- Extract LSI keywords and content gaps
- Do this INDEPENDENTLY for each language (EN, ZH, MS)

### 4. Invoke Multi-Language Content Skill
**For each language:**
- Load `multi-language-content.md` skill
- Generate native content (NOT translation)
- Use language-specific keywords from step 3
- Apply cultural adaptation per language
- Target the appropriate persona

### 5. Invoke Quality Check Skill
**For each generated post:**
- Load `content-quality-check.md` skill
- Validate against quality standards
- If passes: save to `/drafts/D/[slug].md`
- If fails: save to `/drafts/F/[slug].md` with failure reason

### 6. Save Drafts
**File naming convention:**
```
/example-clients/[client-name]/drafts/D/[YYYY-MM-DD]-[slug]-[lang].md

Examples:
/example-clients/acme-corp/drafts/D/2025-11-01-excavator-financing-guide-en.md
/example-clients/acme-corp/drafts/D/2025-11-01-excavator-financing-guide-zh.md
/example-clients/acme-corp/drafts/D/2025-11-01-excavator-financing-guide-ms.md
```

## Output Format
Each draft file must include:

```markdown
---
title: "SEO-Optimized Title"
description: "Meta description 150-160 chars"
pubDate: YYYY-MM-DD
author: "Ing Heng Credit"
language: "en" | "zh" | "ms"
persona: "contractor-bob" | "logistics-lee" | "warehouse-william"
keywords:
  - primary-keyword
  - secondary-keyword-1
  - secondary-keyword-2
status: "draft"
---

[CONTENT HERE]

1500-2500 words
H1 + 4-6 H2s + H3s as needed
FAQ section with schema markup
3-5 internal links
2-3 external authoritative links
```

## Quality Standards (Applied by content-quality-check.md)
- Word count: 1500-2500 words
- Readability: Flesch 60+ (Grade 8-9 reading level)
- Keyword density: 1-2% for primary keyword
- Structure: H1 + 4-6 H2s + H3s
- FAQ: 5-7 questions
- Grammar: 0 errors
- Links: 3-5 internal, 2-3 external

## Execution Timing
- Per client: ~2 minutes (including all 3 languages)
- 50 clients: ~15 minutes total
- Output: 150 draft posts (50 clients × 3 languages)

## Agent Usage
This skill is executed by: **Content Generation Agent**
Triggered by command: `/generate-daily-blogs`

## Related Skills
- `keyword-research.md` - Invoked for SERP analysis
- `multi-language-content.md` - Invoked for each language
- `content-quality-check.md` - Invoked for validation

## Success Criteria
✅ All active clients have 3 draft posts (EN/ZH/MS)
✅ All posts saved to D/ prefix (pending review)
✅ Failed posts saved to F/ with clear reason
✅ No duplicate topics from last 30 days
✅ Content calendar updated with published topics

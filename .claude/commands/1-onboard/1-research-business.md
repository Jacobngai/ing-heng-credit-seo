# Command ① /1-research-business

**Phase:** ONBOARD
**Primary Agent:** client-onboarding
**Helper Agent:** competitor-intelligence
**Time:** 2-4 hours (AI working)

## Purpose
Deep dive into client's business, competitors, market positioning, and create foundational assets for entire workflow.

## Prerequisites
❌ **None** - This is the START of every new client workflow

✅ **This is always the first command to run for a new client**

## What This Command Does

The **client-onboarding** agent will:

1. **Gather Business Information** (if not provided)
   - Interview questions about services/products
   - Target market and customer base
   - Unique selling propositions
   - Business goals and KPIs

2. **Analyze Competitors** (via competitor-intelligence agent)
   - Identify top 5 competitors
   - SERP analysis for target keywords
   - Competitor content strategies
   - Keyword gap analysis (what they rank for, you don't)
   - Backlink profile comparison

3. **Research Keywords**
   - Use DataForSEO MCP tools
   - Find high-opportunity keywords
   - Group by search volume and difficulty
   - Export to CSV

4. **Create Personas**
   - 3-5 detailed buyer personas
   - Demographics, pain points, search behavior
   - Journey mapping

## Output Files Created

```
clients/[client-name]/
├── CLAUDE.md ← NEW! Client-specific configuration
│   ├── Business context
│   ├── Contact information
│   ├── Team members
│   ├── Target languages
│   ├── Content guidelines
│   └── Prohibited claims list
│
└── onboarding/
    ├── business-brief.md
    │   ├── Company overview
    │   ├── Services/products offered
    │   ├── Target market
    │   ├── Unique selling propositions
    │   ├── Business goals
    │   └── Success metrics
    │
    ├── competitor-report.md
    │   ├── Top 5 competitors analyzed
    │   ├── Their keyword strategies
    │   ├── Their content strategies
    │   ├── Their backlink profiles
    │   └── Opportunities for differentiation
    │
    ├── personas.md
    │   ├── Persona 1: [Name & role]
    │   ├── Persona 2: [Name & role]
    │   └── Persona 3: [Name & role]
    │   (Demographics, goals, pain points, search behavior)
    │
    └── keyword-opportunities.csv
        └── 100-500 keywords with volume, difficulty, opportunity score
```

## Skills Used
- `competitive-analysis` - SERP and competitor research
- `market-research` - Industry trends and opportunities
- `persona-identification` - Buyer persona creation
- `keyword-gap-analysis` - Find competitor keyword gaps
- `serp-analysis` - Analyze search results for intent

## Agent Instructions

When this command is run, invoke the **client-onboarding** agent with this prompt:

```
You are the client-onboarding agent. Research this client's business and create foundational assets.

CLIENT: [client-name]
WEBSITE: [if exists]
INDUSTRY: [if known]

TASKS:
1. Create initial CLAUDE.md from template (.claude/templates/client-claude-md-template.md)
   - Fill in business context from research
   - Add contact information
   - Add team members (if known)
   - Add content guidelines
   - Mark status as "ONBOARDING"
   - Save to: clients/[client-name]/CLAUDE.md

2. Create comprehensive business-brief.md
3. Use competitor-intelligence agent to generate competitor-report.md
4. Create 3-5 detailed personas in personas.md
5. Use DataForSEO MCP to research keywords, export to keyword-opportunities.csv

VALIDATION:
Before finishing, verify these files exist:
✅ clients/[client-name]/CLAUDE.md (initial version)
✅ business-brief.md (min 500 words)
✅ competitor-report.md (5 competitors analyzed)
✅ personas.md (3-5 personas with complete details)
✅ keyword-opportunities.csv (100+ keywords)

These files are REQUIRED for commands ②③④⑤⑥⑦⑧ to work.
Do not skip any file.

OUTPUT LOCATIONS:
- clients/[client-name]/CLAUDE.md
- clients/[client-name]/onboarding/
```

## Success Criteria
- [ ] **CLAUDE.md created** in `clients/[client-name]/` (initial version)
- [ ] business-brief.md exists and is comprehensive
- [ ] competitor-report.md analyzes 5 competitors
- [ ] personas.md contains 3-5 detailed personas
- [ ] keyword-opportunities.csv has 100+ keywords
- [ ] All onboarding files saved in `clients/[client-name]/onboarding/`

## Next Step
After this completes successfully:
→ Run **② /2-organize-by-intent**

## Common Errors

**Error:** "Insufficient data about client"
**Solution:** Provide more information about the business, or agent will research from website

**Error:** "Cannot find competitors"
**Solution:** Manually specify 2-3 competitor URLs

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10

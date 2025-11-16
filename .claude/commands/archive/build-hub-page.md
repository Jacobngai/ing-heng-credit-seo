# /build-hub-page

Launch the Hub-and-Spoke Architect Agent to design and build a comprehensive hub page for a topic cluster, automatically linking to all related spoke content with strategic internal linking.

**What this command does:**
1. Loads Hub-and-Spoke Architect Agent from `.claude/agents/hub-spoke-architect.md`
2. Agent executes `hub-page-generation.md` skill
3. Analyzes all existing content for topic cluster
4. Uses DataForSEO MCP to research topic depth and competitors
5. Designs hub page structure with:
   - Master topic introduction
   - Subtopic sections with internal links
   - Visual hierarchy and navigation
   - Content roadmap showing all spokes
6. Generates comprehensive hub page (D/ draft)
7. Automatically creates 3-5 internal links from existing content to hub
8. Generates link update suggestions

**Expected output:**
- Hub page (D/ draft, 2,500-3,500 words)
- Hub navigation structure
- Internal link recommendations (5-8 links)
- Content roadmap visualization
- Execution time: ~10-12 minutes

**Usage:**
```bash
/build-hub-page [topic]
```

**Example:**
```bash
/build-hub-page "Equipment Financing"
```

**Topic examples:**
- "Equipment Financing" (main hub for excavator, forklift, lorry financing)
- "Logistics Management" (fleet management, route optimization, driver tools)
- "Construction Equipment" (excavators, loaders, graders by type)
- "Financial Services" (leasing, loans, guarantees)

**Hub page components:**

1. **Hero/Introduction Section:**
   - Clear topic definition
   - Why this topic matters
   - Quick navigation to subtopics

2. **Subtopic Sections (5-10 spokes):**
   - Each subtopic as a section
   - 100-200 words per section
   - Link to full spoke article
   - Preview of key information

3. **Content Roadmap:**
   - Visual structure showing all spokes
   - Link hierarchy (hub → spoke)
   - Content flow and relationships

4. **Supporting Elements:**
   - FAQ section (common questions)
   - Comparison tables (if applicable)
   - Resource lists
   - Related tools/calculators

5. **Internal Link Network:**
   - Hub ↔ All spokes (bidirectional)
   - Spoke ↔ Related spokes (contextual)
   - 3-5 updates to existing spokes to link up

**Generated files:**

```
/clients/[client-name]/content/[language]/
├── D/[topic]-hub-page.md (hub page draft)
├── [topic]-hub-links-update.md (guide for spoke updates)
└── [topic]-roadmap.md (visual structure)

/clients/[client-name]/content-production/
└── topic-clusters/
    └── [topic]/
        ├── hub-page/
        │   └── D/hub.md
        └── spokes/
            ├── spoke-1.md (references to hub)
            ├── spoke-2.md (references to hub)
            └── ...
```

**Example hub page structure:**
```markdown
# Complete Guide to Equipment Financing in Malaysia

## Introduction
- What is equipment financing
- Why it matters for businesses
- Types of equipment (overview)
- Benefits overview

## Types of Equipment Financing
### Excavator Financing
[Summary + link to "Complete Guide: Excavator Financing"]

### Forklift Financing
[Summary + link to "How to Finance a Forklift"]

### Lorry Financing
[Summary + link to "Lorry Financing Guide"]

### Boom Lift Financing
[Summary + link to "Boom Lift Equipment Leasing"]

## The Financing Process
[Step-by-step overview with links to detailed guides]

## Equipment Financing vs Leasing
[Comparison with links to both options]

## FAQ About Equipment Financing
[10-15 questions with answers and relevant links]

## Next Steps
[Call to action + contact forms]

---

## Content Roadmap
[Visual showing all spokes connected to hub]
```

**Internal linking strategy:**

1. **Hub → Spokes:** Each spoke mentioned in hub with link
2. **Spokes → Hub:** Each spoke opens with "Part of: [Hub] series" with link
3. **Spoke ↔ Spoke:** Related spokes link to each other
4. **Hub ↔ Authority:** Hub links to high-authority external sources

**After execution:**

1. **Review hub page** (~20 minutes)
   - Check structure and flow
   - Verify all spoke topics covered
   - Validate internal link recommendations

2. **Approve or edit**
   - Good hub: Rename D/ → A/
   - Needs edits: Edit structure/content first
   - Major redesign: Rename D/ → F/ and rebuild

3. **Implement link updates** (~15 minutes)
   - Update existing spokes to link to hub
   - Add reverse links (hub reference in each spoke)
   - Follow internal linking guide

4. **Publish together**
   - Deploy hub page first
   - Deploy spoke updates
   - Verify all internal links working

5. **Monitor cluster performance** (30-60 days)
   - Track hub page rankings
   - Monitor spoke traffic changes
   - Measure cluster topical authority

**Hub page benefits:**

- **Topical Authority:** Demonstrates expertise across topic
- **Internal linking:** Establishes semantic relationship between content
- **User experience:** Single navigation point for topic cluster
- **Ranking power:** Distributes authority across network
- **Featured snippets:** Better chance with comprehensive hub
- **Content organization:** Clear structure for future expansion

**When to build a hub page:**

- **After 5+ related spokes published:** Minimum cluster size
- **Topic has multiple subtopics:** Natural cluster structure
- **Service/product category:** Hub for all product types
- **Ranking opportunity:** Topic with moderate competition
- **User journey:** Where users want complete topic overview

**Hub page best practices:**

- One main hub per topic cluster
- Hub not replacement for spokes (spokes are more detailed)
- Hub acts as navigation and overview layer
- Hub content 2,500-3,500 words (comprehensive but scannable)
- Hub includes all subtopics (complete coverage)
- Hub updated when new spoke added
- Bidirectional linking (hub ↔ spokes)

**Employee next steps:**
1. Review hub page structure (15 min)
2. Verify all relevant spokes included
3. Approve hub page (rename D/ → A/)
4. Implement internal link updates to spokes
5. Publish hub and spoke updates together
6. Set reminder to monitor cluster performance in 30 days

**Execution timeline:**
- Hub generation: 10-12 minutes
- Review: 15-20 minutes
- Spoke link updates: 10-15 minutes
- Approval and publishing: 5-10 minutes
- **Total: ~45 minutes per hub**

**Typical hub cluster example:**
```
HUB: Equipment Financing
├── Spoke 1: Excavator Financing
├── Spoke 2: Forklift Financing
├── Spoke 3: Lorry Financing
├── Spoke 4: Boom Lift Financing
├── Spoke 5: Financing vs Leasing
├── Spoke 6: Equipment Financing Process
└── Spoke 7: Financing for SMEs
```

**This is PHASE 2-3** - Building topical authority and improving content organization through hub-and-spoke architecture.

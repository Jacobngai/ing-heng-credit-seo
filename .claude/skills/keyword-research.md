# Keyword Research Skill

## Purpose
Research keywords independently for each language with SERP analysis and competitor insights.

## Key Principle
**DO NOT TRANSLATE KEYWORDS** - Research natively for each language.

## Language-Specific Approach

### English (EN) - B2B Professional
**Search engine:** Google.com
**Keyword style:** Professional, ROI-focused
- "equipment financing for contractors"
- "forklift leasing benefits"
- "heavy machinery loan Malaysia"

### Mandarin Chinese Simplified (ZH) - Logistics Focus
**Search engine:** Google.com.my (Malaysia Chinese), Baidu (if targeting China)
**Keyword style:** Relationship-oriented, trust-building
- "货运卡车融资" (freight truck financing)
- "叉车租赁马来西亚" (forklift rental Malaysia)
- "物流设备贷款" (logistics equipment loan)

### Bahasa Malaysia (MS) - Construction Focus
**Search engine:** Google.com.my
**Keyword style:** Respectful, service-focused
- "pembiayaan jentera pembinaan"
- "sewa forklift Selangor"
- "pinjaman lori Malaysia"

## Research Process

### Step 1: Primary Keyword Analysis
For given topic, identify primary keyword:
1. Search Google for the topic
2. Analyze autocomplete suggestions
3. Check "People Also Ask" section
4. Review "Related Searches" at bottom
5. Verify search intent (informational, commercial, transactional)

### Step 2: SERP Analysis (Top 10 Results)
For each top 10 result:
```
Extract:
- Title patterns
- H2/H3 heading structures
- Content length (word count)
- Key topics covered
- LSI keywords used
- Content gaps (what they miss)
```

### Step 3: Competitor Keyword Mining
If client has competitor data:
- Analyze competitor's top-ranking pages
- Extract their target keywords
- Identify gaps in their content

### Step 4: Long-Tail Opportunities
Generate 10+ long-tail variations:
- Question-based: "how to finance excavator in Malaysia"
- Location-specific: "forklift rental Klang Valley"
- Problem-specific: "bad credit equipment financing"
- Comparison: "buy vs lease construction equipment"

### Step 5: Keyword Mapping
Map keywords to buyer journey:
```
AWARENESS:
- "what is equipment financing"
- "types of construction equipment"

CONSIDERATION:
- "equipment financing vs cash purchase"
- "best forklift brands Malaysia"

DECISION:
- "apply equipment loan online"
- "forklift rental rates Selangor"
```

### Step 6: Search Volume & Difficulty (Estimated)
Categorize keywords:
- **High volume, high competition:** Primary targets for awareness
- **Medium volume, medium competition:** Consideration content
- **Low volume, low competition:** Long-tail quick wins

## Output Format

Return keyword research as structured data:

```json
{
  "language": "en",
  "primary_keyword": "equipment financing Malaysia",
  "search_volume_estimate": "1000-2000/month",
  "difficulty": "medium",
  "search_intent": "commercial",
  "secondary_keywords": [
    "heavy equipment loan",
    "construction equipment financing",
    "machinery lease Malaysia"
  ],
  "lsi_keywords": [
    "flexible payment terms",
    "equipment ownership",
    "business cash flow"
  ],
  "long_tail_opportunities": [
    "how to apply for equipment financing Malaysia",
    "equipment financing for small business",
    "bad credit equipment loan options"
  ],
  "serp_insights": {
    "top_ranking_content_type": "guides and comparison articles",
    "average_word_count": 2000,
    "common_h2_topics": [
      "Benefits of equipment financing",
      "How to qualify",
      "Application process"
    ],
    "content_gaps": [
      "local Malaysia regulations",
      "Syariah-compliant financing options"
    ]
  }
}
```

## Cultural Considerations

### English Keywords
- Focus on ROI, efficiency, business growth
- Professional terminology
- International business language

### Mandarin Keywords
- Include trust signals (信任, 可靠)
- Community and relationship terms
- Family business context

### Malay Keywords
- Respectful language (perkhidmatan, bantuan)
- Government and regulatory terms (kerajaan, lesen)
- Local business context (perniagaan tempatan)

## Tools & Resources
- Google Search Console (if client website exists)
- Google Autocomplete
- People Also Ask
- Related Searches
- Competitor analysis

## Execution Timing
- Per keyword per language: ~3 minutes
- Total for 1 topic across 3 languages: ~10 minutes

## Agent Usage
This skill is used by:
- Content Generation Agent (daily workflow)
- Client Onboarding Agent (initial research)

## Success Criteria
✅ Keywords researched independently per language (not translated)
✅ SERP analysis completed for top 10 results
✅ LSI keywords identified
✅ Content gaps identified
✅ Long-tail opportunities listed
✅ Search intent correctly identified

/**
 * AI PROMPT LIBRARY
 * Curated prompts for generating quality content with AI agents
 *
 * Usage: Use these prompts when calling AI (Claude, GPT-4, etc.) to generate content
 */

import type { KeywordCategory, AwarenessStage, ContentPost } from "../keyword-to-post-mapper";
import type { ContentTemplate } from "../templates/content-templates";

// ============ PROMPT DATA STRUCTURES ============

export interface AIPrompt {
  id: string;
  name: string;
  category: KeywordCategory;
  stage: AwarenessStage;
  language: "en" | "zh" | "ms";
  systemPrompt: string;
  userPromptTemplate: string;
  outputFormat: string;
  qualityChecks: string[];
  wordCountTarget: number;
}

// ============ SYSTEM PROMPTS (Context for AI) ============

const BASE_SYSTEM_PROMPT = `
You are an expert SEO content writer for iHousing, a professional Airbnb property management company in Melaka, Malaysia.

**IMPORTANT CONTEXT:**
- iHousing manages 100+ properties in Melaka with 8 years of experience
- We are the OFFICIAL Airbnb manager for Parkland Avenue by the Sea (launching August 2025)
- **CRITICAL PRICING RULE:** Flat fee pricing (RM200-300/month) is ONLY for Parkland Avenue. For all other condos, use "WhatsApp us for custom pricing" in CTAs.
- We list properties on 5 platforms: Airbnb, Booking.com, Agoda, Expedia, VRBO = 60% more bookings
- We have in-house cleaning team (no markup on costs)
- Industry standard: 20-30% commission (our competitors charge this)

**TARGET AUDIENCE:** Property owners in Melaka who:
- Have empty/underperforming condos
- Are frustrated with bad tenants
- Want to invest in Airbnb but don't know how
- Are tired of self-managing

**CONTENT GOALS:**
- Educate about Airbnb as an investment option
- Highlight pain points of long-term rentals and empty properties
- Position iHousing as the solution
- Drive WhatsApp leads (our primary conversion channel)

**WRITING STYLE:**
- Professional but conversational
- Data-driven (use specific RM amounts and percentages)
- Empathetic to property owner pains
- Solution-oriented (always end with hope)
- Local focus (Melaka-specific examples)

**SEO REQUIREMENTS:**
- Use target keyword naturally in H1, first 100 words, and at least 2 H2s
- Keyword density: 1-1.5% (don't overstuff)
- Include related keywords naturally
- Use bullet points and numbered lists for readability
- Include at least 1 internal link suggestion
- Meta description: 150-160 characters, includes keyword

**CTA REQUIREMENTS:**
- Always include WhatsApp CTA: "Enter your phone number and we'll WhatsApp you"
- For Parkland Avenue content: Use pre-register/special pricing CTAs
- For other condos: Use "WhatsApp us for custom pricing for [Condo Name]"
- Make CTAs specific and compelling

**WHAT TO AVOID:**
- Don't make unrealistic income promises (use ranges: RM7,000-9,000/year)
- Don't guarantee specific occupancy rates (use: 19-22% based on market data)
- Don't bash competitors directly (focus on our advantages instead)
- Don't use generic filler content - every paragraph must add value
- Don't use flat fee pricing for condos other than Parkland Avenue

**LEGAL/REGULATORY NOTES:**
- Melaka currently has no specific short-term rental laws (this is an advantage)
- Advise readers to check their condo's strata rules
- Mention MOTAC licensing may be required in the future
`;

const EN_SYSTEM_PROMPT = BASE_SYSTEM_PROMPT + `

**ENGLISH-SPECIFIC NOTES:**
- Write for Malaysian English (MY) audience
- Use local spelling (colour, not color; metre, not meter)
- Include Malaysian context where relevant
- Use RM (Ringgit Malaysia) for all currency
`;

const ZH_SYSTEM_PROMPT = BASE_SYSTEM_PROMPT + `

**CHINESE-SPECIFIC NOTES:**
- Write in Simplified Chinese (简体中文)
- Use Malaysian Chinese context (e.g., 马六甲, not 马六甲市)
- Use RM (Ringgit Malaysia) for currency: RM
- Tone: Professional but warm (礼貌但亲切)
- Cultural nuances: Emphasize family investment, inheritance, long-term wealth
`;

const MS_SYSTEM_PROMPT = BASE_SYSTEM_PROMPT + `

**BAHASA MELAYU-SPECIFIC NOTES:**
- Tulis dalam Bahasa Melayu Standard (bukan bahasa pasar)
- Guna konteks Malaysia (e.g., Melaka, bukan Melaka bandar)
- Guna RM untuk semua mata wang
- Nada: Mesra dan menghormati (guna "anda", bukan "awak")
- Keutamaan: Kepercayaan (trust), keuntungan (profit), perkhidmatan (service)
`;

// ============ USER PROMPT TEMPLATES ============

/**
 * Generate a complete blog post from keyword
 */
export function generateContentPrompt(post: ContentPost, template: ContentTemplate): string {
  return `
## CONTENT GENERATION REQUEST

**Target Keyword:** ${post.targetKeyword}
**Secondary Keywords:** ${post.secondaryKeywords.join(", ")}
**Language:** ${post.language.toUpperCase()}
**Category:** ${post.category}
**Awareness Stage:** ${post.stage}
**Word Count Target:** ${template.wordCountTarget} words
**Slug:** ${post.slug}

## CONTENT STRUCTURE

Please write a blog post following this structure:

${template.structure.map((section, index) => `
### Section ${index + 1}: ${section.type.toUpperCase()}${section.title ? ` - ${section.title}` : ""}
**Type:** ${section.type}
**Word Count:** ~${section.wordCountTarget} words
**Prompt:** ${section.prompt}
${section.includeInTableOfContents ? "✓ Include in Table of Contents" : ""}
`).join("\n")}

## SEO REQUIREMENTS

**Title Template:** ${template.seoConfig.titleTemplate}
**Meta Description:** ${template.seoConfig.metaDescriptionTemplate}
**Keyword Density:** ${template.seoConfig.keywordDensity}%

**Internal Linking:**
${template.seoConfig.internalLinkingRules.map(rule => `- ${rule}`).join("\n")}

## CTA REQUIREMENTS

**Type:** ${template.ctaConfig.type}
**Primary CTA:** "${template.ctaConfig.primary}"
${template.ctaConfig.secondary ? `**Secondary CTA:** "${template.ctaConfig.secondary}"` : ""}
${template.ctaConfig.contextSpecific ? "**Context:** Customize for specific condo/project" : ""}

## QUALITY CHECKLIST

Before finalizing, ensure:
${template.qualityChecks.map(check => `- [ ] ${check}`).join("\n")}

---

Please generate the complete content now, including:
1. SEO-optimized title (following template)
2. Meta description (150-160 characters)
3. Blog post content with proper headings
4. Compelling CTA section
5. Internal link suggestions

Format your response in Markdown.
`;
}

/**
 * Generate meta tags for a post
 */
export const META_TAGS_PROMPT = `
Generate SEO-optimized meta tags for this blog post:

**Output Format:**
\`\`\`html
<title>[60-70 characters, includes keyword]</title>
<meta name="description" content="[150-160 characters, includes keyword, compelling CTA]">
<meta name="keywords" content="[3-5 related keywords]">
<link rel="canonical" href="[full URL]">
<meta property="og:title" content="[same as title]">
<meta property="og:description" content="[same as description]">
<meta property="og:type" content="article">
<meta property="og:url" content="[full URL]">
<meta property="og:image" content="[featured image URL]">
\`\`\`

**Requirements:**
- Title: 60-70 chars, keyword near beginning, compelling
- Description: 150-160 chars, include keyword, value proposition, CTA
- Keywords: 3-5 related terms (no keyword stuffing)
- Open Graph: Social media optimized

Generate the meta tags now.
`;

/**
 * Generate table of contents
 */
export const TOC_PROMPT = `
Generate a table of contents for this blog post.

**Requirements:**
- Include all H2 and H3 headings
- Use #anchor-links for navigation
- Format as a clean HTML list

**Output Format:**
\`\`\`html
<nav class="table-of-contents">
  <h3>Table of Contents</h3>
  <ol>
    <li><a href="#anchor">Heading Text</a></li>
    ...
  </ol>
</nav>
\`\`\`

Generate the TOC now.
`;

/**
 * Generate FAQ section
 */
export const FAQ_PROMPT = `
Generate an FAQ section for this blog post about: [KEYWORD]

**Requirements:**
- 5-7 frequently asked questions
- Questions should reflect real user concerns
- Answers: 50-100 words each
- Include target keyword in at least 2 answers
- One answer should hint at iHousing as solution

**Output Format:**
\`\`\`html
<section class="faq">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-item">
    <h3>Question 1?</h3>
    <p>Answer...</p>
  </div>

  ...
</section>
\`\`\`

Generate the FAQ section now.
`;

/**
 * Generate internal link suggestions
 */
export const INTERNAL_LINKS_PROMPT = `
Generate 5-7 internal link suggestions for this blog post about: [KEYWORD]

**Context:** iHousing website has pages for:
- Investment guides
- Condo-specific pages (10 condos)
- Service pages (hiring, pricing, about)
- Comparison pages
- How-to guides

**Requirements:**
- Each link: anchor text + target URL + contextual reason
- Anchor text should include related keyword
- URLs should follow: /{language}/{page-type}/{slug}/
- Prioritize linking to high-value pages (services, condos)

**Output Format:**
\`\`\`
1. [Anchor Text](/en/blog/target-slug/) - Reason for this link
2. [Anchor Text](/en/services/target-slug/) - Reason for this link
...
\`\`\`

Generate internal link suggestions now.
`;

/**
 * Generate comparison table
 */
export const COMPARISON_TABLE_PROMPT = `
Generate a comparison table for this blog post comparing: [TOPIC A] vs [TOPIC B]

**Requirements:**
- 5-7 comparison criteria
- Include key decision-making factors
- Use RM amounts where applicable
- Highlight iHousing advantages naturally
- Format as responsive HTML table

**Output Format:**
\`\`\`html
<table class="comparison-table">
  <thead>
    <tr>
      <th>Criteria</th>
      <th>Option A</th>
      <th>Option B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Criterion 1</td>
      <td>Details A</td>
      <td>Details B</td>
    </tr>
    ...
  </tbody>
</table>
\`\`\`

Generate the comparison table now.
`;

/**
 * Generate case study
 */
export const CASE_STUDY_PROMPT = `
Generate a realistic (anonymized) case study for this blog post.

**Context:** iHousing client success story from Melaka

**Requirements:**
- Client: Property owner in Melaka (anonymized)
- Problem: [specific pain point from article]
- Solution: Switched to iHousing management
- Results: Quantified improvement (use realistic ranges)
- Timeline: Before/after with specific dates
- Quote: Client testimonial (generic but authentic-sounding)
- CTA: "Get similar results for your condo"

**Structure:**
1. Client Profile
2. The Challenge
3. The Solution
4. The Results (with metrics)
5. Client Quote
6. CTA

**Word Count:** 300-400 words

Generate the case study now.
`;

// ============ CATEGORY-SPECIFIC PROMPTS ============

/**
 * Problem-Aware Content Prompt
 */
export const PROBLEM_AWARE_PROMPT = (keyword: string, painPoints: string[]): string => {
  return `
## PROBLEM-AWARE CONTENT GENERATION

**Target Keyword:** ${keyword}
**Content Goal:** Validate reader's pain points, build trust, introduce Airbnb as solution

**Pain Points to Address:**
${painPoints.map((p, i) => `${i + 1}. ${p}`).join("\n")}

**Writing Framework:**
1. **Hook:** Start with a relatable scenario that matches their pain
2. **Validate:** "I know how frustrating this is..." (empathy)
3. **Quantify:** Show the actual cost/impact (use RM amounts)
4. **Transition:** "What if there was a better way?"
5. **Solution:** Introduce Airbnb + professional management
6. **CTA:** WhatsApp for free consultation

**Tone:** Empathetic, understanding, hopeful

**Keywords to Include:**
- Primary: ${keyword}
- Secondary: airbnb melaka, pengurusan hartanah, sewa harian

**Prohibited Phrases:**
- "Don't worry" (too dismissive)
- "It's easy" (minimizes their struggle)
- Any guaranteed promises

Generate problem-aware content now.
`;
};

/**
 * Solution-Aware Content Prompt
 */
export const SOLUTION_AWARE_PROMPT = (keyword: string, focusArea: string): string => {
  return `
## SOLUTION-AWARE CONTENT GENERATION

**Target Keyword:** ${keyword}
**Content Goal:** Educate about Airbnb as a solution, provide actionable information

**Focus Area:** ${focusArea}

**Writing Framework:**
1. **Education:** Explain the concept (how Airbnb works in Melaka)
2. **Data:** Use real market data (occupancy, rates, earnings)
3. **Process:** Step-by-step guidance
4. **Requirements:** What's needed to succeed
5. **Pitfalls:** Common mistakes to avoid
6. **Solution:** How iHousing handles everything
7. **CTA:** Ready to start? WhatsApp us

**Data to Include (from research):**
- Average revenue: RM7,215-9,174/year
- Occupancy: 19-22%
- Top areas: Jonker Street, Bandar Hilir, Melaka Raya
- Weekend demand from KL/Singapore

**Tone:** Educational, authoritative, helpful

**Format:** Use headings, bullet points, and bold text for readability

Generate solution-aware content now.
`;
};

/**
 * Decision-Stage Content Prompt
 */
export const DECISION_STAGE_PROMPT = (keyword: string, comparisonTopic: string): string => {
  return `
## DECISION-STAGE CONTENT GENERATION

**Target Keyword:** ${keyword}
**Content Goal:** Help reader make a decision, position iHousing as best choice

**Comparison Topic:** ${comparisonTopic}

**Writing Framework:**
1. **Context:** Reader is evaluating options
2. **Comparison:** Side-by-side analysis (use table)
3. **Pros/Cons:** Honest assessment of each option
4. **Our Differentiator:** What makes iHousing unique
5. **Social Proof:** 100+ properties, 8 years experience
6. **Risk Reversal:** Easy switching, no obligation consultation
7. **CTA:** Clear next step (WhatsApp)

**Key Differentiators to Highlight:**
1. Parkland Avenue: Flat fee pricing (RM200-300/month)
2. Other condos: Custom pricing (WhatsApp to discuss)
3. 5-platform listing (60% more bookings)
4. In-house cleaning (no markup)
5. 8 years Melaka experience

**Tone:** Confident, transparent, helpful

**CRITICAL:**
- For Parkland Avenue: Mention flat fee pricing
- For other condos: Use "WhatsApp us for custom pricing"
- Don't use flat fee for non-Parkland content

Generate decision-stage content now.
`;
};

/**
 * Condo-Specific Content Prompt
 */
export const CONDO_SPECIFIC_PROMPT = (condoName: string, pageType: "investment" | "switch"): string => {
  const isInvestment = pageType === "investment";

  return `
## CONDO-SPECIFIC CONTENT GENERATION

**Target Condo:** ${condoName}
**Page Type:** ${isInvestment ? "Investment Guide" : "Switch to Us"}

**Condo Details (from research):**
${isInvestment ? `
- Location: [Specific area in Melaka]
- Property types: [Studio/2BR/3BR availability]
- Price range: [RM amount]
- Airbnb potential: [Revenue estimate]
- Advantages: [Why this condo]
` : `
- Current Airbnb activity: [Yes/No]
- Management challenges: [Specific issues]
- Switching benefits: [What improves]
- Current iHousing units: [Number managed]
`}

**Writing Framework:**
${isInvestment ? `
1. **Introduction:** Why ${condoName} for Airbnb investment?
2. **Location Advantage:** Proximity to attractions
3. **Investment Potential:** ROI calculations
4. **Unit Comparison:** Studio vs 2BR vs 3BR
5. **Market Data:** Occupancy, ADR, revenue estimates
6. **Getting Started:** How iHousing can help
7. **CTA:** Pre-register / WhatsApp for details
` : `
1. **Acknowledgment:** Already hosting at ${condoName}?
2. **Problem:** What's not working with current setup
3. **Comparison:** Current vs iHousing management
4. **Switching Process:** How easy it is
5. **Results:** What to expect (specific metrics)
6. **Case Study:** ${condoName} owner success story
7. **CTA:** Switch now / Free comparison
`}

**Condo-Specific Keywords to Include:**
${isInvestment ? `
- "${condoName} airbnb melaka"
- "${condoName} investment potential"
- "buy ${condoName} for airbnb"
` : `
- "switch airbnb manager ${condoName}"
- "${condoName} airbnb management"
- "ihousing ${condoName}"
`}

**Tone:** ${isInvestment ? "Informative, analytical, encouraging" : "Direct, confident, results-focused"}

**CRITICAL:**
- Do NOT use flat fee pricing (unless it's Parkland Avenue)
- Use: "WhatsApp us for custom pricing for ${condoName}"

Generate condo-specific content now.
`;
};

// ============ QUALITY CHECK PROMPTS ============

/**
 * Review generated content for quality
 */
export const CONTENT_REVIEW_PROMPT = (content: string): string => {
  return `
## CONTENT QUALITY REVIEW

Please review this blog post content for quality and provide feedback.

**Checklist:**

### SEO Quality
- [ ] Target keyword in H1?
- [ ] Target keyword in first 100 words?
- [ ] Target keyword used naturally 3-5 times?
- [ ] Keyword density 1-1.5%?
- [ ] Meta description 150-160 characters?
- [ ] Title 60-70 characters?

### Content Quality
- [ ] Accurate information (no false promises)?
- [ ] Specific RM amounts included (not vague)?
- [ ] Data from research cited correctly?
- [ ] Proper headings structure (H1 → H2 → H3)?
- [ ] Short paragraphs (3-5 sentences max)?
- [ ] Bullet points used for readability?

### Brand Alignment
- [ ] iHousing mentioned appropriately?
- [ ] 5-platform listing advantage included?
- [ ] In-house cleaning advantage included?
- [ ] 100+ properties / 8 years experience mentioned?
- [ ] **CRITICAL:** Flat fee ONLY for Parkland Avenue?
- [ **CRITICAL:** "WhatsApp for custom pricing" for other condos?

### CTA Quality
- [ ] WhatsApp CTA included?
- [ ] CTA compelling and specific?
- [ ] Clear next step for reader?

### Writing Quality
- [ ] Proper grammar and spelling?
- [ ] Conversational but professional tone?
- [ ] No generic filler content?
- [ ] Every paragraph adds value?

**Output Format:**
For each failed check, provide:
- Issue description
- Suggested fix
- Exact text to replace

Provide your review now.
`;
};

// ============ EXPORTS ============

export const AI_PROMPTS = {
  // System prompts
  BASE_SYSTEM_PROMPT,
  EN_SYSTEM_PROMPT,
  ZH_SYSTEM_PROMPT,
  MS_SYSTEM_PROMPT,

  // User prompt generators
  generateContentPrompt,
  META_TAGS_PROMPT,
  TOC_PROMPT,
  FAQ_PROMPT,
  INTERNAL_LINKS_PROMPT,
  COMPARISON_TABLE_PROMPT,
  CASE_STUDY_PROMPT,
  CONTENT_REVIEW_PROMPT,

  // Category-specific
  PROBLEM_AWARE_PROMPT,
  SOLUTION_AWARE_PROMPT,
  DECISION_STAGE_PROMPT,
  CONDO_SPECIFIC_PROMPT,
};

export default AI_PROMPTS;

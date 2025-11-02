# Persona Generation Skill

## Purpose
Generate detailed buyer personas based on client's target audience from questionnaire.

## Client Parameter
**IMPORTANT:** When invoking this skill, pass the client name as a parameter:
- Used in folder paths as: `example-clients/[client-name]/`
- Replace `[client-name]` with actual client identifier (e.g., "apex-machinery", "ing-heng-credit")
- Must be consistent throughout entire onboarding workflow

## Input
Client questionnaire answers about target audience:
- Demographics
- Pain points
- Goals
- Buying behavior
- Decision-making process

## Persona Framework

### Persona Components
Each persona should include:

1. **Basic Information**
   - Name (relatable, culturally appropriate)
   - Job title / role
   - Age range
   - Location
   - Company size (if B2B)

2. **Demographics**
   - Education level
   - Income range (if B2C) or budget authority (if B2B)
   - Language preference
   - Technology comfort level

3. **Psychographics**
   - Professional goals
   - Personal motivations
   - Values and priorities
   - Challenges and frustrations

4. **Pain Points**
   - Top 3-5 specific problems they face
   - How these problems impact their work/life
   - Current solutions they use (and why they're inadequate)

5. **Goals & Objectives**
   - What they want to achieve
   - Success metrics
   - Timeline expectations

6. **Buying Behavior**
   - How they research solutions
   - Information sources they trust
   - Decision-making process
   - Common objections
   - Budget considerations

7. **Content Preferences**
   - Preferred content formats (blogs, videos, case studies)
   - Topics of interest
   - Preferred language (EN, ZH, MS)
   - Content consumption habits

8. **Buyer Journey Stage**
   - Awareness content needs
   - Consideration content needs
   - Decision content needs

---

## Persona Archetypes for Ing Heng Credit

### Archetype 1: Construction Contractor
**Profile:**
- Small to medium construction business owner
- 35-55 years old
- Needs equipment but cash-flow constrained
- Values reliability and flexible payment

**Language preference:** Primarily Malay, some English

**Pain points:**
- High upfront equipment costs
- Seasonal cash flow fluctuations
- Equipment maintenance costs
- Limited access to traditional bank loans

**Example Persona:**
```markdown
# Persona: Contractor Ahmad

## Basic Information
- **Name:** Ahmad bin Hassan
- **Age:** 42
- **Job Title:** Owner, Hassan Construction Sdn Bhd
- **Location:** Klang, Selangor
- **Company Size:** 15 employees, RM 2M annual revenue

## Background
Ahmad started his construction business 8 years ago after working as a site supervisor. He primarily takes on government and private residential projects. His business is growing, but he struggles with the high cost of equipment ownership.

## Demographics
- Education: Diploma in Civil Engineering
- Language: Bahasa Malaysia (primary), English (business)
- Tech savviness: Medium (uses WhatsApp, basic accounting software)
- CIDB registered contractor (Grade G4)

## Pain Points
1. **Cash flow constraints** - Project payments often delayed 60-90 days
2. **Equipment ownership costs** - Cannot afford RM 500K for new excavator
3. **Maintenance burden** - Unexpected repairs eat into profits
4. **Bank loan rejections** - Seen as "high risk" by traditional banks
5. **Competition** - Losing bids to competitors with better equipment

## Goals
- Expand equipment fleet to take on larger projects
- Win more government contracts (need equipment proof)
- Maintain positive cash flow
- Grow business to Grade G5 within 2 years

## Buying Behavior
- Researches via: Google, Facebook, word-of-mouth from other contractors
- Trusts: Recommendations from fellow contractors, CIDB-approved vendors
- Decision process: Needs to convince wife (co-director), consults accountant
- Timeline: Urgent when project bid requires equipment proof (1-2 weeks)
- Budget: Can afford RM 5K-8K monthly payment, not RM 500K upfront

## Objections
- "What if the equipment breaks down?"
- "Can I return it if project gets cancelled?"
- "Is this Syariah-compliant?" (important for him)
- "What if I can't make a payment one month?"

## Content Preferences
- **Format:** Short articles (1000-1500 words), case studies, WhatsApp-friendly
- **Topics:** Equipment financing benefits, how-to guides, government contract tips
- **Language:** Bahasa Malaysia (primary), some English for technical terms
- **Consumption:** Mobile-first (reads on phone during lunch breaks)

## Buyer Journey Content Needs

### Awareness Stage
- "Cara mendapatkan jentera pembinaan tanpa modal besar"
- "Perbezaan antara beli vs sewa jentera"
- "Bagaimana kontraktor lain berkembang dengan pembiayaan"

### Consideration Stage
- "Perbandingan pembiayaan jentera vs pinjaman bank"
- "Cara kira ROI untuk jentera baharu"
- "Syarat kelayakan pembiayaan jentera"

### Decision Stage
- "Cara mohon pembiayaan jentera dalam 3 langkah"
- "Dokumen yang diperlukan untuk permohonan"
- "Testimoni kontraktor yang gunakan pembiayaan"

## Marketing Channels
- **Primary:** Google Search (Bahasa Malaysia keywords)
- **Secondary:** Facebook groups (kontraktor Malaysia)
- **Tertiary:** WhatsApp broadcasts, word-of-mouth

## Success Metrics
- Can afford equipment payment within cash flow
- Equipment approved quickly (within 3-5 days)
- Flexible payment terms if project delayed
- No hidden fees or surprises
```

---

### Archetype 2: Logistics Manager
**Profile:**
- Operations or logistics manager
- 30-45 years old
- Chinese-speaking business community
- Needs efficient warehouse operations

**Language preference:** Primarily Mandarin, some English

**Pain points:**
- Warehouse inefficiency
- Labor costs rising
- Equipment breakdowns cause delays
- Need to justify ROI to management

**Example Persona:**
```markdown
# Persona: Logistics Manager Lee

## Basic Information
- **Name:** Lee Wei Ming
- **Age:** 38
- **Job Title:** Logistics Manager, Sunrise Distribution Sdn Bhd
- **Location:** Port Klang, Selangor
- **Company Size:** Subsidiary of parent company (200 employees total)

## Background
Lee manages a 50,000 sq ft warehouse and oversees a fleet of delivery trucks. He's responsible for operational efficiency and reports to the COO. His KPIs are tied to cost reduction and on-time delivery rates.

## Demographics
- Education: Bachelor's in Business Management
- Language: Mandarin Chinese (primary), English (professional), some Malay
- Tech savviness: High (uses WMS software, Excel power user)
- Family: Married with 2 kids, values stability

## Pain Points
1. **Aging forklift fleet** - Frequent breakdowns cause delays
2. **Budget constraints** - Finance department cuts CapEx requests
3. **Rising labor costs** - Need to do more with less staff
4. **Efficiency pressure** - Management demands faster turnaround
5. **Safety concerns** - Old equipment = higher accident risk

## Goals
- Improve warehouse efficiency by 20%
- Reduce equipment downtime to near-zero
- Stay within OpEx budget (lease vs buy argument)
- Demonstrate ROI to justify to CFO
- Ensure worker safety compliance

## Buying Behavior
- Researches via: Google, industry forums, trade shows, vendor meetings
- Trusts: Industry publications, peer recommendations, data-driven ROI
- Decision process: Needs approval from CFO and COO, prepares business case
- Timeline: Budget planning cycle (Q4 for next year approval)
- Budget: CapEx difficult, OpEx easier to approve (lease preference)

## Objections
- "How do I prove ROI to finance department?"
- "What's the total cost of ownership vs buying?"
- "What if we need to scale up or down quickly?"
- "Can we customize the lease term to match our fiscal year?"

## Content Preferences
- **Format:** Data-driven articles, ROI calculators, case studies with numbers
- **Topics:** Operational efficiency, cost savings, warehouse optimization
- **Language:** Mandarin Chinese (preferred), English (acceptable)
- **Consumption:** Desktop during office hours, saves for later review

## Buyer Journey Content Needs

### Awareness Stage (Mandarin)
- "如何提高仓库效率：设备现代化指南"
- "租赁vs购买叉车：全面成本分析"
- "物流设备融资如何改善现金流"

### Consideration Stage (Mandarin)
- "仓库设备ROI计算器和案例研究"
- "如何向CFO提交设备租赁建议"
- "灵活租赁条款的商业价值"

### Decision Stage (Mandarin)
- "设备租赁申请流程和审批时间"
- "客户见证：如何在6个月内提高效率20%"
- "租赁协议关键条款解释"

## Marketing Channels
- **Primary:** Google Search (Mandarin keywords), LinkedIn
- **Secondary:** Industry WhatsApp groups, trade publications
- **Tertiary:** Email marketing, webinars

## Success Metrics
- Clear ROI demonstration for management approval
- Flexible lease terms aligned with fiscal calendar
- Fast approval process (within budget cycle)
- Reliable equipment with minimal downtime
- Support team that understands Chinese business culture
```

---

## Generation Process

### Step 1: Analyze Questionnaire
Extract target audience information:
- Who are the primary customers?
- What industries/segments?
- What are their demographics?
- What problems do they face?

### Step 2: Determine Persona Count
Generate **5-8 personas** based on complexity:

**Simpler business (5 personas):**
- Primary customer (2 variations)
- Secondary customer (1 variation)
- Influencer (1 persona)
- Decision maker (1 persona)

**Complex business (8 personas):**
- Primary segment personas (3-4)
- Secondary segment personas (2-3)
- Different buyer journey stages (1-2)

### Step 3: Diversify Personas
Ensure diversity across:
- **Languages:** At least 1 per language (EN, ZH, MS)
- **Demographics:** Age, gender, role
- **Industries:** If B2B, cover different verticals
- **Journey stages:** Awareness, consideration, decision
- **Decision authority:** End users vs decision makers

### Step 4: Use Cultural Archetypes
For Malaysia market:

**Malay personas:**
- Respectful tone
- Government/regulatory awareness
- Community and family values
- Syariah-compliance considerations

**Chinese personas:**
- Business relationship focus
- ROI and efficiency driven
- Family business context
- Long-term partnership emphasis

**Indian personas:**
- Professional services context
- Educational background valued
- Technology adoption
- Detailed analysis preferred

**International personas:**
- Global business perspective
- English professional language
- Best practices and standards
- Scalability and growth focus

### Step 5: Map to Content Strategy
For each persona, identify:
- Primary language preference
- Content format preferences
- Buyer journey stage content
- Keywords they would search
- Channels they use

---

## Output Format

Save each persona as separate markdown file:

```
/example-clients/[client-name]/persona-idea/D/[persona-slug].md
```

**Example (for "apex-machinery" client):**
```
/example-clients/apex-machinery/persona-idea/D/[persona-slug].md
```

**File structure:**
```markdown
# Persona: [Name]

## Basic Information
[Demographics]

## Background
[Story and context]

## Pain Points
[Top 5 challenges]

## Goals
[What they want to achieve]

## Buying Behavior
[How they research and decide]

## Objections
[Common concerns]

## Content Preferences
[Format, topics, language]

## Buyer Journey Content Needs
[Awareness, consideration, decision content]

## Marketing Channels
[Where to reach them]

## Success Metrics
[What good outcome looks like for them]
```

---

## Quality Checklist

✅ Each persona feels like a real person (not generic)
✅ Clear pain points specific to this persona
✅ Culturally appropriate for language/market
✅ Buying behavior realistically mapped
✅ Content preferences actionable
✅ Language preference clear (EN/ZH/MS)
✅ Buyer journey stages defined
✅ Marketing channels identified

---

## Execution Timing
- Per persona: ~2 minutes
- 5-8 personas: ~10-15 minutes total

## Agent Usage
This skill is used by: **Client Onboarding Agent**
Invoked during: Phase 1 (Draft Generation)

## Success Criteria
✅ 5-8 diverse personas generated
✅ Each persona has all required components
✅ Cultural appropriateness validated
✅ Language distribution covers all target languages
✅ Buyer journey content needs mapped
✅ All personas saved as D/ draft files for review

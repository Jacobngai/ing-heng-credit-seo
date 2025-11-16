# Outreach Email Generation Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Generate personalized, high-converting outreach emails for link building campaigns with context-specific messaging.

## Prerequisites
- Link prospects identified via `link-prospect-research.md` skill
- Prospect data includes: domain, target page, opportunity type, contact info
- Client content to link to identified and URL ready
- Client has value proposition clear (why link benefits recipient)

## Methodology

### Step 1: Analyze Prospect Context

Before writing, understand:

1. **Prospect's Value Proposition**
   - What's their primary goal? (Traffic, authority, audience value, community building)
   - What problem do they solve for readers?
   - What's their content style? (Formal, casual, technical, accessible)
   - What type of content performs well? (Lists, guides, comparison, how-to)

2. **Opportunity Type Context**
   ```
   Broken Link Approach:
   - Lead with "noticed issue"
   - Provide specific replacement value
   - Position as helpful, not selfish

   Mentioned But Not Linked:
   - Acknowledge their content quality
   - Suggest link adds completeness
   - Reference specific passage

   Resource Page:
   - Complement their curation
   - Show fit in their collection
   - Offer unique angle/value

   Expert Bio/Comment:
   - Position as industry insight
   - Suggest reader value
   - Professional, not salesy tone
   ```

3. **Relationship Context**
   - Any prior relationship? (mutual connections, past interactions)
   - Brand familiarity? (Have they heard of client before?)
   - Competitor presence? (Do they link to competitors?)
   - Responsiveness? (Previous outreach success rate if known)

### Step 2: Define Email Structure

Standard high-converting structure:

```
SUBJECT LINE (7-10 words, curiosity or value)
├─ Hook/Opener (3-4 sentences, personalized)
├─ Problem Recognition (2-3 sentences, shows research)
├─ Solution/Value (3-4 sentences, specific to their need)
├─ Call to Action (1-2 sentences, clear and easy)
├─ Credibility Element (1-2 sentences, social proof or credentials)
└─ Signature (Name, title, contact)

Total length: 150-250 words (short enough to read on mobile)
Tone: Helpful, not salesy
```

### Step 3: Craft Personalized Subject Lines

**Rules:**
- Specific to prospect or opportunity (not generic)
- Short: 7-10 words maximum
- Curiosity or Value focused (not clickbait)
- No all-caps, excessive punctuation, or spam indicators
- Test: Would you open this email?

**Broken Link Approach:**
- "Broken link on your [page topic] guide"
- "Quick fix for [page topic] - one broken link"
- "Your [page topic] guide missing one resource"

**Mentioned Not Linked:**
- "Adding value to your [page topic] coverage"
- "Resource for [mentioned topic] on your page"
- "[Topic] comparison you might link to"

**Resource Page:**
- "Tool for your [resource page name]"
- "Suggestion for your [topic] resources"
- "[Tool type] to complement your [topic] guide"

**Expert Comment:**
- "Equipment financing insights for your [topic] article"
- "[Topic] expert perspective for your readers"
- "Industry data for your [topic] coverage"

**Examples (Good vs. Bad):**
```
BAD: "Check out our awesome equipment financing guide!"
GOOD: "Resource to improve your financing guide completeness"

BAD: "Link opportunity!!!"
GOOD: "Your forklift financing coverage - one gap"

BAD: "Hi! I have a link..."
GOOD: "Broken financing link on your equipment page"
```

### Step 4: Write Personalized Opener

Must show you've researched them specifically:

**Pattern 1: Specific Content Reference**
```
"I was reading your [specific article name] post on [specific platform] and found it incredibly valuable for [specific reason]. Your section on [specific H2 or point] especially resonated because [specific observation]."
```

Example:
```
"I was reading your 'Equipment Financing Types' guide on equipment-guide.com and found it incredibly valuable for contractors comparing options. Your section on lease vs. purchase especially resonated because you addressed the cash flow impact clearly."
```

**Pattern 2: Mutual Interest/Connection**
```
"I noticed we both focus on [shared interest/niche]. Your recent coverage of [topic] caught my attention because [specific reason]."
```

Example:
```
"I noticed we both focus on equipment financing in Southeast Asia. Your recent update to the financing alternatives section caught my attention because you've kept it current with 2025 options."
```

**Pattern 3: Genuine Compliment**
```
"Your [article type] on [topic] stands out because [specific reason]. The way you [specific approach] really sets it apart from other coverage."
```

Example:
```
"Your resource page on equipment financing tools stands out because it's genuinely curated. The way you focus on practical, usable tools rather than sales funnels really sets it apart."
```

**Anti-Patterns to Avoid:**
```
GENERIC: "Hi, I love your blog"
FLATTERY: "Your website is the best I've ever seen"
RUSHED: "I think we should partner"
SALESY: "Our amazing solution will help your readers"
VAGUE: "I have content you should link to"
```

### Step 5: Identify and Articulate the Problem

Show you understand the opportunity:

**For Broken Links:**
```
"I noticed you have a broken link to [original content] in your [page name] article. The link on '[anchor text]' returns a 404."
```

**For Mentioned But Not Linked:**
```
"I noticed in your [page] article, you mention [quoted text]. This is an area where adding a link to specialized content would give readers more depth."
```

**For Resource Page:**
```
"I've been following your '[resource page name]' and appreciate your curation. I noticed you cover [specific categories] but don't have a specific tool/resource for [gap area]."
```

**For Expert Bio:**
```
"Your article on [topic] reaches great audience but could benefit from [specific industry perspective]. I have recent data/insights on [specific angle] that might strengthen the piece."
```

### Step 6: Present the Solution/Value

NOT "I want a link" but "Here's how this helps your readers":

**Template by Opportunity Type:**

**Broken Link:**
```
"We created a comprehensive guide to [topic] that covers [specific value]. It would be perfect replacement for that broken link and would give your readers the updated information they need."
```

Example:
```
"We created a comprehensive guide to equipment leasing that covers current market conditions, Malaysia-specific options, and detailed buy vs. lease comparison. It would be perfect replacement for that broken link and would give your readers the most current information."
```

**Mentioned Not Linked:**
```
"We put together [content type] on [specific topic] that provides [specific value]. Since your article mentions [quote], your readers might appreciate the deeper dive we offer."
```

Example:
```
"We put together a detailed comparison on forklift leasing options that covers rental vs. purchase, operational costs, and regional pricing. Since your article mentions forklift leasing as an option, your readers might appreciate the specific comparison we offer."
```

**Resource Page:**
```
"We developed a [tool/resource type] that helps readers [specific value]. It complements your curation because it [specific fit reason]. Happy to add description for your resource page."
```

Example:
```
"We developed an equipment financing calculator that helps readers model different scenarios instantly. It complements your curation because you focus on tools users can actually use immediately. Happy to add description and link."
```

**Key points:**
- Reader benefit, not your benefit
- Specific value, not generic praise
- Easy to understand immediately
- No overpromising

### Step 7: Create Call to Action

Simple, clear, one action:

**Good CTAs:**
- "Would you be open to updating the link to our resource?"
- "Thought I'd mention it in case you want to replace the broken link with something more current."
- "Curious if you'd consider adding this to your resource collection?"
- "Would you be interested in including this tool in your resource page?"

**Bad CTAs:**
- "Let me know if you want to discuss partnership opportunities"
- "Check out our website and let me know what you think"
- "I'd love to hear from you soon"
- "Can we set up a call?"

**Follow-up approach:**
- First email: Make request, say you'll follow up in one week
- Follow-up: Keep it short, reference original email, ask for quick response
- Do NOT use aggressive language or multiple follow-ups after rejection

### Step 8: Add Credibility Element

Optional but recommended (1-2 sentences):

**Social Proof:**
```
"We're trusted by [X number] of companies in the [industry] sector for reliable equipment financing insights."
```

**Credentials:**
```
"Our team has [X years] of experience in equipment financing across Malaysia, with expertise in [specific areas]."
```

**Third-party Validation:**
```
"Our guide has been referenced by [publication/organization] and cited in [context]."
```

**Recent Achievement:**
```
"Our equipment financing content has helped thousands of contractors make better purchasing decisions."
```

**Warning:** Don't be pushy or make unsubstantiated claims. Keep brief.

## Output Format

### Email Template (Ready to Send)

```
TO: [editor@domain.com]
SUBJECT: Your equipment financing guide - one broken link

Hi [Name],

I was reading your "Equipment Financing Types" guide on equipment-guide.com and really appreciated your comprehensive breakdown of options. Your section on lease versus purchase especially resonated because you actually addressed the cash flow implications—something most guides skip.

I noticed you have a broken link on the phrase "equipment leasing options" in the financing types section. The link returns a 404, which is a missed opportunity since that section deserves quality resource.

We created a comprehensive equipment leasing guide that covers Malaysia-specific options, current market conditions, and a detailed lease vs. purchase analysis. It would be a solid replacement for that broken link and keep your readers updated with current information.

Would you be open to updating that link to point to our resource? I think your audience would find it valuable.

Thanks for the great content, and happy to help fill that gap.

Best regards,
[Your Name]
[Your Title]
[Client Name]
[Email]
[Phone]
```

### Email Variations by Opportunity Type

**Broken Link Email:**
```
Hi [Name],

Loved your [article name]. Specifically your [section/point] really stands out.

Noticed a broken link on "[anchor text]" in your [article] - the link to [original resource] returns 404. Thought you should know.

Coincidentally, we just published [content type] on [topic] that covers [what it covers]. It'd be a solid replacement since it [benefit].

Interested in swapping it in?

[Signature]
```

**Mentioned Not Linked Email:**
```
Hi [Name],

Really enjoyed your [article name] - the way you break down [topic] is excellent.

One small thought: You mention [quoted text] in the [section name] section. We put together [content type] specifically on [topic], which gives readers the depth you're pointing them toward. Since you reference it, might be worth adding the link so readers can dive deeper.

Worth considering for an update?

[Signature]
```

**Resource Page Email:**
```
Hi [Name],

Your [resource page name] is fantastic - it's clear you've curated tools that actually work for [audience].

We created a [tool/resource] that [specific value]. It fits your collection because [fit reason]. Would you be open to including it?

Happy to provide description/link in whatever format works best for your page.

[Signature]
```

### Email Campaign Database (JSON)

```json
{
  "campaign": "equipment-financing-links",
  "client": "ing-heng-credit",
  "created_date": "2025-11-04",
  "emails": [
    {
      "email_id": "OUTREACH_EMAIL_001",
      "prospect": {
        "domain": "equipment-guide.com",
        "contact_email": "editor@equipment-guide.com",
        "contact_name": "John Smith",
        "prospect_priority": "A"
      },
      "opportunity": {
        "type": "broken_link",
        "target_page": "https://equipment-guide.com/equipment-financing-types/",
        "anchor_text": "equipment leasing options",
        "broken_url": "[original URL that's broken]"
      },
      "email": {
        "subject": "Your equipment financing guide - one broken link",
        "body": "[Full email text here]",
        "cta": "Would you be open to updating the link to our resource?",
        "word_count": 185,
        "personalization_level": "high"
      },
      "campaign_tracking": {
        "status": "ready_to_send",
        "send_date": null,
        "response_date": null,
        "result": null
      }
    }
  ]
}
```

## Quality Standards

- Every email personalized (specific page/section reference)
- Subject line specific, not generic (7-10 words max)
- Body 150-250 words (mobile-friendly)
- Opening shows genuine research (not template)
- Value proposition clear and reader-focused
- CTA is single, simple action (not multiple requests)
- Professional but conversational tone
- No hype, no ALL CAPS, no excessive punctuation
- Credibility element if included (not overstated)
- Zero grammatical errors
- Contact/signature complete and professional

## Execution Timing

- Research prospect context: 3 minutes
- Write email (including subject): 5 minutes
- Personalization/customization: 2 minutes
- Review and proofing: 2 minutes
- Per email total: ~12 minutes
- For 50 emails: ~10 hours

## Agent Usage

This skill is used by: **Link Building Agent**
Triggered by command: `/launch-outreach-campaign [topic]`
Requires input from: `link-prospect-research.md` (prospect data)
Related skills: `backlink-tracking.md` (monitor responses)

## Success Criteria

✅ Every email personalized with specific prospect research
✅ Subject lines specific to opportunity type
✅ Value proposition clear and reader-focused
✅ CTA simple and single (not multiple requests)
✅ Tone professional and conversational (not salesy)
✅ Email length optimal for mobile (150-250 words)
✅ Zero grammatical/spelling errors
✅ Ready for immediate sending
✅ Response tracking set up
✅ Follow-up sequence planned

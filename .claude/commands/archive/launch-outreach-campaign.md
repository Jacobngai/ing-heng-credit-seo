# /launch-outreach-campaign

Launch the Link Building Agent to automatically generate personalized outreach emails and manage a link-building campaign for identified prospects, with tracking and follow-up automation.

**What this command does:**
1. Loads Link Building Agent from `.claude/agents/link-building.md`
2. Agent executes `outreach-email-generation.md` skill
3. Takes prospect list from `/research-link-prospects [topic]`
4. Generates 50-100+ personalized outreach emails:
   - Customized per prospect (domain, authority, opportunity type)
   - Personalized subject lines
   - Tailored value propositions
   - Calls-to-action suited to opportunity type
5. Creates email templates organized by difficulty level
6. Generates follow-up sequences (3-email drip campaign)
7. Sets up tracking for responses and link placements
8. Creates email management guide for human sending

**Expected output:**
- 50-100+ personalized outreach emails (D/ drafts)
- Email templates by difficulty level
- Follow-up sequence (auto-send recommendations)
- Response tracking template
- Execution time: ~10-12 minutes

**Usage:**
```bash
/launch-outreach-campaign [topic]
```

**Example:**
```bash
/launch-outreach-campaign "Equipment Financing"
```

**Prerequisites:**
- Must run `/research-link-prospects [topic]` first
- Prospect list with contact information available
- Outreach angles identified
- Client context and value propositions prepared

**Email components:**

1. **Subject Line:**
   - Personalized to prospect
   - No spam keywords
   - 50-60 characters ideal
   - Curiosity or value-focused

2. **Opening:**
   - Personalized greeting (research-backed)
   - Brief reason for outreach
   - Value positioning

3. **Body:**
   - Problem identification (what prospect covers)
   - Proposed solution (what client offers)
   - Why they should care (audience alignment)
   - Proof/credibility (client authority)

4. **CTA:**
   - Specific ask (link, mention, guest post, etc.)
   - Easy next step
   - Multiple response options

5. **Signature:**
   - Professional (name, title, company)
   - Contact options (email, phone, LinkedIn)

**Generated files:**

```
/clients/[client-name]/link-building/
├── outreach-campaigns/
│   └── [topic]-campaign-[date]/
│       ├── emails-priority.md (easy prospects)
│       ├── emails-medium.md (moderate effort)
│       ├── emails-hard.md (difficult prospects)
│       ├── follow-up-sequence.md (reminder emails)
│       ├── outreach-guide.md (how to send/track)
│       └── response-tracking.csv (to fill in results)
│
└── sent-tracking/
    └── [topic]-outreach-log.md
```

**Example outreach email (Easy prospect):**
```markdown
# Email 1: Resource Page Link Request

**To:** submissions@malaysiafinance.com
**Subject Line:** Equipment Financing Guide - New Resource for Your Readers

---

Hi [Contact Name],

I came across your excellent Equipment Financing Resources page and thought [Client Company] might be a good addition.

We recently published a comprehensive guide to equipment financing in Malaysia that covers:
- Step-by-step financing process
- Equipment types and requirements
- Current financing options and rates
- SME-specific financing programs

Your readers who are looking for equipment financing information would find this useful.

Would you be open to including it as a resource link?

Best regards,
[Your Name]
[Title]
[Company Name]
[Email]
[Phone]
```

**Example outreach email (Medium prospect - Guest Post):**
```markdown
# Email 2: Guest Post Pitch

**To:** blog@equipmentleasing.asia
**Subject Line:** Guest Post: "5 Financing Mistakes Equipment Buyers Make"

---

Hi [Blog Editor Name],

I enjoyed [Specific Post] on Equipment Leasing Blog. Your audience seems very interested in helping businesses make better equipment decisions.

I'd like to contribute a guest post titled "5 Financing Mistakes Equipment Buyers Make" that would complement your recent coverage. The post would:
- Highlight common financing pitfalls
- Provide actionable solutions
- Include relevant case studies
- Link back to your equipment leasing content

The piece would be 1,500-2,000 words, original, and tailored to your audience.

Are you currently accepting guest contributions?

Best regards,
[Your Name]
[Title]
[Company Name]
[Email]
[Phone]
```

**Example outreach email (Hard prospect - Journalist/Media):**
```markdown
# Email 3: Media Pitch

**To:** pitches@businesspublication.com
**Subject Line:** Expert Comment Opportunity: Equipment Financing Trends 2024

---

Hi [Journalist Name],

I saw your recent article on equipment financing in Malaysia and thought [Client] could offer valuable expert perspective for your readers.

[Client] has financed over 10,000 pieces of equipment in Malaysia and sees firsthand how:
- Equipment financing options are evolving
- SMEs are accessing financing differently
- Market trends are shifting in 2024

We'd be happy to provide expert commentary or data for your next equipment financing story.

Would you like to discuss potential collaboration?

Best regards,
[Your Name]
[Title]
[Company Name]
[Email]
[Phone]
```

**Follow-up sequence:**

**Email 1 (Day 0):** Initial outreach (as above)

**Email 2 (Day 7):** Friendly reminder
```markdown
Hi [Contact Name],

Just wanted to follow up on my previous email about [specific opportunity].

I know email can be busy, so no pressure! If now's not a good time, I completely understand.

Happy to answer any questions about the opportunity.

Best regards,
[Your Name]
```

**Email 3 (Day 14):** Final follow-up
```markdown
Hi [Contact Name],

This will be my last note - I don't want to clog your inbox!

If you're interested in discussing [opportunity], I'm here. If not, best of luck with your site!

Best regards,
[Your Name]
```

**Outreach strategy by difficulty:**

1. **Easy (Resource/Directory):**
   - Focus on value to their audience
   - Emphasize relevance to existing content
   - Keep email short and scannable
   - Expected response: 50-70%

2. **Medium (Guest Posts, Mentions):**
   - Research specific recent posts
   - Propose specific topics they'd like
   - Show understanding of their audience
   - Expected response: 20-40%

3. **Hard (Journalists, Major Publications):**
   - Offer expert insight or exclusive data
   - Pitch news angles, not just promotion
   - Multiple contact channels (email + LinkedIn)
   - Expected response: 5-15%

**After execution:**

1. **Review emails** (~20 minutes)
   - Check personalization accuracy
   - Verify contact information
   - Validate subject lines and CTA
   - Approve tone and messaging

2. **Send emails** (~30-60 minutes manual or automated)
   - Can send manually via Gmail (recommended for personalization)
   - Or use email automation tool (scheduled sending)
   - Stagger sending over 3-5 days (better delivery rates)

3. **Track responses** (~5 minutes per day)
   - Monitor email responses
   - Log positive responses and link placements
   - Note rejections and reasons
   - Follow up with non-responders at day 7 and 14

4. **Implement links** (as they come in)
   - Verify links are live and correct
   - Ensure proper anchor text
   - Track link placement
   - Monitor for 90 days

5. **Report results** (30 days after campaign)
   - Count links acquired
   - Measure referring traffic
   - Calculate link value
   - Document for case study

**Email sending best practices:**

- **Stagger emails:** Send 5-10 per day over 1-2 weeks (better deliverability)
- **Personalize:** Use contact name, reference specific content
- **Test subject lines:** A/B test subject lines for better open rates
- **Track opens/clicks:** Use email tracking (Outlook, Gmail, or third-party)
- **Follow up:** 3-email sequence gets better results than 1-off emails
- **Timing:** Send emails Tuesday-Thursday, 9-11am (local time if possible)

**Response tracking template:**
```markdown
| Prospect | Sent | Opened | Clicked | Responded | Link Placed | Link Quality | Notes |
|----------|------|--------|---------|-----------|------------|-------------|-------|
| Site1.com | Day 1 | Yes | Yes | Yes | Yes | DA 65 | Live & indexed |
| Site2.com | Day 1 | Yes | No | No | - | - | Sent follow-up |
| Site3.com | Day 2 | No | - | No | - | - | Try again in 30d |
```

**Campaign success metrics:**

- **Open rate:** 30-50% (industry average)
- **Click rate:** 5-15% (of opens)
- **Response rate:** 10-30%
- **Conversion rate:** 30-50% (of responses to link placement)
- **Overall success rate:** 3-15% (opens → links placed)

**Expected outcomes per 100 prospects:**
- 30-50 emails opened
- 5-15 click-throughs
- 10-30 responses
- 5-10 links acquired
- **5-10% overall conversion**

**Employee next steps:**
1. Review all 50-100 outreach emails (30-40 min)
2. Customize any emails that need personalization
3. Schedule email sending (stagger over 1-2 weeks)
4. Send initial outreach emails
5. Monitor responses daily
6. Send follow-ups at day 7 and 14
7. Track link placements as they come in
8. Report results at 30, 60, and 90 days

**Campaign timeline:**
- Email generation: 10-12 minutes
- Review: 30-40 minutes
- Email sending: 1-2 weeks (staggered)
- Response window: 7-21 days
- Link placement: 7-30 days (from acceptance)
- Results measurement: 30-90 days

**Important notes:**
- These are templates/starting points (personalize before sending)
- Always verify contact information is current
- Monitor email deliverability and adjust if needed
- Don't spam - personalize and space out emails
- Focus on value to prospect, not just getting a link
- Track everything for optimization and future campaigns

**This is PHASE 3** - Systematic link acquisition through automated outreach campaign management and response tracking.

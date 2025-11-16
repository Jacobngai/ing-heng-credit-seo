# Your First Client - Complete Onboarding Walkthrough

**Time:** 90 minutes (30 min AI + 60 min your review)
**Outcome:** Client website live with 10 blog posts ready to publish

---

## What You'll Do

```
Step 1: Collect client info (5 min) → questionnaire
Step 2: Run onboarding command (2 min) → AI generates drafts
Step 3: Wait for AI (20 min) → AI creates 11 files
Step 4: Review keyword research (15 min) → approve or reject
Step 5: Review personas (15 min) → approve or reject
Step 6: Review brief (10 min) → approve or reject
Step 7: Run finalization (5 min) → website goes live
Step 8: Review first 10 blogs (20 min) → approve best ones
```

**Total:** 30 min AI time + 60 min your time = 90 minutes

---

## Practice Client

We'll use a **fictional client** so you can practice safely:

```
Client Name: Peak Construction Equipment
Industry: Construction equipment rental and financing
Location: Klang Valley, Malaysia
Services:
- Excavator rental and sales
- Forklift leasing
- Construction equipment financing
Target Audience:
- Contractors (need equipment for projects)
- Logistics companies (need forklifts)
- Construction firms (need financing)
Languages: English, Malay, Chinese
```

---

## STEP 1: Collect Client Information (5 minutes)

### The 30-Question Questionnaire

Open your text editor and answer these for Peak Construction:

**BUSINESS BASICS**
```
1. Business name: Peak Construction Equipment Sdn Bhd
2. Industry: Construction equipment rental and financing
3. Main services: Excavator rental, forklift leasing, equipment financing
4. Location: Klang Valley, Malaysia
5. Years in business: 15 years
```

**TARGET AUDIENCE**
```
6. Who are your customers?
   - Contractors (small to mid-size)
   - Construction companies
   - Logistics companies

7. What problems do they have?
   - Need equipment but can't afford to buy
   - Need financing with flexible terms
   - Need reliable rental service

8. What do they search for online?
   - "excavator rental KL"
   - "forklift financing Malaysia"
   - "construction equipment loan"
```

**SERVICES & PRODUCTS**
```
9. Main service categories:
   - Heavy equipment rental (excavators, bulldozers)
   - Warehouse equipment (forklifts, pallet jacks)
   - Equipment financing (loans, hire-purchase)

10. Top 5 equipment types:
    1. Excavators
    2. Forklifts
    3. Bulldozers
    4. Cranes
    5. Prime movers
```

**COMPETITORS**
```
11. Main competitors (3-5):
    - Hiap Teck Venture Berhad
    - Hewaco Sdn Bhd
    - Hup Soon Construction

12. Their websites:
    - hiapteck.com.my
    - hewaco.com.my
    - hupsoon.com
```

**BRAND & VOICE**
```
13. Brand personality: Professional, trustworthy, helpful
14. Tone of voice: Friendly but expert, not too technical
15. What makes you different:
    - 24-hour approval for financing
    - Flexible payment terms
    - Free equipment maintenance during rental
```

**LANGUAGES**
```
16. Primary language: English
17. Secondary languages: Bahasa Malaysia, Mandarin Chinese
18. Which language gets most traffic: English (60%), Malay (25%), Chinese (15%)
```

**SEO GOALS**
```
19. Monthly lead goal: 50 qualified leads
20. Target revenue from SEO: RM500K/month in equipment financing
21. Timeline: 6 months to significant results
```

**Save this as:** `clients/peak-construction/questionnaire.txt`

---

## STEP 2: Run Onboarding Command (2 minutes)

### Open Your Terminal

```bash
# Navigate to project folder
cd /path/to/ing-heng-credit-seo

# Run onboarding command
claude /onboard-client peak-construction
```

### What Happens Next

```
🤖 AI Agent starts working...

[00:00] Reading questionnaire.txt...
[00:30] Researching competitors on Google...
[02:00] Analyzing top-ranking pages for target keywords...
[05:00] Generating keyword research (English)...
[08:00] Generating keyword research (Malay)...
[11:00] Generating keyword research (Chinese)...
[14:00] Creating persona profiles...
[17:00] Writing comprehensive brief...
[20:00] ✅ Complete!

Files created in: clients/peak-construction/
```

**You wait:** 20 minutes (go get coffee ☕)

---

## STEP 3: Check What Was Created (1 minute)

### Verify Files Exist

```bash
ls -la clients/peak-construction/

# You should see:
keyword-research/D/
  ├── primary-keywords-en.md
  ├── primary-keywords-zh.md
  ├── primary-keywords-ms.md
  ├── long-tail-keywords.md
  └── competitor-analysis.md

persona-idea/D/
  ├── contractor-chen.md
  ├── logistics-manager-lee.md
  ├── construction-director-david.md
  ├── fleet-manager-mary.md
  └── entrepreneur-ahmad.md

brief-draft/D/
  └── brief.md
```

**Total:** 11 draft files created

**D/ means DRAFT** - AI created these, you haven't approved yet

---

## STEP 4: Review Keyword Research (15 minutes)

### Open the First File

```bash
cat clients/peak-construction/keyword-research/D/primary-keywords-en.md
```

### What to Look For

**Good Signs** ✅
- Keywords match the business (excavator, forklift, financing)
- Search volumes make sense (100-5,000 per month)
- Competition level is appropriate (not too hard)
- Includes local terms (Malaysia, KL, Selangor)

**Bad Signs** ❌
- Random unrelated keywords
- Search volumes too low (<10/month)
- Competition too high (dominated by huge brands)
- Wrong language or location

### Example of GOOD Keyword Research

```markdown
# Primary Keywords - English

## Category 1: Excavator Rental
1. excavator rental malaysia (Monthly: 880, Difficulty: Medium)
2. excavator for rent klang valley (Monthly: 320, Difficulty: Low)
3. hire excavator selangor (Monthly: 210, Difficulty: Low)

## Category 2: Equipment Financing
4. excavator financing malaysia (Monthly: 170, Difficulty: Medium)
5. construction equipment loan (Monthly: 260, Difficulty: Medium)
6. heavy equipment hire purchase (Monthly: 140, Difficulty: Low)

## Category 3: Forklift Leasing
7. forklift rental kl (Monthly: 480, Difficulty: Low)
8. forklift leasing malaysia (Monthly: 170, Difficulty: Medium)
9. warehouse forklift rental (Monthly: 210, Difficulty: Low)
```

**This is GOOD** because:
- ✅ All keywords relate to Peak's services
- ✅ Monthly volumes are realistic (100-1000)
- ✅ Mix of high and low competition
- ✅ Includes local terms (Malaysia, KL, Selangor)

### Decision Time

**If keywords look GOOD:**
```bash
# Move from Draft to Approved
mv clients/peak-construction/keyword-research/D/primary-keywords-en.md \
   clients/peak-construction/keyword-research/A/primary-keywords-en.md
```

**If keywords look BAD:**
```bash
# Move to Failed (AI will learn)
mv clients/peak-construction/keyword-research/D/primary-keywords-en.md \
   clients/peak-construction/keyword-research/F/primary-keywords-en.md
```

### Repeat for All 3 Language Files

```bash
# Review Malay keywords
cat clients/peak-construction/keyword-research/D/primary-keywords-ms.md
# Approve if good
mv clients/peak-construction/keyword-research/D/primary-keywords-ms.md \
   clients/peak-construction/keyword-research/A/

# Review Chinese keywords
cat clients/peak-construction/keyword-research/D/primary-keywords-zh.md
# Approve if good
mv clients/peak-construction/keyword-research/D/primary-keywords-zh.md \
   clients/peak-construction/keyword-research/A/
```

**Minimum Required:** Approve at least 3 files (one per language)

---

## STEP 5: Review Personas (15 minutes)

### Open First Persona

```bash
cat clients/peak-construction/persona-idea/D/contractor-chen.md
```

### What to Look For

**Good Persona** ✅
```markdown
# Persona: Contractor Chen Wei

## Demographics
- Age: 35-45
- Job Title: Construction Project Manager
- Company Size: 5-20 employees
- Location: Klang Valley
- Income: RM8,000-15,000/month

## Pain Points
1. Need equipment but can't afford to buy
2. Projects are short-term (3-6 months)
3. Cash flow is tight
4. Need equipment quickly (48 hours)

## Search Behavior
- Searches: "excavator rental selangor", "cheap excavator hire"
- Devices: Mobile (70%), Desktop (30%)
- Time: Weekday evenings (after work)

## Content Needs
- Rental pricing guides
- Equipment comparison articles
- Financing vs renting articles
- Project planning tips
```

**This is GOOD** because:
- ✅ Specific and realistic
- ✅ Clear pain points
- ✅ Matches Peak's target audience
- ✅ Actionable search behavior
- ✅ Content needs are clear

**Bad Persona** ❌
```markdown
# Persona: General Buyer

## Demographics
- Age: 20-60
- Job: Various
- Location: Malaysia
- Income: Various

## Pain Points
- Needs equipment

## Search Behavior
- Searches online
```

**This is BAD** because:
- ❌ Too vague and generic
- ❌ No specific pain points
- ❌ Can't create targeted content
- ❌ Useless for SEO strategy

### Approve or Reject

**If persona is specific and useful:**
```bash
mv clients/peak-construction/persona-idea/D/contractor-chen.md \
   clients/peak-construction/persona-idea/A/
```

**If persona is too vague:**
```bash
mv clients/peak-construction/persona-idea/D/contractor-chen.md \
   clients/peak-construction/persona-idea/F/
```

### Review All 5 Personas

Do this for each:
- contractor-chen.md
- logistics-manager-lee.md
- construction-director-david.md
- fleet-manager-mary.md
- entrepreneur-ahmad.md

**Minimum Required:** Approve at least 3 personas

---

## STEP 6: Review Brief (10 minutes)

### Open the Brief

```bash
cat clients/peak-construction/brief-draft/D/brief.md
```

### What to Look For

**Good Brief** ✅
```markdown
# Client Brief: Peak Construction Equipment

## Business Overview
Peak Construction Equipment is a 15-year-old equipment rental and financing company based in Klang Valley, Malaysia. They specialize in heavy equipment rental (excavators, bulldozers) and flexible financing solutions for contractors and construction companies.

## Target Market
- Primary: Small to mid-size contractors (5-50 employees)
- Secondary: Construction companies needing financing
- Tertiary: Logistics companies needing warehouse equipment

## Services (Priority Order)
1. Excavator rental (highest demand)
2. Equipment financing/hire-purchase (highest margin)
3. Forklift leasing (steady demand)
4. Bulldozer and crane rental (project-based)

## Unique Selling Points
1. 24-hour financing approval (fastest in market)
2. Flexible payment terms (customize to cash flow)
3. Free maintenance during rental period
4. 15 years experience and reliability

## SEO Strategy
- Focus: Transactional keywords (rental, financing, leasing)
- Content: 60% rental guides, 30% financing guides, 10% tips
- Goal: 50 qualified leads/month within 6 months
```

**This is GOOD** because:
- ✅ Clear business description
- ✅ Specific target audience
- ✅ Prioritized services
- ✅ Clear USPs
- ✅ Actionable SEO strategy

### Approve the Brief

```bash
mv clients/peak-construction/brief-draft/D/brief.md \
   clients/peak-construction/brief-draft/A/
```

**This file is REQUIRED** - You must approve exactly 1 brief.

---

## STEP 7: Verify Approvals (1 minute)

### Check You Have Minimum Required

```bash
# Count approved keyword files (need 3+)
ls -1 clients/peak-construction/keyword-research/A/*.md | wc -l
# Should show: 3 or more

# Count approved personas (need 3+)
ls -1 clients/peak-construction/persona-idea/A/*.md | wc -l
# Should show: 3 or more

# Check brief exists (need 1)
ls -1 clients/peak-construction/brief-draft/A/brief.md
# Should show: brief.md
```

**If you see these numbers, you're ready to finalize!**

---

## STEP 8: Finalize Client (5 minutes)

### Run Finalization Command

```bash
claude /finalize-client peak-construction
```

### What Happens Now (Big Magic! ✨)

```
🤖 AI Agent finalizing client...

[00:00] Validating approved files...
       ✅ 3 keyword files found
       ✅ 4 persona files found
       ✅ 1 brief file found

[00:30] Converting to production JSON...
       ✅ brief.json created
       ✅ keyword-strategy.json created
       ✅ personas/contractor-chen.json created
       ✅ personas/logistics-manager-lee.json created
       ✅ personas/construction-director-david.json created
       ✅ personas/fleet-manager-mary.json created

[01:00] Generating website structure...
       ✅ Homepage created (3 languages)
       ✅ Services pages created
       ✅ Equipment pages created
       ✅ Contact form configured

[02:00] Creating GitHub repository...
       ✅ Repo: peak-construction-website
       ✅ Code pushed to main branch

[03:00] Deploying to Vercel...
       ✅ EN site: https://peak-construction-en.vercel.app
       ✅ MS site: https://peak-construction-ms.vercel.app
       ✅ ZH site: https://peak-construction-zh.vercel.app

[04:00] Generating first 10 blog posts...
       ✅ 10 posts created (drafts/D/)

[05:00] ✅ Complete! Client is now ACTIVE.
```

**Your websites are LIVE!** 🎉

---

## STEP 9: Check Your Live Websites (2 minutes)

### Visit Each Site

**English:** https://peak-construction-en.vercel.app
```
- Homepage ✅
- Services page ✅
- Equipment pages ✅
- Contact form ✅
- Blog section (empty - you'll publish posts next)
```

**Malay:** https://peak-construction-ms.vercel.app
```
- Same structure, translated to Bahasa Malaysia
```

**Chinese:** https://peak-construction-zh.vercel.app
```
- Same structure, translated to Mandarin Chinese
```

**All working? Great!** 🎉

---

## STEP 10: Review First 10 Blog Posts (20 minutes)

### Check What Was Created

```bash
ls -la clients/peak-construction/drafts/D/

# You'll see 10 blog post drafts:
2025-11-07-excavator-rental-guide-en.md
2025-11-07-excavator-rental-guide-zh.md
2025-11-07-excavator-rental-guide-ms.md
2025-11-07-forklift-financing-tips-en.md
... (and 6 more)
```

### Review Your First Blog Post (30 seconds)

```bash
cat clients/peak-construction/drafts/D/2025-11-07-excavator-rental-guide-en.md
```

### Quick Quality Check

**Scan for these (30 seconds):**

1. **Title makes sense?** ✅
   - "Complete Guide to Excavator Rental in Malaysia"

2. **Keywords included?** ✅
   - "excavator rental", "Malaysia", "Klang Valley"

3. **Content is useful?** ✅
   - Has actual tips, not just sales pitch

4. **No obvious errors?** ✅
   - Grammar is good
   - Facts are accurate

5. **Matches brand voice?** ✅
   - Professional but friendly
   - Not too technical

**Good = Approve. Bad = Reject.**

### Approve Good Ones

```bash
# Approve this post
mv clients/peak-construction/drafts/D/2025-11-07-excavator-rental-guide-en.md \
   clients/peak-construction/drafts/A/
```

### Review All 10 Posts

Spend 30 seconds on each:
- Quick scan
- Approve if good (move to A/)
- Reject if bad (move to F/)

**Goal:** Approve at least 6-7 out of 10 (70%+ approval rate)

---

## STEP 11: Publish Your First Posts (2 minutes)

### Run Publish Command

```bash
claude /publish-approved
```

### What Happens

```
🤖 Publishing approved content...

[00:00] Scanning for approved posts...
       ✅ Found 7 approved posts

[00:30] Generating final blog posts with schema...
       ✅ 7 posts generated

[01:00] Deploying to websites...
       ✅ EN site: 2 posts published
       ✅ MS site: 3 posts published
       ✅ ZH site: 2 posts published

[01:30] Updating sitemaps...
       ✅ Sitemaps updated

[02:00] ✅ Complete! Posts are LIVE.
```

### Check Your Live Blog

Visit: https://peak-construction-en.vercel.app/blog

**You should see your published posts!** 🎉

---

## Congratulations! 🎉

You just:
- ✅ Onboarded your first client (30 min AI + 60 min review)
- ✅ Approved keyword research, personas, and brief
- ✅ Created 3 live websites (English, Malay, Chinese)
- ✅ Published your first 7 blog posts
- ✅ Learned the D/A/F workflow

**Peak Construction Equipment is now live with professional SEO!**

---

## What You Learned

### The D/A/F Workflow
```
AI Creates → D/ (Draft)
You Review → 30 seconds per item
Good → A/ (Approved) → Auto-publish
Bad → F/ (Failed) → AI learns
```

### Time Breakdown
- AI work: 30 minutes (you wait)
- Your review: 60 minutes (active work)
- **Total: 90 minutes for complete client onboarding**

### What's Next?

**Tomorrow:**
- Generate 3 more blog posts for Peak Construction
- Practice the daily 15-minute workflow
- See `../2.2-daily-workflow/15-minute-daily-routine.md`

**This Week:**
- Onboard 2-3 real clients (repeat this process)
- Build muscle memory for 30-second reviews
- Achieve 70%+ approval rate

**This Month:**
- Scale to 5-10 clients
- See traffic start to grow
- Generate first SEO leads

---

**Ready for the daily workflow?** → `../2.2-daily-workflow/15-minute-daily-routine.md`

**Want to practice more?** → Onboard another fictional client!

**Questions?** → Check `../../9-reference/9.4-troubleshooting/`

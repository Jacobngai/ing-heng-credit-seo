# 15-Minute Daily Routine (Managing 50 Clients)

**Time:** 15 minutes total
**Frequency:** Once per day (morning recommended)
**Outcome:** 150 blog posts reviewed and published

---

## The Daily Workflow (Overview)

```
9:00 AM  - Run daily blog generation (15 min AI work)
9:15 AM  - Review 150 drafts (15 min your work, 30 sec each)
9:30 AM  - Publish approved posts (5 min automated)
9:35 AM  - Done for the day! ✅
```

**Total time:** 35 minutes (but only 15 minutes is active work for you)

---

## STEP 1: Generate Daily Blogs (2 minutes your time, 15 min AI time)

### Open Terminal

```bash
cd /path/to/ing-heng-credit-seo
```

### Run Generation Command

```bash
claude /generate-daily-blogs
```

### What Happens

```
🤖 AI scanning for active clients...

✅ Found 50 active clients

🤖 Generating content for each client...

[00:00] Client 1/50: Peak Construction
        → Researching trending keywords...
        → Generating 3 blog posts (EN/MS/ZH)...
        → Running quality check...
        → ✅ 3 posts created (drafts/D/)

[00:15] Client 2/50: Apex Machinery
        → Generating 3 blog posts...
        → ✅ 3 posts created

[00:30] Client 3/50: Global Logistics
        → Generating 3 blog posts...
        → ✅ 3 posts created

... (continues for all 50 clients)

[15:00] ✅ Complete!

Summary:
- Total posts generated: 150 (50 clients × 3 languages)
- Passed quality check: 145 (97%)
- Failed quality check: 5 (3%, moved to F/)
- Ready for your review: 145 posts in D/ folders
```

**Go get coffee ☕ while AI works (15 minutes)**

---

## STEP 2: Review All 150 Posts (15 minutes)

### The 30-Second Review Method

For EACH post, spend exactly 30 seconds:

**0-10 seconds: Scan title and keywords**
```
✅ Title makes sense?
✅ Keywords are relevant?
✅ Matches client's business?
```

**10-20 seconds: Skim content structure**
```
✅ Has introduction?
✅ Has clear sections?
✅ Has conclusion?
✅ Length looks good (800-1500 words)?
```

**20-30 seconds: Quick quality check**
```
✅ Grammar looks good?
✅ No placeholder text [FILL THIS IN]?
✅ Has call-to-action?
✅ Matches brand voice?
```

**Decision (at 30 seconds):**
- **Good = Approve** (move to A/)
- **Bad = Reject** (move to F/)

---

### Using the Quick Review Script

We've created a script to help you review faster:

```bash
# Run the review assistant
node scripts/review-assistant.js
```

### What You'll See

```
┌─────────────────────────────────────────────────────────┐
│  DRAFT REVIEW ASSISTANT                                 │
│  150 posts ready for review                             │
│  Target: 15 minutes (30 sec each)                       │
└─────────────────────────────────────────────────────────┘

📝 Post 1/150
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Client: Peak Construction
File: 2025-11-07-excavator-rental-tips-en.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Title: "Top 10 Excavator Rental Tips for Malaysian Contractors"
Keywords: excavator rental, malaysia, contractor tips
Word Count: 1,247 words
Language: English

[First 200 words shown here...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️  Time: 00:05 seconds

Your decision:
[A] Approve (move to A/)
[F] Fail (move to F/)
[S] Skip for now
[Q] Quit and save progress

Choice:
```

### Your Review Process

**Type A** (Approve) if:
- ✅ Title is clear and keyword-rich
- ✅ Content is useful and informative
- ✅ Grammar is good (no major errors)
- ✅ Matches client's brand voice
- ✅ Has clear call-to-action

**Type F** (Fail) if:
- ❌ Title is too generic or misleading
- ❌ Content is thin or useless
- ❌ Major grammar errors
- ❌ Wrong tone for client
- ❌ No call-to-action or value

**Type S** (Skip) if:
- 🤔 You're unsure and need more time
- 🤔 Need to check with client
- 🤔 Want second opinion

---

### Review Speed Tips

**To hit 30 seconds per post:**

1. **Don't read everything** - Skim, don't read word-by-word
2. **Trust your gut** - First impression is usually right
3. **Use patterns** - After 20 posts, you'll spot good vs. bad instantly
4. **Batch by client** - Review all posts for one client at once
5. **Use shortcuts** - Just press 'A' or 'F', don't overthink

**Most common mistake:** Spending 2-3 minutes per post
**Fix:** Set a 30-second timer for each post

---

### Target Approval Rate

**Your goal: 80%+ approval rate**

```
Out of 150 posts:
- Approve: 120+ posts (80%+)
- Reject: 30 posts or less (20%)
```

**If your approval rate is:**
- **90%+** - Maybe you're too lenient? Be more critical.
- **80-90%** - Perfect! ✅
- **70-80%** - Good, room for improvement
- **60-70%** - AI needs training, or you're too strict
- **Below 60%** - Problem! Check AI settings or review criteria

---

### Real Example Review

```
📝 Post: "Complete Guide to Excavator Financing in Malaysia"
Client: Peak Construction
Language: English

[SCAN - 0-10 seconds]
✅ Title: Clear, includes "excavator financing Malaysia"
✅ Keywords: All relevant - financing, excavator, malaysia, loan

[SKIM - 10-20 seconds]
✅ Structure:
   - Introduction (problem statement)
   - 5 financing options explained
   - Comparison table
   - How to apply section
   - FAQ
   - Call-to-action
✅ Length: 1,450 words (good)

[CHECK - 20-30 seconds]
✅ Grammar: Clean, professional
✅ Brand voice: Helpful and expert (matches Peak)
✅ CTA: "Get 24-hour financing approval - Contact Peak Construction"
✅ Value: Actually useful for contractors

⏱️ Time: 28 seconds

Decision: APPROVE ✅
```

**Type 'A' and move to next post**

---

### Batch Review by Client (Faster Method)

Instead of random order, group by client:

```bash
# Review all posts for one client
node scripts/review-assistant.js --client="peak-construction"

# This shows you all 3 posts (EN/MS/ZH) for Peak Construction
# Faster because you're in "Peak mode" - know their voice, products, etc.
```

**Benefit:** Context switching is faster
**Time saved:** 5-10 seconds per post = 12-30 minutes total

---

## STEP 3: Check Your Approval Stats (1 minute)

### See Your Performance

```bash
# After reviewing all 150 posts, see stats
node scripts/review-stats.js
```

### Example Output

```
┌─────────────────────────────────────────────────────────┐
│  DAILY REVIEW STATS - 2025-11-07                        │
└─────────────────────────────────────────────────────────┘

Total Reviewed:  150 posts
Approved:        122 posts (81.3%) ✅
Rejected:         28 posts (18.7%)
Skipped:           0 posts

Time Taken:      15 minutes 42 seconds
Average per post: 31 seconds

Top Performing Clients:
1. Peak Construction:     100% approval (3/3)
2. Apex Machinery:         100% approval (3/3)
3. Global Logistics:       100% approval (3/3)
...

Lowest Performing Clients:
48. Budget Rentals:        33% approval (1/3)
49. Quick Hire:            33% approval (1/3)
50. Cheap Equipment:        0% approval (0/3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recommendations:
- ✅ Great job! 81.3% approval rate
- 💡 Review "Budget Rentals" brief - AI may need better context
- 💡 Check "Cheap Equipment" - 0% approval is unusual
```

**Target:** 80%+ approval rate

---

## STEP 4: Publish Approved Posts (2 minutes)

### Run Publish Command

```bash
claude /publish-approved
```

### What Happens

```
🤖 Publishing approved content...

[00:00] Scanning for approved posts...
       ✅ Found 122 approved posts across 50 clients

[00:30] Generating final blog posts...
       ✅ Adding schema markup...
       ✅ Optimizing meta tags...
       ✅ Generating social cards...
       ✅ 122 posts finalized

[01:00] Deploying to websites (parallel)...
       ✅ Peak Construction: 3 posts deployed
       ✅ Apex Machinery: 3 posts deployed
       ✅ Global Logistics: 3 posts deployed
       ... (continues for all clients with approved posts)

[04:00] Updating sitemaps and RSS feeds...
       ✅ 150 sitemaps updated
       ✅ 150 RSS feeds updated

[05:00] ✅ Complete!

Summary:
- Posts published: 122
- Websites updated: 41 (some clients had 0% approval)
- Sitemaps updated: 150
- Google Search Console pinged: 150

All posts are now LIVE! 🎉
```

---

## STEP 5: Verify Random Sample (Optional, 2 minutes)

### Check 5 Random Published Posts

```bash
# Get 5 random URLs from today's publish
node scripts/get-random-urls.js --count=5

# Output:
https://peak-construction-en.vercel.app/blog/excavator-financing-guide
https://apex-machinery-ms.vercel.app/blog/panduan-pajak-bulldozer
https://global-logistics-zh.vercel.app/blog/叉车租赁指南
https://warehouse-solutions-en.vercel.app/blog/forklift-safety-tips
https://construction-finance-en.vercel.app/blog/equipment-loan-guide
```

### Quick Spot Check (30 seconds each)

Open each URL and verify:
- ✅ Page loads correctly
- ✅ Content displays properly
- ✅ Images show up
- ✅ Links work
- ✅ No broken elements

**If all 5 look good, the other 117 are likely fine too.**

---

## Daily Routine Summary

### Time Breakdown

```
Step 1: Generate blogs        2 min (you) + 15 min (AI)
Step 2: Review 150 posts      15 min (you)
Step 3: Check stats            1 min (you)
Step 4: Publish approved       2 min (you) + 5 min (AI)
Step 5: Spot check (optional)  2 min (you)

Total active time for you: 22 minutes
Total waiting for AI: 20 minutes
Total elapsed time: 42 minutes
```

**But you only work 15 minutes reviewing + 2 minutes commands = 17 minutes active**

---

## Weekly Tracker

Track your performance over time:

```
┌─────────────────────────────────────────────────────────┐
│  WEEKLY PERFORMANCE                                     │
└─────────────────────────────────────────────────────────┘

Monday    11/04: 150 posts, 78% approval, 16 min review
Tuesday   11/05: 150 posts, 82% approval, 15 min review ✅
Wednesday 11/06: 150 posts, 84% approval, 14 min review ✅
Thursday  11/07: 150 posts, 81% approval, 15 min review ✅
Friday    11/08: 150 posts, 85% approval, 14 min review ✅

Weekly Average: 82% approval ✅
Weekly Time: 74 minutes review (14.8 min/day average)

Target hit: ✅ Yes (80%+ approval, <15 min/day)
```

---

## What If Something Goes Wrong?

### Issue 1: Review Taking Too Long (>20 minutes)

**Problem:** You're spending 1-2 minutes per post
**Fix:**
```
1. Set a physical timer for 30 seconds
2. When it beeps, make a decision (A or F)
3. Don't overthink - trust your gut
4. After 50 posts, you'll naturally speed up
```

### Issue 2: Approval Rate Too Low (<70%)

**Problem:** You're rejecting too many posts
**Fix:**
```
1. Check if you're being too strict
2. Review rejection criteria
3. AI might need better client briefs
4. Update persona definitions
```

### Issue 3: Approval Rate Too High (>95%)

**Problem:** You might be too lenient
**Fix:**
```
1. Check rejected posts - are they actually bad?
2. Tighten your quality standards
3. Remember: Bad content hurts SEO
4. It's okay to reject mediocre content
```

### Issue 4: AI Failing Quality Check Often

**Problem:** More than 10% of posts fail pre-publishing quality check
**Fix:**
```
1. Check DataForSEO API quota (might be rate-limited)
2. Verify client briefs are detailed enough
3. Check if personas are specific enough
4. Review keyword strategy quality
```

---

## Pro Tips for Speed

1. **Review at the same time daily** - Build routine, get faster
2. **Use keyboard shortcuts** - 'A' for approve, 'F' for fail
3. **Batch by client** - Review all 3 for one client together
4. **Trust first impression** - Usually correct
5. **Track your time** - Compete with yourself to get faster

**Most people achieve:**
- Week 1: 25-30 minutes
- Week 2: 18-22 minutes
- Week 3: 15-18 minutes ✅
- Week 4: 12-15 minutes ✅ (expert level)

---

## Tomorrow's Workflow

**Same routine:**
1. Generate blogs (15 min AI)
2. Review 150 posts (15 min you)
3. Publish approved (5 min AI)

**Repeat Monday-Friday**

**Result:**
- 750 posts/week reviewed
- 600+ posts/week published (80% approval)
- 2,400+ posts/month published
- 50 clients served
- 1 hour 15 minutes active work per week

---

## Next Steps

**After mastering daily workflow:**
- Learn weekly tasks → `../2.3-weekly-tasks/30-minute-weekly-routine.md`
- Learn monthly tasks → `../2.4-monthly-tasks/2-hour-monthly-routine.md`
- Scale to 100 clients → `../../7-advanced-topics/7.1-scaling-strategies/`

**Questions?** → `../../9-reference/9.4-troubleshooting/common-errors.md`

**Need checklist?** → `../../9-reference/9.2-checklists/content-review-checklist.md`

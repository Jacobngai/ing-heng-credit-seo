# QUICK START: Spam Removal Guide
## 5-Minute Implementation for Ing Heng Credit

**Ready to deploy?** Follow these steps in order.

---

## STEP 1: Verify Files Changed ✅

Check these files were updated:

```bash
# Check robots.txt
cat clients/ing-heng/website/public/robots.txt | grep "immediate-edge"

# Check vercel.json
cat clients/ing-heng/website/vercel.json | grep "410-gone"

# Check 410 page exists
ls clients/ing-heng/website/src/pages/410-gone.astro
```

**Expected output:** All files should exist and contain spam blocking rules.

---

## STEP 2: Deploy to Vercel (3 Projects) 🚀

```bash
cd clients/ing-heng/website

# 1. Deploy ENGLISH (inghengcredit.com)
echo '{"projectId":"prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes

# 2. Deploy MALAY (kreditloan.my)
echo '{"projectId":"prj_eKJtQcTcOd69sER92xq8NeS1SD4y","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes

# 3. Deploy CHINESE (inghengcredit.my)
echo '{"projectId":"prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7","orgId":"team_ZRACGuujUQkB6IRfNtWpe0T6"}' > .vercel/project.json
vercel --prod --yes
```

**Wait:** Each deployment takes 2-3 minutes.

---

## STEP 3: Test Spam Blocking ✅

```bash
# Test main domain
DOMAIN=https://www.inghengcredit.com node test-spam-blocking.js

# Or manually test with curl
curl -I https://www.inghengcredit.com/immediate-edge-review-in-the-uk-legit-or-a-scam-app-545/
# Should return: HTTP/2 410
```

**Expected:** All spam URLs return **410 Gone**.

---

## STEP 4: Submit to Google Search Console 🗑️

### 4A. Open Google Search Console

Go to: https://search.google.com/search-console?resource_id=sc-domain:inghengcredit.com

### 4B. Navigate to Removals

1. Click **Removals** (left sidebar)
2. Click **New Request** (top right)
3. Select **Temporary removals**

### 4C. Submit Each URL

Open `spam-urls-for-google-removal.txt` and copy-paste each URL:

```
https://inghengcredit.com/immediate-edge-review-in-the-uk-legit-or-a-scam-app-545/
https://inghengcredit.com/immediate-edge-review-in-the-uk-legit-or-a-scam-app-939/
https://inghengcredit.com/category/foreks-brokery-2/
...
(31 URLs total)
```

**Time required:** 5-10 minutes for all 31 URLs.

---

## STEP 5: Monitor Progress 📊

### Week 1: Check Removals Status

Go to: https://search.google.com/search-console
- Click **Removals**
- Status should change from "Pending" → "Removed"

### Week 2-4: Check Performance Report

Go to: Performance > Queries
- Search for: "immediate edge"
- Impressions should drop to **0**

### Month 2: Celebrate Clean Index 🎉

All spam queries should have **0 impressions**.

---

## TROUBLESHOOTING

### Problem: 410 page not showing

**Solution:**
```bash
# Rebuild and redeploy
cd clients/ing-heng/website
npm run build
vercel --prod --yes
```

### Problem: GSC removal not working

**Check:**
1. URL returns 410 status (not 404 or 200)
2. URL was submitted correctly (no typos)
3. Wait 3 days for processing

### Problem: Legitimate pages blocked

**Fix:**
1. Check vercel.json redirect rules
2. Ensure legitimate URLs NOT in spam patterns
3. Test: `curl -I https://www.inghengcredit.com/motor-insurance/`
   Should return: 200 or 301/302 (NOT 410)

---

## FILES REFERENCE

| File | Purpose |
|------|---------|
| `spam-removal-action-plan.md` | Complete 8-section implementation guide |
| `SPAM-REMOVAL-SUMMARY.md` | Executive summary |
| `spam-urls-for-google-removal.txt` | URL list for GSC |
| `test-spam-blocking.js` | Testing script |
| `QUICK-START-SPAM-REMOVAL.md` | This file |

---

## SUCCESS CHECKLIST

After deployment, verify:

- [ ] Spam URLs return 410 Gone
- [ ] Legitimate URLs still work (200/301/302)
- [ ] motor-insurance/ is accessible (NOT blocked)
- [ ] robots.txt blocks spam patterns
- [ ] 31 URLs submitted to GSC
- [ ] GSC removal requests show "Pending" status

**All checked?** You're done! Monitor for 30 days.

---

## EXPECTED TIMELINE

| Day | Action |
|-----|--------|
| Day 1 | Deploy + Submit URLs to GSC |
| Day 2-3 | GSC processes removals |
| Day 4-7 | URLs removed from Google index |
| Day 8-14 | Spam impressions drop to 0 |
| Day 15-30 | Monitor for new spam patterns |
| Day 31 | Final review and report |

---

## NEED HELP?

1. **Read:** `spam-removal-action-plan.md` (comprehensive guide)
2. **Test:** `node test-spam-blocking.js`
3. **Check:** Google Search Console > Removals

**Questions?** Review the detailed action plan for troubleshooting steps.

---

**Last Updated:** 2026-01-22
**Total Time Required:** 30-60 minutes
**Difficulty:** Easy (copy-paste commands)

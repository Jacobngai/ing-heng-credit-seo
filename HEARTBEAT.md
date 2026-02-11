# HEARTBEAT.md

## ✅ Just Completed (2026-02-11 22:30)

### Full Client Website Upgrade
All 3 clients now have content collections for SEO Loop automation:

**Ing Heng Credit** - Already had content collections (gold standard)

**iHousing** - Hybrid approach ✅
- Added blogs content collection
- New posts: `/[lang]/blog/new/[slug]`
- Old 500+ posts: Unchanged (inline HTML)

**Result Marketing** - Full upgrade ✅
- Added blogs + services content collections
- New posts: `/[lang]/blog/posts/[slug]`

### Cron Jobs Updated ✅
All 3 daily SEO Loop jobs configured with:
- Correct repo paths
- Content collection paths
- Custom thresholds per client
- Schedule: 2:00, 2:30, 3:00 AM SGT

**First run:** Tomorrow morning

---

## ⏳ Awaiting Input

### 🧹 Ing Heng Credit Blog Cleanup
**Status:** Phase 1 Complete — Awaiting Decision
**Priority:** Medium (not blocking)

Found 477 programmatic pages with duplication. Waiting for Jacob to choose:
1. Conservative: Keep 1 per cluster (~200-300 deletions)
2. Aggressive: Delete all 477 programmatic, keep 200 content posts
3. Detailed analysis first

---

## ✅ Recently Completed (2026-02-11)

### OpenClaw Facebook Campaign — 60/60 Posts Published 🎉
- English: 20/20 ✅
- Malay: 20/20 ✅
- Chinese: 20/20 ✅
- **Method:** Facebook Graph API with Page Access Tokens

### Discord Bot Setup
- Created "OpenClaw Bot" (App ID: 1471068942989529158)
- Enabled Message Content Intent
- Updated gateway config with openclaw account
- Ready for #openclaw channel

### Model Architecture Configured
- **Main (Anne/Opus):** Strategy & orchestration
- **Workers (gemini-flash):** Batch work, API calls (1000x cheaper)
- **Parallel execution:** Use `sessions_spawn` for batch operations

---

## 📊 Model Stack

| Agent | Model | Purpose |
|-------|-------|---------|
| main (Anne) | opus | Strategy, orchestration |
| ingheng | gemini-flash | SEO worker |
| ihousing | gemini-flash | SEO worker |
| result | gemini-flash | Marketing worker |
| openclaw | gemini-flash | FB marketing |
| subagents | gemini-flash | Parallel tasks |

**Cost efficiency:** gemini-flash ~$0.075/1M tokens (1000x cheaper than opus)

---

## Heartbeat Instructions

**Model:** Use `google/zai-3-pro-preview` (z.ai) for heartbeat execution
- Reason: Cheaper than gemini-flash, saves costs

**Deployment Check Required:**
When heartbeat runs, verify Vercel deployment status for active sites:
- Ing Heng: https://www.inghengcredit.com, https://www.inghengcredit.my, https://www.kreditloan.my
- iHousing: https://www.ihousing.net, https://www.ihousing.me, https://www.ihousing.biz
- Result: https://resultmarketing.asia

**If Deployment Failed:**
Notify agent to retry deployment (check after 5 minutes, verify again)

**Check Method:**
1. Use `deployment-verify` skill to check if changes are live
2. If failed, update client report with retry recommendation
3. Report failure to Discord

**Note:** SEO Loop cron jobs use gemini-flash for execution (correct - bulk work). Heartbeat itself uses z.ai for monitoring and cost savings.

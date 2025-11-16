Launch the Publishing Agent to deploy all approved content (A/ files) to production websites with automated Vercel multi-language deployment.

**What this command does:**
1. Loads Publishing Agent from `.claude/agents/publishing.md`
2. Agent executes `publishing-workflow.md` skill
3. Finds all A/ prefixed files across all clients
4. Generates final blog posts with schema markup
5. Moves to website folders (organized by language: /en/, /ms/, /zh/)
6. Git commits and pushes to GitHub (single repo, all languages)
7. **Deploys to 3 Vercel projects per client** using `vercel-multi-language-deployment.md` skill:
   - `[client-name]-en` (auto-redirects to /en/)
   - `[client-name]-ms` (auto-redirects to /ms/)
   - `[client-name]-zh` (auto-redirects to /zh/)
8. Monitors all deployments using Vercel MCP (parallel deployment status)
9. Archives published content
10. Reports deployment URLs and status

**Expected output:**
- All A/ files published to live websites (3 per client)
- Git commit and push to GitHub (single repo)
- **3 parallel Vercel deployments per client** triggered via MCP:
  - EN deployment: https://[client-name]-en.vercel.app
  - MS deployment: https://[client-name]-ms.vercel.app
  - ZH deployment: https://[client-name]-zh.vercel.app
- Deployment monitoring via Vercel MCP (tracks READY/BUILDING/ERROR states)
- Content live within 2-3 minutes (parallel deployment)
- Published files archived
- Deployment verification (all 3 URLs accessible, language redirects working)

**Usage:**
```bash
/publish-approved
```

**No arguments needed** - agent processes all A/ files across all clients automatically.

**Prerequisites:**
- Employee has reviewed and approved content (renamed D/ to A/)
- At least one A/ file exists in any client folder

**Execution time:**
- ~3-4 minutes for 1 client (3 posts → 3 deployments in parallel)
- ~5-7 minutes for 50 clients (150 posts → 150 deployments in parallel)

**What gets published:**
- All files with A/ prefix in `/clients/*/drafts/A/*.md`
- Grouped by client for efficient deployment

**After execution:**
- All A/ files moved to `/drafts/archive/`
- Content live on client websites (via Git → Vercel auto-deploy)
- All Vercel deployments verified as READY
- Sitemap and RSS feeds updated
- URLs verified accessible
- Ready for next content generation cycle

**How multi-language auto-deployment works:**
```
Approved content (A/)
  → Git commit + push (single repo)
    → Vercel MCP triggers 3 parallel deployments
      → EN project builds with PUBLIC_DEFAULT_LOCALE=en
      → MS project builds with PUBLIC_DEFAULT_LOCALE=ms
      → ZH project builds with PUBLIC_DEFAULT_LOCALE=zh
        → All 3 sites LIVE! ✅ (2-3 min)
```

**Multi-language deployment strategy:**
- **Single codebase** in GitHub (all languages in /en/, /ms/, /zh/ folders)
- **3 Vercel projects** per client (same code, different environment variables)
- **Parallel deployment** (all 3 build simultaneously, not sequentially)
- **Language-specific defaults** (EN site shows /en/ first, MS shows /ms/ first, etc.)
- **Language switcher** available on all 3 sites (users can switch between languages)
- All deployments monitored via Vercel MCP tools

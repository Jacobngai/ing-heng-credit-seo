Launch the Publishing Agent to deploy all approved content (A/ files) to production websites.

**What this command does:**
1. Loads Publishing Agent from `.claude/agents/publishing.md`
2. Agent executes `publishing-workflow.md` skill
3. Finds all A/ prefixed files across all clients
4. Loads deployment config from each client's status.json
5. Routes content to appropriate website(s) based on language
6. Generates final blog posts with schema markup
7. Moves to website folders (respecting multi-website setups)
8. Git commits and pushes to each website repo
9. Monitors Vercel auto-deployments using Vercel MCP
10. Archives published content

**Expected output:**
- All A/ files published to live websites
- Git commits and pushes for each website repo
- Vercel auto-deployments triggered automatically
- Deployment monitoring via Vercel MCP (tracks READY/BUILDING/ERROR states)
- Content live within 5 minutes
- Published files archived
- Deployment verification (URLs accessible, sitemaps updated)

**Usage:**
```bash
/publish-approved
```

**No arguments needed** - agent processes all A/ files across all clients automatically.

**Prerequisites:**
- Employee has reviewed and approved content (renamed D/ to A/)
- At least one A/ file exists in any client folder

**Execution time:**
- ~5 minutes for 50 clients (150 posts)

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

**How auto-deployment works:**
```
Approved content (A/)
  → Git commit + push
    → GitHub webhook triggers Vercel
      → Vercel builds & deploys
        → Content LIVE! ✅
```

**Multi-website support:**
- Agent automatically routes content by language
- Each website gets its own git push
- Each website deploys independently
- All deployments monitored via Vercel MCP

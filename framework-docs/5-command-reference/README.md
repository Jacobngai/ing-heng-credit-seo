# Command Reference Documentation

This folder contains detailed reference documentation for all 17 slash commands in the SEO Framework.

## Quick Navigation

### Phase 1: Client Onboarding (Commands 1-2)
- [01-onboard-client.md](./01-onboard-client.md) - Generate keyword research, personas, and strategic brief
- [02-finalize-client.md](./02-finalize-client.md) - Convert drafts to production and deploy website
- [17-setup-vercel-projects.md](./17-setup-vercel-projects.md) - Create 3 Vercel projects for multi-language deployment

### Phase 2: Daily Content Production (Commands 3-5)
- [03-generate-daily-blogs.md](./03-generate-daily-blogs.md) - Create daily blog posts (150 drafts across all clients)
- [04-review-quality.md](./04-review-quality.md) - QA assistance for draft review
- [05-publish-approved.md](./05-publish-approved.md) - Deploy approved content to live websites

### Phase 3: Content Optimization (Commands 6-9)
- [06-audit-content-performance.md](./06-audit-content-performance.md) - Identify underperforming content
- [07-refresh-content.md](./07-refresh-content.md) - Refresh and optimize specific content (skyscraper method)
- [08-organize-by-intent.md](./08-organize-by-intent.md) - Analyze and reorganize content by search intent
- [09-build-hub-page.md](./09-build-hub-page.md) - Create comprehensive hub pages for topic clusters

### Phase 4: Link Building (Commands 10-11)
- [10-research-link-prospects.md](./10-research-link-prospects.md) - Identify 50-100+ link prospects
- [11-launch-outreach-campaign.md](./11-launch-outreach-campaign.md) - Generate personalized outreach emails

### Phase 5: Authority Building (Commands 12-13)
- [12-document-eeat.md](./12-document-eeat.md) - Enhance trust signals and author credentials
- [13-competitor-analysis.md](./13-competitor-analysis.md) - Analyze competitor strategy and find gaps

### Phase 6: Analytics & Monitoring (Commands 14-16)
- [14-generate-monthly-report.md](./14-generate-monthly-report.md) - Comprehensive monthly performance reports
- [15-health-check.md](./15-health-check.md) - System-wide health assessment
- [16-keyword-opportunity-scan.md](./16-keyword-opportunity-scan.md) - Identify high-opportunity keywords

## How to Use This Reference

### For New Users
1. Start with [01-onboard-client.md](./01-onboard-client.md)
2. Follow the numbered sequence (01-17)
3. Read "When to Use" section for each command
4. Review "Prerequisites" before running commands

### For Troubleshooting
1. Find your command in the list above
2. Go to "Common Errors" section
3. Follow fix instructions
4. Check "Success Criteria" to verify resolution

### For Planning
1. Review "Time Estimate" sections
2. Check "Prerequisites" for dependencies
3. Use "Example Scenario" to understand outcomes
4. Plan command execution sequence

## Command Execution Sequence

### Standard Client Onboarding Flow
```
1. /onboard-client [client-name]           (5 min)
2. [Employee reviews drafts]               (45 min)
3. /finalize-client [client-name]          (10 min)
4. /setup-vercel-projects [client-name]    (3 min)
   └─ Client is now LIVE and ready for daily workflow
```

### Daily Content Production Flow
```
1. /generate-daily-blogs                   (15 min)
2. /review-quality                          (2 min)
3. [Employee reviews and approves]         (30-60 min)
4. /publish-approved                        (5 min)
   └─ Content published to all client websites
```

### Monthly Optimization Flow
```
1. /audit-content-performance              (15 min)
2. /refresh-content [url]                  (8 min per piece)
3. /organize-by-intent                     (15 min)
4. /build-hub-page [topic]                 (12 min)
5. /publish-approved                        (5 min)
   └─ Content optimized and re-published
```

### Quarterly Growth Flow
```
1. /research-link-prospects [topic]        (18 min)
2. /launch-outreach-campaign [topic]       (12 min)
3. /document-eeat [content-url]            (10 min per piece)
4. /competitor-analysis [domain]           (15 min)
5. /keyword-opportunity-scan               (20 min)
   └─ Strategic insights for next quarter
```

### Monthly Reporting Flow
```
1. /generate-monthly-report                (20 min)
2. /health-check                           (25 min)
   └─ Reports ready for client presentation
```

## Command Reference Format

Each command reference includes:

1. **Purpose** - What the command does (1 sentence)
2. **When to Use** - Specific scenarios for running this command
3. **Prerequisites** - What must exist/be done first
4. **Usage Syntax** - Exact command format with parameters
5. **Step-by-Step Execution** - Detailed walkthrough of what happens
6. **Expected Outputs** - Files created, data generated
7. **Success Criteria** - How to verify it worked correctly
8. **Common Errors** - What goes wrong + how to fix
9. **Time Estimate** - How long execution takes
10. **Example Scenario** - Real client example with actual output

## Total Time Estimates

### One-Time Setup (Per Client)
- Onboarding: 5 min
- Review: 45 min
- Finalization: 10 min
- Vercel setup: 3 min
- **Total: ~63 minutes per client**

### Daily Operations (All Clients)
- Generate blogs: 15 min
- Quality review: 2 min
- Human review: 30-60 min
- Publishing: 5 min
- **Total: ~52-82 minutes per day**

### Monthly Maintenance (Per Client)
- Performance audit: 15 min
- Content refresh (5 pieces): 40 min
- Intent organization: 15 min
- Hub page creation: 12 min
- **Total: ~82 minutes per month**

### Quarterly Strategy (Per Client)
- Link research: 18 min
- Outreach campaign: 12 min
- E-E-A-T enhancement (10 pieces): 100 min
- Competitor analysis: 15 min
- Keyword opportunities: 20 min
- **Total: ~165 minutes per quarter**

### Monthly Reporting (All Clients)
- Monthly reports: 20 min
- Health check: 25 min
- **Total: ~45 minutes per month**

## Support & Documentation

### Additional Resources
- **Framework Usage Guide:** `../READ THIS FRAMEWORK-USAGE-GUIDE.md`
- **Core Workflows:** `../3-core-workflows/`
- **Technical Systems:** `../4-technical-systems/`
- **Case Studies:** `../8-case-studies/`

### Getting Help
1. Check "Common Errors" section in specific command reference
2. Review "Prerequisites" to ensure all requirements met
3. Consult "Success Criteria" to verify expected outcomes
4. Read "Example Scenario" to see real-world usage
5. Check agent/skill files in `.claude/agents/` and `.claude/skills/`

## Version Information
- **Last Updated:** November 2024
- **Framework Version:** 1.0
- **Total Commands:** 17
- **Command Categories:** 6 (Onboarding, Production, Optimization, Links, Authority, Analytics)

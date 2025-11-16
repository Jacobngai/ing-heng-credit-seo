# /audit-content-performance

Launch the Content Maintenance Agent to audit all content across all active clients, identify underperforming pieces, and flag content for refresh.

**What this command does:**
1. Loads Content Maintenance Agent from `.claude/agents/content-maintenance.md`
2. Agent executes `performance-tracking.md` skill
3. Scans all content across all clients
4. Uses DataForSEO MCP to pull ranking data and traffic metrics
5. Calculates performance scores for each piece
6. Identifies content decay (traffic dropped >20% in last 90 days)
7. Flags high-priority refresh candidates
8. Generates comprehensive performance audit report

**Expected output:**
- Complete content inventory with metrics
- Performance scores for each piece
- Decay analysis by client
- Refresh priority rankings
- Execution time: ~12-15 minutes
- Ready for content maintenance workflow

**Usage:**
```bash
/audit-content-performance
```

**No arguments needed** - agent audits all active clients automatically.

**What gets audited:**
- All published blog posts (D/A/F across all clients)
- Rankings for 50+ keywords per client
- Traffic metrics (impressions, clicks, CTR)
- Content age and decay indicators
- Backlink performance per content piece

**Audit criteria:**
- **Green (Healthy):** Traffic stable or growing, rank position 1-10
- **Yellow (Caution):** Slight traffic decline (-10% to -20%), rank position 11-20
- **Red (Priority):** Major traffic decline (>20%), rank position 21+, outdated info
- **Blue (Opportunity):** Good rank but low traffic (CTR poor), needs optimization

**Generated files:**

```
/clients/[client-name]/analytics/
├── performance-audit/
│   ├── 2024-11-04-content-audit.md (detailed audit report)
│   ├── refresh-candidates-priority.csv (sorted by urgency)
│   └── performance-by-intent.md (audit grouped by intent)
└── health-dashboard/
    └── content-decay-analysis.md
```

**Example audit output:**
```markdown
# Content Performance Audit - [Client Name]

## Summary
- Total content pieces: 127
- Average ranking position: 12.3
- Healthy content: 89 (70%)
- Caution content: 25 (20%)
- Priority refresh: 13 (10%)

## Red Flag Content (High Priority Refresh)

### 1. "Equipment Financing Guide"
- Current ranking: #47
- Previous ranking (90d ago): #8
- Traffic: 245 → 48 visitors/month (-80%)
- Content age: 14 months
- Last updated: Not refreshed
- Action: Refresh with 2024 data + new case studies

### 2. "Logistics Management Tips"
- Current ranking: #34
- Traffic: 312 → 156 visitors/month (-50%)
- Content age: 18 months
- Last updated: Not refreshed
- Action: Major refresh - add new trends

## Yellow Flag Content (Medium Priority)

## Green Content (Healthy)

## Opportunity Content (High Rank, Low CTR)
- Titles may be weak
- Meta descriptions need improvement
- Consider visual upgrades
```

**After execution:**

1. **Review audit report** (~30 minutes)
2. **Approve refresh queue** - select content to refresh next
3. **Run `/refresh-content [url]`** for each high-priority piece
4. **Track improvements** - rerun audit in 30 days

**Key metrics tracked:**
- Organic impressions (from Google Search Console)
- Organic clicks (from Google Search Console)
- Click-through rate (CTR)
- Current rank position (from DataForSEO)
- SERP features (featured snippets, people also ask)
- Backlink count and quality
- Content age
- Last update date
- Internal link count

**Employee next step:**
1. Review performance audit report (30 min)
2. Prioritize refresh queue (20 min)
3. Launch refresh campaigns for red-flag content
4. Monitor improvements over 30 days

**When to run this command:**

- **Frequency:** Monthly (recommend first Monday of each month)
- **Trigger:** After 50+ content pieces published per client
- **Before:** Content refresh campaigns
- **After:** Link building campaigns (to track impact)

**This is PHASE 2** - Content lifecycle management and maintenance optimization.

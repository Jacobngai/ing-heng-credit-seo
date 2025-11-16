# /health-check

Launch the Analytics Agent to perform a comprehensive system health check across all clients and projects, identifying issues, bottlenecks, and optimization opportunities that need immediate attention.

**What this command does:**
1. Loads Analytics Agent from `.claude/agents/analytics.md`
2. Agent executes `performance-tracking.md` skill
3. Performs comprehensive health assessment:
   - Content health (quality, freshness, decay)
   - Technical SEO health (crawlability, indexation, speed)
   - Backlink health (link quality, spam signals)
   - Conversion health (funnel performance, CRO issues)
   - Competitive health (ranking vs competitors)
   - Traffic health (growth trends, anomalies)
   - E-E-A-T health (trust signals, authoritativeness)
4. Identifies issues and assigns severity levels
5. Flags bottlenecks preventing growth
6. Generates health report with recommendations
7. Prioritizes what to fix first

**Expected output:**
- System health scorecard (overall grade)
- Issue inventory (organized by severity)
- Bottleneck analysis
- Quick wins (easy fixes)
- Strategic blockers (need addressing)
- Execution time: ~20-25 minutes (all clients)

**Usage:**
```bash
/health-check
```

**No arguments needed** - agent performs system-wide assessment.

**Health check dimensions:**

**1. Content Health (20%)**
- Content freshness (last updated)
- Content decay (traffic trends)
- Content quality (readability, depth)
- Content gaps (missing topics)
- Duplicate content (canonicalization)
- Outdated information (regulatory changes)

**2. Technical SEO Health (20%)**
- Crawlability (robots.txt, sitemap)
- Indexation (pages in index)
- Page speed (Core Web Vitals)
- Mobile optimization
- HTTPS/Security
- Structured data (schema markup)
- Canonicalization issues
- Redirect chains

**3. Backlink Health (20%)**
- Total backlinks and domains
- Backlink quality distribution
- Toxic links (spam score)
- Link velocity (natural pattern)
- Anchor text distribution
- Referring domain diversity
- Lost links (broken backlinks)

**4. Conversion Health (15%)**
- Conversion rate trends
- Funnel drop-off analysis
- CTA visibility and positioning
- Form completion rates
- Lead quality assessment
- Mobile conversion performance
- Page load impact on conversions

**5. Competitive Health (15%)**
- Ranking vs competitors (key keywords)
- Traffic share vs competitors
- Content comparison
- Backlink quality comparison
- Keyword gap analysis

**6. Traffic Health (10%)**
- Organic traffic trends
- Traffic source distribution
- Seasonal anomalies
- Traffic quality (bounce rate, engagement)
- Referral quality
- Brand vs non-brand traffic

**Generated files:**

```
/analytics/health-checks/
├── [date]-health-check-report.pdf
├── [date]-system-scorecard.md
├── [date]-issue-inventory.csv
├── [date]-quick-wins.md
└── [date]-strategic-blockers.md

/clients/[client-name]/analytics/
└── health-check-[date].md (per-client assessment)
```

**Example health check report:**

```markdown
# System Health Check Report
## November 2024

---

## OVERALL SYSTEM HEALTH SCORE: 7.2/10 (GOOD)

### Status by Dimension
- Content Health: 7/10 (Good)
- Technical SEO Health: 8/10 (Good)
- Backlink Health: 6/10 (Fair - needs work)
- Conversion Health: 7/10 (Good)
- Competitive Health: 6/10 (Fair - room to gain)
- Traffic Health: 8/10 (Good)

### Grade: B+ (Above Average)
**Status:** System is performing well. Some optimization opportunities exist but no critical issues.

---

## CRITICAL ISSUES (Severity: HIGH)
**Issues that are actively hurting performance - FIX IMMEDIATELY**

### Issue 1: Backlink Spam Detected (CRITICAL)
**Severity:** High
**Client:** Equipment Leasing Co
**Issue:** 15+ toxic backlinks from PBNs (detected)
**Impact:** Risk of manual action penalty
**Action Required:**
1. File disavow request immediately
2. Audit all recent backlinks
3. Tighten link building screening
4. Monitor for additional spam links

**Timeline:** This week

---

### Issue 2: Page Speed Critical on Mobile (CRITICAL)
**Severity:** High
**Clients:** 3 clients affected
**Issue:** Core Web Vitals failing (LCP >4s, CLS >0.25)
**Impact:** Traffic loss from mobile (40% of traffic)
**Action Required:**
1. Compress images (lazy loading)
2. Defer non-critical CSS/JS
3. Upgrade hosting if needed
4. Test and validate improvements

**Timeline:** This week

---

## MAJOR ISSUES (Severity: MEDIUM)
**Issues causing performance degradation - ADDRESS SOON**

### Issue 1: Content Decay in 2 Clients
**Severity:** Medium
**Clients:** Client A, Client B
**Issue:** 15+ pieces showing >30% traffic decline
**Impact:** ~600 lost monthly visitors
**Action Required:**
1. Refresh top 5 decaying pieces
2. Update outdated information
3. Refresh internal links
4. Monitor for recovery

**Timeline:** This month (within 2-3 weeks)

---

### Issue 2: Weak Conversion Funnels
**Severity:** Medium
**Clients:** 4 clients
**Issue:** 45% of high-traffic content has no CTAs
**Impact:** ~50-80 lost conversions per month
**Action Required:**
1. Add CTAs to high-traffic pages
2. Implement exit-intent offers
3. A/B test CTA placement
4. Add trust signals

**Timeline:** This month

---

### Issue 3: Rank Decline vs Competitors
**Severity:** Medium
**Clients:** 2 clients
**Issue:** Losing top-10 positions to competitors
**Impact:** Traffic loss starting to accelerate
**Action Required:**
1. Analyze competitor content strategy
2. Refresh our content to match/beat quality
3. Build quality backlinks
4. Improve E-E-A-T signals

**Timeline:** This month (ongoing)

---

## OPPORTUNITIES (Quick Wins)
**Easy fixes that will have immediate positive impact**

### Quick Win 1: Missing Internal Links
**Opportunity:** 30+ pieces have weak internal link structure
**Expected Impact:** +150-200 monthly visitors
**Effort:** Low (1-2 hours)
**Action:**
1. Audit internal link density
2. Add relevant links from high-authority content
3. Test and validate

**Timeline:** This week (1-2 hours)

---

### Quick Win 2: CTAs in Informational Content
**Opportunity:** High-traffic guides missing conversions
**Expected Impact:** +30-40 qualified leads
**Effort:** Low (30 min per page)
**Action:**
1. Review high-traffic informational pieces
2. Add CTAs midway through content
3. Add resource downloads
4. Monitor lead impact

**Timeline:** This week (2-3 hours)

---

### Quick Win 3: Improve Meta Descriptions
**Opportunity:** Low CTR on ranking pages (3-4% vs 5-6% average)
**Expected Impact:** +200-300 additional clicks
**Effort:** Low (30 min for top 20 pages)
**Action:**
1. Review top 20 ranking pages
2. Improve meta descriptions (include benefit, CTA)
3. Test for 2 weeks
4. Monitor CTR improvement

**Timeline:** This week (1-2 hours)

---

## BOTTLENECKS PREVENTING GROWTH
**Strategic issues blocking growth trajectory**

### Bottleneck 1: Content Production Quality
**Problem:** 15% of content requires major revisions
**Impact:** Slowing down scaling (can't publish more without quality drop)
**Root Cause:** Rushed reviews, inconsistent guidelines
**Solution:**
1. Create detailed content quality checklist
2. Establish quality gates before publication
3. More thorough employee review process
4. Better editor feedback loops

**Timeline:** Implement next week

**Expected Impact:** +5% approval rate = faster scaling

---

### Bottleneck 2: Backlink Quality vs Quantity
**Problem:** 40% of backlinks are from low-authority domains (DA <40)
**Impact:** Low link value, limited ranking improvement
**Root Cause:** Too many easy directories, not enough quality prospects
**Solution:**
1. Shift focus to DA 50+ domains
2. Improve prospect research process
3. Launch guest post campaigns (higher quality)
4. Pursue broken link replacement (better prospects)

**Timeline:** Adjust strategy this month

**Expected Impact:** Better link ROI, faster ranking gains

---

### Bottleneck 3: Keyword Targeting Misalignment
**Problem:** 20% of content targets low-intent keywords
**Impact:** Good traffic, low conversion rate
**Root Cause:** Content calendar not organized by intent
**Solution:**
1. Run `/organize-by-intent` command
2. Rebalance content mix by intent
3. Focus more on commercial/transactional
4. Improve funnel alignment

**Timeline:** Reorganize this month

**Expected Impact:** +30% conversion improvement, better lead quality

---

### Bottleneck 4: E-E-A-T Coverage Gaps
**Problem:** Only 60% of content has author credentials
**Impact:** Missing trust signals, competitive disadvantage
**Root Cause:** Late addition of E-E-A-T (should be built in)
**Solution:**
1. Include E-E-A-T in content brief
2. Require author credentials from start
3. Run `document-eeat` command for existing content
4. Train on E-E-A-T importance

**Timeline:** Implement immediately

**Expected Impact:** Better competitive positioning, +2-3 rank lift on competitive keywords

---

## HEALTH ASSESSMENT BY CLIENT

### Client A: Green (Healthy)
- Status: Growing steadily
- Traffic: +20% month-over-month
- Conversions: +18% month-over-month
- Issues: Minor (content decay in 2 pieces)
- Action: Refresh 2 pieces, maintain current pace

### Client B: Yellow (Watch)
- Status: Stalled, flat growth
- Traffic: Flat (-2% month-over-month)
- Conversions: Declining (-8% month-over-month)
- Issues: Major (poor CTA coverage, weak conversions)
- Action: Optimize CTAs, rebuild funnel, add E-E-A-T

### Client C: Red (Needs Help)
- Status: Declining
- Traffic: -15% month-over-month
- Conversions: -12% month-over-month
- Issues: Critical (backlink spam, content decay, ranking loss)
- Action: Disavow spam links, refresh content, rebuild authority

### Clients D-E: Green (Healthy)
- Status: Performing well
- Actions: Maintain current strategy, build on momentum

---

## MONTHLY HEALTH METRICS

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Avg Approval Rate | 85%+ | 82% | ✓ Good |
| Content Decay (>20% decline) | <8 pieces/mo | 12 pieces/mo | ✗ Needs Work |
| Page Speed (LCP <2.5s) | 90%+ | 75% | ✗ Critical |
| E-E-A-T Coverage | 85%+ | 60% | ✗ Below Target |
| Backlink Spam Rate | <2% | 4.2% | ✗ Elevated |
| Avg Rank Position | <15 | 16.2 | ~ Marginal |
| Conversion Rate Growth | +15% | +12% | ✓ Good |
| Link Velocity | 25+ links/mo | 18 links/mo | ✗ Below Target |

---

## PRIORITY ACTION PLAN

### THIS WEEK (Immediate)
- [ ] Fix page speed issues (3 clients)
- [ ] Disavow spam backlinks (1 client)
- [ ] Add internal links (30+ pages)
- [ ] Improve meta descriptions (top 20 pages)
- [ ] Review critical issues

**Estimated effort:** 8-10 hours
**Expected impact:** +200-300 monthly visitors, +1-2 positions

---

### THIS MONTH (Short-term)
- [ ] Refresh decaying content (top 5 pieces per client)
- [ ] Implement E-E-A-T improvements (60 pieces)
- [ ] Improve conversion funnels (4 clients)
- [ ] Conduct competitive analysis (top competitor)
- [ ] Analyze and fix backlink issues

**Estimated effort:** 20-25 hours
**Expected impact:** +800-1,200 monthly visitors, +5-8 qualified leads

---

### THIS QUARTER (Medium-term)
- [ ] Reorganize content by intent
- [ ] Build hub pages (3 main topics)
- [ ] Launch guest post campaigns (2 campaigns)
- [ ] Improve backlink strategy
- [ ] Establish quality gates and processes

**Estimated effort:** 40-50 hours
**Expected impact:** +2,000+ monthly visitors, +100 qualified leads

---

## SYSTEM HEALTH TRACKING

### Recommended Check Frequency
- **Weekly:** Critical issues (page speed, broken links)
- **Monthly:** Full health check (this report)
- **Quarterly:** Deep diagnostic (detailed analysis)
- **Annual:** Strategic review (year-over-year trends)

### Key Health Indicators to Monitor
- Content approval rate (should stay 85%+)
- Average rank position (should improve monthly)
- Traffic growth rate (should be 10%+ monthly)
- Conversion rate (should improve or maintain)
- Page speed metrics (should stay in green)
- Backlink quality (spam rate <2%)
- E-E-A-T coverage (should increase monthly)

---

## NEXT HEALTH CHECK
**Scheduled:** December 1, 2024
**Focus:** Progress on November issues, new strategic planning

---

**Recommendation:** Address CRITICAL issues this week, MAJOR issues this month, and begin strategic improvements next quarter. Current trajectory is positive with some optimization needed.
```

**After execution:**

1. **Review health check report** (~30 minutes)
   - Identify critical issues
   - Assess bottleneck severity
   - Prioritize action items

2. **Address critical issues** (ASAP)
   - Fix page speed problems
   - Disavow spam backlinks
   - Fix broken redirects
   - Address security issues

3. **Implement quick wins** (this week)
   - Add internal links
   - Improve CTAs
   - Fix meta descriptions
   - ~2-3 hours for significant impact

4. **Plan medium-term fixes** (this month)
   - Content refresh campaigns
   - E-E-A-T improvements
   - Funnel optimization
   - Backlink strategy adjustment

5. **Establish ongoing monitoring** (ongoing)
   - Track health metrics
   - Monitor for new issues
   - Rerun health check monthly

**Health check severity levels:**

**CRITICAL (Red):**
- Manual penalty risk
- Security issues
- Major traffic loss
- Complete technical failure
- Action: Within 24-48 hours

**MAJOR (Yellow):**
- Performance degradation
- Competitive loss
- Content decay
- Missing opportunities
- Action: Within 1-2 weeks

**MINOR (Green):**
- Small improvements possible
- Non-urgent optimization
- Best practices
- Action: Within 1-3 months

**When to run health checks:**

- **Monthly:** Standard cadence (1st of month)
- **After major changes:** Site migration, redesign, new strategy
- **When growth stalls:** Diagnose what changed
- **Quarterly:** Strategic check-in
- **Annual:** Year-over-year comparison

**Key metrics in health check:**
- Content freshness and decay
- Technical SEO compliance
- Backlink quality and patterns
- Conversion rate trends
- Competitive positioning
- Traffic quality and growth
- E-E-A-T coverage
- Bottlenecks and blockers

**Expected time per client:**
- Quick health check: 3-5 minutes
- Full health check: 15-20 minutes
- **All clients:** 20-25 minutes (batch processing)

**Employee next steps:**
1. Review health check report (30 min)
2. Prioritize critical issues
3. Create action plan for month
4. Assign tasks
5. Schedule follow-up review
6. Implement quick wins

**This is PHASE 4** - Continuous monitoring and system optimization for sustained growth and health.

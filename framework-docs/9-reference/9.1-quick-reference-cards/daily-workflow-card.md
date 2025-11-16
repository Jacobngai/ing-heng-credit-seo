# Daily Workflow Quick Reference Card

**Print this page and keep it visible during your workday**

---

## Morning Start (15 minutes)

1. **Check Analytics** (5 min)
   - Run: `/health-check`
   - Review yesterday's traffic
   - Note any ranking changes
   - Check for 404 errors

2. **Review Content Pipeline** (5 min)
   - Check drafts in progress
   - Prioritize today's writing
   - Review scheduled publications

3. **Monitor Competitors** (5 min)
   - Quick scan of competitor blogs
   - Note new content topics
   - Check their ranking changes

---

## Core Work (4-6 hours)

### Content Creation (Priority 1)
```bash
# For new content
/organize-by-intent [keyword]
# Then write following hub-and-spoke structure

# For existing content
/refresh-content [url]
# Apply skyscraper technique
```

### Quality Checks Before Publishing
- [ ] H1 includes target keyword
- [ ] Meta description 150-160 characters
- [ ] Internal links to 3+ relevant pages
- [ ] External link to 1+ authority source
- [ ] Images have alt text
- [ ] Mobile responsive
- [ ] Page speed < 3 seconds

---

## Link Building (1 hour daily)

### Research Phase (30 min)
```bash
/research-link-prospects [topic]
# Focus on DR 30+ sites
```

### Outreach Phase (30 min)
```bash
/launch-outreach-campaign [prospect-file]
# Send 5-10 personalized emails daily
```

---

## End of Day (10 minutes)

1. **Log Progress**
   - Content published: [count]
   - Outreach emails sent: [count]
   - Links acquired: [count]

2. **Plan Tomorrow**
   - Set 3 priority tasks
   - Block calendar time
   - Prepare research materials

3. **Quick Win Check**
   - Fix 1 broken link
   - Update 1 outdated statistic
   - Add 1 internal link

---

## Emergency Responses

### Site Down
```bash
# Check build status
vercel --logs
# Redeploy if needed
vercel --prod --yes
```

### Traffic Drop
```bash
/health-check
# Check Google Search Console
# Review recent content changes
```

### Negative Feedback
1. Respond within 24 hours
2. Document the issue
3. Update content if valid
4. Add to FAQ if common

---

## Daily Metrics to Track

| Metric | Target | Actual |
|--------|--------|--------|
| New content published | 1-2 | ___ |
| Content refreshed | 1 | ___ |
| Outreach emails sent | 5-10 | ___ |
| Internal links added | 5-10 | ___ |
| 404 errors fixed | All | ___ |

---

## Quick Command Reference

| Task | Command |
|------|---------|
| Check site health | `/health-check` |
| Find keywords | `/keyword-opportunity-scan` |
| Organize content | `/organize-by-intent` |
| Refresh old posts | `/refresh-content` |
| Build hub page | `/build-hub-page` |

---

## Time Allocation

- **Content Creation**: 60%
- **Link Building**: 20%
- **Analytics/Optimization**: 15%
- **Admin/Planning**: 5%

---

**Remember**: Consistency beats perfection. Ship daily, improve continuously.

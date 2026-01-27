---
description: Run comprehensive QA tests on all blog posts using Playwright
---

# Blog QA Command

You are the **Blog QA Assistant**. Your job is to run comprehensive quality assurance tests on all blog posts using Playwright.

## Your Mission

1. **Start the dev server** if not already running
2. **Run the Playwright QA script** to test all blog posts
3. **Analyze results** and provide actionable recommendations
4. **Help fix issues** if any are found

---

## Step 1: Check if Dev Server is Running

First, check if port 4321 is in use:

```bash
netstat -ano | findstr :4321
```

**If empty result** → Server not running, start it:

```bash
cd website
npm run dev
```

**Run this in background** so we can continue.

**If port is in use** → Server is already running, proceed to Step 2.

---

## Step 2: Run the Playwright QA Script

Execute the QA script:

```bash
cd website
node scripts/qa-blog.mjs
```

Wait for the script to complete. It will:
- Test all 538 blog posts
- Check for 404 errors
- Check for console errors
- Check for broken links
- Validate SEO elements

---

## Step 3: Analyze Results

The script will output:
- Total tested
- Passed vs Failed count
- List of issues found
- Detailed report for each failed page

**Present results to user in a clear format:**

```
📊 QA RESULTS:

Tested: 538 pages
✅ Passed: 535 (99.4%)
❌ Failed: 3 (0.6%)

ISSUES FOUND:
1. /en/blog/example-post - 404 Not Found
2. /en/blog/another-post - Console error: XYZ is not defined
3. /en/blog/third-post - Broken link: /en/contact

RECOMMENDATIONS:
[Provide specific fixes for each issue]
```

---

## Step 4: Help Fix Issues (If Any)

If issues are found, offer to help fix them:

### For 404 Errors:
- Check if `[slug].astro` template exists
- Verify slug matches URL
- Check routing configuration

### For Console Errors:
- Identify the JavaScript error
- Locate the problematic component
- Fix the error in the component

### For Broken Links:
- Update incorrect URLs
- Fix relative vs absolute links
- Check link targets exist

### For SEO Issues:
- Add missing meta descriptions
- Add canonical URLs
- Fix title tags

---

## Common Issues and Fixes

### Issue: "404 Not Found" on blog posts
**Cause:** Missing `/en/blog/[slug].astro` template
**Fix:** The template should already exist. If not, create it.

### Issue: Console errors "XYZ is not defined"
**Cause:** JavaScript variable/function not imported or defined
**Fix:** Check imports in components, ensure variables are defined before use

### Issue: Broken internal links
**Cause:** URLs changed but links not updated
**Fix:** Update href attributes in components

### Issue: Missing meta description
**Cause:** Blog post data doesn't include description
**Fix:** Add description to blog post metadata

---

## Exit Codes

The QA script exits with:
- **0** = All tests passed
- **1** = One or more tests failed

---

## Constraints

- ✅ Always check if dev server is running first
- ✅ Run the full QA suite
- ✅ Provide clear, actionable recommendations
- ✅ Help fix issues if user wants
- ❌ Don't skip tests even if user says "trust me it's fine"
- ❌ Don't deploy if QA fails

---

## Tips

- **Run QA before every deployment** - This prevents broken pages in production
- **Run QA after major changes** - Catch regressions early
- **Keep the dev server running** - Saves time between test runs
- **Fix issues in priority order** - 404s first, then console errors, then SEO

---

## Example Session

```
User: /qa-blog

You: 📊 Running Blog QA Tests...

    Checking if dev server is running...
    ✅ Dev server found on port 4321

    Running Playwright tests...
    [Progress bar or count: 1/538, 2/538, ...]

    📊 RESULTS:
    Tested: 538 pages
    ✅ Passed: 535 (99.4%)
    ❌ Failed: 3 (0.6%)

    ISSUES:
    1. /en/blog/post-1 - 404 Not Found
    2. /en/blog/post-2 - Console error
    3. /en/blog/post-3 - Broken link

    Would you like me to help fix these issues?

User: Yes

You: Let me fix these one by one...

    [Fixes each issue with explanations]

    ✅ All issues fixed! Run /qa-blog again to verify.
```

---

Remember: **Quality first, deploy second.** Always run QA before pushing to production.

---
description: Quick Playwright MCP link checker - test site without deploying
---

# QA Test Command

You are the **Result Marketing QA Agent**. Your job is to test the website for broken links using Playwright MCP.

## Your Mission

1. **Start local server** - Serve the built site
2. **Test all links** - Use Playwright MCP to check every internal link
3. **Report results** - Show what works and what doesn't
4. **Clean up** - Stop the server

---

## Process

### Step 1: Start Local Server

```bash
cd result-marketing/website

# Build first (if needed)
npm run build

# Start server in background
npx serve dist --listen 3000 &
```

**Get server PID for cleanup:**
```bash
echo $! > /tmp/qa-server.pid
```

### Step 2: Playwright MCP Testing

**Test all language routes:**

```javascript
// EN
playwright_navigate({ url: "http://localhost:3000/en/" })
// Check page loaded correctly

// MS
playwright_navigate({ url: "http://localhost:3000/ms/" })
// Check page loaded correctly

// ZH
playwright_navigate({ url: "http://localhost:3000/zh/" })
// Check page loaded correctly
```

**Extract and test all links:**

```javascript
// Get all links from current page
const links = await playwright_evaluate({
  script: `
    Array.from(document.querySelectorAll('a[href]'))
      .map(a => ({
        href: a.href,
        text: a.textContent.trim()
      }))
      .filter(link => link.href.includes('localhost:3000'))
  `
})

// Test each internal link
const brokenLinks = []
for (const link of links) {
  try {
    await playwright_navigate({ url: link.href })
    const visibleText = await playwright_get_visible_text()

    // Check for 404 indicators
    if (visibleText.includes('404') ||
        visibleText.includes('Not Found') ||
        visibleText.includes('Page not found')) {
      brokenLinks.push(link)
    }
  } catch (error) {
    brokenLinks.push(link)
  }
}
```

### Step 3: Report Results

**If all links work:**
```
✅ QA Passed - All Links Working!

📊 Summary:
   - Links tested: N
   - Broken links: 0
   - Language routes: ✅ EN ✅ MS ✅ ZH

🌐 Routes Verified:
   - http://localhost:3000/en/ ✅
   - http://localhost:3000/ms/ ✅
   - http://localhost:3000/zh/ ✅

Site is ready for deployment!
```

**If broken links found:**
```
❌ QA Failed - Broken Links Found!

📊 Summary:
   - Links tested: N
   - Broken links: N

🔴 Issues:
   1. /blog/missing-page → 404
   2. /services/xyz → 404
   3. ...

📍 Source:
   - Broken link found on: /en/blog/index
   - Broken link found on: /en/services

Fix these before deploying.

Options:
1. Fix broken pages
2. Remove broken links
3. Re-test
```

### Step 4: Clean Up

```bash
# Stop the server
kill $(cat /tmp/qa-server.pid)
rm /tmp/qa-server.pid
```

---

## Quick Test Modes

### Test Specific Page

```
User: "Test /en/blog/"
Agent: [Tests that page and all its links]
```

### Test Only Language Routes

```
User: "Test language routes only"
Agent: [Tests EN, MS, ZH homepages]
```

### Test New Content

```
User: "Test new blog posts"
Agent: [Scans for new pages, tests them]
```

---

## Error Detection

Playwright MCP checks for:

1. **404 Pages**
   - "404" in page text
   - "Not Found" in page text
   - "Page not found" in page text

2. **Navigation Errors**
   - Navigation timeout
   - Connection refused
   - DNS errors

3. **Content Issues**
   - Empty pages (no content)
   - Missing headings
   - Broken images

---

## Performance Tips

**Fast testing (default):**
- Test homepage + language routes
- ~10 seconds

**Full testing:**
- Test all pages + all links
- ~1-2 minutes

**Quick smoke test:**
- Test homepage only
- ~3 seconds

---

## Usage Examples

```
User: /qa

Agent: Starting QA test...
      [Builds site]
      [Starts server]
      [Tests all links]

Agent: ✅ QA Passed! 45 links tested, 0 broken.
      Ready to deploy.
```

```
User: Test language routes only

Agent: Testing EN, MS, ZH routes...

Agent: ✅ All language routes working!
      EN: http://localhost:3000/en/ ✅
      MS: http://localhost:3000/ms/ ✅
      ZH: http://localhost:3000/zh/ ✅
```

---

**Remember:** Always QA before deploy. Zero 404s policy.

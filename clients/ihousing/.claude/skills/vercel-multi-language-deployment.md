# Vercel Multi-Language Deployment Skill

## Purpose
Deploy a client's website to 3 separate Vercel projects in parallel (EN, MS, ZH), each with different default language settings.

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "ing-heng", "apex-machinery")
- Used to construct Vercel project names: `[client-name]-en`, `[client-name]-ms`, `[client-name]-zh`

## Prerequisites
- Git changes already committed and pushed to GitHub
- Vercel projects created for this client (3 projects):
  - `[client-name]-en` (English default)
  - `[client-name]-ms` (Malay default)
  - `[client-name]-zh` (Chinese default)
- Vercel MCP server configured
- Team ID: `team_ZRACGuujUQkB6IRfNtWpe0T6`

---

## Workflow Steps

### Step 1: Verify Vercel Projects Exist

Use `mcp__vercel__list_projects` to check if the 3 projects exist:

```bash
Expected projects:
- [client-name]-en
- [client-name]-ms
- [client-name]-zh
```

**If projects don't exist:**
```
Error: Vercel projects not found for [client-name]

Expected projects:
- [client-name]-en
- [client-name]-ms
- [client-name]-zh

Action required:
Run: /setup-vercel-projects [client-name]
```

**If projects exist:**
Proceed to deployment.

---

### Step 2: Trigger Parallel Deployments

Use `mcp__vercel__deploy_to_vercel` to deploy all 3 projects:

**IMPORTANT**: Change working directory to client's website folder BEFORE deploying:

```bash
cd example-clients/[client-name]/website
```

Then deploy:

```javascript
// Deploy all 3 projects in parallel (single message, multiple tool calls)
await Promise.all([
  mcp__vercel__deploy_to_vercel(),  // Deploys current directory
  mcp__vercel__deploy_to_vercel(),  // Each will trigger different project
  mcp__vercel__deploy_to_vercel()   // based on Vercel configuration
]);
```

**Note**: The `mcp__vercel__deploy_to_vercel` tool reads the current directory's `.vercel/project.json` to determine which project to deploy. Since all 3 Vercel projects link to the same GitHub repo, we need to trigger deployments via the MCP tool from the website directory.

---

### Step 3: Monitor Deployment Progress

After triggering deployments, use `mcp__vercel__list_deployments` to get deployment IDs:

```javascript
// Get latest deployments for each project
const enDeployments = await mcp__vercel__list_deployments({
  projectId: "[client-name]-en",
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6"
});

const msDeployments = await mcp__vercel__list_deployments({
  projectId: "[client-name]-ms",
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6"
});

const zhDeployments = await mcp__vercel__list_deployments({
  projectId: "[client-name]-zh",
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6"
});
```

**Display progress:**
```
⏳ Deploying to Vercel (3 parallel builds)...

EN Project: Building...
MS Project: Building...
ZH Project: Building...
```

---

### Step 4: Check Deployment Status

Use `mcp__vercel__get_deployment` to check status of each deployment:

```javascript
// Check EN deployment
const enStatus = await mcp__vercel__get_deployment({
  idOrUrl: enDeploymentId,
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6"
});

// Check MS deployment
const msStatus = await mcp__vercel__get_deployment({
  idOrUrl: msDeploymentId,
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6"
});

// Check ZH deployment
const zhStatus = await mcp__vercel__get_deployment({
  idOrUrl: zhDeploymentId,
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6"
});
```

**Possible statuses:**
- `BUILDING` - In progress
- `READY` - Success
- `ERROR` - Failed
- `CANCELED` - Canceled

**Wait loop:**
```
Poll every 10 seconds until all deployments reach terminal state (READY, ERROR, or CANCELED)
Max wait time: 10 minutes (timeout)
```

---

### Step 5: Handle Deployment Results

#### Success Case (All 3 deployed successfully)

```
✅ All deployments successful!

📦 Deployed to Vercel:
✅ EN: https://[client-name]-en.vercel.app (Build #123)
✅ MS: https://[client-name]-ms.vercel.app (Build #124)
✅ ZH: https://[client-name]-zh.vercel.app (Build #125)

⏱️ Total deployment time: 2 minutes 34 seconds

🌐 Language Defaults:
- EN site auto-redirects to /en/
- MS site auto-redirects to /ms/
- ZH site auto-redirects to /zh/

All sites have language switcher enabled.
```

#### Partial Failure (Some deployments failed)

```
⚠️ Deployment completed with errors

📦 Deployment Results:
✅ EN: https://[client-name]-en.vercel.app (Success)
❌ MS: Build failed
✅ ZH: https://[client-name]-zh.vercel.app (Success)

Error details for MS deployment:
[Use mcp__vercel__get_deployment_build_logs to retrieve error]
```

#### Complete Failure (All deployments failed)

```
❌ All deployments failed!

Deployment Results:
❌ EN: Build failed
❌ MS: Build failed
❌ ZH: Build failed

Error details:
[Retrieve build logs for all 3 projects]

Common issues:
- Missing environment variables
- Build command failed
- Node version mismatch
- Dependency installation failed
```

---

### Step 6: Retrieve Build Logs (If Errors)

Use `mcp__vercel__get_deployment_build_logs` to retrieve error details:

```javascript
const enLogs = await mcp__vercel__get_deployment_build_logs({
  idOrUrl: enDeploymentId,
  teamId: "team_ZRACGuujUQkB6IRfNtWpe0T6",
  limit: 50  // Last 50 lines
});
```

**Display formatted error:**
```
❌ MS Deployment Failed

Build logs (last 50 lines):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[2025-11-02 10:23:45] > npm run build
[2025-11-02 10:23:46]
[2025-11-02 10:23:47] > astro build
[2025-11-02 10:23:48]
[2025-11-02 10:23:50] ✘ [ERROR] Cannot find module './missing-file.js'
[2025-11-02 10:23:50]     at Module._resolveFilename
[2025-11-02 10:23:50]
[2025-11-02 10:23:51] error Command failed with exit code 1.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suggested fixes:
1. Check if './missing-file.js' exists in the repository
2. Verify import paths are correct
3. Ensure all dependencies are installed
4. Check environment-specific code paths

To debug:
cd example-clients/[client-name]/website
npm run build  # Test build locally
```

---

## Error Handling

### Common Errors & Solutions

#### Error 1: Projects Not Found
```
Error: Could not find Vercel project '[client-name]-en'

Solution:
Run: /setup-vercel-projects [client-name]
```

#### Error 2: Build Timeout
```
Error: Deployment timed out after 10 minutes

Solution:
- Check if build command is stuck
- Review build logs for infinite loops
- Verify Vercel build timeout settings
```

#### Error 3: Environment Variables Missing
```
Error: PUBLIC_DEFAULT_LOCALE is not defined

Solution:
Set environment variables in Vercel project settings:
- [client-name]-en: PUBLIC_DEFAULT_LOCALE = "en"
- [client-name]-ms: PUBLIC_DEFAULT_LOCALE = "ms"
- [client-name]-zh: PUBLIC_DEFAULT_LOCALE = "zh"
```

#### Error 4: Git Not Pushed
```
Error: Deployment triggered but using old commit

Solution:
Ensure git push completed before deploying:
1. Check: git log -1
2. Verify remote: git remote -v
3. Push again: git push origin master
```

---

## Deployment Configuration

### Expected Vercel Project Settings

**All 3 projects share:**
- Framework: `Astro`
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: `example-clients/[client-name]/website`
- Node Version: `18.x` or higher

**Environment Variables (per project):**

| Variable | EN Project | MS Project | ZH Project |
|----------|-----------|-----------|-----------|
| `PUBLIC_DEFAULT_LOCALE` | `en` | `ms` | `zh` |
| `PUBLIC_SITE_URL` | `https://[client-name]-en.vercel.app` | `https://[client-name]-ms.vercel.app` | `https://[client-name]-zh.vercel.app` |

---

## Performance Metrics

### Expected Timings

```
Trigger deployment:     5 seconds
Build time (per site):  1-2 minutes
Deploy time:            30 seconds
Total (parallel):       2-3 minutes

Sequential would be:    6-9 minutes
Time saved:             3-6 minutes per deployment
```

### Scaling Performance

```
1 client (3 deployments):    2-3 minutes
5 clients (15 deployments):  2-3 minutes (parallel)
10 clients (30 deployments): 3-4 minutes (parallel)
50 clients (150 deployments): 5-7 minutes (parallel)
```

---

## Output Summary

### Success Message Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ DEPLOYMENT SUCCESSFUL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Client: [client-name]
Total deployments: 3 (EN, MS, ZH)

📦 Deployment URLs:
✅ EN: https://[client-name]-en.vercel.app
✅ MS: https://[client-name]-ms.vercel.app
✅ ZH: https://[client-name]-zh.vercel.app

🌐 Language Settings:
- EN site → Auto-redirects to /en/ (users can switch to /ms/ or /zh/)
- MS site → Auto-redirects to /ms/ (users can switch to /en/ or /zh/)
- ZH site → Auto-redirects to /zh/ (users can switch to /en/ or /ms/)

⏱️ Deployment time: 2m 34s

Next steps:
1. Test all 3 URLs to verify language defaults
2. Check language switcher works
3. Verify content is correct on all sites
4. (Optional) Configure custom domains
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Agent Usage
This skill is executed by: **Deployment Agent**
Triggered by: `/publish-approved` command (after git push)
Can be run standalone with: `/deploy-to-vercel [client-name]`

## Success Criteria
✅ All 3 Vercel projects deployed successfully
✅ Deployment URLs accessible
✅ Language redirects working correctly
✅ Language switcher functional
✅ Build logs show no errors
✅ Deployment completed within 10 minutes

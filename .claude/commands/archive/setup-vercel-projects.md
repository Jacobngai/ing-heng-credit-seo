Create 3 Vercel projects for a client to enable multi-language deployment (one-time setup).

**What this command does:**
1. Asks for client name (e.g., "ing-heng", "apex-machinery")
2. Verifies client folder exists at `/example-clients/[client-name]/`
3. Creates 3 Vercel projects via Vercel MCP:
   - `[client-name]-en` (English default)
   - `[client-name]-ms` (Malay default)
   - `[client-name]-zh` (Chinese default)
4. Configures environment variables for each project
5. Links all 3 projects to the same GitHub repository
6. Sets correct build settings (Astro framework, build command, output directory)
7. Returns deployment URLs and next steps

**Usage:**
```bash
/setup-vercel-projects [client-name]
```

**Example:**
```bash
/setup-vercel-projects ing-heng
```

**Prerequisites:**
- Client already onboarded via `/onboard-client`
- Client website folder exists at `/example-clients/[client-name]/website/`
- GitHub repository connected to Vercel
- Vercel MCP configured (Team ID: team_ZRACGuujUQkB6IRfNtWpe0T6)

**What gets created:**

### Project 1: [client-name]-en
```
Name: [client-name]-en
Framework: Astro
Root Directory: example-clients/[client-name]/website
Build Command: npm run build
Output Directory: dist
Environment Variables:
  - PUBLIC_DEFAULT_LOCALE = en
  - PUBLIC_SITE_URL = https://[client-name]-en.vercel.app
```

### Project 2: [client-name]-ms
```
Name: [client-name]-ms
Framework: Astro
Root Directory: example-clients/[client-name]/website
Build Command: npm run build
Output Directory: dist
Environment Variables:
  - PUBLIC_DEFAULT_LOCALE = ms
  - PUBLIC_SITE_URL = https://[client-name]-ms.vercel.app
```

### Project 3: [client-name]-zh
```
Name: [client-name]-zh
Framework: Astro
Root Directory: example-clients/[client-name]/website
Build Command: npm run build
Output Directory: dist
Environment Variables:
  - PUBLIC_DEFAULT_LOCALE = zh
  - PUBLIC_SITE_URL = https://[client-name]-zh.vercel.app
```

**Expected output:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ VERCEL PROJECTS CREATED SUCCESSFULLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Client: ing-heng
Projects created: 3

📦 Vercel Projects:
✅ ing-heng-en
   URL: https://ing-heng-en.vercel.app
   Default Language: English (/en/)

✅ ing-heng-ms
   URL: https://ing-heng-ms.vercel.app
   Default Language: Malay (/ms/)

✅ ing-heng-zh
   URL: https://ing-heng-zh.vercel.app
   Default Language: Chinese (/zh/)

🔧 Environment Variables Set:
- PUBLIC_DEFAULT_LOCALE (en/ms/zh per project)
- PUBLIC_SITE_URL (project-specific URLs)

📖 Next Steps:
1. Test the deployment URLs above
2. Verify language redirects work (each site auto-redirects to its default language)
3. Test language switcher on all 3 sites
4. (Optional) Configure custom domains in Vercel dashboard:
   - ing-heng-en → en.ingheng-credit.com
   - ing-heng-ms → ms.ingheng-credit.com
   - ing-heng-zh → zh.ingheng-credit.com

5. Ready for content publishing! Use:
   /publish-approved
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Execution time:**
- ~2-3 minutes (includes project creation and configuration)

**One-time setup:**
- This command is only run ONCE per client
- After setup, use `/publish-approved` for daily deployments
- If projects already exist, command will notify and skip creation

**Error handling:**
- If projects already exist: Notify user, show existing URLs
- If client folder not found: Ask user to run `/onboard-client` first
- If Vercel MCP not configured: Provide setup instructions
- If GitHub repo not linked: Provide manual linking instructions

**Manual alternative:**
If this command fails, you can manually create projects in Vercel dashboard:
1. Go to https://vercel.com/new
2. Import GitHub repository: Jacobngai/ing-heng-credit-seo
3. Create 3 projects with different names and environment variables
4. See full instructions in: framework-docs/VERCEL-AUTO-DEPLOYMENT-PLAN.md

**After setup:**
Your client is ready for automated multi-language deployment!
Future content publishes will automatically deploy to all 3 sites in parallel.

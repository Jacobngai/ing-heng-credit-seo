Launch the Client Setup Agent to convert approved onboarding drafts into production configuration and deploy the client website.

**What this command does:**
1. Loads Client Setup Agent from `.claude/agents/client-setup.md`
2. Agent executes `client-finalization.md` skill (Phase 2: Production Setup)
3. Validates all required A/ files exist
4. Converts approved drafts to production JSON:
   - keyword-strategy.json
   - personas/*.json
   - brief.json
5. Asks: "How many separate websites does this client need?"
6. For each website:
   - Generates complete Astro website
   - Initializes Git repository
   - Creates GitHub repository (using gh CLI)
   - Creates Vercel project (using Vercel MCP)
   - Configures Git-based auto-deployment
   - Performs initial deployment
7. Creates first 10 blog posts as drafts
8. Archives onboarding files
9. Marks client as "active" with deployment metadata

**Expected output:**
- Production configs (JSON)
- Live website deployed
- 10 first blog posts (D/ drafts)
- Client ready for daily workflow
- Execution time: ~10 minutes

**Usage:**
```bash
/finalize-client [client-name]
```

**Example:**
```bash
/finalize-client apex-machinery
```

**Prerequisites (IMPORTANT):**
Employee must have already:
1. Run `/onboard-client apex-machinery` (Phase 1)
2. Reviewed ALL draft files
3. Approved files by renaming D/ to A/:
   - At least 3 keyword research files (one per language)
   - At least 3 persona files
   - 1 brief file

**If prerequisites not met:**
```
Error: Cannot finalize - missing approved files

Required:
✅ brief-draft/A/brief.md
✅ keyword-research/A/*.md (found 5, need 3)
❌ persona-idea/A/*.md (found 2, need 3)

Please approve more files before running finalize.
```

**What gets created:**

**Production files:**
```
/clients/apex-machinery/
├── brief.json                  (production config)
├── keyword-strategy.json       (47 keywords)
├── status.json                 (client status)
└── /personas/                  (5 personas as JSON)
```

**Website(s):**
```
/clients/apex-machinery/website-main/
├── GitHub: https://github.com/ing-heng-seo/apex-machinery
├── Vercel Project: prj_xxxxxxxxxxxx
├── Production URL: https://apex-machinery.vercel.app
└── Auto-deploy: ENABLED (git push → Vercel)
```

**For multi-website clients:**
```
/clients/global-logistics/
├── website-en-site/ → https://global-logistics.com
└── website-zh-site/ → https://global-logistics.cn
(Each with independent Git repo + Vercel project)
```

**First content batch:**
```
/clients/apex-machinery/drafts/
├── D/2025-11-01-post-1-en.md
├── D/2025-11-01-post-1-zh.md
└── ... (10 drafts for employee review)
```

**After execution:**
1. Client marked as "active" with deployment config
2. Website(s) LIVE with auto-deployment enabled
3. GitHub repos created and linked to Vercel
4. First 10 blog posts ready for review
5. Client ready for daily content generation

**Auto-deployment is NOW ACTIVE:**
✅ Every git push to 'main' → Automatic Vercel deployment
✅ No manual deployment commands needed
✅ Preview deployments for pull requests

**Next steps:**
1. Review first 10 blog posts in /drafts/D/
2. Approve (D/ → A/) or reject (D/ → F/)
3. Run `/publish-approved` to publish first batch
   → This will git push → Vercel auto-deploys! 🚀
4. Daily workflow begins: `/generate-daily-blogs`

**This completes onboarding!** Client is now fully operational with automated deployment pipeline.

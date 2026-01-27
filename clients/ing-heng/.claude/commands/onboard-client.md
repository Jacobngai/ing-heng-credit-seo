Launch the Client Onboarding Agent to generate keyword research, personas, and strategic brief for a new client.

**What this command does:**
1. Loads Client Onboarding Agent from `.claude/agents/client-onboarding.md`
2. Agent executes `client-onboarding.md` skill (Phase 1: Draft Generation)
3. Prompts you to paste client questionnaire answers
4. Generates 3 types of draft content:
   - Keyword research (5 files)
   - Persona ideas (5-8 files)
   - Client brief (1 file)
5. Saves ALL as D/ drafts for employee review
6. Nothing is auto-approved - everything pending human review

**Expected output:**
- 11+ draft files for review
- Execution time: ~5 minutes
- Ready for employee approval

**Usage:**
```bash
/onboard-client [client-name]
```

**Example:**
```bash
/onboard-client apex-machinery
```

**What you need:**
- Client questionnaire completed (30+ questions covering):
  - Business information
  - Target audience
  - Services/products
  - Competitors
  - SEO goals
  - Brand voice

**After command runs:**
Agent will ask: "Please paste the client questionnaire answers"
You paste the full questionnaire response.

**Generated files (all as D/ drafts):**
```
/clients/apex-machinery/
├── /keyword-research/
│   ├── D/                           # Draft keywords (generated)
│   │   ├── primary-keywords-en.md
│   │   ├── primary-keywords-zh.md
│   │   ├── primary-keywords-ms.md
│   │   ├── long-tail-keywords.md
│   │   └── competitor-analysis.md
│   ├── A/                           # Approved keywords (after review)
│   └── F/                           # Rejected keywords
│
├── /persona-idea/
│   ├── D/                           # Draft personas (generated)
│   │   ├── contractor-ahmad.md
│   │   ├── logistics-manager-lee.md
│   │   ├── warehouse-ops-william.md
│   │   └── ... (5-8 personas)
│   ├── A/                           # Approved personas
│   └── F/                           # Rejected personas
│
├── /brief-draft/
│   ├── D/brief.md                   # Draft brief (generated)
│   ├── A/                           # Approved brief
│   └── F/                           # Rejected brief
│
├── /personas/                       # Final JSON personas (after finalization)
├── /content/                        # Published content
│   ├── /en/blogs/
│   ├── /zh/blogs/
│   └── /ms/blogs/
├── /blog-research/                  # Research notes
├── /brand-identity/                 # Brand assets
│   ├── A/                           # Approved brand assets
│   └── D/                           # Draft brand assets
├── /images/                         # All client images
│   ├── /logos/                      # Company logos
│   ├── /equipment-photos/           # Product/equipment photos
│   └── /image-briefs/               # Image generation briefs
├── /website/                        # Astro website code
├── /project-docs/                   # Project documentation
├── /archive/                        # Archived materials
└── /vehicle-machinery-types/        # Equipment type definitions
```

**Next steps:**
1. Review all D/ files (~45 minutes)
2. Good files: Rename D/ to A/
3. Bad files: Rename D/ to F/
4. Edit if needed, then rename to A/
5. Run `/finalize-client apex-machinery` to convert to production

**This is PHASE 1 only** - Draft generation for review
Phase 2 (`/finalize-client`) converts approved drafts to production setup

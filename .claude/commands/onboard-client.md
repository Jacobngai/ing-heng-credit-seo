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
├── /keyword-research/D/
│   ├── primary-keywords-en.md
│   ├── primary-keywords-zh.md
│   ├── primary-keywords-ms.md
│   ├── long-tail-keywords.md
│   └── competitor-analysis.md
│
├── /persona-idea/D/
│   ├── contractor-ahmad.md
│   ├── logistics-manager-lee.md
│   ├── warehouse-ops-william.md
│   └── ... (5-8 personas)
│
└── /brief-draft/D/
    └── brief.md
```

**Next steps:**
1. Review all D/ files (~45 minutes)
2. Good files: Rename D/ to A/
3. Bad files: Rename D/ to F/
4. Edit if needed, then rename to A/
5. Run `/finalize-client apex-machinery` to convert to production

**This is PHASE 1 only** - Draft generation for review
Phase 2 (`/finalize-client`) converts approved drafts to production setup

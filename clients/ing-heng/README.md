# Ing Heng Credit - Client Folder

This is the complete client folder for Ing Heng Credit, organized according to the SEO automation platform architecture.

## Folder Structure

```
/clients/ing-heng/
├── /keyword-research/               # Keyword research and analysis
│   ├── D/                          # Draft keywords (for review)
│   ├── A/                          # Approved keywords (ready to use)
│   └── F/                          # Rejected keywords (archived)
│
├── /persona-idea/                   # Customer persona drafts
│   ├── D/                          # Draft personas (for review)
│   ├── A/                          # Approved personas (ready to use)
│   └── F/                          # Rejected personas (archived)
│
├── /brief-draft/                    # Client brief and strategy
│   ├── D/                          # Draft brief (for review)
│   ├── A/                          # Approved brief (active)
│   └── F/                          # Rejected brief versions
│
├── /personas/                       # Final JSON personas (production)
│   └── *.json                      # Active customer personas
│
├── /content/                        # Published multilingual content
│   ├── /en/                        # English content
│   │   ├── /blogs/
│   │   └── /landing-pages/
│   ├── /zh/                        # Chinese content
│   │   ├── /blogs/
│   │   └── /landing-pages/
│   └── /ms/                        # Malay content
│       ├── /blogs/
│       └── /landing-pages/
│
├── /blog-research/                  # Research notes for blog posts
│   └── *-research.md               # Industry and topic research
│
├── /brand-identity/                 # Brand assets and guidelines
│   ├── A/                          # Approved brand assets
│   └── D/                          # Draft brand assets
│
├── /images/                         # All client images (CENTRALIZED)
│   ├── /logos/                     # Company logos
│   │   └── ING HENG CREDIT LOGO/
│   ├── /equipment-photos/          # Product/equipment photos
│   └── /image-briefs/              # Image generation briefs
│       └── D/                      # Draft image briefs
│
├── /website/                        # Astro website codebase
│   ├── /src/                       # Source code
│   ├── /public/                    # Static assets
│   ├── astro.config.mjs            # Astro configuration
│   └── package.json                # Dependencies
│
├── /project-docs/                   # Project documentation
│   ├── README.md                   # Quick start guide
│   ├── PROJECT-COMPLETE-SUMMARY.md # Project summary
│   └── QUICK-START.md              # Development guide
│
├── /archive/                        # Archived project materials
│   ├── /implementation-reports/    # Implementation reports
│   ├── /project-setup/             # Setup documentation
│   ├── /qa-reports/                # Quality assurance reports
│   └── /superseded/                # Outdated files
│
├── /vehicle-machinery-types/        # Equipment type definitions
│   └── *.md                        # Equipment categories
│
└── README.md                        # This file
```

## Folder Purposes

### Draft → Approve → Finalize Workflow

The D/A/F folder system is used for review workflows:

1. **D/ (Draft)** - Generated content waiting for human review
2. **A/ (Approved)** - Content reviewed and approved, ready for production
3. **F/ (Failed/Rejected)** - Content rejected during review, archived

**Review Process:**
- Agent generates content in `D/` folders
- Employee reviews each file
- Good files: Rename from `D/` to `A/`
- Bad files: Rename from `D/` to `F/`
- Edited files: Edit, then rename to `A/`

### Image Management

All images are centralized in `/images/` with three categories:

1. **/logos/** - Company logos and brand marks
2. **/equipment-photos/** - Product and equipment images
3. **/image-briefs/** - AI image generation prompts and specifications

**Why centralized?** Makes it easy to find all client images in one place, prevents duplication, and simplifies asset management.

### Content Organization

Content is organized by language first, then by type:
- `/content/en/` - English content
- `/content/zh/` - Chinese (中文) content
- `/content/ms/` - Malay (Bahasa Malaysia) content

Each language has:
- `/blogs/` - Blog posts
- `/landing-pages/` - Landing pages

### Website Code

The `/website/` folder contains the complete Astro website:
- Single codebase serves all 3 languages
- Multilingual i18n support built-in
- Deployed to Vercel with language-specific deployments

## Usage

### Running the Website Locally

```bash
cd clients/ing-heng/website
npm install
npm run dev
```

### Adding New Images

Store images in the appropriate subfolder:
- Company logos → `/images/logos/`
- Equipment photos → `/images/equipment-photos/`
- Image generation briefs → `/images/image-briefs/D/`

### Client Onboarding Workflow

When onboarding a new client (or updating this one):

1. Run `/onboard-client ing-heng`
2. Agent generates drafts in `D/` folders
3. Review all drafts (~45 minutes)
4. Move good files from `D/` to `A/`
5. Run `/finalize-client ing-heng` to activate

## Key Files

- `brief.json` - Active client configuration (after finalization)
- `keyword-strategy.json` - Production keyword strategy
- `/personas/*.json` - Active customer personas (JSON format)
- `/website/` - Live website codebase
- `/project-docs/README.md` - Project documentation

## Next Steps

After organization:
1. Verify all images are in `/images/` folders
2. Review existing keyword research in `/keyword-research/`
3. Review existing personas in `/personas/`
4. Continue daily content workflow with `/daily-content ing-heng`

---

**Client:** Ing Heng Credit Sdn Bhd
**Industry:** Equipment Financing
**Languages:** EN, ZH, MS
**Last Updated:** November 2, 2025

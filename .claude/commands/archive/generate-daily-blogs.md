Launch the Content Generation Agent to create daily blog posts for all active clients in 3 languages (English, Mandarin, Bahasa Malaysia).

**What this command does:**
1. Loads Content Generation Agent from `.claude/agents/content-generation.md`
2. Agent executes `daily-seo-content.md` skill
3. Generates 150 draft blog posts (50 clients × 3 languages)
4. Saves all posts to `/drafts/D/` folders for employee review
5. Flags failed posts to `/drafts/F/` with detailed reasons

**Expected output:**
- 150 draft blog posts across all clients
- Quality score report
- Execution time: ~15 minutes
- Ready for employee review

**Usage:**
```bash
/generate-daily-blogs
```

**No arguments needed** - agent processes all active clients automatically.

**Next steps after execution:**
1. Review drafts in each client's `/drafts/D/` folder
2. Approve good content: Rename D/ to A/
3. Reject bad content: Rename D/ to F/
4. Run `/publish-approved` to deploy all A/ files

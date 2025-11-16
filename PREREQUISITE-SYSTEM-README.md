# Prerequisite Checking System

> Ensure dependencies are met before execution with educational error messages and automatic recovery

---

## What Is This?

A comprehensive system that validates prerequisites before running commands, skills, or agents. When something is missing, it tells you **exactly what to do** with step-by-step instructions.

---

## Quick Start

### 1. Validate Before Running

```bash
# Check if all prerequisites are met
node scripts/validate-prerequisites.js --command=build-hub-page
```

### 2. If Errors, Follow Recovery Plan

The system will show you:
- What's missing
- Why it's needed
- How to fix it (step-by-step)

### 3. Run Your Command

Once prerequisites are met:
```bash
/build-hub-page --topic="excavator financing"
```

---

## Example Error Message

```
❌ PREREQUISITE ERROR: Missing Required File

What's missing: clients/ing-heng/seo/keyword-research/primary-keywords.json

Why it's needed: Contains target keywords for hub page optimization

How to fix:
1. Run this command first:
   /keyword-opportunity-scan

2. Verify the file was created:
   ls -lh clients/ing-heng/seo/keyword-research/primary-keywords.json

3. Then retry this command

Documentation: framework-docs/KEYWORD-RESEARCH.md
```

---

## Features

### ✓ Educational Errors
Errors teach you what to do next, not just what went wrong

### ✓ Automatic Recovery Plans
Step-by-step instructions for fixing issues

### ✓ Multiple Validation Types
- Files (does it exist?)
- Data (does it have required fields?)
- Commands (has it been run?)
- Tools (is it installed?)

### ✓ Agent Auto-Recovery
Agents can automatically fix missing prerequisites

---

## For Command Authors

### Add Prerequisites to Your Command

1. **Add prerequisites section** to your command markdown:

```markdown
## Prerequisites

### Quick Validation
\`\`\`bash
node scripts/validate-prerequisites.js --command=my-command
\`\`\`

### Required Files
- `path/to/file.json` - Why it's needed
  - Generate: `/generate-command`
  - Time: ~3-5 minutes
```

2. **Create configuration file** at `scripts/prerequisite-configs/my-command.json`:

```json
{
  "commandName": "my-command",
  "description": "What this command does",
  "files": [
    {
      "path": "clients/ing-heng/seo/keyword-research/data.json",
      "reason": "Contains keyword data for analysis",
      "generateCommand": "/keyword-opportunity-scan",
      "estimatedTime": "3-5 minutes"
    }
  ]
}
```

3. **Test validation**:

```bash
node scripts/validate-prerequisites.js --command=my-command
```

---

## Documentation

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **[System Summary](PREREQUISITE-SYSTEM-SUMMARY.md)** | Overview and key features | 5 min |
| **[Quick Reference](framework-docs/PREREQUISITE-QUICK-REFERENCE.md)** | Fast implementation guide | 10 min |
| **[Complete Examples](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md)** | Full code examples | 15 min |
| **[Implementation Checklist](framework-docs/PREREQUISITE-IMPLEMENTATION-CHECKLIST.md)** | Step-by-step guide | During work |
| **[System Flowcharts](framework-docs/PREREQUISITE-SYSTEM-FLOWCHART.md)** | Visual diagrams | 10 min |
| **[Full Specification](framework-docs/PREREQUISITE-CHECKING-SYSTEM.md)** | Complete details | 30 min |
| **[Navigation Index](framework-docs/PREREQUISITE-SYSTEM-INDEX.md)** | Find what you need | Reference |

---

## Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    USER RUNS COMMAND                         │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│            VALIDATE PREREQUISITES (Automatic)                │
│  • Check required files exist                                │
│  • Verify data completeness                                  │
│  • Confirm prerequisite commands ran                         │
│  • Check tools installed                                     │
└──────────────────────────────────────────────────────────────┘
                            ↓
                ┌───────────┴───────────┐
                │                       │
                ✓                       ✗
        All Prerequisites           Missing Items
            Met                          │
                │                        ↓
                │            ┌───────────────────────┐
                │            │  Show Educational     │
                │            │  Error Messages       │
                │            └───────────────────────┘
                │                        ↓
                │            ┌───────────────────────┐
                │            │  Generate Recovery    │
                │            │  Plan (Step-by-Step)  │
                │            └───────────────────────┘
                │                        ↓
                │            ┌───────────────────────┐
                │            │  User Follows Plan    │
                │            │  & Retries            │
                │            └───────────────────────┘
                ↓
┌──────────────────────────────────────────────────────────────┐
│                  EXECUTE COMMAND                             │
└──────────────────────────────────────────────────────────────┘
```

---

## What Gets Checked?

### Files
```json
{
  "files": [
    {
      "path": "absolute/path/to/file.json",
      "reason": "why this file is needed",
      "generateCommand": "/command-to-create-it"
    }
  ]
}
```

**Error if:** File doesn't exist
**Recovery:** Run the command that generates it

### Data
```json
{
  "data": [
    {
      "file": "path/to/file.json",
      "requiredFields": ["field1", "field2", "field3"],
      "impact": "what happens without this data"
    }
  ]
}
```

**Error if:** File missing required fields
**Recovery:** Re-run command with correct parameters or add fields manually

### Commands
```json
{
  "commands": [
    {
      "name": "prerequisite-command",
      "command": "/prerequisite-command",
      "outputFile": "path/to/output.json",
      "reason": "why this must run first"
    }
  ]
}
```

**Error if:** Command output file doesn't exist
**Recovery:** Run the prerequisite command

### Tools
```json
{
  "tools": [
    {
      "name": "vercel",
      "reason": "required for deployment",
      "install": {
        "npm": "npm install -g vercel"
      }
    }
  ]
}
```

**Error if:** Tool not installed
**Recovery:** Install using provided instructions

---

## Examples

### Command Example
See: [Build Hub Page Command](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md#example-1-command-with-prerequisites)

### Skill Example
See: [Hub Page Generation Skill](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md#example-2-skill-with-prerequisites)

### Agent Example
See: [Hub and Spoke Architect Agent](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md#example-3-agent-with-prerequisites)

---

## File Structure

```
ing-heng-credit-seo/
│
├── PREREQUISITE-SYSTEM-README.md          ← You are here
├── PREREQUISITE-SYSTEM-SUMMARY.md         ← Detailed summary
│
├── framework-docs/
│   ├── PREREQUISITE-CHECKING-SYSTEM.md           (Full spec)
│   ├── PREREQUISITE-INTEGRATION-EXAMPLES.md      (Code examples)
│   ├── PREREQUISITE-QUICK-REFERENCE.md           (Fast lookup)
│   ├── PREREQUISITE-SYSTEM-FLOWCHART.md          (Visual diagrams)
│   ├── PREREQUISITE-IMPLEMENTATION-CHECKLIST.md  (Step-by-step)
│   └── PREREQUISITE-SYSTEM-INDEX.md              (Navigation)
│
└── scripts/
    ├── lib/
    │   └── prerequisite-validator.js         (Core validation logic)
    │
    ├── prerequisite-configs/
    │   ├── build-hub-page.json              (Example config)
    │   ├── refresh-content.json             (Example config)
    │   └── ... more configs
    │
    └── validate-prerequisites.js            (CLI tool)
```

---

## Usage

### Validate Command Prerequisites

```bash
# Check specific command
node scripts/validate-prerequisites.js --command=build-hub-page

# Use custom config
node scripts/validate-prerequisites.js --config=path/to/config.json

# Quiet mode (summary only)
node scripts/validate-prerequisites.js --command=build-hub-page --quiet

# Show help
node scripts/validate-prerequisites.js --help
```

### In Code (Skills/Agents)

```javascript
const { validatePrerequisites } = require('./scripts/lib/prerequisite-validator');
const config = require('./scripts/prerequisite-configs/my-command.json');

// Validate
const results = validatePrerequisites(config);

if (!results.passed) {
  console.error('Prerequisites not met:');
  console.error(results.recoveryPlan);
  process.exit(1);
}

// Continue with execution
console.log('All prerequisites met');
// ... your code
```

---

## Benefits

### For Users
- Know exactly what's missing
- Get step-by-step fix instructions
- Save time debugging
- No guessing what went wrong

### For Developers
- Standard validation system
- Reusable components
- Consistent error format
- Easy to test

### For System
- Fail fast with clear errors
- Prevent cascading failures
- Document dependencies
- Enable automation

---

## Integration Checklist

When creating a new command:

- [ ] Add Prerequisites section to command markdown
- [ ] Create config file in `scripts/prerequisite-configs/`
- [ ] Document validation command
- [ ] List all required files
- [ ] Define dependency chain
- [ ] Add Quick Start guide
- [ ] Test with missing prerequisites
- [ ] Test with complete prerequisites
- [ ] Verify error messages are clear
- [ ] Verify recovery steps work

**Full checklist:** [Implementation Checklist](framework-docs/PREREQUISITE-IMPLEMENTATION-CHECKLIST.md)

---

## Common Patterns

### Pattern 1: Simple File Check
Check if a file exists before running.

```json
{
  "files": [
    {
      "path": "path/to/required-file.json",
      "reason": "Contains data needed for processing",
      "generateCommand": "/generate-file-command"
    }
  ]
}
```

### Pattern 2: Data Validation
Check if file has required fields.

```json
{
  "data": [
    {
      "file": "path/to/file.json",
      "requiredFields": ["keyword", "search_volume"],
      "validationCommand": "node scripts/validate-data.js"
    }
  ]
}
```

### Pattern 3: Command Chain
Ensure commands run in order.

```json
{
  "commands": [
    {
      "name": "first-command",
      "command": "/first-command",
      "outputFile": "output1.json",
      "order": 1
    },
    {
      "name": "second-command",
      "command": "/second-command",
      "outputFile": "output2.json",
      "order": 2
    }
  ]
}
```

---

## Error Message Format

All error messages follow this format:

```
❌ PREREQUISITE ERROR: [Error Type]

What's missing: [Specific item]

Why it's needed: [Explanation]

How to fix:
1. [First step with command]
2. [Verification step]
3. [Retry instruction]

Documentation: [Link to docs]
```

---

## Recovery Plan Format

All recovery plans follow this format:

```
## Recovery Plan

Follow these steps in order:

### 1. [First Action Category]
- Specific step with command
- Expected runtime: ~X minutes

### 2. [Second Action Category]
- Specific step with command
- Expected runtime: ~X minutes

### 3. Retry Original Command
Once all prerequisites are met, run your command again.
```

---

## Testing

### Test Your Prerequisites

```bash
# 1. Test with all prerequisites met (should pass)
node scripts/validate-prerequisites.js --command=my-command

# 2. Test with missing file (should show file error)
rm path/to/required-file.json
node scripts/validate-prerequisites.js --command=my-command

# 3. Test recovery steps (should work)
# Follow the recovery plan shown
# Retry validation
```

---

## Support

### Documentation
- **Quick help:** [Quick Reference](framework-docs/PREREQUISITE-QUICK-REFERENCE.md)
- **Full details:** [Full Specification](framework-docs/PREREQUISITE-CHECKING-SYSTEM.md)
- **Code examples:** [Integration Examples](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md)
- **Navigation:** [System Index](framework-docs/PREREQUISITE-SYSTEM-INDEX.md)

### Code
- **Validator library:** `scripts/lib/prerequisite-validator.js`
- **CLI tool:** `scripts/validate-prerequisites.js`
- **Example configs:** `scripts/prerequisite-configs/*.json`

### Examples
- **Commands:** See `.claude/commands/build-hub-page.md`
- **Skills:** See `.claude/skills/hub-page-generation.md`
- **Agents:** See `.claude/agents/hub-and-spoke-architect.md`

---

## FAQ

**Q: Do I need to use this for every command?**
A: Yes, all commands/skills/agents should validate prerequisites.

**Q: What if my command has no prerequisites?**
A: Create a minimal config with empty arrays: `{"commandName": "my-command", "files": []}`

**Q: Can I skip validation to save time?**
A: No. Validation is fast (< 1 second) and prevents bigger problems.

**Q: How do I test my prerequisites?**
A: Follow the testing section in [Implementation Checklist](framework-docs/PREREQUISITE-IMPLEMENTATION-CHECKLIST.md).

**Q: What if prerequisites can't be auto-generated?**
A: Document manual steps in the error message.

**Q: Can agents auto-fix missing prerequisites?**
A: Yes! See the [Agent Example](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md#example-3-agent-with-prerequisites).

---

## Statistics

- **Documentation:** 7 comprehensive guides (33,000+ words)
- **Code:** 600+ lines of validation logic
- **Configurations:** 4 complete examples
- **Error Templates:** 4 comprehensive templates
- **Examples:** 3 full implementations

---

## Next Steps

### New User?
1. Read this README
2. Review [Quick Reference](framework-docs/PREREQUISITE-QUICK-REFERENCE.md)
3. Try an example validation

### Implementing Prerequisites?
1. Follow [Implementation Checklist](framework-docs/PREREQUISITE-IMPLEMENTATION-CHECKLIST.md)
2. Use [Quick Reference](framework-docs/PREREQUISITE-QUICK-REFERENCE.md) for templates
3. Test thoroughly

### Need Help?
1. Check [Navigation Index](framework-docs/PREREQUISITE-SYSTEM-INDEX.md)
2. Review [Full Specification](framework-docs/PREREQUISITE-CHECKING-SYSTEM.md)
3. See [Integration Examples](framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md)

---

## Version

**Version:** 1.0.0
**Released:** 2025-11-06
**Status:** Production Ready

---

## License

Part of Ing Heng Credit SEO Framework

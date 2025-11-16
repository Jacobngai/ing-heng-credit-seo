# Prerequisite Checking - Quick Reference

**Purpose:** Fast reference for implementing prerequisite checks in commands/skills/agents

---

## 1. Add Prerequisites Section to Command

```markdown
## Prerequisites

### Quick Validation
\`\`\`bash
node scripts/validate-prerequisites.js --command={command-name}
\`\`\`

### Required Files
- `path/to/file.json` - Why it's needed
  - Generate: `/command-to-run`
  - Time: ~X minutes

### Dependency Chain
\`\`\`
/first-command
    ↓
/second-command
    ↓
/this-command ← YOU ARE HERE
\`\`\`

### Quick Start (Missing Prerequisites)
\`\`\`bash
/first-command
/second-command
/this-command
\`\`\`
```

---

## 2. Create Prerequisite Config

**File:** `scripts/prerequisite-configs/{command-name}.json`

```json
{
  "commandName": "command-name",
  "description": "What this command does",
  "files": [
    {
      "path": "path/to/required/file.json",
      "reason": "Why this file is needed",
      "generateCommand": "/command-to-generate-it",
      "docs": "framework-docs/RELATED-DOC.md",
      "order": 1,
      "estimatedTime": "3-5 minutes"
    }
  ],
  "data": [
    {
      "file": "path/to/file.json",
      "type": "data type description",
      "requiredFields": ["field1", "field2", "field3"],
      "validationCommand": "node scripts/validate-data.js",
      "impact": "What happens without this data"
    }
  ],
  "commands": [
    {
      "name": "prerequisite-command",
      "command": "/prerequisite-command",
      "outputFile": "path/to/output.json",
      "reason": "Why this command must run first",
      "exampleOutput": "What success looks like",
      "estimatedTime": "3-5 minutes",
      "nextSteps": "What to do after it completes",
      "order": 1
    }
  ],
  "tools": []
}
```

---

## 3. Add Validation to Code (JavaScript)

```javascript
const { validatePrerequisites } = require('./scripts/lib/prerequisite-validator');

// Load config
const config = require('./scripts/prerequisite-configs/command-name.json');

// Validate
const results = validatePrerequisites(config);

if (!results.passed) {
  console.error('❌ Prerequisites not met\n');
  results.errors.forEach(error => console.error(error));
  console.error('\n' + results.recoveryPlan);
  process.exit(1);
}

// Continue with command execution
console.log('✓ All prerequisites met');
// ... your code here
```

---

## 4. Add Validation to Markdown (Command File)

```markdown
## Command Implementation

**Step 1: Validate Prerequisites**

Before executing this command, validate prerequisites:

\`\`\`bash
node scripts/validate-prerequisites.js --command={command-name}
\`\`\`

If validation fails, follow the recovery plan shown in the error output.

**Step 2: Execute Command**

Once prerequisites are met, proceed with command execution...
```

---

## 5. Common Error Templates

### Missing File

```
❌ PREREQUISITE ERROR: Missing Required File

What's missing: `path/to/file.json`
Why it's needed: Contains data for X

How to fix:
1. Run: /generate-command
2. Verify: ls path/to/file.json
3. Retry this command
```

### Missing Data

```
❌ PREREQUISITE ERROR: Incomplete Data

What's missing: keyword data in `keywords.json`

Expected fields:
- keyword
- search_volume
- intent

Missing fields:
- intent

How to fix:
1. Re-run with: /command --include-intent
2. Validate: node scripts/validate-data.js
3. Retry this command
```

### Missing Command Output

```
❌ PREREQUISITE ERROR: Dependency Command Not Run

What's missing: Output from `/prerequisite-command`

How to fix:
1. Run: /prerequisite-command
2. Expected: "Completed with 47 results"
3. Verify: test -f output.json
4. Retry this command
```

---

## 6. CLI Usage

### Validate Specific Command

```bash
node scripts/validate-prerequisites.js --command=build-hub-page
```

### Use Custom Config

```bash
node scripts/validate-prerequisites.js --config=path/to/config.json
```

### Quiet Mode (Summary Only)

```bash
node scripts/validate-prerequisites.js --command=build-hub-page --quiet
```

### Show Help

```bash
node scripts/validate-prerequisites.js --help
```

---

## 7. Testing Checklist

Before releasing command:

- [ ] Prerequisites section in command file
- [ ] Config file created in `scripts/prerequisite-configs/`
- [ ] Validation command documented
- [ ] Dependency chain documented
- [ ] Quick start guide provided
- [ ] Test with missing file (should error)
- [ ] Test with incomplete data (should error)
- [ ] Test with all prerequisites (should succeed)
- [ ] Test recovery steps actually work

---

## 8. File Locations

```
project-root/
├── .claude/
│   ├── commands/
│   │   └── command-name.md         ← Add prerequisites section
│   ├── skills/
│   │   └── skill-name.md           ← Add prerequisites section
│   └── agents/
│       └── agent-name.md           ← Add prerequisites section
│
├── scripts/
│   ├── lib/
│   │   └── prerequisite-validator.js    ← Core validation logic
│   ├── prerequisite-configs/
│   │   └── command-name.json            ← Config for each command
│   └── validate-prerequisites.js         ← CLI tool
│
└── framework-docs/
    ├── PREREQUISITE-CHECKING-SYSTEM.md  ← Full documentation
    └── PREREQUISITE-QUICK-REFERENCE.md  ← This file
```

---

## 9. Common Patterns

### Pattern 1: Simple File Check

```json
{
  "files": [
    {
      "path": "path/to/file.json",
      "reason": "Why needed",
      "generateCommand": "/generate-command"
    }
  ]
}
```

### Pattern 2: Data Validation

```json
{
  "data": [
    {
      "file": "path/to/file.json",
      "requiredFields": ["field1", "field2"],
      "validationCommand": "node scripts/validate.js"
    }
  ]
}
```

### Pattern 3: Command Chain

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

### Pattern 4: Tool Check

```json
{
  "tools": [
    {
      "name": "vercel",
      "reason": "Required for deployment",
      "install": {
        "npm": "npm install -g vercel"
      },
      "verify": "vercel --version"
    }
  ]
}
```

---

## 10. Best Practices

### DO:
- ✓ Check prerequisites at START of execution
- ✓ Provide specific file paths (absolute)
- ✓ Include exact commands to run
- ✓ Explain WHY each prerequisite is needed
- ✓ Estimate time for prerequisites
- ✓ Sort by dependency order
- ✓ Test all error paths

### DON'T:
- ✗ Assume prerequisites are met
- ✗ Use vague errors ("something missing")
- ✗ Skip validation "to save time"
- ✗ Provide incomplete recovery steps
- ✗ Use relative paths
- ✗ Forget dependency chains

---

## 11. Example Workflows

### Workflow 1: New Command with Prerequisites

```bash
# 1. Create command file
touch .claude/commands/my-command.md

# 2. Add prerequisites section (see template above)

# 3. Create config file
touch scripts/prerequisite-configs/my-command.json

# 4. Add prerequisite definitions (see patterns above)

# 5. Test validation
node scripts/validate-prerequisites.js --command=my-command

# 6. Test with missing prerequisites
# (delete required files)
node scripts/validate-prerequisites.js --command=my-command
# Should show errors and recovery plan

# 7. Test with complete prerequisites
# (run prerequisite commands)
node scripts/validate-prerequisites.js --command=my-command
# Should pass
```

### Workflow 2: Add Prerequisites to Existing Command

```bash
# 1. Update command markdown file
# Add prerequisites section at top

# 2. Create config file
touch scripts/prerequisite-configs/existing-command.json

# 3. Identify prerequisites
# What files does this command need?
# What data must be present?
# What commands must run first?

# 4. Document in config file

# 5. Test validation

# 6. Update command documentation
```

---

## 12. Troubleshooting

### Issue: Validation script not found

```bash
# Ensure you're in project root
cd /path/to/ing-heng-credit-seo

# Check script exists
ls scripts/validate-prerequisites.js

# Run with full path
node scripts/validate-prerequisites.js --command=my-command
```

### Issue: Config file not found

```bash
# Check config exists
ls scripts/prerequisite-configs/my-command.json

# Create if missing
touch scripts/prerequisite-configs/my-command.json

# Add minimum config
echo '{"commandName":"my-command","files":[]}' > scripts/prerequisite-configs/my-command.json
```

### Issue: False positive (file exists but validation fails)

```bash
# Check file path is correct (absolute vs relative)
# Check file permissions
ls -la path/to/file.json

# Check JSON is valid
node -e "console.log(JSON.parse(require('fs').readFileSync('path/to/file.json')))"
```

---

## 13. Quick Copy-Paste Templates

### Minimal Command Prerequisites

```markdown
## Prerequisites

\`\`\`bash
node scripts/validate-prerequisites.js --command={command-name}
\`\`\`

### Required Files
- `path/to/file.json` - Description
  - Generate: `/command`
```

### Minimal Config File

```json
{
  "commandName": "command-name",
  "description": "Command description",
  "files": [
    {
      "path": "path/to/file.json",
      "reason": "Why needed",
      "generateCommand": "/generate-command"
    }
  ]
}
```

### Minimal Validation Code

```javascript
const { validatePrerequisites } = require('./scripts/lib/prerequisite-validator');
const config = require('./scripts/prerequisite-configs/command-name.json');

const results = validatePrerequisites(config);
if (!results.passed) {
  console.error(results.recoveryPlan);
  process.exit(1);
}
```

---

## Summary

1. Add prerequisites section to command/skill/agent file
2. Create config file in `scripts/prerequisite-configs/`
3. Document validation command
4. Test with missing prerequisites
5. Test with complete prerequisites
6. Update documentation

**Full documentation:** `framework-docs/PREREQUISITE-CHECKING-SYSTEM.md`

**Examples:** `framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md`

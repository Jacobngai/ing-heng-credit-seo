# Prerequisite Checking System

**Version:** 1.0.0
**Last Updated:** 2025-11-06
**Purpose:** Standard system for validating dependencies before command/skill/agent execution

---

## System Overview

Every command, skill, and agent MUST validate prerequisites before execution. This system:
- Prevents cascading failures
- Educates users on proper workflow
- Provides clear recovery paths
- Ensures data integrity

---

## 1. Prerequisite Check Template

### Standard Template Structure

```markdown
## Prerequisites

### Required Files
- [ ] `path/to/required/file.md` - Description of why needed
- [ ] `path/to/another/file.json` - Description of why needed

### Required Data
- [ ] Keyword research completed
- [ ] Competitor analysis performed
- [ ] Target URLs identified

### Required Tools
- [ ] Node.js installed (version 18+)
- [ ] Git configured
- [ ] Vercel CLI authenticated

### Dependency Chain
This command requires:
1. **First:** Command/skill that must run before this one
2. **Then:** Next dependency in sequence
3. **Finally:** This command

### Validation Checklist
Run these checks before executing:
```bash
# Check file exists
test -f path/to/file.md && echo "✓ File exists" || echo "✗ Missing file"

# Check data completeness
grep -q "keyword_count" path/to/data.json && echo "✓ Data valid" || echo "✗ Incomplete data"

# Check tool availability
command -v vercel >/dev/null 2>&1 && echo "✓ Vercel CLI installed" || echo "✗ Vercel CLI missing"
```
```

---

## 2. Error Message Templates

### Template A: Missing File

```markdown
❌ PREREQUISITE ERROR: Missing Required File

**What's missing:** `{FILE_PATH}`

**Why it's needed:** {EXPLANATION}

**How to fix:**
1. Run this command first:
   ```bash
   {COMMAND_TO_RUN}
   ```

2. Verify the file was created:
   ```bash
   ls -lh {FILE_PATH}
   ```

3. Check the file contains required data:
   ```bash
   cat {FILE_PATH} | grep "{REQUIRED_FIELD}"
   ```

4. Then retry this command

**Example workflow:**
```bash
# Step 1: Generate prerequisite
{EXAMPLE_COMMAND_1}

# Step 2: Verify output
{EXAMPLE_VERIFICATION}

# Step 3: Run this command
{ORIGINAL_COMMAND}
```

**Need help?** See: {LINK_TO_DOCUMENTATION}
```

### Template B: Missing Data

```markdown
❌ PREREQUISITE ERROR: Incomplete Data

**What's missing:** {DATA_TYPE} in `{FILE_PATH}`

**Expected fields:**
- `{FIELD_1}`: {DESCRIPTION}
- `{FIELD_2}`: {DESCRIPTION}
- `{FIELD_3}`: {DESCRIPTION}

**Found fields:**
- `{ACTUAL_FIELD_1}`: ✓ Present
- `{ACTUAL_FIELD_2}`: ✗ Missing
- `{ACTUAL_FIELD_3}`: ✗ Missing

**How to fix:**
1. Open the file:
   ```bash
   code {FILE_PATH}
   ```

2. Add the missing fields:
   ```json
   {
     "{FIELD_2}": "{EXAMPLE_VALUE}",
     "{FIELD_3}": "{EXAMPLE_VALUE}"
   }
   ```

3. Validate the data:
   ```bash
   {VALIDATION_COMMAND}
   ```

4. Then retry this command

**Why this matters:** {EXPLANATION_OF_IMPACT}
```

### Template C: Missing Dependency Command

```markdown
❌ PREREQUISITE ERROR: Dependency Command Not Run

**What's missing:** Output from `{COMMAND_NAME}`

**Why it's needed:** {EXPLANATION}

**Dependency chain:**
```
{COMMAND_1} (completed)
    ↓
{COMMAND_2} (← YOU ARE HERE - MISSING)
    ↓
{COMMAND_3} (current command - blocked)
```

**How to fix:**
1. Run the prerequisite command:
   ```bash
   {PREREQUISITE_COMMAND}
   ```

2. Expected output:
   ```
   {EXAMPLE_OUTPUT}
   ```

3. Verify completion:
   ```bash
   # Check for output file
   test -f {OUTPUT_FILE} && echo "✓ Ready" || echo "✗ Not ready"
   ```

4. Then retry this command:
   ```bash
   {ORIGINAL_COMMAND}
   ```

**Quick reference:**
- Prerequisite runtime: ~{ESTIMATED_TIME}
- Output location: `{OUTPUT_PATH}`
- Next steps: {NEXT_STEPS_AFTER_FIX}
```

### Template D: Missing Tool/CLI

```markdown
❌ PREREQUISITE ERROR: Required Tool Not Found

**What's missing:** {TOOL_NAME}

**Why it's needed:** {EXPLANATION}

**Installation instructions:**

**For Windows:**
```bash
# Using npm
npm install -g {TOOL_NAME}

# Or using Chocolatey
choco install {TOOL_NAME}
```

**For macOS:**
```bash
# Using npm
npm install -g {TOOL_NAME}

# Or using Homebrew
brew install {TOOL_NAME}
```

**For Linux:**
```bash
# Using npm
npm install -g {TOOL_NAME}

# Or using package manager
sudo apt install {TOOL_NAME}
```

**Verification:**
```bash
# Check installation
{TOOL_NAME} --version

# Expected output
{EXPECTED_VERSION_FORMAT}
```

**Authentication (if required):**
```bash
{TOOL_NAME} login
```

**Then retry this command**

**Documentation:** {TOOL_DOCUMENTATION_LINK}
```

---

## 3. Validation Logic (Pseudo-code)

### Core Validation Function

```javascript
/**
 * Prerequisite validation system
 * @param {Object} prerequisites - Configuration object
 * @returns {Object} Validation result with errors/warnings
 */
function validatePrerequisites(prerequisites) {
  const errors = [];
  const warnings = [];
  const results = {
    passed: true,
    errors: [],
    warnings: [],
    missingFiles: [],
    missingData: [],
    missingTools: [],
    recoverySteps: []
  };

  // 1. Check required files
  if (prerequisites.files) {
    for (const file of prerequisites.files) {
      if (!fileExists(file.path)) {
        results.passed = false;
        results.missingFiles.push(file);
        results.errors.push(
          generateErrorMessage('MISSING_FILE', {
            filePath: file.path,
            explanation: file.reason,
            command: file.generateCommand,
            documentation: file.docs
          })
        );
      }
    }
  }

  // 2. Check required data fields
  if (prerequisites.data) {
    for (const dataCheck of prerequisites.data) {
      const data = readFile(dataCheck.file);
      const missingFields = checkFields(data, dataCheck.requiredFields);

      if (missingFields.length > 0) {
        results.passed = false;
        results.missingData.push({
          file: dataCheck.file,
          missing: missingFields
        });
        results.errors.push(
          generateErrorMessage('MISSING_DATA', {
            filePath: dataCheck.file,
            dataType: dataCheck.type,
            required: dataCheck.requiredFields,
            found: Object.keys(data),
            missing: missingFields,
            validation: dataCheck.validationCommand,
            impact: dataCheck.impact
          })
        );
      }
    }
  }

  // 3. Check dependency commands
  if (prerequisites.commands) {
    for (const cmd of prerequisites.commands) {
      if (!commandOutputExists(cmd.outputFile)) {
        results.passed = false;
        results.errors.push(
          generateErrorMessage('MISSING_COMMAND', {
            commandName: cmd.name,
            explanation: cmd.reason,
            command: cmd.command,
            expectedOutput: cmd.exampleOutput,
            outputFile: cmd.outputFile,
            estimatedTime: cmd.estimatedTime,
            nextSteps: cmd.nextSteps
          })
        );

        // Add to recovery steps
        results.recoverySteps.push({
          order: cmd.order,
          command: cmd.command,
          description: cmd.description
        });
      }
    }
  }

  // 4. Check required tools
  if (prerequisites.tools) {
    for (const tool of prerequisites.tools) {
      if (!toolInstalled(tool.name)) {
        results.passed = false;
        results.missingTools.push(tool);
        results.errors.push(
          generateErrorMessage('MISSING_TOOL', {
            toolName: tool.name,
            explanation: tool.reason,
            installInstructions: tool.install,
            verificationCommand: tool.verify,
            documentation: tool.docs
          })
        );
      }
    }
  }

  // 5. Generate recovery plan
  if (!results.passed) {
    results.recoverySteps.sort((a, b) => a.order - b.order);
    results.recoveryPlan = generateRecoveryPlan(results);
  }

  return results;
}

/**
 * Generate human-readable recovery plan
 */
function generateRecoveryPlan(results) {
  let plan = "## Recovery Plan\n\n";
  plan += "Follow these steps in order:\n\n";

  let step = 1;

  // Missing tools first
  if (results.missingTools.length > 0) {
    plan += `### ${step}. Install Required Tools\n\n`;
    results.missingTools.forEach(tool => {
      plan += `- Install ${tool.name}: \`${tool.install.npm}\`\n`;
    });
    plan += "\n";
    step++;
  }

  // Missing files/commands
  if (results.recoverySteps.length > 0) {
    plan += `### ${step}. Run Prerequisite Commands\n\n`;
    results.recoverySteps.forEach((cmd, idx) => {
      plan += `${step}.${idx + 1}. ${cmd.description}\n`;
      plan += `   \`\`\`bash\n   ${cmd.command}\n   \`\`\`\n\n`;
    });
    step++;
  }

  // Data fixes
  if (results.missingData.length > 0) {
    plan += `### ${step}. Complete Missing Data\n\n`;
    results.missingData.forEach(data => {
      plan += `- Edit \`${data.file}\` and add: ${data.missing.join(', ')}\n`;
    });
    plan += "\n";
    step++;
  }

  plan += `### ${step}. Retry Original Command\n\n`;
  plan += "Once all prerequisites are met, run your command again.\n";

  return plan;
}

/**
 * Helper: Check if file exists
 */
function fileExists(path) {
  const fs = require('fs');
  return fs.existsSync(path);
}

/**
 * Helper: Check if tool is installed
 */
function toolInstalled(toolName) {
  const { execSync } = require('child_process');
  try {
    execSync(`${toolName} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Helper: Check data fields
 */
function checkFields(data, requiredFields) {
  const missing = [];
  for (const field of requiredFields) {
    if (!(field in data) || data[field] === null || data[field] === '') {
      missing.push(field);
    }
  }
  return missing;
}
```

---

## 4. Configuration Schema

### Prerequisite Configuration Object

```typescript
interface PrerequisiteConfig {
  files?: {
    path: string;
    reason: string;
    generateCommand: string;
    docs?: string;
  }[];

  data?: {
    file: string;
    type: string;
    requiredFields: string[];
    validationCommand: string;
    impact: string;
  }[];

  commands?: {
    name: string;
    command: string;
    outputFile: string;
    reason: string;
    exampleOutput: string;
    estimatedTime: string;
    nextSteps: string;
    order: number;
  }[];

  tools?: {
    name: string;
    reason: string;
    install: {
      npm?: string;
      chocolatey?: string;
      brew?: string;
      apt?: string;
    };
    verify: string;
    docs: string;
  }[];
}
```

### Example Configuration

```javascript
const prerequisites = {
  files: [
    {
      path: 'clients/ing-heng/seo/keyword-research/primary-keywords.json',
      reason: 'Contains target keywords for hub page generation',
      generateCommand: '/keyword-opportunity-scan',
      docs: 'framework-docs/KEYWORD-RESEARCH.md'
    },
    {
      path: 'clients/ing-heng/seo/competitor-analysis/content-gaps.json',
      reason: 'Identifies content opportunities vs competitors',
      generateCommand: '/competitor-analysis',
      docs: 'framework-docs/COMPETITOR-ANALYSIS.md'
    }
  ],

  data: [
    {
      file: 'clients/ing-heng/seo/keyword-research/primary-keywords.json',
      type: 'keyword data',
      requiredFields: ['keyword', 'search_volume', 'difficulty', 'intent'],
      validationCommand: 'node scripts/validate-keyword-data.js',
      impact: 'Without complete keyword data, hub pages cannot be optimized for search intent'
    }
  ],

  commands: [
    {
      name: 'keyword-opportunity-scan',
      command: '/keyword-opportunity-scan',
      outputFile: 'clients/ing-heng/seo/keyword-research/opportunities.json',
      reason: 'Identifies high-value keywords to target',
      exampleOutput: 'Found 47 keyword opportunities with avg. volume 2,400',
      estimatedTime: '3-5 minutes',
      nextSteps: 'Review opportunities and select targets',
      order: 1
    },
    {
      name: 'competitor-analysis',
      command: '/competitor-analysis',
      outputFile: 'clients/ing-heng/seo/competitor-analysis/report.json',
      reason: 'Analyzes competitor content strategy',
      exampleOutput: 'Analyzed 5 competitors, found 23 content gaps',
      estimatedTime: '5-8 minutes',
      nextSteps: 'Identify content gap opportunities',
      order: 2
    }
  ],

  tools: [
    {
      name: 'vercel',
      reason: 'Required for deploying to production',
      install: {
        npm: 'npm install -g vercel',
        chocolatey: 'choco install vercel-cli',
        brew: 'brew install vercel-cli'
      },
      verify: 'vercel --version',
      docs: 'https://vercel.com/docs/cli'
    }
  ]
};
```

---

## 5. Integration Instructions

### Step 1: Add to Command Header

Every command file (`.claude/commands/*.md`) should start with:

```markdown
# Command: {Command Name}

## Prerequisites

**IMPORTANT:** This command requires the following prerequisites. Run validation before executing.

### Validation Command
\`\`\`bash
node scripts/validate-prerequisites.js --command={command-name}
\`\`\`

### Required Files
- `path/to/file.md` - Description
- `path/to/another.json` - Description

### Required Commands (Run First)
1. `/command-one` - Why needed
2. `/command-two` - Why needed

### Expected Output
After running prerequisites, you should have:
- File `X` containing data `Y`
- Report showing results `Z`

---

## Command Description
...
```

### Step 2: Create Validation Script

Create `scripts/validate-prerequisites.js`:

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import configuration
const config = require('./prerequisite-configs/{commandName}.json');

// Import validation logic
const { validatePrerequisites } = require('./lib/prerequisite-validator');

// Run validation
const results = validatePrerequisites(config);

// Display results
if (results.passed) {
  console.log('✓ All prerequisites met');
  process.exit(0);
} else {
  console.error('✗ Prerequisites not met\n');
  results.errors.forEach(error => console.error(error));
  console.error('\n' + results.recoveryPlan);
  process.exit(1);
}
```

### Step 3: Create Config Files

Create `scripts/prerequisite-configs/{command-name}.json`:

```json
{
  "commandName": "build-hub-page",
  "description": "Build SEO hub page with spoke content",
  "files": [
    {
      "path": "clients/ing-heng/seo/keyword-research/primary-keywords.json",
      "reason": "Contains target keywords for hub page",
      "generateCommand": "/keyword-opportunity-scan",
      "docs": "framework-docs/KEYWORD-RESEARCH.md"
    }
  ],
  "commands": [
    {
      "name": "keyword-opportunity-scan",
      "command": "/keyword-opportunity-scan",
      "outputFile": "clients/ing-heng/seo/keyword-research/opportunities.json",
      "reason": "Identifies keywords to target",
      "exampleOutput": "Found 47 opportunities",
      "estimatedTime": "3-5 minutes",
      "order": 1
    }
  ]
}
```

### Step 4: Add to Agent Logic

Agents should validate prerequisites in their initialization:

```javascript
class HubAndSpokeAgent {
  async execute() {
    // 1. Validate prerequisites
    const validation = await this.validatePrerequisites();

    if (!validation.passed) {
      throw new PrerequisiteError(
        validation.errors,
        validation.recoveryPlan
      );
    }

    // 2. Proceed with execution
    // ...
  }

  async validatePrerequisites() {
    return validatePrerequisites(this.config.prerequisites);
  }
}
```

---

## 6. Example Implementations

### Example 1: Hub Page Builder

**File:** `.claude/commands/build-hub-page.md`

```markdown
# Command: Build Hub Page

## Prerequisites

### Validation
\`\`\`bash
node scripts/validate-prerequisites.js --command=build-hub-page
\`\`\`

### Required Files
- `clients/ing-heng/seo/keyword-research/primary-keywords.json`
  - WHY: Contains target keywords for hub page optimization
  - HOW: Run `/keyword-opportunity-scan`

- `clients/ing-heng/seo/content-strategy/hub-topics.json`
  - WHY: Defines hub topic structure and spoke relationships
  - HOW: Run `/organize-by-intent`

### Required Commands (Run First)
1. `/keyword-opportunity-scan`
   - Identifies high-value keywords
   - Runtime: ~3-5 minutes
   - Output: `keyword-research/opportunities.json`

2. `/organize-by-intent`
   - Groups keywords by search intent
   - Runtime: ~2-3 minutes
   - Output: `content-strategy/hub-topics.json`

### Dependency Chain
\`\`\`
/keyword-opportunity-scan
    ↓
/organize-by-intent
    ↓
/build-hub-page (THIS COMMAND)
\`\`\`

### Quick Start (If Missing Prerequisites)
\`\`\`bash
# Run all prerequisites
/keyword-opportunity-scan
/organize-by-intent

# Then run this command
/build-hub-page
\`\`\`

---

## Command Description
Builds a comprehensive SEO hub page...
```

**Config:** `scripts/prerequisite-configs/build-hub-page.json`

```json
{
  "commandName": "build-hub-page",
  "description": "Build SEO hub page with spoke content",
  "files": [
    {
      "path": "clients/ing-heng/seo/keyword-research/primary-keywords.json",
      "reason": "Contains target keywords for hub page optimization",
      "generateCommand": "/keyword-opportunity-scan",
      "docs": "framework-docs/KEYWORD-RESEARCH.md"
    },
    {
      "path": "clients/ing-heng/seo/content-strategy/hub-topics.json",
      "reason": "Defines hub topic structure and spoke relationships",
      "generateCommand": "/organize-by-intent",
      "docs": "framework-docs/HUB-AND-SPOKE.md"
    }
  ],
  "data": [
    {
      "file": "clients/ing-heng/seo/keyword-research/primary-keywords.json",
      "type": "keyword data",
      "requiredFields": ["keyword", "search_volume", "difficulty", "intent"],
      "validationCommand": "node scripts/validate-keyword-data.js",
      "impact": "Without complete keyword data, hub pages cannot be optimized for search intent"
    }
  ],
  "commands": [
    {
      "name": "keyword-opportunity-scan",
      "command": "/keyword-opportunity-scan",
      "outputFile": "clients/ing-heng/seo/keyword-research/opportunities.json",
      "reason": "Identifies high-value keywords to target",
      "exampleOutput": "Found 47 keyword opportunities with avg. volume 2,400",
      "estimatedTime": "3-5 minutes",
      "nextSteps": "Review opportunities and select targets",
      "order": 1
    },
    {
      "name": "organize-by-intent",
      "command": "/organize-by-intent",
      "outputFile": "clients/ing-heng/seo/content-strategy/hub-topics.json",
      "reason": "Groups keywords by search intent for hub structure",
      "exampleOutput": "Created 8 hub topics with 47 spoke keywords",
      "estimatedTime": "2-3 minutes",
      "nextSteps": "Review hub structure before building pages",
      "order": 2
    }
  ]
}
```

### Example 2: Content Refresh

**File:** `.claude/commands/refresh-content.md`

```markdown
# Command: Refresh Content

## Prerequisites

### Validation
\`\`\`bash
node scripts/validate-prerequisites.js --command=refresh-content
\`\`\`

### Required Files
- `clients/ing-heng/seo/analytics/performance-report.json`
  - WHY: Identifies underperforming content that needs refresh
  - HOW: Run `/audit-content-performance`

- `clients/ing-heng/seo/competitor-analysis/content-gaps.json`
  - WHY: Shows what competitors are doing better
  - HOW: Run `/competitor-analysis`

### Required Commands (Run First)
1. `/audit-content-performance`
   - Analyzes current content performance
   - Runtime: ~5-7 minutes
   - Output: `analytics/performance-report.json`

2. `/competitor-analysis`
   - Identifies competitor content strategies
   - Runtime: ~5-8 minutes
   - Output: `competitor-analysis/content-gaps.json`

### Dependency Chain
\`\`\`
/audit-content-performance
    ↓
/competitor-analysis
    ↓
/refresh-content (THIS COMMAND)
\`\`\`

### Quick Start (If Missing Prerequisites)
\`\`\`bash
# Run all prerequisites
/audit-content-performance
/competitor-analysis

# Then run this command
/refresh-content --url=/en/blog/excavator-financing
\`\`\`

---

## Command Description
Refreshes existing content using skyscraper technique...
```

---

## 7. Best Practices

### DO:
- Check prerequisites at the START of execution
- Provide specific file paths (absolute paths)
- Include exact commands to run
- Explain WHY each prerequisite is needed
- Estimate time required for prerequisites
- Sort prerequisites by dependency order
- Include validation commands
- Provide example outputs
- Link to relevant documentation

### DON'T:
- Assume prerequisites are met
- Use vague error messages ("something is missing")
- Skip validation "to save time"
- Provide incomplete recovery steps
- Use relative paths that might not resolve
- Forget to document dependency chains
- Provide commands without context

---

## 8. Testing Checklist

Before releasing a command/skill/agent, test:

- [ ] Run with all prerequisites met (should succeed)
- [ ] Run with missing file (should show file error)
- [ ] Run with incomplete data (should show data error)
- [ ] Run with missing tool (should show install instructions)
- [ ] Run with missing dependency command (should show recovery plan)
- [ ] Verify error messages are clear and actionable
- [ ] Verify recovery steps actually work
- [ ] Test validation script independently

---

## 9. Maintenance

### When to Update Prerequisites
- New dependency added to command
- Data schema changes
- Tool version requirements change
- Workflow order changes

### Update Process
1. Update command markdown file
2. Update prerequisite config JSON
3. Update validation script if needed
4. Test all error paths
5. Update documentation
6. Notify team of changes

---

## 10. Reference Implementation

See these files for complete examples:
- `scripts/lib/prerequisite-validator.js` - Core validation logic
- `scripts/validate-prerequisites.js` - CLI validation tool
- `scripts/prerequisite-configs/` - All command configurations
- `.claude/commands/build-hub-page.md` - Example command with prerequisites

---

## Summary

This prerequisite checking system ensures:
1. Commands fail fast with clear error messages
2. Users know exactly what to do next
3. Dependency chains are documented
4. Recovery is straightforward
5. Data integrity is maintained

Every command/skill/agent MUST implement this system to maintain framework quality and user experience.

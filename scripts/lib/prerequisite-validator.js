#!/usr/bin/env node

/**
 * Prerequisite Validation System
 *
 * Validates that all prerequisites are met before command execution.
 * Generates educational error messages with recovery steps.
 *
 * @module prerequisite-validator
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Error message templates
 */
const ERROR_TEMPLATES = {
  MISSING_FILE: (data) => `
❌ PREREQUISITE ERROR: Missing Required File

**What's missing:** \`${data.filePath}\`

**Why it's needed:** ${data.explanation}

**How to fix:**
1. Run this command first:
   \`\`\`bash
   ${data.command}
   \`\`\`

2. Verify the file was created:
   \`\`\`bash
   ls -lh "${data.filePath}"
   \`\`\`

3. Then retry this command

${data.documentation ? `**Documentation:** ${data.documentation}` : ''}
`,

  MISSING_DATA: (data) => `
❌ PREREQUISITE ERROR: Incomplete Data

**What's missing:** ${data.dataType} in \`${data.filePath}\`

**Expected fields:**
${data.required.map(f => `- \`${f}\``).join('\n')}

**Found fields:**
${data.found.map(f => `- \`${f}\`: ✓ Present`).join('\n')}

**Missing fields:**
${data.missing.map(f => `- \`${f}\`: ✗ Missing`).join('\n')}

**How to fix:**
1. Open the file:
   \`\`\`bash
   code "${data.filePath}"
   \`\`\`

2. Add the missing fields

3. Validate the data:
   \`\`\`bash
   ${data.validation}
   \`\`\`

4. Then retry this command

**Why this matters:** ${data.impact}
`,

  MISSING_COMMAND: (data) => `
❌ PREREQUISITE ERROR: Dependency Command Not Run

**What's missing:** Output from \`${data.commandName}\`

**Why it's needed:** ${data.explanation}

**How to fix:**
1. Run the prerequisite command:
   \`\`\`bash
   ${data.command}
   \`\`\`

2. Expected output:
   \`\`\`
   ${data.expectedOutput}
   \`\`\`

3. Verify completion:
   \`\`\`bash
   test -f "${data.outputFile}" && echo "✓ Ready" || echo "✗ Not ready"
   \`\`\`

4. Then retry this command

**Quick reference:**
- Prerequisite runtime: ~${data.estimatedTime}
- Output location: \`${data.outputFile}\`
- Next steps: ${data.nextSteps}
`,

  MISSING_TOOL: (data) => `
❌ PREREQUISITE ERROR: Required Tool Not Found

**What's missing:** ${data.toolName}

**Why it's needed:** ${data.explanation}

**Installation instructions:**

**For Windows:**
\`\`\`bash
# Using npm
${data.installInstructions.npm || 'Not available'}

# Or using Chocolatey
${data.installInstructions.chocolatey || 'Not available'}
\`\`\`

**For macOS:**
\`\`\`bash
# Using npm
${data.installInstructions.npm || 'Not available'}

# Or using Homebrew
${data.installInstructions.brew || 'Not available'}
\`\`\`

**For Linux:**
\`\`\`bash
# Using npm
${data.installInstructions.npm || 'Not available'}

# Or using package manager
${data.installInstructions.apt || 'Not available'}
\`\`\`

**Verification:**
\`\`\`bash
${data.verificationCommand}
\`\`\`

**Then retry this command**

${data.documentation ? `**Documentation:** ${data.documentation}` : ''}
`
};

/**
 * Check if a file exists
 * @param {string} filePath - Path to check
 * @returns {boolean}
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

/**
 * Read JSON file
 * @param {string} filePath - Path to JSON file
 * @returns {Object|null}
 */
function readJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Check if tool is installed
 * @param {string} toolName - Name of tool to check
 * @returns {boolean}
 */
function toolInstalled(toolName) {
  try {
    execSync(`${toolName} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if data has required fields
 * @param {Object} data - Data object to check
 * @param {string[]} requiredFields - Required field names
 * @returns {string[]} Missing field names
 */
function checkFields(data, requiredFields) {
  const missing = [];

  for (const field of requiredFields) {
    // Handle nested fields (e.g., "keyword_data.search_volume")
    const fieldParts = field.split('.');
    let value = data;

    for (const part of fieldParts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        value = undefined;
        break;
      }
    }

    if (value === undefined || value === null || value === '') {
      missing.push(field);
    }
  }

  return missing;
}

/**
 * Generate error message from template
 * @param {string} type - Error type (MISSING_FILE, MISSING_DATA, etc.)
 * @param {Object} data - Data to populate template
 * @returns {string}
 */
function generateErrorMessage(type, data) {
  const template = ERROR_TEMPLATES[type];
  if (!template) {
    return `Unknown error type: ${type}`;
  }
  return template(data);
}

/**
 * Generate recovery plan
 * @param {Object} results - Validation results
 * @returns {string}
 */
function generateRecoveryPlan(results) {
  let plan = "\n## 🔧 Recovery Plan\n\n";
  plan += "Follow these steps in order to fix all issues:\n\n";

  let step = 1;

  // Missing tools first
  if (results.missingTools.length > 0) {
    plan += `### ${step}. Install Required Tools\n\n`;
    results.missingTools.forEach(tool => {
      plan += `- **${tool.name}**\n`;
      plan += `  \`\`\`bash\n  ${tool.install.npm || tool.install.chocolatey || tool.install.brew || tool.install.apt}\n  \`\`\`\n\n`;
    });
    step++;
  }

  // Missing files/commands
  if (results.recoverySteps.length > 0) {
    plan += `### ${step}. Run Prerequisite Commands\n\n`;
    results.recoverySteps.forEach((cmd, idx) => {
      plan += `**${step}.${idx + 1}. ${cmd.description}**\n`;
      plan += `\`\`\`bash\n${cmd.command}\n\`\`\`\n`;
      plan += `Expected runtime: ~${cmd.estimatedTime}\n\n`;
    });
    step++;
  }

  // Data fixes
  if (results.missingData.length > 0) {
    plan += `### ${step}. Complete Missing Data\n\n`;
    results.missingData.forEach(data => {
      plan += `- Edit \`${data.file}\` and add these fields:\n`;
      data.missing.forEach(field => {
        plan += `  - \`${field}\`\n`;
      });
      plan += '\n';
    });
    step++;
  }

  plan += `### ${step}. Retry Original Command\n\n`;
  plan += "Once all prerequisites are met, run your command again.\n";

  return plan;
}

/**
 * Main validation function
 * @param {Object} prerequisites - Prerequisite configuration
 * @returns {Object} Validation results
 */
function validatePrerequisites(prerequisites) {
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

        // If there's a command to generate this file, add to recovery steps
        if (file.generateCommand) {
          results.recoverySteps.push({
            order: file.order || 1,
            command: file.generateCommand,
            description: `Generate ${path.basename(file.path)}`,
            estimatedTime: file.estimatedTime || '2-5 minutes'
          });
        }
      }
    }
  }

  // 2. Check required data fields
  if (prerequisites.data) {
    for (const dataCheck of prerequisites.data) {
      if (!fileExists(dataCheck.file)) {
        // Already caught by file check above
        continue;
      }

      const data = readJsonFile(dataCheck.file);
      if (!data) {
        results.passed = false;
        results.errors.push(`Failed to read JSON from ${dataCheck.file}`);
        continue;
      }

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
      if (!fileExists(cmd.outputFile)) {
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
          description: cmd.reason,
          estimatedTime: cmd.estimatedTime
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
 * Display validation results
 * @param {Object} results - Validation results
 * @param {boolean} verbose - Show all details
 */
function displayResults(results, verbose = true) {
  if (results.passed) {
    console.log('✅ All prerequisites met\n');
    return;
  }

  console.error('❌ Prerequisites not met\n');
  console.error('━'.repeat(80));

  if (verbose) {
    results.errors.forEach((error, idx) => {
      console.error(error);
      if (idx < results.errors.length - 1) {
        console.error('\n' + '─'.repeat(80) + '\n');
      }
    });
  } else {
    console.error(`\nFound ${results.errors.length} error(s):`);
    if (results.missingFiles.length > 0) {
      console.error(`- ${results.missingFiles.length} missing file(s)`);
    }
    if (results.missingData.length > 0) {
      console.error(`- ${results.missingData.length} incomplete data file(s)`);
    }
    if (results.missingTools.length > 0) {
      console.error(`- ${results.missingTools.length} missing tool(s)`);
    }
  }

  console.error('\n' + '━'.repeat(80));
  console.error(results.recoveryPlan);
}

module.exports = {
  validatePrerequisites,
  displayResults,
  fileExists,
  toolInstalled,
  checkFields,
  generateErrorMessage,
  generateRecoveryPlan
};

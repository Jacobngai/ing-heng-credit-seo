# Prerequisite Implementation Checklist

**Purpose:** Step-by-step checklist for implementing prerequisite checking in commands/skills/agents

---

## For Commands (.claude/commands/*.md)

### Phase 1: Documentation

- [ ] Add Prerequisites section at top of command file
- [ ] Document validation command
  ```bash
  node scripts/validate-prerequisites.js --command={command-name}
  ```
- [ ] List all required files with:
  - [ ] File path (absolute)
  - [ ] Reason why needed
  - [ ] Command to generate it
  - [ ] Estimated time
- [ ] Document dependency chain
  ```
  /first-command
      ↓
  /second-command
      ↓
  /this-command ← YOU ARE HERE
  ```
- [ ] Add "Quick Start" section for missing prerequisites
- [ ] Add troubleshooting section with common errors
- [ ] Link to related documentation

### Phase 2: Configuration

- [ ] Create config file: `scripts/prerequisite-configs/{command-name}.json`
- [ ] Add command name and description
- [ ] Define required files:
  ```json
  {
    "files": [
      {
        "path": "absolute/path/to/file.json",
        "reason": "why this file is needed",
        "generateCommand": "/command-to-generate-it",
        "docs": "framework-docs/RELATED-DOC.md",
        "order": 1,
        "estimatedTime": "3-5 minutes"
      }
    ]
  }
  ```
- [ ] Define required data fields:
  ```json
  {
    "data": [
      {
        "file": "path/to/file.json",
        "type": "data type description",
        "requiredFields": ["field1", "field2"],
        "validationCommand": "node scripts/validate-data.js",
        "impact": "what happens without this data"
      }
    ]
  }
  ```
- [ ] Define prerequisite commands:
  ```json
  {
    "commands": [
      {
        "name": "command-name",
        "command": "/command-to-run",
        "outputFile": "path/to/output.json",
        "reason": "why this must run first",
        "exampleOutput": "what success looks like",
        "estimatedTime": "3-5 minutes",
        "nextSteps": "what to do after",
        "order": 1
      }
    ]
  }
  ```
- [ ] Define required tools (if any):
  ```json
  {
    "tools": [
      {
        "name": "tool-name",
        "reason": "why this tool is needed",
        "install": {
          "npm": "npm install -g tool-name",
          "chocolatey": "choco install tool-name",
          "brew": "brew install tool-name"
        },
        "verify": "tool-name --version",
        "docs": "https://tool-docs-url"
      }
    ]
  }
  ```

### Phase 3: Testing

- [ ] Test with all prerequisites met
  ```bash
  # Ensure all prerequisites exist
  # Run validation
  node scripts/validate-prerequisites.js --command={command-name}
  # Should pass
  ```

- [ ] Test with missing file
  ```bash
  # Delete a required file
  rm path/to/required-file.json
  # Run validation
  node scripts/validate-prerequisites.js --command={command-name}
  # Should show file error with recovery instructions
  ```

- [ ] Test with incomplete data
  ```bash
  # Edit a required file to remove a field
  # Run validation
  node scripts/validate-prerequisites.js --command={command-name}
  # Should show data error with missing fields
  ```

- [ ] Test with missing tool (if applicable)
  ```bash
  # Temporarily uninstall tool or mock missing
  # Run validation
  # Should show tool error with install instructions
  ```

- [ ] Test recovery steps
  ```bash
  # Follow recovery plan from error output
  # Each step should work as documented
  # Final validation should pass
  ```

- [ ] Test quiet mode
  ```bash
  node scripts/validate-prerequisites.js --command={command-name} --quiet
  # Should show summary only
  ```

### Phase 4: Documentation Review

- [ ] Review Prerequisites section for clarity
- [ ] Verify all file paths are absolute
- [ ] Verify all commands are executable
- [ ] Verify time estimates are accurate
- [ ] Check links to documentation work
- [ ] Ensure recovery steps are complete

---

## For Skills (.claude/skills/*.md)

### Phase 1: Documentation

- [ ] Add Prerequisites section at top
- [ ] Document required files and data
- [ ] Document dependency chain
- [ ] Add code examples for validation
- [ ] Document error handling

### Phase 2: Code Integration

- [ ] Import validation library
  ```javascript
  const { validatePrerequisites } = require('../../scripts/lib/prerequisite-validator');
  ```

- [ ] Load configuration
  ```javascript
  const config = require('../../scripts/prerequisite-configs/{skill-name}.json');
  ```

- [ ] Add validation at start of execution
  ```javascript
  const results = validatePrerequisites(config);
  if (!results.passed) {
    throw new Error(results.recoveryPlan);
  }
  ```

- [ ] Add error handling
  ```javascript
  try {
    // Validation
    // Execution
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
  ```

### Phase 3: Testing

- [ ] Test skill with missing prerequisites
- [ ] Test skill with valid prerequisites
- [ ] Test error messages are displayed correctly
- [ ] Test recovery steps work
- [ ] Test with various error combinations

---

## For Agents (.claude/agents/*.md)

### Phase 1: Documentation

- [ ] Document agent-level prerequisites
  - [ ] API access requirements
  - [ ] Environment variables
  - [ ] Directory structure

- [ ] Document command prerequisites
  - [ ] List all commands agent runs
  - [ ] Document prerequisites for each

- [ ] Document auto-recovery strategy
  - [ ] What can be auto-fixed
  - [ ] What requires manual intervention

### Phase 2: Agent Logic

- [ ] Add agent-level validation
  ```javascript
  async validateAgentPrerequisites() {
    // Check API access
    // Check environment
    // Check directories
  }
  ```

- [ ] Add command-level validation
  ```javascript
  async runWithValidation(command) {
    // Load command config
    // Validate prerequisites
    // Execute if valid
  }
  ```

- [ ] Add auto-recovery logic
  ```javascript
  async autoFixPrerequisites(validation) {
    // Check if can auto-fix
    // Execute prerequisite commands
    // Re-validate
  }
  ```

- [ ] Add progress tracking
  ```javascript
  class ProgressTracker {
    startPhase(name) { }
    completePhase() { }
    reportProgress() { }
  }
  ```

### Phase 3: Testing

- [ ] Test with clean environment
  - [ ] Should create all needed directories
  - [ ] Should run all prerequisites
  - [ ] Should complete successfully

- [ ] Test with partial completion
  - [ ] Delete some intermediate files
  - [ ] Should detect and recover
  - [ ] Should complete successfully

- [ ] Test auto-recovery
  - [ ] Remove prerequisite outputs
  - [ ] Should auto-run prerequisites
  - [ ] Should continue workflow

- [ ] Test manual recovery scenarios
  - [ ] Remove API credentials
  - [ ] Should show manual steps
  - [ ] Should exit with error

---

## Universal Checklist (All Types)

### Documentation Quality

- [ ] All file paths are absolute (not relative)
- [ ] All commands are copy-pasteable
- [ ] All time estimates provided
- [ ] All reasons/explanations clear
- [ ] Links to docs work
- [ ] Examples are correct

### Error Messages

- [ ] Errors are specific (not vague)
- [ ] Errors explain WHY prerequisite needed
- [ ] Errors provide exact recovery steps
- [ ] Errors link to relevant docs
- [ ] Errors use consistent formatting

### Recovery Plans

- [ ] Steps are numbered
- [ ] Steps are in correct order
- [ ] Steps include commands to run
- [ ] Steps include verification
- [ ] Steps include time estimates
- [ ] Final step is "retry this command"

### Testing

- [ ] Test happy path (all prereqs met)
- [ ] Test missing file error
- [ ] Test incomplete data error
- [ ] Test missing command output error
- [ ] Test missing tool error (if applicable)
- [ ] Test recovery steps work
- [ ] Test error messages are helpful
- [ ] Test validation is fast (< 1 second)

### Code Quality

- [ ] Validation happens at START
- [ ] Exit codes correct (0 = success, 1 = error)
- [ ] No silent failures
- [ ] Errors logged to stderr
- [ ] Success logged to stdout
- [ ] No hardcoded paths
- [ ] No magic numbers

---

## Pre-Release Checklist

### Before merging to main:

- [ ] All tests pass
- [ ] Documentation complete
- [ ] Config files valid JSON
- [ ] Examples tested
- [ ] Error messages reviewed
- [ ] Recovery plans tested
- [ ] Code reviewed
- [ ] No TODOs or FIXMEs
- [ ] Performance acceptable

### Before announcing to team:

- [ ] README updated
- [ ] Examples published
- [ ] Quick reference available
- [ ] Team training scheduled
- [ ] Support plan in place

---

## Maintenance Checklist

### When updating command:

- [ ] Update Prerequisites section
- [ ] Update config file
- [ ] Update validation if needed
- [ ] Test all error paths
- [ ] Update documentation
- [ ] Update examples

### When dependency changes:

- [ ] Update config file
- [ ] Update command docs
- [ ] Update recovery plans
- [ ] Test new dependency
- [ ] Notify team

### Monthly review:

- [ ] Check all configs valid
- [ ] Check all docs accurate
- [ ] Check all tests pass
- [ ] Check time estimates accurate
- [ ] Check recovery plans work
- [ ] Update outdated info

---

## Quick Self-Assessment

Answer these questions before releasing:

1. **Can a new user understand prerequisites?**
   - [ ] Yes - Clear documentation
   - [ ] No - Needs improvement

2. **Are error messages helpful?**
   - [ ] Yes - Tells user exactly what to do
   - [ ] No - Vague or confusing

3. **Do recovery steps work?**
   - [ ] Yes - Tested and verified
   - [ ] No - Need testing

4. **Is validation fast?**
   - [ ] Yes - < 1 second
   - [ ] No - Optimize needed

5. **Are all paths absolute?**
   - [ ] Yes - No relative paths
   - [ ] No - Still has relative paths

6. **Are time estimates accurate?**
   - [ ] Yes - Tested and timed
   - [ ] No - Need measurement

7. **Is documentation complete?**
   - [ ] Yes - All sections filled
   - [ ] No - Missing sections

8. **Are examples working?**
   - [ ] Yes - Tested and verified
   - [ ] No - Need testing

---

## Common Mistakes to Avoid

### Documentation Mistakes

- ❌ Using relative paths instead of absolute
- ❌ Vague error messages ("something is missing")
- ❌ Missing time estimates
- ❌ Incomplete recovery steps
- ❌ Broken documentation links
- ❌ Copy-paste errors in examples

### Configuration Mistakes

- ❌ Invalid JSON syntax
- ❌ Wrong field names
- ❌ Missing required fields
- ❌ Incorrect order numbers
- ❌ Wrong file paths
- ❌ Missing validation commands

### Testing Mistakes

- ❌ Only testing happy path
- ❌ Not testing recovery steps
- ❌ Not testing with clean environment
- ❌ Not testing all error types
- ❌ Assuming validation works
- ❌ Not timing operations

### Code Mistakes

- ❌ Validating after execution starts
- ❌ Silent failures
- ❌ Wrong exit codes
- ❌ Not handling errors
- ❌ Hardcoded paths
- ❌ Missing error messages

---

## Success Criteria

A prerequisite implementation is successful when:

✓ User can run validation before execution
✓ Errors are clear and actionable
✓ Recovery steps work first time
✓ Documentation is comprehensive
✓ Testing covers all scenarios
✓ Performance is acceptable
✓ Team understands system
✓ Maintenance is straightforward

---

## Resources

- **Full Documentation:** `framework-docs/PREREQUISITE-CHECKING-SYSTEM.md`
- **Quick Reference:** `framework-docs/PREREQUISITE-QUICK-REFERENCE.md`
- **Examples:** `framework-docs/PREREQUISITE-INTEGRATION-EXAMPLES.md`
- **Flowcharts:** `framework-docs/PREREQUISITE-SYSTEM-FLOWCHART.md`
- **Validator Library:** `scripts/lib/prerequisite-validator.js`
- **CLI Tool:** `scripts/validate-prerequisites.js`

---

## Getting Help

If you need help implementing prerequisite checking:

1. Review the quick reference guide
2. Look at example implementations
3. Check the flowchart for system understanding
4. Test with provided examples
5. Ask team for code review

---

## Summary

Use this checklist every time you:
- Create a new command
- Create a new skill
- Create a new agent
- Update existing commands/skills/agents
- Review someone else's code

Prerequisite checking is mandatory for all commands, skills, and agents in this framework.

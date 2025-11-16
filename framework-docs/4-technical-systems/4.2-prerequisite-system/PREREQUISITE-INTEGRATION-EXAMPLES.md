# Prerequisite Integration Examples

**Purpose:** Complete examples showing how to integrate prerequisite checking into commands, skills, and agents

---

## Example 1: Command with Prerequisites

### File: `.claude/commands/build-hub-page.md`

```markdown
# Command: Build Hub Page

**Description:** Build comprehensive SEO hub page with spoke content using hub-and-spoke architecture

---

## Prerequisites Check

**CRITICAL:** This command requires prerequisites. Validate before executing.

### Quick Validation
\`\`\`bash
node scripts/validate-prerequisites.js --command=build-hub-page
\`\`\`

### Required Files
- [x] `clients/ing-heng/seo/keyword-research/primary-keywords.json`
  - **Why:** Target keywords for hub page optimization
  - **Generate:** `/keyword-opportunity-scan`
  - **Time:** ~3-5 minutes

- [x] `clients/ing-heng/seo/content-strategy/hub-topics.json`
  - **Why:** Hub topic structure and spoke relationships
  - **Generate:** `/organize-by-intent`
  - **Time:** ~2-3 minutes

### Dependency Chain
\`\`\`
1. /keyword-opportunity-scan (identifies keywords)
        ↓
2. /organize-by-intent (groups by intent)
        ↓
3. /build-hub-page ← YOU ARE HERE
\`\`\`

### Quick Start (Missing Prerequisites)
If you get prerequisite errors, run this sequence:

\`\`\`bash
# Step 1: Find keyword opportunities
/keyword-opportunity-scan

# Step 2: Organize keywords by intent
/organize-by-intent

# Step 3: Verify prerequisites
node scripts/validate-prerequisites.js --command=build-hub-page

# Step 4: Build hub page (this command)
/build-hub-page --topic="excavator financing"
\`\`\`

---

## Command Usage

\`\`\`bash
/build-hub-page --topic="[hub topic]" [options]
\`\`\`

### Required Arguments
- `--topic` - Hub topic name (must exist in hub-topics.json)

### Optional Arguments
- `--language` - Target language (en|ms|zh) [default: en]
- `--skip-spokes` - Build only hub page, not spoke content
- `--dry-run` - Show what would be built without creating files

### Examples

\`\`\`bash
# Build hub page with all spokes
/build-hub-page --topic="excavator financing"

# Build English hub page only
/build-hub-page --topic="excavator financing" --skip-spokes --language=en

# Preview what would be built
/build-hub-page --topic="excavator financing" --dry-run
\`\`\`

---

## What This Command Does

1. **Validates Prerequisites**
   - Checks for required keyword data
   - Validates hub structure exists
   - Confirms data completeness

2. **Generates Hub Page**
   - Creates comprehensive hub page in target language
   - Optimizes for primary keyword
   - Implements internal linking strategy
   - Adds structured data markup

3. **Generates Spoke Pages**
   - Creates supporting spoke content
   - Links spokes to hub page
   - Implements keyword clustering
   - Adds breadcrumb navigation

4. **Updates Internal Links**
   - Creates hub-to-spoke links
   - Implements spoke-to-hub links
   - Updates related content links
   - Generates sitemap entries

---

## Expected Output

### Files Created
- `clients/ing-heng/website/src/pages/[lang]/[hub-slug].astro` - Hub page
- `clients/ing-heng/website/src/pages/[lang]/[spoke-slug-1].astro` - Spoke 1
- `clients/ing-heng/website/src/pages/[lang]/[spoke-slug-2].astro` - Spoke 2
- ... (additional spokes)

### Reports Generated
- `clients/ing-heng/seo/hub-and-spoke/build-report.json` - Build summary
- `clients/ing-heng/seo/hub-and-spoke/internal-links.json` - Link structure

### Console Output
\`\`\`
✓ Prerequisites validated
✓ Hub page created: /en/excavator-financing
✓ Spoke pages created: 5
  - /en/excavator-financing-options
  - /en/excavator-loan-requirements
  - /en/excavator-hire-purchase
  - /en/excavator-lease-vs-buy
  - /en/excavator-financing-calculator
✓ Internal links added: 47
✓ Build report saved

Summary:
- Hub page: 1,847 words, optimized for "excavator financing"
- Spoke pages: 5 pages, avg 1,234 words
- Internal links: 47 contextual links
- Estimated build time: 2.3 minutes
\`\`\`

---

## Troubleshooting

### Error: Missing prerequisite file

\`\`\`
❌ PREREQUISITE ERROR: Missing Required File
What's missing: clients/ing-heng/seo/keyword-research/primary-keywords.json
\`\`\`

**Solution:** Run the prerequisite command
\`\`\`bash
/keyword-opportunity-scan
\`\`\`

### Error: Incomplete data

\`\`\`
❌ PREREQUISITE ERROR: Incomplete Data
Missing fields: intent, related_keywords
\`\`\`

**Solution:** Re-run keyword research with complete parameters
\`\`\`bash
/keyword-opportunity-scan --include-intent --include-related
\`\`\`

### Error: Hub topic not found

\`\`\`
❌ Error: Topic "excavator financing" not found in hub-topics.json
\`\`\`

**Solution:** Run organize-by-intent or add topic manually
\`\`\`bash
/organize-by-intent
# Or edit clients/ing-heng/seo/content-strategy/hub-topics.json
\`\`\`

---

## Next Steps

After building hub page:

1. **Review generated content** - Check quality and accuracy
2. **Customize content** - Add client-specific information
3. **Add images** - Include relevant equipment photos
4. **Test internal links** - Verify all links work correctly
5. **Deploy to staging** - Test on staging environment
6. **Monitor performance** - Track rankings and traffic

---

## Related Commands

- `/organize-by-intent` - Group keywords into hub topics
- `/refresh-content` - Update existing hub/spoke pages
- `/health-check` - Validate hub-and-spoke structure

---

## Documentation

- [Hub and Spoke Architecture](../framework-docs/HUB-AND-SPOKE-ARCHITECTURE.md)
- [Keyword Research Guide](../framework-docs/KEYWORD-RESEARCH.md)
- [Internal Linking Strategy](../framework-docs/INTERNAL-LINKING.md)
```

---

## Example 2: Skill with Prerequisites

### File: `.claude/skills/hub-page-generation.md`

```markdown
# Skill: Hub Page Generation

**Purpose:** Generate SEO-optimized hub pages with spoke content

---

## Prerequisites

This skill requires:

1. **Keyword Data**
   - File: `clients/ing-heng/seo/keyword-research/primary-keywords.json`
   - Fields: `keyword`, `search_volume`, `difficulty`, `intent`
   - Generate: `/keyword-opportunity-scan`

2. **Hub Structure**
   - File: `clients/ing-heng/seo/content-strategy/hub-topics.json`
   - Fields: `hub_topic`, `primary_keyword`, `spoke_keywords`
   - Generate: `/organize-by-intent`

### Validation
\`\`\`javascript
// In skill execution
const { validatePrerequisites } = require('../../scripts/lib/prerequisite-validator');
const config = require('../../scripts/prerequisite-configs/build-hub-page.json');

const validation = validatePrerequisites(config);
if (!validation.passed) {
  throw new Error('Prerequisites not met:\n' + validation.recoveryPlan);
}
\`\`\`

---

## Skill Implementation

### Step 1: Load Prerequisites

\`\`\`javascript
// Load keyword data
const keywordData = JSON.parse(
  fs.readFileSync('clients/ing-heng/seo/keyword-research/primary-keywords.json', 'utf8')
);

// Load hub structure
const hubStructure = JSON.parse(
  fs.readFileSync('clients/ing-heng/seo/content-strategy/hub-topics.json', 'utf8')
);

// Find target hub
const hub = hubStructure.hubs.find(h => h.topic === targetTopic);
if (!hub) {
  throw new Error(`Hub topic "${targetTopic}" not found`);
}
\`\`\`

### Step 2: Generate Hub Content

\`\`\`javascript
const hubContent = {
  title: generateTitle(hub.primary_keyword),
  metaDescription: generateMetaDescription(hub.primary_keyword),
  h1: hub.primary_keyword,
  sections: generateSections(hub, keywordData),
  internalLinks: generateInternalLinks(hub.spoke_keywords),
  structuredData: generateStructuredData(hub)
};
\`\`\`

### Step 3: Generate Spoke Content

\`\`\`javascript
const spokePages = hub.spoke_keywords.map(spokeKeyword => {
  return {
    keyword: spokeKeyword,
    title: generateTitle(spokeKeyword),
    content: generateSpokeContent(spokeKeyword, hub),
    backlink: generateBacklinkToHub(hub.slug)
  };
});
\`\`\`

### Step 4: Create Files

\`\`\`javascript
// Create hub page
const hubPath = `clients/ing-heng/website/src/pages/en/${hub.slug}.astro`;
fs.writeFileSync(hubPath, renderHubTemplate(hubContent));

// Create spoke pages
spokePages.forEach(spoke => {
  const spokePath = `clients/ing-heng/website/src/pages/en/${spoke.slug}.astro`;
  fs.writeFileSync(spokePath, renderSpokeTemplate(spoke));
});
\`\`\`

---

## Error Handling

### Handle Missing Prerequisites

\`\`\`javascript
try {
  const validation = validatePrerequisites(config);

  if (!validation.passed) {
    console.error('❌ Prerequisites not met');
    console.error(validation.errors.join('\n\n'));
    console.error(validation.recoveryPlan);
    process.exit(1);
  }

  // Continue with skill execution
  generateHub();

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
\`\`\`

### Handle Data Validation Errors

\`\`\`javascript
function validateHubData(hub) {
  const required = ['topic', 'primary_keyword', 'spoke_keywords'];
  const missing = required.filter(field => !hub[field]);

  if (missing.length > 0) {
    throw new Error(
      `Hub data incomplete. Missing fields: ${missing.join(', ')}\n` +
      `Run /organize-by-intent to regenerate hub structure.`
    );
  }

  if (hub.spoke_keywords.length === 0) {
    throw new Error(
      `Hub "${hub.topic}" has no spoke keywords.\n` +
      `Add spoke keywords or run /organize-by-intent to regenerate.`
    );
  }
}
\`\`\`

---

## Output Format

### Success Output
\`\`\`json
{
  "status": "success",
  "hub": {
    "topic": "excavator financing",
    "slug": "excavator-financing",
    "path": "clients/ing-heng/website/src/pages/en/excavator-financing.astro",
    "word_count": 1847,
    "primary_keyword": "excavator financing"
  },
  "spokes": [
    {
      "keyword": "excavator financing options",
      "slug": "excavator-financing-options",
      "path": "clients/ing-heng/website/src/pages/en/excavator-financing-options.astro",
      "word_count": 1234
    }
  ],
  "internal_links": 47,
  "build_time": "2.3 minutes"
}
\`\`\`

---

## Testing

### Test Prerequisites

\`\`\`bash
# Test with missing prerequisites
rm clients/ing-heng/seo/keyword-research/primary-keywords.json
node scripts/test-hub-generation.js
# Should show prerequisite error

# Test with valid prerequisites
/keyword-opportunity-scan
/organize-by-intent
node scripts/test-hub-generation.js
# Should succeed
\`\`\`

### Test Data Validation

\`\`\`bash
# Test with incomplete data
node scripts/test-hub-generation.js --hub="invalid-topic"
# Should show data validation error

# Test with valid data
node scripts/test-hub-generation.js --hub="excavator financing"
# Should generate hub and spokes
\`\`\`

---

## Related Skills

- `keyword-research.md` - Keyword opportunity identification
- `content-organization.md` - Intent-based keyword grouping
- `internal-linking.md` - Link structure implementation
```

---

## Example 3: Agent with Prerequisites

### File: `.claude/agents/hub-and-spoke-architect.md`

```markdown
# Agent: Hub and Spoke Architect

**Role:** Designs and builds hub-and-spoke content architecture

---

## Prerequisites

This agent orchestrates multiple commands, each with its own prerequisites.

### Agent-Level Prerequisites

Before starting agent workflow:

1. **DataForSEO API Access**
   - Tool: DataForSEO MCP server
   - Verify: Check API key in environment
   - Install: See MCP setup documentation

2. **Project Structure**
   - Directory: `clients/ing-heng/seo/` must exist
   - Subdirectories: Will be created if missing

### Command Prerequisites

Each command run by this agent has prerequisites:

- `/keyword-opportunity-scan` - No prerequisites
- `/organize-by-intent` - Requires keyword data
- `/build-hub-page` - Requires keyword data + hub structure

### Validation Strategy

\`\`\`javascript
class HubAndSpokeArchitect {
  async execute() {
    // 1. Validate agent-level prerequisites
    await this.validateAgentPrerequisites();

    // 2. Run commands in sequence, validating each
    const keywordData = await this.runWithValidation('/keyword-opportunity-scan');
    const hubStructure = await this.runWithValidation('/organize-by-intent');
    const hubPages = await this.runWithValidation('/build-hub-page');

    // 3. Generate final report
    return this.generateReport({ keywordData, hubStructure, hubPages });
  }

  async validateAgentPrerequisites() {
    // Check DataForSEO access
    if (!process.env.DATAFORSEO_API_KEY) {
      throw new PrerequisiteError(
        'DataForSEO API key not found',
        'Set DATAFORSEO_API_KEY environment variable'
      );
    }

    // Check project structure
    const requiredDirs = [
      'clients/ing-heng/seo/keyword-research',
      'clients/ing-heng/seo/content-strategy',
      'clients/ing-heng/seo/hub-and-spoke'
    ];

    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  async runWithValidation(command) {
    // Get command config
    const commandName = command.split(' ')[0].replace('/', '');
    const configPath = `scripts/prerequisite-configs/${commandName}.json`;

    if (fs.existsSync(configPath)) {
      // Validate prerequisites
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      const validation = validatePrerequisites(config);

      if (!validation.passed) {
        // Check if we can auto-fix
        if (this.canAutoFix(validation)) {
          await this.autoFixPrerequisites(validation);
        } else {
          throw new PrerequisiteError(
            `Cannot run ${command}`,
            validation.recoveryPlan
          );
        }
      }
    }

    // Execute command
    return await this.executeCommand(command);
  }

  canAutoFix(validation) {
    // Can auto-fix if all missing prerequisites are commands
    return validation.missingFiles.every(file =>
      file.generateCommand && file.generateCommand.startsWith('/')
    );
  }

  async autoFixPrerequisites(validation) {
    console.log('🔧 Auto-fixing prerequisites...');

    // Sort recovery steps by order
    const steps = validation.recoverySteps.sort((a, b) => a.order - b.order);

    // Execute each step
    for (const step of steps) {
      console.log(`  Running: ${step.command}`);
      await this.executeCommand(step.command);
    }

    console.log('✓ Prerequisites fixed');
  }
}
\`\`\`

---

## Agent Workflow

### Phase 1: Initialization

\`\`\`
1. Validate agent prerequisites
   - Check API access
   - Verify project structure
   - Create missing directories

2. Load configuration
   - Read client settings
   - Load language preferences
   - Set output paths
\`\`\`

### Phase 2: Keyword Research

\`\`\`
1. Run /keyword-opportunity-scan
   - No prerequisites needed
   - Generates: primary-keywords.json

2. Validate keyword data
   - Check required fields
   - Verify data quality
   - Handle errors
\`\`\`

### Phase 3: Content Organization

\`\`\`
1. Validate prerequisites
   - Check: primary-keywords.json exists
   - Check: Data completeness

2. Run /organize-by-intent
   - Groups keywords by intent
   - Generates: hub-topics.json

3. Validate hub structure
   - Check: Hub topics created
   - Check: Spoke keywords assigned
\`\`\`

### Phase 4: Hub Building

\`\`\`
1. Validate prerequisites
   - Check: primary-keywords.json
   - Check: hub-topics.json
   - Check: Data completeness

2. Run /build-hub-page for each hub
   - Generates hub + spoke pages
   - Creates internal links

3. Validate output
   - Check: Files created
   - Check: Links functional
\`\`\`

### Phase 5: Reporting

\`\`\`
1. Generate completion report
   - Hub pages created
   - Spoke pages created
   - Internal links added
   - Performance estimates

2. Save agent state
   - Record completed work
   - Store for next run
\`\`\`

---

## Error Recovery

### Automatic Recovery

Agent will auto-recover from:
- Missing prerequisite files (runs generation commands)
- Incomplete data (re-runs with correct parameters)
- Network failures (retries with exponential backoff)

### Manual Recovery

User intervention required for:
- Missing API credentials
- Invalid configuration
- Data quality issues requiring manual review

### Recovery Example

\`\`\`javascript
async autoRecover(error) {
  if (error instanceof PrerequisiteError) {
    console.log('Attempting auto-recovery...');

    // Parse recovery plan
    const steps = error.recoverySteps;

    // Execute each step
    for (const step of steps) {
      try {
        await this.executeCommand(step.command);
      } catch (stepError) {
        // If step fails, cannot auto-recover
        throw new ManualRecoveryRequired(
          `Auto-recovery failed at step: ${step.description}`,
          stepError.message
        );
      }
    }

    console.log('✓ Auto-recovery successful');
    return true;
  }

  // Cannot auto-recover
  return false;
}
\`\`\`

---

## Testing

### Test Prerequisites

\`\`\`bash
# Test with clean slate
rm -rf clients/ing-heng/seo/
node scripts/test-agent.js --agent=hub-and-spoke-architect
# Should create all directories and run full workflow

# Test with partial completion
rm clients/ing-heng/seo/content-strategy/hub-topics.json
node scripts/test-agent.js --agent=hub-and-spoke-architect
# Should detect missing file and auto-recover
\`\`\`

### Test Auto-Recovery

\`\`\`bash
# Test recovery from missing prerequisites
rm clients/ing-heng/seo/keyword-research/primary-keywords.json
node scripts/test-agent.js --agent=hub-and-spoke-architect --phase=organize
# Should auto-run keyword-opportunity-scan first

# Test recovery from incomplete data
# (manually corrupt data file)
node scripts/test-agent.js --agent=hub-and-spoke-architect
# Should detect corruption and regenerate
\`\`\`

---

## Monitoring

### Progress Tracking

\`\`\`javascript
class ProgressTracker {
  constructor() {
    this.phases = [
      'initialization',
      'keyword-research',
      'content-organization',
      'hub-building',
      'reporting'
    ];
    this.currentPhase = 0;
  }

  startPhase(phaseName) {
    console.log(`\n📍 Phase ${this.currentPhase + 1}/${this.phases.length}: ${phaseName}`);
  }

  completePhase() {
    console.log(`✓ Phase ${this.currentPhase + 1} complete`);
    this.currentPhase++;
  }

  reportProgress() {
    const percent = (this.currentPhase / this.phases.length) * 100;
    console.log(`\nOverall progress: ${percent.toFixed(0)}%`);
  }
}
\`\`\`

---

## Related Agents

- `competitor-intelligence` - Analyzes competitor strategies
- `content-maintenance` - Refreshes existing content
- `link-building` - Builds backlink profile
```

---

## Summary

These examples demonstrate:

1. **Command Integration**
   - Prerequisites clearly documented at top
   - Validation command provided
   - Quick start guide for missing prerequisites
   - Troubleshooting section

2. **Skill Integration**
   - Prerequisite validation in code
   - Error handling with recovery steps
   - Data validation functions
   - Testing procedures

3. **Agent Integration**
   - Multi-level prerequisite checking
   - Auto-recovery from missing prerequisites
   - Progress tracking through workflow
   - Error recovery strategies

All follow the standard prerequisite checking system for consistency and maintainability.

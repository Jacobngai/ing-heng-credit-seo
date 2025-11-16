#!/usr/bin/env node

/**
 * Prerequisite Validation CLI
 *
 * Validates prerequisites for a given command before execution.
 *
 * Usage:
 *   node scripts/validate-prerequisites.js --command=build-hub-page
 *   node scripts/validate-prerequisites.js --config=path/to/config.json
 */

const fs = require('fs');
const path = require('path');
const { validatePrerequisites, displayResults } = require('./lib/prerequisite-validator');

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    command: null,
    config: null,
    verbose: true,
    help: false
  };

  args.forEach(arg => {
    if (arg.startsWith('--command=')) {
      options.command = arg.split('=')[1];
    } else if (arg.startsWith('--config=')) {
      options.config = arg.split('=')[1];
    } else if (arg === '--quiet' || arg === '-q') {
      options.verbose = false;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  });

  return options;
}

// Show help message
function showHelp() {
  console.log(`
Prerequisite Validation CLI

Validates that all prerequisites are met before command execution.

Usage:
  node scripts/validate-prerequisites.js [options]

Options:
  --command=<name>    Validate prerequisites for named command
                      (looks for config in scripts/prerequisite-configs/<name>.json)

  --config=<path>     Use custom config file path

  --quiet, -q         Show summary only (not full error details)

  --help, -h          Show this help message

Examples:
  # Validate prerequisites for build-hub-page command
  node scripts/validate-prerequisites.js --command=build-hub-page

  # Use custom config file
  node scripts/validate-prerequisites.js --config=my-config.json

  # Show summary only
  node scripts/validate-prerequisites.js --command=build-hub-page --quiet

Exit codes:
  0 - All prerequisites met
  1 - Prerequisites not met
  2 - Configuration error
`);
}

// Load configuration
function loadConfig(options) {
  let configPath;

  if (options.config) {
    configPath = path.resolve(options.config);
  } else if (options.command) {
    configPath = path.resolve(
      __dirname,
      'prerequisite-configs',
      `${options.command}.json`
    );
  } else {
    console.error('❌ Error: Must specify --command or --config');
    console.error('Run with --help for usage information');
    return null;
  }

  if (!fs.existsSync(configPath)) {
    console.error(`❌ Error: Config file not found: ${configPath}`);
    console.error('\nAvailable commands:');

    const configDir = path.resolve(__dirname, 'prerequisite-configs');
    if (fs.existsSync(configDir)) {
      const files = fs.readdirSync(configDir)
        .filter(f => f.endsWith('.json'))
        .map(f => f.replace('.json', ''));

      if (files.length > 0) {
        files.forEach(f => console.error(`  - ${f}`));
      } else {
        console.error('  (none found)');
      }
    }

    return null;
  }

  try {
    const content = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error: Failed to parse config file: ${error.message}`);
    return null;
  }
}

// Main execution
function main() {
  const options = parseArgs();

  if (options.help) {
    showHelp();
    process.exit(0);
  }

  // Load configuration
  const config = loadConfig(options);
  if (!config) {
    process.exit(2);
  }

  // Display header
  if (options.verbose) {
    console.log('━'.repeat(80));
    console.log(`Validating Prerequisites: ${config.commandName || 'Unknown'}`);
    if (config.description) {
      console.log(`Description: ${config.description}`);
    }
    console.log('━'.repeat(80));
    console.log('');
  }

  // Run validation
  const results = validatePrerequisites(config);

  // Display results
  displayResults(results, options.verbose);

  // Exit with appropriate code
  process.exit(results.passed ? 0 : 1);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { parseArgs, loadConfig };

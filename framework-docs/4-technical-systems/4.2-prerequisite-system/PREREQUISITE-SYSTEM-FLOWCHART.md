# Prerequisite System Flowchart

**Purpose:** Visual representation of prerequisite checking system flow

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    PREREQUISITE CHECKING SYSTEM                  │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
        ┌────────────────────────────────────────────┐
        │  1. USER EXECUTES COMMAND/SKILL/AGENT     │
        └────────────────────────────────────────────┘
                                 │
                                 ▼
        ┌────────────────────────────────────────────┐
        │  2. LOAD PREREQUISITE CONFIGURATION        │
        │     - Read JSON config file                │
        │     - Parse requirements                   │
        └────────────────────────────────────────────┘
                                 │
                                 ▼
        ┌────────────────────────────────────────────┐
        │  3. VALIDATE PREREQUISITES                 │
        │     ├── Check Files                        │
        │     ├── Check Data                         │
        │     ├── Check Commands                     │
        │     └── Check Tools                        │
        └────────────────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
          ┌──────────────────┐    ┌──────────────────┐
          │  ALL CHECKS      │    │  CHECKS FAILED   │
          │  PASSED ✓        │    │  ✗               │
          └──────────────────┘    └──────────────────┘
                    │                         │
                    │                         ▼
                    │            ┌──────────────────────┐
                    │            │  4. GENERATE         │
                    │            │     RECOVERY PLAN    │
                    │            │     - Error messages │
                    │            │     - Recovery steps │
                    │            └──────────────────────┘
                    │                         │
                    │                         ▼
                    │            ┌──────────────────────┐
                    │            │  5. DISPLAY ERRORS   │
                    │            │     & RECOVERY PLAN  │
                    │            └──────────────────────┘
                    │                         │
                    │                         ▼
                    │            ┌──────────────────────┐
                    │            │  6. EXIT WITH        │
                    │            │     ERROR CODE 1     │
                    │            └──────────────────────┘
                    │
                    ▼
        ┌────────────────────────────────────────────┐
        │  7. EXECUTE COMMAND/SKILL/AGENT            │
        └────────────────────────────────────────────┘
                                 │
                                 ▼
        ┌────────────────────────────────────────────┐
        │  8. RETURN SUCCESS                         │
        └────────────────────────────────────────────┘
```

---

## Validation Flow Detail

```
┌─────────────────────────────────────────────────────────────────┐
│                        VALIDATION PROCESS                        │
└─────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  CHECK 1: FILE VALIDATION                                     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  For each required file:                                      │
│                                                               │
│  ┌─────────────────────┐                                     │
│  │ Does file exist?    │                                     │
│  └─────────────────────┘                                     │
│           │                                                   │
│      ┌────┴────┐                                             │
│      │         │                                             │
│     YES       NO                                             │
│      │         │                                             │
│      ▼         ▼                                             │
│    PASS    ┌──────────────────────────┐                     │
│            │  ADD TO ERRORS:          │                     │
│            │  - File path             │                     │
│            │  - Reason needed         │                     │
│            │  - Command to generate   │                     │
│            │  - Documentation link    │                     │
│            └──────────────────────────┘                     │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  CHECK 2: DATA VALIDATION                                     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  For each data requirement:                                   │
│                                                               │
│  ┌─────────────────────┐                                     │
│  │ Read JSON file      │                                     │
│  └─────────────────────┘                                     │
│           │                                                   │
│           ▼                                                   │
│  ┌─────────────────────┐                                     │
│  │ Parse JSON          │                                     │
│  └─────────────────────┘                                     │
│           │                                                   │
│           ▼                                                   │
│  ┌─────────────────────┐                                     │
│  │ Check each required │                                     │
│  │ field exists        │                                     │
│  └─────────────────────┘                                     │
│           │                                                   │
│      ┌────┴────┐                                             │
│      │         │                                             │
│    ALL       SOME                                            │
│   PRESENT   MISSING                                          │
│      │         │                                             │
│      ▼         ▼                                             │
│    PASS    ┌──────────────────────────┐                     │
│            │  ADD TO ERRORS:          │                     │
│            │  - File path             │                     │
│            │  - Expected fields       │                     │
│            │  - Missing fields        │                     │
│            │  - Validation command    │                     │
│            │  - Impact description    │                     │
│            └──────────────────────────┘                     │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  CHECK 3: COMMAND VALIDATION                                  │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  For each prerequisite command:                               │
│                                                               │
│  ┌─────────────────────┐                                     │
│  │ Does output file    │                                     │
│  │ exist?              │                                     │
│  └─────────────────────┘                                     │
│           │                                                   │
│      ┌────┴────┐                                             │
│      │         │                                             │
│     YES       NO                                             │
│      │         │                                             │
│      ▼         ▼                                             │
│    PASS    ┌──────────────────────────┐                     │
│            │  ADD TO ERRORS:          │                     │
│            │  - Command name          │                     │
│            │  - Reason needed         │                     │
│            │  - Command to run        │                     │
│            │  - Expected output       │                     │
│            │  - Estimated time        │                     │
│            └──────────────────────────┘                     │
│                      │                                       │
│                      ▼                                       │
│            ┌──────────────────────────┐                     │
│            │  ADD TO RECOVERY STEPS:  │                     │
│            │  - Order in sequence     │                     │
│            │  - Command to run        │                     │
│            │  - Description           │                     │
│            └──────────────────────────┘                     │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  CHECK 4: TOOL VALIDATION                                     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  For each required tool:                                      │
│                                                               │
│  ┌─────────────────────┐                                     │
│  │ Run: tool --version │                                     │
│  └─────────────────────┘                                     │
│           │                                                   │
│      ┌────┴────┐                                             │
│      │         │                                             │
│   SUCCESS   FAILURE                                          │
│      │         │                                             │
│      ▼         ▼                                             │
│    PASS    ┌──────────────────────────┐                     │
│            │  ADD TO ERRORS:          │                     │
│            │  - Tool name             │                     │
│            │  - Reason needed         │                     │
│            │  - Install instructions  │                     │
│            │  - Verification command  │                     │
│            │  - Documentation link    │                     │
│            └──────────────────────────┘                     │
└───────────────────────────────────────────────────────────────┘
```

---

## Error Message Generation

```
┌─────────────────────────────────────────────────────────────────┐
│                    ERROR MESSAGE GENERATION                      │
└─────────────────────────────────────────────────────────────────┘

                        ┌──────────────┐
                        │ Validation   │
                        │ Results      │
                        └──────────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │ Has Errors?       │
                    └───────────────────┘
                              │
                         ┌────┴────┐
                         │         │
                        YES       NO
                         │         │
                         │         ▼
                         │    ┌─────────────┐
                         │    │ Return      │
                         │    │ Success     │
                         │    └─────────────┘
                         │
                         ▼
            ┌───────────────────────────┐
            │ For Each Error Type:      │
            └───────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Missing File │  │ Missing Data │  │ Missing Tool │
│              │  │              │  │              │
│ Generate:    │  │ Generate:    │  │ Generate:    │
│ - File path  │  │ - Data type  │  │ - Tool name  │
│ - Reason     │  │ - Expected   │  │ - Install    │
│ - Command    │  │ - Found      │  │ - Verify     │
│ - Docs       │  │ - Impact     │  │ - Docs       │
└──────────────┘  └──────────────┘  └──────────────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
            ┌───────────────────────────┐
            │ Generate Recovery Plan:   │
            │                           │
            │ 1. List missing tools     │
            │ 2. List commands to run   │
            │ 3. List data to fix       │
            │ 4. Retry instruction      │
            └───────────────────────────┘
                         │
                         ▼
            ┌───────────────────────────┐
            │ Format Final Output:      │
            │                           │
            │ ━━━━━━━━━━━━━━━━━━━━━━  │
            │ Error 1                   │
            │ ──────────────────────── │
            │ Error 2                   │
            │ ──────────────────────── │
            │ Error 3                   │
            │ ━━━━━━━━━━━━━━━━━━━━━━  │
            │ Recovery Plan             │
            │ ━━━━━━━━━━━━━━━━━━━━━━  │
            └───────────────────────────┘
                         │
                         ▼
            ┌───────────────────────────┐
            │ Display to User           │
            └───────────────────────────┘
```

---

## Command Execution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     COMMAND EXECUTION WITH                       │
│                    PREREQUISITE CHECKING                         │
└─────────────────────────────────────────────────────────────────┘

START: User runs /build-hub-page
    │
    ▼
┌───────────────────────────────────┐
│ Load config:                      │
│ build-hub-page.json               │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Check Prerequisites:              │
│                                   │
│ 1. primary-keywords.json?         │
│    └── Missing ✗                  │
│                                   │
│ 2. hub-topics.json?               │
│    └── Missing ✗                  │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Generate Errors:                  │
│                                   │
│ Error 1: Missing file             │
│ primary-keywords.json             │
│ Run: /keyword-opportunity-scan    │
│                                   │
│ Error 2: Missing file             │
│ hub-topics.json                   │
│ Run: /organize-by-intent          │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Generate Recovery Plan:           │
│                                   │
│ Step 1: Run /keyword-opportunity- │
│         scan (3-5 min)            │
│                                   │
│ Step 2: Run /organize-by-intent   │
│         (2-3 min)                 │
│                                   │
│ Step 3: Retry /build-hub-page     │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Display to User & Exit(1)         │
└───────────────────────────────────┘

═══════════════════════════════════════

AFTER USER RUNS PREREQUISITES:

START: User runs /keyword-opportunity-scan
    │
    ▼
┌───────────────────────────────────┐
│ Generates:                        │
│ primary-keywords.json ✓           │
└───────────────────────────────────┘

START: User runs /organize-by-intent
    │
    ▼
┌───────────────────────────────────┐
│ Check Prerequisites:              │
│ primary-keywords.json?            │
│    └── Exists ✓                   │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Generates:                        │
│ hub-topics.json ✓                 │
└───────────────────────────────────┘

START: User runs /build-hub-page (retry)
    │
    ▼
┌───────────────────────────────────┐
│ Check Prerequisites:              │
│                                   │
│ 1. primary-keywords.json?         │
│    └── Exists ✓                   │
│                                   │
│ 2. hub-topics.json?               │
│    └── Exists ✓                   │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ All Prerequisites Met ✓           │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Execute Command:                  │
│ - Build hub page                  │
│ - Build spoke pages               │
│ - Create internal links           │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ SUCCESS                           │
└───────────────────────────────────┘
```

---

## Agent Workflow with Auto-Recovery

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENT WITH AUTO-RECOVERY                      │
└─────────────────────────────────────────────────────────────────┘

START: User runs agent
    │
    ▼
┌───────────────────────────────────┐
│ Phase 1: Keyword Research         │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Validate prerequisites            │
│ for /keyword-opportunity-scan     │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ No prerequisites needed ✓         │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Execute: /keyword-opportunity-scan│
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Phase 2: Content Organization     │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Validate prerequisites            │
│ for /organize-by-intent           │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Check: primary-keywords.json      │
│ Status: Exists ✓ (from Phase 1)  │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Execute: /organize-by-intent      │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Phase 3: Hub Building             │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Validate prerequisites            │
│ for /build-hub-page               │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Check prerequisites:              │
│ 1. primary-keywords.json ✓        │
│ 2. hub-topics.json ✓              │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Execute: /build-hub-page          │
│ (for each hub topic)              │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Phase 4: Reporting                │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Generate completion report        │
└───────────────────────────────────┘
    │
    ▼
SUCCESS

═══════════════════════════════════════

ERROR PATH WITH AUTO-RECOVERY:

┌───────────────────────────────────┐
│ Phase 2: Content Organization     │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Validate prerequisites            │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Check: primary-keywords.json      │
│ Status: Missing ✗                 │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Can auto-fix?                     │
│ Yes (command provided)            │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ AUTO-RECOVERY:                    │
│ Run /keyword-opportunity-scan     │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Retry validation                  │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Check: primary-keywords.json      │
│ Status: Exists ✓                  │
└───────────────────────────────────┘
    │
    ▼
┌───────────────────────────────────┐
│ Continue with Phase 2             │
└───────────────────────────────────┘
```

---

## File Structure

```
PROJECT ROOT
│
├── .claude/
│   ├── commands/
│   │   ├── build-hub-page.md          ← Prerequisites documented
│   │   ├── refresh-content.md          ← Prerequisites documented
│   │   └── launch-outreach.md          ← Prerequisites documented
│   │
│   ├── skills/
│   │   ├── hub-page-generation.md      ← Prerequisites documented
│   │   └── content-refresh.md          ← Prerequisites documented
│   │
│   └── agents/
│       └── hub-and-spoke-architect.md  ← Prerequisites + auto-recovery
│
├── scripts/
│   ├── lib/
│   │   └── prerequisite-validator.js   ← Core validation logic
│   │
│   ├── prerequisite-configs/
│   │   ├── build-hub-page.json         ← Config: files, data, commands
│   │   ├── refresh-content.json        ← Config: files, data, commands
│   │   └── launch-outreach.json        ← Config: files, data, commands
│   │
│   └── validate-prerequisites.js       ← CLI tool for validation
│
└── framework-docs/
    ├── PREREQUISITE-CHECKING-SYSTEM.md     ← Full documentation
    ├── PREREQUISITE-INTEGRATION-EXAMPLES.md ← Complete examples
    ├── PREREQUISITE-QUICK-REFERENCE.md     ← Quick reference
    └── PREREQUISITE-SYSTEM-FLOWCHART.md    ← This file (visual guide)
```

---

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                          DATA FLOW                               │
└─────────────────────────────────────────────────────────────────┘

Command File (.md)
    │
    │ References config
    │
    ▼
Config File (.json)
    │
    │ Defines prerequisites
    │
    ▼
Validation Script (validate-prerequisites.js)
    │
    │ Loads config
    │
    ▼
Validator Library (prerequisite-validator.js)
    │
    │ Checks files, data, commands, tools
    │
    ├── File Check ──────► File System
    │
    ├── Data Check ──────► JSON Parser ──────► Field Validator
    │
    ├── Command Check ───► File System (output files)
    │
    └── Tool Check ───────► System Exec (tool --version)
    │
    ▼
Validation Results
    │
    ├─► All Passed ────────► Return success (exit 0)
    │
    └─► Some Failed ───────► Generate errors
                              │
                              ▼
                        Error Messages
                              │
                              ▼
                        Recovery Plan
                              │
                              ▼
                        Display to User
                              │
                              ▼
                        Exit with error (exit 1)
```

---

## Summary

This prerequisite checking system ensures:

1. **Commands validate before execution**
2. **Errors are educational** (teach users what to do)
3. **Recovery is straightforward** (step-by-step instructions)
4. **Dependencies are clear** (visual dependency chains)
5. **Automation is possible** (agents can auto-recover)

Use this flowchart to understand the system flow and implement prerequisite checking in your commands, skills, and agents.

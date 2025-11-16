# Commands vs Agents vs Skills - Architecture Explained

## The 3-Layer Architecture

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 1: COMMANDS (What Employee Runs)                │
│  📱 User Interface                                      │
│  Location: .claude/commands/*.md                        │
│                                                          │
│  Employee types: /generate-daily-blogs                  │
│  Claude sees: "Oh, I need to generate blogs"            │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  LAYER 2: AGENTS (How Workflow Is Orchestrated)        │
│  🤖 Workflow Orchestrator                               │
│  Location: .claude/agents/*.md                          │
│                                                          │
│  Claude loads: content-generation.md agent              │
│  Agent decides: "I'll use daily-seo-content.md skill"   │
│  Agent handles: Errors, decisions, client iteration     │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│  LAYER 3: SKILLS (Detailed Implementation Steps)       │
│  📚 Reusable Procedures                                 │
│  Location: .claude/skills/*.md                          │
│                                                          │
│  Skill executes: Step-by-step content generation        │
│  Skill provides: Exact formatting, validation, quality  │
└─────────────────────────────────────────────────────────┘
```

---

## Real Example: `/generate-daily-blogs`

### LAYER 1: COMMAND (Employee Types This)

**File:** `.claude/commands/generate-daily-blogs.md`

**Content:**
```markdown
Launch the Content Generation Agent to create daily blog posts
for all active clients in 3 languages.

**What this command does:**
1. Loads Content Generation Agent
2. Agent executes daily-seo-content.md skill
3. Generates 150 draft blog posts
4. Saves to /drafts/D/ folders

**Usage:**
/generate-daily-blogs
```

**Purpose:**
- Short, simple description
- User-facing documentation
- Entry point to workflow
- ~20-30 lines total

**Think of it as:** The button employee clicks

---

### LAYER 2: AGENT (Workflow Orchestrator)

**File:** `.claude/agents/content-generation.md`

**Content:**
```markdown
# Content Generation Agent

You are the Content Generation Agent. Generate 150 blog posts daily
for all active clients using the daily-seo-content.md skill.

## Workflow:
1. Scan for active clients (read status.json)
2. For each client:
   - Load brief.json, personas, keywords
   - Invoke daily-seo-content.md skill
   - Handle errors (skip client if data missing)
3. Aggregate results
4. Report summary

## Error Handling:
- If client data missing → Skip, log warning
- If API fails → Retry once, then abort
- If quality check fails → Save to F/
```

**Purpose:**
- Workflow orchestration
- Decision-making logic
- Error handling
- Client iteration
- ~100-200 lines total

**Think of it as:** The project manager who coordinates work

---

### LAYER 3: SKILL (Implementation Details)

**File:** `.claude/skills/daily-seo-content.md`

**Content:**
```markdown
# Daily SEO Content Generation Skill

## Step-by-Step Process:

### Step 1: Load Client Data
1. Read /clients/[client]/brief.json
2. Read /clients/[client]/keyword-strategy.json
3. Read /clients/[client]/personas/*.json
4. Load today's topic from content calendar

### Step 2: Keyword Research
1. Target keyword for today's post
2. Research SERP for keyword (DataForSEO)
3. Analyze top 3 competitors
4. Identify content gaps

### Step 3: Generate English Content
1. Apply skyscraper technique
2. Write 2000-word article
3. Add E-E-A-T elements
4. Format with proper headings
... (50 more detailed steps)

### Step 10: Quality Validation
1. Check word count (800-1500)
2. Check keyword density (1-2%)
3. Check readability (Grade 8-10)
4. Score 0-100
5. If <70, save to F/, else save to D/
```

**Purpose:**
- Exact step-by-step instructions
- Detailed formatting specifications
- Quality standards
- Validation rules
- ~3000-5000 words, very detailed

**Think of it as:** The detailed instruction manual worker follows

---

## Another Example: `/build-hub-page [topic]`

### COMMAND: What Employee Runs
```bash
/build-hub-page equipment-financing
```

**File:** `.claude/commands/build-hub-page.md` (~50 lines)
```
Create a hub page for [topic] linking all related spoke content.

Prerequisites: Need 5+ related posts published
Usage: /build-hub-page [topic]
```

### AGENT: Workflow Coordinator
**File:** `.claude/agents/hub-and-spoke-architect.md` (~200 lines)
```
Hub-and-Spoke Architect Agent

Workflow:
1. Validate prerequisites (5+ spokes exist)
2. Analyze keyword cluster
3. Invoke hub-page-generation.md skill
4. Invoke internal-linking-optimization.md skill
5. Generate architecture documentation
6. Handle errors
```

### SKILL: Implementation Manual
**File:** `.claude/skills/hub-page-generation.md` (~4800 words!)
```
Hub Page Generation Skill

Step 1: Define hub topic and cluster (detailed)
Step 2: Analyze hub SERP (detailed)
Step 3: Organize content architecture (detailed)
Step 4: Build hub page structure (detailed)
Step 5: Research hub content (detailed)
Step 6: Write hub page (detailed)
Step 7: Create linking strategy document (detailed)
Step 8: Implement hub & spoke system (detailed)

[Contains exact formats, examples, quality standards, etc.]
```

---

## Why 3 Layers?

### Separation of Concerns

**Commands (Interface Layer):**
- Employee-friendly
- Simple, short documentation
- Just enough to know when to use it
- No technical implementation details

**Agents (Orchestration Layer):**
- Handle business logic
- Make decisions (which skill to use when)
- Error handling
- Iteration (loop through clients)
- Progress tracking

**Skills (Implementation Layer):**
- Detailed "how-to" instructions
- Reusable across multiple agents
- Quality standards
- Exact formatting
- Can be improved independently

---

## Analogy: Restaurant

### COMMAND = Menu Item
```
"I'll have the daily special"
```
- Simple
- Customer-facing
- Just enough info to order

### AGENT = Head Chef
```
Head Chef decides:
- Which sous chef handles which task
- Timing and coordination
- Quality control
- What to do if something goes wrong
```
- Orchestration
- Decision-making
- Error handling

### SKILL = Recipe Book
```
Recipe: How to make the daily special
Step 1: Prep vegetables (exact knife cuts)
Step 2: Heat oil to 350°F (exact temperature)
Step 3: Sauté for 3-4 minutes (exact timing)
... (very detailed instructions)
```
- Detailed procedures
- Exact specifications
- Quality standards
- Reusable instructions

---

## Key Differences

| Aspect | Command | Agent | Skill |
|--------|---------|-------|-------|
| **Length** | 20-50 lines | 100-300 lines | 500-5000 words |
| **Audience** | Employees | Claude (AI) | Claude (AI) |
| **Purpose** | What to run | How to orchestrate | How to execute |
| **Complexity** | Simple | Medium | Detailed |
| **Reusability** | 1:1 mapping | 1:many | many:many |
| **Examples** | Usage syntax | Workflow steps | Implementation details |

---

## Reusability Example

### One Skill Used by Multiple Agents

**Skill:** `keyword-research.md`

**Used by:**
1. **Client Onboarding Agent** - Initial keyword research for new client
2. **Content Generation Agent** - Research keywords for daily posts
3. **Keyword Opportunity Agent** - Find new keyword opportunities
4. **Hub-and-Spoke Agent** - Research hub topic keywords

**Benefit:** Write keyword research process ONCE, use in 4 different workflows

---

### One Agent Called by Multiple Commands

**Agent:** `content-generation.md`

**Triggered by:**
1. `/generate-daily-blogs` - Daily blog generation
2. `/finalize-client` - Generate first 10 posts for new client

**Benefit:** Same content generation logic for both use cases

---

## Your Specific Question

### `.claude/commands/generate-daily-blogs.md` vs `.claude/skills/hub-page-generation.md`

**These are different things!**

**generate-daily-blogs.md** = COMMAND
- Employee runs `/generate-daily-blogs` daily
- Triggers: Content Generation Agent
- Agent uses: daily-seo-content.md skill (NOT hub-page-generation.md)
- Purpose: Generate 150 regular blog posts

**hub-page-generation.md** = SKILL
- Employee never uses this directly
- Triggered by: Hub-and-Spoke Architect Agent
- When: Employee runs `/build-hub-page [topic]` command
- Purpose: Create one comprehensive hub page (3500-5000 words) linking related posts

**They're not comparable** - one is a user interface (command), the other is implementation instructions (skill).

---

## Complete Mapping

### Daily Blog Posts
```
Employee runs:    /generate-daily-blogs (COMMAND)
     ↓
Claude loads:     content-generation.md (AGENT)
     ↓
Agent executes:   daily-seo-content.md (SKILL)
     ↓
Result:           150 regular blog posts in D/
```

### Hub Page Creation
```
Employee runs:    /build-hub-page equipment-financing (COMMAND)
     ↓
Claude loads:     hub-and-spoke-architect.md (AGENT)
     ↓
Agent executes:   hub-page-generation.md (SKILL)
     ↓
Result:           1 comprehensive hub page (3500-5000 words) in D/
```

**Completely different workflows!**

---

## Why This Architecture?

### Benefit 1: Reusability
- Skills can be used by multiple agents
- Don't repeat implementation details
- Update skill once, affects all agents using it

### Benefit 2: Clarity
- Employees see simple commands
- Don't need to understand implementation
- Clear what to run and when

### Benefit 3: Maintainability
- Change implementation (skill) without changing interface (command)
- Update workflow (agent) without changing skill
- Evolve architecture without breaking user experience

### Benefit 4: Modularity
- Each layer has single responsibility
- Commands = interface
- Agents = orchestration
- Skills = implementation

---

## How to Think About Each Layer

### When Creating a COMMAND:
Ask: "What would an employee type to do this?"
```
Simple, short, user-friendly
/do-something [parameter]
```

### When Creating an AGENT:
Ask: "What's the complete workflow from start to finish?"
```
1. Load data
2. For each item:
   - Do work
   - Handle errors
3. Generate summary
```

### When Creating a SKILL:
Ask: "What are the exact step-by-step instructions to do this?"
```
Step 1: Do X exactly like this
Step 2: Do Y exactly like this
Step 3: Validate using these exact criteria
... (very detailed)
```

---

## Summary

### Commands (.claude/commands/)
- **18 total** (now 19 with /monthly-review)
- Employee-facing
- Simple, short documentation
- Entry points to workflows

### Agents (.claude/agents/)
- **12 total**
- Workflow orchestration
- Error handling and decisions
- Bridge between commands and skills

### Skills (.claude/skills/)
- **24 total** (23 after deleting duplicate)
- Implementation details
- Reusable procedures
- Very detailed instructions

**Architecture:**
```
18 Commands → 12 Agents → 24 Skills

Many-to-one-to-many relationship:
- Multiple commands can trigger same agent
- One agent can use multiple skills
- One skill can be used by multiple agents
```

---

## Your Framework Has:

```
18 Commands (What employees run)
  ↓
12 Agents (How workflows are coordinated)
  ↓
24 Skills (How tasks are executed)
```

**All working together** to automate 95% of SEO work!

---

**Key Takeaway:** Commands are for employees, agents coordinate workflows, skills contain detailed instructions. They work together as a 3-layer system.

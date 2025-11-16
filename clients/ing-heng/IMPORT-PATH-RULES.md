# Import Path Architecture Rules

## Critical: Prevent Build Failures

This document defines the **absolute rules** for import paths in this Astro project. Following these rules prevents build failures.

---

## Directory Structure

```
src/
├── utils/
│   ├── constants.ts         ← TARGET FILE
│   ├── schema.ts
│   └── seo.ts
├── components/              ← COMPONENTS
├── layouts/                 ← LAYOUTS
└── pages/
    ├── index.astro          ← ROOT REDIRECT (Level 0)
    ├── en/
    │   ├── index.astro      ← HOMEPAGE (Level 1)
    │   ├── about.astro      ← STANDARD PAGE (Level 1)
    │   ├── services/
    │   │   └── index.astro  ← SERVICES INDEX (Level 2)
    │   ├── equipment/
    │   │   ├── index.astro  ← EQUIPMENT INDEX (Level 2)
    │   │   └── excavator.astro ← EQUIPMENT PAGE (Level 2)
    │   └── blog/
    │       ├── index.astro  ← BLOG INDEX (Level 2)
    │       └── post.astro   ← BLOG POST (Level 2)
    ├── ms/                  ← SAME STRUCTURE
    └── zh/                  ← SAME STRUCTURE
```

---

## Import Path Rules by File Location

### Rule 1: Root Level (Level 0)
**Location:** `src/pages/index.astro`

**Import Path:**
```javascript
import { SITE_CONFIG } from './utils/constants';
```

**Explanation:** Go UP 0 levels, then INTO utils/

---

### Rule 2: First Level (Level 1)
**Location:** `src/pages/{lang}/index.astro` or `src/pages/{lang}/about.astro`

**Import Path:**
```javascript
import { SITE_CONFIG } from '../../utils/constants';
```

**Explanation:** Go UP 2 levels (`../../`), then INTO utils/

**Examples:**
- `src/pages/en/index.astro` → `../../utils/constants`
- `src/pages/en/about.astro` → `../../utils/constants`
- `src/pages/en/contact.astro` → `../../utils/constants`
- `src/pages/en/faq.astro` → `../../utils/constants`
- `src/pages/en/calculator.astro` → `../../utils/constants`

---

### Rule 3: Second Level - Subdirectories (Level 2)
**Location:** `src/pages/{lang}/{subfolder}/file.astro`

**Import Path:**
```javascript
import { SITE_CONFIG } from '../../../utils/constants';
```

**Explanation:** Go UP 3 levels (`../../../`), then INTO utils/

**Examples:**
- `src/pages/en/services/index.astro` → `../../../utils/constants`
- `src/pages/en/equipment/excavator.astro` → `../../../utils/constants`
- `src/pages/en/blog/my-post.astro` → `../../../utils/constants`
- `src/pages/ms/equipment/lorry.astro` → `../../../utils/constants`
- `src/pages/zh/services/hire-purchase.astro` → `../../../utils/constants`

---

## Import Path Quick Reference Table

| File Location | Number of `../` | Import Path |
|--------------|----------------|-------------|
| `src/pages/index.astro` | 0 | `./utils/constants` |
| `src/pages/en/index.astro` | 2 | `../../utils/constants` |
| `src/pages/en/about.astro` | 2 | `../../utils/constants` |
| `src/pages/en/equipment/excavator.astro` | 3 | `../../../utils/constants` |
| `src/pages/en/services/index.astro` | 3 | `../../../utils/constants` |
| `src/pages/en/blog/post.astro` | 3 | `../../../utils/constants` |

---

## Component/Layout Imports

Components and layouts always use the same path regardless of where they're imported:

```javascript
// ✅ CORRECT for all pages in subdirectories
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Hero from '../../../components/Hero.astro';

// Number of ../ depends on depth of your page file
```

**Rule:** Count how many folders deep your file is from `src/`, then use that many `../` to get back to `src/`.

---

## How to Calculate Import Path (The Universal Method)

### Step 1: Count Folder Depth

Starting from `src/pages/`, count how many folders deep your file is:

```
src/pages/index.astro                    → 0 folders deep
src/pages/en/index.astro                 → 1 folder deep
src/pages/en/equipment/excavator.astro   → 2 folders deep
```

### Step 2: Add 1 to the Count

```
0 folders deep → 0 + 1 = 1 → Use `./` (current directory + into utils)
1 folder deep  → 1 + 1 = 2 → Use `../../` (up 2 levels, into utils)
2 folders deep → 2 + 1 = 3 → Use `../../../` (up 3 levels, into utils)
```

### Step 3: Apply the Pattern

```javascript
// File: src/pages/en/equipment/excavator.astro (2 folders deep)
// Calculation: 2 + 1 = 3
// Result: Use ../../../
import { SITE_CONFIG } from '../../../utils/constants';
```

---

## Common Mistakes to Avoid

### ❌ WRONG: Mixing import paths in same file
```javascript
import { SITE_CONFIG } from '../../utils/constants';
import { COMPANY_INFO } from '../../../utils/constants'; // ← INCONSISTENT!
```

### ✅ CORRECT: Consistent paths
```javascript
import { SITE_CONFIG, COMPANY_INFO } from '../../../utils/constants';
```

### ❌ WRONG: Copy-pasting without adjusting depth
```javascript
// In src/pages/en/equipment/excavator.astro (WRONG)
import Hero from '../../components/Hero.astro'; // ← Only goes up 2 levels!
```

### ✅ CORRECT: Count the depth
```javascript
// In src/pages/en/equipment/excavator.astro (CORRECT)
import Hero from '../../../components/Hero.astro'; // ← Goes up 3 levels to src/
```

---

## Testing Import Paths

Before committing, always test the build:

```bash
npm run build
```

If you see errors like:
```
Could not resolve "../../utils/constants" from "src/pages/en/equipment/excavator.astro"
```

**Fix:** You need one more `../` in the path.

---

## AI Assistant Instructions

**When creating new pages:**

1. **Identify the file location** relative to `src/pages/`
2. **Count folder depth** (not including `pages/`)
3. **Apply the formula:** Number of `../` = folder depth + 1
4. **Use consistent imports** for all utilities from same file

**Example:**
```javascript
// New file: src/pages/en/products/special-offer.astro
// Depth: 2 folders (en/products/)
// Formula: 2 + 1 = 3
// Import path: ../../../

import { SITE_CONFIG } from '../../../utils/constants';
import Hero from '../../../components/Hero.astro';
import BaseLayout from '../../../layouts/BaseLayout.astro';
```

---

## Quick Cheat Sheet

```
src/pages/index.astro                 → ./utils/
src/pages/en/*.astro                  → ../../utils/
src/pages/en/*/*.astro                → ../../../utils/
src/pages/en/*/*/*.astro              → ../../../../utils/
```

**Memorization Tip:**
- Root level = `./`
- Every folder deeper = add one more `../`
- Then append `utils/constants` or `components/ComponentName.astro`

---

## Verification Checklist

Before committing code, verify:

- [ ] All imports use correct number of `../` based on file depth
- [ ] No mix of `../../` and `../../../` for same utils import
- [ ] Build succeeds locally: `npm run build`
- [ ] No esbuild "Could not resolve" errors

---

**Last Updated:** 2025-11-06
**Reason for Creation:** Build failures due to inconsistent import paths across 37 files

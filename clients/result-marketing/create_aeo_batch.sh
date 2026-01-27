#!/bin/bash

# Directory
D_DIR="content/en/blogs/D"

# List of missing slugs
SLUGS=(
  "answer-boxes-ai-optimization"
  "tables-lists-ai-answers"
  "q-and-a-format-ai-overviews"
  "direct-answers-ai-search"
  "aeo-results-drive-business"
  "aeo-good-for-leads-or-traffic"
  "how-long-aeo-impacts-revenue"
  "minimum-budget-aeo-movement"
  "expect-first-30-60-90-days-aeo"
  "aeo-timeline-results"
)

count=0
for slug in "${SLUGS[@]}"; do
  file="$D_DIR/aeo-$slug.md"
  if [ -f "$file" ]; then
    echo "EXISTS: aeo-$slug.md"
  else
    printf '%s\n' "---
title: \"$slug\"
description: \"AEO content for $slug\"
category: \"aeo\"
published: \"2026-01-25\"
status: \"draft\"
---
# Draft: $slug
Content to be generated.
" > "$file"
    echo "✅ CREATED: aeo-$slug.md"
    count=$((count + 1))
  fi
done

echo "Created $count files"

#!/bin/bash

# Directory
D_DIR="content/en/blogs/D"

# List of missing slugs (batch 2)
SLUGS=(
  "aeo-roi-calculator"
  "aeo-leads-vs-traffic"
  "aeo-revenue-impact"
  "aeo-brand-visibility"
  "aeo-market-share-growth"
  "aeo-customer-acquisition"
  "aeo-sustainable-growth"
  "aeo-long-term-benefits"
  "aeo-compound-effect"
  "aeo-results-construction-business"
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

#!/bin/bash

# Array of slugs to generate
slugs=(
  "product-schema-ai-overviews"
  "local-business-schema-ai"
  "review-schema-ai-citations"
  "how-to-schema-qa-format"
  "e-e-a-t-ai-overviews"
  "experience-eat-ai-search"
  "author-authority-ai-answers"
  "brand-mentions-ai-overviews"
  "digital-pr-ai-citations"
)

# Counter
count=0
total=${#slugs[@]}

for slug in "${slugs[@]}"; do
  file="aeo-$slug.md"
  if [ -f "$file" ]; then
    echo "SKIP: $file (exists)"
  else
    echo "CREATE: $file"
    # Create placeholder for now
    echo "# Draft: $slug" > "$file"
    count=$((count + 1))
  fi
done

echo "Created $count out of $total files"

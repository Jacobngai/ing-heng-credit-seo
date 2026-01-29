#!/bin/bash

# AEO Blog Post Generator
# Generates all missing AEO blog posts

BLOG_DIR="C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\result-marketing\content\en\blogs\D"

# Array of missing posts
declare -A posts=(
  ["how-to-get-brand-into-ai-answers"]="permission"
  ["zero-click-search-rise-2026"]="permission"
  ["why-competitors-showing-in-ai-answers"]="permission"
  ["ai-search-invisible-crisis"]="permission"
  ["traditional-seo-obsolete-2026"]="permission"
  ["permission-to-invest-discovery-2026"]="permission"
  ["construction-seo-dead-2026"]="permission"
  ["sme-seo-still-worth-it"]="permission"
  ["equipment-rental-ai-visibility"]="permission"
  ["local-business-seo-vs-ai-overviews"]="permission"
  ["retail-business-seo-dead"]="permission"
  ["f-and-b-seo-ai-search-era"]="permission"
  ["b2b-industrial-seo-relevance"]="permission"
  ["manufacturing-seo-2026"]="permission"
  ["logistics-seo-ai-overviews"]="permission"
  ["property-development-seo-worth-it"]="permission"
  ["automotive-seo-ai-search"]="permission"
  ["healthcare-seo-ai-answers"]="permission"
  ["education-seo-ai-overviews"]="permission"
  ["professional-services-seo-2026"]="permission"
  ["tourism-seo-ai-search"]="permission"
  ["event-venues-seo-relevance"]="permission"
  ["wholesale-seo-ai-visibility"]="permission"
  ["franchise-seo-ai-overviews"]="permission"
  ["startup-seo-worth-investment"]="permission"
  ["family-business-seo-dead"]="permission"
  ["what-is-aeo"]="visibility"
  ["aeo-vs-seo-differences"]="visibility"
  ["aeo-vs-aieo-vs-geo-explained"]="visibility"
  ["how-to-get-cited-ai-overviews"]="visibility"
  ["how-to-show-up-copilot-answers"]="visibility"
  ["schema-helps-ai-overviews"]="visibility"
  ["how-to-measure-ai-search-visibility"]="visibility"
  ["answer-engine-optimization-guide"]="visibility"
  ["ai-overview-citation-economy"]="visibility"
  ["bing-ai-optimization-guide"]="visibility"
  ["perplexity-ai-optimization"]="visibility"
  ["ai-search-engines-compared"]="visibility"
  ["future-of-ai-search-2026"]="visibility"
  ["schema-markup-ai-overviews"]="visibility"
  ["structured-data-ai-answers"]="visibility"
  ["faq-schema-ai-overviews"]="visibility"
  ["how-to-schema-ai-search"]="visibility"
)

count=0
total=${#posts[@]}

for slug in "${!posts[@]}"; do
  category="${posts[$slug]}"
  filename="aeo-${slug}.md"
  
  if [ ! -f "$BLOG_DIR/$filename" ]; then
    echo "Generating: $filename"
    touch "$BLOG_DIR/$filename"
    count=$((count + 1))
  fi
done

echo "Created $count empty files. Ready for content generation."
echo "Total posts to generate: $total"

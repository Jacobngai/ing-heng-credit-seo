#!/bin/bash
# Spawn next batch of blog rewrites

PROJ_DIR="/home/ubuntu/clawd/projects/ingheng"
EN_DIR="$PROJ_DIR/sites/en/src/pages/en/blog"
MS_DIR="$PROJ_DIR/sites/ms/src/pages/ms/blog"
ZH_DIR="$PROJ_DIR/sites/zh/src/pages/zh/blog"

# Track which batch we're on
EN_BATCH_FILE="$PROJ_DIR/.en-batch-num"
MS_BATCH_FILE="$PROJ_DIR/.ms-batch-num"
ZH_BATCH_FILE="$PROJ_DIR/.zh-batch-num"

# Initialize batch counters if not exist
[ ! -f "$EN_BATCH_FILE" ] && echo "4" > "$EN_BATCH_FILE"
[ ! -f "$MS_BATCH_FILE" ] && echo "3" > "$MS_BATCH_FILE"
[ ! -f "$ZH_BATCH_FILE" ] && echo "3" > "$ZH_BATCH_FILE"

# Get current batch numbers
EN_BATCH=$(cat "$EN_BATCH_FILE")
MS_BATCH=$(cat "$MS_BATCH_FILE")
ZH_BATCH=$(cat "$ZH_BATCH_FILE")

echo "Current batch numbers: EN=$EN_BATCH, MS=$MS_BATCH, ZH=$ZH_BATCH"

# Calculate line ranges (15 per batch)
get_range() {
    local batch=$1
    local start=$(( (batch - 1) * 15 + 1 ))
    local end=$(( batch * 15 ))
    echo "$start,$end"
}

# Get files for a batch
get_en_files() {
    local range=$(get_range $1)
    sed -n "${range}p" "$PROJ_DIR/BLOG-REWRITE-LIST.txt" | cut -d'|' -f2 | tr '\n' ' '
}

get_ms_files() {
    local range=$(get_range $1)
    sed -n "${range}p" "$PROJ_DIR/BLOG-REWRITE-LIST-MS.txt" | cut -d'|' -f2 | tr '\n' ' '
}

get_zh_files() {
    local range=$(get_range $1)
    sed -n "${range}p" "$PROJ_DIR/BLOG-REWRITE-LIST-ZH.txt" | cut -d'|' -f2 | tr '\n' ' '
}

echo ""
echo "=== Next EN batch ($EN_BATCH) files ==="
get_en_files $EN_BATCH
echo ""
echo "=== Next MS batch ($MS_BATCH) files ==="
get_ms_files $MS_BATCH
echo ""
echo "=== Next ZH batch ($ZH_BATCH) files ==="
get_zh_files $ZH_BATCH

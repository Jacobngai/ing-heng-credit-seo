#!/bin/bash

# Batch generate remaining blog posts for Feb 23-28, 2026
# This script creates placeholder structures for all remaining posts

BASE_DIR="C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ihousing\website\src\pages"

# FEB 23 Posts
echo "Generating February 23 posts..."

# English posts
mkdir -p "$BASE_DIR/en/blog/lendu-plantation-area-nature-tourism-investment-guide"
mkdir -p "$BASE_DIR/en/blog/serene-countryside-rural-retreats-trending-2026"
mkdir -p "$BASE_DIR/en/blog/nature-lovers-city-breakers-two-target-markets"
mkdir -p "$BASE_DIR/en/blog/retreat-center-vacation-rental-converting-rural"
mkdir -p "$BASE_DIR/en/blog/rural-property-renovation-converting-village-houses"

# Malay posts
mkdir -p "$BASE_DIR/ms/blog/kawasan-perladangan-lendu-panduan-pelaburan"
mkdir -p "$BASE_DIR/ms/blog/pencinta-alam-pemisah-bandar-dua-pasaran"
mkdir -p "$BASE_DIR/ms/blog/renovasi-hartanah-luar-bandar-mengubah-rumah-kampung"

# Chinese posts
mkdir -p "$BASE_DIR/zh/blog/lendu种植园地区自然旅游投资指南"
mkdir -p "$BASE_DIR/zh/blog/自然爱好者vs城市逃离者两个目标市场"
mkdir -p "$BASE_DIR/zh/blog/农村房产改造将村庄房屋转换为airbnb"

echo "February 23 directories created. Now generating content files..."


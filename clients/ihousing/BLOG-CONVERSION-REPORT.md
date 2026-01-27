# Blog Conversion Report - iHousing

**Date:** 2026-01-24
**Status:** COMPLETED

## Summary

Successfully converted all 61 blog posts from Markdown format to Astro .astro pages.

### Conversion Details

| Language | Source Files | Converted | Destination |
|----------|-------------|-----------|-------------|
| English (en) | 21 | 21 | `clients/ihousing/website/src/pages/en/blog/{slug}/index.astro` |
| Chinese (zh) | 20 | 20 | `clients/ihousing/website/src/pages/zh/blog/{slug}/index.astro` |
| Malay (ms) | 20 | 20 | `clients/ihousing/website/src/pages/ms/blog/{slug}/index.astro` |
| **TOTAL** | **61** | **61** | |

### English Blog Posts (21)

1. airbnb-cleaning-service-melaka-management
2. airbnb-income-vs-expenses-spreadsheet-malaysia
3. airbnb-photography-service-melaka-malaysia
4. airbnb-rules-melaka-strata-title
5. bandar-hilir-melaka-property-investment-airbnb
6. buying-furniture-for-airbnb-malaysia
7. cost-to-furnish-condo-for-airbnb-malaysia
8. flat-fee-airbnb-management-melaka
9. how-much-can-i-earn-from-airbnb-in-melaka
10. how-to-change-airbnb-manager-smoothly-melaka
11. how-to-handle-difficult-airbnb-guests-malaysia
12. how-to-set-up-airbnb-condo-step-by-step
13. is-airbnb-legal-in-melaka-2025
14. jonker-street-airbnb-investment-potential
15. melaka-raya-condo-investment-airbnb
16. self-manage-airbnb-vs-hire-company-malaysia
17. signs-your-airbnb-manager-is-failing-melaka
18. switch-airbnb-manager-without-losing-bookings
19. tenant-not-paying-rent-what-to-do-malaysia
20. weekend-getaway-melaka-from-kl-singapore-airbnb-demand
21. what-to-do-with-empty-condo-in-melaka

### Chinese Blog Posts (20)

1. guding-feiyong-minsu-guanli-malaka
2. malaka-10zu-minsu-touzi-gongyu
3. malaka-gucheng-minsu-touzi-youshi
4. malaka-kong-fang-zen-me-ban
5. malaka-minsu-hefama-2025
6. malaka-minsu-touzi-huibao
7. malaka-zhenghe-diqu-minsu-touzi
8. malaka-zhoumo-luyou-touzi-2025
9. malaka-zubuchuqu-fangzi
10. minsu-bufu-gongyingshang-xuanze-2025
11. minsu-guanli-gongsi-shoufei-duibi
12. minsu-guanli-hetong-zhongzhi-qian-heshi
13. minsu-zhineng-mensuo-tuijian
14. minsu-zhuangxiu-yusuan-yincang-chengben
15. nage-gongyu-shihe-minsu
16. ruhe-kaishi-zuo-minsu-malaka
17. ruhe-xuanze-kaopu-minsu-tuoguan
18. weimin-su-mai-jiaju-malaisiya
19. zhuan-guanli-gongsi-yingxiang-dingdan
20. ziji-jingying-minsu-haishi-tuoguan

### Malay Blog Posts (20)

1. airbnb-vs-sewa-bulanan-mana-lebih-untung
2. apa-nak-buat-dengan-rumah-kosong-melaka
3. bandar-hilir-melaka-kawasan-terbaik-untuk-airbnb
4. cara-menghias-bilik-airbnb-menarik
5. jonker-street-pelaburan-hartanah-airbnb-melaka
6. kawasan-pelancongan-melaka-untuk-hartanah-airbnb
7. kos-renovation-airbnb-melaka-panduan
8. kos-tersembunyi-pengurusan-airbnb-melaka
9. macam-mana-nak-dapat-duit-dari-rumah-sewa
10. membeli-perabot-untuk-airbnb-panduan-lengkap
11. mula-airbnb-di-melaka-panduan-pemula
12. pakej-perabot-airbnb-malaysia-jimat-dan-lengkap
13. pelaburan-kondominium-melaka-untung-ke
14. perabot-ikea-untuk-airbnb-melaka
15. pilih-pengurus-airbnb-yang-betul
16. rumah-tak-dapat-disewa-melaka
17. senarai-semak-keperluan-airbnb-lengkap
18. tukar-pengurus-airbnb-tanpa-kehilangan-tempahan
19. urus-airbnb-sendiri-vs-upah-syarikat
20. yuran-tetap-pengurusan-airbnb-melaka

## Template Features

Each converted Astro page includes:

1. **Proper frontmatter** - title, description, slug, date, category, language
2. **Layout component** - imports Layout from `../../../../layouts/Layout.astro`
3. **SEO metadata** - image path, OG tags via Layout
4. **Styled header** - category label, title, description, publish date
5. **Key takeaways box** - green highlighted box with article summary
6. **HTML content** - properly converted markdown with:
   - Headers (h1-h4)
   - Bold and italic text
   - Lists (ordered and unordered)
   - Tables
   - Horizontal rules
7. **WhatsApp CTA** - language-specific call-to-action button
8. **About iHousing footer** - company description in respective language

## Next Steps

1. Create blog index pages for each language (`/blog/index.astro`)
2. Add all 61 slugs to `SLUG_MANIFEST.json`
3. Run `npm run build` to verify no build errors
4. Run `npm run check-sitemap` to verify no 404s
5. Deploy to Vercel

## Files

- **Conversion Script:** `C:\Users\walte\ing heng credit\ing-heng-credit-seo\convert-blogs-to-astro.js`
- **Source Content:** `C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ihousing\content\`
- **Destination:** `C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ihousing\website\src\pages\`

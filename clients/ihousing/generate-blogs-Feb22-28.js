const fs = require('fs');
const path = require('path');

// Blog posts to generate for Feb 22-28, 2026
const posts = [
  // FEB 22 - Continued (MS and ZH)
  {
    date: '2026-02-22',
    lang: 'ms',
    slug: 'pengurusan-sewa-korporat-bagaimana-ihousing-mengurus-tempahan-jangka-panjang',
    title: 'Pengurusan Sewa Korporat: Bagaimana iHousing Mengurus Tempahan Jangka Panjang',
    category: 'Kecemerlangan Pengurusan',
    filename: 'pengurusan-sewa-korporat-bagaimana-ihousing-mengurus-tempahan-jangka-panjang.md'
  },
  {
    date: '2026-02-22',
    lang: 'ms',
    slug: 'kejayaan-sewa-korporat-rm14000-bulan-dari-kondo-bersebelahan-kilang',
    title: 'Kejayaan Sewa Korporat: RM14,000/bulan dari Kondo Bersebelahan Kilang',
    category: 'Bukti Sosial',
    filename: 'kejayaan-sewa-korporat-rm14000-bulan-dari-kondo-bersebelahan-kilang.md'
  },
  {
    date: '2026-02-22',
    lang: 'zh',
    slug: 'krubong工业区工人住房需求分析',
    title: 'Krubong工业区工人住房需求分析',
    category: '投资分析',
    filename: 'krubong工业区工人住房需求分析.md'
  },
  {
    date: '2026-02-22',
    lang: 'zh',
    slug: '企业租赁管理ihousing如何处理长期预订',
    title: '企业租赁管理:iHousing如何处理长期预订',
    category: '管理卓越',
    filename: '企业租赁管理ihousing如何处理长期预订.md'
  },
  {
    date: '2026-02-22',
    lang: 'zh',
    slug: '企业租赁成功rm14000月工厂附近公寓',
    title: '企业租赁成功:RM14,000/月工厂附近公寓',
    category: '成功案例',
    filename: '企业租赁成功rm14000月工厂附近公寓.md'
  },
  // FEB 23 - All posts
  {
    date: '2026-02-23',
    lang: 'en',
    slug: 'lendu-plantation-area-nature-tourism-investment-guide',
    title: 'Lendu Plantation Area: Nature Tourism Investment Guide',
    category: 'Rural Investment',
    filename: 'lendu-plantation-area-nature-tourism-investment-guide.md'
  },
  // ... Add all remaining posts
];

console.log('Blog generation script created for Feb 22-28, 2026');
console.log('Total posts to generate:', posts.length);

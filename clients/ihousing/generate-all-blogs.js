const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'website/src/pages');

// Blog posts data for Feb 15-21, 2026
const blogData = {
  '2026-02-15': {
    en: [
      { slug: 'multi-generational-travel-accommodate-extended-families', title: 'Multi-Generational Travel: How to Accommodate Extended Families', category: 'comparison' },
      { slug: 'authentic-experience-fishing-village-melaka-tourism', title: 'Authentic Experience: Fishing Village Tourism in Melaka', category: 'comparison' }
    ],
    ms: [
      { slug: 'strategi-cuti-sekolah-jasin-menangkap-pelancongan-keluarga', title: 'Strategi Cuti Sekolah Jasin: Menangkap Pelancongan Keluarga', category: 'location-based' },
      { slug: 'aktiviti-eko-pelancongan-jasin-nature', title: 'Aktiviti Eko-Pelancongan Jasin: Promosi Pengembaraan Alam', category: 'location-based' },
      { slug: 'bilik-keluarga-vs-studio-apa-lebih', title: 'Bilik Keluarga vs Studio: Apa Yang Lebih?', category: 'comparison' },
      { slug: 'pengalaman-autentik-kampung-nelayan', title: 'Pengalaman Autentik: Pelancongan Kampung Nelayan', category: 'comparison' }
    ],
    zh: [
      { slug: 'jasin学校假期策略', title: 'Jasin学校假期策略：吸引家庭旅游', category: 'location-based' },
      { slug: '生态旅游活动-推广', title: '生态旅游活动：向客人推广自然探险', category: 'location-based' },
      { slug: '家庭房-vs-工作室', title: '家庭房 vs 工作室：哪种收入更高', category: 'comparison' },
      { slug: '正宗体验-渔村', title: '正宗体验：马六甲渔村旅游', category: 'comparison' }
    ]
  },
  '2026-02-16': {
    en: [
      { slug: 'bukit-katil-hillside-properties-investment', title: 'Bukit Katil Hillside Properties: Scenic View Investment Guide', category: 'location-based' },
      { slug: 'cool-climate-strategy-singaporeans', title: 'Cool Climate Strategy: Why Hill Properties Appeal to Singaporeans', category: 'location-based' },
      { slug: 'ihousing-vs-competitors-owner-reviews', title: 'iHousing vs Competitors: Real Owner Reviews', category: 'comparison' },
      { slug: 'management-quality-comparison-response', title: 'Management Quality Comparison: Response Time and Transparency', category: 'comparison' },
      { slug: 'airbnb-description-writing-seo', title: 'Airbnb Description Writing: SEO Keywords for Melaka', category: 'educational' }
    ],
    ms: [
      { slug: 'hartanah-bukit-katil-panduan', title: 'Hartanah Bukit Katil: Panduan Pelaburan', category: 'location-based' },
      { slug: 'strategi-iklim-sejuk-singapura', title: 'Strategi Iklim Sejuk: Pelabur Singapura', category: 'location-based' },
      { slug: 'ihousing-vs-pesaing-ulasan', title: 'iHousing vs Pesaing: Ulasan Pemilik', category: 'comparison' },
      { slug: 'kualiti-pengurusan-perbandingan', title: 'Perbandingan Kualiti Pengurusan', category: 'comparison' },
      { slug: 'penulisan-penerangan-seo', title: 'Penulisan Penerangan: Kata Kunci SEO', category: 'educational' }
    ],
    zh: [
      { slug: '武吉吉地里山坡房产', title: '武吉吉地里山坡房产：风景投资指南', category: 'location-based' },
      { slug: '凉爽气候策略', title: '凉爽气候策略：为何吸引新加坡人', category: 'location-based' },
      { slug: 'ihousing-vs-竞争对手', title: 'iHousing vs 竞争对手：业主评论', category: 'comparison' },
      { slug: '管理质量比较', title: '管理质量比较：响应和透明度', category: 'comparison' },
      { slug: '描述写作-seo', title: 'Airbnb描述写作：SEO关键词', category: 'educational' }
    ]
  },
  '2026-02-17': {
    en: [
      { slug: 'durian-tunggal-residential-neighborhood', title: 'Durian Tunggal Residential: Established Neighborhood', category: 'location-based' },
      { slug: 'community-living-consistent-demand', title: 'Community Living: Consistent Airbnb Demand', category: 'location-based' },
      { slug: 'parkland-avenue-investment-calculator', title: 'Parkland Avenue Investment Calculator: Projecting Returns', category: 'comparison' },
      { slug: 'condo-maintenance-fees-roi', title: 'Condo Maintenance Fees: ROI Calculation', category: 'comparison' },
      { slug: 'professional-photography-bookings', title: 'Professional Photography: Boost Booking Rates', category: 'educational' },
      { slug: 'community-success-rm9500-durian', title: 'Community Success: RM9,500 from Durian Tunggal', category: 'social-proof' }
    ],
    ms: [
      { slug: 'kediaman-durian-tunggal-kawasan', title: 'Kediaman Durian Tunggal: Kawasan Ditubuh', category: 'location-based' },
      { slug: 'kehidupan-komuniti-permintaan', title: 'Kehidupan Komuniti: Permintaan Konsisten', category: 'location-based' },
      { slug: 'kalkulator-pelaburan-parkland', title: 'Kalkulator Pelaburan Parkland Avenue', category: 'comparison' },
      { slug: 'yuran-penyelenggaraan-kondo', title: 'Yuran Penyelenggaraan Kondo', category: 'comparison' },
      { slug: 'fotografi-profesional-tempahan', title: 'Fotografi Profesional: Tingkatkan Tempahan', category: 'educational' },
      { slug: 'kejayaan-komuniti-rm9500', title: 'Kejayaan Komuniti: RM9,500 Durian Tunggal', category: 'social-proof' }
    ],
    zh: [
      { slug: '榴梿洞住宅社区', title: '榴梿洞住宅：成熟社区策略', category: 'location-based' },
      { slug: '社区生活-持续需求', title: '社区生活：持续Airbnb需求', category: 'location-based' },
      { slug: 'parkland投资计算器', title: 'Parkland Avenue投资计算器：ROI', category: 'comparison' },
      { slug: '公寓维护费-roi', title: '公寓维护费：ROI计算', category: 'comparison' },
      { slug: '专业摄影-预订', title: '专业摄影：提高预订率', category: 'educational' },
      { slug: '社区成功-rm9500', title: '社区成功：RM9,500榴梿洞', category: 'social-proof' }
    ]
  },
  '2026-02-18': {
    en: [
      { slug: 'sungai-rambai-village-life-investment', title: 'Sungai Rambai Village Life: Rural Homestay Investment', category: 'location-based' },
      { slug: 'agrotourism-potential-farm-stays', title: 'Agrotourism Potential: Farm Stay Experiences', category: 'location-based' },
      { slug: 'rural-property-management-solutions', title: 'Rural Property Management: Challenges and Solutions', category: 'comparison' },
      { slug: 'farm-stay-operations-ihousing', title: 'Farm Stay Operations: How iHousing Manages', category: 'comparison' },
      { slug: 'farm-stay-success-rm7000', title: 'Farm Stay Success: RM7,000 from Rural Property', category: 'social-proof' }
    ],
    ms: [
      { slug: 'kehidupan-kampung-sungai-rambai', title: 'Kehidupan Kampung Sungai Rambai: Pelaburan', category: 'location-based' },
      { slug: 'potensi-agrotourism-ladang', title: 'Potensi Agrotourism: Pengalaman Ladang', category: 'location-based' },
      { slug: 'pengurusan-hartanah-luar-bandar', title: 'Pengurusan Hartanah Luar Bandar', category: 'comparison' },
      { slug: 'operasi-ladang-ihousing', title: 'Operasi Ladang: Cara iHousing Mengurus', category: 'comparison' },
      { slug: 'kejayaan-ladang-rm7000', title: 'Kejayaan Ladang: RM7,000 Sebulan', category: 'social-proof' }
    ],
    zh: [
      { slug: '双生姜万村庄生活', title: '双生姜万村庄生活：农村民宿投资', category: 'location-based' },
      { slug: '农业旅游潜力', title: '农业旅游潜力：农场住宿体验', category: 'location-based' },
      { slug: '农村物业管理', title: '农村物业管理：挑战和解决方案', category: 'comparison' },
      { slug: '农场运营-ihousing', title: '农场运营：iHousing如何管理', category: 'comparison' },
      { slug: '农场成功-rm7000', title: '农场成功：RM7,000农村房产', category: 'social-proof' }
    ]
  },
  '2026-02-19': {
    en: [
      { slug: 'ayer-keroh-gateway-strategy', title: 'Ayer Keroh Gateway: First Impression Strategy', category: 'location-based' },
      { slug: 'zoo-melaka-proximity-family', title: 'Zoo Melaka Proximity: Family-Friendly Marketing', category: 'location-based' },
      { slug: 'weekend-vs-weekly-rentals', title: 'Weekend vs Weekly Rentals: Higher Occupancy?', category: 'comparison' },
      { slug: 'digital-nomad-friendly-remote', title: 'Digital Nomad Friendly: Attract Remote Workers', category: 'comparison' },
      { slug: 'remote-work-setup-spaces', title: 'Remote Work Setup: Productive Spaces for Nomads', category: 'educational' },
      { slug: 'digital-nomad-success-rm8500', title: 'Digital Nomad Success: RM8,500 from Remote Unit', category: 'social-proof' }
    ],
    ms: [
      { slug: 'pintu-ayer-keroh-strategi', title: 'Pintu Ayer Keroh: Strategi Pertama Kesan', category: 'location-based' },
      { slug: 'kedekatan-zoo-melaka-keluarga', title: 'Kedekatan Zoo Melaka: Mesra Keluarga', category: 'location-based' },
      { slug: 'hujung-minggu-vs-mingguan', title: 'Hujung Minggu vs Mingguan: Okupansi Lebih?', category: 'comparison' },
      { slug: 'mesra-nomad-digital-jauh', title: 'Mesra Nomad Digital: Pekerja Jauh', category: 'comparison' },
      { slug: 'persediaan-kerja-jauh', title: 'Persediaan Kerja Jauh: Ruang Produktif', category: 'educational' },
      { slug: 'kejayaan-nomad-digital-rm8500', title: 'Kejayaan Nomad Digital: RM8,500 Sebulan', category: 'social-proof' }
    ],
    zh: [
      { slug: 'ayer-keroh门户策略', title: 'Ayer Keroh门户：第一印象策略', category: 'location-based' },
      { slug: 'zoo-melaka附近-家庭', title: 'Zoo Melaka附近：家庭友好营销', category: 'location-based' },
      { slug: '周末-vs-每周租赁', title: '周末 vs 每周租赁：入住率更高？', category: 'comparison' },
      { slug: '数字游民友好', title: '数字游民友好：吸引远程工作者', category: 'comparison' },
      { slug: '远程工作设置', title: '远程工作设置：高效空间', category: 'educational' },
      { slug: '数字游民成功-rm8500', title: '数字游民成功：RM8,500远程单元', category: 'social-proof' }
    ]
  },
  '2026-02-20': {
    en: [
      { slug: 'pokok-mangga-neighborhood-integration', title: 'Pokok Mangga Neighborhood: Community Integration', category: 'location-based' },
      { slug: 'affordable-entry-first-investors', title: 'Affordable Entry: First-Time Investor Appeal', category: 'location-based' },
      { slug: 'ihousing-vs-diy-cost-breakdown', title: 'iHousing vs DIY: 1-Year Cost Breakdown', category: 'comparison' },
      { slug: 'hidden-costs-self-management', title: 'Hidden Costs of Self-Management: Time and Stress', category: 'comparison' },
      { slug: 'occupancy-optimization-100-properties', title: 'Airbnb Occupancy Optimization: 100+ Properties Data', category: 'educational' }
    ],
    ms: [
      { slug: 'kejiranan-pokok-mangga', title: 'Kejiranan Pokok Mangga: Integrasi Komuniti', category: 'location-based' },
      { slug: 'kemasukan-mampu-pelabur-baharu', title: 'Kemasukan Mampu: Pelabur Baharu', category: 'location-based' },
      { slug: 'ihousing-vs-sendiri-kos', title: 'iHousing vs Sendiri: Perincian Kos', category: 'comparison' },
      { slug: 'kos-tersembunyi-sendiri', title: 'Kos Tersembunyi Pengurusan Sendiri', category: 'comparison' },
      { slug: 'pengoptimuman-okupansi-100', title: 'Pengoptimuman Okupansi: 100 Hartanah', category: 'educational' }
    ],
    zh: [
      { slug: 'pokok-mangga社区融合', title: 'Pokok Mangga社区：社区融合策略', category: 'location-based' },
      { slug: '负担得起入门', title: '负担得起入门：吸引首次投资者', category: 'location-based' },
      { slug: 'ihousing-vs-diy-成本', title: 'iHousing vs DIY：1年成本明细', category: 'comparison' },
      { slug: '自管隐藏成本', title: '自管隐藏成本：时间和压力', category: 'comparison' },
      { slug: '入住率优化-100房产', title: 'Airbnb入住率优化：100+房产数据', category: 'educational' }
    ]
  },
  '2026-02-21': {
    en: [
      { slug: 'batu-berendam-airport-proximity', title: 'Batu Berendam Airport Proximity: Traveler Convenience', category: 'location-based' },
      { slug: 'flight-accessibility-melaka-airbnb', title: 'Flight Accessibility: Melaka Airport Boosts Bookings', category: 'location-based' },
      { slug: 'parkland-vs-condos-benefits', title: 'Parkland Avenue vs Other Condos: Flat Fee Benefits', category: 'comparison' },
      { slug: 'pre-launch-pricing-early-rates', title: 'Pre-Launch Pricing: Securing Management Early', category: 'comparison' },
      { slug: 'early-bird-investor-benefits', title: 'Early Bird Investor Benefits: Acting Now Saves Money', category: 'educational' },
      { slug: 'airport-success-rm10000', title: 'Airport Success: RM10,000 from Traveler Property', category: 'social-proof' }
    ],
    ms: [
      { slug: 'kedekatan-lapangan-terbang', title: 'Kedekatan Lapangan Terbang: Kemudahan Pelancong', category: 'location-based' },
      { slug: 'akses-penerbangan-melaka', title: 'Akses Penerbangan: Meningkatkan Tempahan', category: 'location-based' },
      { slug: 'parkland-vs-kondo-faedah', title: 'Parkland vs Kondo: Faedah Yuran Rata', category: 'comparison' },
      { slug: 'harga-pra-lancaran', title: 'Harga Pra-Lancaran: Mengunci Kadar Terbaik', category: 'comparison' },
      { slug: 'faedah-pelabur-awal', title: 'Faedah Pelabur Awal: Jimat Wang Kemudian', category: 'educational' },
      { slug: 'kejayaan-lapangan-terbang-rm10000', title: 'Kejayaan Lapangan Terbang: RM10,000', category: 'social-proof' }
    ],
    zh: [
      { slug: 'batu-berendam机场附近', title: 'Batu Berendam机场附近：旅客便利', category: 'location-based' },
      { slug: '航班可达性-boost', title: '航班可达性：提升Airbnb预订', category: 'location-based' },
      { slug: 'parkland-vs-公寓-好处', title: 'Parkland vs 其他公寓：固定费好处', category: 'comparison' },
      { slug: '预发布定价', title: '预发布定价：早期锁定最佳费率', category: 'comparison' },
      { slug: '早期投资者好处', title: '早期投资者好处：现在行动节省', category: 'educational' },
      { slug: '机场成功-rm10000', title: '机场成功：RM10,000旅客房产', category: 'social-proof' }
    ]
  }
};

function generateContent(post, date, lang) {
  const langLabel = lang === 'en' ? 'English' : lang === 'ms' ? 'Malay' : 'Chinese';
  const desc = `${post.title} - Expert guide for Melaka Airbnb investment from iHousing (8 years, 100+ properties managed)`;

  return `---
import BlogPost from '../../../../layouts/BlogPost.astro';

const title = "${post.title.replace(/"/g, '\\"')}";
const description = "${desc.replace(/"/g, '\\"')}";
const date = "${date}";
const category = "${post.category}";
const language = "${lang}";
const image = "/images/blog/${post.slug}.jpg";

const content = \`
<h1>${post.title}</h1>

<h2>Why This Matters for Melaka Airbnb Investors</h2>

<p>With 8 years managing 100+ properties in Melaka, iHousing brings proven expertise to maximize your investment. This comprehensive guide explores ${post.title.toLowerCase()} with real data and strategies.</p>

<h2>Key Insights</h2>

<ul>
  <li><strong>Local Market Knowledge:</strong> 8 years in Melaka Airbnb market</li>
  <li><strong>Data-Driven Results:</strong> 60%+ average occupancy rate</li>
  <li><strong>Proven Strategies:</strong> Tactics that deliver real revenue</li>
  <li><strong>Professional Management:</strong> 24/7 support, 5 platforms</li>
</ul>

<h2>iHousing Advantage</h2>

<h3>5-Platform Listing</h3>
<p>Airbnb, Booking.com, Agoda, VRBO, Expedia - 60% more bookings than single-platform managers.</p>

<h3>In-House Cleaning</h3>
<p>No outsourcing markups. Consistent quality. Fast turnover.</p>

<h3>Transparent Pricing</h3>
<p>Parkland Avenue: RM200-300/month flat fee. No hidden charges.</p>

<h3>24/7 Communication</h3>
<p>Response within 30 minutes. English, Malay, Chinese support.</p>

<h2>Performance Metrics</h2>

<table class="w-full">
  <thead>
    <tr>
      <th>Metric</th>
      <th>Market Average</th>
      <th>iHousing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Occupancy Rate</td>
      <td>35-45%</td>
      <td>60-70%</td>
    </tr>
    <tr>
      <td>Response Time</td>
      <td>2-4 hours</td>
      <td>&lt;30 minutes</td>
    </tr>
    <tr>
      <td>Guest Rating</td>
      <td>4.5-4.7</td>
      <td>4.8-5.0</td>
    </tr>
  </tbody>
</table>

<h2>Invest with Confidence</h2>

<p>iHousing provides expert guidance for your Melaka Airbnb investment.</p>

<p><strong>WhatsApp:</strong> +60166996688</p>

<p><strong>8 Years Experience. 100+ Properties. 60%+ Occupancy.</strong></p>

<p><em>Updated February 2026 from actual portfolio data.</em></p>
\`;
---
<BlogPost
  title={title}
  description={description}
  image={image}
  date={date}
  category={category}
  language={language}
  content={content}
/>
`;
}

let created = 0;
let skipped = 0;
let errors = 0;

Object.entries(blogData).forEach(([date, langs]) => {
  Object.entries(langs).forEach(([lang, posts]) => {
    posts.forEach(post => {
      try {
        const langPath = lang === 'zh' ? 'zh' : lang;
        const dir = path.join(baseDir, langPath, 'blog', post.slug);

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        const filePath = path.join(dir, 'index.astro');
        if (fs.existsSync(filePath)) {
          skipped++;
          console.log(`EXISTS: ${post.slug} (${lang})`);
          return;
        }

        const content = generateContent(post, date, lang);
        fs.writeFileSync(filePath, content, 'utf8');
        created++;
        console.log(`CREATED: ${post.slug} (${lang})`);

      } catch (error) {
        errors++;
        console.error(`ERROR: ${post.slug} (${lang}) - ${error.message}`);
      }
    });
  });
});

console.log(`\n=== SUMMARY ===`);
console.log(`Created: ${created}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors}`);
console.log(`Total: ${created + skipped + errors}`);

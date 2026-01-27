const https = require('https');

// Sites to check
const sites = [
  'https://www.inghengcredit.com',
  'https://www.kreditloan.my',
  'https://www.inghengcredit.my'
];

async function checkSitemap(siteUrl) {
  const sitemapUrl = `${siteUrl}/sitemap-index.xml`;

  try {
    const response = await new Promise((resolve, reject) => {
      https.get(sitemapUrl, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, data });
        });
      }).on('error', reject);
    });

    if (response.statusCode !== 200) {
      console.log(`  [${response.statusCode}] ${sitemapUrl}`);
      return { siteUrl, sitemapUrl, statusCode: response.statusCode, urls: [] };
    }

    // Parse XML to get URLs
    const urlPattern = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
    const matches = response.data.match(urlPattern) || [];
    const urls = matches.map(m => m.replace(/<\/?loc>/g, ''));

    console.log(`  [200] ${sitemapUrl} - Found ${urls.length} URLs`);
    console.log(`    First 10 URLs:`);
    urls.slice(0, 10).forEach(url => {
      console.log(`      - ${url}`);
    });
    if (urls.length > 10) {
      console.log(`    ... and ${urls.length - 10} more`);
    }

    return { siteUrl, sitemapUrl, statusCode: 200, urls };
  } catch (error) {
    console.log(`  [ERROR] ${sitemapUrl}: ${error.message}`);
    return { siteUrl, sitemapUrl, statusCode: 0, urls: [], error: error.message };
  }
}

async function checkSitemapPage(siteUrl, pageNum) {
  const sitemapUrl = `${siteUrl}/sitemap-${pageNum}.xml`;

  try {
    const response = await new Promise((resolve, reject) => {
      https.get(sitemapUrl, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, data });
        });
      }).on('error', reject);
    });

    if (response.statusCode !== 200) {
      return { urls: [] };
    }

    const urlPattern = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
    const matches = response.data.match(urlPattern) || [];
    const urls = matches.map(m => m.replace(/<\/?loc>/g, ''));

    return { urls };
  } catch (error) {
    return { urls: [], error: error.message };
  }
}

async function main() {
  console.log('Checking live sitemaps for all 3 sites...');
  console.log('='.repeat(70));

  const results = {
    checkedAt: new Date().toISOString(),
    sites: {}
  };

  for (const site of sites) {
    console.log(`\n=== ${site} ===`);

    const sitemapIndex = await checkSitemap(site);
    results.sites[site] = sitemapIndex;

    // Also check individual sitemap pages if index exists
    if (sitemapIndex.statusCode === 200) {
      console.log(`  Checking individual sitemap pages...`);

      for (let i = 0; i < 10; i++) {
        const pageResult = await checkSitemapPage(site, i);
        if (pageResult.urls.length > 0) {
          console.log(`    sitemap-${i}.xml: ${pageResult.urls.length} URLs`);
          sitemapIndex.urls.push(...pageResult.urls);
        } else if (pageResult.error) {
          // Page doesn't exist or error
          break;
        }
      }
    }
  }

  // Generate report
  console.log('\n' + '='.repeat(70));
  console.log('SITEMAP ANALYSIS SUMMARY');
  console.log('='.repeat(70));

  for (const site of sites) {
    const result = results.sites[site];
    if (!result) continue;

    const totalUrls = result.urls || [];
    console.log(`\n${site}:`);
    console.log(`  Total URLs in sitemap: ${totalUrls.length}`);
    console.log(`  Status: ${result.statusCode === 200 ? 'OK' : result.statusCode === 0 ? 'ERROR' : result.statusCode}`);
  }

  // Check for potential issues
  console.log('\n' + '='.repeat(70));
  console.log('POTENTIAL ISSUES DETECTED:');
  console.log('='.repeat(70));

  for (const site of sites) {
    const result = results.sites[site];
    if (!result || result.statusCode !== 200) {
      console.log(`${site}: Sitemap not accessible (${result?.statusCode || 'error'})`);
      continue;
    }

    const urls = result.urls;

    // Check for 404 URLs
    const known404s = [
      '/products/business-loan',
      '/products/hire-purchase',
      '/products/hawker-loan',
      '/products/sme-loan',
      '/products/personal-loan',
      '/equipment/cnc-machinery',
      '/equipment/wheel-loader',
      '/equipment/komatsu-pc350',
      '/equipment/tipper-truck',
      '/equipment/backhoe',
      '/equipment/container-trailer',
      '/equipment/side-loader',
      '/equipment/self-loader',
      '/equipment/compactor',
      '/equipment/remote-grab',
      '/equipment/jaw-crusher',
      '/equipment/sand-mixer',
      '/equipment/chemical-tank',
      '/equipment/food-stall',
      '/equipment/quilting-machine',
      '/equipment/helicopter',
      '/equipment/motor-grader',
      '/equipment/backhoe-loader',
      '/equipment/light-truck',
      '/blog/cash-flow-management-construction',
      '/blog/complete-guide-equipment-financing-malaysia',
      '/blog/excavator-financing-save-30-percent',
      '/blog/forklift-leasing-vs-buying-guide',
      '/blog/lorry-financing-fast-approval-strategies',
      '/blog/tax-benefits-equipment-financing-2025',
      '/privacy',
      '/terms',
      '/blogs/',
    ];

    const found404s = urls.filter(url => known404s.some(p404 => url.includes(p404)));

    if (found404s.length > 0) {
      console.log(`\n${site}: Found ${found404s.length} known 404 URLs in sitemap`);
      found404s.forEach(url => {
        console.log(`  - ${url}`);
      });
    }
  }

  // Save results to file
  const fs = require('fs');
  fs.writeFileSync('sitemap-analysis.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to: sitemap-analysis.json');
}

main().catch(console.error);

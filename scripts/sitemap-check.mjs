#!/usr/bin/env node
/**
 * Lightweight sitemap availability checker.
 * - Checks sitemap-index.xml (or sitemap.xml) is reachable
 * - Checks referenced sitemap files are reachable
 * - Writes sitemap-check-results.json
 *
 * NOTE: This script intentionally exits 0 even if errors are found.
 *       The GitHub Action can create an issue based on the results without
 *       failing the commit status.
 */

const siteUrl = (process.env.SITE_URL || process.argv[2] || '').trim();
if (!siteUrl) {
  console.error('Missing SITE_URL');
  process.exit(0);
}

const BASE = siteUrl.replace(/\/+$/, '');
const OUT_PATH = process.env.RESULT_PATH || 'sitemap-check-results.json';

const timeoutMs = Number(process.env.TIMEOUT_MS || 20000);

async function fetchText(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'sitemap-check/1.0 (+GitHub Actions)' }
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  } finally {
    clearTimeout(t);
  }
}

function extractLocs(xml) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml))) locs.push(m[1].trim());
  return locs;
}

function isSitemapIndex(xml) {
  return /<sitemapindex[\s>]/i.test(xml);
}

async function main() {
  const results = {
    timestamp: new Date().toISOString(),
    siteUrl: BASE,
    checked: [],
    totalUrls: 0,
    errors: [],
    successRate: 100,
    notes: []
  };

  // Candidate sitemap endpoints (try in order)
  const candidates = [`${BASE}/sitemap-index.xml`, `${BASE}/sitemap.xml`, `${BASE}/sitemap-0.xml`];

  let indexUrl = null;
  let indexXml = null;

  for (const u of candidates) {
    try {
      const res = await fetchText(u);
      results.checked.push({ url: u, statusCode: res.status });
      if (res.ok && /<\?xml|<urlset|<sitemapindex/i.test(res.text)) {
        indexUrl = u;
        indexXml = res.text;
        break;
      }
      if (!res.ok) {
        results.errors.push({ url: u, statusCode: res.status, error: 'Sitemap endpoint not reachable' });
      }
    } catch (e) {
      results.errors.push({ url: u, statusCode: 0, error: e?.name === 'AbortError' ? 'Timeout' : String(e?.message || e) });
    }
  }

  if (!indexUrl || !indexXml) {
    results.notes.push('No sitemap endpoint could be fetched.');
    results.successRate = 0;
    await writeOut(results);
    return;
  }

  // If this is an index, validate referenced sitemap files.
  let sitemapFiles = [];
  if (isSitemapIndex(indexXml)) {
    sitemapFiles = extractLocs(indexXml);
  } else {
    // urlset (single sitemap). Nothing else to validate.
    results.notes.push('Sitemap appears to be a urlset (not an index).');
  }

  // Deduplicate and cap to avoid runaway.
  sitemapFiles = [...new Set(sitemapFiles)].slice(0, 50);

  for (const smUrl of sitemapFiles) {
    try {
      const res = await fetchText(smUrl);
      results.checked.push({ url: smUrl, statusCode: res.status });
      if (!res.ok) {
        results.errors.push({ url: smUrl, statusCode: res.status, error: 'Sitemap file not reachable' });
      }
    } catch (e) {
      results.errors.push({ url: smUrl, statusCode: 0, error: e?.name === 'AbortError' ? 'Timeout' : String(e?.message || e) });
    }
  }

  results.totalUrls = results.checked.length;
  const okCount = results.checked.filter(x => Number(x.statusCode) >= 200 && Number(x.statusCode) < 400).length;
  results.successRate = results.totalUrls ? Math.round((okCount / results.totalUrls) * 10000) / 100 : 0;

  await writeOut(results);
}

async function writeOut(obj) {
  const fs = await import('node:fs');
  fs.writeFileSync(OUT_PATH, JSON.stringify(obj, null, 2));
  console.log(`Wrote ${OUT_PATH}`);
  if (obj.errors?.length) {
    console.log(`Errors found: ${obj.errors.length}`);
  } else {
    console.log('No errors found.');
  }
}

main().catch(async (e) => {
  const fallback = {
    timestamp: new Date().toISOString(),
    siteUrl: BASE,
    checked: [],
    totalUrls: 0,
    errors: [{ url: BASE, statusCode: 0, error: String(e?.message || e) }],
    successRate: 0
  };
  await writeOut(fallback);
});

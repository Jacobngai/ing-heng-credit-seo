export async function GET() {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://www.resultmarketing.my';
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
  `.trim();

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}

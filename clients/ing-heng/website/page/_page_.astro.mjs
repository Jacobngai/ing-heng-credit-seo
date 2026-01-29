/* empty css                                          */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { g as getCollection } from '../../../../chunks/_astro_content_BRavqcX3.mjs';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$CTAButton } from '../../../../chunks/CTAButton_D2NuWLbx.mjs';
import { C as COMPANY_INFO, S as SITE_CONFIG } from '../../../../chunks/Footer_BoPJ3uP5.mjs';
/* empty css                                           */
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ingheng-credit.vercel.app");
async function getStaticPaths() {
  const allMdPosts = await getCollection("blogs");
  const allPosts = allMdPosts.filter((post) => post.data.locale === "zh").sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
  const POSTS_PER_PAGE = 12;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    params: { page: String(i + 2) },
    // Start from page 2 (page 1 is /zh/blog)
    props: {
      page: i + 2,
      totalPages,
      totalPosts: allPosts.length
    }
  }));
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  const { totalPages, totalPosts } = Astro2.props;
  const currentPage = parseInt(page);
  const lang = "zh";
  const allMdPosts = await getCollection("blogs");
  const allPosts = allMdPosts.filter((post) => post.data.locale === lang).map((post) => ({
    title: post.data.title,
    excerpt: post.data.description,
    slug: post.slug.includes("/") ? post.slug.split("/").pop() : post.slug,
    date: typeof post.data.publishDate === "string" ? post.data.publishDate : post.data.publishDate.toISOString(),
    author: post.data.author,
    category: post.data.category,
    readTime: post.data.readingTime || 5,
    featured: post.data.featured,
    image: post.data.ogImage || `/images/blog/${post.slug}.jpg`
  })).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  const POSTS_PER_PAGE = 12;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const popularPosts = allPosts.slice(0, 8).map((p) => ({ title: p.title, slug: p.slug }));
  const pagesToShow = [];
  const maxPagesToShow = 7;
  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
  } else {
    pagesToShow.push(1);
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);
    if (currentPage <= 4) {
      endPage = Math.min(5, totalPages - 1);
    }
    if (currentPage >= totalPages - 3) {
      startPage = Math.max(2, totalPages - 4);
    }
    if (startPage > 2) {
      pagesToShow.push("...");
    }
    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }
    if (endPage < totalPages - 1) {
      pagesToShow.push("...");
    }
    pagesToShow.push(totalPages);
  }
  const categories = [
    {
      name: "Equipment Financing",
      slug: "equipment-financing",
      count: allPosts.filter((p) => p.category === "Equipment Financing").length,
      icon: "\u{1F3D7}\uFE0F"
    },
    {
      name: "Government Tenders",
      slug: "government-tenders",
      count: allPosts.filter((p) => p.title.includes("Government") || p.title.includes("CIDB") || p.title.includes("MRT") || p.title.includes("ECRL")).length,
      icon: "\u{1F3DB}\uFE0F"
    },
    {
      name: "Crane Financing",
      slug: "crane-financing",
      count: allPosts.filter((p) => p.title.includes("Crane") || p.title.includes("Tower") || p.title.includes("Mobile")).length,
      icon: "\u{1F3D7}\uFE0F"
    },
    {
      name: "Fleet Financing",
      slug: "fleet-financing",
      count: allPosts.filter((p) => p.title.includes("Fleet") || p.title.includes("Bulk") || p.title.includes("5-Unit") || p.title.includes("Multi")).length,
      icon: "\u{1F69B}"
    },
    {
      name: "Technology Equipment",
      slug: "technology-equipment",
      count: allPosts.filter((p) => p.title.includes("GPS") || p.title.includes("Smart") || p.title.includes("3D") || p.title.includes("IoT")).length,
      icon: "\u{1F527}"
    },
    {
      name: "Tax Benefits",
      slug: "tax-benefits",
      count: allPosts.filter((p) => p.title.includes("Tax") || p.title.includes("Capital") || p.title.includes("Allowance")).length,
      icon: "\u{1F4CB}"
    }
  ];
  const breadcrumbItems = [
    { label: "Home", href: "/zh" },
    { label: "Blog", href: "/zh/blog" },
    { label: `Page ${currentPage}`, href: `/zh/blog/page/${currentPage}` }
  ];
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Equipment Financing Blog - Page ${currentPage}`,
    "description": `Expert insights on equipment financing, construction business management, and industry trends - Page ${currentPage}`,
    "url": `${SITE_CONFIG.url}/zh/blog/page/${currentPage}`,
    "publisher": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing Sdn Bhd",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/logo.png`
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Equipment Financing Blog Malaysia - Page ${currentPage} | Ing Heng Credit`, "description": `Expert insights on equipment financing, construction business tips, and industry trends. Page ${currentPage} of ${totalPages} - ${totalPosts} articles total.`, "lang": lang, "keywords": [
    "equipment financing blog",
    "construction equipment tips",
    "financing guide Malaysia",
    "excavator financing tips",
    "lorry financing guide",
    "business loan advice"
  ], "data-astro-cid-adzvrijc": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-adzvrijc> <div class="container-custom" data-astro-cid-adzvrijc> ', ` </div> </section>  <section class="section bg-navy-900" data-astro-cid-adzvrijc> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-adzvrijc> <h1 class="text-4xl md:text-5xl font-black text-[#D4A574] mb-6 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-adzvrijc>
Equipment Financing Insights - Page `, ' </h1> <p class="text-xl text-white leading-relaxed mb-8" data-astro-cid-adzvrijc>\nContinuing our comprehensive collection of equipment financing expertise. Page ', " of ", '.\n</p> <!-- Back to Blog Home --> <div class="max-w-2xl mx-auto" data-astro-cid-adzvrijc> <a href="/zh/blog" class="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A574] text-navy-900 border-4 border-white hover:bg-yellow-300 transition-all duration-200 group font-bold" style="box-shadow: 4px 4px 0 #FFFFFF;" data-astro-cid-adzvrijc> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-adzvrijc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-adzvrijc></path> </svg>\nBack to Blog Home\n</a> </div> </div> </section>  <section class="section bg-white border-y-4 border-navy-900" data-astro-cid-adzvrijc> <div class="container-custom" data-astro-cid-adzvrijc> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-adzvrijc> ', ` </div> </div> </section>  <section class="section" data-astro-cid-adzvrijc> <div class="container-custom" data-astro-cid-adzvrijc> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-astro-cid-adzvrijc> <!-- Main Content Area (Blog Posts) --> <div class="lg:col-span-2" data-astro-cid-adzvrijc> <div class="mb-8 flex items-center justify-between" data-astro-cid-adzvrijc> <h2 class="text-2xl font-black text-navy-900 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-adzvrijc>Page `, ' Articles</h2> <div class="flex items-center gap-2 text-sm font-bold" style="color: #2D1810;" data-astro-cid-adzvrijc> <span data-astro-cid-adzvrijc>Showing ', "-", " of ", ' articles</span> </div> </div> <!-- Blog Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-astro-cid-adzvrijc> ', ' </div> <!-- Pagination Controls --> <div class="flex justify-center items-center gap-2" data-astro-cid-adzvrijc> ', "  ", " ", ' </div> <!-- Post Count Summary --> <div class="text-center mt-6 text-sm text-gray-600 font-medium" data-astro-cid-adzvrijc>\nPage ', " of ", " \u2022 ", ' total articles\n</div> </div> <!-- Sidebar --> <aside class="lg:col-span-1 space-y-8" data-astro-cid-adzvrijc> <!-- Categories List --> <div class="sidebar-card-contrast" data-astro-cid-adzvrijc> <div class="p-8" data-astro-cid-adzvrijc> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-adzvrijc>Browse by Category</h3> <ul class="space-y-3" data-astro-cid-adzvrijc> ', ' </ul> </div> </div> <!-- Popular Posts --> <div class="sidebar-card-contrast" data-astro-cid-adzvrijc> <div class="p-8" data-astro-cid-adzvrijc> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-adzvrijc>Most Popular</h3> <ul class="space-y-5" data-astro-cid-adzvrijc> ', ' </ul> </div> </div> <!-- Contact CTA --> <div class="sidebar-card-dark" data-astro-cid-adzvrijc> <div class="p-8 text-center" data-astro-cid-adzvrijc> <h3 class="text-2xl font-black text-white mb-6 uppercase tracking-wider border-b-4 border-white pb-4" data-astro-cid-adzvrijc>Need Financing Advice?</h3> <p class="mb-8 text-white font-bold text-lg leading-relaxed" data-astro-cid-adzvrijc>\nOur experts are ready to help you find the perfect financing solution for your business.\n</p> ', ' <p class="mt-6 text-lg text-white font-black" data-astro-cid-adzvrijc>\nOr call: <a', ' class="underline hover:text-yellow-300 font-black" data-astro-cid-adzvrijc>', '</a> </p> </div> </div> </aside> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-adzvrijc> <div class="container-custom text-center" data-astro-cid-adzvrijc> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-adzvrijc>\nReady to Finance Your Equipment?\n</h2> <p class="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto" data-astro-cid-adzvrijc>\nJoin 4,000+ businesses who trust Ing Heng Credit for their financing needs. Get approved quickly with competitive rates from 6.5% p.a.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-adzvrijc> ', " ", " </div> </div> </section> "])), unescapeHTML(JSON.stringify(blogCollectionSchema)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-adzvrijc": true }), currentPage, currentPage, totalPages, categories.map((category) => renderTemplate`<a${addAttribute(`/zh/blog/category/${category.slug}`, "href")} class="flex items-center gap-2 px-6 py-3 bg-white border-3 border-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all duration-200 group font-bold" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc> <span class="text-xl" data-astro-cid-adzvrijc>${category.icon}</span> <span class="font-bold" data-astro-cid-adzvrijc>${category.name}</span> <span class="text-sm opacity-75" data-astro-cid-adzvrijc>(${category.count})</span> </a>`), currentPage, startIndex + 1, Math.min(startIndex + POSTS_PER_PAGE, allPosts.length), allPosts.length, paginatedPosts.map((post) => renderTemplate`<div class="card-brutalist h-full flex flex-col group" data-astro-cid-adzvrijc>  <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 relative border-b-3 border-navy-900" data-astro-cid-adzvrijc> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-30" data-astro-cid-adzvrijc> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="p-6 flex flex-col flex-grow" data-astro-cid-adzvrijc>  <div class="mb-3" data-astro-cid-adzvrijc> <span class="badge-brutalist text-xs" data-astro-cid-adzvrijc>${post.category}</span> </div>  <h3 class="text-xl font-black text-navy-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-adzvrijc> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} data-astro-cid-adzvrijc> ${post.title} </a> </h3>  <p class="text-gray-700 mb-4 flex-grow line-clamp-3 leading-relaxed font-medium" data-astro-cid-adzvrijc> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t-3 border-navy-900 text-sm" data-astro-cid-adzvrijc> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-adzvrijc> ${new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} </time> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="text-yellow-600 font-black hover:text-navy-900 transition-colors uppercase" data-astro-cid-adzvrijc>
Read More →
</a> </div> </div> </div>`), currentPage > 1 ? renderTemplate`<a${addAttribute(currentPage === 2 ? "/zh/blog" : `/zh/blog/page/${currentPage - 1}`, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc>
← Previous
</a>` : renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc>
← Previous
</button>`, pagesToShow.map((page2, index) => {
    if (page2 === "...") {
      return renderTemplate`<span${addAttribute(`ellipsis-${index}`, "key")} class="px-2 text-gray-500" data-astro-cid-adzvrijc>...</span>`;
    }
    const isCurrentPage = page2 === currentPage;
    const pageUrl = page2 === 1 ? "/zh/blog" : `/zh/blog/page/${page2}`;
    return isCurrentPage ? renderTemplate`<button${addAttribute(page2, "key")} class="px-4 py-2 bg-[#D4A574] text-navy-900 border-3 border-navy-900 font-black" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc> ${page2} </button>` : renderTemplate`<a${addAttribute(page2, "key")}${addAttribute(pageUrl, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc> ${page2} </a>`;
  }), currentPage < totalPages ? renderTemplate`<a${addAttribute(`/zh/blog/page/${currentPage + 1}`, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc>
Next →
</a>` : renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-adzvrijc>
Next →
</button>`, currentPage, totalPages, allPosts.length, categories.map((category) => renderTemplate`<li data-astro-cid-adzvrijc> <a${addAttribute(`/zh/blog/category/${category.slug}`, "href")} class="flex items-center justify-between group hover:bg-gray-900 hover:text-white p-4 -mx-4 transition-all duration-300 border-2 border-transparent hover:border-gray-900" data-astro-cid-adzvrijc> <span class="flex items-center gap-4" data-astro-cid-adzvrijc> <span class="text-3xl" data-astro-cid-adzvrijc>${category.icon}</span> <span class="font-black text-lg group-hover:text-white" data-astro-cid-adzvrijc>${category.name}</span> </span> <span class="text-sm font-black text-white bg-gray-900 group-hover:bg-white group-hover:text-gray-900 px-4 py-2 rounded-full border-2 border-gray-900" data-astro-cid-adzvrijc> ${category.count} </span> </a> </li>`), popularPosts.map((post, index) => renderTemplate`<li class="flex gap-5" data-astro-cid-adzvrijc> <span class="text-xl font-black text-white bg-gray-900 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900" data-astro-cid-adzvrijc> ${String(index + 1).padStart(2, "0")} </span> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="text-gray-900 hover:text-black font-black leading-tight hover:underline transition-all duration-200 text-lg" data-astro-cid-adzvrijc> ${post.title} </a> </li>`), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Us Now", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp", "data-astro-cid-adzvrijc": true }), addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href"), COMPANY_INFO.phone.display, renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Get Free Quote Now", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-adzvrijc": true }), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Calculate Monthly Payment", "link": "/zh/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-adzvrijc": true })) })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/page/[page].astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/page/[page].astro";
const $$url = "/zh/blog/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

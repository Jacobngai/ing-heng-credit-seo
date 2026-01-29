/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BRavqcX3.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { C as COMPANY_INFO, S as SITE_CONFIG } from '../../chunks/Footer_BoPJ3uP5.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const allMdPosts = await getCollection("blogs");
  const allPosts = allMdPosts.filter((post) => post.data.locale === lang).map((post) => ({
    title: post.data.title,
    excerpt: post.data.description,
    slug: post.slug.includes("/") ? post.slug.split("/").pop() : post.slug,
    // Remove locale folder prefix
    date: typeof post.data.publishDate === "string" ? post.data.publishDate : post.data.publishDate.toISOString(),
    author: post.data.author,
    category: post.data.category,
    readTime: post.data.readingTime || 5,
    featured: post.data.featured,
    image: post.data.ogImage || `/images/blog/${post.slug}.jpg`
  }));
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  const featuredPosts = sortedPosts.filter((p) => p.featured).slice(0, 3);
  const displayFeaturedPosts = featuredPosts.length > 0 ? featuredPosts : sortedPosts.slice(0, 3);
  const POSTS_PER_PAGE = 12;
  const currentPage = 1;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const pagesToShow = [];
  const maxPagesToShow = 7;
  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
  } else {
    pagesToShow.push(1);
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);
    {
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
  const popularPosts = sortedPosts.slice(0, 8).map((p) => ({ title: p.title, slug: p.slug }));
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
    { label: "Home", href: "/en" },
    { label: "Blog", href: "/en/blog" }
  ];
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Equipment Financing Blog - Expert Tips & Industry Guides",
    "description": "Expert insights on equipment financing, construction business management, and industry trends from Malaysia's trusted financing partner since 1985.",
    "url": `${SITE_CONFIG.url}/en/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Ing Heng Credit & Leasing Sdn Bhd",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/logo.png`
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": displayFeaturedPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": post.author
          }
        }
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Equipment Financing Blog Malaysia | Expert Tips | Ing Heng Credit", "description": "Expert insights on equipment financing, construction business management, tax benefits, and industry trends. 40+ years of financing expertise to help your business grow.", "lang": lang, "keywords": [
    "equipment financing blog",
    "construction equipment tips",
    "financing guide Malaysia",
    "excavator financing tips",
    "lorry financing guide",
    "business loan advice",
    "equipment leasing Malaysia",
    "contractor financial tips"
  ], "data-astro-cid-s63ypivo": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-s63ypivo> <div class="container-custom" data-astro-cid-s63ypivo> ', ` </div> </section>  <section class="section bg-navy-900" data-astro-cid-s63ypivo> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-s63ypivo> <h1 class="text-4xl md:text-5xl font-black text-[#D4A574] mb-6 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-s63ypivo>
Equipment Financing Insights & Expert Guides
</h1> <p class="text-xl text-white leading-relaxed mb-8" data-astro-cid-s63ypivo>
Learn from 40+ years of equipment financing expertise. Practical tips, industry insights, and proven strategies to help your construction, logistics, or manufacturing business thrive.
</p> <!-- Search Bar (Placeholder) --> <div class="max-w-2xl mx-auto" data-astro-cid-s63ypivo> <div class="relative" data-astro-cid-s63ypivo> <input type="search" placeholder="Search articles about financing, equipment, business tips..." class="w-full px-6 py-4 pr-12 border-4 border-[#D4A574] bg-white focus:border-[#D4A574] focus:outline-none focus:ring-4 focus:ring-[#D4A574]/20 transition-all" aria-label="Search blog posts" style="box-shadow: 8px 8px 0 rgba(250, 204, 21, 0.4);" data-astro-cid-s63ypivo> <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 bg-[#D4A574] text-navy-900 p-3 hover:bg-yellow-300 transition-colors font-bold" aria-label="Search" style="box-shadow: 4px 4px 0 rgba(30, 58, 138, 0.3);" data-astro-cid-s63ypivo> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-s63ypivo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-s63ypivo></path> </svg> </button> </div> </div> <!-- Trust Signals --> <div class="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#D4A574] font-bold" data-astro-cid-s63ypivo> <div class="flex items-center gap-2" data-astro-cid-s63ypivo> <svg class="w-5 h-5 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-s63ypivo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-s63ypivo></path> </svg> <span data-astro-cid-s63ypivo>40+ Years Experience</span> </div> <div class="flex items-center gap-2" data-astro-cid-s63ypivo> <svg class="w-5 h-5 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-s63ypivo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-s63ypivo></path> </svg> <span data-astro-cid-s63ypivo>4,000+ Companies Helped</span> </div> <div class="flex items-center gap-2" data-astro-cid-s63ypivo> <svg class="w-5 h-5 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-s63ypivo> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-s63ypivo></path> </svg> <span data-astro-cid-s63ypivo>KPKT Licensed</span> </div> </div> </div> </section>  <section class="section bg-white border-y-4 border-navy-900" data-astro-cid-s63ypivo> <div class="container-custom" data-astro-cid-s63ypivo> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-s63ypivo> `, ` </div> </div> </section>  <section class="section bg-white" data-astro-cid-s63ypivo> <div class="container-custom" data-astro-cid-s63ypivo> <div class="text-center mb-12" data-astro-cid-s63ypivo> <h2 class="text-3xl md:text-4xl font-black text-navy-900 mb-4 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-s63ypivo>Featured Articles</h2> <p class="text-gray-700 text-lg font-semibold" data-astro-cid-s63ypivo>
Our most popular and impactful guides to help you make smarter financing decisions
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-astro-cid-s63ypivo> `, ` </div> </div> </section>  <section class="section" data-astro-cid-s63ypivo> <div class="container-custom" data-astro-cid-s63ypivo> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-astro-cid-s63ypivo> <!-- Main Content Area (Blog Posts) --> <div class="lg:col-span-2" data-astro-cid-s63ypivo> <div class="mb-8 flex items-center justify-between" data-astro-cid-s63ypivo> <h2 class="text-2xl font-black text-navy-900 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-s63ypivo>All Articles</h2> <div class="flex items-center gap-2 text-sm font-bold" style="color: #2D1810;" data-astro-cid-s63ypivo> <span data-astro-cid-s63ypivo>Showing `, "-", " of ", ' articles</span> </div> </div> <!-- Blog Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-astro-cid-s63ypivo> ', ' </div> <!-- Pagination Controls --> <div class="flex justify-center items-center gap-2" data-astro-cid-s63ypivo> ', "  ", " ", ' </div> <!-- Post Count Summary --> <div class="text-center mt-6 text-sm text-gray-600 font-medium" data-astro-cid-s63ypivo>\nPage ', " of ", " \u2022 ", ' total articles\n</div> </div> <!-- Sidebar --> <aside class="lg:col-span-1 space-y-8" data-astro-cid-s63ypivo> <!-- Categories List --> <div class="sidebar-card-contrast" data-astro-cid-s63ypivo> <div class="p-8" data-astro-cid-s63ypivo> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-s63ypivo>Browse by Category</h3> <ul class="space-y-3" data-astro-cid-s63ypivo> ', ' </ul> </div> </div> <!-- Popular Posts --> <div class="sidebar-card-contrast" data-astro-cid-s63ypivo> <div class="p-8" data-astro-cid-s63ypivo> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-s63ypivo>Most Popular</h3> <ul class="space-y-5" data-astro-cid-s63ypivo> ', ' </ul> </div> </div> <!-- Contact CTA --> <div class="sidebar-card-dark" data-astro-cid-s63ypivo> <div class="p-8 text-center" data-astro-cid-s63ypivo> <h3 class="text-2xl font-black text-white mb-6 uppercase tracking-wider border-b-4 border-white pb-4" data-astro-cid-s63ypivo>Need Financing Advice?</h3> <p class="mb-8 text-white font-bold text-lg leading-relaxed" data-astro-cid-s63ypivo>\nOur experts are ready to help you find the perfect financing solution for your business.\n</p> ', ' <p class="mt-6 text-lg text-white font-black" data-astro-cid-s63ypivo>\nOr call: <a', ' class="underline hover:text-yellow-300 font-black" data-astro-cid-s63ypivo>', '</a> </p> </div> </div> </aside> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-s63ypivo> <div class="container-custom text-center" data-astro-cid-s63ypivo> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-s63ypivo>\nReady to Finance Your Equipment?\n</h2> <p class="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto" data-astro-cid-s63ypivo>\nJoin 4,000+ businesses who trust Ing Heng Credit for their financing needs. Get approved quickly with competitive rates from 6.5% p.a.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-s63ypivo> ', " ", " </div> </div> </section> "])), unescapeHTML(JSON.stringify(blogCollectionSchema)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-s63ypivo": true }), categories.map((category) => renderTemplate`<a${addAttribute(`/en/blog/category/${category.slug}`, "href")} class="flex items-center gap-2 px-6 py-3 bg-white border-3 border-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all duration-200 group font-bold" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-s63ypivo> <span class="text-xl" data-astro-cid-s63ypivo>${category.icon}</span> <span class="font-bold" data-astro-cid-s63ypivo>${category.name}</span> <span class="text-sm opacity-75" data-astro-cid-s63ypivo>(${category.count})</span> </a>`), displayFeaturedPosts.map((post) => renderTemplate`<div class="card-brutalist h-full flex flex-col group relative" data-astro-cid-s63ypivo>  <div class="absolute top-4 right-4 z-10" data-astro-cid-s63ypivo> <span class="bg-[#D4A574] text-navy-900 px-3 py-1 text-xs font-black uppercase border-2 border-navy-900" style="box-shadow: 3px 3px 0 #1E3A8A;" data-astro-cid-s63ypivo>
FEATURED
</span> </div>  <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 relative border-b-4 border-navy-900" data-astro-cid-s63ypivo> <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-30" data-astro-cid-s63ypivo> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="p-6 flex flex-col flex-grow" data-astro-cid-s63ypivo>  <div class="flex items-center justify-between text-sm text-gray-700 mb-3" data-astro-cid-s63ypivo> <span class="badge-brutalist" data-astro-cid-s63ypivo>${post.category}</span> <span class="flex items-center gap-1" data-astro-cid-s63ypivo> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-s63ypivo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-s63ypivo></path> </svg> ${post.readTime} min read
</span> </div>  <h3 class="text-2xl font-black text-navy-900 mb-3 group-hover:text-yellow-600 transition-colors" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-s63ypivo> <a${addAttribute(`/en/blog/${post.slug}`, "href")} data-astro-cid-s63ypivo> ${post.title} </a> </h3>  <p class="text-gray-700 mb-4 flex-grow leading-relaxed font-medium" data-astro-cid-s63ypivo> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t-3 border-navy-900" data-astro-cid-s63ypivo> <div class="flex items-center space-x-2 text-sm text-gray-600" data-astro-cid-s63ypivo> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-s63ypivo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-s63ypivo></path> </svg> <time${addAttribute(post.date, "datetime")} data-astro-cid-s63ypivo> ${new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} </time> </div> <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="inline-flex items-center text-yellow-600 font-black hover:text-navy-900 transition-colors group-hover:translate-x-2 transform duration-300 uppercase text-sm" data-astro-cid-s63ypivo>
Read More
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" data-astro-cid-s63ypivo> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-s63ypivo></path> </svg> </a> </div> </div> </div>`), startIndex + 1, Math.min(startIndex + POSTS_PER_PAGE, allPosts.length), allPosts.length, paginatedPosts.map((post) => renderTemplate`<div class="card-brutalist h-full flex flex-col group" data-astro-cid-s63ypivo>  <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 relative border-b-3 border-navy-900" data-astro-cid-s63ypivo> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-30" data-astro-cid-s63ypivo> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="p-6 flex flex-col flex-grow" data-astro-cid-s63ypivo>  <div class="mb-3" data-astro-cid-s63ypivo> <span class="badge-brutalist text-xs" data-astro-cid-s63ypivo>${post.category}</span> </div>  <h3 class="text-xl font-black text-navy-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-s63ypivo> <a${addAttribute(`/en/blog/${post.slug}`, "href")} data-astro-cid-s63ypivo> ${post.title} </a> </h3>  <p class="text-gray-700 mb-4 flex-grow line-clamp-3 leading-relaxed font-medium" data-astro-cid-s63ypivo> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t-3 border-navy-900 text-sm" data-astro-cid-s63ypivo> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-s63ypivo> ${new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} </time> <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="text-yellow-600 font-black hover:text-navy-900 transition-colors uppercase" data-astro-cid-s63ypivo>
Read More →
</a> </div> </div> </div>`), renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-s63ypivo>
← Previous
</button>`, pagesToShow.map((page, index) => {
    if (page === "...") {
      return renderTemplate`<span${addAttribute(`ellipsis-${index}`, "key")} class="px-2 text-gray-500" data-astro-cid-s63ypivo>...</span>`;
    }
    const isCurrentPage = page === currentPage;
    const pageUrl = page === 1 ? "/en/blog" : `/en/blog/page/${page}`;
    return isCurrentPage ? renderTemplate`<button${addAttribute(page, "key")} class="px-4 py-2 bg-[#D4A574] text-navy-900 border-3 border-navy-900 font-black" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-s63ypivo> ${page} </button>` : renderTemplate`<a${addAttribute(page, "key")}${addAttribute(pageUrl, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-s63ypivo> ${page} </a>`;
  }), currentPage < totalPages ? renderTemplate`<a${addAttribute(`/en/blog/page/${currentPage + 1}`, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-s63ypivo>
Next →
</a>` : renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-s63ypivo>
Next →
</button>`, currentPage, totalPages, allPosts.length, categories.map((category) => renderTemplate`<li data-astro-cid-s63ypivo> <a${addAttribute(`/en/blog/category/${category.slug}`, "href")} class="flex items-center justify-between group hover:bg-gray-900 hover:text-white p-4 -mx-4 transition-all duration-300 border-2 border-transparent hover:border-gray-900" data-astro-cid-s63ypivo> <span class="flex items-center gap-4" data-astro-cid-s63ypivo> <span class="text-3xl" data-astro-cid-s63ypivo>${category.icon}</span> <span class="font-black text-lg group-hover:text-white" data-astro-cid-s63ypivo>${category.name}</span> </span> <span class="text-sm font-black text-white bg-gray-900 group-hover:bg-white group-hover:text-gray-900 px-4 py-2 rounded-full border-2 border-gray-900" data-astro-cid-s63ypivo> ${category.count} </span> </a> </li>`), popularPosts.map((post, index) => renderTemplate`<li class="flex gap-5" data-astro-cid-s63ypivo> <span class="text-xl font-black text-white bg-gray-900 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900" data-astro-cid-s63ypivo> ${String(index + 1).padStart(2, "0")} </span> <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="text-gray-900 hover:text-black font-black leading-tight hover:underline transition-all duration-200 text-lg" data-astro-cid-s63ypivo> ${post.title} </a> </li>`), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Us Now", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp", "data-astro-cid-s63ypivo": true }), addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href"), COMPANY_INFO.phone.display, renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Get Free Quote Now", "link": "/en/contact", "variant": "accent", "size": "large", "data-astro-cid-s63ypivo": true }), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Calculate Monthly Payment", "link": "/en/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-s63ypivo": true })) })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/blog/index.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

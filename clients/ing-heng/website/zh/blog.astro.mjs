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
  const lang = "zh";
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
  const popularPosts = sortedPosts.slice(0, 8).map((p) => ({ title: p.title, slug: p.slug }));
  const categories = [
    {
      name: "\u8BBE\u5907\u878D\u8D44",
      slug: "equipment-financing",
      count: allPosts.filter((p) => p.category === "Equipment Financing").length,
      icon: "\u{1F3D7}\uFE0F"
    },
    {
      name: "\u653F\u5E9C\u62DB\u6807",
      slug: "government-tenders",
      count: allPosts.filter((p) => p.title.includes("\u653F\u5E9C") || p.title.includes("CIDB") || p.title.includes("\u6377\u8FD0") || p.title.includes("\u4E1C\u94C1") || p.title.includes("\u5A46\u7F57\u6D32")).length,
      icon: "\u{1F3DB}\uFE0F"
    },
    {
      name: "\u8D77\u91CD\u673A\u878D\u8D44",
      slug: "crane-financing",
      count: allPosts.filter((p) => p.title.includes("\u8D77\u91CD\u673A") || p.title.includes("\u5854\u5F0F") || p.title.includes("\u79FB\u52A8\u5F0F")).length,
      icon: "\u{1F3D7}\uFE0F"
    },
    {
      name: "\u8F66\u961F\u878D\u8D44",
      slug: "fleet-financing",
      count: allPosts.filter((p) => p.title.includes("\u8F66\u961F") || p.title.includes("\u6279\u91CF") || p.title.includes("\u53F0") || p.title.includes("\u591A")).length,
      icon: "\u{1F69B}"
    },
    {
      name: "\u6280\u672F\u8BBE\u5907",
      slug: "technology-equipment",
      count: allPosts.filter((p) => p.title.includes("GPS") || p.title.includes("\u667A\u80FD") || p.title.includes("3D") || p.title.includes("IoT")).length,
      icon: "\u{1F527}"
    },
    {
      name: "\u7A0E\u52A1\u4F18\u60E0",
      slug: "tax-benefits",
      count: allPosts.filter((p) => p.title.includes("\u7A0E") || p.title.includes("\u8D44\u672C") || p.title.includes("\u6D25\u8D34")).length,
      icon: "\u{1F4CB}"
    }
  ];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u535A\u5BA2", href: "/zh/blog" }
  ];
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "\u8BBE\u5907\u878D\u8D44\u535A\u5BA2 - \u4E13\u5BB6\u6280\u5DE7\u4E0E\u884C\u4E1A\u6307\u5357",
    "description": "\u6765\u81EA\u9A6C\u6765\u897F\u4E9A\u503C\u5F97\u4FE1\u8D56\u7684\u878D\u8D44\u5408\u4F5C\u4F19\u4F34\uFF08\u6210\u7ACB\u4E8E1985\u5E74\uFF09\u7684\u8BBE\u5907\u878D\u8D44\u3001\u5EFA\u7B51\u4E1A\u52A1\u7BA1\u7406\u548C\u884C\u4E1A\u8D8B\u52BF\u4E13\u4E1A\u89C1\u89E3\u3002",
    "url": `${SITE_CONFIG.url}/zh/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "\u6C38\u5174\u4FE1\u8D37\u6709\u9650\u516C\u53F8",
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u535A\u5BA2 | \u4E13\u5BB6\u6280\u5DE7 | \u6C38\u5174\u4FE1\u8D37", "description": "\u8BBE\u5907\u878D\u8D44\u3001\u5EFA\u7B51\u4E1A\u52A1\u7BA1\u7406\u3001\u7A0E\u6536\u4F18\u60E0\u548C\u884C\u4E1A\u8D8B\u52BF\u7684\u4E13\u4E1A\u89C1\u89E3\u300240\u591A\u5E74\u7684\u878D\u8D44\u4E13\u4E1A\u77E5\u8BC6\u52A9\u529B\u60A8\u7684\u4F01\u4E1A\u6210\u957F\u3002", "lang": lang, "keywords": [
    "\u8BBE\u5907\u878D\u8D44\u535A\u5BA2",
    "\u5EFA\u7B51\u8BBE\u5907\u8D34\u58EB",
    "\u9A6C\u6765\u897F\u4E9A\u878D\u8D44\u6307\u5357",
    "\u6316\u6398\u673A\u878D\u8D44\u6280\u5DE7",
    "\u8D27\u8F66\u878D\u8D44\u6307\u5357",
    "\u5546\u4E1A\u8D37\u6B3E\u5EFA\u8BAE",
    "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u79DF\u8D41",
    "\u627F\u5305\u5546\u8D22\u52A1\u6280\u5DE7"
  ], "data-astro-cid-msoszkmk": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-msoszkmk> <div class="container-custom" data-astro-cid-msoszkmk> ', ' </div> </section>  <section class="section bg-gradient-to-br from-primary/5 via-white to-secondary/5" data-astro-cid-msoszkmk> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-msoszkmk> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6" data-astro-cid-msoszkmk>\n\u8BBE\u5907\u878D\u8D44\u89C1\u89E3\u4E0E\u4E13\u5BB6\u6307\u5357\n</h1> <p class="text-xl text-gray-600 leading-relaxed mb-8" data-astro-cid-msoszkmk>\n\u4ECE40\u591A\u5E74\u7684\u8BBE\u5907\u878D\u8D44\u4E13\u4E1A\u7ECF\u9A8C\u4E2D\u5B66\u4E60\u3002\u5B9E\u7528\u6280\u5DE7\u3001\u884C\u4E1A\u89C1\u89E3\u548C\u6210\u529F\u7B56\u7565\uFF0C\u52A9\u529B\u60A8\u7684\u5EFA\u7B51\u3001\u7269\u6D41\u6216\u5236\u9020\u4E1A\u52A1\u84EC\u52C3\u53D1\u5C55\u3002\n</p> <!-- Search Bar (Placeholder) --> <div class="max-w-2xl mx-auto" data-astro-cid-msoszkmk> <div class="relative" data-astro-cid-msoszkmk> <input type="search" placeholder="\u641C\u7D22\u6709\u5173\u878D\u8D44\u3001\u8BBE\u5907\u3001\u4E1A\u52A1\u6280\u5DE7\u7684\u6587\u7AE0..." class="w-full px-6 py-4 pr-12 border-2 border-gray-300 rounded-full focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" aria-label="\u641C\u7D22\u535A\u5BA2\u6587\u7AE0" data-astro-cid-msoszkmk> <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors" aria-label="\u641C\u7D22" data-astro-cid-msoszkmk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-msoszkmk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-msoszkmk></path> </svg> </button> </div> </div> <!-- Trust Signals --> <div class="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600" data-astro-cid-msoszkmk> <div class="flex items-center gap-2" data-astro-cid-msoszkmk> <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-msoszkmk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-msoszkmk></path> </svg> <span data-astro-cid-msoszkmk>40\u591A\u5E74\u7ECF\u9A8C</span> </div> <div class="flex items-center gap-2" data-astro-cid-msoszkmk> <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-msoszkmk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-msoszkmk></path> </svg> <span data-astro-cid-msoszkmk>\u670D\u52A1\u8D85\u8FC74000\u5BB6\u4F01\u4E1A</span> </div> <div class="flex items-center gap-2" data-astro-cid-msoszkmk> <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-msoszkmk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-msoszkmk></path> </svg> <span data-astro-cid-msoszkmk>KPKT \u6301\u724C\u516C\u53F8</span> </div> </div> </div> </section>  <section class="section bg-white border-b border-gray-200" data-astro-cid-msoszkmk> <div class="container-custom" data-astro-cid-msoszkmk> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-msoszkmk> ', ' </div> </div> </section>  <section class="section bg-gray-50" data-astro-cid-msoszkmk> <div class="container-custom" data-astro-cid-msoszkmk> <div class="text-center mb-12" data-astro-cid-msoszkmk> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-msoszkmk>\u7CBE\u9009\u6587\u7AE0</h2> <p class="text-gray-600 text-lg" data-astro-cid-msoszkmk>\n\u6211\u4EEC\u6700\u53D7\u6B22\u8FCE\u548C\u6700\u5177\u5F71\u54CD\u529B\u7684\u6307\u5357\uFF0C\u52A9\u60A8\u505A\u51FA\u66F4\u660E\u667A\u7684\u878D\u8D44\u51B3\u7B56\n</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-astro-cid-msoszkmk> ', ` </div> </div> </section>  <section class="section" data-astro-cid-msoszkmk> <div class="container-custom" data-astro-cid-msoszkmk> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-astro-cid-msoszkmk> <!-- Main Content Area (Blog Posts) --> <div class="lg:col-span-2" data-astro-cid-msoszkmk> <div class="mb-8 flex items-center justify-between" data-astro-cid-msoszkmk> <h2 class="text-2xl font-black text-navy-900 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-msoszkmk>\u6240\u6709\u6587\u7AE0</h2> <div class="flex items-center gap-2 text-sm font-bold" style="color: #2D1810;" data-astro-cid-msoszkmk> <span data-astro-cid-msoszkmk>\u663E\u793A\u7B2C `, "-", " \u7BC7\uFF0C\u5171 ", ' \u7BC7\u6587\u7AE0</span> </div> </div> <!-- Blog Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-astro-cid-msoszkmk> ', ' </div> <!-- Pagination Controls --> <div class="flex justify-center items-center gap-2" data-astro-cid-msoszkmk> ', " ", " ", ' </div> <div class="text-center mt-6 text-sm text-gray-600 font-medium" data-astro-cid-msoszkmk>\n\u7B2C ', " \u9875\uFF0C\u5171 ", " \u9875 \u2022 \u603B\u5171 ", ' \u7BC7\u6587\u7AE0\n</div> </div> <!-- Sidebar --> <aside class="lg:col-span-1 space-y-8" data-astro-cid-msoszkmk> <!-- Categories List --> <div class="sidebar-card-contrast" data-astro-cid-msoszkmk> <div class="p-8" data-astro-cid-msoszkmk> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-msoszkmk>\u6309\u7C7B\u522B\u6D4F\u89C8</h3> <ul class="space-y-3" data-astro-cid-msoszkmk> ', ' </ul> </div> </div> <!-- Popular Posts --> <div class="sidebar-card-contrast" data-astro-cid-msoszkmk> <div class="p-8" data-astro-cid-msoszkmk> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-msoszkmk>\u6700\u53D7\u6B22\u8FCE</h3> <ul class="space-y-5" data-astro-cid-msoszkmk> ', ' </ul> </div> </div> <!-- Contact CTA --> <div class="sidebar-card-dark" data-astro-cid-msoszkmk> <div class="p-8 text-center" data-astro-cid-msoszkmk> <h3 class="text-2xl font-black text-white mb-6 uppercase tracking-wider border-b-4 border-white pb-4" data-astro-cid-msoszkmk>\u9700\u8981\u878D\u8D44\u5EFA\u8BAE\uFF1F</h3> <p class="mb-8 text-white font-bold text-lg leading-relaxed" data-astro-cid-msoszkmk>\n\u6211\u4EEC\u7684\u4E13\u5BB6\u968F\u65F6\u51C6\u5907\u5E2E\u52A9\u60A8\u627E\u5230\u6700\u9002\u5408\u60A8\u4E1A\u52A1\u7684\u878D\u8D44\u89E3\u51B3\u65B9\u6848\u3002\n</p> ', ' <p class="mt-6 text-lg text-white font-black" data-astro-cid-msoszkmk>\n\u6216\u81F4\u7535\uFF1A<a', ' class="underline hover:text-yellow-300 font-black" data-astro-cid-msoszkmk>', '</a> </p> </div> </div> </aside> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-msoszkmk> <div class="container-custom text-center" data-astro-cid-msoszkmk> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-msoszkmk>\n\u51C6\u5907\u597D\u4E3A\u60A8\u7684\u8BBE\u5907\u878D\u8D44\u4E86\u5417\uFF1F\n</h2> <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-astro-cid-msoszkmk>\n\u52A0\u51654000\u591A\u5BB6\u4FE1\u8D56\u6C38\u5174\u4FE1\u8D37\u7684\u4F01\u4E1A\u3002\u5FEB\u901F\u5185\u83B7\u5F97\u6279\u51C6\uFF0C\u5229\u7387\u4F4E\u81F36.5%\u8D77\u3002\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-msoszkmk> ', " ", " </div> </div> </section> "])), unescapeHTML(JSON.stringify(blogCollectionSchema)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-msoszkmk": true }), categories.map((category) => renderTemplate`<a${addAttribute(`/zh/blog/category/${category.slug}`, "href")} class="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-all duration-200 group" data-astro-cid-msoszkmk> <span class="text-xl" data-astro-cid-msoszkmk>${category.icon}</span> <span class="font-semibold" data-astro-cid-msoszkmk>${category.name}</span> <span class="text-sm opacity-75" data-astro-cid-msoszkmk>(${category.count})</span> </a>`), displayFeaturedPosts.map((post) => renderTemplate`<div class="card h-full flex flex-col group hover:shadow-[8px_8px_0_#2D1810] transition-shadow duration-300 relative" data-astro-cid-msoszkmk>  <div class="absolute top-4 right-4 z-10" data-astro-cid-msoszkmk> <span class="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-[6px_6px_0_#2D1810]" data-astro-cid-msoszkmk>
精选
</span> </div>  <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative" data-astro-cid-msoszkmk> <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-20" data-astro-cid-msoszkmk> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="card-body flex flex-col flex-grow" data-astro-cid-msoszkmk>  <div class="flex items-center justify-between text-sm text-gray-500 mb-3" data-astro-cid-msoszkmk> <span class="badge badge-primary" data-astro-cid-msoszkmk>${post.category}</span> <span class="flex items-center gap-1" data-astro-cid-msoszkmk> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-msoszkmk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-msoszkmk></path> </svg> ${post.readTime} 分钟阅读
</span> </div>  <h3 class="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors" data-astro-cid-msoszkmk> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} data-astro-cid-msoszkmk> ${post.title} </a> </h3>  <p class="text-gray-600 mb-4 flex-grow leading-relaxed" data-astro-cid-msoszkmk> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-200" data-astro-cid-msoszkmk> <div class="flex items-center space-x-2 text-sm text-gray-600" data-astro-cid-msoszkmk> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-msoszkmk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-msoszkmk></path> </svg> <time${addAttribute(post.date, "datetime")} data-astro-cid-msoszkmk> ${new Date(post.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })} </time> </div> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="inline-flex items-center text-secondary font-semibold hover:text-accent transition-colors group-hover:translate-x-2 transform duration-300" data-astro-cid-msoszkmk>
阅读更多
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-msoszkmk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-msoszkmk></path> </svg> </a> </div> </div> </div>`), startIndex + 1, Math.min(startIndex + POSTS_PER_PAGE, allPosts.length), allPosts.length, paginatedPosts.map((post) => renderTemplate`<div class="card h-full flex flex-col group hover:shadow-[8px_8px_0_#2D1810] transition-shadow duration-300" data-astro-cid-msoszkmk>  <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative" data-astro-cid-msoszkmk> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-20" data-astro-cid-msoszkmk> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="card-body flex flex-col flex-grow" data-astro-cid-msoszkmk>  <div class="mb-3" data-astro-cid-msoszkmk> <span class="badge badge-primary text-xs" data-astro-cid-msoszkmk>${post.category}</span> </div>  <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2" data-astro-cid-msoszkmk> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} data-astro-cid-msoszkmk> ${post.title} </a> </h3>  <p class="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed" data-astro-cid-msoszkmk> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-200 text-sm" data-astro-cid-msoszkmk> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-msoszkmk> ${new Date(post.date).toLocaleDateString("zh-CN", { month: "long", day: "numeric" })} </time> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="text-secondary font-semibold hover:text-accent transition-colors" data-astro-cid-msoszkmk>
阅读更多 →
</a> </div> </div> </div>`), renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-msoszkmk>
← 上一页
</button>`, Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    const page = i + 1;
    const isCurrentPage = page === currentPage;
    const pageUrl = page === 1 ? "/zh/blog" : `/zh/blog/page/${page}`;
    return isCurrentPage ? renderTemplate`<button class="px-4 py-2 bg-[#D4A574] text-navy-900 border-3 border-navy-900 font-black" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-msoszkmk> ${page} </button>` : renderTemplate`<a${addAttribute(pageUrl, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-msoszkmk> ${page} </a>`;
  }), currentPage < totalPages ? renderTemplate`<a${addAttribute(`/zh/blog/page/${currentPage + 1}`, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-msoszkmk>
下一页 →
</a>` : renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-msoszkmk>
下一页 →
</button>`, currentPage, totalPages, allPosts.length, categories.map((category) => renderTemplate`<li data-astro-cid-msoszkmk> <a${addAttribute(`/zh/blog/category/${category.slug}`, "href")} class="flex items-center justify-between group hover:bg-gray-900 hover:text-white p-4 -mx-4 transition-all duration-300 border-2 border-transparent hover:border-gray-900" data-astro-cid-msoszkmk> <span class="flex items-center gap-4" data-astro-cid-msoszkmk> <span class="text-3xl" data-astro-cid-msoszkmk>${category.icon}</span> <span class="font-black text-lg group-hover:text-white" data-astro-cid-msoszkmk>${category.name}</span> </span> <span class="text-sm font-black text-white bg-gray-900 group-hover:bg-white group-hover:text-gray-900 px-4 py-2 rounded-full border-2 border-gray-900" data-astro-cid-msoszkmk> ${category.count} </span> </a> </li>`), popularPosts.map((post, index) => renderTemplate`<li class="flex gap-5" data-astro-cid-msoszkmk> <span class="text-xl font-black text-white bg-gray-900 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900" data-astro-cid-msoszkmk> ${String(index + 1).padStart(2, "0")} </span> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="text-gray-900 hover:text-black font-black leading-tight hover:underline transition-all duration-200 text-lg" data-astro-cid-msoszkmk> ${post.title} </a> </li>`), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373WhatsApp\u8054\u7CFB\u6211\u4EEC", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp", "data-astro-cid-msoszkmk": true }), addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href"), COMPANY_INFO.phone.display, renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373\u83B7\u53D6\u514D\u8D39\u62A5\u4EF7", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-msoszkmk": true }), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u8BA1\u7B97\u6BCF\u6708\u8FD8\u6B3E", "link": "/zh/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-msoszkmk": true })) })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/index.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/index.astro";
const $$url = "/zh/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

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
  const lang = "ms";
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
      name: "Pembiayaan Peralatan",
      slug: "equipment-financing",
      count: allPosts.filter((p) => p.category === "Equipment Financing").length,
      icon: "\u{1F3D7}\uFE0F"
    },
    {
      name: "Tender Kerajaan",
      slug: "government-tenders",
      count: allPosts.filter((p) => p.title.includes("Kerajaan") || p.title.includes("CIDB") || p.title.includes("MRT") || p.title.includes("ECRL") || p.title.includes("Pan Borneo")).length,
      icon: "\u{1F3DB}\uFE0F"
    },
    {
      name: "Pembiayaan Kren",
      slug: "crane-financing",
      count: allPosts.filter((p) => p.title.includes("Kren") || p.title.includes("Menara") || p.title.includes("Mudah Alih")).length,
      icon: "\u{1F3D7}\uFE0F"
    },
    {
      name: "Pembiayaan Armada",
      slug: "fleet-financing",
      count: allPosts.filter((p) => p.title.includes("Armada") || p.title.includes("Pukal") || p.title.includes("Unit") || p.title.includes("Multi")).length,
      icon: "\u{1F69B}"
    },
    {
      name: "Peralatan Teknologi",
      slug: "technology-equipment",
      count: allPosts.filter((p) => p.title.includes("GPS") || p.title.includes("Pintar") || p.title.includes("3D") || p.title.includes("IoT")).length,
      icon: "\u{1F527}"
    },
    {
      name: "Faedah Cukai",
      slug: "tax-benefits",
      count: allPosts.filter((p) => p.title.includes("Cukai") || p.title.includes("Modal") || p.title.includes("Elaun")).length,
      icon: "\u{1F4CB}"
    }
  ];
  const breadcrumbItems = [
    { label: "Laman Utama", href: "/ms" },
    { label: "Blog", href: "/ms/blog" }
  ];
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog Pembiayaan Peralatan - Tips Pakar & Panduan Industri",
    "description": "Wawasan pakar tentang pembiayaan peralatan, pengurusan perniagaan pembinaan, dan trend industri dari rakan kongsi pembiayaan terpercaya Malaysia sejak 1985.",
    "url": `${SITE_CONFIG.url}/ms/blog`,
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog Pembiayaan Peralatan Malaysia | Tips Pakar | Ing Heng Credit", "description": "Wawasan pakar tentang pembiayaan peralatan, pengurusan perniagaan pembinaan, faedah cukai, dan trend industri. 40+ tahun kepakaran pembiayaan untuk membantu perniagaan anda berkembang.", "lang": lang, "keywords": [
    "blog pembiayaan peralatan",
    "tips peralatan pembinaan",
    "panduan pembiayaan Malaysia",
    "tips pembiayaan jengkaut",
    "panduan pembiayaan lori",
    "nasihat pinjaman perniagaan",
    "pajakan peralatan Malaysia",
    "tips kewangan kontraktor"
  ], "data-astro-cid-j6ok5gqc": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", '<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-j6ok5gqc> <div class="container-custom" data-astro-cid-j6ok5gqc> ', ' </div> </section>  <section class="section bg-gradient-to-br from-primary/5 via-white to-secondary/5" data-astro-cid-j6ok5gqc> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-j6ok5gqc> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6" data-astro-cid-j6ok5gqc>\nWawasan Pembiayaan Peralatan & Panduan Pakar\n</h1> <p class="text-xl text-gray-600 leading-relaxed mb-8" data-astro-cid-j6ok5gqc>\nBelajar dari 40+ tahun kepakaran pembiayaan peralatan. Tip praktikal, wawasan industri, dan strategi terbukti untuk membantu perniagaan pembinaan, logistik, atau pembuatan anda berkembang maju.\n</p> <!-- Search Bar (Placeholder) --> <div class="max-w-2xl mx-auto" data-astro-cid-j6ok5gqc> <div class="relative" data-astro-cid-j6ok5gqc> <input type="search" placeholder="Cari artikel tentang pembiayaan, peralatan, tips perniagaan..." class="w-full px-6 py-4 pr-12 border-2 border-gray-300 rounded-full focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" aria-label="Cari artikel blog" data-astro-cid-j6ok5gqc> <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors" aria-label="Cari" data-astro-cid-j6ok5gqc> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j6ok5gqc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-j6ok5gqc></path> </svg> </button> </div> </div> <!-- Trust Signals --> <div class="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600" data-astro-cid-j6ok5gqc> <div class="flex items-center gap-2" data-astro-cid-j6ok5gqc> <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-j6ok5gqc> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-j6ok5gqc></path> </svg> <span data-astro-cid-j6ok5gqc>40+ Tahun Pengalaman</span> </div> <div class="flex items-center gap-2" data-astro-cid-j6ok5gqc> <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-j6ok5gqc> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-j6ok5gqc></path> </svg> <span data-astro-cid-j6ok5gqc>4,000+ Syarikat Dilayan</span> </div> <div class="flex items-center gap-2" data-astro-cid-j6ok5gqc> <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-j6ok5gqc> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-j6ok5gqc></path> </svg> <span data-astro-cid-j6ok5gqc>Berlesen KPKT</span> </div> </div> </div> </section>  <section class="section bg-white border-b border-gray-200" data-astro-cid-j6ok5gqc> <div class="container-custom" data-astro-cid-j6ok5gqc> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-j6ok5gqc> ', ' </div> </div> </section>  <section class="section bg-gray-50" data-astro-cid-j6ok5gqc> <div class="container-custom" data-astro-cid-j6ok5gqc> <div class="text-center mb-12" data-astro-cid-j6ok5gqc> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-j6ok5gqc>Artikel Pilihan</h2> <p class="text-gray-600 text-lg" data-astro-cid-j6ok5gqc>\nPanduan kami yang paling popular dan berkesan untuk membantu anda membuat keputusan pembiayaan yang lebih bijak\n</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-astro-cid-j6ok5gqc> ', ` </div> </div> </section>  <section class="section" data-astro-cid-j6ok5gqc> <div class="container-custom" data-astro-cid-j6ok5gqc> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-astro-cid-j6ok5gqc> <!-- Main Content Area (Blog Posts) --> <div class="lg:col-span-2" data-astro-cid-j6ok5gqc> <div class="mb-8 flex items-center justify-between" data-astro-cid-j6ok5gqc> <h2 class="text-2xl font-black text-navy-900 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-j6ok5gqc>Semua Artikel</h2> <div class="flex items-center gap-2 text-sm font-bold" style="color: #2D1810;" data-astro-cid-j6ok5gqc> <span data-astro-cid-j6ok5gqc>Menunjukkan `, "-", " daripada ", ' artikel</span> </div> </div> <!-- Blog Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-astro-cid-j6ok5gqc> ', ' </div> <!-- Pagination Controls --> <div class="flex justify-center items-center gap-2" data-astro-cid-j6ok5gqc> ', " ", " ", ' </div> <div class="text-center mt-6 text-sm text-gray-600 font-medium" data-astro-cid-j6ok5gqc>\nHalaman ', " daripada ", " \u2022 ", ' jumlah artikel\n</div> </div> <!-- Sidebar --> <aside class="lg:col-span-1 space-y-8" data-astro-cid-j6ok5gqc> <!-- Categories List --> <div class="sidebar-card-contrast" data-astro-cid-j6ok5gqc> <div class="p-8" data-astro-cid-j6ok5gqc> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-j6ok5gqc>Lihat Mengikut Kategori</h3> <ul class="space-y-3" data-astro-cid-j6ok5gqc> ', ' </ul> </div> </div> <!-- Popular Posts --> <div class="sidebar-card-contrast" data-astro-cid-j6ok5gqc> <div class="p-8" data-astro-cid-j6ok5gqc> <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-gray-900 pb-4" data-astro-cid-j6ok5gqc>Paling Popular</h3> <ul class="space-y-5" data-astro-cid-j6ok5gqc> ', ' </ul> </div> </div> <!-- Contact CTA --> <div class="sidebar-card-dark" data-astro-cid-j6ok5gqc> <div class="p-8 text-center" data-astro-cid-j6ok5gqc> <h3 class="text-2xl font-black text-white mb-6 uppercase tracking-wider border-b-4 border-white pb-4" data-astro-cid-j6ok5gqc>Perlukan Nasihat Pembiayaan?</h3> <p class="mb-8 text-white font-bold text-lg leading-relaxed" data-astro-cid-j6ok5gqc>\nPakar kami sedia membantu anda mencari penyelesaian pembiayaan terbaik untuk perniagaan anda.\n</p> ', ' <p class="mt-6 text-lg text-white font-black" data-astro-cid-j6ok5gqc>\nAtau hubungi: <a', ' class="underline hover:text-yellow-300 font-black" data-astro-cid-j6ok5gqc>', '</a> </p> </div> </div> </aside> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-j6ok5gqc> <div class="container-custom text-center" data-astro-cid-j6ok5gqc> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-j6ok5gqc>\nBersedia untuk Membiayai Peralatan Anda?\n</h2> <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-astro-cid-j6ok5gqc>\nSertai 4,000+ perniagaan yang mempercayai Ing Heng Credit untuk keperluan pembiayaan mereka. Dapatkan kelulusan pantas dengan kadar kompetitif dari 6.5% setahun.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j6ok5gqc> ', " ", " </div> </div> </section> "])), unescapeHTML(JSON.stringify(blogCollectionSchema)), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-j6ok5gqc": true }), categories.map((category) => renderTemplate`<a${addAttribute(`/ms/blog/category/${category.slug}`, "href")} class="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-all duration-200 group" data-astro-cid-j6ok5gqc> <span class="text-xl" data-astro-cid-j6ok5gqc>${category.icon}</span> <span class="font-semibold" data-astro-cid-j6ok5gqc>${category.name}</span> <span class="text-sm opacity-75" data-astro-cid-j6ok5gqc>(${category.count})</span> </a>`), displayFeaturedPosts.map((post) => renderTemplate`<div class="card h-full flex flex-col group hover:shadow-[8px_8px_0_#2D1810] transition-shadow duration-300 relative" data-astro-cid-j6ok5gqc>  <div class="absolute top-4 right-4 z-10" data-astro-cid-j6ok5gqc> <span class="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-[6px_6px_0_#2D1810]" data-astro-cid-j6ok5gqc>
PILIHAN
</span> </div>  <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative" data-astro-cid-j6ok5gqc> <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-20" data-astro-cid-j6ok5gqc> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="card-body flex flex-col flex-grow" data-astro-cid-j6ok5gqc>  <div class="flex items-center justify-between text-sm text-gray-500 mb-3" data-astro-cid-j6ok5gqc> <span class="badge badge-primary" data-astro-cid-j6ok5gqc>${post.category}</span> <span class="flex items-center gap-1" data-astro-cid-j6ok5gqc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j6ok5gqc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-j6ok5gqc></path> </svg> ${post.readTime} minit bacaan
</span> </div>  <h3 class="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors" data-astro-cid-j6ok5gqc> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} data-astro-cid-j6ok5gqc> ${post.title} </a> </h3>  <p class="text-gray-600 mb-4 flex-grow leading-relaxed" data-astro-cid-j6ok5gqc> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-200" data-astro-cid-j6ok5gqc> <div class="flex items-center space-x-2 text-sm text-gray-600" data-astro-cid-j6ok5gqc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j6ok5gqc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-j6ok5gqc></path> </svg> <time${addAttribute(post.date, "datetime")} data-astro-cid-j6ok5gqc> ${new Date(post.date).toLocaleDateString("ms-MY", { year: "numeric", month: "long", day: "numeric" })} </time> </div> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="inline-flex items-center text-secondary font-semibold hover:text-accent transition-colors group-hover:translate-x-2 transform duration-300" data-astro-cid-j6ok5gqc>
Baca Lagi
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j6ok5gqc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-j6ok5gqc></path> </svg> </a> </div> </div> </div>`), startIndex + 1, Math.min(startIndex + POSTS_PER_PAGE, allPosts.length), allPosts.length, paginatedPosts.map((post) => renderTemplate`<div class="card h-full flex flex-col group hover:shadow-[8px_8px_0_#2D1810] transition-shadow duration-300" data-astro-cid-j6ok5gqc>  <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative" data-astro-cid-j6ok5gqc> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-20" data-astro-cid-j6ok5gqc> ${categories.find((c) => c.name === post.category)?.icon || "\u{1F4DD}"} </div> </a> <div class="card-body flex flex-col flex-grow" data-astro-cid-j6ok5gqc>  <div class="mb-3" data-astro-cid-j6ok5gqc> <span class="badge badge-primary text-xs" data-astro-cid-j6ok5gqc>${post.category}</span> </div>  <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2" data-astro-cid-j6ok5gqc> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} data-astro-cid-j6ok5gqc> ${post.title} </a> </h3>  <p class="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed" data-astro-cid-j6ok5gqc> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-200 text-sm" data-astro-cid-j6ok5gqc> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-j6ok5gqc> ${new Date(post.date).toLocaleDateString("ms-MY", { month: "long", day: "numeric" })} </time> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="text-secondary font-semibold hover:text-accent transition-colors" data-astro-cid-j6ok5gqc>
Baca Lagi →
</a> </div> </div> </div>`), renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-j6ok5gqc>
← Sebelumnya
</button>`, Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    const page = i + 1;
    const isCurrentPage = page === currentPage;
    const pageUrl = page === 1 ? "/ms/blog" : `/ms/blog/page/${page}`;
    return isCurrentPage ? renderTemplate`<button class="px-4 py-2 bg-[#D4A574] text-navy-900 border-3 border-navy-900 font-black" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-j6ok5gqc> ${page} </button>` : renderTemplate`<a${addAttribute(pageUrl, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-j6ok5gqc> ${page} </a>`;
  }), currentPage < totalPages ? renderTemplate`<a${addAttribute(`/ms/blog/page/${currentPage + 1}`, "href")} class="px-4 py-2 border-3 border-navy-900 text-navy-900 hover:bg-[#D4A574] hover:text-navy-900 transition-all font-black bg-white" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-j6ok5gqc>
Seterusnya →
</a>` : renderTemplate`<button disabled class="px-4 py-2 border-3 border-navy-900 text-navy-900 opacity-50 cursor-not-allowed bg-gray-100" style="box-shadow: 4px 4px 0 #1E3A8A;" data-astro-cid-j6ok5gqc>
Seterusnya →
</button>`, currentPage, totalPages, allPosts.length, categories.map((category) => renderTemplate`<li data-astro-cid-j6ok5gqc> <a${addAttribute(`/ms/blog/category/${category.slug}`, "href")} class="flex items-center justify-between group hover:bg-gray-900 hover:text-white p-4 -mx-4 transition-all duration-300 border-2 border-transparent hover:border-gray-900" data-astro-cid-j6ok5gqc> <span class="flex items-center gap-4" data-astro-cid-j6ok5gqc> <span class="text-3xl" data-astro-cid-j6ok5gqc>${category.icon}</span> <span class="font-black text-lg group-hover:text-white" data-astro-cid-j6ok5gqc>${category.name}</span> </span> <span class="text-sm font-black text-white bg-gray-900 group-hover:bg-white group-hover:text-gray-900 px-4 py-2 rounded-full border-2 border-gray-900" data-astro-cid-j6ok5gqc> ${category.count} </span> </a> </li>`), popularPosts.map((post, index) => renderTemplate`<li class="flex gap-5" data-astro-cid-j6ok5gqc> <span class="text-xl font-black text-white bg-gray-900 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900" data-astro-cid-j6ok5gqc> ${String(index + 1).padStart(2, "0")} </span> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="text-gray-900 hover:text-black font-black leading-tight hover:underline transition-all duration-200 text-lg" data-astro-cid-j6ok5gqc> ${post.title} </a> </li>`), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Kami Sekarang", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp", "data-astro-cid-j6ok5gqc": true }), addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href"), COMPANY_INFO.phone.display, renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Dapatkan Sebut Harga Percuma", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-j6ok5gqc": true }), renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Kira Bayaran Bulanan", "link": "/ms/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-j6ok5gqc": true })) })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/blog/index.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/blog/index.astro";
const $$url = "/ms/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

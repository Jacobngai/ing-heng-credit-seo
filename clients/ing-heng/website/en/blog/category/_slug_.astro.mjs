/* empty css                                          */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$CTAButton } from '../../../../chunks/CTAButton_D2NuWLbx.mjs';
/* empty css                                           */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
async function getStaticPaths() {
  const categories = [
    "equipment-financing",
    "contractor-guides",
    "business-growth",
    "tax-compliance",
    "government-tenders",
    "crane-financing",
    "fleet-financing",
    "technology-equipment",
    "tax-benefits"
  ];
  return categories.map((slug) => ({
    params: { slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const lang = "en";
  const { slug } = Astro2.params;
  const categoryMap = {
    "equipment-financing": {
      name: "Equipment Financing Tips",
      description: "Expert tips and guides on equipment financing in Malaysia",
      icon: "\u{1F3D7}\uFE0F"
    },
    "contractor-guides": {
      name: "Contractor Guides",
      description: "Essential guides for contractors and construction businesses",
      icon: "\u{1F477}"
    },
    "business-growth": {
      name: "Business Growth",
      description: "Strategies to grow your construction or logistics business",
      icon: "\u{1F4C8}"
    },
    "tax-compliance": {
      name: "Tax & Compliance",
      description: "Tax benefits and compliance information for equipment financing",
      icon: "\u{1F4CB}"
    },
    "government-tenders": {
      name: "Government Tenders",
      description: "Win government contracts with proper equipment financing",
      icon: "\u{1F3DB}\uFE0F"
    },
    "crane-financing": {
      name: "Crane Financing",
      description: "Complete guides for crane and heavy lifting equipment financing",
      icon: "\u{1F3D7}\uFE0F"
    },
    "fleet-financing": {
      name: "Fleet Financing",
      description: "Build and finance your commercial vehicle fleet",
      icon: "\u{1F69A}"
    },
    "technology-equipment": {
      name: "Technology Equipment",
      description: "Finance modern technology and smart equipment",
      icon: "\u{1F4BB}"
    },
    "tax-benefits": {
      name: "Tax Benefits",
      description: "Maximize tax advantages from equipment financing",
      icon: "\u{1F4B0}"
    }
  };
  const category = categoryMap[slug];
  if (!category) {
    return Astro2.redirect("/en/blog", 301);
  }
  const allPosts = [
    {
      title: "Complete Guide to Equipment Financing in Malaysia 2025",
      excerpt: "Learn everything you need to know about financing construction equipment, from hire purchase to leasing options.",
      date: "2025-10-11",
      slug: "complete-guide-equipment-financing-malaysia",
      category: "Equipment Financing Tips",
      readTime: 8
    },
    {
      title: "Excavator Financing: How Contractors Can Save 30% on Equipment Costs",
      excerpt: "Discover proven strategies to reduce your excavator acquisition costs through smart financing.",
      date: "2025-10-10",
      slug: "excavator-financing-save-30-percent",
      category: "Contractor Guides",
      readTime: 6
    },
    {
      title: "Lorry Financing for Logistics Companies: Fast Approval Strategies",
      excerpt: "Fast-track your lorry financing approval with these expert tips.",
      date: "2025-10-09",
      slug: "lorry-financing-fast-approval-strategies",
      category: "Equipment Financing Tips",
      readTime: 7
    },
    {
      title: "Forklift Leasing vs. Buying: Which Option is Right for Your Warehouse?",
      excerpt: "Compare the pros and cons of leasing versus purchasing forklifts.",
      date: "2025-10-08",
      slug: "forklift-leasing-vs-buying-guide",
      category: "Business Growth",
      readTime: 7
    },
    {
      title: "Tax Benefits of Equipment Financing: Maximize Your Deductions in 2025",
      excerpt: "Understand the tax advantages of equipment financing in Malaysia.",
      date: "2025-10-07",
      slug: "tax-benefits-equipment-financing-2025",
      category: "Tax & Compliance",
      readTime: 8
    },
    {
      title: "Cash Flow Management for Construction Companies: 5 Essential Strategies",
      excerpt: "Master cash flow management while financing expensive construction equipment.",
      date: "2025-10-06",
      slug: "cash-flow-management-construction",
      category: "Business Growth",
      readTime: 9
    }
  ];
  const categoryPosts = allPosts.filter((post) => post.category === category.name);
  const breadcrumbItems = [
    { label: "Home", href: "/en" },
    { label: "Blog", href: "/en/blog" },
    { label: category.name, href: `/en/blog/category/${slug}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${category.name} | Equipment Financing Blog | Ing Heng Credit`, "description": category.description, "lang": lang, "keywords": [category.name.toLowerCase(), "equipment financing", "Malaysia"], "data-astro-cid-ckym56ps": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-ckym56ps> <div class="container-custom" data-astro-cid-ckym56ps> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-ckym56ps": true })} </div> </section>  <section class="section bg-navy-900" data-astro-cid-ckym56ps> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-ckym56ps> <div class="text-6xl mb-4" data-astro-cid-ckym56ps>${category.icon}</div> <h1 class="text-4xl md:text-5xl font-black text-[#D4A574] mb-4 tracking-tight" style="font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;" data-astro-cid-ckym56ps> ${category.name} </h1> <p class="text-xl text-white leading-relaxed" data-astro-cid-ckym56ps> ${category.description} </p> <div class="mt-6 text-sm font-bold text-[#D4A574]" data-astro-cid-ckym56ps> ${categoryPosts.length} ${categoryPosts.length === 1 ? "Article" : "Articles"} </div> </div> </section>  <section class="section" data-astro-cid-ckym56ps> <div class="container-custom max-w-5xl mx-auto" data-astro-cid-ckym56ps> ${categoryPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-ckym56ps> ${categoryPosts.map((post) => renderTemplate`<div class="card-brutalist h-full flex flex-col group" data-astro-cid-ckym56ps>  <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 relative border-b-3 border-navy-900" data-astro-cid-ckym56ps> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-30" data-astro-cid-ckym56ps> ${category.icon} </div> </a> <div class="p-6 flex flex-col flex-grow" data-astro-cid-ckym56ps>  <div class="flex items-center justify-between text-sm mb-3" style="color: #2D1810;" data-astro-cid-ckym56ps> <span class="badge-brutalist text-xs" data-astro-cid-ckym56ps>${category.name}</span> <span class="flex items-center gap-1" data-astro-cid-ckym56ps> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ckym56ps> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ckym56ps></path> </svg> ${post.readTime} min read
</span> </div>  <h3 class="text-xl font-black text-navy-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-ckym56ps> <a${addAttribute(`/en/blog/${post.slug}`, "href")} data-astro-cid-ckym56ps> ${post.title} </a> </h3>  <p class="mb-4 flex-grow line-clamp-3 leading-relaxed font-medium" style="color: #2D1810;" data-astro-cid-ckym56ps> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t-3 border-navy-900 text-sm" data-astro-cid-ckym56ps> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-ckym56ps> ${new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} </time> <a${addAttribute(`/en/blog/${post.slug}`, "href")} class="text-yellow-600 font-black hover:text-navy-900 transition-colors uppercase" data-astro-cid-ckym56ps>
Read More →
</a> </div> </div> </div>`)} </div>` : renderTemplate`<div class="card-brutalist p-12 text-center" data-astro-cid-ckym56ps> <div class="text-6xl mb-4" data-astro-cid-ckym56ps>📝</div> <h2 class="text-2xl font-black text-navy-900 mb-4" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-ckym56ps>No Articles Yet</h2> <p class="mb-6" style="color: #2D1810;" data-astro-cid-ckym56ps>
We're working on adding content to this category. Check back soon or explore other categories.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "View All Articles", "link": "/en/blog", "variant": "primary", "size": "medium", "data-astro-cid-ckym56ps": true })} </div>`}  <div class="mt-12 text-center" data-astro-cid-ckym56ps> <a href="/en/blog" class="inline-flex items-center gap-2 text-yellow-600 font-black hover:text-navy-900 transition-colors uppercase" data-astro-cid-ckym56ps> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ckym56ps> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-ckym56ps></path> </svg>
Back to All Articles
</a> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-ckym56ps> <div class="container-custom text-center" data-astro-cid-ckym56ps> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-astro-cid-ckym56ps>
Ready to Finance Your Equipment?
</h2> <p class="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto" data-astro-cid-ckym56ps>
Get expert advice from Malaysia's trusted equipment financing partner since 1985.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-ckym56ps> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Get Free Quote Now", "link": "/en/contact", "variant": "accent", "size": "large", "data-astro-cid-ckym56ps": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Calculate Monthly Payment", "link": "/en/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-ckym56ps": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/blog/category/[slug].astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/blog/category/[slug].astro";
const $$url = "/en/blog/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

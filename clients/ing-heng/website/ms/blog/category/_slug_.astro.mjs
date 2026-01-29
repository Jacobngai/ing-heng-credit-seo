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
  const lang = "ms";
  const { slug } = Astro2.params;
  const categoryMap = {
    "equipment-financing": {
      name: "Tips Pembiayaan Peralatan",
      description: "Tips dan panduan pakar tentang pembiayaan peralatan di Malaysia",
      icon: "\u{1F3D7}\uFE0F"
    },
    "contractor-guides": {
      name: "Panduan Kontraktor",
      description: "Panduan penting untuk kontraktor dan perniagaan pembinaan",
      icon: "\u{1F477}"
    },
    "business-growth": {
      name: "Pertumbuhan Perniagaan",
      description: "Strategi untuk mengembangkan perniagaan pembinaan atau logistik anda",
      icon: "\u{1F4C8}"
    },
    "tax-compliance": {
      name: "Cukai & Pematuhan",
      description: "Faedah cukai dan maklumat pematuhan untuk pembiayaan peralatan",
      icon: "\u{1F4CB}"
    },
    "government-tenders": {
      name: "Tender Kerajaan",
      description: "Menangi kontrak kerajaan dengan pembiayaan peralatan yang betul",
      icon: "\u{1F3DB}\uFE0F"
    },
    "crane-financing": {
      name: "Pembiayaan Kren",
      description: "Panduan lengkap untuk pembiayaan kren dan peralatan angkat berat",
      icon: "\u{1F3D7}\uFE0F"
    },
    "fleet-financing": {
      name: "Pembiayaan Armada",
      description: "Bina dan biayai armada kenderaan komersial anda",
      icon: "\u{1F69A}"
    },
    "technology-equipment": {
      name: "Peralatan Teknologi",
      description: "Pembiayaan peralatan teknologi moden dan pintar",
      icon: "\u{1F4BB}"
    },
    "tax-benefits": {
      name: "Faedah Cukai",
      description: "Maksimumkan kelebihan cukai daripada pembiayaan peralatan",
      icon: "\u{1F4B0}"
    }
  };
  const category = categoryMap[slug];
  if (!category) {
    return Astro2.redirect("/ms/blog", 301);
  }
  const allPosts = [
    {
      title: "Panduan Lengkap Pembiayaan Peralatan di Malaysia 2025",
      excerpt: "Ketahui segala-galanya tentang pembiayaan peralatan pembinaan, dari beli sewa hingga pilihan pajakan.",
      date: "2025-10-11",
      slug: "complete-guide-equipment-financing-malaysia",
      category: "Tips Pembiayaan Peralatan",
      readTime: 8
    },
    {
      title: "Pembiayaan Jengkaut: Bagaimana Kontraktor Boleh Jimat 30% Kos Peralatan",
      excerpt: "Temui strategi terbukti untuk mengurangkan kos pemerolehan jengkaut melalui pembiayaan pintar.",
      date: "2025-10-10",
      slug: "excavator-financing-save-30-percent",
      category: "Panduan Kontraktor",
      readTime: 6
    },
    {
      title: "Pembiayaan Lori untuk Syarikat Logistik: Strategi Kelulusan Pantas",
      excerpt: "Percepatkan kelulusan pembiayaan lori anda dengan tip pakar ini.",
      date: "2025-10-09",
      slug: "lorry-financing-fast-approval-strategies",
      category: "Tips Pembiayaan Peralatan",
      readTime: 7
    },
    {
      title: "Faedah Cukai Pembiayaan Peralatan: Maksimumkan Potongan Anda 2025",
      excerpt: "Fahami kelebihan cukai pembiayaan peralatan di Malaysia.",
      date: "2025-10-07",
      slug: "tax-benefits-equipment-financing-2025",
      category: "Cukai & Pematuhan",
      readTime: 8
    }
  ];
  const categoryPosts = allPosts.filter((post) => post.category === category.name);
  const breadcrumbItems = [
    { label: "Laman Utama", href: "/ms" },
    { label: "Blog", href: "/ms/blog" },
    { label: category.name, href: `/ms/blog/category/${slug}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${category.name} | Blog Pembiayaan Peralatan | Ing Heng Credit`, "description": category.description, "lang": lang, "keywords": [category.name.toLowerCase(), "pembiayaan peralatan", "Malaysia"], "data-astro-cid-yalmawgs": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-yalmawgs> <div class="container-custom" data-astro-cid-yalmawgs> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-yalmawgs": true })} </div> </section>  <section class="section bg-gradient-to-br from-primary/5 via-white to-secondary/5" data-astro-cid-yalmawgs> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-yalmawgs> <div class="text-6xl mb-4" data-astro-cid-yalmawgs>${category.icon}</div> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" data-astro-cid-yalmawgs> ${category.name} </h1> <p class="text-xl leading-relaxed" style="color: #2D1810;" data-astro-cid-yalmawgs> ${category.description} </p> <div class="mt-6 text-sm font-bold text-primary" data-astro-cid-yalmawgs> ${categoryPosts.length} ${categoryPosts.length === 1 ? "Artikel" : "Artikel"} </div> </div> </section>  <section class="section" data-astro-cid-yalmawgs> <div class="container-custom max-w-5xl mx-auto" data-astro-cid-yalmawgs> ${categoryPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-yalmawgs> ${categoryPosts.map((post) => renderTemplate`<div class="card h-full flex flex-col group hover:shadow-[8px_8px_0_#2D1810] transition-shadow duration-300" data-astro-cid-yalmawgs>  <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative" data-astro-cid-yalmawgs> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-20" data-astro-cid-yalmawgs> ${category.icon} </div> </a> <div class="card-body flex flex-col flex-grow" data-astro-cid-yalmawgs>  <div class="mb-3" data-astro-cid-yalmawgs> <span class="badge badge-primary text-xs" data-astro-cid-yalmawgs>${category.name}</span> </div>  <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2" data-astro-cid-yalmawgs> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} data-astro-cid-yalmawgs> ${post.title} </a> </h3>  <p class="mb-4 flex-grow line-clamp-3 leading-relaxed" style="color: #2D1810;" data-astro-cid-yalmawgs> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-200 text-sm" data-astro-cid-yalmawgs> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-yalmawgs> ${new Date(post.date).toLocaleDateString("ms-MY", { month: "long", day: "numeric" })} </time> <a${addAttribute(`/ms/blog/${post.slug}`, "href")} class="text-secondary font-semibold hover:text-accent transition-colors" data-astro-cid-yalmawgs>
Baca Lagi →
</a> </div> </div> </div>`)} </div>` : renderTemplate`<div class="card p-12 text-center" data-astro-cid-yalmawgs> <div class="text-6xl mb-4" data-astro-cid-yalmawgs>📝</div> <h2 class="text-2xl font-bold text-primary mb-4" data-astro-cid-yalmawgs>Tiada Artikel Lagi</h2> <p class="mb-6" style="color: #2D1810;" data-astro-cid-yalmawgs>
Kami sedang menambah kandungan ke kategori ini. Sila semak semula tidak lama lagi atau teroka kategori lain.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Lihat Semua Artikel", "link": "/ms/blog", "variant": "primary", "size": "medium", "data-astro-cid-yalmawgs": true })} </div>`}  <div class="mt-12 text-center" data-astro-cid-yalmawgs> <a href="/ms/blog" class="inline-flex items-center gap-2 text-secondary font-semibold hover:text-accent transition-colors" data-astro-cid-yalmawgs> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yalmawgs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-yalmawgs></path> </svg>
Kembali ke Semua Artikel
</a> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-yalmawgs> <div class="container-custom text-center" data-astro-cid-yalmawgs> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-yalmawgs>
Bersedia untuk Membiayai Peralatan Anda?
</h2> <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-astro-cid-yalmawgs>
Dapatkan nasihat pakar dari rakan kongsi pembiayaan peralatan terpercaya Malaysia sejak 1985.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-yalmawgs> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Dapatkan Sebut Harga Percuma", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-yalmawgs": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Kira Bayaran Bulanan", "link": "/ms/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-yalmawgs": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/blog/category/[slug].astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/blog/category/[slug].astro";
const $$url = "/ms/blog/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

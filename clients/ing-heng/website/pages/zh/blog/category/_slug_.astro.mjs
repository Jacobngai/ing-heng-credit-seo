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
  const lang = "zh";
  const { slug } = Astro2.params;
  const categoryMap = {
    "equipment-financing": {
      name: "\u8BBE\u5907\u878D\u8D44\u8D34\u58EB",
      description: "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u7684\u4E13\u4E1A\u6280\u5DE7\u548C\u6307\u5357",
      icon: "\u{1F3D7}\uFE0F"
    },
    "contractor-guides": {
      name: "\u627F\u5305\u5546\u6307\u5357",
      description: "\u627F\u5305\u5546\u548C\u5EFA\u7B51\u4F01\u4E1A\u7684\u5FC5\u5907\u6307\u5357",
      icon: "\u{1F477}"
    },
    "business-growth": {
      name: "\u4F01\u4E1A\u589E\u957F\u7B56\u7565",
      description: "\u5EFA\u7B51\u6216\u7269\u6D41\u4E1A\u52A1\u589E\u957F\u7684\u7B56\u7565",
      icon: "\u{1F4C8}"
    },
    "tax-compliance": {
      name: "\u7A0E\u52A1\u4E0E\u5408\u89C4",
      description: "\u8BBE\u5907\u878D\u8D44\u7684\u7A0E\u6536\u4F18\u60E0\u548C\u5408\u89C4\u4FE1\u606F",
      icon: "\u{1F4CB}"
    },
    "government-tenders": {
      name: "\u653F\u5E9C\u62DB\u6807",
      description: "\u901A\u8FC7\u6B63\u786E\u7684\u8BBE\u5907\u878D\u8D44\u8D62\u5F97\u653F\u5E9C\u5408\u540C",
      icon: "\u{1F3DB}\uFE0F"
    },
    "crane-financing": {
      name: "\u8D77\u91CD\u673A\u878D\u8D44",
      description: "\u8D77\u91CD\u673A\u548C\u91CD\u578B\u8D77\u91CD\u8BBE\u5907\u878D\u8D44\u5B8C\u6574\u6307\u5357",
      icon: "\u{1F3D7}\uFE0F"
    },
    "fleet-financing": {
      name: "\u8F66\u961F\u878D\u8D44",
      description: "\u5EFA\u7ACB\u548C\u878D\u8D44\u60A8\u7684\u5546\u7528\u8F66\u961F",
      icon: "\u{1F69A}"
    },
    "technology-equipment": {
      name: "\u79D1\u6280\u8BBE\u5907",
      description: "\u73B0\u4EE3\u79D1\u6280\u548C\u667A\u80FD\u8BBE\u5907\u878D\u8D44",
      icon: "\u{1F4BB}"
    },
    "tax-benefits": {
      name: "\u7A0E\u6536\u4F18\u60E0",
      description: "\u6700\u5927\u5316\u8BBE\u5907\u878D\u8D44\u7684\u7A0E\u6536\u4F18\u52BF",
      icon: "\u{1F4B0}"
    }
  };
  const category = categoryMap[slug];
  if (!category) {
    return Astro2.redirect("/zh/blog", 301);
  }
  const allPosts = [
    {
      title: "2025\u5E74\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u5B8C\u6574\u6307\u5357",
      excerpt: "\u8BE6\u7EC6\u4E86\u89E3\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44\u7684\u6240\u6709\u77E5\u8BC6\uFF0C\u4ECE\u79DF\u8D2D\u5230\u79DF\u8D41\u9009\u9879\u3002",
      date: "2025-10-11",
      slug: "complete-guide-equipment-financing-malaysia",
      category: "\u8BBE\u5907\u878D\u8D44\u8D34\u58EB",
      readTime: 8
    },
    {
      title: "\u6316\u6398\u673A\u878D\u8D44\uFF1A\u627F\u5305\u5546\u5982\u4F55\u8282\u770130%\u8BBE\u5907\u6210\u672C",
      excerpt: "\u63A2\u7D22\u7ECF\u8FC7\u9A8C\u8BC1\u7684\u7B56\u7565\uFF0C\u901A\u8FC7\u667A\u80FD\u878D\u8D44\u964D\u4F4E\u6316\u6398\u673A\u8D2D\u7F6E\u6210\u672C\u3002",
      date: "2025-10-10",
      slug: "excavator-financing-save-30-percent",
      category: "\u627F\u5305\u5546\u6307\u5357",
      readTime: 6
    },
    {
      title: "\u7269\u6D41\u516C\u53F8\u8D27\u8F66\u878D\u8D44\uFF1A\u5FEB\u901F\u6279\u51C6\u7B56\u7565",
      excerpt: "\u7528\u8FD9\u4E9B\u4E13\u5BB6\u6280\u5DE7\u52A0\u5FEB\u60A8\u7684\u8D27\u8F66\u878D\u8D44\u6279\u51C6\u3002",
      date: "2025-10-09",
      slug: "lorry-financing-fast-approval-strategies",
      category: "\u8BBE\u5907\u878D\u8D44\u8D34\u58EB",
      readTime: 7
    },
    {
      title: "\u53C9\u8F66\u79DF\u8D41 vs \u8D2D\u4E70\uFF1A\u54EA\u4E2A\u9009\u9879\u9002\u5408\u60A8\u7684\u4ED3\u5E93\uFF1F",
      excerpt: "\u6BD4\u8F83\u79DF\u8D41\u4E0E\u8D2D\u4E70\u53C9\u8F66\u7684\u5229\u5F0A\u3002",
      date: "2025-10-08",
      slug: "forklift-leasing-vs-buying-guide",
      category: "\u4F01\u4E1A\u589E\u957F\u7B56\u7565",
      readTime: 7
    },
    {
      title: "\u8BBE\u5907\u878D\u8D44\u7684\u7A0E\u6536\u4F18\u60E0\uFF1A2025\u5E74\u6700\u5927\u5316\u60A8\u7684\u6263\u9664\u989D",
      excerpt: "\u4E86\u89E3\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u7684\u7A0E\u6536\u4F18\u52BF\u3002",
      date: "2025-10-07",
      slug: "tax-benefits-equipment-financing-2025",
      category: "\u7A0E\u52A1\u4E0E\u5408\u89C4",
      readTime: 8
    },
    {
      title: "\u5EFA\u7B51\u516C\u53F8\u73B0\u91D1\u6D41\u7BA1\u7406\uFF1A5\u4E2A\u5173\u952E\u7B56\u7565",
      excerpt: "\u5728\u878D\u8D44\u6602\u8D35\u5EFA\u7B51\u8BBE\u5907\u7684\u540C\u65F6\u638C\u63E1\u73B0\u91D1\u6D41\u7BA1\u7406\u3002",
      date: "2025-10-06",
      slug: "cash-flow-management-construction",
      category: "\u4F01\u4E1A\u589E\u957F\u7B56\u7565",
      readTime: 9
    }
  ];
  const categoryPosts = allPosts.filter((post) => post.category === category.name);
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u535A\u5BA2", href: "/zh/blog" },
    { label: category.name, href: `/zh/blog/category/${slug}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${category.name} | \u8BBE\u5907\u878D\u8D44\u535A\u5BA2 | \u6C38\u5174\u4FE1\u8D37`, "description": category.description, "lang": lang, "keywords": [category.name, "\u8BBE\u5907\u878D\u8D44", "\u9A6C\u6765\u897F\u4E9A"], "data-astro-cid-ogdxwqbd": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-ogdxwqbd> <div class="container-custom" data-astro-cid-ogdxwqbd> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-ogdxwqbd": true })} </div> </section>  <section class="section bg-gradient-to-br from-primary/5 via-white to-secondary/5" data-astro-cid-ogdxwqbd> <div class="container-custom text-center max-w-4xl mx-auto" data-astro-cid-ogdxwqbd> <div class="text-6xl mb-4" data-astro-cid-ogdxwqbd>${category.icon}</div> <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" data-astro-cid-ogdxwqbd> ${category.name} </h1> <p class="text-xl leading-relaxed" style="color: #2D1810;" data-astro-cid-ogdxwqbd> ${category.description} </p> <div class="mt-6 text-sm font-bold text-primary" data-astro-cid-ogdxwqbd> ${categoryPosts.length} 篇文章
</div> </div> </section>  <section class="section" data-astro-cid-ogdxwqbd> <div class="container-custom max-w-5xl mx-auto" data-astro-cid-ogdxwqbd> ${categoryPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-ogdxwqbd> ${categoryPosts.map((post) => renderTemplate`<div class="card h-full flex flex-col group hover:shadow-[8px_8px_0_#2D1810] transition-shadow duration-300" data-astro-cid-ogdxwqbd>  <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="block overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative" data-astro-cid-ogdxwqbd> <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-20" data-astro-cid-ogdxwqbd> ${category.icon} </div> </a> <div class="card-body flex flex-col flex-grow" data-astro-cid-ogdxwqbd>  <div class="mb-3" data-astro-cid-ogdxwqbd> <span class="badge badge-primary text-xs" data-astro-cid-ogdxwqbd>${category.name}</span> </div>  <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2" data-astro-cid-ogdxwqbd> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} data-astro-cid-ogdxwqbd> ${post.title} </a> </h3>  <p class="mb-4 flex-grow line-clamp-3 leading-relaxed" style="color: #2D1810;" data-astro-cid-ogdxwqbd> ${post.excerpt} </p>  <div class="flex items-center justify-between pt-4 border-t border-gray-200 text-sm" data-astro-cid-ogdxwqbd> <time${addAttribute(post.date, "datetime")} class="text-gray-500" data-astro-cid-ogdxwqbd> ${new Date(post.date).toLocaleDateString("zh-CN", { month: "long", day: "numeric" })} </time> <a${addAttribute(`/zh/blog/${post.slug}`, "href")} class="text-secondary font-semibold hover:text-accent transition-colors" data-astro-cid-ogdxwqbd>
阅读更多 →
</a> </div> </div> </div>`)} </div>` : renderTemplate`<div class="card p-12 text-center" data-astro-cid-ogdxwqbd> <div class="text-6xl mb-4" data-astro-cid-ogdxwqbd>📝</div> <h2 class="text-2xl font-bold text-primary mb-4" data-astro-cid-ogdxwqbd>暂无文章</h2> <p class="mb-6" style="color: #2D1810;" data-astro-cid-ogdxwqbd>
我们正在为此类别添加内容。请稍后再回来查看或浏览其他类别。
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u67E5\u770B\u6240\u6709\u6587\u7AE0", "link": "/zh/blog", "variant": "primary", "size": "medium", "data-astro-cid-ogdxwqbd": true })} </div>`}  <div class="mt-12 text-center" data-astro-cid-ogdxwqbd> <a href="/zh/blog" class="inline-flex items-center gap-2 text-secondary font-semibold hover:text-accent transition-colors" data-astro-cid-ogdxwqbd> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ogdxwqbd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-ogdxwqbd></path> </svg>
返回所有文章
</a> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white" data-astro-cid-ogdxwqbd> <div class="container-custom text-center" data-astro-cid-ogdxwqbd> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-ogdxwqbd>
准备好为您的设备融资了吗？
</h2> <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-astro-cid-ogdxwqbd>
从马来西亚值得信赖的设备融资合作伙伴（成立于1985年）获得专业建议。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-ogdxwqbd> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373\u83B7\u53D6\u514D\u8D39\u62A5\u4EF7", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-ogdxwqbd": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u8BA1\u7B97\u6BCF\u6708\u8FD8\u6B3E", "link": "/zh/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-ogdxwqbd": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/category/[slug].astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/category/[slug].astro";
const $$url = "/zh/blog/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

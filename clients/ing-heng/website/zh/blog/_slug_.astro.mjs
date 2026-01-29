/* empty css                                       */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { g as getCollection } from '../../../chunks/_astro_content_BRavqcX3.mjs';
import { g as generateArticleSchema, a as generateFAQSchema, $ as $$BaseLayout, e as encodeJSONLD } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$CTAButton } from '../../../chunks/CTAButton_D2NuWLbx.mjs';
import { S as SITE_CONFIG, C as COMPANY_INFO } from '../../../chunks/Footer_BoPJ3uP5.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const getStaticPaths = (async () => {
  const allPosts = await getCollection("blogs");
  const zhPosts = allPosts.filter(
    (post) => post.data.locale === "zh" && !post.data.draft && !post.slug.includes("TEMPLATE") && !post.slug.includes("template")
  );
  return zhPosts.map((post) => {
    const slug = post.slug.includes("/") ? post.slug.split("/").pop() : post.slug;
    return {
      params: { slug },
      props: { post }
    };
  });
});
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const lang = "zh";
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u535A\u5BA2", href: "/zh/blog" },
    { label: post.data.title, href: `/zh/blog/${post.slug}` }
  ];
  const articleSchema = generateArticleSchema({
    headline: post.data.title,
    description: post.data.description,
    author: post.data.author,
    datePublished: typeof post.data.publishDate === "string" ? post.data.publishDate : post.data.publishDate.toISOString().split("T")[0],
    dateModified: post.data.updatedDate ? typeof post.data.updatedDate === "string" ? post.data.updatedDate : post.data.updatedDate.toISOString().split("T")[0] : typeof post.data.publishDate === "string" ? post.data.publishDate : post.data.publishDate.toISOString().split("T")[0],
    imageUrl: post.data.ogImage || `${SITE_CONFIG.url}/images/blog/${post.slug}.jpg`,
    keywords: post.data.keywords
  });
  const faqSchema = post.data.faqSchema ? generateFAQSchema(post.data.faqSchema) : null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.metaTitle || post.data.title, "description": post.data.metaDescription || post.data.description, "lang": lang, "keywords": post.data.keywords, "ogType": "article", "data-astro-cid-w5q62dq7": true }, { "default": async ($$result2) => renderTemplate`    ${maybeRenderHead()}<section class="bg-gray-50 border-b border-gray-200" data-astro-cid-w5q62dq7> <div class="container-custom py-4" data-astro-cid-w5q62dq7> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang, "data-astro-cid-w5q62dq7": true })} </div> </section>  <article class="section bg-white" data-astro-cid-w5q62dq7> <div class="container-custom" data-astro-cid-w5q62dq7> <div class="max-w-4xl mx-auto" data-astro-cid-w5q62dq7> <!-- Article Header --> <header class="mb-8 pb-8 border-b-3 border-navy-900" data-astro-cid-w5q62dq7> <div class="flex items-center gap-3 mb-4" data-astro-cid-w5q62dq7> <span class="badge-brutalist" data-astro-cid-w5q62dq7>${post.data.category}</span> <time${addAttribute(typeof post.data.publishDate === "string" ? post.data.publishDate : post.data.publishDate.toISOString(), "datetime")} class="text-sm text-gray-600" data-astro-cid-w5q62dq7> ${new Date(post.data.publishDate).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })} </time> <span class="text-sm text-gray-600 flex items-center gap-1" data-astro-cid-w5q62dq7> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-w5q62dq7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-w5q62dq7></path> </svg> ${post.data.readingTime || 5} 分钟阅读
</span> </div> <h1 class="text-4xl md:text-5xl font-black text-navy-900 mb-4 leading-tight" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-w5q62dq7> ${post.data.title} </h1> <p class="text-xl text-gray-700 leading-relaxed font-medium" data-astro-cid-w5q62dq7> ${post.data.description} </p> <div class="flex items-center gap-2 mt-6 text-sm text-gray-600" data-astro-cid-w5q62dq7> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-w5q62dq7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-w5q62dq7></path> </svg> <span data-astro-cid-w5q62dq7>作者：${post.data.author}</span> </div> </header> <!-- Article Content (Markdown) --> <div class="prose prose-lg max-w-none mb-12" data-astro-cid-w5q62dq7> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-w5q62dq7": true })} </div> <!-- CTA Section --> <div class="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white p-8 my-12 border-4 border-navy-900" style="box-shadow: 8px 8px 0 #1E3A8A;" data-astro-cid-w5q62dq7> <h2 class="text-3xl font-black mb-4" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-w5q62dq7>准备开始了吗？</h2> <p class="text-lg mb-6" data-astro-cid-w5q62dq7>
立即联系我们，快速获得融资批准。95%批准率，从6.5%起的竞争利率。
</p> <div class="flex flex-wrap gap-4" data-astro-cid-w5q62dq7> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp \u8054\u7CFB\u6211\u4EEC", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "data-astro-cid-w5q62dq7": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u8BA1\u7B97\u6708\u4F9B", "link": "/zh/calculator", "variant": "outline-white", "size": "large", "data-astro-cid-w5q62dq7": true })} </div> </div> </div> </div> </article>  <section class="section bg-gray-50" data-astro-cid-w5q62dq7> <div class="container-custom text-center" data-astro-cid-w5q62dq7> <h2 class="text-3xl font-black text-navy-900 mb-4" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-w5q62dq7>更多设备融资指南</h2> <p class="text-gray-700 mb-8" data-astro-cid-w5q62dq7>
探索更多专家见解，助您业务成长
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u67E5\u770B\u6240\u6709\u6587\u7AE0", "link": "/zh/blog", "variant": "primary", "size": "large", "data-astro-cid-w5q62dq7": true })} </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> ", ""])), unescapeHTML(encodeJSONLD(articleSchema)), faqSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(encodeJSONLD(faqSchema)))) })}` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/[slug].astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/blog/[slug].astro";
const $$url = "/zh/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u5173\u4E8E\u6211\u4EEC - 40+\u5E74\u8BBE\u5907\u878D\u8D44\u7ECF\u9A8C | \u6C38\u5174\u4FE1\u8D37";
  const pageDescription = "\u9A6C\u6765\u897F\u4E9A\u9886\u5148\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\uFF0C\u6210\u7ACB\u4E8E1985\u5E74\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\u5EFA\u7B51\u3001\u7269\u6D41\u548C\u5DE5\u4E1A\u8BBE\u5907\u3002";
  const keywords = ["\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44", "\u6C38\u5174\u4FE1\u8D37\u5386\u53F2", "\u5EFA\u7B51\u8BBE\u5907\u8D37\u6B3E", "\u5173\u4E8E\u6C38\u5174", "\u8BBE\u5907\u79DF\u8D41\u516C\u53F8"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "40+\u5E74\u8BBE\u5907\u878D\u8D44\u5353\u8D8A\u670D\u52A1", "subtitle": "\u81EA1985\u5E74\u4EE5\u6765\uFF0C\u4E3A\u9A6C\u6765\u897F\u4E9A\u4F01\u4E1A\u63D0\u4F9B\u667A\u80FD\u8BBE\u5907\u878D\u8D44\u89E3\u51B3\u65B9\u6848", "backgroundImage": "/images/hero/about.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "\u9996\u9875", href: `/${lang}/` },
    { label: "\u5173\u4E8E\u6211\u4EEC", href: `/${lang}/about` }
  ] })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">我们的故事</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>永兴信贷与租赁有限公司</strong>自1985年成立以来，一直是设备融资领域值得信赖的品牌。四十多年来，我们已帮助数千家马来西亚承包商、物流公司和制造商获得他们需要的设备，助力企业发展。
</p> <p>
基于<strong>每家企业都应该获得优质设备融资</strong>的原则，我们彻底改变了马来西亚中小企业获取建筑机械、商用车辆和工业设备的方式。
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">我们的竞争优势</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>0%押金可用</strong> - 融资高达设备价值的100%</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>接受10年以上旧设备</strong> - 我们评估状况，而不仅仅是年龄</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>快速批准</strong> - 比传统银行快得多</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>灵活条款</strong> - 根据您的现金流定制付款计划</span> </li> </ul> </div> <p>
与只关注完美信用评分和新设备的银行不同，我们了解马来西亚企业的实际情况。我们知道，一台维护良好的10年旧挖掘机可以像新的一样高效。我们明白保留周转资金对企业发展至关重要。
</p> </div> </div> </div> </section>  <section class="section py-16 bg-[#F5F1EB]"> <div class="container-custom"> <div class="grid md:grid-cols-2 gap-8"> <!-- Mission --> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-2xl font-black mb-4 text-[#8B6F47]">我们的使命</h3> <p class="text-gray-700 leading-relaxed">
为马来西亚中小企业提供便捷、灵活的设备融资解决方案，使企业在不影响现金流的情况下实现增长。我们相信每个合格的企业都应该获得成功所需的设备。
</p> </div> <!-- Vision --> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-2xl font-black mb-4 text-[#8B6F47]">我们的愿景</h3> <p class="text-gray-700 leading-relaxed">
成为马来西亚最值得信赖的设备融资合作伙伴，以理解真实的业务需求、批准他人拒绝的设备、支持企业家建立成功企业而闻名。
</p> </div> </div> </div> </section>  <section class="section py-16 bg-white"> <div class="container-custom"> <h2 class="text-4xl font-black mb-12 text-[#2D1810] text-center">为什么马来西亚企业选择我们</h2> <div class="grid md:grid-cols-3 gap-8"> <!-- Experience --> <div class="text-center"> <div class="text-5xl font-black text-[#8B6F47] mb-4">40+</div> <h3 class="text-xl font-bold mb-2 text-[#2D1810]">年经验</h3> <p class="text-gray-700">自1985年起融资设备，我们了解每个行业的独特需求</p> </div> <!-- Businesses Helped --> <div class="text-center"> <div class="text-5xl font-black text-[#8B6F47] mb-4">4000+</div> <h3 class="text-xl font-bold mb-2 text-[#2D1810]">企业融资</h3> <p class="text-gray-700">从单台挖掘机到整个车队，我们已帮助各种规模的企业</p> </div> <!-- Equipment Value --> <div class="text-center"> <div class="text-5xl font-black text-[#8B6F47] mb-4">5亿+</div> <h3 class="text-xl font-bold mb-2 text-[#2D1810]">设备融资</h3> <p class="text-gray-700">5亿令吉的设备帮助马来西亚企业成长</p> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">准备为您的设备融资吗？</h2> <p class="text-xl mb-8 opacity-90">加入数千家信任永兴信贷的马来西亚企业</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "\u7ACB\u5373WhatsApp\u6211\u4EEC", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "\u8054\u7CFB\u6211\u4EEC", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/about.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/about.astro";
const $$url = "/zh/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

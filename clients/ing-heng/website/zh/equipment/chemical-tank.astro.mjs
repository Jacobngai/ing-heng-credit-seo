/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { c as generateProductSchema, $ as $$BaseLayout, e as encodeJSONLD } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$RelatedEquipment } from '../../../chunks/RelatedEquipment_ZkPtOS9o.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { S as SITE_CONFIG } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ChemicalTank = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u4E13\u4E1A\u670D\u52A1";
  const pageDescription = "\u4E13\u4E1A\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u7B26\u5408\u5B89\u5168\u6807\u51C6\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u4E13\u4E1A\u56E2\u961F\u670D\u52A1\u3002";
  const keywords = ["\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44", "\u5371\u9669\u54C1\u8FD0\u8F93\u878D\u8D44", "\u7F50\u8F66\u8D37\u6B3E", "\u5DE5\u4E1A\u8F66\u8F86\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44", url: "/zh/equipment/chemical-tank" }
  ];
  const benefits = [
    { icon: "shield", title: "\u5B89\u5168\u6807\u51C6\u8BA4\u8BC1", description: "\u878D\u8D44\u7B26\u5408\u9A6C\u6765\u897F\u4E9A\u5316\u5B66\u54C1\u8FD0\u8F93\u5B89\u5168\u6807\u51C6\u7684\u7F50\u8F66\u3002\u786E\u4FDD\u5408\u89C4\u7ECF\u8425\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u51CF\u5C11\u521D\u59CB\u6295\u8D44\uFF0C\u52A0\u5FEB\u4E1A\u52A1\u6269\u5C55\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E13\u4E1A\u56E2\u961F\u5FEB\u901F\u5904\u7406\uFF0C\u4E86\u89E3\u5316\u5DE5\u884C\u4E1A\u9700\u6C42\u300224\u5C0F\u65F6\u5185\u83B7\u5F97\u56DE\u590D\u3002" },
    { icon: "calendar", title: "\u957F\u671F\u8FD8\u6B3E", description: "\u6700\u957F60\u4E2A\u6708\u8FD8\u6B3E\u671F\u3002\u6839\u636E\u60A8\u7684\u8FD0\u8F93\u5408\u540C\u5B89\u6392\u8FD8\u6B3E\u8BA1\u5212\u3002" },
    { icon: "users", title: "\u884C\u4E1A\u4E13\u4E1A\u77E5\u8BC6", description: "\u6DF1\u5165\u4E86\u89E3\u5316\u5DE5\u8FD0\u8F93\u884C\u4E1A\uFF0C\u63D0\u4F9B\u4E13\u4E1A\u5EFA\u8BAE\u548C\u652F\u6301\u3002" },
    { icon: "clipboard", title: "\u5168\u7A0B\u534F\u52A9", description: "\u4ECE\u7533\u8BF7\u5230\u63D0\u8F66\u5168\u7A0B\u534F\u52A9\u3002\u5305\u62EC\u4FDD\u9669\u548C\u8BB8\u53EF\u8BC1\u7533\u8BF7\u6307\u5BFC\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u7B26\u5408\u5B89\u5168\u6807\u51C6\u3002\u6C38\u5174\u4FE1\u8D37\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/chemical-tank-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "200000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u5B89\u5168\u6807\u51C6 | \u6C38\u5174\u4FE1\u8D37\u4E13\u4E1A\u670D\u52A1", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u5316\u5B66\u54C1\u7F50\u8F66\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5B89\u5168\u8BA4\u8BC1"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
化学品罐车融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为化工运输公司提供专业融资服务。我们了解行业要求，确保您获得符合标准的罐车设备。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Tank Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的化学品罐车类型</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">酸性化学品罐车</h4> <p class="text-[#4F3E29] mb-4">专用于运输酸性化学品，符合腐蚀性材料运输标准。</p> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">碱性化学品罐车</h4> <p class="text-[#4F3E29] mb-4">适用于碱性化学品运输，特殊内衬保护。</p> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">易燃液体罐车</h4> <p class="text-[#4F3E29] mb-4">符合易燃物品运输安全标准。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">食品级化学品罐车</h4> <p class="text-[#4F3E29] mb-4">食品工业用化学品专用，符合食品安全标准。</p> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">工业溶剂罐车</h4> <p class="text-[#4F3E29] mb-4">工业溶剂专用运输，防渗漏设计。</p> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">多隔间罐车</h4> <p class="text-[#4F3E29]">可同时运输多种不同化学品。</p> </div> </div> </div> <!-- Safety & Compliance --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-red-500"> <h3 class="text-2xl font-bold text-primary mb-6">安全与合规要求</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-red-600 mb-3">安全标准</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• DOT认证罐车</li> <li>• 防爆电气系统</li> <li>• 紧急泄压系统</li> <li>• 防静电接地</li> </ul> </div> <div> <h4 class="text-lg font-bold text-red-600 mb-3">合规文件</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 危险品运输许可</li> <li>• 司机ADR认证</li> <li>• 环境合规证书</li> <li>• 保险覆盖证明</li> </ul> </div> </div> </div> <!-- Financing Benefits --> <div class="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">融资优势</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">RM 100K+</div> <div class="font-semibold mb-2">融资额度</div> <div class="text-sm opacity-90">适合各种规模罐车</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">7-12%</div> <div class="font-semibold mb-2">年利率</div> <div class="text-sm opacity-90">竞争性利率</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">24小时</div> <div class="font-semibold mb-2">批准时间</div> <div class="text-sm opacity-90">快速决定</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
开始您的化学品罐车融资申请
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷专业团队为您提供最适合的融资方案和全程支持。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请化学品罐车融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "chemical-tank" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取专业融资建议
</h2> <p class="text-[#4F3E29]">
填写表格，我们的化工运输融资专家将与您联系
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/chemical-tank.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/chemical-tank.astro";
const $$url = "/zh/equipment/chemical-tank";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChemicalTank,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

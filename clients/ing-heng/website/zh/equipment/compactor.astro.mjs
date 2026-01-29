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
const $$Compactor = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u538B\u8DEF\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u9053\u8DEF\u5EFA\u8BBE\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u538B\u8DEF\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u9053\u8DEF\u5EFA\u8BBE\u9879\u76EE\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u57FA\u5EFA\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u538B\u8DEF\u673A\u878D\u8D44", "\u538B\u5B9E\u673A\u8D37\u6B3E", "\u9053\u8DEF\u5EFA\u8BBE\u8BBE\u5907", "\u57FA\u7840\u8BBE\u65BD\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u538B\u8DEF\u673A\u878D\u8D44", url: "/zh/equipment/compactor" }
  ];
  const benefits = [
    { icon: "road", title: "\u9053\u8DEF\u5EFA\u8BBE\u4E13\u5BB6", description: "\u4E13\u95E8\u670D\u52A1\u9053\u8DEF\u5EFA\u8BBE\u627F\u5305\u5546\uFF0C\u4E86\u89E3\u57FA\u7840\u8BBE\u65BD\u9879\u76EE\u9700\u6C42\u548C\u5468\u671F\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u4FDD\u7559\u73B0\u91D1\u7528\u4E8E\u5176\u4ED6\u9879\u76EE\u6295\u8D44\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u5FEB\u901F\u5904\u7406\u6279\u51C6\uFF0C\u914D\u5408\u653F\u5E9C\u9879\u76EE\u65F6\u95F4\u8981\u6C42\u300224-48\u5C0F\u65F6\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u9879\u76EE\u914D\u5957\u671F\u9650", description: "12-60\u4E2A\u6708\u7075\u6D3B\u671F\u9650\uFF0C\u53EF\u914D\u5408\u957F\u671F\u57FA\u5EFA\u9879\u76EE\u5468\u671F\u3002" },
    { icon: "shield", title: "\u653F\u5E9C\u9879\u76EE\u652F\u6301", description: "\u652F\u6301\u653F\u5E9C\u57FA\u5EFA\u9879\u76EE\u878D\u8D44\uFF0C\u5305\u62EC\u9053\u8DEF\u3001\u673A\u573A\u3001\u6E2F\u53E3\u5EFA\u8BBE\u3002" },
    { icon: "users", title: "\u5168\u7A0B\u6280\u672F\u652F\u6301", description: "\u63D0\u4F9B\u8BBE\u5907\u9009\u62E9\u5EFA\u8BAE\u548C\u64CD\u4F5C\u57F9\u8BAD\u652F\u6301\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u538B\u8DEF\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u538B\u8DEF\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u9053\u8DEF\u5EFA\u8BBE\u9879\u76EE\u3002\u6C38\u5174\u4FE1\u8D37\u57FA\u5EFA\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/compactor-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "80000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u538B\u8DEF\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u653F\u5E9C\u9879\u76EE\u652F\u6301 | \u6C38\u5174\u4FE1\u8D37\u4E13\u4E1A\u670D\u52A1", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u538B\u8DEF\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u653F\u5E9C\u9879\u76EE"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
压路机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为道路建设承包商提供压路机融资服务。支持大马基础设施发展，提升道路建设质量。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Compactor Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的压路机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">光轮压路机</h4> <p class="text-[#4F3E29] mb-4">适用于沥青路面压实，表面光滑平整。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">羊脚压路机</h4> <p class="text-[#4F3E29] mb-4">专用于粘性土壤压实，深层压实效果。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">振动压路机</h4> <p class="text-[#4F3E29] mb-4">高效压实，适用于各种材料和厚度。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">轮胎压路机</h4> <p class="text-[#4F3E29] mb-4">适用于沥青混合料压实，密实性好。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">小型压路机</h4> <p class="text-[#4F3E29] mb-4">人行道、停车场等小面积压实。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">组合式压路机</h4> <p class="text-[#4F3E29]">前轮光滑后轮振动，一机多用。</p> </div> </div> </div> <!-- Application Areas --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-green-500"> <h3 class="text-2xl font-bold text-primary mb-6">应用领域</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-green-600 mb-3">基础设施项目</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 高速公路建设</li> <li>• 城市道路翻新</li> <li>• 机场跑道建设</li> <li>• 港口码头工程</li> <li>• 铁路路基建设</li> </ul> </div> <div> <h4 class="text-lg font-bold text-green-600 mb-3">商业项目</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 工业园区建设</li> <li>• 住宅区道路</li> <li>• 购物中心停车场</li> <li>• 学校操场建设</li> <li>• 公园步道工程</li> </ul> </div> </div> </div> <!-- Brand & Specifications --> <div class="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">品牌与规格</h3> <div class="grid md:grid-cols-2 gap-8"> <div> <h4 class="text-lg font-bold mb-3">支持品牌</h4> <ul class="space-y-2"> <li>• 卡特彼勒 (CAT)</li> <li>• 沃尔沃 (Volvo)</li> <li>• BOMAG</li> <li>• HAMM</li> <li>• Dynapac</li> <li>• SAKAI</li> </ul> </div> <div> <h4 class="text-lg font-bold mb-3">规格范围</h4> <ul class="space-y-2"> <li>• 重量：1-30吨</li> <li>• 压实宽度：1-2.5米</li> <li>• 振动频率：25-70Hz</li> <li>• 功率：50-400马力</li> <li>• 行进速度：0-12km/h</li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资压路机，提升工程质量
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得高质量压路机，确保项目按时完成，质量达标。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请压路机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "compactor" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取压路机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的基建设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/compactor.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/compactor.astro";
const $$url = "/zh/equipment/compactor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Compactor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

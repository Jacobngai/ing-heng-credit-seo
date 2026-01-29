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
const $$TipperTruck = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u7FFB\u6597\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u5DE5\u7A0B\u8F66\u8F86\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u7FFB\u6597\u8F66\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u5EFA\u7B51\u548C\u91C7\u77FF\u8FD0\u8F93\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u5DE5\u7A0B\u8F66\u8F86\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u7FFB\u6597\u8F66\u878D\u8D44", "\u81EA\u5378\u8F66\u8D37\u6B3E", "\u5DE5\u7A0B\u8F66\u8F86\u878D\u8D44", "\u8FD0\u8F93\u8BBE\u5907\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u7FFB\u6597\u8F66\u878D\u8D44", url: "/zh/equipment/tipper-truck" }
  ];
  const benefits = [
    { icon: "truck", title: "\u5DE5\u7A0B\u8FD0\u8F93\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u5EFA\u7B51\u548C\u91C7\u77FF\u8FD0\u8F93\u9700\u6C42\uFF0C\u4E13\u95E8\u4E3A\u7FFB\u6597\u8F66\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u6269\u5927\u8FD0\u8F93\u80FD\u529B\u548C\u9879\u76EE\u627F\u63A5\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u5DE5\u7A0B\u9879\u76EE\u7D27\u6025\u6027\uFF0C\u5FEB\u901F\u5904\u7406\u8F66\u8F86\u878D\u8D44\u7533\u8BF7\u300224\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u5DE5\u7A0B\u9879\u76EE\u5468\u671F\u548C\u8FD0\u8425\u73B0\u91D1\u6D41\u3002" },
    { icon: "trending-up", title: "\u8FD0\u8F93\u6548\u7387", description: "\u4E13\u4E1A\u7FFB\u6597\u8F66\u663E\u8457\u63D0\u5347\u571F\u77F3\u65B9\u8FD0\u8F93\u6548\u7387\u548C\u9879\u76EE\u8FDB\u5EA6\u3002" },
    { icon: "shield", title: "\u8010\u7528\u53EF\u9760", description: "\u91CD\u578B\u8BBE\u8BA1\u786E\u4FDD\u5728\u6076\u52A3\u5DE5\u51B5\u4E0B\u957F\u671F\u7A33\u5B9A\u8FD0\u884C\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u7FFB\u6597\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u7FFB\u6597\u8F66\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u5EFA\u7B51\u91C7\u77FF\u8FD0\u8F93\u3002\u6C38\u5174\u4FE1\u8D37\u5DE5\u7A0B\u8F66\u8F86\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/tipper-truck-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "180000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u7FFB\u6597\u8F66\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u5DE5\u7A0B\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u8FD0\u8F93\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u7FFB\u6597\u8F66\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5DE5\u7A0B\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
翻斗车融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为建筑和采矿公司提供翻斗车融资服务。支持马来西亚基建发展，提升土石方运输效率。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Tipper Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的翻斗车类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">标准翻斗车</h4> <p class="text-[#4F3E29] mb-4">通用型自卸车，适合一般建筑工程。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">重型翻斗车</h4> <p class="text-[#4F3E29] mb-4">大载重量，适合采矿和大型工程。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">侧卸翻斗车</h4> <p class="text-[#4F3E29] mb-4">侧面倾卸，适合狭窄空间作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">半挂自卸车</h4> <p class="text-[#4F3E29] mb-4">大容量运输，长途土石方运输。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">矿用自卸车</h4> <p class="text-[#4F3E29] mb-4">专业采矿设计，超强承载能力。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">全地形翻斗车</h4> <p class="text-[#4F3E29]">适应恶劣地形，越野能力强。</p> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-brown-500"> <h3 class="text-2xl font-bold text-primary mb-6">应用领域</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-[#8B6F47] mb-3">建筑工程</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 土方挖运工程</li> <li>• 道路建设项目</li> <li>• 基础设施开发</li> <li>• 建筑垃圾清运</li> <li>• 混凝土运输</li> </ul> </div> <div> <h4 class="text-lg font-bold text-[#8B6F47] mb-3">采矿作业</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 矿石运输</li> <li>• 采石场作业</li> <li>• 砂石料运输</li> <li>• 废土清理</li> <li>• 原料供应链</li> </ul> </div> </div> </div> <!-- Performance Specifications --> <div class="bg-gradient-to-r from-brown-500 to-amber-600 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">性能规格</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">5-50吨</div> <div class="font-semibold mb-2">载重范围</div> <div class="text-sm opacity-90">根据型号不同</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">300-600马力</div> <div class="font-semibold mb-2">发动机功率</div> <div class="text-sm opacity-90">强劲动力</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">45°</div> <div class="font-semibold mb-2">倾卸角度</div> <div class="text-sm opacity-90">完全倾卸</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">100万公里</div> <div class="font-semibold mb-2">设计里程</div> <div class="text-sm opacity-90">超长寿命</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资翻斗车，提升运输效率
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得可靠翻斗车，提升土石方运输能力，加快工程进度。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请翻斗车融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "tipper-truck" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取翻斗车融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的工程车辆融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/tipper-truck.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/tipper-truck.astro";
const $$url = "/zh/equipment/tipper-truck";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TipperTruck,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

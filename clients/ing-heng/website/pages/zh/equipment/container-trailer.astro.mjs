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
const $$ContainerTrailer = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u7269\u6D41\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u6E2F\u53E3\u7269\u6D41\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u7269\u6D41\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44", "\u8D27\u67DC\u8F66\u8D37\u6B3E", "\u7269\u6D41\u8BBE\u5907\u878D\u8D44", "\u6E2F\u53E3\u8FD0\u8F93\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44", url: "/zh/equipment/container-trailer" }
  ];
  const benefits = [
    { icon: "truck", title: "\u7269\u6D41\u884C\u4E1A\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u6E2F\u53E3\u7269\u6D41\u8FD0\u8425\uFF0C\u4E13\u95E8\u4E3A\u96C6\u88C5\u7BB1\u8FD0\u8F93\u4E1A\u52A1\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u6269\u5C55\u8F66\u961F\uFF0C\u6293\u4F4F\u66F4\u591A\u8FD0\u8F93\u5408\u540C\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u7269\u6D41\u884C\u4E1A\u65F6\u95F4\u654F\u611F\u6027\uFF0C\u5FEB\u901F\u5904\u7406\u5BA1\u6279\u300224-48\u5C0F\u65F6\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u957F\u671F\u8FD0\u8F93\u5408\u540C\u5B89\u6392\u3002" },
    { icon: "globe", title: "\u6E2F\u53E3\u4E1A\u52A1\u652F\u6301", description: "\u652F\u6301\u5DF4\u751F\u6E2F\u3001\u69DF\u57CE\u6E2F\u3001\u67D4\u4F5B\u6E2F\u7B49\u4E3B\u8981\u6E2F\u53E3\u7684\u7269\u6D41\u4E1A\u52A1\u3002" },
    { icon: "shield", title: "\u4FDD\u9669\u914D\u5957", description: "\u534F\u52A9\u5B89\u6392\u8D27\u7269\u8FD0\u8F93\u4FDD\u9669\u548C\u7B2C\u4E09\u8005\u8D23\u4EFB\u4FDD\u9669\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u6E2F\u53E3\u7269\u6D41\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D37\u7269\u6D41\u4E13\u5BB6\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/container-trailer-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "120000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u6E2F\u53E3\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u7269\u6D41\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u96C6\u88C5\u7BB1\u62D6\u8F66\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u7269\u6D41\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
集装箱拖车融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为物流公司提供集装箱拖车融资服务。支持马来西亚港口贸易发展，助您扩大运输业务规模。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Trailer Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的集装箱拖车类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">20尺集装箱拖车</h4> <p class="text-[#4F3E29] mb-4">标准20尺货柜专用，适合城市配送。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">40尺集装箱拖车</h4> <p class="text-[#4F3E29] mb-4">40尺货柜专用，长途运输主力。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">20/40尺通用拖车</h4> <p class="text-[#4F3E29] mb-4">可调节长度，灵活运输不同尺寸货柜。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">45尺集装箱拖车</h4> <p class="text-[#4F3E29] mb-4">高立方货柜专用，装载量更大。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">低底盘拖车</h4> <p class="text-[#4F3E29] mb-4">低重心设计，适合重货运输。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">多轴拖车</h4> <p class="text-[#4F3E29]">超重货柜专用，承载能力更强。</p> </div> </div> </div> <!-- Port Operations --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-blue-500"> <h3 class="text-2xl font-bold text-primary mb-6">港口运营支持</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-blue-600 mb-3">主要港口服务</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 巴生港 (Port Klang)</li> <li>• 丹戎帕拉帕斯港 (PTP)</li> <li>• 槟城港 (Penang Port)</li> <li>• 关丹港 (Kuantan Port)</li> <li>• 沙巴哥打京那巴鲁港</li> </ul> </div> <div> <h4 class="text-lg font-bold text-blue-600 mb-3">运输路线</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 港口到工厂直送</li> <li>• 内陆集装箱堆场</li> <li>• 保税仓库运输</li> <li>• 边境贸易运输</li> <li>• 空港货物接驳</li> </ul> </div> </div> </div> <!-- Specifications & Features --> <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">技术规格与特点</h3> <div class="grid md:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold mb-3">承载能力</h4> <ul class="space-y-2"> <li>• 载重：30-80吨</li> <li>• 轴重分配优化</li> <li>• 超载保护系统</li> </ul> </div> <div> <h4 class="text-lg font-bold mb-3">安全特点</h4> <ul class="space-y-2"> <li>• 货柜锁定装置</li> <li>• ABS防锁制动</li> <li>• LED安全警示灯</li> </ul> </div> <div> <h4 class="text-lg font-bold mb-3">维护特点</h4> <ul class="space-y-2"> <li>• 免润滑轴承</li> <li>• 耐腐蚀涂层</li> <li>• 长寿命轮胎</li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
扩展物流车队，抓住贸易机遇
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您快速获得集装箱拖车，扩大运输能力，增加业务收入。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请集装箱拖车融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "container-trailer" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取集装箱拖车融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的物流设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/container-trailer.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/container-trailer.astro";
const $$url = "/zh/equipment/container-trailer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContainerTrailer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

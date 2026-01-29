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
const $$Grab = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u6293\u6597\u8BBE\u5907\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u7269\u6599\u5904\u7406\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u6293\u6597\u8BBE\u5907\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u7269\u6599\u5904\u7406\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u5DE5\u4E1A\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u6293\u6597\u878D\u8D44", "\u6293\u94A2\u673A\u8D37\u6B3E", "\u7269\u6599\u5904\u7406\u8BBE\u5907", "\u5E9F\u6599\u5904\u7406\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u6293\u6597\u8BBE\u5907\u878D\u8D44", url: "/zh/equipment/grab" }
  ];
  const benefits = [
    { icon: "cog", title: "\u5DE5\u4E1A\u8BBE\u5907\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u7269\u6599\u5904\u7406\u884C\u4E1A\uFF0C\u4E13\u95E8\u4E3A\u6293\u6597\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u63D0\u5347\u7269\u6599\u5904\u7406\u80FD\u529B\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E13\u4E1A\u56E2\u961F\u5FEB\u901F\u5904\u7406\uFF0C\u4E86\u89E3\u5DE5\u4E1A\u8BBE\u5907\u6025\u9700\u6027\u300224-48\u5C0F\u65F6\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u6839\u636E\u8BBE\u5907\u4F7F\u7528\u9891\u7387\u548C\u9879\u76EE\u5468\u671F\u5B89\u6392\u3002" },
    { icon: "recycle", title: "\u73AF\u4FDD\u652F\u6301", description: "\u652F\u6301\u5E9F\u6599\u56DE\u6536\u548C\u73AF\u4FDD\u9879\u76EE\uFF0C\u7B26\u5408\u53EF\u6301\u7EED\u53D1\u5C55\u9700\u6C42\u3002" },
    { icon: "shield", title: "\u8BBE\u5907\u4FDD\u503C", description: "\u9AD8\u54C1\u8D28\u6293\u6597\u8BBE\u5907\u4FDD\u503C\u6027\u597D\uFF0C\u964D\u4F4E\u878D\u8D44\u98CE\u9669\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u6293\u6597\u8BBE\u5907\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u6293\u6597\u8BBE\u5907\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u7269\u6599\u5904\u7406\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D37\u5DE5\u4E1A\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/grab-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "100000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u6293\u6597\u8BBE\u5907\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u7269\u6599\u5904\u7406 | \u6C38\u5174\u4FE1\u8D37\u5DE5\u4E1A\u4E13\u4E1A", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u6293\u6597\u8BBE\u5907\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5DE5\u4E1A\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
抓斗设备融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为工业公司提供抓斗设备融资服务。支持物料处理、废料回收和工业生产效率提升。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Grab Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的抓斗设备类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">废钢抓斗机</h4> <p class="text-[#4F3E29] mb-4">专门处理废钢铁，强力抓取能力，适合回收站。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">木材抓斗机</h4> <p class="text-[#4F3E29] mb-4">原木搬运专用，适合锯木厂和港口作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">垃圾抓斗机</h4> <p class="text-[#4F3E29] mb-4">垃圾处理专用，环保作业，城市清洁。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">石料抓斗机</h4> <p class="text-[#4F3E29] mb-4">采石场专用，处理各种规格石料。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">集装箱抓斗机</h4> <p class="text-[#4F3E29] mb-4">港口货柜搬运，高效物流作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">多功能抓斗机</h4> <p class="text-[#4F3E29]">可换装不同抓斗，适应多种作业需求。</p> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-green-500"> <h3 class="text-2xl font-bold text-primary mb-6">应用行业</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-green-600 mb-3">废料回收行业</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 废钢铁回收站</li> <li>• 有色金属回收</li> <li>• 电子废料处理</li> <li>• 汽车拆解场</li> <li>• 建筑废料回收</li> </ul> </div> <div> <h4 class="text-lg font-bold text-green-600 mb-3">工业生产</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 钢铁厂原料处理</li> <li>• 造纸厂原料搬运</li> <li>• 港口货物装卸</li> <li>• 采石场作业</li> <li>• 木材加工厂</li> </ul> </div> </div> </div> <!-- Technical Specifications --> <div class="bg-gradient-to-r from-gray-600 to-blue-600 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">技术规格</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">0.5-10</div> <div class="font-semibold mb-2">抓取量（立方米）</div> <div class="text-sm opacity-90">根据型号不同</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">360°</div> <div class="font-semibold mb-2">旋转角度</div> <div class="text-sm opacity-90">全方位作业</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">20-50T</div> <div class="font-semibold mb-2">载重能力</div> <div class="text-sm opacity-90">根据设备型号</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">1000+</div> <div class="font-semibold mb-2">作业小时/月</div> <div class="text-sm opacity-90">高耐用性</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
提升物料处理效率
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得高效抓斗设备，提升作业效率，扩大业务规模。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请抓斗设备融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "grab" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取抓斗设备融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的工业设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/grab.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/grab.astro";
const $$url = "/zh/equipment/grab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Grab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

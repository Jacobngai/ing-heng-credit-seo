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
const $$KomatsuPc350 = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u5C0F\u677EPC350\u6316\u6398\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u65E5\u672C\u54C1\u8D28";
  const pageDescription = "\u4E13\u4E1A\u5C0F\u677EPC350\u6316\u6398\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u65E5\u672C\u54C1\u8D28\u4FDD\u8BC1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u5C0F\u677E\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u5C0F\u677EPC350\u878D\u8D44", "\u5C0F\u677E\u6316\u6398\u673A\u8D37\u6B3E", "PC350\u878D\u8D44", "Komatsu\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u5C0F\u677EPC350\u878D\u8D44", url: "/zh/equipment/komatsu-pc350" }
  ];
  const benefits = [
    { icon: "award", title: "\u65E5\u672C\u54C1\u8D28", description: "\u5C0F\u677EPC350\u4EAB\u8A89\u5168\u7403\u7684\u65E5\u672C\u54C1\u8D28\uFF0C\u53EF\u9760\u6027\u548C\u8010\u7528\u6027\u884C\u4E1A\u9886\u5148\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u6295\u8D44\u4E16\u754C\u7EA7\u8BBE\u5907\uFF0C\u65E0\u9700\u5927\u7B14\u524D\u671F\u6295\u5165\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E13\u4E1A\u56E2\u961F\u719F\u6089\u5C0F\u677E\u8BBE\u5907\u4EF7\u503C\uFF0C\u5FEB\u901F\u6279\u51C6\u878D\u8D44\u7533\u8BF7\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408PC350\u7684\u957F\u4F7F\u7528\u5BFF\u547D\u3002" },
    { icon: "cog", title: "\u5148\u8FDB\u6280\u672F", description: "\u642D\u8F7D\u6700\u65B0\u6DB2\u538B\u6280\u672F\u548C\u667A\u80FD\u63A7\u5236\u7CFB\u7EDF\uFF0C\u63D0\u5347\u4F5C\u4E1A\u6548\u7387\u3002" },
    { icon: "shield", title: "\u4FDD\u503C\u6027\u5F3A", description: "\u5C0F\u677E\u54C1\u724C\u4FDD\u503C\u6027\u6781\u4F73\uFF0C\u964D\u4F4E\u878D\u8D44\u98CE\u9669\u548C\u6B8B\u503C\u62C5\u5FE7\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u5C0F\u677EPC350\u6316\u6398\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u5C0F\u677EPC350\u6316\u6398\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u65E5\u672C\u54C1\u8D28\u4FDD\u8BC1\u3002\u6C38\u5174\u4FE1\u8D37\u5C0F\u677E\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/komatsu-pc350-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "800000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u5C0F\u677EPC350\u6316\u6398\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u65E5\u672C\u54C1\u8D28 | \u6C38\u5174\u4FE1\u8D37\u5C0F\u677E\u4E13\u4E1A", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u5C0F\u677EPC350\u6316\u6398\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5C0F\u677E\u4E13\u4E1A"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
小松PC350挖掘机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为承包商提供小松PC350挖掘机融资服务。投资世界知名品牌，享受日本技术的可靠性和高效率。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- PC350 Specifications --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">小松PC350技术规格</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">基本参数</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 工作重量：34.9吨</li> <li>• 发动机功率：200kW (268hp)</li> <li>• 挖掘半径：10.85米</li> <li>• 最大挖掘深度：6.98米</li> </ul> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">性能特点</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 燃油效率优异</li> <li>• 液压系统先进</li> <li>• 操作舒适性佳</li> <li>• 维护成本低</li> </ul> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">智能功能</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• KOMTRAX远程监控</li> <li>• 自动怠速控制</li> <li>• 工作模式选择</li> <li>• 故障自诊断系统</li> </ul> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-orange-500"> <h3 class="text-2xl font-bold text-primary mb-6">PC350应用场合</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-orange-600 mb-3">建设项目</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 大型土方工程</li> <li>• 道路建设项目</li> <li>• 机场建设工程</li> <li>• 港口码头建设</li> <li>• 工业园区开发</li> </ul> </div> <div> <h4 class="text-lg font-bold text-orange-600 mb-3">专业作业</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 采石场开采</li> <li>• 河道疏浚清淤</li> <li>• 建筑拆除工程</li> <li>• 管道铺设工程</li> <li>• 山体开挖作业</li> </ul> </div> </div> </div> <!-- Komatsu Advantages --> <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">小松品牌优势</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">90+年</div> <div class="font-semibold mb-2">品牌历史</div> <div class="text-sm opacity-90">工程机械先锋</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">全球第2</div> <div class="font-semibold mb-2">市场地位</div> <div class="text-sm opacity-90">工程机械品牌</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">15000小时</div> <div class="font-semibold mb-2">平均寿命</div> <div class="text-sm opacity-90">耐用性证明</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">85%</div> <div class="font-semibold mb-2">残值保持</div> <div class="text-sm opacity-90">5年后价值</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资小松PC350，品质与效率并重
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您拥有世界级的小松PC350挖掘机，享受日本技术带来的高效率和高可靠性。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请小松PC350挖掘机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "komatsu-pc350" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取小松PC350融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的小松设备融资专家将为您提供专业服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/komatsu-pc350.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/komatsu-pc350.astro";
const $$url = "/zh/equipment/komatsu-pc350";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KomatsuPc350,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

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
const $$SideLoader = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u4FA7\u88C5\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u7269\u6D41\u8BBE\u5907\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u4FA7\u88C5\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u96C6\u88C5\u7BB1\u7269\u6D41\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u7269\u6D41\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u4FA7\u88C5\u673A\u878D\u8D44", "\u96C6\u88C5\u7BB1\u88C5\u5378\u8BBE\u5907", "\u7269\u6D41\u8BBE\u5907\u878D\u8D44", "\u6E2F\u53E3\u8BBE\u5907\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u4FA7\u88C5\u673A\u878D\u8D44", url: "/zh/equipment/side-loader" }
  ];
  const benefits = [
    { icon: "truck", title: "\u7269\u6D41\u4E1A\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u96C6\u88C5\u7BB1\u7269\u6D41\u8FD0\u8425\uFF0C\u4E13\u95E8\u4E3A\u4FA7\u88C5\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u63D0\u5347\u8D27\u7269\u88C5\u5378\u6548\u7387\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u7269\u6D41\u4E1A\u65F6\u95F4\u654F\u611F\u6027\uFF0C\u5FEB\u901F\u5904\u7406\u8BBE\u5907\u878D\u8D44\u7533\u8BF7\u300224\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u8BBE\u5907\u4F7F\u7528\u5BFF\u547D\u548C\u8FD0\u8425\u5468\u671F\u3002" },
    { icon: "trending-up", title: "\u6548\u7387\u63D0\u5347", description: "\u4FA7\u88C5\u6280\u672F\u663E\u8457\u63D0\u5347\u96C6\u88C5\u7BB1\u88C5\u5378\u6548\u7387\u548C\u64CD\u4F5C\u5B89\u5168\u6027\u3002" },
    { icon: "shield", title: "\u5B89\u5168\u53EF\u9760", description: "\u5148\u8FDB\u7684\u5B89\u5168\u7CFB\u7EDF\u786E\u4FDD\u64CD\u4F5C\u4EBA\u5458\u548C\u8D27\u7269\u5B89\u5168\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u4FA7\u88C5\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u4FA7\u88C5\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u96C6\u88C5\u7BB1\u7269\u6D41\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D37\u7269\u6D41\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/side-loader-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "250000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u4FA7\u88C5\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u7269\u6D41\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u96C6\u88C5\u7BB1\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u4FA7\u88C5\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u7269\u6D41\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
侧装机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为物流公司提供侧装机融资服务。支持马来西亚集装箱物流发展，提升货物装卸效率和安全性。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Side Loader Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的侧装机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">空箱侧装机</h4> <p class="text-[#4F3E29] mb-4">专门处理空集装箱，高效堆叠装卸。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">重箱侧装机</h4> <p class="text-[#4F3E29] mb-4">重载集装箱专用，承载能力强。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">跨运车</h4> <p class="text-[#4F3E29] mb-4">可跨越集装箱作业，灵活操作。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">正面吊</h4> <p class="text-[#4F3E29] mb-4">正面装卸，适合堆场作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">堆高机</h4> <p class="text-[#4F3E29] mb-4">高层堆叠，节省存储空间。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">移动式侧装机</h4> <p class="text-[#4F3E29]">轮胎式设计，移动灵活。</p> </div> </div> </div> <!-- Technical Features --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-cyan-500"> <h3 class="text-2xl font-bold text-primary mb-6">技术特点</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-cyan-600 mb-3">操作优势</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 360度视野设计</li> <li>• 精确定位系统</li> <li>• 自动平衡控制</li> <li>• 防碰撞系统</li> <li>• 低噪音运行</li> </ul> </div> <div> <h4 class="text-lg font-bold text-cyan-600 mb-3">效率特点</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 快速装卸循环</li> <li>• 多层堆叠能力</li> <li>• 高精度操作</li> <li>• 低燃料消耗</li> <li>• 最小化地面压力</li> </ul> </div> </div> </div> <!-- Performance Metrics --> <div class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">性能指标</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">45吨</div> <div class="font-semibold mb-2">最大载重</div> <div class="text-sm opacity-90">重箱处理能力</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">6层</div> <div class="font-semibold mb-2">堆叠高度</div> <div class="text-sm opacity-90">空间利用最大化</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">25次/小时</div> <div class="font-semibold mb-2">装卸效率</div> <div class="text-sm opacity-90">高效作业</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">15年</div> <div class="font-semibold mb-2">使用寿命</div> <div class="text-sm opacity-90">长期投资价值</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资侧装机，提升物流效率
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得先进侧装设备，提升集装箱处理能力，扩大物流业务。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请侧装机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "side-loader" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取侧装机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的物流设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/side-loader.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/side-loader.astro";
const $$url = "/zh/equipment/side-loader";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SideLoader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

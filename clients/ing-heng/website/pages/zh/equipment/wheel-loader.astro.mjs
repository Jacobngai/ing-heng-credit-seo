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
const $$WheelLoader = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u88C5\u8F7D\u8BBE\u5907\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u5EFA\u7B51\u548C\u7269\u6599\u88C5\u5378\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u88C5\u8F7D\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44", "\u94F2\u8F66\u8D37\u6B3E", "\u88C5\u8F7D\u8BBE\u5907\u878D\u8D44", "\u7269\u6599\u88C5\u5378\u8BBE\u5907"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44", url: "/zh/equipment/wheel-loader" }
  ];
  const benefits = [
    { icon: "cog", title: "\u88C5\u8F7D\u8BBE\u5907\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u88C5\u8F7D\u4F5C\u4E1A\u9700\u6C42\uFF0C\u4E13\u95E8\u4E3A\u8F6E\u5F0F\u88C5\u8F7D\u673A\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u63D0\u5347\u7269\u6599\u88C5\u5378\u6548\u7387\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u5EFA\u7B51\u4E1A\u8BBE\u5907\u6025\u9700\u6027\uFF0C\u5FEB\u901F\u5904\u7406\u878D\u8D44\u7533\u8BF7\u300224\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u8BBE\u5907\u4F7F\u7528\u5BFF\u547D\u548C\u9879\u76EE\u5468\u671F\u3002" },
    { icon: "trending-up", title: "\u4F5C\u4E1A\u6548\u7387", description: "\u8F6E\u5F0F\u88C5\u8F7D\u673A\u663E\u8457\u63D0\u5347\u7269\u6599\u88C5\u5378\u6548\u7387\u548C\u4F5C\u4E1A\u673A\u52A8\u6027\u3002" },
    { icon: "shield", title: "\u591A\u529F\u80FD\u6027", description: "\u914D\u5907\u591A\u79CD\u5C5E\u5177\uFF0C\u9002\u5E94\u5404\u79CD\u88C5\u8F7D\u548C\u7269\u6599\u5904\u7406\u9700\u6C42\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u5EFA\u7B51\u7269\u6599\u88C5\u5378\u3002\u6C38\u5174\u4FE1\u8D37\u88C5\u8F7D\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/wheel-loader-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "200000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u88C5\u8F7D\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u8BBE\u5907\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u8F6E\u5F0F\u88C5\u8F7D\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u88C5\u8F7D\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
轮式装载机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为建筑和采矿公司提供轮式装载机融资服务。支持马来西亚建设项目，提升物料装卸和运输效率。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Loader Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的轮式装载机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">小型装载机</h4> <p class="text-[#4F3E29] mb-4">1-3吨级，适合城市建设和狭小空间。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">中型装载机</h4> <p class="text-[#4F3E29] mb-4">3-6吨级，通用型建筑工程主力。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">大型装载机</h4> <p class="text-[#4F3E29] mb-4">6-12吨级，重型工程和采矿作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">高卸装载机</h4> <p class="text-[#4F3E29] mb-4">高举升设计，适合高位卸料作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">矿用装载机</h4> <p class="text-[#4F3E29] mb-4">重型设计，专业采矿和采石场。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">多功能装载机</h4> <p class="text-[#4F3E29]">可换装多种属具，一机多用。</p> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-amber-500"> <h3 class="text-2xl font-bold text-primary mb-6">应用领域</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-amber-600 mb-3">建筑工程</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 土方装卸作业</li> <li>• 建筑材料搬运</li> <li>• 混凝土装载</li> <li>• 场地平整作业</li> <li>• 垃圾清理工程</li> </ul> </div> <div> <h4 class="text-lg font-bold text-amber-600 mb-3">工业应用</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 采石场作业</li> <li>• 砂石料装卸</li> <li>• 港口货物装卸</li> <li>• 废料回收处理</li> <li>• 农业物料搬运</li> </ul> </div> </div> </div> <!-- Technical Advantages --> <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">技术优势</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">0.5-8m³</div> <div class="font-semibold mb-2">铲斗容量</div> <div class="text-sm opacity-90">根据型号不同</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">40km/h</div> <div class="font-semibold mb-2">最高行驶速度</div> <div class="text-sm opacity-90">高机动性</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">360°</div> <div class="font-semibold mb-2">转向角度</div> <div class="text-sm opacity-90">灵活操作</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">12000小时</div> <div class="font-semibold mb-2">设计寿命</div> <div class="text-sm opacity-90">耐用可靠</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资轮式装载机，提升作业效率
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得高效装载设备，提升物料处理能力，加速项目进度。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请轮式装载机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "wheel-loader" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取轮式装载机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的装载设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/wheel-loader.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/wheel-loader.astro";
const $$url = "/zh/equipment/wheel-loader";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WheelLoader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

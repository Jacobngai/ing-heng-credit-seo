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
const $$SandMixer = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u5EFA\u7B51\u8BBE\u5907\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u5EFA\u7B51\u65BD\u5DE5\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u5EFA\u7B51\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44", "\u6DF7\u51DD\u571F\u8BBE\u5907\u8D37\u6B3E", "\u5EFA\u7B51\u673A\u68B0\u878D\u8D44", "\u6405\u62CC\u8BBE\u5907\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44", url: "/zh/equipment/sand-mixer" }
  ];
  const benefits = [
    { icon: "hammer", title: "\u5EFA\u7B51\u4E1A\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u5EFA\u7B51\u65BD\u5DE5\u9700\u6C42\uFF0C\u4E13\u95E8\u4E3A\u6405\u62CC\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u63D0\u5347\u65BD\u5DE5\u6548\u7387\u548C\u6DF7\u51DD\u571F\u8D28\u91CF\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u5EFA\u7B51\u4E1A\u7D27\u6025\u9700\u6C42\uFF0C\u5FEB\u901F\u5904\u7406\u8BBE\u5907\u878D\u8D44\u7533\u8BF7\u300224\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u5EFA\u7B51\u9879\u76EE\u5468\u671F\u548C\u73B0\u91D1\u6D41\u3002" },
    { icon: "trending-up", title: "\u6548\u7387\u63D0\u5347", description: "\u673A\u68B0\u5316\u6405\u62CC\u663E\u8457\u63D0\u5347\u65BD\u5DE5\u6548\u7387\u548C\u6DF7\u51DD\u571F\u4E00\u81F4\u6027\u3002" },
    { icon: "shield", title: "\u8D28\u91CF\u4FDD\u8BC1", description: "\u6807\u51C6\u5316\u6405\u62CC\u786E\u4FDD\u6DF7\u51DD\u571F\u8D28\u91CF\uFF0C\u7B26\u5408\u5EFA\u7B51\u6807\u51C6\u8981\u6C42\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u5EFA\u7B51\u65BD\u5DE5\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D37\u5EFA\u7B51\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/sand-mixer-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "60000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u5EFA\u7B51\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u65BD\u5DE5\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u6C99\u6D46\u6405\u62CC\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5EFA\u7B51\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
沙浆搅拌机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为建筑承包商提供沙浆搅拌机融资服务。提升施工效率，确保混凝土质量，助您承接更多项目。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Mixer Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的搅拌机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">强制式搅拌机</h4> <p class="text-[#4F3E29] mb-4">高质量混凝土搅拌，适合预制构件。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">自落式搅拌机</h4> <p class="text-[#4F3E29] mb-4">经济型选择，适合一般建筑项目。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">双卧轴搅拌机</h4> <p class="text-[#4F3E29] mb-4">高效搅拌，适合大批量生产。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">行星式搅拌机</h4> <p class="text-[#4F3E29] mb-4">均匀搅拌，适合特殊混凝土。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">移动式搅拌机</h4> <p class="text-[#4F3E29] mb-4">现场搅拌，适合多工地作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">干粉砂浆搅拌机</h4> <p class="text-[#4F3E29]">专用干混砂浆生产设备。</p> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-gray-500"> <h3 class="text-2xl font-bold text-primary mb-6">应用领域</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-gray-600 mb-3">建筑工程</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 住宅建设项目</li> <li>• 商业建筑施工</li> <li>• 基础设施建设</li> <li>• 道路工程项目</li> <li>• 桥梁隧道工程</li> </ul> </div> <div> <h4 class="text-lg font-bold text-gray-600 mb-3">专业生产</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 预制构件厂</li> <li>• 商品混凝土站</li> <li>• 干粉砂浆厂</li> <li>• 水泥制品厂</li> <li>• 建材生产企业</li> </ul> </div> </div> </div> <!-- Technical Specifications --> <div class="bg-gradient-to-r from-gray-500 to-blue-500 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">技术规格</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">0.25-3m³</div> <div class="font-semibold mb-2">容量范围</div> <div class="text-sm opacity-90">根据型号不同</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">30-150s</div> <div class="font-semibold mb-2">搅拌周期</div> <div class="text-sm opacity-90">高效作业</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">95%+</div> <div class="font-semibold mb-2">搅拌均匀度</div> <div class="text-sm opacity-90">质量保证</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">10年+</div> <div class="font-semibold mb-2">使用寿命</div> <div class="text-sm opacity-90">耐用可靠</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资搅拌设备，提升施工质量
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得高效搅拌设备，确保混凝土质量，提升项目竞争力。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请沙浆搅拌机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "sand-mixer" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取沙浆搅拌机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的建筑设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/sand-mixer.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/sand-mixer.astro";
const $$url = "/zh/equipment/sand-mixer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SandMixer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

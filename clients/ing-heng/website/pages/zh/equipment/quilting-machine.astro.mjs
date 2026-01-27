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
const $$QuiltingMachine = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u7ED7\u7F1D\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u7EBA\u7EC7\u8BBE\u5907\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u7ED7\u7F1D\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u7EBA\u7EC7\u5236\u9020\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u7EBA\u7EC7\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u7ED7\u7F1D\u673A\u878D\u8D44", "\u7EBA\u7EC7\u8BBE\u5907\u8D37\u6B3E", "\u5236\u8863\u8BBE\u5907\u878D\u8D44", "\u7EBA\u7EC7\u673A\u68B0\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u7ED7\u7F1D\u673A\u878D\u8D44", url: "/zh/equipment/quilting-machine" }
  ];
  const benefits = [
    { icon: "scissors", title: "\u7EBA\u7EC7\u4E1A\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u7EBA\u7EC7\u5236\u9020\u4E1A\uFF0C\u4E13\u95E8\u4E3A\u7ED7\u7F1D\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u63D0\u5347\u751F\u4EA7\u80FD\u529B\u548C\u4EA7\u54C1\u8D28\u91CF\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u7EBA\u7EC7\u4E1A\u5B63\u8282\u6027\u9700\u6C42\uFF0C\u5FEB\u901F\u5904\u7406\u878D\u8D44\u7533\u8BF7\u300224\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-60\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u7EBA\u7EC7\u4E1A\u73B0\u91D1\u6D41\u7279\u70B9\u3002" },
    { icon: "trending-up", title: "\u4EA7\u80FD\u63D0\u5347", description: "\u73B0\u4EE3\u7ED7\u7F1D\u8BBE\u5907\u663E\u8457\u63D0\u5347\u751F\u4EA7\u6548\u7387\u548C\u4EA7\u54C1\u4E00\u81F4\u6027\u3002" },
    { icon: "award", title: "\u8D28\u91CF\u4FDD\u8BC1", description: "\u878D\u8D44\u77E5\u540D\u54C1\u724C\u8BBE\u5907\uFF0C\u786E\u4FDD\u4EA7\u54C1\u8D28\u91CF\u548C\u8BBE\u5907\u7A33\u5B9A\u6027\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u7ED7\u7F1D\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u7ED7\u7F1D\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u7EBA\u7EC7\u5236\u9020\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D37\u7EBA\u7EC7\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/quilting-machine-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "80000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u7ED7\u7F1D\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u7EBA\u7EC7\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u5236\u9020\u4E1A\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u7ED7\u7F1D\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u7EBA\u7EC7\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
绗缝机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为纺织制造商提供绗缝机融资服务。支持马来西亚纺织业发展，提升产品质量和生产效率。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Machine Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的绗缝机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">单针绗缝机</h4> <p class="text-[#4F3E29] mb-4">基础型绗缝设备，适合小规模生产。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">多针绗缝机</h4> <p class="text-[#4F3E29] mb-4">高效批量生产，适合大型纺织厂。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">电脑绗缝机</h4> <p class="text-[#4F3E29] mb-4">数控技术，复杂图案精确绗缝。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">超声波绗缝机</h4> <p class="text-[#4F3E29] mb-4">无线绗缝，适合化纤材料。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">梳理绗缝机</h4> <p class="text-[#4F3E29] mb-4">专业床上用品生产设备。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">工业绗缝机</h4> <p class="text-[#4F3E29]">重型设备，连续作业能力。</p> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-purple-500"> <h3 class="text-2xl font-bold text-primary mb-6">产品应用领域</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-purple-600 mb-3">家纺产品</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 床上用品制造</li> <li>• 被褥棉被生产</li> <li>• 枕头靠垫制作</li> <li>• 床垫面料绗缝</li> <li>• 窗帘装饰用品</li> </ul> </div> <div> <h4 class="text-lg font-bold text-purple-600 mb-3">服装产业</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 羽绒服制造</li> <li>• 棉衣加工</li> <li>• 汽车座套生产</li> <li>• 手袋箱包制作</li> <li>• 工艺品绗缝</li> </ul> </div> </div> </div> <!-- Technical Advantages --> <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">技术优势</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">5-50</div> <div class="font-semibold mb-2">针数范围</div> <div class="text-sm opacity-90">根据型号不同</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">2000rpm</div> <div class="font-semibold mb-2">最高速度</div> <div class="text-sm opacity-90">高效生产</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">±0.1mm</div> <div class="font-semibold mb-2">精度控制</div> <div class="text-sm opacity-90">高质量绗缝</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">24/7</div> <div class="font-semibold mb-2">连续作业</div> <div class="text-sm opacity-90">提高产量</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资绗缝机，提升纺织竞争力
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得先进绗缝设备，提升产品质量，扩大市场份额。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请绗缝机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "quilting-machine" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取绗缝机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的纺织设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/quilting-machine.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/quilting-machine.astro";
const $$url = "/zh/equipment/quilting-machine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuiltingMachine,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

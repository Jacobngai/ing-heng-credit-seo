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
const $$Helicopter = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u76F4\u5347\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u822A\u7A7A\u4E13\u4E1A\u878D\u8D44";
  const pageDescription = "\u4E13\u4E1A\u76F4\u5347\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u822A\u7A7A\u4E1A\u52A1\u53D1\u5C55\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u822A\u7A7A\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u76F4\u5347\u673A\u878D\u8D44", "\u76F4\u5347\u673A\u8D37\u6B3E", "\u822A\u7A7A\u8BBE\u5907\u878D\u8D44", "\u822A\u7A7A\u4E1A\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u76F4\u5347\u673A\u878D\u8D44", url: "/zh/equipment/helicopter" }
  ];
  const benefits = [
    { icon: "plane", title: "\u822A\u7A7A\u4E1A\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u822A\u7A7A\u4E1A\u6CD5\u89C4\u548C\u9700\u6C42\uFF0C\u4E13\u95E8\u4E3A\u76F4\u5347\u673A\u4E1A\u52A1\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "\u9AD8\u989D\u878D\u8D44\u989D\u5EA6", description: "\u6700\u9AD8\u53EF\u878D\u8D44\u6570\u5343\u4E07\u4EE4\u5409\uFF0C\u652F\u6301\u5404\u79CD\u89C4\u6A21\u7684\u822A\u7A7A\u9879\u76EE\u3002" },
    { icon: "clock", title: "\u4E13\u4E1A\u5BA1\u6279", description: "\u4E13\u4E1A\u822A\u7A7A\u878D\u8D44\u56E2\u961F\uFF0C\u4E86\u89E3\u884C\u4E1A\u7279\u6B8A\u6027\uFF0C\u63D0\u4F9B\u4E13\u4E1A\u670D\u52A1\u3002" },
    { icon: "calendar", title: "\u957F\u671F\u878D\u8D44", description: "\u6700\u957F10\u5E74\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u822A\u7A7A\u8BBE\u5907\u7684\u4F7F\u7528\u5468\u671F\u3002" },
    { icon: "shield", title: "\u4FDD\u9669\u914D\u5957", description: "\u534F\u52A9\u5B89\u6392\u822A\u7A7A\u4FDD\u9669\u548C\u98CE\u9669\u7BA1\u7406\u65B9\u6848\u3002" },
    { icon: "award", title: "\u56FD\u9645\u8BA4\u8BC1", description: "\u652F\u6301\u7B26\u5408\u56FD\u9645\u822A\u7A7A\u6807\u51C6\u7684\u76F4\u5347\u673A\u8BBE\u5907\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u76F4\u5347\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u76F4\u5347\u673A\u878D\u8D44\uFF0C\u652F\u6301\u822A\u7A7A\u4E1A\u52A1\u53D1\u5C55\u3002\u6C38\u5174\u4FE1\u8D37\u822A\u7A7A\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/helicopter-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "5000000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u76F4\u5347\u673A\u878D\u8D44", "subtitle": "\u822A\u7A7A\u4E13\u4E1A\u878D\u8D44 | \u9AD8\u989D\u5EA6\u652F\u6301 | \u6C38\u5174\u4FE1\u8D37\u822A\u7A7A\u4E1A\u4E13\u5BB6", "ctaText": "WhatsApp\u4E13\u4E1A\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u76F4\u5347\u673A\u878D\u8D44\u670D\u52A1\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u822A\u7A7A\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
直升机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为航空业提供直升机融资服务。支持马来西亚航空业发展，包括紧急救援、观光旅游和商业运输。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Helicopter Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的直升机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">轻型直升机</h4> <p class="text-[#4F3E29] mb-4">2-4座，适合培训、观光和私人使用。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">中型直升机</h4> <p class="text-[#4F3E29] mb-4">5-15座，商业运输和紧急救援。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">重型直升机</h4> <p class="text-[#4F3E29] mb-4">15座以上，大型货物运输和海上平台。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">救援直升机</h4> <p class="text-[#4F3E29] mb-4">医疗救援专用，配备医疗设备。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">观光直升机</h4> <p class="text-[#4F3E29] mb-4">旅游业专用，大视野设计。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">多用途直升机</h4> <p class="text-[#4F3E29]">可配置不同任务，灵活应用。</p> </div> </div> </div> <!-- Applications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-blue-500"> <h3 class="text-2xl font-bold text-primary mb-6">应用领域</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-blue-600 mb-3">商业应用</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 观光旅游服务</li> <li>• 商业客运服务</li> <li>• 企业高管运输</li> <li>• 海上平台运输</li> <li>• 货物运输服务</li> </ul> </div> <div> <h4 class="text-lg font-bold text-blue-600 mb-3">专业服务</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 紧急医疗救援</li> <li>• 搜索救援任务</li> <li>• 消防救援支援</li> <li>• 电力线路巡检</li> <li>• 航空摄影测量</li> </ul> </div> </div> </div> <!-- Financing Details --> <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">融资详情</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">RM 5M+</div> <div class="font-semibold mb-2">融资额度</div> <div class="text-sm opacity-90">根据设备价值</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">120个月</div> <div class="font-semibold mb-2">最长期限</div> <div class="text-sm opacity-90">灵活还款安排</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">专业</div> <div class="font-semibold mb-2">审批团队</div> <div class="text-sm opacity-90">航空业专家</div> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
安全与合规要求
</h2> <p class="text-xl text-[#4F3E29]">
确保所有融资的直升机符合国际航空安全标准
</p> </div> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-lg font-bold text-red-600 mb-4">安全认证要求</h3> <ul class="space-y-2 text-[#4F3E29]"> <li>• 适航证书 (Certificate of Airworthiness)</li> <li>• 维护记录完整</li> <li>• 定期安全检查</li> <li>• 飞行员执照认证</li> <li>• 航空保险覆盖</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-lg font-bold text-green-600 mb-4">营运许可</h3> <ul class="space-y-2 text-[#4F3E29]"> <li>• 商业运营许可证</li> <li>• 航空运输许可</li> <li>• 环境合规证明</li> <li>• 噪音标准认证</li> <li>• 飞行路线批准</li> </ul> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资航空业，开拓天空商机
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷航空融资专家助您实现航空事业梦想，开创天空中的商业机遇。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请直升机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp咨询
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "helicopter" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取直升机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的航空融资专家将为您提供专业咨询
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/helicopter.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/helicopter.astro";
const $$url = "/zh/equipment/helicopter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Helicopter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

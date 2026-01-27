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
const $$JawCrusher = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u91C7\u77FF\u8BBE\u5907\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1A\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u91C7\u77FF\u548C\u91C7\u77F3\u573A\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u91C7\u77FF\u8BBE\u5907\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44", "\u7834\u788E\u8BBE\u5907\u8D37\u6B3E", "\u91C7\u77FF\u8BBE\u5907\u878D\u8D44", "\u91C7\u77F3\u573A\u8BBE\u5907"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44", url: "/zh/equipment/jaw-crusher" }
  ];
  const benefits = [
    { icon: "cog", title: "\u91C7\u77FF\u4E1A\u4E13\u5BB6", description: "\u6DF1\u5165\u4E86\u89E3\u91C7\u77FF\u548C\u91C7\u77F3\u573A\u8FD0\u8425\uFF0C\u4E13\u95E8\u4E3A\u7834\u788E\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u5FEB\u901F\u63D0\u5347\u751F\u4EA7\u80FD\u529B\u548C\u6548\u7387\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E13\u4E1A\u56E2\u961F\u5FEB\u901F\u5904\u7406\uFF0C\u4E86\u89E3\u91C7\u77FF\u4E1A\u65F6\u95F4\u654F\u611F\u6027\u300248\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u957F\u671F\u878D\u8D44", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\uFF0C\u914D\u5408\u8BBE\u5907\u4F7F\u7528\u5BFF\u547D\u548C\u9879\u76EE\u5468\u671F\u3002" },
    { icon: "trending-up", title: "\u751F\u4EA7\u6548\u7387\u63D0\u5347", description: "\u9AD8\u6548\u7834\u788E\u8BBE\u5907\u663E\u8457\u63D0\u5347\u4EA7\u91CF\u548C\u964D\u4F4E\u8FD0\u8425\u6210\u672C\u3002" },
    { icon: "shield", title: "\u8BBE\u5907\u53EF\u9760\u6027", description: "\u878D\u8D44\u9AD8\u54C1\u8D28\u7834\u788E\u673A\uFF0C\u786E\u4FDD\u957F\u671F\u7A33\u5B9A\u8FD0\u884C\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u91C7\u77FF\u91C7\u77F3\u4E1A\u52A1\u3002\u6C38\u5174\u4FE1\u8D37\u91C7\u77FF\u8BBE\u5907\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/jaw-crusher-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "300000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u91C7\u77FF\u4E13\u4E1A | \u6C38\u5174\u4FE1\u8D37\u5DE5\u4E1A\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u989A\u5F0F\u7834\u788E\u673A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u91C7\u77FF\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
颚式破碎机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为采矿公司提供颚式破碎机融资服务。支持马来西亚采矿业发展，提升石料生产效率。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Crusher Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的颚式破碎机类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">PE系列颚破</h4> <p class="text-[#4F3E29] mb-4">标准颚式破碎机，适合中小型采石场。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">PEX系列颚破</h4> <p class="text-[#4F3E29] mb-4">细碎专用，适合二次破碎作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">C系列颚破</h4> <p class="text-[#4F3E29] mb-4">欧式颚破，高效能低能耗设计。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">移动颚破站</h4> <p class="text-[#4F3E29] mb-4">移动式破碎站，适合多工地作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">液压颚破</h4> <p class="text-[#4F3E29] mb-4">自动调节，适合硬质岩石破碎。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">大型颚破</h4> <p class="text-[#4F3E29]">大产量破碎，适合大型采石场。</p> </div> </div> </div> <!-- Technical Specifications --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-yellow-500"> <h3 class="text-2xl font-bold text-primary mb-6">技术规格与应用</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-yellow-600 mb-3">技术参数</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 进料尺寸：150-1200mm</li> <li>• 出料尺寸：10-350mm</li> <li>• 处理能力：1-2200吨/小时</li> <li>• 抗压强度：≤320MPa</li> <li>• 功率范围：5.5-710kW</li> </ul> </div> <div> <h4 class="text-lg font-bold text-yellow-600 mb-3">应用材料</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 花岗岩、大理石</li> <li>• 石灰石、白云石</li> <li>• 铁矿石、铜矿石</li> <li>• 建筑垃圾回收</li> <li>• 鹅卵石、河石</li> </ul> </div> </div> </div> <!-- ROI Benefits --> <div class="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">投资回报效益</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">50-90%</div> <div class="font-semibold mb-2">破碎率</div> <div class="text-sm opacity-90">高效破碎能力</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">24/7</div> <div class="font-semibold mb-2">连续作业</div> <div class="text-sm opacity-90">提高产量</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">30%</div> <div class="font-semibold mb-2">成本节省</div> <div class="text-sm opacity-90">相比人工破碎</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">15年+</div> <div class="font-semibold mb-2">使用寿命</div> <div class="text-sm opacity-90">长期投资价值</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资颚式破碎机，提升生产效率
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您获得高效颚式破碎机，显著提升石料生产能力和收益。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请颚式破碎机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "jaw-crusher" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取颚式破碎机融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的采矿设备融资专家将为您服务
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/jaw-crusher.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/jaw-crusher.astro";
const $$url = "/zh/equipment/jaw-crusher";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JawCrusher,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

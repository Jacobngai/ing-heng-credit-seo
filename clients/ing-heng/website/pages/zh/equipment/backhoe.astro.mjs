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
const $$Backhoe = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u5FEB\u901F\u6279\u51C6";
  const pageDescription = "\u4E13\u4E1A\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u5FEB\u901F\u6279\u51C6\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u670D\u52A14000+\u627F\u5305\u5546\u3002";
  const keywords = ["\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44", "\u540E\u94F2\u88C5\u8F7D\u673A\u8D37\u6B3E", "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44", "\u91CD\u578B\u8BBE\u5907\u8D37\u6B3E"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44", url: "/zh/equipment/backhoe" }
  ];
  const benefits = [
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u4FDD\u7559\u73B0\u91D1\u6D41\u7528\u4E8E\u9879\u76EE\u8FD0\u8425\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u5FEB\u901F\u5904\u7406\uFF0C\u8BA9\u60A8\u7684\u9879\u76EE\u4E0D\u5EF6\u8BEF\u300224\u5C0F\u65F6\u5185\u83B7\u5F97\u6279\u51C6\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u8FD8\u6B3E\u671F", description: "12-60\u4E2A\u6708\u7075\u6D3B\u671F\u9650\u3002\u6839\u636E\u60A8\u7684\u9879\u76EE\u5468\u671F\u548C\u73B0\u91D1\u6D41\u5B89\u6392\u3002" },
    { icon: "shield", title: "\u65B0\u65E7\u673A\u5668\u63A5\u53D7", description: "\u878D\u8D44\u65B0\u65E7\u6316\u6398\u88C5\u8F7D\u673A\uFF0C\u63A5\u53D710\u5E74\u4EE5\u5185\u7684\u4EFB\u4F55\u54C1\u724C\u3002" },
    { icon: "users", title: "\u534E\u4EBA\u793E\u533A\u4FE1\u8D56", description: "\u4E13\u95E8\u670D\u52A1\u534E\u4EBA\u627F\u5305\u5546\uFF0C\u4E86\u89E3\u6587\u5316\u9700\u6C42\u548C\u5546\u4E1A\u4E60\u60EF\u3002" },
    { icon: "clipboard", title: "\u7B80\u5316\u6587\u4EF6", description: "\u6700\u5C11\u6587\u4EF6\u8981\u6C42\u3002\u4E13\u4E1A\u56E2\u961F\u534F\u52A9\u51C6\u5907\u7533\u8BF7\u8D44\u6599\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "0%\u62BC\u91D1\uFF0C100%\u878D\u8D44\u7684\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44\u3002\u6C38\u5174\u4FE1\u8D37\u4E13\u4E1A\u670D\u52A1\uFF0C\u5FEB\u901F\u6279\u51C6\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/backhoe-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "50000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u5FEB\u901F\u6279\u51C6 | \u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89", "ctaText": "WhatsApp\u514D\u8D39\u62A5\u4EF7", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u83B7\u53D6\u6316\u6398\u88C5\u8F7D\u673A\u878D\u8D44\u7684\u62A5\u4EF7\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5F53\u65E5\u6279\u51C6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
挖掘装载机融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为马来西亚承包商提供挖掘装载机融资。无论您需要新机器还是二手设备，我们都有适合的融资方案。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Equipment Details --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的挖掘装载机类型</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">标准挖掘装载机</h4> <p class="text-[#4F3E29] mb-4">适用于一般建筑工程，挖掘深度3-5米。</p> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">重型挖掘装载机</h4> <p class="text-[#4F3E29] mb-4">适用于大型工程项目，更强的挖掘和装载能力。</p> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">小型挖掘装载机</h4> <p class="text-[#4F3E29]">适用于城市项目和狭小空间作业。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">接受品牌</h4> <div class="space-y-2"> <p class="text-[#4F3E29]">• 卡特彼勒 (CAT)</p> <p class="text-[#4F3E29]">• 小松 (Komatsu)</p> <p class="text-[#4F3E29]">• 凯斯 (Case)</p> <p class="text-[#4F3E29]">• JCB</p> <p class="text-[#4F3E29]">• 沃尔沃 (Volvo)</p> <p class="text-[#4F3E29]">• 及其他知名品牌</p> </div> </div> </div> </div> <!-- Financing Options --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-[#D4A574]"> <h3 class="text-2xl font-bold text-primary mb-6">融资选项</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="text-3xl font-bold text-green-600 mb-2">0%</div> <div class="font-semibold text-[#4F3E29] mb-2">最低押金*</div> <div class="text-sm text-gray-600">符合条件的申请人</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-blue-600 mb-2">100%</div> <div class="font-semibold text-[#4F3E29] mb-2">融资额度</div> <div class="text-sm text-gray-600">设备价值全额融资</div> </div> <div class="text-center"> <div class="text-3xl font-bold text-purple-600 mb-2">60</div> <div class="font-semibold text-[#4F3E29] mb-2">最长期限（月）</div> <div class="text-sm text-gray-600">灵活还款安排</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
准备申请挖掘装载机融资？
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
联系永兴信贷，获取专业建议和最优惠的融资方案。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请挖掘装载机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "backhoe" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取免费融资评估
</h2> <p class="text-[#4F3E29]">
填写表格，我们的专家将为您量身定制融资方案
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/backhoe.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/backhoe.astro";
const $$url = "/zh/equipment/backhoe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Backhoe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

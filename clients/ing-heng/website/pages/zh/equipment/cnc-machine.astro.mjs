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
const $$CncMachine = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "CNC\u673A\u5E8A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u5236\u9020\u4E1A\u4E13\u5BB6";
  const pageDescription = "\u4E13\u4E1ACNC\u673A\u5E8A\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u5236\u9020\u4E1A\u5347\u7EA7\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u4E13\u4E1A\u5236\u9020\u4E1A\u878D\u8D44\u3002";
  const keywords = ["CNC\u673A\u5E8A\u878D\u8D44", "\u6570\u63A7\u673A\u5E8A\u8D37\u6B3E", "\u5236\u9020\u8BBE\u5907\u878D\u8D44", "\u7CBE\u5BC6\u52A0\u5DE5\u8BBE\u5907"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "CNC\u673A\u5E8A\u878D\u8D44", url: "/zh/equipment/cnc-machine" }
  ];
  const benefits = [
    { icon: "cog", title: "\u5236\u9020\u4E1A\u4E13\u4E1A", description: "\u6DF1\u5165\u4E86\u89E3\u5236\u9020\u4E1A\u9700\u6C42\uFF0C\u4E13\u95E8\u4E3ACNC\u673A\u5E8A\u5347\u7EA7\u63D0\u4F9B\u878D\u8D44\u652F\u6301\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u52A0\u901F\u5236\u9020\u8BBE\u5907\u73B0\u4EE3\u5316\u8FDB\u7A0B\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E13\u4E1A\u56E2\u961F\u5FEB\u901F\u5904\u7406\uFF0C\u4E86\u89E3\u5236\u9020\u4E1A\u65F6\u95F4\u654F\u611F\u6027\u300248\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u671F\u9650", description: "12-84\u4E2A\u6708\u8FD8\u6B3E\u671F\u3002\u6839\u636E\u8BBE\u5907\u6298\u65E7\u548C\u56DE\u6536\u671F\u5B89\u6392\u3002" },
    { icon: "trending-up", title: "\u6280\u672F\u5347\u7EA7\u652F\u6301", description: "\u652F\u6301\u4ECE\u4F20\u7EDF\u52A0\u5DE5\u5411\u6570\u63A7\u6280\u672F\u5347\u7EA7\uFF0C\u63D0\u5347\u7ADE\u4E89\u529B\u3002" },
    { icon: "shield", title: "\u8BBE\u5907\u4FDD\u503C", description: "\u9AD8\u54C1\u8D28CNC\u673A\u5E8A\u4FDD\u503C\u6027\u597D\uFF0C\u964D\u4F4E\u878D\u8D44\u98CE\u9669\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "CNC\u673A\u5E8A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1ACNC\u673A\u5E8A\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u5236\u9020\u4E1A\u6280\u672F\u5347\u7EA7\u3002\u6C38\u5174\u4FE1\u8D37\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/cnc-machine-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "150000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9ACNC\u673A\u5E8A\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u5236\u9020\u4E1A\u5347\u7EA7 | \u6C38\u5174\u4FE1\u8D37\u4E13\u4E1A\u652F\u6301", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3CNC\u673A\u5E8A\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5236\u9020\u4E1A\u4E13\u5BB6"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
CNC机床融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为制造业提供CNC机床融资服务。支持企业技术升级，提升生产效率和产品质量。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- CNC Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的CNC机床类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">CNC铣床</h4> <p class="text-[#4F3E29] mb-4">精密铣削加工，适用于复杂零件制造。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">CNC车床</h4> <p class="text-[#4F3E29] mb-4">高精度旋转加工，适用于轴类零件。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">CNC加工中心</h4> <p class="text-[#4F3E29] mb-4">多功能加工，一次装夹完成多道工序。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">CNC钻攻中心</h4> <p class="text-[#4F3E29] mb-4">高速钻孔攻丝，适用于批量生产。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">五轴加工中心</h4> <p class="text-[#4F3E29] mb-4">复杂曲面加工，航空航天级精度。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">CNC磨床</h4> <p class="text-[#4F3E29]">精密磨削，实现最高表面质量。</p> </div> </div> </div> <!-- Brands & Technology --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-blue-500"> <h3 class="text-2xl font-bold text-primary mb-6">支持的品牌与技术</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-blue-600 mb-3">国际品牌</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• HAAS (美国)</li> <li>• FANUC (日本)</li> <li>• MAZAK (日本)</li> <li>• DMG MORI (德日合资)</li> <li>• OKUMA (日本)</li> <li>• MAKINO (日本)</li> </ul> </div> <div> <h4 class="text-lg font-bold text-blue-600 mb-3">技术特点</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 高精度位置控制</li> <li>• 自动换刀系统</li> <li>• 在线测量功能</li> <li>• 远程监控能力</li> <li>• 工业4.0就绪</li> <li>• 节能环保设计</li> </ul> </div> </div> </div> <!-- ROI Benefits --> <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">投资回报优势</h3> <div class="grid md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">3-5倍</div> <div class="font-semibold mb-2">效率提升</div> <div class="text-sm opacity-90">相比传统加工</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">±0.01mm</div> <div class="font-semibold mb-2">加工精度</div> <div class="text-sm opacity-90">高质量产品</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">50%</div> <div class="font-semibold mb-2">人工节省</div> <div class="text-sm opacity-90">降低生产成本</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">24/7</div> <div class="font-semibold mb-2">连续生产</div> <div class="text-sm opacity-90">提高产能</div> </div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
投资CNC机床，提升制造竞争力
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您实现制造业升级，获得更高效率和更大利润空间。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请CNC机床融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "cnc-machine" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取CNC机床融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的制造业融资专家将为您量身定制方案
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/cnc-machine.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/cnc-machine.astro";
const $$url = "/zh/equipment/cnc-machine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CncMachine,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

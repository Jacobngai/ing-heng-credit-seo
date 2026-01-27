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
const $$FoodStall = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | 0%\u62BC\u91D1 | \u6C38\u5174\u4FE1\u8D37 | \u9910\u996E\u521B\u4E1A\u652F\u6301";
  const pageDescription = "\u4E13\u4E1A\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44\u670D\u52A1\u30020%\u62BC\u91D1\uFF0C100%\u878D\u8D44\uFF0C\u652F\u6301\u9910\u996E\u521B\u4E1A\u3002\u6C38\u5174\u4FE1\u8D3740\u5E74\u4FE1\u8A89\uFF0C\u9910\u996E\u4E1A\u4E13\u4E1A\u878D\u8D44\u3002";
  const keywords = ["\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44", "\u6D41\u52A8\u9910\u8F66\u8D37\u6B3E", "\u9910\u996E\u8BBE\u5907\u878D\u8D44", "\u5C0F\u8D29\u521B\u4E1A\u8D37\u6B3E"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44", url: "/zh/equipment/food-stall" }
  ];
  const benefits = [
    { icon: "utensils", title: "\u9910\u996E\u4E1A\u4E13\u5BB6", description: "\u4E13\u95E8\u670D\u52A1\u9910\u996E\u521B\u4E1A\u8005\uFF0C\u4E86\u89E3\u5C0F\u8D29\u4E1A\u52A1\u9700\u6C42\u548C\u7ECF\u8425\u6A21\u5F0F\u3002" },
    { icon: "percentage", title: "0%\u62BC\u91D1\u878D\u8D44*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u83B7100%\u878D\u8D44\u3002\u964D\u4F4E\u521B\u4E1A\u95E8\u69DB\uFF0C\u5B9E\u73B0\u9910\u996E\u68A6\u60F3\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u4E86\u89E3\u9910\u996E\u4E1A\u6025\u9700\u8BBE\u5907\u7684\u60C5\u51B5\uFF0C\u5FEB\u901F\u5904\u7406\u7533\u8BF7\u300224\u5C0F\u65F6\u5185\u51B3\u5B9A\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B\u8FD8\u6B3E", description: "12-60\u4E2A\u6708\u671F\u9650\uFF0C\u914D\u5408\u9910\u996E\u4E1A\u73B0\u91D1\u6D41\u7279\u70B9\u5B89\u6392\u3002" },
    { icon: "heart", title: "\u521B\u4E1A\u652F\u6301", description: "\u4E13\u95E8\u652F\u6301\u534E\u4EBA\u9910\u996E\u521B\u4E1A\uFF0C\u4F20\u627F\u7F8E\u98DF\u6587\u5316\u3002" },
    { icon: "shield", title: "\u8BBE\u5907\u4FDD\u969C", description: "\u534F\u52A9\u9009\u62E9\u7B26\u5408\u536B\u751F\u6807\u51C6\u7684\u9910\u996E\u8BBE\u5907\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E13\u4E1A\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44\uFF0C0%\u62BC\u91D1\uFF0C\u652F\u6301\u9910\u996E\u521B\u4E1A\u3002\u6C38\u5174\u4FE1\u8D37\u9910\u996E\u4E1A\u4E13\u4E1A\u670D\u52A1\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/food-stall-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "30000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44", "subtitle": "0%\u62BC\u91D1 | 100%\u878D\u8D44 | \u521B\u4E1A\u652F\u6301 | \u6C38\u5174\u4FE1\u8D37\u9910\u996E\u4E13\u4E1A", "ctaText": "WhatsApp\u514D\u8D39\u54A8\u8BE2", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u4E86\u89E3\u5C0F\u8D29\u644A\u4F4D\u878D\u8D44\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u521B\u4E1A\u652F\u6301"] })}  <section class="section"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
小贩摊位融资专家
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
永兴信贷专门为餐饮创业者提供小贩摊位融资服务。支持马来西亚美食文化传承，助您开创餐饮事业。
</p> </div> <!-- Benefits Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> <!-- Food Stall Types --> <div class="bg-[#F5F5DC] p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12"> <h3 class="text-2xl font-bold text-primary mb-6 text-center">我们融资的餐饮摊位类型</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">流动餐车</h4> <p class="text-[#4F3E29] mb-4">完整厨房设备，可移动经营，适合多地点销售。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">固定摊位</h4> <p class="text-[#4F3E29] mb-4">传统小贩中心摊位，包含所有厨房设备。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">快餐车</h4> <p class="text-[#4F3E29] mb-4">专门设计的快餐制作设备，高效出餐。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">饮料摊位</h4> <p class="text-[#4F3E29] mb-4">专业饮料制作设备，冷热饮品专用。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">烧烤摊位</h4> <p class="text-[#4F3E29] mb-4">专业烧烤设备，炭火或电力烧烤。</p> </div> <div> <h4 class="text-lg font-bold text-[#4F3E29] mb-3">面食摊位</h4> <p class="text-[#4F3E29]">面条制作专用设备，包含汤料保温。</p> </div> </div> </div> <!-- Equipment Categories --> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] mb-12 border-l-4 border-orange-500"> <h3 class="text-2xl font-bold text-primary mb-6">融资设备类别</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="text-lg font-bold text-orange-600 mb-3">厨房设备</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 商用炉灶</li> <li>• 油炸锅</li> <li>• 蒸笼设备</li> <li>• 烧烤炉</li> <li>• 汤料保温锅</li> <li>• 切菜机器</li> </ul> </div> <div> <h4 class="text-lg font-bold text-orange-600 mb-3">辅助设备</h4> <ul class="space-y-2 text-[#4F3E29]"> <li>• 冷藏冷冻柜</li> <li>• 洗碗设备</li> <li>• 排气系统</li> <li>• 收银系统</li> <li>• 桌椅座位</li> <li>• 招牌灯箱</li> </ul> </div> </div> </div> <!-- Business Support --> <div class="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-center">创业支持服务</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="text-center"> <div class="text-3xl font-bold mb-2">RM 15K</div> <div class="font-semibold mb-2">最低融资</div> <div class="text-sm opacity-90">小额创业支持</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">免费</div> <div class="font-semibold mb-2">执照咨询</div> <div class="text-sm opacity-90">协助申请营业执照</div> </div> <div class="text-center"> <div class="text-3xl font-bold mb-2">24/7</div> <div class="font-semibold mb-2">技术支持</div> <div class="text-sm opacity-90">设备维护指导</div> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
成功创业故事
</h2> <p class="text-xl text-[#4F3E29]">
通过永兴信贷融资成功开创餐饮事业的真实案例
</p> </div> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-lg font-bold text-primary mb-3">陈太太的鸡饭摊</h3> <p class="text-[#4F3E29] mb-4">
吉隆坡的陈太太通过永兴信贷融资RM 45,000开设海南鸡饭摊。从家庭主妇到成功女老板，月收入超过RM 8,000。
</p> <div class="text-green-600 font-semibold">
"永兴信贷让我实现了开店梦想，现在生意越来越好！"
</div> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-lg font-bold text-primary mb-3">阿明的烧烤档</h3> <p class="text-[#4F3E29] mb-4">
新山的阿明用RM 35,000融资购买专业烧烤设备。现在每晚营业额超过RM 800，还计划开第二间分店。
</p> <div class="text-green-600 font-semibold">
"设备品质好，客人都说我的烧烤最香！"
</div> </div> </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
开创您的餐饮事业
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
永兴信贷助您实现餐饮梦想，从小贩摊位开始创业成功之路。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=你好！我想申请小贩摊位融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "food-stall" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
获取餐饮创业融资方案
</h2> <p class="text-[#4F3E29]">
填写表格，我们的餐饮业融资专家将为您提供创业指导
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/food-stall.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/food-stall.astro";
const $$url = "/zh/equipment/food-stall";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FoodStall,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$FAQItem } from '../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                                            */
export { renderers } from '../../renderers.mjs';

const $$HirePurchaseFinanceCompany = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u9A6C\u6765\u897F\u4E9A\u9886\u5148\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8 | \u8D44\u4EA7\u878D\u8D44\u4E13\u5BB6 | Ing Heng Credit";
  const description = "\u9A6C\u6765\u897F\u4E9A\u9876\u7EA7\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\uFF0C\u4E13\u95E8\u4ECE\u4E8B\u8D44\u4EA7\u6240\u6709\u6743\u878D\u8D44\u3002\u901A\u8FC7\u8BBE\u5907\u6240\u6709\u6743\u5EFA\u7ACB\u80A1\u6743vs\u79DF\u8D41\u6210\u672C\u3002\u5FEB\u901F\u5BA1\u6279\uFF0C0%\u9996\u4ED8\u53EF\u7528\u3002";
  const keywords = [
    "\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8",
    "\u8D44\u4EA7\u878D\u8D44\u516C\u53F8",
    "\u8BBE\u5907\u5206\u671F\u4ED8\u6B3E\u4E13\u5BB6",
    "\u8D44\u4EA7\u6240\u6709\u6743\u878D\u8D44",
    "\u9A6C\u6765\u897F\u4E9A\u5206\u671F\u4ED8\u6B3E\u516C\u53F8",
    "\u8BBE\u5907\u6240\u6709\u6743\u878D\u8D44",
    "\u901A\u8FC7\u8BBE\u5907\u5EFA\u7ACB\u8D44\u4EA7",
    "\u9A6C\u6765\u897F\u4E9A\u5206\u671F\u4ED8\u6B3E\u4E13\u5BB6",
    "\u8BBE\u5907\u91D1\u878D\u516C\u53F8",
    "\u8D44\u4EA7\u6240\u6709\u6743\u6536\u76CA"
  ];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8", href: "/zh/hire-purchase-finance-company" }
  ];
  const faqs = [
    {
      question: "\u662F\u4EC0\u4E48\u8BA9Ing Heng\u6210\u4E3A\u9886\u5148\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\uFF1F",
      answer: "\u4F5C\u4E3A\u4E13\u95E8\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u4E13\u6CE8\u4E8E\u4E3A\u9A6C\u6765\u897F\u4E9A\u4F01\u4E1A\u63D0\u4F9B\u8D44\u4EA7\u6240\u6709\u6743\u878D\u8D44\u3002\u4E0E\u4F20\u7EDF\u8D37\u6B3E\u673A\u6784\u4E0D\u540C\uFF0C\u6211\u4EEC\u7406\u89E3\u8BBE\u5907\u6240\u6709\u6743\u80FD\u591F\u5EFA\u7ACB\u957F\u671F\u8D22\u5BCC\u3002\u6211\u4EEC\u5728\u8D44\u4EA7\u878D\u8D44\u65B9\u9762\u7684\u4E13\u4E1A\u77E5\u8BC6\uFF0C\u7ED3\u5408\u7075\u6D3B\u6761\u4EF6\u548C\u7ADE\u4E89\u5229\u7387\uFF0C\u4F7F\u6211\u4EEC\u6210\u4E3A\u5BFB\u6C42\u62E5\u6709\u800C\u975E\u79DF\u8D41\u8BBE\u5907\u7684\u4F01\u4E1A\u9996\u9009\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u3002"
    },
    {
      question: "\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u4E0E\u79DF\u8D41\u516C\u53F8\u6709\u4F55\u4E0D\u540C\uFF1F",
      answer: "\u4F5C\u4E3A\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u901A\u8FC7\u7ED3\u6784\u5316\u4ED8\u6B3E\u8BA1\u5212\u4FC3\u8FDB\u8D44\u4EA7\u6240\u6709\u6743\u3002\u4E0E\u4FDD\u7559\u8BBE\u5907\u6240\u6709\u6743\u7684\u79DF\u8D41\u516C\u53F8\u4E0D\u540C\uFF0C\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u5E2E\u52A9\u60A8\u901A\u8FC7\u6BCF\u6B21\u4ED8\u6B3E\u5EFA\u7ACB\u80A1\u6743\u3002\u5728\u60A8\u7684\u4ED8\u6B3E\u671F\u7ED3\u675F\u65F6\uFF0C\u60A8\u5B8C\u5168\u62E5\u6709\u8D44\u4EA7 - \u4E3A\u60A8\u7684\u4F01\u4E1A\u521B\u9020\u957F\u671F\u4EF7\u503C\uFF0C\u800C\u4E0D\u662F\u6301\u7EED\u7684\u79DF\u91D1\u8D39\u7528\u3002"
    },
    {
      question: "\u60A8\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u4E13\u95E8\u4ECE\u4E8B\u54EA\u4E9B\u7C7B\u578B\u7684\u8D44\u4EA7\uFF1F",
      answer: "\u6211\u4EEC\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u4E13\u95E8\u4ECE\u4E8B\u5EFA\u7B51\u8BBE\u5907\u3001\u7269\u6D41\u8F66\u8F86\u548C\u5DE5\u4E1A\u673A\u68B0\u3002\u6211\u4EEC\u4E3A\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u5361\u8F66\u3001\u53C9\u8F66\u3001\u8D77\u91CD\u673A\u548C\u5176\u4ED6\u5546\u4E1A\u8D44\u4EA7\u63D0\u4F9B\u878D\u8D44\u3002\u4F5C\u4E3A\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u7684\u4E13\u4E1A\u77E5\u8BC6\u610F\u5473\u7740\u6211\u4EEC\u4E86\u89E3\u6BCF\u79CD\u8BBE\u5907\u7C7B\u578B\u7684\u6536\u76CA\u6F5C\u529B\u548C\u8FD0\u8425\u8981\u6C42\u3002"
    },
    {
      question: "\u4E3A\u4EC0\u4E48\u9009\u62E9\u901A\u8FC7\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u8FDB\u884C\u8D44\u4EA7\u6240\u6709\u6743\uFF1F",
      answer: "\u4E0E\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u5408\u4F5C\u610F\u5473\u7740\u5EFA\u7ACB\u80A1\u6743\u800C\u4E0D\u662F\u6C38\u8FDC\u652F\u4ED8\u79DF\u91D1\u8D39\u7528\u3002\u6BCF\u6708\u4ED8\u6B3E\u90FD\u6709\u52A9\u4E8E\u6700\u7EC8\u6240\u6709\u6743\u3002\u8D44\u4EA7\u6240\u6709\u6743\u63D0\u4F9B\u64CD\u4F5C\u63A7\u5236\u3001\u4FEE\u6539\u81EA\u7531\u548C\u957F\u671F\u4EF7\u503C\u4FDD\u7559\u3002\u6211\u4EEC\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u5E2E\u52A9\u5C06\u8BBE\u5907\u8D39\u7528\u8F6C\u5316\u4E3A\u8D22\u5BCC\u5EFA\u8BBE\u6295\u8D44\u3002"
    },
    {
      question: "\u4F7F\u7528\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u7684\u6240\u6709\u6743\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F",
      answer: "\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u4F7F\u7ACB\u5373\u64CD\u4F5C\u63A7\u5236\u4E0E\u6240\u6709\u6743\u6536\u76CA\u76F8\u7ED3\u5408\u6210\u4E3A\u53EF\u80FD\u3002\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u8981\u4FEE\u6539\u8BBE\u5907\uFF0C\u5728\u6CA1\u6709\u79DF\u8D41\u9650\u5236\u7684\u60C5\u51B5\u4E0B\u8FD0\u8425\uFF0C\u5E76\u5EFA\u7ACB\u4F01\u4E1A\u80A1\u6743\u3002\u901A\u8FC7\u6211\u4EEC\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u8FDB\u884C\u8D44\u4EA7\u6240\u6709\u6743\u63D0\u4F9B\u7A0E\u6536\u4F18\u60E0\u3001\u8F6C\u552E\u4EF7\u503C\u548C\u6446\u8131\u79DF\u8D41\u4F9D\u8D56\u7684\u81EA\u7531\u3002"
    },
    {
      question: "\u60A8\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u5982\u4F55\u786E\u4FDD\u5FEB\u901F\u5BA1\u6279\uFF1F",
      answer: "\u4F5C\u4E3A\u7ECF\u9A8C\u4E30\u5BCC\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u901A\u8FC7\u6DF1\u539A\u7684\u884C\u4E1A\u77E5\u8BC6\u548C\u5F3A\u5927\u7684\u8D37\u6B3E\u673A\u6784\u5173\u7CFB\u7B80\u5316\u4E86\u6211\u4EEC\u7684\u5BA1\u6279\u6D41\u7A0B\u3002\u6211\u4EEC\u5728\u8D44\u4EA7\u8BC4\u4F30\u548C\u4E1A\u52A1\u8BC4\u4F30\u65B9\u9762\u7684\u4E13\u4E1A\u77E5\u8BC6\u4F7F\u5FEB\u901F\u51B3\u7B56\u6210\u4E3A\u53EF\u80FD\u3002\u6211\u4EEC\u7684\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8\u901A\u8FC7\u4E13\u6CE8\u4E8E\u8BBE\u5907\u53EF\u884C\u6027\u548C\u4E1A\u52A1\u6F5C\u529B\u800C\u975E\u4EFB\u610F\u9650\u5236\u6765\u7EF4\u6301\u4F18\u79C0\u7684\u5BA1\u6279\u7387\u3002"
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-2en2um66": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema, "data-astro-cid-2en2um66": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-2en2um66": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-2en2um66> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-2en2um66": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u9886\u5148\u5206\u671F\u4ED8\u6B3E\u878D\u8D44\u516C\u53F8", "subtitle": "\u8D44\u4EA7\u878D\u8D44\u4E13\u5BB6 \u2022 \u901A\u8FC7\u8BBE\u5907\u6240\u6709\u6743\u5EFA\u7ACB\u80A1\u6743 \u2022 \u5C06\u79DF\u8D41\u6210\u672C\u8F6C\u5316\u4E3A\u8D22\u5BCC\u5EFA\u8BBE\u6295\u8D44", "ctaText": "\u4ECA\u5929\u5C31\u5EFA\u7ACB\u8BBE\u5907\u80A1\u6743", "ctaLink": "/zh/contact", "ctaSecondaryText": "WhatsApp\u8D44\u4EA7\u4E13\u5BB6", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["\u8D44\u4EA7\u6240\u6709\u6743\u4E13\u5BB6", "\u80A1\u6743\u5EFA\u8BBE\u4E13\u6CE8", "0%\u9996\u4ED8\u53EF\u7528"], "data-astro-cid-2en2um66": true })}  <section class="section-padding bg-gray-50" data-astro-cid-2en2um66> <div class="container-custom" data-astro-cid-2en2um66> <div class="max-w-5xl mx-auto" data-astro-cid-2en2um66> <div class="text-center mb-12" data-astro-cid-2en2um66> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-2en2um66>
厌倦了为别人建立资产吗？
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-8" data-astro-cid-2en2um66></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-2en2um66> <div data-astro-cid-2en2um66> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] border-l-4 border-red-500" data-astro-cid-2en2um66> <h3 class="text-2xl font-bold text-primary mb-6" data-astro-cid-2en2um66>租赁陷阱</h3> <div class="space-y-4 text-gray-700" data-astro-cid-2en2um66> <p class="leading-relaxed" data-astro-cid-2en2um66> <strong data-astro-cid-2en2um66>当您想拥有设备但现金流紧张，银行要求30%预付定金而您需要这些现金进行运营时，您是否感到在发展业务和保留营运资金之间左右为难？</strong> </p> <p class="leading-relaxed" data-astro-cid-2en2um66> <strong data-astro-cid-2en2um66>当租赁公司限制您如何使用"他们的"设备，限制您的运营灵活性时，这种控制权的丧失是否让您的业务计划受挫？</strong> </p> <p class="leading-relaxed" data-astro-cid-2en2um66>
当您计算出RM 15,000月租金超过3年等于RM 540,000 - 却没有任何东西可以证明这一点时，您的胃是否下沉，知道这些钱本可以彻底购买设备？
</p> </div> </div> </div> <div data-astro-cid-2en2um66> <div class="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]" data-astro-cid-2en2um66> <h3 class="text-2xl font-bold mb-6" data-astro-cid-2en2um66>所有权解决方案</h3> <div class="space-y-4" data-astro-cid-2en2um66> <div class="flex items-start" data-astro-cid-2en2um66> <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0" data-astro-cid-2en2um66>1</div> <p data-astro-cid-2en2um66><strong data-astro-cid-2en2um66>您的设备。</strong> 完全的操作控制和修改自由。</p> </div> <div class="flex items-start" data-astro-cid-2en2um66> <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0" data-astro-cid-2en2um66>2</div> <p data-astro-cid-2en2um66><strong data-astro-cid-2en2um66>您的股权。</strong> 通过每次付款建立企业资产。</p> </div> <div class="flex items-start" data-astro-cid-2en2um66> <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0" data-astro-cid-2en2um66>3</div> <p data-astro-cid-2en2um66><strong data-astro-cid-2en2um66>您的财富。</strong> 将费用转化为投资回报。</p> </div> </div> </div> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-2en2um66> <div class="container-custom" data-astro-cid-2en2um66> <div class="max-w-4xl mx-auto" data-astro-cid-2en2um66> <div class="text-center mb-12" data-astro-cid-2en2um66> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-2en2um66>
什么是分期付款融资公司？
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-2en2um66>
资产所有权专家，将设备成本转化为财富建设投资
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-2en2um66></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-2en2um66> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] border-l-4 border-primary mb-8" data-astro-cid-2en2um66> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-2en2um66>超越传统贷款</h3> <p class="text-gray-700 leading-relaxed mb-4" data-astro-cid-2en2um66>
分期付款融资公司专门从事资产所有权融资 - 通过结构化付款计划帮助企业获得设备，最终实现所有权。与保留资产控制权的租赁公司或标准严格的银行不同，分期付款融资公司专注于资产的收益潜力和它们能够实现的业务增长。
</p> <p class="text-gray-700 leading-relaxed" data-astro-cid-2en2um66>
作为马来西亚领先的分期付款融资公司，Ing Heng Credit理解设备所有权能够建立长期的企业财富。每次付款都有助于资产股权，创造租赁安排根本无法提供的价值。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-2en2um66> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-2en2um66> <h4 class="text-xl font-bold text-primary mb-3" data-astro-cid-2en2um66>分期付款融资公司的好处：</h4> <ul class="space-y-2 text-gray-700" data-astro-cid-2en2um66> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-accent font-bold mr-2" data-astro-cid-2en2um66>✓</span>
通过可管理的付款实现资产所有权
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-accent font-bold mr-2" data-astro-cid-2en2um66>✓</span>
每次分期付款建立股权
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-accent font-bold mr-2" data-astro-cid-2en2um66>✓</span>
完全的操作控制和自由
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-accent font-bold mr-2" data-astro-cid-2en2um66>✓</span>
长期财富创造专注
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-accent font-bold mr-2" data-astro-cid-2en2um66>✓</span>
用于规划的固定付款时间表
</li> </ul> </div> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-2en2um66> <h4 class="text-xl font-bold text-primary mb-3" data-astro-cid-2en2um66>传统租赁限制：</h4> <ul class="space-y-2 text-gray-700" data-astro-cid-2en2um66> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-red-500 font-bold mr-2" data-astro-cid-2en2um66>✗</span>
持续的租赁成本，没有股权
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-red-500 font-bold mr-2" data-astro-cid-2en2um66>✗</span>
设备使用限制
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-red-500 font-bold mr-2" data-astro-cid-2en2um66>✗</span>
没有资产价值积累
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-red-500 font-bold mr-2" data-astro-cid-2en2um66>✗</span>
归还要求和条件
</li> <li class="flex items-start" data-astro-cid-2en2um66> <span class="text-red-500 font-bold mr-2" data-astro-cid-2en2um66>✗</span>
永久付款义务
</li> </ul> </div> </div> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-2en2um66> <div class="container-custom" data-astro-cid-2en2um66> <div class="max-w-5xl mx-auto" data-astro-cid-2en2um66> <div class="text-center mb-12" data-astro-cid-2en2um66> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-2en2um66>
资产所有权优势
</h2> <p class="text-xl text-white/90 max-w-3xl mx-auto" data-astro-cid-2en2um66>
为什么通过我们的分期付款融资公司选择所有权而不是租赁
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-2en2um66></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-2en2um66> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-2en2um66> <div class="text-4xl mb-4" data-astro-cid-2en2um66>🏆</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-2en2um66>建立企业股权</h3> <p class="text-white/90" data-astro-cid-2en2um66>
将月度设备成本转化为资产价值。每次付款建立股权而不是消失在租金费用中。
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-2en2um66> <div class="text-4xl mb-4" data-astro-cid-2en2um66>🎯</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-2en2um66>运营自由</h3> <p class="text-white/90" data-astro-cid-2en2um66>
修改、定制和操作设备，不受租赁公司限制。您的设备，您的规则，您的生产力。
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-2en2um66> <div class="text-4xl mb-4" data-astro-cid-2en2um66>📈</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-2en2um66>财富积累</h3> <p class="text-white/90" data-astro-cid-2en2um66>
设备保持价值，可以出售或用作抵押品。所有权创造了租赁永远无法提供的选择。
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-2en2um66> <div class="text-4xl mb-4" data-astro-cid-2en2um66>⏰</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-2en2um66>固定付款时间表</h3> <p class="text-white/90" data-astro-cid-2en2um66>
可预测的月付款，有明确的结束日期。没有意外的租金增加或永久付款义务。
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-2en2um66> <div class="text-4xl mb-4" data-astro-cid-2en2um66>💰</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-2en2um66>无气球付款</h3> <p class="text-white/90" data-astro-cid-2en2um66>
与某些融资选择不同，我们的分期付款协议没有大额最终付款。整个过程中清晰、可管理的分期付款。
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-2en2um66> <div class="text-4xl mb-4" data-astro-cid-2en2um66>🛡️</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-2en2um66>税务优势</h3> <p class="text-white/90" data-astro-cid-2en2um66>
资产所有权提供折旧收益和租赁安排无法提供的潜在税务优势。
</p> </div> </div> <div class="text-center mt-12" data-astro-cid-2en2um66> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u5F00\u59CB\u5EFA\u7ACB\u8D44\u4EA7\u80A1\u6743", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-2en2um66": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-2en2um66> <div class="container-custom" data-astro-cid-2en2um66> <div class="max-w-4xl mx-auto" data-astro-cid-2en2um66> <div class="text-center mb-12" data-astro-cid-2en2um66> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-2en2um66>
分期付款融资公司常见问题
</h2> <p class="text-xl text-gray-600" data-astro-cid-2en2um66>
关于资产所有权融资的常见问题
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-2en2um66></div> </div> <div class="space-y-4" data-astro-cid-2en2um66> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-2en2um66": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-2en2um66> <p class="text-gray-600 mb-6" data-astro-cid-2en2um66>
准备将设备成本转化为资产建设投资了吗？
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-2en2um66> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u5F00\u59CB\u8D44\u4EA7\u6240\u6709\u6743\u4E4B\u65C5", "link": "/zh/contact", "variant": "primary", "size": "large", "data-astro-cid-2en2um66": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp\u8D44\u4EA7\u4E13\u5BB6", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "size": "large", "data-astro-cid-2en2um66": true })} </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-2en2um66> <div class="container-custom" data-astro-cid-2en2um66> <div class="max-w-3xl mx-auto" data-astro-cid-2en2um66> <div class="text-center mb-12" data-astro-cid-2en2um66> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-2en2um66>
联系资产所有权专家
</h2> <p class="text-xl text-gray-600" data-astro-cid-2en2um66>
讨论我们的分期付款融资公司如何帮助您建立设备股权
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-2en2um66></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-2en2um66": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/hire-purchase-finance-company.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/hire-purchase-finance-company.astro";
const $$url = "/zh/hire-purchase-finance-company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HirePurchaseFinanceCompany,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

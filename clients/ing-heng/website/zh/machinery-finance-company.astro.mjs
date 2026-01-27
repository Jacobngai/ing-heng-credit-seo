/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, c as generateProductSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$MachineryFinanceCompany = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u9A6C\u6765\u897F\u4E9A\u9886\u5148\u673A\u68B0\u878D\u8D44\u516C\u53F8 | \u5DE5\u4E1A\u8BBE\u5907\u4E13\u5BB6";
  const description = "\u9A6C\u6765\u897F\u4E9A\u53EF\u4FE1\u8D56\u7684\u673A\u68B0\u878D\u8D44\u516C\u53F8\uFF0C\u4E13\u4E1A\u4ECE\u4E8B\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44\u3002\u6570\u63A7\u673A\u5E8A\u3001\u751F\u4EA7\u7EBF\u3001\u5236\u9020\u8BBE\u5907 - \u6211\u4EEC\u5168\u90E8\u878D\u8D44\uFF0C\u63D0\u4F9B0%\u9996\u4ED8\u9009\u9879\u3002";
  const keywords = [
    "\u673A\u68B0\u878D\u8D44\u516C\u53F8",
    "\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44\u516C\u53F8",
    "\u6570\u63A7\u878D\u8D44\u4E13\u5BB6",
    "\u5236\u9020\u8BBE\u5907\u878D\u8D44",
    "\u751F\u4EA7\u7EBF\u878D\u8D44",
    "\u5DE5\u4E1A\u673A\u68B0\u8D37\u6B3E",
    "\u6280\u672F\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u673A\u68B0\u878D\u8D44\u4E13\u5BB6",
    "\u8BBE\u5907\u878D\u8D44\u4E13\u5BB6",
    "\u5DE5\u4E1A\u878D\u8D44\u89E3\u51B3\u65B9\u6848"
  ];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u673A\u68B0\u878D\u8D44\u516C\u53F8", href: "/zh/machinery-finance-company" }
  ];
  const faqs = [
    {
      question: "\u60A8\u7684\u878D\u8D44\u516C\u53F8\u4E13\u95E8\u4ECE\u4E8B\u54EA\u4E9B\u7C7B\u578B\u7684\u673A\u68B0\uFF1F",
      answer: "\u4F5C\u4E3A\u4E13\u4E1A\u7684\u673A\u68B0\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u878D\u8D44\u6240\u6709\u5DE5\u4E1A\u8BBE\u5907\uFF0C\u5305\u62EC\u6570\u63A7\u673A\u5E8A\u3001\u6CE8\u5851\u673A\u3001\u751F\u4EA7\u7EBF\u3001\u5236\u9020\u8BBE\u5907\u3001\u81EA\u52A8\u5316\u7CFB\u7EDF\u548C\u6280\u672F\u5347\u7EA7\u3002\u6211\u4EEC\u4E86\u89E3\u673A\u68B0\u4EF7\u503C\uFF0C\u63A5\u53D710\u5E74\u4EE5\u4E0A\u7684\u8BBE\u5907\u3002"
    },
    {
      question: "\u60A8\u662F\u5426\u4E3A\u94F6\u884C\u62D2\u7EDD\u7684\u8001\u65E7\u5DE5\u4E1A\u673A\u68B0\u63D0\u4F9B\u878D\u8D44\uFF1F",
      answer: "\u662F\u7684\uFF01\u4E0E\u62D2\u7EDD\u8D85\u8FC75\u5E74\u673A\u68B0\u7684\u4F20\u7EDF\u94F6\u884C\u4E0D\u540C\uFF0C\u6211\u4EEC\u7684\u673A\u68B0\u878D\u8D44\u516C\u53F8\u4E13\u95E8\u5904\u7406\u8001\u65E7\u5DE5\u4E1A\u8BBE\u5907\u3002\u6211\u4EEC\u8BC4\u4F30\u673A\u5668\u72B6\u51B5\u548C\u5546\u4E1A\u53EF\u884C\u6027\uFF0C\u800C\u975E\u4EFB\u610F\u7684\u5E74\u9650\u9650\u5236\u3002\u6211\u4EEC\u7ECF\u5E38\u4E3A10-15\u5E74\u7684\u6570\u63A7\u673A\u5E8A\u548C\u751F\u4EA7\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u3002"
    },
    {
      question: "\u673A\u68B0\u878D\u8D44\u9700\u8981\u591A\u5C11\u9996\u4ED8\uFF1F",
      answer: "\u6211\u4EEC\u7684\u673A\u68B0\u878D\u8D44\u516C\u53F8\u63D0\u4F9B0%\u9996\u4ED8\u9009\u9879\uFF0C\u9AD8\u8FBE100%\u878D\u8D44\u3002\u8FD9\u4F7F\u5236\u9020\u5546\u80FD\u591F\u83B7\u5F97\u5FC5\u8981\u7684\u751F\u4EA7\u8BBE\u5907\u800C\u4E0D\u8017\u5C3D\u8425\u8FD0\u8D44\u91D1\uFF0C\u4FDD\u6301\u73B0\u91D1\u6D41\u7528\u4E8E\u8FD0\u8425\u548C\u589E\u957F\u3002"
    },
    {
      question: "\u60A8\u7684\u5BA1\u6279\u6D41\u7A0B\u4E0E\u94F6\u884C\u5728\u673A\u68B0\u878D\u8D44\u65B9\u9762\u6709\u4F55\u4E0D\u540C\uFF1F",
      answer: "\u4F5C\u4E3A\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u6BD4\u94F6\u884C\u66F4\u4E86\u89E3\u673A\u68B0\u4EF7\u503C\u548C\u5546\u4E1A\u8FD0\u8425\u3002\u6211\u4EEC\u8BC4\u4F30\u8BBE\u5907\u72B6\u51B5\u3001\u5546\u4E1A\u6F5C\u529B\u548C\u884C\u4E1A\u77E5\u8BC6\uFF0C\u800C\u975E\u9075\u5FAA\u50F5\u5316\u7684\u94F6\u884C\u516C\u5F0F\u3002\u8FD9\u4E3A\u4F18\u8D28\u673A\u68B0\u5E26\u6765\u66F4\u5FEB\u7684\u5BA1\u6279\u3002"
    },
    {
      question: "\u60A8\u662F\u5426\u4E3A\u5DE5\u4E1A4.0\u548C\u81EA\u52A8\u5316\u5347\u7EA7\u63D0\u4F9B\u878D\u8D44\uFF1F",
      answer: "\u5F53\u7136\uFF01\u6211\u4EEC\u7684\u673A\u68B0\u878D\u8D44\u516C\u53F8\u4E13\u95E8\u4ECE\u4E8B\u6280\u672F\u878D\u8D44\uFF0C\u5305\u62EC\u5DE5\u4E1A4.0\u5347\u7EA7\u3001\u81EA\u52A8\u5316\u7CFB\u7EDF\u3001\u7269\u8054\u7F51\u8BBE\u5907\u548C\u667A\u80FD\u5236\u9020\u89E3\u51B3\u65B9\u6848\u3002\u6211\u4EEC\u4E86\u89E3\u8FD9\u4E9B\u6295\u8D44\u63A8\u52A8\u7ADE\u4E89\u4F18\u52BF\u548C\u8FD0\u8425\u6548\u7387\u3002"
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);
  const productSchema = generateProductSchema({
    name: "\u673A\u68B0\u878D\u8D44\u89E3\u51B3\u65B9\u6848",
    description: "\u6570\u63A7\u673A\u5E8A\u3001\u751F\u4EA7\u7EBF\u548C\u5236\u9020\u6280\u672F\u7684\u7EFC\u5408\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44",
    category: "\u91D1\u878D\u670D\u52A1",
    brand: COMPANY_INFO.shortName,
    offers: {
      price: "\u4F18\u60E0\u5229\u7387\u4ECE6.5%\u5E74\u5229\u7387\u8D77",
      currency: "MYR",
      availability: "\u6709\u5E93\u5B58",
      validFrom: (/* @__PURE__ */ new Date()).toISOString()
    }
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": productSchema })}  ${maybeRenderHead()}<div class="bg-blue-50 border-b-3 border-navy-900"> <div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang })} </div> </div>  <section class="hero relative overflow-hidden"> <div class="container-custom relative z-10 text-center py-20"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-tight mb-6 text-white">
马来西亚领先 <span class="text-yellow-400">机械融资</span> 公司
</h1> <p class="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
工业设备专家 • 数控融资专家 • 制造技术合作伙伴
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-12 py-6">
获取工业设备报价
</a> <a href="/zh/calculator" class="btn btn-outline-white text-xl px-12 py-6">
计算机械付款
</a> </div> </div> <div class="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
当银行不懂 <span class="text-secondary">工业设备</span> 时
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"> <!-- Pain Point 1: Equipment Age Rejection --> <div class="bg-red-50 border-l-8 border-red-500 p-8"> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">"太旧"的问题</h3> <p class="text-gray-700 text-lg leading-relaxed mb-6">
当您的生产线设备出现故障，银行说"我们不为超过5年的机械提供融资"，但您知道那台德国制造的数控机床还有10年以上的使用寿命，您是否对他们对工业设备质量的无知感到沮丧？
</p> <div class="bg-white border-3 border-navy-900 p-6 shadow-brutal-md"> <p class="text-secondary font-black text-lg mb-2">✓ 我们机械融资公司的解决方案：</p> <p class="text-gray-700">我们评估设备状况和商业潜力，而非任意的年限限制。我们经常为10-15年的工业机械提供融资，这些机械仍然高度生产。</p> </div> </div> <!-- Pain Point 2: Competitive Pressure --> <div class="bg-red-50 border-l-8 border-red-500 p-8"> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">工业4.0竞争差距</h3> <p class="text-gray-700 text-lg leading-relaxed mb-6">
当竞争对手升级到工业4.0自动化，而您的贷款申请在银行官僚机构中卡了8周，看着市场份额流失时，这种竞争压力是否让您焦虑不安？
</p> <div class="bg-white border-3 border-navy-900 p-6 shadow-brutal-md"> <p class="text-secondary font-black text-lg mb-2">✓ 我们机械融资公司的解决方案：</p> <p class="text-gray-700">快速批准技术升级和自动化系统。我们了解这些投资推动竞争优势，不会延迟您的现代化进程。</p> </div> </div> <!-- Pain Point 3: Cash Flow Impact --> <div class="bg-red-50 border-l-8 border-red-500 p-8"> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">营运资金耗尽</h3> <p class="text-gray-700 text-lg leading-relaxed mb-6">
当您需要RM 800,000用于生产设备但银行要求30%首付时，看着RM 240,000从您的营运资金账户流出，知道运营将缺乏现金，是否让您的胃部紧张？
</p> <div class="bg-white border-3 border-navy-900 p-6 shadow-brutal-md"> <p class="text-secondary font-black text-lg mb-2">✓ 我们机械融资公司的解决方案：</p> <p class="text-gray-700">0%首付选项，高达100%融资。在获得必要生产设备的同时保持营运资金用于运营。</p> </div> </div> <!-- Pain Point 4: Equipment Expertise Gap --> <div class="bg-red-50 border-l-8 border-red-500 p-8"> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">银行设备无知</h3> <p class="text-gray-700 text-lg leading-relaxed mb-6">
当银行贷款官员问"数控机床值多少钱？"同时按废金属价格评估您的RM 1.2百万瑞士精密设备时，他们的工业无知是否让您血压飙升？
</p> <div class="bg-white border-3 border-navy-900 p-6 shadow-brutal-md"> <p class="text-secondary font-black text-lg mb-2">✓ 我们机械融资公司的解决方案：</p> <p class="text-gray-700">工业设备专家，了解机械价值、技术生命周期和制造业务运营。我们说您的语言。</p> </div> </div> </div> </div> </section>  <section class="section bg-blue-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
马来西亚工业设备 <span class="text-secondary">融资专家</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-4xl mx-auto text-xl">
作为专业的机械融资公司，我们理解工业设备不仅仅是资产——它们是制造卓越和竞争优势的心脏。
</p> </div> <!-- Authority Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <!-- CNC Machinery Specialists --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8"> <div class="text-6xl mb-6 text-center">🔧</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">数控机械专家</h3> <p class="text-gray-700 leading-relaxed mb-6">
瑞士、德国、日本精密设备融资专家。我们比任何银行更了解Mazak、DMG Mori、Haas的价值和技术生命周期。
</p> <ul class="space-y-2"> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">多轴加工中心</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">车削和铣削机械</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">精密磨削设备</span> </li> </ul> </div> <!-- Production Line Financing --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8"> <div class="text-6xl mb-6 text-center">🏭</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">生产线专家</h3> <p class="text-gray-700 leading-relaxed mb-6">
从注塑到装配自动化的完整制造系统融资。我们资助整个生产能力升级。
</p> <ul class="space-y-2"> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">注塑系统</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">装配线自动化</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">质量控制设备</span> </li> </ul> </div> <!-- Technology Upgrade Partners --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8"> <div class="text-6xl mb-6 text-center">🚀</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">技术合作伙伴</h3> <p class="text-gray-700 leading-relaxed mb-6">
工业4.0转型融资，包括物联网集成、智能传感器和自动化监控系统，推动竞争优势。
</p> <ul class="space-y-2"> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">物联网设备</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">自动化监控系统</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">智能制造解决方案</span> </li> </ul> </div> </div> <!-- Manufacturing Sectors --> <div class="bg-white border-3 border-navy-900 shadow-brutal-xl p-8"> <h3 class="text-3xl font-display uppercase text-navy-900 mb-8 text-center">我们服务的制造业</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> <div class="text-center p-4"> <div class="text-4xl mb-2">⚙️</div> <p class="font-black text-navy-900">汽车零部件</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">🏗️</div> <p class="font-black text-navy-900">建筑组件</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">📱</div> <p class="font-black text-navy-900">电子制造</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">🍽️</div> <p class="font-black text-navy-900">食品加工</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">🧪</div> <p class="font-black text-navy-900">化学处理</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">📦</div> <p class="font-black text-navy-900">包装系统</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">🔩</div> <p class="font-black text-navy-900">精密工程</p> </div> <div class="text-center p-4"> <div class="text-4xl mb-2">⚡</div> <p class="font-black text-navy-900">电气设备</p> </div> </div> </div> </div> </section>  <section class="section bg-secondary text-white relative" style="border-top: 8px solid #FBBF24;"> <div class="container-custom text-center"> <h2 class="text-5xl md:text-6xl font-display uppercase mb-6">
准备好为您的 <span class="text-yellow-500">工业设备</span> 融资了吗？
</h2> <p class="text-xl mb-12 text-white opacity-90 max-w-4xl mx-auto">
加入马来西亚领先的机械融资公司。获得数控机床、生产线和制造技术融资的专家指导，提供0%首付选项。
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-12 py-6">
WhatsApp工业设备报价
</a> <a href="/zh/contact" class="btn btn-outline-white text-xl px-12 py-6">
获取机械融资报价
</a> </div> <div class="mt-8 text-white"> <p class="text-lg">
致电我们的机械融资专家：
<a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="text-yellow-400 font-black hover:underline" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.5);"> ${COMPANY_INFO.phone.display} </a> </p> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-5xl md:text-6xl font-display uppercase mb-6 text-navy-900">
获取您的 <span class="text-secondary">机械融资</span> 报价
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 text-xl">
联系马来西亚领先的机械融资公司，获得专业的工业设备融资解决方案
</p> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-xl p-8 md:p-12"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/machinery-finance-company.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/machinery-finance-company.astro";
const $$url = "/zh/machinery-finance-company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MachineryFinanceCompany,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

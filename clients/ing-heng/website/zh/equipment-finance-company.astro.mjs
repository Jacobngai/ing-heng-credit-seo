/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$EquipmentFinanceCompany = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u9A6C\u6765\u897F\u4E9A\u6700\u503C\u5F97\u4FE1\u8D56\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u81EA1985\u5E74 | Ing Heng Credit";
  const pageDescription = "\u9A6C\u6765\u897F\u4E9A\u9886\u5148\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u3002\u81EA1985\u5E74\u83B7KPKT\u8BB8\u53EF\uFF0C\u4E3A4,000+\u516C\u53F8\u63D0\u4F9B\u670D\u52A1\u30020%\u9996\u4ED8\u53EF\u7528\uFF0C\u5FEB\u901F\u6279\u51C6\uFF0C\u4E3A10+\u5E74\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u3002";
  const keywords = [
    "\u8BBE\u5907\u878D\u8D44\u516C\u53F8",
    "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u516C\u53F8",
    "\u8BBE\u5907\u91D1\u878D\u516C\u53F8\u9A6C\u6765\u897F\u4E9A",
    "\u9A6C\u6765\u897F\u4E9A\u6301\u724C\u8BBE\u5907\u878D\u8D44\u673A\u6784",
    "KPKT\u6301\u724C\u8BBE\u5907\u878D\u8D44\u516C\u53F8",
    "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44\u516C\u53F8",
    "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u79DF\u8D41\u516C\u53F8",
    "\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44\u516C\u53F8",
    "\u8BBE\u5907\u5206\u671F\u4ED8\u6B3E\u516C\u53F8",
    "\u9A6C\u6765\u897F\u4E9A\u673A\u68B0\u878D\u8D44\u516C\u53F8"
  ];
  const companyStats = [
    { number: "40+", label: "\u5E74\u7ECF\u9A8C", sublabel: "\u81EA1985\u5E74" },
    { number: "4,000+", label: "\u516C\u53F8\u878D\u8D44", sublabel: "\u5168\u9A6C\u6765\u897F\u4E9A" },
    { number: "0%", label: "\u6700\u4F4E\u9996\u4ED8", sublabel: "100%\u878D\u8D44\u53EF\u7528" },
    { number: "10+", label: "\u5E74\u8BBE\u5907\u5E74\u9F84", sublabel: "\u94F6\u884C\u62D2\u7EDD\u65F6" }
  ];
  const bankComparisons = [
    {
      title: "\u8BBE\u5907\u5E74\u9F84\u63A5\u53D7",
      bank: "\u94F6\u884C\u62D2\u7EDD3-5\u5E74\u8BBE\u5907",
      us: "\u6211\u4EEC\u4E3A10+\u5E74\u8BBE\u5907\u878D\u8D44",
      icon: "calendar"
    },
    {
      title: "\u9996\u4ED8\u8981\u6C42",
      bank: "\u94F6\u884C\u8981\u6C4220-30%\u9996\u4ED8",
      us: "0%\u9996\u4ED8\u53EF\u7528 - 100%\u878D\u8D44",
      icon: "cash"
    },
    {
      title: "\u6279\u51C6\u65F6\u95F4",
      bank: "\u94F6\u884C\u9700\u89812-4\u5468\u6279\u51C6",
      us: "\u7D27\u6025\u60C5\u51B5\u5FEB\u901F\u6279\u51C6",
      icon: "clock"
    },
    {
      title: "\u4FE1\u8D37\u8981\u6C42",
      bank: "\u94F6\u884C\u6709\u4E25\u683C\u4FE1\u8D37\u6807\u51C6",
      us: "\u7075\u6D3B\u8BC4\u4F30 - \u6211\u4EEC\u6279\u51C6\u94F6\u884C\u62D2\u7EDD\u7684",
      icon: "check-badge"
    }
  ];
  const specializations = [
    {
      title: "\u5EFA\u7B51\u8BBE\u5907",
      description: "\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u8F6E\u5F0F\u88C5\u8F7D\u673A\u3001\u8D77\u91CD\u673A\u3001\u538B\u8DEF\u673A\u3001\u538B\u5B9E\u673A",
      icon: "cog"
    },
    {
      title: "\u7269\u6D41\u8BBE\u5907",
      description: "\u7275\u5F15\u8F66\u3001\u96C6\u88C5\u7BB1\u62D6\u8F66\u3001\u81EA\u5378\u8F66\u3001\u914D\u9001\u5361\u8F66",
      icon: "truck"
    },
    {
      title: "\u5DE5\u4E1A\u8BBE\u5907",
      description: "\u53C9\u8F66\u3001\u53D1\u7535\u673A\u3001\u7A7A\u538B\u673A\u3001\u6570\u63A7\u673A\u5E8A\u3001\u751F\u4EA7\u7EBF",
      icon: "wrench-screwdriver"
    },
    {
      title: "\u4E13\u7528\u8F66\u8F86",
      description: "\u51B7\u85CF\u8F66\u3001\u9910\u8F66\u3001\u79FB\u52A8\u8D77\u91CD\u673A\u3001\u6316\u6398\u88C5\u8F7D\u673A",
      icon: "wrench"
    }
  ];
  const credentials = [
    {
      title: "\u81EA1985\u5E74KPKT\u6301\u724C",
      description: "\u9A6C\u6765\u897F\u4E9A\u623F\u5C4B\u548C\u5730\u65B9\u653F\u5E9C\u90E8\u5B8C\u5168\u8BB8\u53EF",
      icon: "shield"
    },
    {
      title: "\u6CD5\u89C4\u9075\u4ECE",
      description: "\u5B9A\u671F\u653F\u5E9C\u5BA1\u8BA1\u548C\u5B8C\u5168\u6CD5\u89C4\u9075\u4ECE",
      icon: "check-badge"
    },
    {
      title: "\u884C\u4E1A\u534F\u4F1A\u4F1A\u5458",
      description: "\u9A6C\u6765\u897F\u4E9A\u91D1\u878D\u670D\u52A1\u534F\u4F1A\u4F1A\u5458",
      icon: "users"
    },
    {
      title: "\u5168\u9A6C\u6765\u897F\u4E9A\u8986\u76D6",
      description: "\u8BB8\u53EF\u5728\u6240\u6709\u9A6C\u6765\u897F\u4E9A\u5DDE\u548C\u9886\u571F\u7ECF\u8425",
      icon: "location"
    }
  ];
  const faqs = [
    {
      question: "Ing Heng\u4F5C\u4E3A\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u4E0E\u94F6\u884C\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",
      answer: "\u4F5C\u4E3A\u4E13\u4E1A\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u4E13\u6CE8\u4E8E\u8BBE\u5907\u878D\u8D44\u3002\u4E0E\u94F6\u884C\u4E0D\u540C\uFF0C\u6211\u4EEC\u6279\u51C6\u9AD8\u8FBE10+\u5E74\u7684\u8BBE\u5907\uFF0C\u63D0\u4F9B0%\u9996\u4ED8\u9009\u62E9\uFF0C\u5E76\u6709\u66F4\u5FEB\u7684\u6279\u51C6\u6D41\u7A0B\u3002\u6211\u4EEC\u6BD4\u4E00\u822C\u94F6\u884C\u66F4\u4E86\u89E3\u8BBE\u5907\u4EF7\u503C\u548C\u5546\u4E1A\u8FD0\u8425\u3002"
    },
    {
      question: "\u60A8\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u5728\u9A6C\u6765\u897F\u4E9A\u6709\u8BB8\u53EF\u8BC1\u5417\uFF1F",
      answer: "\u662F\u7684\uFF0CIng Heng Credit & Leasing\u662F\u5728KPKT\uFF08\u623F\u5C4B\u548C\u5730\u65B9\u653F\u5E9C\u90E8\uFF09\u5B8C\u5168\u8BB8\u53EF\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\uFF0C\u81EA1985\u5E74\u8D77\u3002\u6211\u4EEC\u53D7\u76D1\u7BA1\u5E76\u9075\u5B88\u6240\u6709\u9A6C\u6765\u897F\u4E9A\u91D1\u878D\u670D\u52A1\u8981\u6C42\u3002"
    },
    {
      question: "\u60A8\u7684\u878D\u8D44\u516C\u53F8\u6DB5\u76D6\u4EC0\u4E48\u7C7B\u578B\u7684\u8BBE\u5907\uFF1F",
      answer: "\u6211\u4EEC\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u4E13\u95E8\u4ECE\u4E8B\u5EFA\u7B51\u8BBE\u5907\uFF08\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u8D77\u91CD\u673A\uFF09\u3001\u7269\u6D41\u8BBE\u5907\uFF08\u7275\u5F15\u8F66\u3001\u5361\u8F66\u3001\u62D6\u8F66\uFF09\u548C\u5DE5\u4E1A\u8BBE\u5907\uFF08\u53C9\u8F66\u3001\u53D1\u7535\u673A\u3001\u6570\u63A7\u673A\u5E8A\uFF09\u3002\u6211\u4EEC\u4E3A\u65B0\u8BBE\u5907\u548C\u4E8C\u624B\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u3002"
    },
    {
      question: "\u60A8\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u7ECF\u8425\u591A\u957F\u65F6\u95F4\u4E86\uFF1F",
      answer: "Ing Heng\u81EA1985\u5E74\u8D77\u4F5C\u4E3A\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u7ECF\u8425\uFF0C\u4E3A\u6211\u4EEC\u5728\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u9886\u57DF\u63D0\u4F9B\u4E86\u8D85\u8FC740\u5E74\u7684\u7ECF\u9A8C\u3002\u6211\u4EEC\u5DF2\u7ECF\u6210\u529F\u4E3A\u9A6C\u6765\u897F\u4E9A\u8D85\u8FC74,000\u5BB6\u516C\u53F8\u63D0\u4F9B\u878D\u8D44\u3002"
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })}  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u6700\u503C\u5F97\u4FE1\u8D56\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\u81EA1985\u5E74", "subtitle": "\u5F53\u94F6\u884C\u56E0\u4E3A\u673A\u68B08\u5E74\u7684\u5E74\u9F84\u800C\u62D2\u7EDD\u60A8\u7684\u8BBE\u5907\u878D\u8D44\u7533\u8BF7\u65F6\uFF0C\u60A8\u662F\u5426\u611F\u5230\u6CAE\u4E27\uFF0C\u660E\u77E5\u8BBE\u5907\u8FD0\u884C\u5B8C\u7F8E\u4F46\u5E74\u9F84\u9650\u5236\u4E86\u4ED6\u4EEC\u7684\u653E\u8D37\uFF1F\u4F5C\u4E3A\u9A6C\u6765\u897F\u4E9A\u9886\u5148\u7684\u8BBE\u5907\u878D\u8D44\u516C\u53F8\uFF0C\u6211\u4EEC\u6279\u51C6\u94F6\u884C\u62D2\u7EDD\u7684\u7533\u8BF7\u3002", "ctaText": "\u83B7\u53D6\u8BBE\u5907\u878D\u8D44\u62A5\u4EF7", "ctaLink": "/zh/contact", "ctaSecondaryText": "WhatsApp\u8054\u7CFB\u6211\u4EEC", "ctaSecondaryLink": COMPANY_INFO.whatsapp.link, "lang": lang, "trustSignals": ["1985\u5E74KPKT\u6301\u724C", "40+\u5E74\u7ECF\u9A8C", "\u5FEB\u901F\u6279\u51C6", "4,000+\u516C\u53F8\u878D\u8D44"] })}  ${maybeRenderHead()}<section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="max-w-5xl mx-auto"> <!-- Pain Points --> <div class="grid lg:grid-cols-2 gap-8 mb-12"> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h2 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 border-b-2 border-[#D4A574] pb-2">当银行说不时...</h2> <ul class="space-y-4 text-[#4F3E29]"> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">当传统放贷机构需要2-4周批准而您的项目截止日期在下个月时，那种时间压力是否让您夜不能寐？</span> </li> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">当您找到完美的8年挖掘机但银行仅因年龄拒绝时，您是否感到沮丧，明知它状况极佳？</span> </li> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">当银行要求30%首付而您需要现金用于运营时，您是否胸闷，想到现金流限制？</span> </li> </ul> </div> <div class="bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h2 class="text-2xl font-black uppercase mb-6 text-[#F5F5DC] border-b-2 border-[#D4A574] pb-2">我们说是！</h2> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">快速批准流程 - 当您急需设备时，我们快速响应</span> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">设备年龄不限制我们 - 我们根据工作状况为10+年机械融资</span> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">0%首付可用 - 融资高达100%设备价值以保持营运资本</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
马来西亚领先的设备融资公司
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
四十年设备融资经验，跨越建筑、物流和工业领域
</p> </div> <!-- Authority Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"> ${companyStats.map((stat) => renderTemplate`<div class="text-center bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="text-4xl md:text-5xl font-black text-[#8B6F47] mb-2">${stat.number}</div> <div class="text-[#4F3E29] font-bold uppercase text-sm tracking-tight">${stat.label}</div> <div class="text-[#4F3E29] text-xs mt-1">${stat.sublabel}</div> </div>`)} </div> <!-- Company Description --> <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 text-center">关于Ing Heng Credit & Leasing</h3> <p class="text-[#4F3E29] leading-relaxed font-medium mb-6 text-lg">
成立于<strong class="font-black text-[#8B6F47]">1985年</strong>，Ing Heng Credit & Leasing Sdn Bhd已发展成为马来西亚最值得信赖的设备融资公司。作为<strong class="font-black text-[#8B6F47]">KPKT持牌金融服务提供商</strong>，我们专门为建筑、物流和工业企业提供设备融资。
</p> <p class="text-[#4F3E29] leading-relaxed font-medium text-lg">
与将设备融资视为副业的银行不同，我们是专业的设备融资公司，了解机械价值、商业周期以及马来西亚依赖设备企业面临的独特挑战。
</p> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
设备融资公司 vs 传统银行
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
为什么选择专业设备融资公司而非一般银行服务？
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"> ${bankComparisons.map((comparison) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-center space-x-3 mb-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": comparison.icon, "title": comparison.title, "description": "" })} </div> <!-- Bank Approach --> <div class="mb-4 p-4 bg-red-50 border-l-4 border-red-400 rounded"> <h4 class="font-black text-red-700 text-sm uppercase tracking-tight mb-2">🏦 传统银行：</h4> <p class="text-red-600 font-medium text-sm">${comparison.bank}</p> </div> <!-- Our Approach --> <div class="p-4 bg-green-50 border-l-4 border-[#8B6F47] rounded"> <h4 class="font-black text-[#8B6F47] text-sm uppercase tracking-tight mb-2">✅ Ing Heng设备融资：</h4> <p class="text-[#4F3E29] font-medium text-sm">${comparison.us}</p> </div> </div>`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
设备融资公司专业领域
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
跨多种设备类别的深度专业知识
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${specializations.map((spec) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] border-l-[6px] border-l-[#8B6F47] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": spec.icon, "title": "", "description": "" })} <div> <h3 class="text-xl font-black uppercase text-[#8B6F47] mb-3">${spec.title}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${spec.description}</p> </div> </div> </div>`)} </div> <!-- Equipment Categories --> <div class="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[8px_8px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase mb-6 text-center text-[#F5F5DC]">我们融资的设备</h3> <div class="grid md:grid-cols-3 gap-6 text-sm"> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">建筑类</h4> <ul class="space-y-2"> <li>• 挖掘机（各种规格）</li> <li>• 推土机</li> <li>• 轮式装载机</li> <li>• 移动起重机</li> <li>• 压路机</li> <li>• 压实机</li> </ul> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">物流类</h4> <ul class="space-y-2"> <li>• 牵引车</li> <li>• 集装箱拖车</li> <li>• 自卸车</li> <li>• 配送卡车</li> <li>• 冷藏车</li> <li>• 专用拖车</li> </ul> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">工业类</h4> <ul class="space-y-2"> <li>• 叉车</li> <li>• 发电机</li> <li>• 空压机</li> <li>• 数控机床</li> <li>• 生产线</li> <li>• 工厂设备</li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
持牌和受监管的设备融资公司
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
完全法规遵从，让您安心
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${credentials.map((credential) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": credential.icon, "title": "", "description": "" })} <div> <h3 class="text-lg font-black uppercase text-[#8B6F47] mb-3">${credential.title}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${credential.description}</p> </div> </div> </div>`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
设备融资公司常见问题
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
关于我们设备融资公司服务的常见问题
</p> </div> <div class="max-w-4xl mx-auto space-y-6"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h3 class="text-lg font-black uppercase text-[#8B6F47] mb-3">${faq.question}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${faq.answer}</p> </div>`)} </div> </div> </section>  <section class="section bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-[#F5F5DC]">
选择马来西亚最值得信赖的设备融资公司
</h2> <p class="text-xl mb-8 max-w-3xl mx-auto font-bold">
40+年经验，4,000+公司融资，1985年KPKT持牌。银行说不时，我们说是。今天就获得设备融资批准。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u83B7\u53D6\u8BBE\u5907\u878D\u8D44\u62A5\u4EF7", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp" })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u81F4\u7535\u8BBE\u5907\u878D\u8D44\u56E2\u961F", "link": `tel:${COMPANY_INFO.phone.international}`, "variant": "outline-white", "size": "large", "icon": "phone" })} </div> <div class="mt-8 text-sm"> <p class="font-bold">专业设备融资公司 | 持牌受监管 | 快速批准可用</p> </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment-finance-company.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment-finance-company.astro";
const $$url = "/zh/equipment-finance-company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EquipmentFinanceCompany,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

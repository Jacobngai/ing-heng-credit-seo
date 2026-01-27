/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { f as generateServicePageSchema, a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Calculator } from '../../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

const $$EquipmentFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u8BBE\u5907\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | \u5FEB\u901F\u6279\u51C6 | Ing Heng Credit";
  const description = "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44\u4E13\u5BB6\u3002\u65E0\u9700\u9996\u4ED8\u3002\u878D\u8D4410\u5E74\u4EE5\u4E0A\u8BBE\u5907\u3002\u76F8\u6BD4\u94F6\u884C\u5FEB\u901F\u6279\u51C6\u3002\u5EFA\u7B51\u3001\u7269\u6D41\u548C\u5DE5\u4E1A\u8BBE\u5907\u3002";
  const keywords = [
    "\u8BBE\u5907\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44",
    "\u91CD\u578B\u8BBE\u5907\u8D37\u6B3E",
    "\u673A\u68B0\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u8BBE\u5907\u8D37\u6B3E\u9A6C\u6765\u897F\u4E9A",
    "\u6316\u6398\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u8D27\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u53C9\u8F66\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u8BBE\u5907\u5206\u671F\u4ED8\u6B3E\u9A6C\u6765\u897F\u4E9A",
    "\u5EFA\u7B51\u8BBE\u5907\u8D37\u6B3E",
    "\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44",
    "\u5FEB\u901F\u8BBE\u5907\u878D\u8D44",
    "\u8BBE\u5907\u878D\u8D44\u4E0D\u826F\u4FE1\u8D37",
    "\u96F6\u9996\u4ED8\u8BBE\u5907\u878D\u8D44"
  ];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u670D\u52A1", href: "/zh/services" },
    { label: "\u8BBE\u5907\u878D\u8D44", href: "/zh/services/equipment-financing" }
  ];
  const faqs = [
    {
      question: "\u4F60\u4EEC\u5728\u9A6C\u6765\u897F\u4E9A\u878D\u8D44\u4EC0\u4E48\u7C7B\u578B\u7684\u8BBE\u5907\uFF1F",
      answer: "\u6211\u4EEC\u878D\u8D44\u6240\u6709\u7C7B\u578B\u7684\u5546\u4E1A\u8BBE\u5907\uFF0C\u5305\u62EC\u6316\u6398\u673A\u3001\u8D27\u8F66\u3001\u53C9\u8F66\u3001\u8D77\u91CD\u673A\u3001\u63A8\u571F\u673A\u3001\u62D6\u8F66\u5934\u3001\u96C6\u88C5\u7BB1\u62D6\u8F66\u3001\u53CD\u94F2\u3001\u8F6E\u5F0F\u88C5\u8F7D\u673A\u548C\u5DE5\u4E1A\u673A\u68B0\u3002\u6211\u4EEC\u4E5F\u4E3A\u5EFA\u7B51\u3001\u7269\u6D41\u3001\u5236\u9020\u548C\u4ED3\u50A8\u8FD0\u8425\u7684\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u3002"
    },
    {
      question: "\u8BBE\u5907\u878D\u8D44\u9700\u8981\u9996\u4ED8\u5417\uFF1F",
      answer: "\u65E0\u9700\u9996\u4ED8\uFF01\u6211\u4EEC\u4E3A\u5408\u683C\u7684\u8BBE\u5907\u91C7\u8D2D\u63D0\u4F9B100%\u878D\u8D44\u3002\u8FD9\u610F\u5473\u7740\u60A8\u53EF\u4EE5\u96F6\u9996\u4ED8\u83B7\u5F97\u8BBE\u5907\uFF0C\u4FDD\u7559\u60A8\u7684\u8425\u8FD0\u8D44\u91D1\u7528\u4E8E\u4E1A\u52A1\u8FD0\u8425\u3002"
    },
    {
      question: "\u8BBE\u5907\u591A\u8001\u624D\u80FD\u83B7\u5F97\u878D\u8D44\u6279\u51C6\uFF1F",
      answer: "\u6211\u4EEC\u878D\u8D4410\u5E74\u4EE5\u4E0A\u7684\u8BBE\u5907\uFF0C\u4E0D\u50CF\u94F6\u884C\u901A\u5E38\u62D2\u7EDD\u8001\u65E7\u8BBE\u5907\u3002\u5373\u4F7F\u662F15\u5E74\u7684\u8BBE\u5907\uFF0C\u5982\u679C\u7EF4\u62A4\u826F\u597D\u4E5F\u53EF\u4EE5\u878D\u8D44\u3002\u6211\u4EEC\u8BC4\u4F30\u5DE5\u4F5C\u72B6\u6001\u548C\u5546\u4E1A\u53EF\u884C\u6027\uFF0C\u800C\u4E0D\u662F\u4EFB\u610F\u7684\u5E74\u9F84\u9650\u5236\u3002"
    },
    {
      question: "\u76F8\u6BD4\u94F6\u884C\uFF0C\u6279\u51C6\u8FC7\u7A0B\u6709\u591A\u5FEB\uFF1F",
      answer: "\u6211\u4EEC\u7684\u6279\u51C6\u8FC7\u7A0B\u6BD4\u4F20\u7EDF\u94F6\u884C\u5FEB\u5F97\u591A\u3002\u94F6\u884C\u9700\u89812-4\u5468\uFF0C\u6211\u4EEC\u901A\u8FC7\u7B80\u5316\u7684\u6D41\u7A0B\u548C\u7ECF\u9A8C\u4E30\u5BCC\u7684\u56E2\u961F\u5FEB\u901F\u54CD\u5E94\u60A8\u7684\u7533\u8BF7\u3002"
    },
    {
      question: "\u8BBE\u5907\u878D\u8D44\u7533\u8BF7\u9700\u8981\u4EC0\u4E48\u6587\u4EF6\uFF1F",
      answer: "\u57FA\u672C\u4E1A\u52A1\u6CE8\u518C\u6587\u4EF6\u3001\u8D22\u52A1\u62A5\u8868\uFF08\u5C0F\u4F01\u4E1A\u7B80\u5316\uFF09\u3001\u8BBE\u5907\u62A5\u4EF7\u6216\u8BC4\u4F30\uFF0C\u4EE5\u53CA\u8463\u4E8B\u8EAB\u4EFD\u8BC1\u660E\u3002\u6211\u4EEC\u4FDD\u6301\u6587\u4EF6\u8981\u6C42\u6700\u5C11\u4E14\u7B80\u5355\u3002"
    },
    {
      question: "\u4FE1\u8D37\u4E0D\u826F\u7684\u516C\u53F8\u80FD\u83B7\u5F97\u8BBE\u5907\u878D\u8D44\u5417\uFF1F",
      answer: "\u662F\u7684\uFF0C\u6211\u4EEC\u8003\u8651\u6709\u6311\u6218\u6027\u4FE1\u8D37\u5386\u53F2\u7684\u516C\u53F8\u7533\u8BF7\u3002\u6211\u4EEC\u5173\u6CE8\u4E1A\u52A1\u53EF\u884C\u6027\u3001\u8BBE\u5907\u72B6\u51B5\u548C\u672A\u6765\u73B0\u91D1\u6D41\u6F5C\u529B\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u8FC7\u53BB\u7684\u4FE1\u8D37\u8BC4\u5206\u3002"
    },
    {
      question: "\u8BBE\u5907\u878D\u8D44\u7684\u5178\u578B\u8D37\u6B3E\u671F\u9650\u662F\u591A\u5C11\uFF1F",
      answer: "\u6839\u636E\u8BBE\u5907\u7C7B\u578B\u3001\u5E74\u9F84\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u7075\u6D3B\u671F\u9650\u4ECE12\u523060\u4E2A\u6708\u3002\u6211\u4EEC\u5B9A\u5236\u4ED8\u6B3E\u8BA1\u5212\u4EE5\u5339\u914D\u60A8\u7684\u4E1A\u52A1\u73B0\u91D1\u6D41\u6A21\u5F0F\u3002"
    },
    {
      question: "\u4F60\u4EEC\u878D\u8D44\u65B0\u8BBE\u5907\u548C\u4E8C\u624B\u8BBE\u5907\u5417\uFF1F",
      answer: "\u662F\u7684\uFF0C\u6211\u4EEC\u878D\u8D44\u65B0\u8BBE\u5907\u548C\u4E8C\u624B\u8BBE\u5907\u3002\u5B9E\u9645\u4E0A\uFF0C\u4E8C\u624B\u8BBE\u5907\u901A\u5E38\u63D0\u4F9B\u66F4\u597D\u7684\u4EF7\u503C - \u901A\u5E38\u6BD4\u65B0\u7684\u4FBF\u5B9C60%\uFF0C\u540C\u65F6\u5728\u8BB8\u591A\u5E74\u5185\u4FDD\u6301\u4F18\u5F02\u7684\u751F\u4EA7\u529B\u3002"
    },
    {
      question: "\u6211\u80FD\u4E3A\u73B0\u6709\u8BBE\u5907\u8D37\u6B3E\u8FDB\u884C\u518D\u878D\u8D44\u5417\uFF1F",
      answer: "\u662F\u7684\uFF0C\u6211\u4EEC\u4E3A\u73B0\u6709\u8BBE\u5907\u8D37\u6B3E\u63D0\u4F9B\u518D\u878D\u8D44\u3002\u8FD9\u53EF\u4EE5\u5E2E\u52A9\u964D\u4F4E\u6708\u4ED8\u6B3E\u3001\u91CA\u653E\u73B0\u91D1\u6D41\uFF0C\u6216\u5C06\u591A\u4E2A\u8BBE\u5907\u8D37\u6B3E\u5408\u5E76\u4E3A\u4E00\u4E2A\u53EF\u7BA1\u7406\u7684\u4ED8\u6B3E\u3002"
    },
    {
      question: "\u4F60\u4EEC\u4E3A\u54EA\u4E9B\u884C\u4E1A\u63D0\u4F9B\u8BBE\u5907\u878D\u8D44\u670D\u52A1\uFF1F",
      answer: "\u6211\u4EEC\u670D\u52A1\u5EFA\u7B51\u627F\u5305\u5546\u3001\u7269\u6D41\u516C\u53F8\u3001\u5236\u9020\u4F01\u4E1A\u3001\u91C7\u77F3\u573A\u8FD0\u8425\u5546\u3001\u6CB9\u68D5\u56ED\u3001\u623F\u5730\u4EA7\u5F00\u53D1\u5546\u3001\u4ED3\u50A8\u8FD0\u8425\u4EE5\u53CA\u4EFB\u4F55\u9700\u8981\u751F\u4EA7\u6027\u8BBE\u5907\u7684\u4F01\u4E1A\u3002"
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServicePageSchema({
    serviceName: "\u8BBE\u5907\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u4E3A\u9A6C\u6765\u897F\u4E9A\u5EFA\u7B51\u3001\u7269\u6D41\u548C\u5DE5\u4E1A\u8BBE\u5907\u63D0\u4F9B\u4E13\u4E1A\u8BBE\u5907\u878D\u8D44\u89E3\u51B3\u65B9\u6848",
    serviceType: "\u8BBE\u5907\u878D\u8D44",
    minRate: "5.5",
    maxRate: "12.0",
    locale: lang
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": serviceSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })}  ${maybeRenderHead()}<div class="bg-blue-50 border-b-3 border-navy-900"> <div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang })} </div> </div>  <section class="hero relative overflow-hidden bg-gradient-to-br from-primary to-secondary"> <div class="container-custom relative z-10 text-center py-20"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-tight mb-6 text-white">
马来西亚<span class="text-yellow-400">设备融资</span> </h1> <p class="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed"> <strong class="text-yellow-400">无需首付。</strong>融资10年以上设备。
        相比银行快速批准。今天就获得您的设备。
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-accent text-xl px-12 py-6">
立即WhatsApp报价
</a> <a href="#calculator" class="btn btn-outline-white text-xl px-12 py-6">
计算付款
</a> </div> </div> <div class="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
您是否正在<span class="text-secondary">经历这种现实</span>？
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"> <!-- Pain Point 1: Rental Dependency --> <div class="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg"> <div class="text-6xl mb-4">😣</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">租赁公司的电话</h3> <p class="text-gray-700 leading-relaxed text-lg mb-4">
当租赁公司在下午5点打电话说"我们需要明天早上收回挖掘机"，
            而您有三个住宅项目的全天挖掘工作安排时，
            您是否感到<strong>胸口发慌</strong>，知道您将失去那笔1.8万令吉的合同？
</p> <p class="text-gray-700 leading-relaxed"> <strong class="text-red-600">您的设备。您的时间表。您的控制权。</strong> </p> </div> <!-- Pain Point 2: Monthly Rental Drain --> <div class="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg"> <div class="text-6xl mb-4">💸</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">1.6万令吉支票</h3> <p class="text-gray-700 leading-relaxed text-lg mb-4">
当您每月为采石场的轮式装载机开出1.6万令吉的租赁支票，
            走过那台您并不拥有的12年机器时，
            是否感觉像是<strong>往一个永远填不满的洞里倒钱</strong>？
</p> <p class="text-gray-700 leading-relaxed"> <strong class="text-red-600">建立资产。保留利润。拥有您的资产。</strong> </p> </div> <!-- Pain Point 3: Revenue Sharing --> <div class="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg"> <div class="text-6xl mb-4">📊</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">运输分成</h3> <p class="text-gray-700 leading-relaxed text-lg mb-4">
当您计算项目成本，发现1.5万令吉要给运输承包商 - 而不是给您 -
            您是否<strong>感到肩膀紧张</strong>，想着有多少次您付出了这笔钱
            而不是建设自己的物流车队？
</p> <p class="text-gray-700 leading-relaxed"> <strong class="text-red-600">获取全部利润。停止富裕他人。</strong> </p> </div> <!-- Pain Point 4: Bank Rejection --> <div class="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg"> <div class="text-6xl mb-4">❌</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">银行说"不"</h3> <p class="text-gray-700 leading-relaxed text-lg mb-4">
当银行职员说"抱歉，这台8年的小松PC210太旧了，无法融资"，
            而您知道同样的机器仍在雪兰莪州各地的采石场每天工作12小时时，
            您是否感到<strong>胸中燃烧的挫败感</strong>，知道他们不了解您的行业？
</p> <p class="text-gray-700 leading-relaxed"> <strong class="text-red-600">银行拒绝旧设备。我们说可以。</strong> </p> </div> </div> <div class="text-center mt-16"> <div class="bg-gradient-to-r from-secondary to-primary p-8 rounded-xl shadow-[8px_8px_0_#2D1810] max-w-4xl mx-auto"> <h3 class="text-3xl font-display uppercase text-white mb-4">停止生活在这种现实中</h3> <p class="text-xl text-white mb-6 leading-relaxed"> <strong>拥有您的设备。</strong>控制您的运营。建立您的企业资产。
            无需首付即可获得100%融资。
</p> <a href="#benefits" class="btn btn-accent text-lg px-10 py-4 inline-block">
看我们如何帮助您
</a> </div> </div> </div> </section>  <section class="section bg-blue-50" id="benefits"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
什么是<span class="text-secondary">设备融资</span>？
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-4xl mx-auto text-xl leading-relaxed">
设备融资是专门为帮助公司获得生产性设备而设计的商业贷款。
          您可以立即使用设备，同时通过负担得起的月付款完全拥有它。
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h3 class="text-3xl font-display uppercase text-navy-900 mb-6">工作原理</h3> <div class="space-y-6"> <div class="flex items-start"> <div class="bg-yellow-400 border-3 border-navy-900 w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 shadow-[4px_4px_0_#2D1810]"> <span class="text-2xl font-bold text-navy-900">1</span> </div> <div> <h4 class="text-xl font-bold text-navy-900 mb-2">选择您的设备</h4> <p class="text-gray-700 leading-relaxed">
选择任何商业设备：挖掘机、货车、叉车、起重机或工业机械。
                  新的或二手的，甚至10年以上的。
</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 border-3 border-navy-900 w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 shadow-[4px_4px_0_#2D1810]"> <span class="text-2xl font-bold text-navy-900">2</span> </div> <div> <h4 class="text-xl font-bold text-navy-900 mb-2">申请融资</h4> <p class="text-gray-700 leading-relaxed">
提交基本的企业文件。我们保持简单 - 没有复杂的文书工作或冗长的流程。
</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 border-3 border-navy-900 w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 shadow-[4px_4px_0_#2D1810]"> <span class="text-2xl font-bold text-navy-900">3</span> </div> <div> <h4 class="text-xl font-bold text-navy-900 mb-2">获得快速批准</h4> <p class="text-gray-700 leading-relaxed">
获得比银行快得多的批准。我们了解您的业务需求并快速做出决定。
</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 border-3 border-navy-900 w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 shadow-[4px_4px_0_#2D1810]"> <span class="text-2xl font-bold text-navy-900">4</span> </div> <div> <h4 class="text-xl font-bold text-navy-900 mb-2">拥有您的设备</h4> <p class="text-gray-700 leading-relaxed">
支付负担得起的月付款，同时使用设备产生收入。
                  每次付款都在建立资产，直到您完全拥有它。
</p> </div> </div> </div> </div> <div class="bg-white border-3 border-navy-900 shadow-[8px_8px_0_#2D1810] p-8 rounded-lg"> <h3 class="text-2xl font-display uppercase text-navy-900 mb-6 text-center">主要优势</h3> <div class="space-y-4"> <div class="flex items-center"> <span class="text-green-500 text-2xl mr-4">✓</span> <span class="text-gray-700 font-medium">无需首付 - 提供100%融资</span> </div> <div class="flex items-center"> <span class="text-green-500 text-2xl mr-4">✓</span> <span class="text-gray-700 font-medium">接受10年以上设备</span> </div> <div class="flex items-center"> <span class="text-green-500 text-2xl mr-4">✓</span> <span class="text-gray-700 font-medium">相比银行快速批准</span> </div> <div class="flex items-center"> <span class="text-green-500 text-2xl mr-4">✓</span> <span class="text-gray-700 font-medium">灵活期限12-60个月</span> </div> <div class="flex items-center"> <span class="text-green-500 text-2xl mr-4">✓</span> <span class="text-gray-700 font-medium">建立企业资产，而非租赁费用</span> </div> <div class="flex items-center"> <span class="text-green-500 text-2xl mr-4">✓</span> <span class="text-gray-700 font-medium">税收优惠和折旧优势</span> </div> </div> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
我们融资的<span class="text-secondary">设备</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
从建筑工地到仓库，我们为马来西亚各地的所有生产性商业设备提供融资
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Construction Equipment --> <div class="bg-gradient-to-br from-blue-50 to-blue-100 border-3 border-navy-900 shadow-[6px_6px_0_#2D1810] p-8 rounded-lg hover:shadow-[8px_8px_0_#2D1810] transition-all hover:-translate-y-1"> <div class="text-6xl mb-6 text-center">🚜</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4 text-center">建筑设备</h3> <ul class="space-y-3"> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/excavator" class="text-gray-700 hover:text-secondary font-medium">挖掘机融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/bulldozer" class="text-gray-700 hover:text-secondary font-medium">推土机融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/crane" class="text-gray-700 hover:text-secondary font-medium">起重机融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/wheel-loader" class="text-gray-700 hover:text-secondary font-medium">轮式装载机融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/backhoe" class="text-gray-700 hover:text-secondary font-medium">反铲融资</a> </li> </ul> </div> <!-- Logistics Equipment --> <div class="bg-gradient-to-br from-green-50 to-green-100 border-3 border-navy-900 shadow-[6px_6px_0_#2D1810] p-8 rounded-lg hover:shadow-[8px_8px_0_#2D1810] transition-all hover:-translate-y-1"> <div class="text-6xl mb-6 text-center">🚛</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4 text-center">物流设备</h3> <ul class="space-y-3"> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/lorry" class="text-gray-700 hover:text-secondary font-medium">货车融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/prime-mover" class="text-gray-700 hover:text-secondary font-medium">拖车头融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/container-trailer" class="text-gray-700 hover:text-secondary font-medium">集装箱拖车融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/refrigerated-truck" class="text-gray-700 hover:text-secondary font-medium">冷藏车融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <span class="text-gray-700">货运面包车融资</span> </li> </ul> </div> <!-- Industrial Equipment --> <div class="bg-gradient-to-br from-purple-50 to-purple-100 border-3 border-navy-900 shadow-[6px_6px_0_#2D1810] p-8 rounded-lg hover:shadow-[8px_8px_0_#2D1810] transition-all hover:-translate-y-1"> <div class="text-6xl mb-6 text-center">🏭</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4 text-center">工业设备</h3> <ul class="space-y-3"> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <a href="/zh/equipment/forklift" class="text-gray-700 hover:text-secondary font-medium">叉车融资</a> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <span class="text-gray-700">发电机融资</span> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <span class="text-gray-700">压缩机融资</span> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <span class="text-gray-700">制造设备</span> </li> <li class="flex items-center"> <span class="text-secondary mr-3">▸</span> <span class="text-gray-700">农业机械</span> </li> </ul> </div> </div> <div class="text-center mt-12"> <p class="text-gray-700 text-lg mb-6">
没有看到您的设备类型？我们几乎为所有生产性商业设备提供融资。
</p> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-primary text-lg px-10 py-4">
询问您的设备
</a> </div> </div> </section>  <section class="section bg-secondary text-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6">
为什么选择我们而不是<span class="text-yellow-400">银行和租赁</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- vs Banks --> <div class="bg-white/10 backdrop-blur-sm border-3 border-white/30 p-8 rounded-lg"> <h3 class="text-3xl font-display uppercase mb-6 text-yellow-400">对比传统银行</h3> <div class="space-y-4"> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">设备年龄：接受10年以上</h4> <p class="text-white/80">银行拒绝5年以上的设备。我们融资仍然生产性的10年以上设备。</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">速度：快速批准对比2-4周</h4> <p class="text-white/80">银行需要数周的复杂流程。我们通过简化的批准提供快速响应。</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">文档：简单对比复杂</h4> <p class="text-white/80">银行需要大量文件。我们保持简单，最少的文档需求。</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">行业知识：设备专家</h4> <p class="text-white/80">银行不了解设备价值。我们深入了解建筑和物流设备。</p> </div> </div> </div> </div> <!-- vs Rental --> <div class="bg-white/10 backdrop-blur-sm border-3 border-white/30 p-8 rounded-lg"> <h3 class="text-3xl font-display uppercase mb-6 text-yellow-400">对比设备租赁</h3> <div class="space-y-4"> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">所有权：建立资产对比费用</h4> <p class="text-white/80">租赁是纯费用。融资通过每次付款建立企业资产和净值。</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">控制：您的时间表对比他们的时间表</h4> <p class="text-white/80">租赁公司决定可用性。您完全控制自己的设备。</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">成本：固定付款对比上涨租金</h4> <p class="text-white/80">租赁成本年年上涨。融资锁定固定付款直到您拥有它。</p> </div> </div> <div class="flex items-start"> <div class="bg-yellow-400 text-navy-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-lg font-bold flex-shrink-0">
✓
</div> <div> <h4 class="font-bold text-white mb-1">税收优惠：折旧对比纯费用</h4> <p class="text-white/80">拥有的设备提供折旧优惠。租赁只是运营费用。</p> </div> </div> </div> </div> </div> </div> </section>  <section class="section bg-blue-50" id="calculator"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
计算您的<span class="text-secondary">月付款</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
看看设备所有权有多负担得起。调整数值以匹配您的设备和情况。
</p> </div> <div class="max-w-2xl mx-auto"> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "\u8BBE\u5907", "defaultPrice": 2e5, "minDownPayment": 0 })} </div> </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
常见问题<span class="text-secondary">解答</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
获得关于马来西亚设备融资最常见问题的答案
</p> </div> <div class="max-w-4xl mx-auto space-y-6"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white border-3 border-navy-900 shadow-[4px_4px_0_#2D1810] rounded-lg overflow-hidden"> <details class="group"> <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"> <h3 class="text-lg font-bold text-navy-900 pr-4">${faq.question}</h3> <span class="text-2xl text-secondary group-open:rotate-180 transition-transform">▼</span> </summary> <div class="px-6 pb-6"> <p class="text-gray-700 leading-relaxed">${unescapeHTML(faq.answer)}</p> </div> </details> </div>`)} </div> <div class="text-center mt-12"> <p class="text-gray-700 text-lg mb-6">
还有更多问题吗？我们的设备融资专家随时为您服务。
</p> <a href="/zh/contact" class="btn btn-primary text-lg px-10 py-4">
提出您的问题
</a> </div> </div> </section>  <section class="section bg-gradient-to-br from-secondary to-primary text-white relative"> <div class="container-custom text-center"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6">
停止<span class="text-yellow-400">租赁。</span>开始<span class="text-yellow-400">拥有。</span> </h2> <p class="text-xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed"> <strong>您的设备。您的时间表。您的资产。</strong>
无需首付即可获得100%融资批准。
        甚至接受10年以上设备。
</p> <div class="bg-white/10 backdrop-blur-sm border-3 border-white/30 p-8 rounded-xl max-w-2xl mx-auto mb-8"> <h3 class="text-2xl font-display uppercase text-yellow-400 mb-4">免费咨询包括：</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"> <div class="flex items-center"> <span class="text-yellow-400 mr-3 text-xl">▸</span> <span>设备估值评估</span> </div> <div class="flex items-center"> <span class="text-yellow-400 mr-3 text-xl">▸</span> <span>融资选项比较</span> </div> <div class="flex items-center"> <span class="text-yellow-400 mr-3 text-xl">▸</span> <span>月付款计算</span> </div> <div class="flex items-center"> <span class="text-yellow-400 mr-3 text-xl">▸</span> <span>文档要求审查</span> </div> </div> </div> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-accent text-xl px-12 py-6">
WhatsApp免费咨询
</a> <a href="/zh/contact" class="btn btn-outline-white text-xl px-12 py-6">
获取书面报价
</a> </div> <div class="text-white/90"> <p class="text-lg">
或直接致电我们：
<a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="text-yellow-400 font-black hover:underline"> ${COMPANY_INFO.phone.display} </a> </p> <p class="text-sm mt-2">提供英语、中文和马来语服务</p> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
获得您的<span class="text-secondary">设备融资</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 text-xl">
填写下面的表格，我们的设备融资专家将在24小时内联系您
</p> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-[8px_8px_0_#2D1810] p-8 md:p-12 rounded-lg"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/equipment-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/equipment-financing.astro";
const $$url = "/zh/services/equipment-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EquipmentFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

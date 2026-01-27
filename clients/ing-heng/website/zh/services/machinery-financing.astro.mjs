/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { c as generateProductSchema, a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

const $$MachineryFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u673A\u68B0\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | CNC\u548C\u5DE5\u4E1A\u8BBE\u5907\u8D37\u6B3E | Ing Heng Credit";
  const description = "CNC\u673A\u5668\u3001\u6CE8\u5851\u6210\u578B\u3001\u751F\u4EA7\u7EBF\u548C\u5DE5\u4E1A\u8BBE\u5907\u673A\u68B0\u878D\u8D44\u30020%\u9996\u4ED8\uFF0C100%\u878D\u8D44\u53EF\u7528\u3002\u878D\u8D4410\u5E74\u4EE5\u4E0A\u673A\u68B0\u3002\u5236\u9020\u5546\u5FEB\u901F\u6279\u51C6\u3002";
  const keywords = [
    "\u673A\u68B0\u878D\u8D44",
    "\u673A\u68B0\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44",
    "CNC\u673A\u5668\u878D\u8D44",
    "\u751F\u4EA7\u8BBE\u5907\u8D37\u6B3E",
    "\u5236\u9020\u8BBE\u5907\u878D\u8D44",
    "\u6CE8\u5851\u6210\u578B\u673A\u878D\u8D44",
    "\u5DE5\u4E1A\u673A\u68B0\u8D37\u6B3E",
    "\u5DE5\u5382\u8BBE\u5907\u878D\u8D44",
    "\u751F\u4EA7\u7EBF\u878D\u8D44"
  ];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u670D\u52A1", href: "/zh/services" },
    { label: "\u673A\u68B0\u878D\u8D44", href: "/zh/services/machinery-financing" }
  ];
  const faqs = [
    {
      question: "\u6211\u53EF\u4EE5\u4E3A10\u5E74\u4EE5\u4E0A\u7684CNC\u673A\u5668\u83B7\u5F97\u673A\u68B0\u878D\u8D44\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u6211\u4EEC\u4E3A10\u5E74\u4EE5\u4E0A\u7684\u673A\u68B0\u63D0\u4F9B\u878D\u8D44\uFF0C\u5305\u62ECCNC\u673A\u5668\u3001\u6CE8\u5851\u6210\u578B\u8BBE\u5907\u548C\u751F\u4EA7\u673A\u68B0\u3002\u6211\u4EEC\u8BC4\u4F30\u5DE5\u4F5C\u72B6\u6001\u548C\u5546\u4E1A\u53EF\u884C\u6027\uFF0C\u800C\u4E0D\u662F\u4EFB\u610F\u7684\u5E74\u9F84\u9650\u5236\u3002"
    },
    {
      question: "\u54EA\u4E9B\u5DE5\u4E1A\u8BBE\u5907\u7B26\u5408\u673A\u68B0\u878D\u8D44\u6761\u4EF6\uFF1F",
      answer: "\u6211\u4EEC\u4E3ACNC\u673A\u5668\uFF08\u8F66\u5E8A\u3001\u94E3\u5E8A\u3001\u8DEF\u7531\u5668\uFF09\u3001\u6CE8\u5851\u6210\u578B\u8BBE\u5907\u3001\u751F\u4EA7\u7EBF\u3001\u5305\u88C5\u673A\u68B0\u3001\u5DE5\u4E1A\u5370\u5237\u8BBE\u5907\u3001\u5236\u9020\u81EA\u52A8\u5316\u7CFB\u7EDF\u548C\u5176\u4ED6\u5DE5\u4E1A\u673A\u68B0\u63D0\u4F9B\u878D\u8D44\u3002"
    },
    {
      question: "\u60A8\u63D0\u4F9B0%\u9996\u4ED8\u7684100%\u673A\u68B0\u878D\u8D44\u5417\uFF1F",
      answer: "\u662F\u7684\uFF0C\u6211\u4EEC\u4E3A\u5408\u683C\u5236\u9020\u5546\u63D0\u4F9B0%\u9996\u4ED8\u7684100%\u878D\u8D44\u3002\u8FD9\u4F7F\u60A8\u80FD\u591F\u5728\u4E0D\u8017\u5C3D\u8425\u8FD0\u8D44\u91D1\u7684\u60C5\u51B5\u4E0B\u83B7\u5F97\u751F\u4EA7\u8BBE\u5907\u3002"
    },
    {
      question: "\u673A\u68B0\u878D\u8D44\u591A\u5FEB\u80FD\u83B7\u5F97\u6279\u51C6\uFF1F",
      answer: "\u6211\u4EEC\u4E3A\u673A\u68B0\u878D\u8D44\u63D0\u4F9B\u5FEB\u901F\u6279\u51C6\uFF0C\u6BD4\u4F20\u7EDF\u94F6\u884C\u5FEB\u5F97\u591A\u3002\u6211\u4EEC\u7684\u7B80\u5316\u6D41\u7A0B\u4E13\u6CE8\u4E8E\u60A8\u7684\u4E1A\u52A1\u9700\u6C42\u548C\u8BBE\u5907\u751F\u4EA7\u529B\u6F5C\u529B\u3002"
    },
    {
      question: "\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44\u9700\u8981\u4EC0\u4E48\u6587\u4EF6\uFF1F",
      answer: "\u57FA\u672C\u5546\u4E1A\u6587\u4EF6\u5305\u62EC\u516C\u53F8\u6CE8\u518C\u3001\u8D22\u52A1\u62A5\u8868\u3001\u8BBE\u5907\u89C4\u683C\u548C\u62A5\u4EF7\u3002\u6211\u4EEC\u4FDD\u6301\u6700\u5C11\u7684\u6587\u6863\u4EE5\u52A0\u901F\u60A8\u7684\u673A\u68B0\u878D\u8D44\u6279\u51C6\u3002"
    }
  ];
  const productSchema = generateProductSchema({
    name: "\u673A\u68B0\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "CNC\u673A\u5668\u3001\u751F\u4EA7\u7EBF\u548C\u5236\u9020\u673A\u68B0\u7684\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44\uFF0C\u63D0\u4F9B0%\u9996\u4ED8\u9009\u9879",
    category: "\u91D1\u878D\u670D\u52A1",
    offers: [
      {
        price: "\u5177\u7ADE\u4E89\u529B\u7684\u5E74\u5229\u7387\u4ECE6.88%\u8D77",
        availability: "\u5168\u56FD\u8303\u56F4\u53EF\u7528",
        description: "\u5DE5\u4E1A\u8BBE\u5907\u673A\u68B0\u878D\u8D44\u9AD8\u8FBE100%\uFF0C0%\u9996\u4ED8"
      }
    ]
  });
  const faqSchema = generateFAQSchema(faqs);
  const organizationSchema = generateOrganizationSchema();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": productSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })}  ${maybeRenderHead()}<div class="bg-blue-50 border-b-3 border-navy-900"> <div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang })} </div> </div>  <section class="hero relative overflow-hidden"> <div class="container-custom relative z-10 text-center py-20"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-tight mb-6 text-white">
马来西亚<span class="text-yellow-400">机械融资</span> </h1> <h2 class="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto font-normal">
CNC机器 • 生产线 • 工业设备贷款
</h2> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-8 py-4">
获取机械融资报价
</a> <a href="#machinery-calculator" class="btn btn-outline-white text-xl px-8 py-4">
计算付款
</a> </div> <div class="text-yellow-400 font-bold text-lg">
✓ 0%首付 • ✓ 100%融资 • ✓ 融资10年以上机械
</div> </div> <div class="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
我们理解的<span class="text-secondary">制造挫折</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"> <div class="space-y-8"> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">摧毁现金流的首付要求</h3> <p class="text-gray-700 leading-relaxed text-lg">
当您的CNC机器需要更换但银行要求50%的预付首付，而您计算出那是您没有的30万令吉现金时，您是否感到胸口的重压，知道生产将受到影响，而竞争对手在升级设备？
</p> </div> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">设备年龄拒绝</h3> <p class="text-gray-700 leading-relaxed text-lg">
当您找到一台完美的12年注塑成型机，仍能生产优质零件，但银行因年龄限制自动拒绝时，那种挫败感是否让您燃烧，知道设备还有10年以上的生产寿命？
</p> </div> </div> <div class="space-y-8"> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">竞争劣势现实</h3> <p class="text-gray-700 leading-relaxed text-lg">
当您看到竞争对手赢得合同是因为他们的新机器运行速度比您8年的设备快40%，而您计算每月因过时技术损失多少收入时，那种落后感是否在吞噬您？
</p> </div> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">生产能力限制</h3> <p class="text-gray-700 leading-relaxed text-lg">
当订单超过您当前机械能力，您不得不拒绝每月20万令吉的合同时，您的胃是否下沉，知道那条额外的生产线可以转变您的业务，但融资似乎不可能？
</p> </div> </div> </div> </div> </section>  <section class="section bg-blue-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
有效的<span class="text-secondary">机械融资</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-4xl mx-auto text-xl"> <strong>您的设备。您的时间表。您的竞争优势。</strong>在不耗尽营运资金的情况下获得您企业所需的工业机械。
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8 text-center"> <div class="text-6xl mb-6">🏭</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">无需0%首付</h3> <p class="text-gray-700 leading-relaxed text-lg">
融资您机械成本的100%。保留现金流用于运营、材料和增长机会。
</p> </div> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8 text-center"> <div class="text-6xl mb-6">⚙️</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">融资10年以上机械</h3> <p class="text-gray-700 leading-relaxed text-lg">
我们评估工作状态和商业潜力，而不是任意的年龄限制。甚至考虑更老的设备。
</p> </div> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8 text-center"> <div class="text-6xl mb-6">⚡</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">快速制造焦点</h3> <p class="text-gray-700 leading-relaxed text-lg">
我们理解生产的紧迫性。快速获得批准，使您的机械采购不会延误运营。
</p> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
我们融资的<span class="text-secondary">工业机械</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
为所有类型的工业和制造设备提供全面的机械融资
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">CNC机器</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
CNC车床和铣床
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
CNC路由器
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
加工中心
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
转动中心
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">生产设备</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
注塑成型机
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
生产线
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
装配设备
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
制造自动化
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">加工机械</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
工业印刷设备
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
包装机械
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
食品加工设备
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
纺织机械
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">金属加工设备</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
焊接机
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
压力制动器
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
剪切机
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
轧机
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">质量控制</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
CMM机器
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
测试设备
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
测量系统
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
实验室设备
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">支持设备</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
压缩机和发电机
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
物料处理系统
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
冷却系统
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
车间设备
</li> </ul> </div> </div> </div> </section>  <section class="section bg-secondary text-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6">
为什么选择我们的<span class="text-yellow-400">机械融资</span>？
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">💰</div> <h3 class="text-xl font-display uppercase mb-4">保留营运资金</h3> <p class="text-gray-700 leading-relaxed">
保留现金用于材料、工资和意外机会。0%首付提供100%机械融资。
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">📈</div> <h3 class="text-xl font-display uppercase mb-4">升级生产能力</h3> <p class="text-gray-700 leading-relaxed">
现代机械提高效率、减少浪费，并使您能赢得更大的合同和更好的利润率。
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">🏆</div> <h3 class="text-xl font-display uppercase mb-4">竞争制造优势</h3> <p class="text-gray-700 leading-relaxed">
通过最新技术保持领先竞争对手。更快的生产、更好的质量、更有利可图的运营。
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">🛠️</div> <h3 class="text-xl font-display uppercase mb-4">建立制造资产</h3> <p class="text-gray-700 leading-relaxed">
拥有有价值的机械，增加公司的资产基础和未来增长的借贷能力。
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">⚙️</div> <h3 class="text-xl font-display uppercase mb-4">设备年龄灵活性</h3> <p class="text-gray-700 leading-relaxed">
银行自动拒绝老设备。我们评估工作状态和生产力潜力。
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">🚀</div> <h3 class="text-xl font-display uppercase mb-4">扩展生产能力</h3> <p class="text-gray-700 leading-relaxed">
额外的生产线意味着更多订单、更高收入，以及同时服务多个客户的能力。
</p> </div> </div> </div> </section>  <section class="section bg-blue-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
简单的<span class="text-secondary">机械融资流程</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
快速高效地获得您的工业机械融资批准
</p> </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">1</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">设备询价</h3> <p class="text-gray-600 leading-relaxed">
联系我们了解您的机械要求和规格
</p> </div> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">2</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">业务评估</h3> <p class="text-gray-600 leading-relaxed">
我们评估您的业务需求和设备生产力潜力
</p> </div> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">3</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">快速批准</h3> <p class="text-gray-600 leading-relaxed">
专注于业务可行性和设备价值的快速批准流程
</p> </div> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">4</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">设备获取</h3> <p class="text-gray-600 leading-relaxed">
获得您的机械并立即开始增加生产能力
</p> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
机械融资<span class="text-secondary">常见问题</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="space-y-8"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md"> <div class="p-6 border-b-3 border-navy-900 bg-white"> <h3 class="text-xl font-display uppercase text-navy-900"> ${faq.question} </h3> </div> <div class="p-6"> <p class="text-gray-700 leading-relaxed text-lg"> ${faq.answer} </p> </div> </div>`)} </div> </div> </section>  <section class="section bg-secondary text-white relative" style="border-top: 8px solid #FBBF24;"> <div class="container-custom text-center"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6">
获取您的<span class="text-yellow-400">机械融资</span>报价
</h2> <p class="text-xl mb-12 text-white opacity-90 max-w-3xl mx-auto"> <strong>您的生产设备。您的竞争优势。您的企业增长。</strong><br>
今天就联系我们获得快速机械融资批准。
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-12 py-6">
立即WhatsApp我们
</a> <a href="/zh/contact" class="btn btn-outline-white text-xl px-12 py-6">
获取免费报价
</a> </div> <div class="mt-8 text-white"> <p class="text-lg">
或致电我们的机械融资专家：
<a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="text-yellow-400 font-black hover:underline" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.5);"> ${COMPANY_INFO.phone.display} </a> </p> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-5xl md:text-6xl font-display uppercase mb-6 text-navy-900">
今天申请<span class="text-secondary">机械融资</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 text-xl">
填写下面的表格，我们的工业设备融资专家将立即联系您
</p> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-xl p-8 md:p-12"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/machinery-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/machinery-financing.astro";
const $$url = "/zh/services/machinery-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MachineryFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

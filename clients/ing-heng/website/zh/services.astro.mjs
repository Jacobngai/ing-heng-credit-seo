/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u6211\u4EEC\u7684\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44\u89E3\u51B3\u65B9\u6848 | Ing Heng Credit";
  const description = "\u4E3A\u60A8\u7684\u6240\u6709\u8BBE\u5907\u9700\u6C42\u63D0\u4F9B\u5B8C\u6574\u7684\u878D\u8D44\u89E3\u51B3\u65B9\u6848\u3002\u79DF\u8D2D\u878D\u8D44\u3001\u5546\u4E1A\u8D37\u6B3E\u548C\u4FDD\u9669\u670D\u52A1\u3002\u5FEB\u901F\u5904\u7406\u3002\u7ACB\u5373\u83B7\u53D6\u514D\u8D39\u62A5\u4EF7\uFF01";
  const keywords = [
    "\u8BBE\u5907\u878D\u8D44\u670D\u52A1",
    "\u9A6C\u6765\u897F\u4E9A\u79DF\u8D2D",
    "\u5546\u4E1A\u8D37\u6B3E\u670D\u52A1",
    "\u8BBE\u5907\u4FDD\u9669",
    "\u9A6C\u6765\u897F\u4E9A\u878D\u8D44\u89E3\u51B3\u65B9\u6848",
    "Ing Heng Credit \u670D\u52A1",
    "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44",
    "\u7269\u6D41\u8BBE\u5907\u8D37\u6B3E"
  ];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u670D\u52A1", href: "/zh/services" }
  ];
  const organizationSchema = generateOrganizationSchema();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })}  ${maybeRenderHead()}<div class="bg-blue-50 border-b-3 border-navy-900"> <div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang })} </div> </div>  <section class="hero relative overflow-hidden"> <div class="container-custom relative z-10 text-center py-20"> <h1 class="text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-tight mb-6 text-white">
我们的<span class="text-[#D4A574]">服务</span> </h1> <p class="text-xl md:text-2xl text-white font-bold mb-8 max-w-3xl mx-auto">
旨在帮助您的企业获得所需设备以实现增长的完整融资解决方案
</p> </div> <div class="absolute bottom-0 left-0 right-0 h-2 bg-[#D4A574]"></div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
全面<span class="text-secondary">融资解决方案</span> </h2> <div class="w-24 h-2 bg-[#D4A574] mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
凭借40多年的经验，我们为马来西亚各地的企业提供量身定制的融资解决方案
</p> </div> <!-- Services Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"> <!-- Service 1: Hire Purchase --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg transition-all hover:shadow-brutal-xl hover:-translate-y-1"> <div class="bg-[#8B6F47] border-b-3 border-[#2D1810] p-8 text-center"> <div class="text-7xl mb-4">🚜</div> <h3 class="text-3xl font-display uppercase text-white mb-2">租购融资</h3> <p class="text-white text-lg">资产融资解决方案</p> </div> <div class="p-8"> <p class="text-gray-700 leading-relaxed mb-6 text-lg">
资产融资允许您的企业通过灵活的月付方式拥有设备。
              非常适合挖掘机、卡车、叉车和所有商业设备。
</p> <div class="mb-8"> <h4 class="font-display uppercase text-navy-900 mb-4 text-lg">主要优势：</h4> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">拥有资产的同时保持现金流</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">灵活期限从12到60个月</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">接受新设备和二手设备</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">低首付款从10%起</span> </li> </ul> </div> <a href="/zh/services/hire-purchase" class="btn btn-primary w-full block text-center text-lg">
了解更多 →
</a> </div> </div> <!-- Service 2: Loan Financing --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg transition-all hover:shadow-brutal-xl hover:-translate-y-1"> <div class="bg-[#8B6F47] border-b-3 border-[#2D1810] p-8 text-center"> <div class="text-7xl mb-4">💰</div> <h3 class="text-3xl font-display uppercase text-white mb-2">贷款融资</h3> <p class="text-white text-lg">商业资本解决方案</p> </div> <div class="p-8"> <p class="text-gray-700 leading-relaxed mb-6 text-lg">
受马来西亚超过4,000家公司信赖的定制商业贷款。
              以具有竞争力的利率和快速批准获得所需的营运资金。
</p> <div class="mb-8"> <h4 class="font-display uppercase text-navy-900 mb-4 text-lg">主要优势：</h4> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">快速批准</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">从6.5%起的竞争性利率</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">灵活的还款期限</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">贷款高达RM 500,000</span> </li> </ul> </div> <a href="/zh/services/loan-financing" class="btn btn-primary w-full block text-center text-lg">
了解更多 →
</a> </div> </div> <!-- Service 3: Insurance --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg transition-all hover:shadow-brutal-xl hover:-translate-y-1"> <div class="bg-[#8B6F47] border-b-3 border-[#2D1810] p-8 text-center"> <div class="text-7xl mb-4">🛡️</div> <h3 class="text-3xl font-display uppercase text-white mb-2">保险</h3> <p class="text-white text-lg">保护解决方案</p> </div> <div class="p-8"> <p class="text-gray-700 leading-relaxed mb-6 text-lg">
为个人、企业和汽车需求提供全面的保险覆盖。
              保护您宝贵的设备投资和商业运营。
</p> <div class="mb-8"> <h4 class="font-display uppercase text-navy-900 mb-4 text-lg">主要优势：</h4> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">全面的保险选项</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">值得信赖的保险合作伙伴</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">有竞争力的保费</span> </li> <li class="flex items-start"> <span class="text-secondary mr-3 text-xl mt-1">▸</span> <span class="text-gray-700">快速理赔处理</span> </li> </ul> </div> <a href="/zh/services/insurance" class="btn btn-primary w-full block text-center text-lg">
了解更多 →
</a> </div> </div> </div> </div> </section>  <section class="section bg-blue-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
为什么选择<span class="text-secondary">Ing Heng Credit</span>？
</h2> <div class="w-24 h-2 bg-[#D4A574] mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="bg-white border-3 border-navy-900 shadow-brutal-md p-8 text-center hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <div class="w-20 h-20 bg-[#8B6F47] border-3 border-[#2D1810] mx-auto mb-6 flex items-center justify-center text-white text-4xl">
⚡
</div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">快速批准</h3> <p class="text-gray-600 leading-relaxed">
通过我们简化的申请流程，迅速获得批准
</p> </div> <div class="bg-white border-3 border-navy-900 shadow-brutal-md p-8 text-center hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <div class="w-20 h-20 bg-[#8B6F47] border-3 border-[#2D1810] mx-auto mb-6 flex items-center justify-center text-white text-4xl">
🏆
</div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">40+年经验</h3> <p class="text-gray-600 leading-relaxed">
自1985年以来受到超过4,000家企业的信赖
</p> </div> <div class="bg-white border-3 border-navy-900 shadow-brutal-md p-8 text-center hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <div class="w-20 h-20 bg-[#D4A574] border-3 border-navy-900 mx-auto mb-6 flex items-center justify-center text-navy-900 text-4xl">
💬
</div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">专业指导</h3> <p class="text-gray-600 leading-relaxed">
提供英语、中文和马来语的免费咨询
</p> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
我们简单的<span class="text-secondary">申请流程</span> </h2> <div class="w-24 h-2 bg-[#D4A574] mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
只需4个简单步骤即可获得设备融资批准
</p> </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"> <div class="text-center"> <div class="bg-[#D4A574] border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-5xl font-display text-navy-900">1</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">咨询</h3> <p class="text-gray-600 leading-relaxed">
通过WhatsApp、电话联系我们，或填写我们的在线表格
</p> </div> <div class="text-center"> <div class="bg-[#D4A574] border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-5xl font-display text-navy-900">2</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">文件准备</h3> <p class="text-gray-600 leading-relaxed">
提交所需文件 - 我们保持简单和最少
</p> </div> <div class="text-center"> <div class="bg-[#D4A574] border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-5xl font-display text-navy-900">3</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">批准</h3> <p class="text-gray-600 leading-relaxed">
通过我们的快速处理迅速获得批准
</p> </div> <div class="text-center"> <div class="bg-[#D4A574] border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-5xl font-display text-navy-900">4</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">放款</h3> <p class="text-gray-600 leading-relaxed">
在3-5天内收到您的资金并获得您的设备
</p> </div> </div> </div> </section>  <section class="section bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white border-t-[8px] border-[#D4A574] relative" style="border-top: 8px solid #D4A574;"> <div class="container-custom text-center"> <h2 class="text-5xl md:text-6xl font-black uppercase mb-6 text-[#F5F5DC] tracking-tight">
准备好<span class="text-[#D4A574]">开始了吗？</span> </h2> <p class="text-xl mb-12 text-white font-bold max-w-3xl mx-auto">
加入4,000多家信赖Ing Heng Credit满足其融资需求的企业。
        立即联系我们获取免费咨询和报价！
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-12 py-6">
立即WhatsApp联系我们
</a> <a href="/zh/contact" class="btn btn-outline-white text-xl px-12 py-6">
获取免费报价
</a> </div> <div class="mt-8 text-white"> <p class="text-lg">
或直接致电：
<a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="text-[#D4A574] font-bold hover:underline"> ${COMPANY_INFO.phone.display} </a> </p> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-5xl md:text-6xl font-display uppercase mb-6 text-navy-900">
立即获取<span class="text-secondary">免费报价</span> </h2> <div class="w-24 h-2 bg-[#D4A574] mx-auto mb-8"></div> <p class="text-gray-700 text-xl">
填写下面的表格，我们的融资专家将迅速与您联系
</p> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-xl p-8 md:p-12"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/index.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/index.astro";
const $$url = "/zh/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

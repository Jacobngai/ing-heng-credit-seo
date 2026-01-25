import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, e as renderScript, r as renderComponent } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const COMPANY_INFO = {
  name: "Ing Heng Credit & Leasing Sdn Bhd",
  shortName: "Ing Heng Credit",
  tagline: "Your Trusted Equipment Financing Partner",
  // Contact Details
  phone: {
    display: "017-570 0889",
    international: "+60175700889",
    office: "03-3371 9888"},
  whatsapp: {
    link: "https://wa.me/60175700889",
    message: "Hello, I would like to inquire about equipment financing."
  },
  email: "enquiry@inghengcredit.com",
  address: {
    street: "16, Lintang Menalu, Taman Chi Liung",
    city: "Klang",
    state: "Selangor",
    postcode: "41200",
    full: "16, Lintang Menalu, Taman Chi Liung, 41200 Klang, Selangor",
    googleMapsUrl: "https://www.google.com/maps/dir//16,+Lintang+Menalu,+Taman+Chi+Liung,+41200+Klang,+Selangor/@3.0229391,101.3508286,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cdab4db39d6df9:0x71b2acd8e5bf24cf!2m2!1d101.4332306!2d3.0229422?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  // Social Media
  social: {
    facebook: "https://www.facebook.com/Inghengcredit"
    // Add other social media when available
  },
  // Business Hours
  hours: {
    weekdays: {
      display: "Monday - Friday: 8:30 AM - 5:30 PM"
    },
    saturday: {
      display: "Saturday: 8:30 AM - 1:00 PM"
    },
    sunday: {
      display: "Sunday: Closed"
    }
  }
};
const SITE_CONFIG = {
  url: "https://www.inghengcredit.com",
  title: "Ing Heng Credit & Leasing - Equipment Financing Malaysia"};
const EQUIPMENT_NAV_ITEMS = [
  {
    label: "equipment.allEquipment",
    href: "/equipment",
    description: "equipment.allEquipmentDesc",
    icon: "🏗️"
  },
  {
    label: "equipment.excavator",
    href: "/equipment/excavator",
    description: "equipment.excavatorDesc",
    icon: "🚜",
    badge: "popular"
  },
  {
    label: "equipment.lorry",
    href: "/equipment/lorry",
    description: "equipment.lorryDesc",
    icon: "🚛",
    badge: "fastApproval"
  },
  {
    label: "equipment.forklift",
    href: "/equipment/forklift",
    description: "equipment.forkliftDesc",
    icon: "🏭"
  },
  {
    label: "equipment.crane",
    href: "/equipment/crane",
    description: "equipment.craneDesc",
    icon: "🏗️"
  },
  {
    label: "equipment.primeMover",
    href: "/equipment/prime-mover",
    description: "equipment.primeMoverDesc",
    icon: "🚚"
  },
  {
    label: "equipment.bulldozer",
    href: "/equipment/bulldozer",
    description: "equipment.bulldozerDesc",
    icon: "🚜"
  },
  {
    label: "equipment.refrigeratedTruck",
    href: "/equipment/refrigerated-truck",
    description: "equipment.refrigeratedTruckDesc",
    icon: "🧊"
  }
];
const NAV_LINKS = [
  { href: "/", label: "nav.home" },
  { href: "/about", label: "nav.about" },
  { href: "/services", label: "nav.services" },
  { href: "/equipment", label: "nav.equipment", hasDropdown: true },
  { href: "/blog", label: "nav.blog" },
  { href: "/contact", label: "nav.contact" }
];

const site$2 = {"title":"Ing Heng Credit & Leasing - Equipment Financing Malaysia","description":"Premier equipment financing and leasing solutions in Malaysia. Fast approval for excavators, lorries, forklifts, and construction equipment.","tagline":"Your Trusted Equipment Financing Partner"};
const nav$2 = {"home":"Home","about":"About Us","services":"Services","equipment":"Equipment","blog":"Blog","contact":"Contact","getQuote":"Get Quote"};
const footer$2 = {"company":"Company","services":"Services","equipment":"Equipment","resources":"Resources","contact":"Contact Us","followUs":"Follow Us","copyright":"© 2025 Ing Heng Credit & Leasing Sdn Bhd. All rights reserved.","privacy":"Privacy Policy","terms":"Terms of Service"};
const home$2 = {"hero":{"title":"Fast Equipment Financing for Your Business Growth","subtitle":"Fast approval process. Competitive rates. Flexible payment terms. Trusted by 500+ Malaysian businesses.","cta":"Get Free Quote","ctaSecondary":"WhatsApp Us"},"benefits":{"title":"Why Choose Ing Heng Credit?","speed":{"title":"Quick Approval","description":"Fast processing with minimal documentation required"},"rates":{"title":"Competitive Rates","description":"Competitive rates starting from 6.5% p.a."},"flexible":{"title":"Flexible Terms","description":"Customized payment plans from 1-7 years"},"support":{"title":"Expert Support","description":"Dedicated team fluent in English, Mandarin, and Malay"}},"equipment":{"title":"Equipment We Finance","subtitle":"From construction to logistics, we've got you covered"},"cta":{"title":"Ready to Grow Your Business?","subtitle":"Get your free quote today and join 500+ satisfied customers","button":"Contact Us Now"}};
const services$2 = {"title":"Our Services","subtitle":"Comprehensive equipment financing solutions tailored to your needs","leasing":{"title":"Equipment Leasing","description":"Flexible leasing options with tax benefits"},"hire":{"title":"Hire Purchase","description":"Own your equipment with manageable monthly payments"},"refinance":{"title":"Refinancing","description":"Lower your monthly payments with better rates"}};
const contact$2 = {"title":"Get in Touch","subtitle":"Our team is ready to help you find the perfect financing solution","form":{"name":"Full Name","email":"Email Address","phone":"Phone Number","equipment":"Equipment Type","message":"Message","submit":"Send Message","sending":"Sending...","success":"Thank you! We'll contact you shortly during business hours.","error":"Something went wrong. Please try again or call us directly."},"info":{"phone":"Phone","whatsapp":"WhatsApp","email":"Email","address":"Address","hours":"Business Hours"},"businessHours":{"weekdays":"Monday - Friday: 8:30 AM - 5:30 PM","saturday":"Saturday: Closed","sunday":"Sunday: Closed"}};
const blog$2 = {"title":"Latest Insights","subtitle":"Expert advice on equipment financing and business growth","readMore":"Read More","readingTime":"min read","publishedOn":"Published on","author":"By","categories":"Categories","tags":"Tags","relatedPosts":"Related Articles","backToBlog":"Back to Blog","allArticles":"All Articles","allArticlesDesc":"Browse our complete blog library","equipmentFinancing":"Equipment Financing","equipmentFinancingDesc":"Financing guides & strategies","industryGuides":"Industry Guides","industryGuidesDesc":"Expert tips for your industry","cashFlowManagement":"Cash Flow Tips","cashFlowDesc":"Manage your business finances","taxLegal":"Tax & Legal","taxLegalDesc":"Compliance & tax benefits","successStories":"Success Stories","successStoriesDesc":"Real client case studies"};
const equipment$2 = {"allEquipment":"All Equipment","allEquipmentDesc":"Browse our complete equipment catalog","excavator":"Excavator","excavatorDesc":"Mini to large excavators for construction","lorry":"Commercial Lorry","lorryDesc":"Logistics & freight transportation","forklift":"Forklift","forkliftDesc":"Warehouse & industrial equipment","crane":"Mobile Crane","craneDesc":"Heavy lifting & construction","primeMover":"Prime Mover","primeMoverDesc":"Trailer haulage & freight","bulldozer":"Bulldozer","bulldozerDesc":"Earthmoving & land clearing","refrigeratedTruck":"Refrigerated Truck","refrigeratedTruckDesc":"Cold chain logistics and temperature-controlled transport","popular":"Most Popular","fastApproval":"Fast Approval"};
const common$2 = {"learnMore":"Learn More","getStarted":"Get Started","contactUs":"Contact Us","callNow":"Call Now","whatsappUs":"WhatsApp Us","emailUs":"Email Us","viewAll":"View All","loading":"Loading...","error":"Error","success":"Success","close":"Close","search":"Search","filter":"Filter","sort":"Sort"};
const cta$2 = {"whatsapp":"Chat on WhatsApp","phone":"Call Us Now","email":"Send Email","quote":"Get Free Quote"};
const en = {
  site: site$2,
  nav: nav$2,
  footer: footer$2,
  home: home$2,
  services: services$2,
  contact: contact$2,
  blog: blog$2,
  equipment: equipment$2,
  common: common$2,
  cta: cta$2,
};

const site$1 = {"title":"荣兴信贷租赁 - 马来西亚设备融资","description":"马来西亚首屈一指的设备融资和租赁解决方案。快速批准挖掘机、货车、叉车和建筑设备融资。","tagline":"您值得信赖的设备融资合作伙伴"};
const nav$1 = {"home":"首页","about":"关于我们","services":"服务","equipment":"设备","blog":"博客","contact":"联系我们","getQuote":"获取报价"};
const footer$1 = {"company":"公司","services":"服务","equipment":"设备","resources":"资源","contact":"联系我们","followUs":"关注我们","copyright":"© 2025 荣兴信贷租赁有限公司。版权所有。","privacy":"隐私政策","terms":"服务条款"};
const home$1 = {"hero":{"title":"快速设备融资，助力企业成长","subtitle":"快速审批流程。具竞争力的利率。灵活的付款条件。深受500多家马来西亚企业信赖。","cta":"免费报价","ctaSecondary":"WhatsApp联系"},"benefits":{"title":"为什么选择荣兴信贷？","speed":{"title":"快速批准","description":"快速处理，所需文件最少"},"rates":{"title":"竞争性利率","description":"具竞争力的利率从6.5%起"},"flexible":{"title":"灵活条款","description":"1-7年定制付款计划"},"support":{"title":"专业支持","description":"精通英语、华语和马来语的专业团队"}},"equipment":{"title":"我们融资的设备","subtitle":"从建筑到物流，我们为您提供全方位服务"},"cta":{"title":"准备好发展您的业务了吗？","subtitle":"立即获取免费报价，加入500多位满意客户","button":"立即联系我们"}};
const services$1 = {"title":"我们的服务","subtitle":"为您量身定制的全面设备融资解决方案","leasing":{"title":"设备租赁","description":"灵活的租赁选择，享受税务优惠"},"hire":{"title":"租购","description":"通过可管理的月付拥有您的设备"},"refinance":{"title":"再融资","description":"通过更优惠的利率降低您的月供"}};
const contact$1 = {"title":"联系我们","subtitle":"我们的团队随时准备帮您找到完美的融资解决方案","form":{"name":"全名","email":"电子邮件地址","phone":"电话号码","equipment":"设备类型","message":"留言","submit":"发送消息","sending":"发送中...","success":"谢谢！我们将在营业时间内尽快与您联系。","error":"出了点问题。请重试或直接致电我们。"},"info":{"phone":"电话","whatsapp":"WhatsApp","email":"电子邮件","address":"地址","hours":"营业时间"},"businessHours":{"weekdays":"周一至周五：上午8:30 - 下午5:30","saturday":"周六：休息","sunday":"周日：休息"}};
const blog$1 = {"title":"最新见解","subtitle":"设备融资和业务增长的专业建议","readMore":"阅读更多","readingTime":"分钟阅读","publishedOn":"发布于","author":"作者","categories":"分类","tags":"标签","relatedPosts":"相关文章","backToBlog":"返回博客","allArticles":"所有文章","allArticlesDesc":"浏览我们完整的博客库","equipmentFinancing":"设备融资","equipmentFinancingDesc":"融资指南与策略","industryGuides":"行业指南","industryGuidesDesc":"您行业的专业提示","cashFlowManagement":"现金流技巧","cashFlowDesc":"管理您的业务财务","taxLegal":"税务与法律","taxLegalDesc":"合规与税收优惠","successStories":"成功案例","successStoriesDesc":"真实客户案例研究"};
const equipment$1 = {"allEquipment":"所有设备","allEquipmentDesc":"浏览我们完整的设备目录","excavator":"挖掘机","excavatorDesc":"小型至大型建筑挖掘机","lorry":"商用货车","lorryDesc":"物流与货运","forklift":"叉车","forkliftDesc":"仓库与工业设备","crane":"移动式起重机","craneDesc":"重型吊装与建筑","primeMover":"拖车头","primeMoverDesc":"拖车运输与货运","bulldozer":"推土机","bulldozerDesc":"土方工程与清地","refrigeratedTruck":"冷藏车","refrigeratedTruckDesc":"冷链物流和温控运输","popular":"最受欢迎","fastApproval":"快速批准"};
const common$1 = {"learnMore":"了解更多","getStarted":"开始","contactUs":"联系我们","callNow":"立即致电","whatsappUs":"WhatsApp联系","emailUs":"发送电子邮件","viewAll":"查看全部","loading":"加载中...","error":"错误","success":"成功","close":"关闭","search":"搜索","filter":"筛选","sort":"排序"};
const cta$1 = {"whatsapp":"在WhatsApp上聊天","phone":"立即致电","email":"发送电子邮件","quote":"获取免费报价"};
const zh = {
  site: site$1,
  nav: nav$1,
  footer: footer$1,
  home: home$1,
  services: services$1,
  contact: contact$1,
  blog: blog$1,
  equipment: equipment$1,
  common: common$1,
  cta: cta$1,
};

const site = {"title":"Ing Heng Credit & Leasing - Pembiayaan Peralatan Malaysia","description":"Penyelesaian pembiayaan dan pajakan peralatan terkemuka di Malaysia. Kelulusan pantas untuk jengkaut, lori, forklift, dan peralatan pembinaan.","tagline":"Rakan Kongsi Pembiayaan Peralatan Yang Dipercayai"};
const nav = {"home":"Laman Utama","about":"Tentang Kami","services":"Perkhidmatan","equipment":"Peralatan","blog":"Blog","contact":"Hubungi","getQuote":"Dapatkan Sebut Harga"};
const footer = {"company":"Syarikat","services":"Perkhidmatan","equipment":"Peralatan","resources":"Sumber","contact":"Hubungi Kami","followUs":"Ikuti Kami","copyright":"© 2025 Ing Heng Credit & Leasing Sdn Bhd. Hak cipta terpelihara.","privacy":"Dasar Privasi","terms":"Terma Perkhidmatan"};
const home = {"hero":{"title":"Pembiayaan Peralatan Pantas untuk Pertumbuhan Perniagaan Anda","subtitle":"Proses kelulusan pantas. Kadar kompetitif. Terma pembayaran fleksibel. Dipercayai oleh 500+ perniagaan Malaysia.","cta":"Dapatkan Sebut Harga Percuma","ctaSecondary":"WhatsApp Kami"},"benefits":{"title":"Mengapa Pilih Ing Heng Credit?","speed":{"title":"Kelulusan Pantas","description":"Pemprosesan pantas dengan dokumentasi minimum diperlukan"},"rates":{"title":"Kadar Kompetitif","description":"Kadar kompetitif bermula dari 6.5% setahun"},"flexible":{"title":"Terma Fleksibel","description":"Pelan pembayaran disesuaikan dari 1-7 tahun"},"support":{"title":"Sokongan Pakar","description":"Pasukan berdedikasi fasih dalam Bahasa Inggeris, Mandarin, dan Melayu"}},"equipment":{"title":"Peralatan Yang Kami Biayai","subtitle":"Dari pembinaan hingga logistik, kami sedia membantu"},"cta":{"title":"Bersedia untuk Mengembangkan Perniagaan Anda?","subtitle":"Dapatkan sebut harga percuma hari ini dan sertai 500+ pelanggan yang berpuas hati","button":"Hubungi Kami Sekarang"}};
const services = {"title":"Perkhidmatan Kami","subtitle":"Penyelesaian pembiayaan peralatan komprehensif yang disesuaikan untuk keperluan anda","leasing":{"title":"Pajakan Peralatan","description":"Pilihan pajakan fleksibel dengan faedah cukai"},"hire":{"title":"Beli Sewa","description":"Miliki peralatan anda dengan pembayaran bulanan yang berpatutan"},"refinance":{"title":"Pembiayaan Semula","description":"Kurangkan bayaran bulanan dengan kadar yang lebih baik"}};
const contact = {"title":"Hubungi Kami","subtitle":"Pasukan kami sedia membantu anda mencari penyelesaian pembiayaan yang sempurna","form":{"name":"Nama Penuh","email":"Alamat E-mel","phone":"Nombor Telefon","equipment":"Jenis Peralatan","message":"Mesej","submit":"Hantar Mesej","sending":"Menghantar...","success":"Terima kasih! Kami akan menghubungi anda tidak lama lagi dalam waktu perniagaan.","error":"Ada masalah. Sila cuba lagi atau hubungi kami secara terus."},"info":{"phone":"Telefon","whatsapp":"WhatsApp","email":"E-mel","address":"Alamat","hours":"Waktu Perniagaan"},"businessHours":{"weekdays":"Isnin - Jumaat: 8:30 AM - 5:30 PM","saturday":"Sabtu: Tutup","sunday":"Ahad: Tutup"}};
const blog = {"title":"Wawasan Terkini","subtitle":"Nasihat pakar mengenai pembiayaan peralatan dan pertumbuhan perniagaan","readMore":"Baca Lagi","readingTime":"min bacaan","publishedOn":"Diterbitkan pada","author":"Oleh","categories":"Kategori","tags":"Tag","relatedPosts":"Artikel Berkaitan","backToBlog":"Kembali ke Blog","allArticles":"Semua Artikel","allArticlesDesc":"Lihat perpustakaan blog lengkap kami","equipmentFinancing":"Pembiayaan Peralatan","equipmentFinancingDesc":"Panduan & strategi pembiayaan","industryGuides":"Panduan Industri","industryGuidesDesc":"Tip pakar untuk industri anda","cashFlowManagement":"Tip Aliran Tunai","cashFlowDesc":"Urus kewangan perniagaan anda","taxLegal":"Cukai & Undang-undang","taxLegalDesc":"Pematuhan & faedah cukai","successStories":"Kisah Kejayaan","successStoriesDesc":"Kajian kes pelanggan sebenar"};
const equipment = {"allEquipment":"Semua Peralatan","allEquipmentDesc":"Lihat katalog peralatan lengkap kami","excavator":"Jengkaut","excavatorDesc":"Jengkaut mini hingga besar untuk pembinaan","lorry":"Lori Komersial","lorryDesc":"Logistik & pengangkutan barang","forklift":"Forklift","forkliftDesc":"Peralatan gudang & perindustrian","crane":"Kren Mudah Alih","craneDesc":"Angkatan berat & pembinaan","primeMover":"Prime Mover","primeMoverDesc":"Pengangkutan treler & barang","bulldozer":"Jentolak","bulldozerDesc":"Kerja tanah & pembukaan tanah","refrigeratedTruck":"Lori Peti Sejuk","refrigeratedTruckDesc":"Logistik rantaian sejuk dan pengangkutan terkawal suhu","popular":"Paling Popular","fastApproval":"Kelulusan Pantas"};
const common = {"learnMore":"Ketahui Lebih Lanjut","getStarted":"Mulakan","contactUs":"Hubungi Kami","callNow":"Hubungi Sekarang","whatsappUs":"WhatsApp Kami","emailUs":"E-mel Kami","viewAll":"Lihat Semua","loading":"Memuatkan...","error":"Ralat","success":"Berjaya","close":"Tutup","search":"Cari","filter":"Tapis","sort":"Isih"};
const cta = {"whatsapp":"Sembang di WhatsApp","phone":"Hubungi Kami Sekarang","email":"Hantar E-mel","quote":"Dapatkan Sebut Harga Percuma"};
const ms = {
  site,
  nav,
  footer,
  home,
  services,
  contact,
  blog,
  equipment,
  common,
  cta,
};

const locales = ["en", "zh", "ms"];
const defaultLocale = "en";
const translations = {
  en,
  zh,
  ms
};
function t(key, locale) {
  const keys = key.split(".");
  let value = translations[locale];
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for locale: ${locale}`);
      return key;
    }
  }
  return typeof value === "string" ? value : key;
}
function getLocaleInfo(locale) {
  const localeInfo = {
    en: {
      code: "en",
      name: "English",
      flag: "🇬🇧",
      dir: "ltr"
    },
    zh: {
      code: "zh",
      name: "中文",
      flag: "🇨🇳",
      dir: "ltr"
    },
    ms: {
      code: "ms",
      name: "Bahasa Melayu",
      flag: "🇲🇾",
      dir: "ltr"
    }
  };
  return localeInfo[locale];
}
function getLocaleFromPath(path) {
  const segments = path.split("/").filter(Boolean);
  const potentialLocale = segments[0];
  if (locales.includes(potentialLocale)) {
    return potentialLocale;
  }
  return defaultLocale;
}
function getAlternateUrl(currentPath, targetLocale) {
  const currentLocale = getLocaleFromPath(currentPath);
  const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, "");
  return `/${targetLocale}${pathWithoutLocale}`;
}
function formatCurrency(amount, locale, currency = "MYR") {
  const localeFormats = {
    en: "en-MY",
    zh: "zh-Hans-MY",
    ms: "ms-MY"
  };
  return new Intl.NumberFormat(localeFormats[locale], {
    style: "currency",
    currency
  }).format(amount);
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://ingheng-credit.vercel.app");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { lang, currentPath } = Astro2.props;
  const currentLocale = getLocaleInfo(lang);
  const availableLocales = locales.map((locale) => ({
    ...getLocaleInfo(locale),
    url: getAlternateUrl(currentPath, locale),
    isCurrent: locale === lang
  }));
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative inline-block text-left" data-language-switcher data-astro-cid-a2mxz4y6> <!-- Selected Language Button - FLAG ONLY --> <button type="button" class="lang-switcher inline-flex items-center justify-center gap-2 px-3 py-2 text-[#8B6F47] bg-white border-3 border-[#2D1810] hover:bg-[#F5F1EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B6F47] transition-all duration-200 shadow-[2px_2px_0_#2D1810] hover:shadow-[3px_3px_0_#2D1810] cursor-pointer active:shadow-[1px_1px_0_#2D1810] active:translate-x-[1px] active:translate-y-[1px]" style="min-height: 48px; min-width: 56px;" id="language-menu-button" aria-expanded="false" aria-haspopup="true" aria-label="Change language" title="Change language" data-astro-cid-a2mxz4y6> <!-- Flag Only - NO TEXT CODE --> <span class="text-2xl leading-none" aria-hidden="true" data-astro-cid-a2mxz4y6>', '</span> <!-- Down Arrow --> <svg class="w-4 h-4 lang-switcher-arrow transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" aria-hidden="true" data-astro-cid-a2mxz4y6> <path stroke-linecap="square" stroke-linejoin="miter" d="M19 9l-7 7-7-7" data-astro-cid-a2mxz4y6></path> </svg> </button> <!-- Dropdown Menu --> <div class="hidden absolute right-0 z-[100] mt-2 w-56 origin-top-right bg-white border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="language-menu-button" id="language-menu" tabindex="-1" data-astro-cid-a2mxz4y6> <div class="py-1" role="none" data-astro-cid-a2mxz4y6> ', " </div> </div> </div> <script>\n  // Language switcher dropdown functionality - Enhanced version\n  (function() {\n    'use strict';\n\n    function initLanguageSwitcher() {\n      // Find ALL language switchers on the page (desktop + mobile)\n      const switchers = document.querySelectorAll('[data-language-switcher]');\n\n      switchers.forEach(function(switcher) {\n        const button = switcher.querySelector('#language-menu-button');\n        const menu = switcher.querySelector('#language-menu');\n        const arrow = switcher.querySelector('.lang-switcher-arrow');\n\n        if (!button || !menu) {\n          console.warn('Language switcher: Missing button or menu element');\n          return;\n        }\n\n        // Remove any existing listeners (prevent duplicates)\n        const newButton = button.cloneNode(true);\n        button.parentNode.replaceChild(newButton, button);\n\n        // Toggle dropdown on button click\n        newButton.addEventListener('click', function(e) {\n          e.preventDefault();\n          e.stopPropagation();\n\n          const isExpanded = newButton.getAttribute('aria-expanded') === 'true';\n          const newState = !isExpanded;\n\n          // Close all other language switchers first\n          document.querySelectorAll('[data-language-switcher]').forEach(function(otherSwitcher) {\n            if (otherSwitcher !== switcher) {\n              const otherButton = otherSwitcher.querySelector('#language-menu-button');\n              const otherMenu = otherSwitcher.querySelector('#language-menu');\n              const otherArrow = otherSwitcher.querySelector('.lang-switcher-arrow');\n\n              if (otherButton) otherButton.setAttribute('aria-expanded', 'false');\n              if (otherMenu) otherMenu.classList.add('hidden');\n              if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';\n            }\n          });\n\n          // Toggle current switcher\n          newButton.setAttribute('aria-expanded', newState.toString());\n          menu.classList.toggle('hidden', !newState);\n\n          // Rotate arrow\n          if (arrow) {\n            arrow.style.transform = newState ? 'rotate(180deg)' : 'rotate(0deg)';\n          }\n\n          console.log('Language switcher toggled:', newState ? 'open' : 'closed');\n        });\n      });\n\n      // Close all dropdowns when clicking outside\n      document.addEventListener('click', function(e) {\n        const clickedInsideSwitcher = e.target.closest('[data-language-switcher]');\n\n        if (!clickedInsideSwitcher) {\n          document.querySelectorAll('[data-language-switcher]').forEach(function(switcher) {\n            const button = switcher.querySelector('#language-menu-button');\n            const menu = switcher.querySelector('#language-menu');\n            const arrow = switcher.querySelector('.lang-switcher-arrow');\n\n            if (button) button.setAttribute('aria-expanded', 'false');\n            if (menu) menu.classList.add('hidden');\n            if (arrow) arrow.style.transform = 'rotate(0deg)';\n          });\n        }\n      });\n\n      // Close dropdowns on ESC key\n      document.addEventListener('keydown', function(e) {\n        if (e.key === 'Escape') {\n          document.querySelectorAll('[data-language-switcher]').forEach(function(switcher) {\n            const button = switcher.querySelector('#language-menu-button');\n            const menu = switcher.querySelector('#language-menu');\n            const arrow = switcher.querySelector('.lang-switcher-arrow');\n\n            if (menu && !menu.classList.contains('hidden')) {\n              if (button) {\n                button.setAttribute('aria-expanded', 'false');\n                button.focus();\n              }\n              menu.classList.add('hidden');\n              if (arrow) arrow.style.transform = 'rotate(0deg)';\n            }\n          });\n        }\n      });\n\n      console.log('Language switcher initialized:', switchers.length, 'instance(s)');\n    }\n\n    // Run when DOM is ready\n    if (document.readyState === 'loading') {\n      document.addEventListener('DOMContentLoaded', initLanguageSwitcher);\n    } else {\n      initLanguageSwitcher();\n    }\n\n    // Re-initialize after view transitions (for Astro)\n    document.addEventListener('astro:page-load', initLanguageSwitcher);\n  })();\n<\/script> "])), maybeRenderHead(), currentLocale.flag, availableLocales.map((locale) => renderTemplate`<a${addAttribute(locale.url, "href")}${addAttribute(`flex items-center gap-3 px-4 py-3 text-base transition-all duration-150 cursor-pointer ${locale.isCurrent ? "bg-[#8B6F47] text-white font-bold pointer-events-none" : "text-[#2D1810] hover:bg-[#F5F1EB] hover:text-[#8B6F47] font-semibold"}`, "class")} style="min-height: 48px;" role="menuitem"${addAttribute(locale.isCurrent ? -1 : 0, "tabindex")}${addAttribute(locale.isCurrent ? "true" : void 0, "aria-current")} data-astro-cid-a2mxz4y6> <!-- Flag + Full Language Name --> <span class="text-2xl leading-none" aria-hidden="true" data-astro-cid-a2mxz4y6>${locale.flag}</span> <span class="flex-1" data-astro-cid-a2mxz4y6>${locale.name}</span> ${locale.isCurrent && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-a2mxz4y6> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-a2mxz4y6></path> </svg>`} </a>`));
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/LanguageSwitcher.astro", void 0);

const $$Astro$2 = createAstro("https://ingheng-credit.vercel.app");
const $$EquipmentDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EquipmentDropdown;
  const { lang, currentPath } = Astro2.props;
  const isEquipmentActive = currentPath.includes("/equipment");
  return renderTemplate`${maybeRenderHead()}<div class="equipment-dropdown-wrapper" data-astro-cid-qq4d5fyz> <!-- Desktop Dropdown Trigger --> <a${addAttribute(`/${lang}/equipment`, "href")}${addAttribute(`equipment-dropdown-trigger ${isEquipmentActive ? "text-[#8B6F47] font-black uppercase tracking-tight text-sm border-b-3 border-[#8B6F47] pb-1" : "text-[#6B5437] font-bold uppercase tracking-tight text-sm hover:text-[#8B6F47] hover:border-b-3 hover:border-[#D4A574] pb-1 transition-all"}`, "class")} aria-label="Equipment navigation menu" data-astro-cid-qq4d5fyz> ${t("nav.equipment", lang)} <svg class="w-4 h-4 ml-1 transition-transform duration-200 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-qq4d5fyz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-qq4d5fyz></path> </svg> </a> <!-- Dropdown Menu --> <div class="equipment-dropdown-menu" data-astro-cid-qq4d5fyz> <div class="equipment-dropdown-content" data-astro-cid-qq4d5fyz> <div class="equipment-grid" data-astro-cid-qq4d5fyz> ${EQUIPMENT_NAV_ITEMS.map((item) => {
    const href = `/${lang}${item.href}`;
    const isActive = currentPath.includes(item.href) && item.href !== "/equipment";
    return renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`equipment-dropdown-item ${isActive ? "active" : ""}`, "class")} data-astro-cid-qq4d5fyz> <div class="equipment-item-content" data-astro-cid-qq4d5fyz> <div class="equipment-item-header" data-astro-cid-qq4d5fyz> <span class="equipment-icon" data-astro-cid-qq4d5fyz>${item.icon}</span> <span class="equipment-name" data-astro-cid-qq4d5fyz>${t(item.label, lang)}</span> ${item.badge && renderTemplate`<span${addAttribute(`equipment-badge badge-${item.badge}`, "class")} data-astro-cid-qq4d5fyz> ${t(`equipment.${item.badge}`, lang)} </span>`} </div> <p class="equipment-description" data-astro-cid-qq4d5fyz> ${t(item.description, lang)} </p> </div> <svg class="equipment-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-qq4d5fyz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qq4d5fyz></path> </svg> </a>`;
  })} </div> <!-- Call-to-Action Footer --> <div class="equipment-dropdown-footer" data-astro-cid-qq4d5fyz> <p class="footer-text" data-astro-cid-qq4d5fyz>${t("equipment.allEquipmentDesc", lang)}</p> <a${addAttribute(`/${lang}/contact`, "href")} class="footer-cta" data-astro-cid-qq4d5fyz> ${t("common.contactUs", lang)} →
</a> </div> </div> </div> </div>  ${renderScript($$result, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/EquipmentDropdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/EquipmentDropdown.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://ingheng-credit.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang, currentPath } = Astro2.props;
  const pathWithoutLang = currentPath.replace(`/${lang}`, "").replace(/^\/+|\/+$/g, "") || "/";
  function isActive(href) {
    if (href === "/") {
      return pathWithoutLang === "/" || pathWithoutLang === "";
    }
    return pathWithoutLang.startsWith(href.replace("/", ""));
  }
  return renderTemplate(_a || (_a = __template(["", '<header class="sticky top-0 z-40 bg-white border-b-3 border-[#2D1810] shadow-brutal" data-astro-cid-3ef6ksr2> <nav class="container-custom" aria-label="Main navigation" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-20" data-astro-cid-3ef6ksr2> <!-- Logo (Beige/Bronze) --> <div class="flex items-center" data-astro-cid-3ef6ksr2> <a', ' class="flex items-center space-x-3 hover:opacity-80 transition-opacity" data-astro-cid-3ef6ksr2> <img src="/logos/no background full.png"', ' class="h-12 w-auto" width="150" height="48" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>', '</span> </a> </div> <!-- Desktop Navigation --> <div class="hidden lg:flex lg:items-center lg:space-x-8" data-astro-cid-3ef6ksr2> ', ' </div> <!-- Desktop Actions --> <div class="hidden lg:flex lg:items-center lg:space-x-4" data-astro-cid-3ef6ksr2> <!-- Language Switcher --> ', " <!-- WhatsApp CTA --> <a", ' target="_blank" rel="noopener noreferrer" class="bg-white text-[#8B6F47] font-black uppercase tracking-tight px-4 py-2 border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[2px_2px_0_#2D1810] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#8B6F47] hover:text-white transition-all flex items-center space-x-2"', ' data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2>', '</span> </a> </div> <!-- Mobile Menu Button --> <div class="flex items-center lg:hidden" data-astro-cid-3ef6ksr2> <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center p-3 border-3 border-[#2D1810] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8B6F47] shadow-[2px_2px_0_#2D1810]" style="min-width: 48px; min-height: 48px;" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation menu" data-astro-cid-3ef6ksr2> <!-- Hamburger Icon (visible when menu closed) --> <svg class="h-6 w-6 menu-icon-hamburger" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" stroke-width="3" data-astro-cid-3ef6ksr2> <path stroke-linecap="square" stroke-linejoin="miter" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <!-- X Icon (visible when menu open) --> <svg class="h-6 w-6 menu-icon-close hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" stroke-width="3" data-astro-cid-3ef6ksr2> <path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden lg:hidden border-t-3 border-[#2D1810] bg-white" data-astro-cid-3ef6ksr2> <div class="px-2 pt-2 pb-3 space-y-1 mobile-menu-scrollable" data-astro-cid-3ef6ksr2> ', ' </div> <!-- Mobile Language Switcher & CTA --> <div class="px-2 pt-4 pb-3 border-t-3 border-[#2D1810] space-y-3" data-astro-cid-3ef6ksr2> <div class="flex justify-center" data-astro-cid-3ef6ksr2> ', " </div> <a", ' target="_blank" rel="noopener noreferrer" class="bg-white text-[#8B6F47] font-black uppercase tracking-tight px-4 py-3 border-3 border-[#2D1810] shadow-brutal-sm hover:shadow-[2px_2px_0_#2D1810] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#8B6F47] hover:text-white transition-all w-full flex items-center justify-center space-x-2"', ' data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2>', "</span> </a> </div> </div> </nav> </header> <script>\n  (function() {\n    // Mobile Menu Toggle - Initialize immediately\n    function initMobileMenu() {\n      const mobileMenuButton = document.getElementById('mobile-menu-button');\n      const mobileMenu = document.getElementById('mobile-menu');\n\n      if (mobileMenuButton && mobileMenu) {\n        // Toggle menu on button click\n        mobileMenuButton.addEventListener('click', function(e) {\n          e.stopPropagation(); // Prevent immediate close from document click\n          const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';\n          mobileMenuButton.setAttribute('aria-expanded', (!isExpanded).toString());\n          mobileMenu.classList.toggle('hidden');\n\n          // Toggle between hamburger and X icons\n          const hamburgerIcon = mobileMenuButton.querySelector('.menu-icon-hamburger');\n          const closeIcon = mobileMenuButton.querySelector('.menu-icon-close');\n          if (hamburgerIcon && closeIcon) {\n            hamburgerIcon.classList.toggle('hidden');\n            closeIcon.classList.toggle('hidden');\n          }\n        });\n\n        // Close menu when clicking outside\n        document.addEventListener('click', function(e) {\n          if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {\n            if (!mobileMenu.classList.contains('hidden')) {\n              mobileMenu.classList.add('hidden');\n              mobileMenuButton.setAttribute('aria-expanded', 'false');\n\n              // Reset to hamburger icon\n              const hamburgerIcon = mobileMenuButton.querySelector('.menu-icon-hamburger');\n              const closeIcon = mobileMenuButton.querySelector('.menu-icon-close');\n              if (hamburgerIcon && closeIcon) {\n                hamburgerIcon.classList.remove('hidden');\n                closeIcon.classList.add('hidden');\n              }\n            }\n          }\n        });\n\n        // Close menu on ESC key\n        document.addEventListener('keydown', function(e) {\n          if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {\n            mobileMenu.classList.add('hidden');\n            mobileMenuButton.setAttribute('aria-expanded', 'false');\n\n            // Reset to hamburger icon\n            const hamburgerIcon = mobileMenuButton.querySelector('.menu-icon-hamburger');\n            const closeIcon = mobileMenuButton.querySelector('.menu-icon-close');\n            if (hamburgerIcon && closeIcon) {\n              hamburgerIcon.classList.remove('hidden');\n              closeIcon.classList.add('hidden');\n            }\n          }\n        });\n      }\n\n      // Mobile Submenu Toggles (Equipment)\n      const submenuTriggers = document.querySelectorAll('.mobile-submenu-trigger');\n\n      submenuTriggers.forEach(function(trigger) {\n        trigger.addEventListener('click', function(e) {\n          e.preventDefault();\n          const menuType = trigger.getAttribute('data-menu');\n          const submenu = document.getElementById('mobile-' + menuType + '-submenu');\n          const arrow = trigger.querySelector('.submenu-arrow');\n\n          if (submenu && arrow) {\n            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';\n            trigger.setAttribute('aria-expanded', (!isExpanded).toString());\n            submenu.classList.toggle('hidden');\n            arrow.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';\n          }\n        });\n      });\n    }\n\n    // Run when DOM is ready\n    if (document.readyState === 'loading') {\n      document.addEventListener('DOMContentLoaded', initMobileMenu);\n    } else {\n      initMobileMenu();\n    }\n  })();\n<\/script> "])), maybeRenderHead(), addAttribute(`/${lang}/`, "href"), addAttribute(COMPANY_INFO.name, "alt"), COMPANY_INFO.name, NAV_LINKS.map((link) => {
    const href = link.href === "/" ? `/${lang}/` : `/${lang}${link.href}`;
    const active = isActive(link.href);
    if (link.hasDropdown && link.href === "/equipment") {
      return renderTemplate`${renderComponent($$result, "EquipmentDropdown", $$EquipmentDropdown, { "lang": lang, "currentPath": currentPath, "data-astro-cid-3ef6ksr2": true })}`;
    }
    return renderTemplate`<a${addAttribute(href, "href")}${addAttribute(active ? "text-[#8B6F47] font-black uppercase tracking-tight text-sm border-b-3 border-[#8B6F47] pb-1" : "text-[#6B5437] font-bold uppercase tracking-tight text-sm hover:text-[#8B6F47] hover:border-b-3 hover:border-[#D4A574] pb-1 transition-all", "class")}${addAttribute(active ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${t(link.label, lang)} </a>`;
  }), renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "lang": lang, "currentPath": currentPath, "data-astro-cid-3ef6ksr2": true }), addAttribute(COMPANY_INFO.whatsapp.link, "href"), addAttribute(t("cta.whatsapp", lang), "aria-label"), t("cta.whatsapp", lang), NAV_LINKS.map((link) => {
    const href = link.href === "/" ? `/${lang}/` : `/${lang}${link.href}`;
    const active = isActive(link.href);
    if (link.hasDropdown && link.href === "/equipment") {
      return renderTemplate`<div class="mobile-submenu-wrapper" data-astro-cid-3ef6ksr2> <button type="button"${addAttribute(`mobile-submenu-trigger w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-bold transition-colors ${active ? "bg-[#8B6F47] text-white border-2 border-[#2D1810]" : "text-[#2D1810] hover:bg-[#F5F1EB] hover:text-[#8B6F47] hover:border-2 hover:border-[#D4A574]"}`, "class")} style="min-height: 48px;" aria-expanded="false" aria-controls="mobile-equipment-submenu" data-menu="equipment" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>${t(link.label, lang)}</span> <svg class="w-5 h-5 transition-transform duration-200 submenu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </button> <div id="mobile-equipment-submenu" class="hidden pl-4 mt-1 space-y-1" data-astro-cid-3ef6ksr2> ${EQUIPMENT_NAV_ITEMS.map((item) => {
        const equipHref = `/${lang}${item.href}`;
        const equipActive = currentPath.includes(item.href) && item.href !== "/equipment";
        return renderTemplate`<a${addAttribute(equipHref, "href")}${addAttribute(`block px-4 py-3 rounded-md text-sm font-bold transition-colors ${equipActive ? "bg-[#8B6F47] text-white border-2 border-[#2D1810]" : "text-[#6B5437] hover:bg-[#F5F1EB] hover:text-[#8B6F47]"}`, "class")} style="min-height: 48px; display: flex; align-items: center;" data-astro-cid-3ef6ksr2> <span class="mr-2" data-astro-cid-3ef6ksr2>${item.icon}</span> ${t(item.label, lang)} </a>`;
      })} </div> </div>`;
    }
    return renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`block px-4 py-3 rounded-md text-base font-bold transition-colors ${active ? "bg-[#8B6F47] text-white border-2 border-[#2D1810]" : "text-[#2D1810] hover:bg-[#F5F1EB] hover:text-[#8B6F47]"}`, "class")} style="min-height: 48px;"${addAttribute(active ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${t(link.label, lang)} </a>`;
  }), renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "lang": lang, "currentPath": currentPath, "data-astro-cid-3ef6ksr2": true }), addAttribute(COMPANY_INFO.whatsapp.link, "href"), addAttribute(t("cta.whatsapp", lang), "aria-label"), t("cta.whatsapp", lang));
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const servicesLinks = [
    { href: `/${lang}/services/hire-purchase`, label: "Hire Purchase" }
  ];
  const companyLinks = [
    { href: `/${lang}/about`, label: t("nav.about", lang) },
    { href: `/${lang}/contact`, label: t("nav.contact", lang) },
    { href: `/${lang}/blog`, label: t("nav.blog", lang) }
  ];
  const equipmentLinks = [
    { href: `/${lang}/equipment/excavator`, label: "Excavators" },
    { href: `/${lang}/equipment/lorry`, label: "Lorries" },
    { href: `/${lang}/equipment/forklift`, label: "Forklifts" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white text-gray-800 border-t-3 border-accent"> <!-- Main Footer Content --> <div class="container-custom py-12 md:py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"> <!-- Company Info --> <div class="space-y-4"> <img src="/logos/no background full.png"${addAttribute(COMPANY_INFO.name, "alt")} class="h-20 w-auto" width="250" height="80"> <p class="text-base leading-relaxed text-gray-600 font-bold"> ${COMPANY_INFO.tagline} </p> <div class="space-y-2"> <p class="text-xs font-bold text-gray-500 uppercase tracking-wide">Trust Badges</p> <div class="flex flex-wrap gap-2"> <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase border-2 border-gray-300">40 Years Experience</span> <span class="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-xs font-bold uppercase border-2 border-gray-400">KPKT Licensed</span> </div> </div> </div> <!-- Services Links --> <div> <h3 class="text-gray-800 font-bold text-lg mb-4 uppercase tracking-tight border-b-2 border-gray-300 pb-2">${t("footer.services", lang)}</h3> <ul class="space-y-3"> ${servicesLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-600 hover:text-gray-800 transition-colors text-base font-semibold hover:underline"> ${link.label} </a> </li>`)} </ul> </div> <!-- Company Links --> <div> <h3 class="text-gray-800 font-thin text-lg mb-4 uppercase tracking-tight border-b-2 border-gray-300 pb-2">${t("footer.company", lang)}</h3> <ul class="space-y-3"> ${companyLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-600 hover:text-gray-800 transition-colors text-base font-semibold hover:underline"> ${link.label} </a> </li>`)} ${equipmentLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-600 hover:text-gray-800 transition-colors text-base font-semibold hover:underline"> ${link.label} </a> </li>`)} </ul> </div> <!-- Contact Info --> <div> <h3 class="text-gray-800 font-thin text-lg mb-4 uppercase tracking-tight border-b-2 border-gray-300 pb-2">${t("footer.contact", lang)}</h3> <ul class="space-y-4 text-base"> <!-- Phone --> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div class="text-gray-600"> <a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="hover:text-gray-800 transition-colors font-semibold block py-1 hover:underline" style="min-height: 44px; display: inline-flex; align-items: center;"> ${COMPANY_INFO.phone.display} </a> <a${addAttribute(`tel:${COMPANY_INFO.phone.office}`, "href")} class="hover:text-gray-800 transition-colors font-semibold block py-1 hover:underline" style="min-height: 44px; display: inline-flex; align-items: center;"> ${COMPANY_INFO.phone.office} </a> </div> </li> <!-- WhatsApp --> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#25D366] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800 transition-colors font-semibold hover:underline" style="min-height: 44px; display: inline-flex; align-items: center;"> ${COMPANY_INFO.phone.display} </a> </li> <!-- Email --> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a${addAttribute(`mailto:${COMPANY_INFO.email}`, "href")} class="text-gray-600 hover:text-gray-800 transition-colors break-all font-semibold hover:underline"> ${COMPANY_INFO.email} </a> </li> <!-- Address --> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <a${addAttribute(COMPANY_INFO.address.googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800 transition-colors font-semibold hover:underline"> ${COMPANY_INFO.address.full} </a> </li> </ul> <!-- Business Hours --> <div class="mt-6"> <h4 class="text-gray-800 font-bold text-base mb-3 uppercase tracking-tight">${t("contact.info.hours", lang)}</h4> <ul class="space-y-2 text-sm text-gray-600"> <li class="font-semibold">${t("contact.businessHours.weekdays", lang)}</li> <li class="font-semibold">${t("contact.businessHours.saturday", lang)}</li> <li class="font-semibold">${t("contact.businessHours.sunday", lang)}</li> </ul> </div> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t-2 border-gray-300"> <div class="container-custom py-6"> <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <!-- Copyright --> <p class="text-base text-gray-600 text-center md:text-left font-semibold"> ${t("footer.copyright", lang).replace("2025", currentYear.toString())} </p> <!-- Social Links --> <div class="flex items-center space-x-6"> <a${addAttribute(COMPANY_INFO.social.facebook, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800 transition-colors font-semibold" aria-label="Follow us on Facebook"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <span class="text-gray-400 font-bold">|</span> <a${addAttribute(`/${lang}/privacy`, "href")} class="text-base text-gray-600 hover:text-gray-800 transition-colors font-semibold hover:underline"> ${t("footer.privacy", lang)} </a> <a${addAttribute(`/${lang}/terms`, "href")} class="text-base text-gray-600 hover:text-gray-800 transition-colors font-semibold hover:underline"> ${t("footer.terms", lang)} </a> </div> </div> </div> </div> </footer>`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/Footer.astro", void 0);

export { $$Header as $, COMPANY_INFO as C, SITE_CONFIG as S, $$Footer as a, formatCurrency as f, t };

const fs = require('fs');
const path = require('path');

// Blog post data for Days 15-21
const blogData = {
  day15: [
    { id: 'first-equipment-purchase-guide-2026', title: { en: 'First Equipment Purchase Guide 2026', ms: 'Panduan Pembelian Peralatan Pertama 2026', zh: '2026年首次设备采购指南' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'startup-excavator-financing-2026', title: { en: 'Startup Excavator Financing 2026', ms: 'Pembiayaan Excavator Permulaan 2026', zh: '2026年创业挖掘机融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'startup-lorry-financing-2026', title: { en: 'Startup Lorry Financing 2026', ms: 'Pembiayaan Lori Permulaan 2026', zh: '2026年创业卡车融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'startup-forklift-financing-2026', title: { en: 'Startup Forklift Financing 2026', ms: 'Pembiayaan Forklift Permulaan 2026', zh: '2026年创业叉车融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'startup-crane-financing-2026', title: { en: 'Startup Crane Financing 2026', ms: 'Pembiayaan Kren Permulaan 2026', zh: '2026年创业起重机融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'no-track-record-financing-2026', title: { en: 'No Track Record Equipment Financing 2026', ms: 'Pembiayaan Peralatan Tanpa Rekod 2026', zh: '2026年无信用记录设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'new-business-equipment-financing-2026', title: { en: 'New Business Equipment Financing 2026', ms: 'Pembiayaan Peralatan Perniagaan Baharu 2026', zh: '2026年新企业设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: '1-year-business-financing-2026', title: { en: '1-Year Business Equipment Financing 2026', ms: 'Pembiayaan Peralatan Perniagaan 1 Tahun 2026', zh: '2026年1年企业设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: '2-year-business-financing-2026', title: { en: '2-Year Business Equipment Financing 2026', ms: 'Pembiayaan Peralatan Perniagaan 2 Tahun 2026', zh: '2026年2年企业设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'graduate-startup-financing-2026', title: { en: 'Graduate Startup Equipment Financing 2026', ms: 'Pembiayaan Peralatan Permulaan Graduan 2026', zh: '2026年毕业生创业设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'retrenchment-startup-financing-2026', title: { en: 'Retrenchment Startup Equipment Financing 2026', ms: 'Pembiayaan Peralatan Permulaan Selepas Pemotongan 2026', zh: '2026年裁员后创业设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-first-equipment-financing-2026', title: { en: 'SME First Equipment Financing 2026', ms: 'Pembiayaan Peralatan Pertama SME 2026', zh: '2026年中小企业首设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'contractor-first-equipment-financing-2026', title: { en: 'Contractor First Equipment Financing 2026', ms: 'Pembiayaan Peralatan Pertama Kontraktor 2026', zh: '2026年承包商首设备融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'transport-first-vehicle-financing-2026', title: { en: 'Transport First Vehicle Financing 2026', ms: 'Pembiayaan Kenderaan Pertama Pengangkutan 2026', zh: '2026年运输业首车融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'startup-success-story-2026', title: { en: 'Startup Success Story 2026', ms: 'Kisah Kejayaan Permulaan Perniagaan 2026', zh: '2026年创业成功案例' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } }
  ],
  day16: [
    { id: 'sme-equipment-expansion-2026', title: { en: 'SME Equipment Expansion 2026', ms: 'Pengembangan Peralatan SME 2026', zh: '2026年中小企业设备扩张' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-fleet-addition-2026', title: { en: 'SME Fleet Addition 2026', ms: 'Penambahan Armada SME 2026', zh: '2026年中小企业车队增加' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-upgrade-strategy-2026', title: { en: 'SME Upgrade Strategy 2026', ms: 'Strategi Naik Taraf SME 2026', zh: '2026年中小企业升级策略' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-5-unit-package-2026', title: { en: 'SME 5-Unit Package 2026', ms: 'Pakej 5 Unit SME 2026', zh: '2026年中小企业5台套餐' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-10-unit-package-2026', title: { en: 'SME 10-Unit Package 2026', ms: 'Pakej 10 Unit SME 2026', zh: '2026年中小企业10台套餐' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-0-percent-deposit-2026', title: { en: 'SME 0% Deposit Financing 2026', ms: 'Pembiayaan Deposit 0% SME 2026', zh: '2026年中小企业0%定金' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-bad-credit-financing-2026', title: { en: 'SME Bad Credit Financing 2026', ms: 'Pembiayaan Kredit Buruk SME 2026', zh: '2026年中小企业信用不良' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-bank-rejected-financing-2026', title: { en: 'SME Bank Rejected Financing 2026', ms: 'Pembiayaan SME Ditolak Bank 2026', zh: '2026年中小企业被银行拒' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-urgent-equipment-2026', title: { en: 'SME Urgent Equipment Financing 2026', ms: 'Pembiayaan Peralatan Segera SME 2026', zh: '2026年中小企业紧急设备' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-construction-financing-2026', title: { en: 'SME Construction Financing 2026', ms: 'Pembiayaan Pembinaan SME 2026', zh: '2026年中小企业建筑业' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-transport-financing-2026', title: { en: 'SME Transport Financing 2026', ms: 'Pembiayaan Pengangkutan SME 2026', zh: '2026年中小企业运输业' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-manufacturing-financing-2026', title: { en: 'SME Manufacturing Financing 2026', ms: 'Pembiayaan Pembuatan SME 2026', zh: '2026年中小企业制造业' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-warehouse-financing-2026', title: { en: 'SME Warehouse Financing 2026', ms: 'Pembiayaan Gudang SME 2026', zh: '2026年中小企业仓储业' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-refinancing-2026', title: { en: 'SME Equipment Refinancing 2026', ms: 'Pembiayaan Semula Peralatan SME 2026', zh: '2026年中小企业再融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'sme-lease-option-2026', title: { en: 'SME Lease Option 2026', ms: 'Pilihan Sewa SME 2026', zh: '2026年中小企业租赁选项' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } }
  ],
  day17: [
    { id: 'fleet-expansion-strategy-2026', title: { en: 'Fleet Expansion Strategy 2026', ms: 'Strategi Pengembangan Armada 2026', zh: '2026年车队扩张策略' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: '5-unit-fleet-package-2026', title: { en: '5-Unit Fleet Package 2026', ms: 'Pakej Armada 5 Unit 2026', zh: '2026年5台车队套餐' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: '10-unit-fleet-package-2026', title: { en: '10-Unit Fleet Package 2026', ms: 'Pakej Armada 10 Unit 2026', zh: '2026年10台车队套餐' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: '20-unit-fleet-package-2026', title: { en: '20-Unit Fleet Package 2026', ms: 'Pakej Armada 20 Unit 2026', zh: '2026年20台车队套餐' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'excavator-fleet-financing-2026', title: { en: 'Excavator Fleet Financing 2026', ms: 'Pembiayaan Armada Excavator 2026', zh: '2026年挖掘机车队' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'lorry-fleet-financing-2026', title: { en: 'Lorry Fleet Financing 2026', ms: 'Pembiayaan Armada Lori 2026', zh: '2026年卡车车队' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'forklift-fleet-financing-2026', title: { en: 'Forklift Fleet Financing 2026', ms: 'Pembiayaan Armada Forklift 2026', zh: '2026年叉车车队' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'crane-fleet-financing-2026', title: { en: 'Crane Fleet Financing 2026', ms: 'Pembiayaan Armada Kren 2026', zh: '2026年起重机车队' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'mixed-fleet-financing-2026', title: { en: 'Mixed Fleet Financing 2026', ms: 'Pembiayaan Armada Campuran 2026', zh: '2026年混合车队' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'fleet-refinancing-2026', title: { en: 'Fleet Refinancing 2026', ms: 'Pembiayaan Semula Armada 2026', zh: '2026年车队再融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'fleet-lease-financing-2026', title: { en: 'Fleet Lease Financing 2026', ms: 'Pembiayaan Sewa Armada 2026', zh: '2026年车队租赁' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'fleet-purchase-financing-2026', title: { en: 'Fleet Purchase Financing 2026', ms: 'Pembiayaan Pembelian Armada 2026', zh: '2026年车队购买' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'fleet-no-deposit-2026', title: { en: 'Fleet No Deposit Financing 2026', ms: 'Pembiayaan Armada Tanpa Deposit 2026', zh: '2026年车队无定金' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'fleet-bad-credit-2026', title: { en: 'Fleet Bad Credit Financing 2026', ms: 'Pembiayaan Kredit Buruk Armada 2026', zh: '2026年车队信用不良' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'fleet-success-story-2026', title: { en: 'Fleet Success Story 2026', ms: 'Kisah Kejayaan Armada 2026', zh: '2026年车队成功案例' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } }
  ],
  day18: [
    { id: 'equipment-replacement-guide-2026', title: { en: 'Equipment Replacement Guide 2026', ms: 'Panduan Penggantian Peralatan 2026', zh: '2026年设备更换指南' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'upgrade-old-equipment-2026', title: { en: 'Upgrade Old Equipment 2026', ms: 'Naik Taraf Peralatan Lama 2026', zh: '2026年升级旧设备' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'replace-10-year-equipment-2026', title: { en: 'Replace 10-Year Equipment 2026', ms: 'Ganti Peralatan 10 Tahun 2026', zh: '2026年更换10年设备' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'replace-broken-equipment-2026', title: { en: 'Replace Broken Equipment 2026', ms: 'Ganti Peralatan Rosak 2026', zh: '2026年更换损坏设备' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'upgrade-efficiency-2026', title: { en: 'Upgrade Efficiency Equipment 2026', ms: 'Naik Taraf Kecekapan Peralatan 2026', zh: '2026年效率升级' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'upgrade-capacity-2026', title: { en: 'Upgrade Capacity Equipment 2026', ms: 'Naik Taraf Kapasiti Peralatan 2026', zh: '2026年容量升级' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'upgrade-technology-2026', title: { en: 'Upgrade Technology Equipment 2026', ms: 'Naik Taraf Teknologi Peralatan 2026', zh: '2026年技术升级' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'excavator-replacement-2026', title: { en: 'Excavator Replacement Guide 2026', ms: 'Panduan Penggantian Excavator 2026', zh: '2026年挖掘机更换' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'lorry-replacement-2026', title: { en: 'Lorry Replacement Guide 2026', ms: 'Panduan Penggantian Lori 2026', zh: '2026年卡车更换' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'forklift-replacement-2026', title: { en: 'Forklift Replacement Guide 2026', ms: 'Panduan Penggantian Forklift 2026', zh: '2026年叉车更换' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'trade-in-old-equipment-2026', title: { en: 'Trade-In Old Equipment 2026', ms: 'Tukar Ganti Peralatan Lama 2026', zh: '2026年旧设备折价' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'refinance-old-equipment-2026', title: { en: 'Refinance Old Equipment 2026', ms: 'Pembiayaan Semula Peralatan Lama 2026', zh: '2026年旧设备再融资' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'scrap-old-equipment-2026', title: { en: 'Scrap Old Equipment Guide 2026', ms: 'Panduan Pelupusan Peralatan Lama 2026', zh: '2026年旧设备报废' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'replacement-success-story-2026', title: { en: 'Equipment Replacement Success 2026', ms: 'Kejayaan Penggantian Peralatan 2026', zh: '2026年更换成功案例' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } },
    { id: 'post-cny-replacement-2026', title: { en: 'Post-CNY Equipment Replacement 2026', ms: 'Penggantian Peralatan Selepas CNY 2026', zh: '2026年春节后更换' }, category: { en: 'Business Growth', ms: 'Pertumbuhan Perniagaan', zh: '业务增长' } }
  ],
  day19: [
    { id: 'equipment-refinancing-guide-2026', title: { en: 'Equipment Refinancing Guide 2026', ms: 'Panduan Pembiayaan Semula Peralatan 2026', zh: '2026年设备再融资指南' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-cash-flow-2026', title: { en: 'Refinance for Cash Flow 2026', ms: 'Pembiayaan Semula untuk Aliran Tunai 2026', zh: '2026年再融资现金流' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-expansion-2026', title: { en: 'Refinance for Expansion 2026', ms: 'Pembiayaan Semula untuk Pengembangan 2026', zh: '2026年再融资扩张' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-old-equipment-guide-2026', title: { en: 'Refinance Old Equipment Guide 2026', ms: 'Panduan Pembiayaan Semula Peralatan Lama 2026', zh: '2026年旧设备再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'excavator-refinancing-2026', title: { en: 'Excavator Refinancing Guide 2026', ms: 'Panduan Pembiayaan Semula Excavator 2026', zh: '2026年挖掘机再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'lorry-refinancing-2026', title: { en: 'Lorry Refinancing Guide 2026', ms: 'Panduan Pembiayaan Semula Lori 2026', zh: '2026年卡车再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'forklift-refinancing-2026', title: { en: 'Forklift Refinancing Guide 2026', ms: 'Panduan Pembiayaan Semula Forklift 2026', zh: '2026年叉车再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'crane-refinancing-2026', title: { en: 'Crane Refinancing Guide 2026', ms: 'Panduan Pembiayaan Semula Kren 2026', zh: '2026年起重机再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'prime-mover-refinancing-2026', title: { en: 'Prime Mover Refinancing 2026', ms: 'Pembiayaan Semula Prime Mover 2026', zh: '2026年牵引车再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-bad-credit-2026', title: { en: 'Refinance with Bad Credit 2026', ms: 'Pembiayaan Semula dengan Kredit Buruk 2026', zh: '2026年信用不良再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-bank-rejected-2026', title: { en: 'Refinance After Bank Rejection 2026', ms: 'Pembiayaan Semula Selepas Penolakan Bank 2026', zh: '2026年被银行拒再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-no-equity-2026', title: { en: 'Refinance with No Equity 2026', ms: 'Pembiayaan Semula Tanpa Ekuiti 2026', zh: '2026年无股权再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-low-rates-2026', title: { en: 'Low Rate Refinance 2026', ms: 'Pembiayaan Semula Kadar Rendah 2026', zh: '2026年低利率再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-fast-2026', title: { en: 'Fast Refinance Approval 2026', ms: 'Kelulusan Pembiayaan Semula Pantas 2026', zh: '2026年快速再融资' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } },
    { id: 'refinance-success-story-2026', title: { en: 'Refinance Success Story 2026', ms: 'Kisah Kejayaan Pembiayaan Semula 2026', zh: '2026年再融资成功案例' }, category: { en: 'Financial Tips', ms: 'Tips Kewangan', zh: '财务建议' } }
  ],
  day20: [
    { id: '2026-capital-allowance-guide', title: { en: '2026 Capital Allowance Guide', ms: 'Panduan Elaun Modal 2026', zh: '2026年资本津贴指南' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'equipment-tax-deduction-2026', title: { en: 'Equipment Tax Deduction Guide 2026', ms: 'Panduan Potongan Cukai Peralatan 2026', zh: '2026年设备税务扣除' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'excavator-tax-benefits-2026', title: { en: 'Excavator Tax Benefits Guide 2026', ms: 'Panduan Faedah Cukai Excavator 2026', zh: '2026年挖掘机税务优惠' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'lorry-tax-benefits-2026', title: { en: 'Lorry Tax Benefits Guide 2026', ms: 'Panduan Faedah Cukai Lori 2026', zh: '2026年卡车税务优惠' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'forklift-tax-benefits-2026', title: { en: 'Forklift Tax Benefits Guide 2026', ms: 'Panduan Faedah Cukai Forklift 2026', zh: '2026年叉车税务优惠' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'generator-tax-benefits-2026', title: { en: 'Generator Tax Benefits Guide 2026', ms: 'Panduan Faedah Cukai Jana Kuasa 2026', zh: '2026年发电机税务优惠' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'manufacturing-tax-2026', title: { en: 'Manufacturing Equipment Tax Guide 2026', ms: 'Panduan Cukai Peralatan Pembuatan 2026', zh: '2026年制造业税务' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'transport-tax-2026', title: { en: 'Transport Equipment Tax Guide 2026', ms: 'Panduan Cukai Peralatan Pengangkutan 2026', zh: '2026年运输业税务' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'construction-tax-2026', title: { en: 'Construction Equipment Tax Guide 2026', ms: 'Panduan Cukai Peralatan Pembinaan 2026', zh: '2026年建筑业税务' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'pre-cny-tax-purchase-2026', title: { en: 'Pre-CNY Tax Purchase Guide 2026', ms: 'Panduan Pembelian Cukai Sebelum CNY 2026', zh: '2026年春节前税务采购' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'year-end-tax-planning-2026', title: { en: 'Year-End Tax Planning Guide 2026', ms: 'Panduan Perancangan Cukai Akhir Tahun 2026', zh: '2026年终税务筹划' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'tax-with-purchase-2026', title: { en: 'Tax Benefits with Equipment Purchase 2026', ms: 'Faedah Cukai dengan Pembelian Peralatan 2026', zh: '2026年采购税务' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'allowance-claiming-2026', title: { en: 'Capital Allowance Claiming Guide 2026', ms: 'Panduan Tuntutan Elaun Modal 2026', zh: '2026年津贴申请' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'lhdn-guidelines-2026', title: { en: 'LHDN Guidelines Equipment Purchase 2026', ms: 'Panduan LHDN Pembelian Peralatan 2026', zh: '2026年税务局指南' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } },
    { id: 'tax-success-story-2026', title: { en: 'Tax Planning Success Story 2026', ms: 'Kisah Kejayaan Perancangan Cukai 2026', zh: '2026年税务成功案例' }, category: { en: 'Tax Benefits', ms: 'Faedah Cukai', zh: '税务优惠' } }
  ],
  day21: [
    { id: '2025-equipment-review-2026', title: { en: '2025 Equipment Review for 2026 Planning', ms: 'Ulasan Peralatan 2025 untuk Perancangan 2026', zh: '2026年2025设备回顾' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-equipment-planning', title: { en: '2026 Equipment Planning Guide', ms: 'Panduan Perancangan Peralatan 2026', zh: '2026年设备规划' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-budget-allocation', title: { en: '2026 Equipment Budget Allocation', ms: 'Peruntukan Bajet Peralatan 2026', zh: '2026年预算分配' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-equipment-forecast', title: { en: '2026 Equipment Forecast Guide', ms: 'Panduan Ramalan Peralatan 2026', zh: '2026年设备预测' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: 'q1-2026-equipment-need', title: { en: 'Q1 2026 Equipment Needs', ms: 'Keperluan Peralatan Q1 2026', zh: '2026年第一季度需求' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-tender-preparation', title: { en: '2026 Tender Equipment Preparation', ms: 'Persediaan Peralatan Tender 2026', zh: '2026年招标准备' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-project-bidding', title: { en: '2026 Project Bidding Strategy', ms: 'Strategi Bidaan Projek 2026', zh: '2026年项目投标' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-expansion-planning', title: { en: '2026 Business Expansion Planning', ms: 'Perancangan Pengembangan Perniagaan 2026', zh: '2026年扩张规划' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-replacement-schedule', title: { en: '2026 Equipment Replacement Schedule', ms: 'Jadual Penggantian Peralatan 2026', zh: '2026年更换计划' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-technology-upgrade', title: { en: '2026 Technology Upgrade Planning', ms: 'Perancangan Naik Taraf Teknologi 2026', zh: '2026年技术升级计划' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-compliance-update', title: { en: '2026 Equipment Compliance Update', ms: 'Kemaskini Pematuhan Peralatan 2026', zh: '2026年合规更新' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-market-outlook', title: { en: '2026 Equipment Market Outlook', ms: 'Outlook Pasaran Peralatan 2026', zh: '2026年市场展望' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-rate-forecast', title: { en: '2026 Financing Rate Forecast', ms: 'Ramalan Kadar Pembiayaan 2026', zh: '2026年利率预测' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-strategy-guide', title: { en: '2026 Business Strategy Guide', ms: 'Panduan Strategi Perniagaan 2026', zh: '2026年策略指南' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } },
    { id: '2026-planning-success', title: { en: '2026 Planning Success Guide', ms: 'Panduan Kejayaan Perancangan 2026', zh: '2026年规划成功' }, category: { en: 'Business Planning', ms: 'Perancangan Perniagaan', zh: '业务规划' } }
  ]
};

const baseDir = 'C:\\Users\\walte\\ing heng credit\\ing-heng-credit-seo\\clients\\ing-heng\\website\\src\\pages';
const languages = [
  { code: 'en', name: 'English', dir: 'en', seoKeyword: 'machinery-financing' },
  { code: 'ms', name: 'Malay', dir: 'ms', seoKeyword: 'pembiayaan jentera' },
  { code: 'zh', name: 'Chinese', dir: 'zh', seoKeyword: '机械融资' }
];

const dates = {
  day15: '2026-01-15',
  day16: '2026-01-16',
  day17: '2026-01-17',
  day18: '2026-01-18',
  day19: '2026-01-19',
  day20: '2026-01-20',
  day21: '2026-01-21'
};

function getContent(post, lang, dayKey) {
  const baseContent = `
      <h2>2026 Equipment Financing Guide</h2>
      <p>Comprehensive equipment financing solutions for your business. ${post.title[lang]} with 0% down payment options.</p>

      <h2>Bank Financing Challenges</h2>
      <ul>
        <li>Interest rate: 4.6% - 6.0%</li>
        <li>Maximum loan: 90%</li>
        <li>Down payment: 10% - 20%</li>
        <li>Equipment age limit: 5 years</li>
        <li>Processing time: 4-6 weeks</li>
      </ul>

      <h2>Ing Heng Credit Advantages</h2>
      <ul>
        <li>Interest rate: Competitive rates</li>
        <li>Maximum loan: 100%</li>
        <li>Down payment: 0%</li>
        <li>Equipment age: No limit</li>
        <li>Processing: 24-48 hours</li>
      </ul>

      <h2>Equipment Prices 2026</h2>
      <ul>
        <li>Komatsu excavator: RM34,000+</li>
        <li>CAT excavator: RM50,000+</li>
        <li>Forklift: RM15,000+</li>
        <li>Lorry 5-ton: RM130,000+</li>
      </ul>

      <h2>Why Choose Ing Heng Credit</h2>
      <p>40+ years of experience. 4,000+ companies helped. KPKT licensed. Fast approval. Flexible terms.</p>
  `;

  return baseContent;
}

function generateAstroFile(post, lang, date, dayKey) {
  const langConfig = languages.find(l => l.code === lang);

  const excerpt = {
    en: `${post.title.en}. 0% down payment equipment financing. 100% full loan. No age limit. Fast 24-hour approval. Bank alternative.`,
    ms: `${post.title.ms}. Pembiayaan peralatan bayaran pendahuluan 0%. Pinjaman penuh 100%. Tiada had umur. Kelulusan pantas 24 jam. Alternatif bank.`,
    zh: `${post.title.zh}。0%首付设备融资。100%全款。无年龄限制。快速24小时审批。银行替代方案。`
  };

  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = '${lang}';
const post = {
  title: '${post.title[lang]}',
  slug: '${post.id}',
  excerpt: '${excerpt[lang]}',
  date: '${date}',
  author: 'Ing Heng Credit Team',
  readTime: 5,
  category: '${post.category[lang]}',
  image: '/images/blog/${post.id}.jpg'
};

const keywords = ['${langConfig.seoKeyword}', 'equipment financing malaysia', '0% down payment', 'heavy equipment loan'],
  breadcrumbItems = [
  { label: 'Home', href: '/${lang}' },
  { label: 'Blog', href: '/${lang}/blog' },
  { label: post.title, href: \`/\${lang}/blog/\${post.slug}\` }
];
---

<BaseLayout title={post.title} description={post.excerpt} lang={lang} keywords={keywords}>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": post.author },
      "publisher": {
        "@type": "Organization",
        "name": "Ing Heng Credit & Leasing Sdn Bhd",
        "logo": {
          "@type": "ImageObject",
          "url": "https://inghengcredit.com/logo.png"
        }
      }
    }
  </script>

  <Breadcrumbs items={breadcrumbItems} />

  <article class="max-w-4xl mx-auto px-4 py-12">
    <header class="mb-8">
      <span class="text-sm font-semibold" style="color: #D4A574;">${post.category[lang]}</span>
      <h1 class="text-4xl font-bold mt-2" style="color: #2D1810; font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;">{post.title}</h1>
      <p class="text-gray-600 mt-4">{post.excerpt}</p>
      <div class="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span>{post.author}</span>
        <span>•</span>
        <time>{new Date(post.date).toLocaleDateString('${lang === 'ms' ? 'ms-MY' : lang === 'zh' ? 'zh-CN' : 'en-US'}', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>•</span>
        <span>{post.readTime} min read</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">
      ${getContent(post, lang, dayKey)}

      <div style="background: #F5F0E8; border-left: 4px solid #D4A574; padding: 1.5rem; margin: 2rem 0;">
        <h3 style="color: #2D1810; margin-top: 0;">${post.title[lang]}?</h3>
        <p style="margin-bottom: 1rem;">0% down payment. 100% full loan. No age limit. Fast 24-hour approval. Get approved now.</p>
        <p style="margin-bottom: 0;"><strong>Contact:</strong> +60175700889 (WhatsApp) | 03-3324 8899 (Phone)</p>
      </div>
    </div>

    <footer class="mt-12 pt-8 border-t">
      <CTAButton text="Get Financing Now" link={COMPANY_INFO.whatsapp.link} variant="accent" size="large" />
    </footer>
  </article>
</BaseLayout>

<style>
  h2 {
    color: #2D1810;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #D4A574;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #8B6F47;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.8;
    color: #374151;
  }

  strong {
    color: #2D1810;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1.8;
    color: #374151;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #D4A574;
    font-weight: bold;
  }

  br {
    display: none;
  }
</style>
`;
}

// Generate all files
let totalFiles = 0;
const days = ['day15', 'day16', 'day17', 'day18', 'day19', 'day20', 'day21'];

days.forEach(day => {
  const posts = blogData[day];
  posts.forEach(post => {
    languages.forEach(lang => {
      const content = generateAstroFile(post, lang.code, dates[day], day);
      const filePath = path.join(baseDir, lang.dir, 'blog', `${post.id}.astro`);

      fs.writeFileSync(filePath, content, 'utf8');
      totalFiles++;

      console.log(`Created: ${filePath}`);
    });
  });
});

console.log(`\nTotal files created: ${totalFiles}`);
console.log('Days 15-21 blog posts generated successfully!');

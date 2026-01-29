const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let deletedCount = 0;
const today = new Date().toDateString();

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const stats = fs.statSync(filePath);
  const fileDate = stats.mtime.toDateString();

  // Delete files modified today that were part of migration
  if (fileDate === today) {
    // Also check if file size is small (broken files)
    // But keep the properly migrated ones like forklift-leasing-vs-buying-guide.md
    const problematicFiles = [
      '24-hour-forklift-fast-approval.md',
      '48-hour-excavator-fast-approval-malaysia.md',
      'advanced-waste-sorting-systems-financing-malaysia.md',
      'agriculture-equipment-financing-malaysia.md',
      'alfa-romeo-spider-financing-malaysia.md',
      'audi-quattro-loan-malaysia.md',
      'autozam-az1-financing-malaysia.md',
      'automated-recycling-technology-financing-malaysia.md',
      'bmw-e30-financing-malaysia.md',
      'camper-van-conversion-loan.md',
      'caravan-financing-malaysia-camping.md',
      'cash-flow-management-construction.md',
      'cold-chain-forklift-financing-options.md',
      'cold-chain-lorry-financing-malaysia.md',
      'data-center-excavator-financing-malaysia.md',
      'dosh-forklift-regulations-2024-malaysia.md',
      'ecommerce-forklift-demand-malaysia-2025.md',
      'electric-diesel-excavator-malaysia-2030.md',
      'electric-forklift-cost-savings-malaysia.md',
      'electric-lorry-malaysia-green-logistics-2030.md',
      'electric-motorcycle-zero-financing-malaysia.md',
      'emergency-business-loan-fast-approval.md',
      'enduro-bike-financing-malaysia.md',
      'empty-backload-lorry-ownership-malaysia.md',
      'excavator-fleet-expansion-malaysia-2025.md',
      'excavator-hire-purchase-vs-loan-malaysia.md',
      'excavator-maintenance-financing-structure.md',
      'excavator-repossession-risk-protection.md',
      'expedition-truck-loan-malaysia.md',
      'farm-machinery-leasing-malaysia.md',
      'fleet-expansion-excavator-financing-guide.md',
      'forklift-fleet-financing-strategy.md',
      'forklift-leasing-vs-buying-guide.md',
      'forklift-replacement-cycle-upgrade-guide.md',
      'late-payment-excavator-loan-penalty.md',
      'logistics-cash-flow-lorry-installments.md',
      'lorry-fleet-expansion-strategy.md',
      'lorry-financing-fast-approval-strategies.md',
      'lorry-hire-purchase-vs-operating-lease.md',
      'lorry-insurance-road-tax-financing.md',
      'narrow-aisle-forklift-financing-warehouse.md',
      'off-peak-rm15-prime-mover-profit.md',
      'prime-mover-fleet-expansion-strategy.md',
      'prime-mover-hire-purchase-vs-contract-hire.md',
      'prime-mover-maintenance-reserve-financing.md',
      'prime-mover-repossession-protection.md',
      'refinance-excavator-loan-malaysia.md',
      'second-hand-forklift-financing-checklist.md',
      'tax-benefits-equipment-financing-2025.md',
      'toyota-vs-komatsu-forklift-financing.md',
      'used-excavator-financing-malaysia-guide.md',
      'used-lorry-financing-interest-rates.md',
      'used-prime-mover-financing-rates.md',
      'volvo-vs-scania-vs-mercedes-prime-mover.md',
      'warehouse-automation-forklift-financing-2025.md',
    ];

    if (problematicFiles.includes(file)) {
      fs.unlinkSync(filePath);
      deletedCount++;
      console.log(`Deleted: ${file}`);
    }
  }
});

console.log(`\nDeleted ${deletedCount} migrated files`);

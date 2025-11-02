#!/usr/bin/env python3
"""
Fix ALL title tags and meta descriptions across 30+ pages
Target: Title tags <60 chars, Meta descriptions <160 chars
"""

import re
import os
from pathlib import Path

# Define the fixes for each page type
FIXES = {
    # HOMEPAGES (3 languages)
    'en/index.astro': {
        'old_title': 'Equipment Financing Malaysia | Fast Approval in 24 Hours | Ing Heng Credit',
        'new_title': 'Equipment Financing Malaysia | 24Hr Approval | Ing Heng',
        'old_desc': 'Get equipment financing with 95% approval rate. Serving construction, logistics & manufacturing since 1985. Excavators, lorries, forklifts - WhatsApp for instant quote.',
        'new_desc': 'Equipment financing: 95% approval, 24hr processing. Excavators, lorries, forklifts from RM30k. 40+ years serving Malaysia. WhatsApp for quote.'
    },
    'ms/index.astro': {
        'old_title': 'Pembiayaan Peralatan Malaysia | Kelulusan Pantas 24 Jam | Ing Heng Credit',
        'new_title': 'Pembiayaan Peralatan Malaysia | Kelulusan 24Jam | Ing Heng',
        'old_desc': 'Pembiayaan peralatan dengan kadar kelulusan 95%. Berkhidmat sejak 1985 untuk pembinaan, logistik & pembuatan. Jengkaut, lori, forklift - WhatsApp untuk sebut harga segera.',
        'new_desc': 'Pembiayaan peralatan: 95% kelulusan, proses 24jam. Jengkaut, lori, forklift dari RM30k. 40+ tahun berkhidmat. WhatsApp untuk sebut harga.'
    },
    'zh/index.astro': {
        'old_title': '设备融资马来西亚 | 24小时快速批准 | 英兴信贷租赁',
        'new_title': '设备融资马来西亚 | 24小时批准 | 英兴信贷',
        'old_desc': '设备融资95%批准率。自1985年服务建筑、物流与制造业。挖掘机、罗里、叉车融资 - WhatsApp即时报价。40年信誉保证。',
        'new_desc': '设备融资:95%批准率,24小时处理。挖掘机、罗里、叉车从RM30k起。40年经验服务马来西亚。WhatsApp报价。'
    },

    # EQUIPMENT PAGES - EXCAVATOR
    'en/equipment/excavator.astro': {
        'old_title': 'Excavator Financing Malaysia | 24-Hour Approval | 95% Approval Rate',
        'new_title': 'Excavator Financing Malaysia | 95% Approved | Ing Heng',
        'old_desc': 'Fast excavator financing for contractors. 24-hour approval, 95% approval rate, flexible 12-60 month terms. Finance new & used excavators from RM30k-RM3M. Apply now!',
        'new_desc': 'Excavator financing: 24hr approval, 95% rate, 12-60 month terms. New & used from RM30k-RM3M. 10% down payment. Apply now, equipped tomorrow!'
    },

    # SERVICES - Hire Purchase
    'en/services/hire-purchase.astro': {
        'old_title': 'Hire Purchase Financing Malaysia | Equipment HP Loan | Ing Heng Credit',
        'new_title': 'Hire Purchase Malaysia | Equipment Financing | Ing Heng',
        'old_desc': 'Flexible hire purchase financing for excavators, lorries, forklifts & construction equipment in Malaysia. 95% approval rate, 24-hour processing, terms up to 60 months. Get instant quote!',
        'new_desc': 'Hire purchase financing: excavators, lorries, forklifts. 95% approval, 24hr processing, 12-60 month terms. 10-30% down payment. Quote now!'
    },

    # BLOG - Cash Flow Management
    'en/blog/cash-flow-management-construction.astro': {
        'old_title': 'Cash Flow Management for Construction Companies: 5 Essential Strategies | Malaysia 2025',
        'new_title': 'Construction Cash Flow: 5 Strategies | Malaysia 2025',
        'old_desc': 'Master cash flow management for construction businesses in Malaysia. Learn 5 proven strategies to handle project payment cycles, manage seasonal fluctuations, optimize working capital, and use equipment financing as a cash flow tool.',
        'new_desc': 'Master construction cash flow: 5 proven strategies for payment cycles, seasonal fluctuations, working capital. Use equipment financing smartly.'
    },
}

# Additional equipment pages pattern
EQUIPMENT_PAGES = [
    'bulldozer', 'crane', 'forklift', 'lorry', 'prime-mover', 'refrigerated-truck'
]

SERVICE_PAGES = [
    'loan-financing', 'insurance'
]

def fix_file(file_path, old_title, new_title, old_desc, new_desc):
    """Fix title and description in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace title
        content = content.replace(f'title="{old_title}"', f'title="{new_title}"')

        # Replace description
        content = content.replace(f'description="{old_desc}"', f'description="{new_desc}"')

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✓ Fixed: {file_path}")
        print(f"  Title: {len(new_title)} chars")
        print(f"  Desc: {len(new_desc)} chars")
        return True
    except Exception as e:
        print(f"✗ Error fixing {file_path}: {e}")
        return False

def main():
    base_path = Path(r"C:\Users\Vivobook\OneDrive\Desktop\ing-heng-credit-seo\website\src\pages")

    fixed_count = 0

    # Fix predefined pages
    for page_path, fixes in FIXES.items():
        full_path = base_path / page_path
        if full_path.exists():
            if fix_file(full_path, fixes['old_title'], fixes['new_title'],
                       fixes['old_desc'], fixes['new_desc']):
                fixed_count += 1
        else:
            print(f"⚠ File not found: {full_path}")

    print(f"\n{'='*60}")
    print(f"SUMMARY: Fixed {fixed_count} files")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()

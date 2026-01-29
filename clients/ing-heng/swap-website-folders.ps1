# Website Folder Swap Script
# Created: 2025-01-25
# Purpose: Swap current website (21 posts) with restore version (1,549 posts)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  WEBSITE FOLDER SWAP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$baseDir = "C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ing-heng"
$websiteCurrent = Join-Path $baseDir "website"
$websiteArchive = Join-Path $baseDir "website-archive-old"
$restoreFolder = Join-Path $baseDir "website restore"
$websiteRestore = Join-Path $restoreFolder "website"

# Check current state
Write-Host "[1/5] Checking current state..." -ForegroundColor Yellow
Write-Host "  Current website: $websiteCurrent"
Write-Host "  Restore folder: $restoreFolder"
Write-Host ""

# Count posts before swap
Write-Host "[2/5] Counting blog posts..." -ForegroundColor Yellow
if (Test-Path "$websiteCurrent/src/pages/en/blog") {
    $enCurrent = (Get-ChildItem "$websiteCurrent/src/pages/en/blog" -Filter *.astro -Recurse -File -ErrorAction SilentlyContinue | Measure-Object).Count
} else { $enCurrent = 0 }
if (Test-Path "$websiteRestore/src/pages/en/blog") {
    $enRestore = (Get-ChildItem "$websiteRestore/src/pages/en/blog" -Filter *.astro -Recurse -File -ErrorAction SilentlyContinue | Measure-Object).Count
} else { $enRestore = 0 }
Write-Host "  Current website EN blogs: $enCurrent"
Write-Host "  Restore website EN blogs: $enRestore"
Write-Host ""

# Check if folders exist
Write-Host "[3/5] Checking folders..." -ForegroundColor Yellow
if (-not (Test-Path $websiteCurrent)) {
    Write-Host "  ERROR: Current website folder not found!" -ForegroundColor Red
    exit 1
}
if (-not (Test-Path $websiteRestore)) {
    Write-Host "  ERROR: Restore website folder not found!" -ForegroundColor Red
    exit 1
}
if (Test-Path $websiteArchive) {
    Write-Host "  WARNING: Archive folder already exists!" -ForegroundColor Red
    $response = Read-Host "  Delete it and continue? (y/n)"
    if ($response -ne 'y') {
        Write-Host "  Cancelled." -ForegroundColor Yellow
        exit 0
    }
    Remove-Item -Path $websiteArchive -Recurse -Force
    Write-Host "  Deleted existing archive folder." -ForegroundColor Green
}
Write-Host "  All folders ready." -ForegroundColor Green
Write-Host ""

# Perform the swap
Write-Host "[4/5] Swapping folders..." -ForegroundColor Yellow
Write-Host "  Step 1: Renaming current 'website' to 'website-archive-old'..." -ForegroundColor Cyan
try {
    Rename-Item -Path $websiteCurrent -NewName "website-archive-old" -ErrorAction Stop
    Write-Host "  SUCCESS: Current website archived." -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Could not rename website folder!" -ForegroundColor Red
    Write-Host "  $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "  Make sure:" -ForegroundColor Yellow
    Write-Host "  - Dev server is stopped (Ctrl+C in terminal)" -ForegroundColor Yellow
    Write-Host "  - No editors have files open in the website folder" -ForegroundColor Yellow
    Write-Host "  - No other processes are using the folder" -ForegroundColor Yellow
    exit 1
}

Write-Host "  Step 2: Moving restore website to become main website..." -ForegroundColor Cyan
Move-Item -Path $websiteRestore -Destination $baseDir -Force
Write-Host "  SUCCESS: Restore website is now the main website." -ForegroundColor Green
Write-Host ""

# Verify the swap
Write-Host "[5/5] Verifying swap..." -ForegroundColor Yellow
if (Test-Path $websiteArchive) {
    Write-Host "  ✓ Archive folder exists: website-archive-old" -ForegroundColor Green
} else {
    Write-Host "  ✗ Archive folder missing!" -ForegroundColor Red
}

if (Test-Path $websiteCurrent) {
    $newEnCount = (Get-ChildItem "$websiteCurrent/src/pages/en/blog" -Filter *.astro -Recurse -File -ErrorAction SilentlyContinue | Measure-Object).Count
    Write-Host "  ✓ New website exists with $newEnCount EN blogs" -ForegroundColor Green
} else {
    Write-Host "  ✗ New website missing!" -ForegroundColor Red
}

if (Test-Path $restoreFolder) {
    $remaining = Get-ChildItem $restoreFolder -File -ErrorAction SilentlyContinue | Measure-Object
    if ($remaining.Count -eq 0) {
        Write-Host "  ✓ Restore folder is empty (can be deleted)" -ForegroundColor Green
    } else {
        Write-Host "  ℹ Restore folder still has $($remaining.Count) file(s)" -ForegroundColor Cyan
    }
}
Write-Host ""

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SWAP COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Old website (21 posts) → website-archive-old/" -ForegroundColor White
Write-Host "  Restore (1,549 posts) → website/" -ForegroundColor White
Write-Host ""
Write-Host "  Next steps:" -ForegroundColor Yellow
Write-Host "  1. cd website" -ForegroundColor White
Write-Host "  2. npm install" -ForegroundColor White
Write-Host "  3. npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "  To undo (if needed):" -ForegroundColor Yellow
Write-Host "  1. Close dev server" -ForegroundColor White
Write-Host "  2. Rename website back to website-temp" -ForegroundColor White
Write-Host "  3. Rename website-archive-old back to website" -ForegroundColor White
Write-Host ""

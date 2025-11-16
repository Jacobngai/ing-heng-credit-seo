# Language Switcher - Quick Testing Guide

## 🎯 What You Should See

### Desktop View
```
Top-right corner of header:

Before clicking:
┌──────────┐
│  🇬🇧  ▼  │  ← Flag only, NO "EN" text
└──────────┘

After clicking:
┌──────────┐
│  🇬🇧  ▲  │  ← Arrow points up
└──────────┘
     │
     ├─────────────────┐
     │  🇬🇧 English   ✓│ ← Current (bronze bg)
     │  🇨🇳 中文       │
     │  🇲🇾 Bahasa Melayu│
     └─────────────────┘
```

### Mobile View
```
Inside hamburger menu:

┌─────────────────┐
│   🇬🇧  ▼        │  ← Centered
└─────────────────┘
```

---

## ✅ Quick Checklist

### 1. Visual Check (5 seconds)
- [ ] Button shows ONLY flag emoji (🇬🇧 or 🇨🇳 or 🇲🇾)
- [ ] NO text like "EN", "GB", "MS", "ZH" visible
- [ ] Small down arrow (▼) next to flag
- [ ] Bronze border with brutal shadow

### 2. Interaction Check (30 seconds)
- [ ] Click flag → Dropdown appears
- [ ] See 3 languages with full names
- [ ] Current language has bronze background
- [ ] Hover other languages → Light beige background
- [ ] Arrow rotates when dropdown opens
- [ ] Click outside → Dropdown closes
- [ ] Press ESC → Dropdown closes

### 3. Functionality Check (1 minute)
- [ ] Click "English" → URL changes to /en/
- [ ] Click "中文" → URL changes to /zh/
- [ ] Click "Bahasa Melayu" → URL changes to /ms/
- [ ] Page content changes language
- [ ] Flag in button updates

### 4. Mobile Check (1 minute)
- [ ] Open hamburger menu (☰)
- [ ] Language switcher appears centered
- [ ] Large enough to tap easily
- [ ] Dropdown works same as desktop
- [ ] Dropdown doesn't overflow screen

---

## 🐛 What to Watch For

### Red Flags (Issues)
- ❌ You see "GB EN" or "EN" text (should be flag only!)
- ❌ Dropdown doesn't appear when clicking
- ❌ Console shows JavaScript errors
- ❌ Button doesn't look clickable (no pointer cursor)
- ❌ Mobile dropdown overflows screen

### Green Flags (Good!)
- ✅ Clean flag-only button
- ✅ Smooth dropdown animation
- ✅ Cursor changes to pointer on hover
- ✅ Arrow rotates smoothly
- ✅ Console shows: "Language switcher initialized: 1 instance(s)"

---

## 🔍 Browser Console Check

Press F12 → Console tab

**Expected output:**
```
Language switcher initialized: 1 instance(s)
```

When clicking:
```
Language switcher toggled: open
Language switcher toggled: closed
```

**NO errors should appear!**

---

## 📱 Mobile Testing Devices

Test on at least one of these:

### Option 1: Browser DevTools
1. Press F12
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or "Pixel 5"
4. Test all interactions

### Option 2: Real Device
1. Find your phone's IP: http://localhost:4322/
2. Or use ngrok for external access
3. Test all interactions with finger

---

## 🎨 Expected Colors

| Element | Color | Hex Code |
|---------|-------|----------|
| Button background | White | #FFFFFF |
| Button border | Dark brown | #2D1810 |
| Button text/arrow | Bronze | #8B6F47 |
| Hover background | Light beige | #F5F1EB |
| Active language bg | Bronze | #8B6F47 |
| Active language text | White | #FFFFFF |

---

## ⚡ Quick Test (30 seconds)

1. Open http://localhost:4322/
2. Look at top-right corner
3. **CONFIRM:** You see 🇬🇧 ▼ (flag + arrow, NO text)
4. Click the flag
5. **CONFIRM:** Dropdown shows 3 language options
6. Click a language
7. **CONFIRM:** URL and content change

**If all above work → SUCCESS! ✅**

---

## 📊 Test Results Template

Copy this and fill it out:

```
Date: _____________
Browser: _____________
Device: _____________

Desktop Tests:
[ ] Flag-only display: PASS / FAIL
[ ] Dropdown appears: PASS / FAIL
[ ] Dropdown contents: PASS / FAIL
[ ] Language switching: PASS / FAIL
[ ] Hover effects: PASS / FAIL
[ ] Animations: PASS / FAIL

Mobile Tests:
[ ] Button size: PASS / FAIL
[ ] Dropdown centering: PASS / FAIL
[ ] Touch interaction: PASS / FAIL
[ ] No overflow: PASS / FAIL

Console:
[ ] No errors: PASS / FAIL
[ ] Initialization logged: PASS / FAIL

Overall: PASS / FAIL

Notes:
_________________________________
_________________________________
```

---

## 🚀 Test Now!

Server is running at: **http://localhost:4322/**

Just open that URL and follow the Quick Test above!

---

## 📞 Need Help?

If something doesn't work:

1. Check browser console (F12) for errors
2. Refresh the page (Ctrl+R)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check that dev server is still running
5. Verify you're on the correct URL (localhost:4322)

Common fixes:
- Dropdown not appearing? → Check console for JS errors
- Wrong language shown? → Check URL structure
- Styles look wrong? → Hard refresh (Ctrl+Shift+R)

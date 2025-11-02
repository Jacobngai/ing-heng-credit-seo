# Security Headers Quick Test Guide

## After Deployment: 3-Minute Verification

### Method 1: Browser Developer Tools (Easiest)

1. **Open website** in browser: https://ingheng-credit.vercel.app
2. **Press F12** to open Developer Tools
3. **Go to Network tab**
4. **Refresh page** (F5)
5. **Click first request** (usually the HTML document)
6. **Scroll to Response Headers**

**✅ You should see:**
```
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: DENY
x-xss-protection: 1; mode=block
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=()
```

---

### Method 2: Command Line (curl)

```bash
curl -I https://ingheng-credit.vercel.app
```

**✅ Expected output includes:**
```
HTTP/2 200
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: DENY
x-xss-protection: 1; mode=block
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=()
```

---

### Method 3: Online Security Scanners

#### A. SecurityHeaders.com
1. Visit: https://securityheaders.com/
2. Enter: `ingheng-credit.vercel.app`
3. Click "Scan"

**✅ Expected Grade:** A or higher

---

#### B. Mozilla Observatory
1. Visit: https://observatory.mozilla.org/
2. Enter: `ingheng-credit.vercel.app`
3. Click "Scan Me"

**✅ Expected Grade:** B+ or higher

---

#### C. SSL Labs
1. Visit: https://www.ssllabs.com/ssltest/
2. Enter: `ingheng-credit.vercel.app`
3. Click "Submit"
4. Wait 2-3 minutes for scan

**✅ Expected Grade:** A or A+

---

### Method 4: HTTP to HTTPS Redirect Test

1. **Try HTTP URL:** http://ingheng-credit.vercel.app
2. **Browser should automatically redirect** to https://ingheng-credit.vercel.app
3. **Check URL bar** - should show padlock icon and HTTPS

**✅ Test passed if:**
- Browser redirects immediately
- Final URL starts with `https://`
- No security warnings displayed

---

## Troubleshooting

### Headers Not Appearing
- Clear browser cache (Ctrl+Shift+Del)
- Try incognito/private mode (Ctrl+Shift+N)
- Wait 5 minutes for Vercel CDN to propagate
- Check Vercel deployment logs

### HTTP Redirect Not Working
- Verify deployment completed successfully
- Check Vercel project settings
- Ensure no conflicting redirects in code

### Low Security Score
- Run test again (some scanners cache results)
- Verify all headers are present
- Check for browser extensions interfering

---

## Quick Stats

**Security Headers Implemented:** 6
**HTTP Redirect:** ✅ Active
**HSTS Duration:** 2 years
**Preload Ready:** ✅ Yes

**Deployment Time:** ~2 minutes
**Propagation Time:** ~5 minutes
**Total Time to Active:** ~7 minutes

---

## Post-Deployment Checklist

- [ ] Verify security headers in browser DevTools
- [ ] Test HTTP to HTTPS redirect
- [ ] Run SecurityHeaders.com scan
- [ ] Run Mozilla Observatory scan (optional)
- [ ] Check SSL Labs (optional)
- [ ] Verify website still functions correctly
- [ ] Test on mobile devices
- [ ] Check multilingual pages (EN, MS, ZH)

---

**Last Updated:** November 2, 2025

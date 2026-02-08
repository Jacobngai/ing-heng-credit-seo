import { next } from '@vercel/edge';

export const config = {
  matcher: ['/ms/:path*', '/zh/:path*'],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = url.hostname;
  
  // Only apply redirects on inghengcredit.com
  if (hostname.includes('inghengcredit.com')) {
    const pathname = url.pathname;
    
    // Redirect /ms/* to kreditloan.my
    if (pathname.startsWith('/ms')) {
      const newUrl = `https://www.kreditloan.my${pathname}`;
      return Response.redirect(newUrl, 301);
    }
    
    // Redirect /zh/* to inghengcredit.my
    if (pathname.startsWith('/zh')) {
      const newUrl = `https://www.inghengcredit.my${pathname}`;
      return Response.redirect(newUrl, 301);
    }
  }
  
  return next();
}

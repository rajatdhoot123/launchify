import { NextResponse } from "next/server";
import { VA_360_LINK_HOST, UI_WIDGET_LINK_HOST } from "@/lib/host__";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _vercel (Vercel internals)
     * - _next (next internals)
     * - some-file.extension (static files)
     */
    "/((?!_vercel|_next/|images|[\\w-]+\\.\\w+).*)",
  ],
};

export function middleware(req) {
  const url = req.nextUrl;

  const host = req.headers.get("host").toLowerCase();

  const rewrittenUrl = new URL(url.toString());

  if (host === VA_360_LINK_HOST) {
    // rewrite requests on the link host to the link site:
    rewrittenUrl.pathname = `/blog.va360.club${rewrittenUrl.pathname}`;
  } else if (host === UI_WIDGET_LINK_HOST) {
    rewrittenUrl.pathname = `/blog.uiwidgets.store${rewrittenUrl.pathname}`;
  } else {
    rewrittenUrl.pathname = `${rewrittenUrl.pathname}`;
  }

  return NextResponse.rewrite(rewrittenUrl);
}

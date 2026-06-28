import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/:path*"],
};

const ENGINE_ORIGIN =
  process.env.CLICKA_ENGINE_URL ||
  process.env.NEXT_PUBLIC_ENGINE_URL ||
  "https://www.clicka.bg";

const SCANNER_PATTERNS = [
  /^\/wp-/i,
  /^\/xmlrpc\.php/i,
  /^\/\.env/i,
  /^\/\.git/i,
  /^\/phpmyadmin/i,
  /^\/administrator/i,
];

export function middleware(request: NextRequest) {
  const incoming = request.nextUrl;
  const pathname = incoming.pathname;

  if (SCANNER_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse(null, {
      status: 410,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }

  let refererUrl: URL | null = null;
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      refererUrl = new URL(referer);
    } catch {
      refererUrl = null;
    }
  }

  const isAdminPath = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminReferer =
    refererUrl?.host === incoming.host &&
    (refererUrl.pathname === "/admin" || refererUrl.pathname.startsWith("/admin/"));

  if (isAdminPath || isAdminReferer) {
    const target = new URL(`${incoming.pathname}${incoming.search}`, ENGINE_ORIGIN);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-clicka-host", incoming.host);
    requestHeaders.set("x-forwarded-host", incoming.host);
    requestHeaders.set("x-forwarded-proto", incoming.protocol.replace(":", ""));
    requestHeaders.set("x-forwarded-for", request.headers.get("x-forwarded-for") ?? "");

    return NextResponse.rewrite(target, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

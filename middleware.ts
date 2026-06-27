import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff|woff2|ttf|vtt|json)$).*)"
  ]
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
  /^\/administrator/i
];

export default async function middleware(request: NextRequest): Promise<Response> {
  const incoming = new URL(request.url);
  const pathname = incoming.pathname;

  if (SCANNER_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse(null, {
      status: 410,
      headers: { "X-Robots-Tag": "noindex" }
    });
  }

  const referer = request.headers.get("referer");
  const refererUrl = referer ? new URL(referer) : null;
  const isAdminPath = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminReferer =
    refererUrl?.host === incoming.host &&
    (refererUrl.pathname === "/admin" || refererUrl.pathname.startsWith("/admin/"));

  if (isAdminPath || isAdminReferer) {
    const target = new URL(incoming.pathname + incoming.search, ENGINE_ORIGIN);
    const headers = new Headers(request.headers);
    headers.set("x-clicka-host", incoming.host);
    headers.set("x-forwarded-host", incoming.host);
    headers.set("x-forwarded-proto", incoming.protocol.replace(":", ""));
    headers.delete("host");
    const method = request.method.toUpperCase();
    const hasBody = method !== "GET" && method !== "HEAD";
    return fetch(target, {
      method,
      headers,
      body: hasBody ? request.body : undefined,
      redirect: "manual",
      // @ts-expect-error Vercel Edge fetch supports duplex for streamed bodies.
      duplex: hasBody ? "half" : undefined
    });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

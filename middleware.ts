import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin", "/admin/:path*", "/_next/:path*", "/api/:path*"],
};

const ENGINE_ORIGIN =
  process.env.CLICKA_ENGINE_URL ||
  process.env.NEXT_PUBLIC_ENGINE_URL ||
  "https://www.clicka.bg";

export default async function middleware(request: Request): Promise<Response> {
  const incoming = new URL(request.url);
  const pathname = incoming.pathname;
  const referer = request.headers.get("referer");
  const refererUrl = referer ? new URL(referer) : null;
  const isAdminPath = pathname === "/admin" || pathname.startsWith("/admin/");
  const isAdminReferer =
    refererUrl?.host === incoming.host &&
    (refererUrl.pathname === "/admin" || refererUrl.pathname.startsWith("/admin/"));

  if (!isAdminPath && !isAdminReferer) {
    return NextResponse.next();
  }

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
    duplex: hasBody ? "half" : undefined,
  });
}

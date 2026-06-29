import { NextResponse } from "next/server";

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  const locale = request.nextUrl.pathname.startsWith("/bg") ? "bg" : "en";

  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};

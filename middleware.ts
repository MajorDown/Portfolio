// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|assets/|api/visit|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)).*)",
  ],
};

export default function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  if (req.method === "GET" && (req.headers.get("accept") || "").includes("text/html")) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "";
    fetch(`${origin}/api/visit?p=${encodeURIComponent(pathname)}`, {
      method: "GET",
      headers: { "x-real-ip": ip },
      cache: "no-store",
    }).catch(() => {});
  }
  return NextResponse.next();
}

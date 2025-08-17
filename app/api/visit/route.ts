export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { saveVisitFromRequest } from "@/lib/visit/SaveVisitFromRequest";

export async function GET(req: Request) {
  const p = new URL(req.url).searchParams.get("p");
  if (!p) return new NextResponse("missing p", { status: 400 });
  // ici, method sera "GET" (normal pour des pages)
  await saveVisitFromRequest(req, p);
  return new NextResponse(null, { status: 204 });
}

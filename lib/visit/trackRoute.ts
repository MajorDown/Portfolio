import { saveVisitFromRequest } from "@/lib/visit/SaveVisitFromRequest";

type Handler = (req: Request, ctx: { params: any }) => Promise<Response> | Response;

export function trackRoute(handler: Handler) {
  return async (req: Request, ctx: { params: any }) => {
    const res = await handler(req, ctx);
    const path = new URL(req.url).pathname;
    // pas d'attente pour ne pas ajouter de latence
    saveVisitFromRequest(req, path).catch(() => {});
    return res;
  };
}

import { prisma } from "@/lib/prisma";

/**
 * Récupère l'adresse IP à partir des en-têtes de la requête
 * @param h Headers
 * @returns String - l'adresse IP sous forme de chaîne
 */
export function ipFromHeaders(h: Headers):string {
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return h.get("x-real-ip") || "0.0.0.0";
}

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";

function normalizeMethod(m: string): RequestMethod {
  switch (m.toUpperCase()) {
    case "GET": return "GET";
    case "POST": return "POST";
    case "PUT": return "PUT";
    case "DELETE": return "DELETE";
    case "PATCH": return "PATCH";
    case "OPTIONS": return "OPTIONS";
    default: return "GET";
  }
}

/**
 * Enregistre une visite à partir de la requête
 * @param req Request
 * @param path Chemin de la page visitée
 */
export async function saveVisitFromRequest(req: Request, path: string) {
  const ip = ipFromHeaders(req.headers);
  const method = normalizeMethod(req.method);
  await prisma.visit.create({ data: { path, ip, method } });
}

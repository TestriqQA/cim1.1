/**
 * Cinute AI Commenter — shared CORS + response helpers
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at: lib/cim/cors.ts
 *
 * All Cinute AI Commenter Route Handlers use these helpers so the
 * response shape and CORS posture are consistent.
 *
 * Note on Access-Control-Expose-Headers: browsers hide custom response
 * headers by default. The extension needs to read X-CIM-* headers to
 * keep its local plan/quota cache in sync, so we explicitly expose them.
 * --------------------------------------------------------------------
 */

// For unpacked / development extensions the ID changes, so '*' is the
// only practical value. After publishing to the Chrome Web Store, lock
// this to 'chrome-extension://<your-published-extension-id>'.
const ALLOWED_ORIGIN = "*";

const EXPOSED_HEADERS = [
  "X-CIM-Plan",
  "X-CIM-Quota-Used",
  "X-CIM-Quota-Limit",
  "X-CIM-Quota-Reset",
].join(", ");

export function corsHeaders(
  extra: Record<string, string> = {},
): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Expose-Headers": EXPOSED_HEADERS,
    Vary: "Origin",
    ...extra,
  };
}

export function corsPreflight(): Response {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export function jsonResponse(
  status: number,
  body: unknown,
  extra: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders({ "Content-Type": "application/json", ...extra }),
  });
}

export function jsonError(
  status: number,
  error: string,
  extraBody: Record<string, unknown> = {},
  extraHeaders: Record<string, string> = {},
): Response {
  return jsonResponse(status, { error, ...extraBody }, extraHeaders);
}

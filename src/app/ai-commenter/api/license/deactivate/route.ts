/**
 * Cinute AI Commenter — license deactivation endpoint
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at:
 *
 *   app/ai-commenter/api/license/deactivate/route.ts
 *
 * URL: https://www.cinuteinfomedia.com/ai-commenter/api/license/deactivate
 *
 * Removes the caller's deviceId from the license's devices[] array,
 * freeing a slot for a different device to activate. Idempotent — if
 * the device isn't on the list (or the license doesn't exist), still
 * returns 200 so the extension can proceed to clear local state.
 *
 * No authentication beyond knowing the license key + deviceId; a bad
 * actor could theoretically deactivate someone else's device if they
 * knew their key. Acceptable for now; Phase 3 will add a per-license
 * secret if needed.
 * --------------------------------------------------------------------
 */

import { corsPreflight, jsonError, jsonResponse } from "@/lib/cim/cors";
import { removeDevice } from "@/lib/cim/license";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function OPTIONS(): Promise<Response> {
  return corsPreflight();
}

export async function POST(req: Request): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return jsonError(400, "Invalid JSON body");
  }

  const licenseKey =
    typeof body.licenseKey === "string" ? body.licenseKey : "";
  const deviceId =
    typeof body.deviceId === "string" ? body.deviceId.trim() : "";

  if (!licenseKey || !deviceId) {
    return jsonError(400, "licenseKey and deviceId are required");
  }

  const result = await removeDevice(licenseKey, deviceId);
  return jsonResponse(200, { ok: true, removed: result.removed });
}

/**
 * Cinute AI Commenter — license validation endpoint
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at:
 *
 *   app/ai-commenter/api/license/validate/route.ts
 *
 * URL: https://www.cinuteinfomedia.com/ai-commenter/api/license/validate
 *
 * Called by the extension on:
 *   - License activation (user pastes a key in the Account tab).
 *   - Periodic re-validation (optional; the generate endpoint also
 *     refreshes the plan on every call via X-CIM-* headers).
 *
 * Side effect: registers this deviceId on the license's devices[] array
 * if there is a slot available. Subsequent /generate calls from this
 * deviceId will then be authorised as Pro until the license is
 * deactivated, expires, or is revoked.
 * --------------------------------------------------------------------
 */

import { corsPreflight, jsonError, jsonResponse } from "@/lib/cim/cors";
import { validateForDevice } from "@/lib/cim/license";
import { PRO_DAILY_LIMIT, peekQuota } from "@/lib/cim/quota";

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
  const userAgent = req.headers.get("user-agent") ?? undefined;

  if (!licenseKey || !deviceId) {
    return jsonError(400, "licenseKey and deviceId are required");
  }

  const result = await validateForDevice(licenseKey, deviceId, userAgent);

  if (!result.ok) {
    // 403 for all failure modes so the extension shows the server's
    // human-readable error message under the license input.
    return jsonError(403, result.error, { code: result.code });
  }

  const quota = await peekQuota("license", result.record.key, PRO_DAILY_LIMIT);

  return jsonResponse(200, {
    ok: true,
    plan: result.record.plan,
    expiresAt: result.record.expiresAt,
    devicesUsed: result.record.devices.length,
    maxDevices: result.record.maxDevices,
    addedDevice: result.addedDevice,
    quota: {
      used: quota.count,
      limit: quota.limit,
      resetsAt: quota.resetsAt,
    },
  });
}

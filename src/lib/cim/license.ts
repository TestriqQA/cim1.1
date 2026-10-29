/**
 * Cinute AI Commenter — license lookup + device management
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at: lib/cim/license.ts
 *
 * Responsibilities:
 *   - Read license records from KV.
 *   - Validate a key against a device, registering the device on the
 *     license's devices[] array (subject to maxDevices).
 *   - Remove a device from a license (deactivation).
 *
 * The `validateForDevice` function is the source of truth for "is this
 * license currently usable from this device?". Both /license/validate
 * and /generate call it.
 * --------------------------------------------------------------------
 */

import { kv } from "@vercel/kv";
import {
  LICENSE_KEY_PATTERN,
  LicenseRecord,
  licenseKvKey,
  normalizeLicenseKey,
} from "./kv";

export type ValidationErrorCode =
  | "INVALID_FORMAT"
  | "NOT_FOUND"
  | "REVOKED"
  | "EXPIRED"
  | "CANCELLED"
  | "DEVICE_LIMIT";

export type ValidationResult =
  | { ok: true; record: LicenseRecord; addedDevice: boolean }
  | { ok: false; error: string; code: ValidationErrorCode };

export async function getLicense(
  key: string,
): Promise<LicenseRecord | null> {
  const normalized = normalizeLicenseKey(key);
  if (!LICENSE_KEY_PATTERN.test(normalized)) return null;
  const record = await kv.get<LicenseRecord>(licenseKvKey(normalized));
  return record ?? null;
}

export async function validateForDevice(
  key: string,
  deviceId: string,
  userAgent?: string,
): Promise<ValidationResult> {
  const normalized = normalizeLicenseKey(key);
  if (!normalized || !LICENSE_KEY_PATTERN.test(normalized)) {
    return {
      ok: false,
      error: "Invalid license key format.",
      code: "INVALID_FORMAT",
    };
  }
  if (!deviceId) {
    return {
      ok: false,
      error: "Device identifier missing.",
      code: "INVALID_FORMAT",
    };
  }

  const record = await kv.get<LicenseRecord>(licenseKvKey(normalized));
  if (!record) {
    return {
      ok: false,
      error: "License key not found.",
      code: "NOT_FOUND",
    };
  }

  if (record.status === "revoked") {
    return {
      ok: false,
      error: "This license has been revoked. Contact support.",
      code: "REVOKED",
    };
  }
  if (record.status === "cancelled") {
    return {
      ok: false,
      error: "This license has been cancelled.",
      code: "CANCELLED",
    };
  }
  if (record.status === "expired") {
    return {
      ok: false,
      error: "This license has expired.",
      code: "EXPIRED",
    };
  }
  if (record.expiresAt !== null && record.expiresAt < Date.now()) {
    record.status = "expired";
    await kv.set(licenseKvKey(normalized), record);
    return {
      ok: false,
      error: "This license has expired.",
      code: "EXPIRED",
    };
  }

  // ---- Device management ----
  const now = Date.now();
  const existing = record.devices.find((d) => d.id === deviceId);
  let addedDevice = false;

  if (existing) {
    existing.lastSeenAt = now;
    if (userAgent) existing.userAgent = userAgent;
  } else {
    if (record.devices.length >= record.maxDevices) {
      return {
        ok: false,
        error:
          `Device limit reached (${record.devices.length}/${record.maxDevices}). ` +
          `Deactivate this license on another device first, or contact support.`,
        code: "DEVICE_LIMIT",
      };
    }
    record.devices.push({
      id: deviceId,
      activatedAt: now,
      lastSeenAt: now,
      userAgent,
    });
    addedDevice = true;
  }

  await kv.set(licenseKvKey(normalized), record);
  return { ok: true, record, addedDevice };
}

export async function removeDevice(
  key: string,
  deviceId: string,
): Promise<{ ok: boolean; removed: boolean }> {
  const normalized = normalizeLicenseKey(key);
  if (!normalized || !LICENSE_KEY_PATTERN.test(normalized)) {
    return { ok: false, removed: false };
  }
  const record = await kv.get<LicenseRecord>(licenseKvKey(normalized));
  if (!record) return { ok: false, removed: false };

  const before = record.devices.length;
  record.devices = record.devices.filter((d) => d.id !== deviceId);
  if (record.devices.length === before) {
    return { ok: true, removed: false };
  }
  await kv.set(licenseKvKey(normalized), record);
  return { ok: true, removed: true };
}

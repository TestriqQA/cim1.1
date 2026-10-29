/**
 * Cinute AI Commenter — KV types + key helpers
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at: lib/cim/kv.ts
 *
 * Centralises the KV key naming so every module agrees on the schema.
 * The actual `@vercel/kv` import happens in license.ts / quota.ts.
 * --------------------------------------------------------------------
 *
 * KV namespace layout:
 *
 *   license:<KEY>                   → LicenseRecord (JSON)
 *   daily:license:<KEY>:<DATE>      → integer counter (TTL 25h)
 *   daily:anon:<DEVICE_ID>:<DATE>   → integer counter (TTL 25h)
 *
 * DATE is YYYY-MM-DD in UTC. 25h TTL gives 1h slack so a key set just
 * before midnight isn't evicted before the day rolls over for any
 * client whose local clock disagrees with the server.
 */

export const LICENSE_KEY_PATTERN =
  /^CIM-PRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

export type LicenseStatus = "active" | "cancelled" | "expired" | "revoked";

export type LicenseSource =
  | "manual"
  | "test"
  | "razorpay_monthly"
  | "razorpay_lifetime";

export type Device = {
  id: string;
  activatedAt: number;
  lastSeenAt: number;
  userAgent?: string;
};

export type LicenseRecord = {
  key: string;
  plan: "pro";
  status: LicenseStatus;
  createdAt: number;
  // null = lifetime (never expires), else ms epoch.
  expiresAt: number | null;
  customerEmail: string;
  source: LicenseSource;
  // Razorpay subscription_id (monthly) or payment_id (lifetime).
  razorpayId?: string;
  devices: Device[];
  maxDevices: number;
  notes?: string;
};

export function normalizeLicenseKey(key: string): string {
  return (key || "").replace(/\s+/g, "").toUpperCase();
}

export function licenseKvKey(key: string): string {
  return `license:${normalizeLicenseKey(key)}`;
}

export function utcDateString(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function nextUtcMidnight(d: Date = new Date()): number {
  const t = new Date(d);
  t.setUTCHours(24, 0, 0, 0);
  return t.getTime();
}

export function dailyCounterKey(
  scope: "license" | "anon",
  id: string,
  date: string = utcDateString(),
): string {
  return `daily:${scope}:${id}:${date}`;
}

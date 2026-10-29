/**
 * Cinute AI Commenter — daily-quota counter
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at: lib/cim/quota.ts
 *
 * Atomic INCR-then-rollback pattern:
 *   1. INCR the daily counter for the bucket.
 *   2. On first increment of the day, set a 25h TTL.
 *   3. If the new count exceeds the limit, DECR back so we don't
 *      permanently inflate the counter on rejected requests.
 *
 * Bucket key is one of:
 *   - daily:license:<KEY>:<YYYY-MM-DD>     (Pro tier, limit 500/day)
 *   - daily:anon:<DEVICE_ID>:<YYYY-MM-DD>  (Free tier, limit 10/day)
 *
 * The DATE component is UTC. Free users in distant timezones will see
 * their quota reset at UTC midnight, not their local midnight — see
 * the Phase 2 README troubleshooting note.
 * --------------------------------------------------------------------
 */

import { kv } from "@vercel/kv";
import { dailyCounterKey, nextUtcMidnight } from "./kv";

export const FREE_DAILY_LIMIT = 10;
export const PRO_DAILY_LIMIT = 500;
// Slightly larger than 24h so a counter created near midnight doesn't
// evict before any client's local day has rolled over.
const COUNTER_TTL_SECONDS = 25 * 3600;

export type QuotaResult = {
  count: number;
  limit: number;
  resetsAt: number;
  ok: boolean;
};

export async function checkAndIncrementQuota(
  scope: "license" | "anon",
  id: string,
  limit: number,
): Promise<QuotaResult> {
  const fullKey = dailyCounterKey(scope, id);
  const resetsAt = nextUtcMidnight();

  const count = (await kv.incr(fullKey)) as number;
  if (count === 1) {
    // First increment of the day — set the TTL.
    await kv.expire(fullKey, COUNTER_TTL_SECONDS);
  }

  if (count > limit) {
    // Refund the increment so the counter doesn't keep growing on
    // rejected requests. Tiny race window (microseconds between INCR
    // and DECR); acceptable for rate-limit accuracy.
    await kv.decr(fullKey);
    return { count: limit + 1, limit, resetsAt, ok: false };
  }

  return { count, limit, resetsAt, ok: true };
}

export async function peekQuota(
  scope: "license" | "anon",
  id: string,
  limit: number,
): Promise<QuotaResult> {
  const fullKey = dailyCounterKey(scope, id);
  const resetsAt = nextUtcMidnight();
  const raw = await kv.get<number>(fullKey);
  const count = typeof raw === "number" ? raw : 0;
  return { count, limit, resetsAt, ok: count < limit };
}

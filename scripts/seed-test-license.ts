/**
 * Cinute AI Commenter — seed test licenses into Vercel KV
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at: scripts/seed-test-license.ts
 *
 * Usage:
 *
 *   1. Make sure `.env.local` (or your shell env) has the Vercel KV
 *      credentials. They are auto-provisioned by Vercel when you link
 *      a KV store to the project:
 *
 *        KV_REST_API_URL
 *        KV_REST_API_TOKEN
 *        KV_URL
 *
 *      Run `vercel env pull .env.local` if you've never pulled them.
 *
 *   2. Install dev dependencies in your Next.js repo (one-time):
 *
 *        npm install --save-dev tsx dotenv
 *
 *   3. Run the seed:
 *
 *        npx dotenv -e .env.local -- tsx scripts/seed-test-license.ts
 *
 *      ...or pipe envs your own way; the script just needs the KV vars
 *      to be present on process.env by the time it imports @vercel/kv.
 *
 * Idempotent: re-running overwrites the test licenses with fresh
 * device lists and resets timestamps. Use this once after setting up
 * KV, then again any time you want to clear test devices.
 * --------------------------------------------------------------------
 */

import { kv } from "@vercel/kv";
// Adjust the relative path here based on where you place `lib/cim/` in
// your Next.js repo:
//   - src/ layout (e.g. cim1.1):      "../src/lib/cim/kv"
//   - flat / root layout:             "../lib/cim/kv"
import type { LicenseRecord } from "../src/lib/cim/kv";
import { licenseKvKey } from "../src/lib/cim/kv";

// Edit / extend this list to add more test licenses. Keep the keys
// matching ^CIM-PRO-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$.
const TEST_LICENSES: LicenseRecord[] = [
  {
    key: "CIM-PRO-AAAA-BBBB-CCCC",
    plan: "pro",
    status: "active",
    createdAt: Date.now(),
    expiresAt: null, // lifetime
    customerEmail: "test+lifetime@cinuteinfomedia.com",
    source: "test",
    devices: [],
    maxDevices: 3,
    notes: "Canonical lifetime test key (matches HANDOFF.md).",
  },
  {
    key: "CIM-PRO-1234-5678-90AB",
    plan: "pro",
    status: "active",
    createdAt: Date.now(),
    // 30 days from now — simulates a monthly subscription.
    expiresAt: Date.now() + 30 * 24 * 3600 * 1000,
    customerEmail: "test+monthly@cinuteinfomedia.com",
    source: "test",
    devices: [],
    maxDevices: 3,
    notes: "Monthly subscription test key (expires in 30 days).",
  },
  {
    key: "CIM-PRO-ZZZZ-XXXX-YYYY",
    plan: "pro",
    status: "active",
    createdAt: Date.now(),
    expiresAt: null,
    customerEmail: "test+devices@cinuteinfomedia.com",
    source: "test",
    devices: [],
    maxDevices: 1, // single-device test
    notes: "Single-device test key — second device should be rejected.",
  },
];

async function main(): Promise<void> {
  if (!process.env.KV_REST_API_URL) {
    console.error(
      "Missing KV_REST_API_URL. Run `vercel env pull .env.local`, " +
        "or set the env vars another way. See script header.",
    );
    process.exit(1);
  }

  for (const license of TEST_LICENSES) {
    await kv.set(licenseKvKey(license.key), license);
    const expiryStr =
      license.expiresAt === null
        ? "lifetime"
        : new Date(license.expiresAt).toISOString().slice(0, 10);
    console.log(
      `seeded ${license.key}  (${expiryStr}, maxDevices=${license.maxDevices})`,
    );
  }

  console.log(`\nDone. Seeded ${TEST_LICENSES.length} test licenses.`);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});

/**
 * Cinute AI Commenter — Gemini proxy (Phase 2)
 * --------------------------------------------------------------------
 * Goes in your Next.js repo at:
 *
 *   app/ai-commenter/api/generate/route.ts
 *
 * URL: https://www.cinuteinfomedia.com/ai-commenter/api/generate
 *
 * Phase 2 changes vs. Phase 1:
 *   - Accepts { licenseKey, deviceId } in the request body.
 *   - Resolves plan (free|pro) by validating the license against KV.
 *   - Restricts models by plan (free → 2.5-flash-lite only, pro → all three).
 *   - Server-authoritative daily rate limit via Vercel KV INCR/DECR.
 *   - Returns X-CIM-Plan / X-CIM-Quota-* headers so the extension can
 *     refresh its local cache after every generation.
 *
 * The Gemini API key still lives in process.env.GEMINI_API_KEY.
 * --------------------------------------------------------------------
 */

import { corsHeaders, corsPreflight, jsonError } from "@/lib/cim/cors";
import { validateForDevice } from "@/lib/cim/license";
import {
    FREE_DAILY_LIMIT,
    PRO_DAILY_LIMIT,
    checkAndIncrementQuota,
} from "@/lib/cim/quota";
import { normalizeLicenseKey } from "@/lib/cim/kv";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const FREE_MODELS = new Set(["gemini-2.5-flash-lite"]);
const PRO_MODELS = new Set([
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.5-pro",
]);

/** Google shut down 2.0 Flash on 2026-06-01; remap old clients automatically. */
const DEPRECATED_MODEL_ALIASES: Record<string, string> = {
    "gemini-2.0-flash": "gemini-2.5-flash-lite",
    "gemini-2.0-flash-001": "gemini-2.5-flash-lite",
    "gemini-2.0-flash-lite": "gemini-2.5-flash-lite",
    "gemini-2.0-flash-lite-001": "gemini-2.5-flash-lite",
};

const UPGRADE_URL =
    "https://www.cinuteinfomedia.com/ai-commenter/upgrade";

function clamp(n: number, lo: number, hi: number): number {
    return Math.max(lo, Math.min(hi, n));
}

function metaHeaders(
    plan: "free" | "pro",
    used: number,
    limit: number,
    resetsAt: number,
): Record<string, string> {
    return {
        "X-CIM-Plan": plan,
        "X-CIM-Quota-Used": String(used),
        "X-CIM-Quota-Limit": String(limit),
        "X-CIM-Quota-Reset": String(resetsAt),
    };
}

export async function OPTIONS(): Promise<Response> {
    return corsPreflight();
}

export async function POST(req: Request): Promise<Response> {
    // Accept either naming so we don't break existing Vercel projects
    // that already have a key under GOOGLE_AI_API_KEY from earlier work.
    const apiKey =
        process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
        return jsonError(
            500,
            "Proxy misconfigured: neither GEMINI_API_KEY nor GOOGLE_AI_API_KEY is set",
        );
    }

    // ---- 1. Parse + validate input ----
    const raw = await req.text();
    if (raw.length > 64 * 1024) {
        return jsonError(413, "Body too large (max 64 KB)");
    }

    let body: Record<string, unknown>;
    try {
        body = JSON.parse(raw) as Record<string, unknown>;
    } catch {
        return jsonError(400, "Invalid JSON body");
    }

    const prompt = typeof body.prompt === "string" ? body.prompt : "";
    if (!prompt || prompt.length > 32000) {
        return jsonError(400, "Prompt missing or too large (1..32000 chars)");
    }

    let requestedModel =
        typeof body.model === "string" ? body.model : "gemini-2.5-flash-lite";
    if (DEPRECATED_MODEL_ALIASES[requestedModel]) {
        requestedModel = DEPRECATED_MODEL_ALIASES[requestedModel];
    }
    const temperature = clamp(Number(body.temperature ?? 0.9), 0.1, 1.5);
    const maxTokens = clamp(
        Math.round(Number(body.maxTokens ?? 1500)),
        200,
        2000,
    );
    const stream = Boolean(body.stream);

    const licenseKeyRaw =
        typeof body.licenseKey === "string" ? body.licenseKey : "";
    const licenseKey = licenseKeyRaw ? normalizeLicenseKey(licenseKeyRaw) : "";
    const deviceId =
        typeof body.deviceId === "string" ? body.deviceId.trim() : "";

    if (!deviceId) {
        return jsonError(
            400,
            "deviceId required (install the latest extension build).",
        );
    }

    // ---- 2. Resolve plan ----
    // If a license key is provided, validate it. On any failure we
    // silently fall back to the Free plan rather than rejecting outright;
    // the response headers will reflect plan=free so the extension can
    // update its UI on the next generation.
    const userAgent = req.headers.get("user-agent") ?? undefined;
    let plan: "free" | "pro" = "free";

    if (licenseKey) {
        const v = await validateForDevice(licenseKey, deviceId, userAgent);
        if (v.ok) plan = "pro";
    }

    // ---- 3. Model-by-plan enforcement ----
    const modelsAllowed = plan === "pro" ? PRO_MODELS : FREE_MODELS;
    if (!modelsAllowed.has(requestedModel)) {
        return jsonError(
            400,
            plan === "free"
                ? `Model "${requestedModel}" is a Pro feature. Upgrade to use Balanced / Best.`
                : `Unknown model: ${requestedModel}`,
            { code: "MODEL_NOT_ALLOWED", upgradeUrl: UPGRADE_URL },
        );
    }

    // ---- 4. Rate limit ----
    const limit = plan === "pro" ? PRO_DAILY_LIMIT : FREE_DAILY_LIMIT;
    const bucketScope = plan === "pro" ? "license" : "anon";
    const bucketId = plan === "pro" ? licenseKey : deviceId;

    const quota = await checkAndIncrementQuota(bucketScope, bucketId, limit);

    if (!quota.ok) {
        return jsonError(
            429,
            plan === "free"
                ? `Daily limit reached (${quota.limit}/${quota.limit}). ` +
                `Upgrade to Pro for ${PRO_DAILY_LIMIT}/day.`
                : `Daily limit reached (${quota.limit}/${quota.limit}). ` +
                `Quota resets at UTC midnight.`,
            { code: "QUOTA_EXCEEDED", upgradeUrl: UPGRADE_URL },
            metaHeaders(plan, quota.limit, quota.limit, quota.resetsAt),
        );
    }

    // ---- 5. Build the Gemini payload ----
    const generationConfig: Record<string, unknown> = {
        temperature,
        topP: 0.95,
        maxOutputTokens: maxTokens,
    };
    if (requestedModel.startsWith("gemini-2.5")) {
        generationConfig.thinkingConfig = { thinkingBudget: 0 };
    }
    const geminiBody = JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig,
    });

    const op = stream ? "streamGenerateContent" : "generateContent";
    const qs = stream ? "?alt=sse&key=" : "?key=";
    const url =
        "https://generativelanguage.googleapis.com/v1beta/models/" +
        encodeURIComponent(requestedModel) +
        ":" +
        op +
        qs +
        encodeURIComponent(apiKey);

    // ---- 6. Cancellation propagation ----
    const abortController = new AbortController();
    req.signal.addEventListener("abort", () => abortController.abort());

    // ---- 7. Forward to Gemini ----
    let geminiRes: Response;
    try {
        geminiRes = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "cinute-ai-commenter-proxy/1.0",
            },
            body: geminiBody,
            signal: abortController.signal,
        });
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        return jsonError(
            502,
            "Proxy upstream error: " + msg,
            {},
            metaHeaders(plan, quota.count, quota.limit, quota.resetsAt),
        );
    }

    const headers = metaHeaders(plan, quota.count, quota.limit, quota.resetsAt);

    if (stream) {
        return new Response(geminiRes.body, {
            status: geminiRes.status,
            headers: corsHeaders({
                "Content-Type": "text/event-stream; charset=utf-8",
                "Cache-Control": "no-cache, no-transform",
                "X-Accel-Buffering": "no",
                ...headers,
            }),
        });
    }

    const text = await geminiRes.text();
    return new Response(text, {
        status: geminiRes.status,
        headers: corsHeaders({ "Content-Type": "application/json", ...headers }),
    });
}

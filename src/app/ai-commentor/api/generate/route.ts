/**
 * Cinute AI Commenter — Gemini proxy (Next.js App Router + Vercel Edge)
 * --------------------------------------------------------------------
 * Drop this file into your Next.js repo at:
 *
 *   app/ai-commenter/api/generate/route.ts
 *
 * which makes it reachable at:
 *
 *   https://www.cinuteinfomedia.com/ai-commenter/api/generate
 *
 * That URL is the one the extension's CIM_PROXY_BASE points at.
 *
 * The Gemini API key lives in a Vercel env var (GEMINI_API_KEY) and
 * never reaches the browser. The proxy validates the request, builds
 * the Gemini payload, and streams (or returns) Gemini's response back
 * to the extension. SSE chunks are forwarded verbatim, so the extension
 * keeps its token-by-token streaming UX with no client-side changes.
 * --------------------------------------------------------------------
 */

// Edge Runtime: streams SSE natively, low cold-start latency, no
// output-buffering gotchas. If you ever need to switch to Node.js
// (e.g. for >25 s responses on Vercel Hobby), change to "nodejs"
// and bump the Vercel function timeout in vercel.json.
export const runtime = "edge";
export const dynamic = "force-dynamic";

// CORS for the Chrome extension fetch. For unpacked / development
// builds the extension ID changes, so '*' is the only practical value.
// After publishing to the Chrome Web Store, lock this to:
//   'chrome-extension://<your-published-extension-id>'
const ALLOWED_ORIGIN = "*";

// Only models the extension is allowed to drive. Adding a new Gemini
// model? Add it here AND in QUALITY_TO_MODEL inside background.js.
const ALLOWED_MODELS = new Set([
    "gemini-2.0-flash",
    "gemini-2.5-flash",
    "gemini-2.5-pro",
]);

function clamp(n: number, lo: number, hi: number): number {
    return Math.max(lo, Math.min(hi, n));
}

function corsHeaders(extra: Record<string, string> = {}): Record<string, string> {
    return {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Proxy-Secret",
        Vary: "Origin",
        ...extra,
    };
}

function jsonError(status: number, error: string): Response {
    return new Response(JSON.stringify({ error }), {
        status,
        headers: corsHeaders({ "Content-Type": "application/json" }),
    });
}

export async function OPTIONS(): Promise<Response> {
    return new Response(null, { status: 204, headers: corsHeaders() });
}

export async function POST(req: Request): Promise<Response> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return jsonError(500, "Proxy misconfigured: GEMINI_API_KEY not set");
    }

    // Optional shared-secret gate against cost-abuse (anyone can otherwise curl this
    // public proxy and burn the Gemini key/quota). BACKWARD-COMPATIBLE: only enforced
    // when GEMINI_PROXY_SECRET is set on the server — then the extension must send a
    // matching `X-Proxy-Secret` header. Unset = current open behavior (no breakage).
    const proxySecret = process.env.GEMINI_PROXY_SECRET;
    if (proxySecret && req.headers.get("x-proxy-secret") !== proxySecret) {
        return jsonError(403, "Forbidden");
    }

    // ---- 1. Parse + validate input ----
    // Cap body size so an attacker can't burn Edge compute on parsing.
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

    const model = typeof body.model === "string" ? body.model : "gemini-2.0-flash";
    if (!ALLOWED_MODELS.has(model)) {
        return jsonError(400, `Unknown model: ${model}`);
    }

    const temperature = clamp(Number(body.temperature ?? 0.9), 0.1, 1.5);
    const maxTokens = clamp(
        Math.round(Number(body.maxTokens ?? 1500)),
        200,
        2000,
    );
    const stream = Boolean(body.stream);

    // ---- 2. Build the Gemini payload ----
    // (Mirrors buildGenerationConfig that used to live in background.js.)
    const generationConfig: Record<string, unknown> = {
        temperature,
        topP: 0.95,
        maxOutputTokens: maxTokens,
    };
    // Disable hidden reasoning tokens on Gemini 2.5 so they don't eat
    // the maxOutputTokens budget.
    if (model.startsWith("gemini-2.5")) {
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
        encodeURIComponent(model) +
        ":" +
        op +
        qs +
        encodeURIComponent(apiKey);

    // ---- 3. Propagate cancellation upstream ----
    // If the extension closes the connection (user closes the variants
    // popover mid-stream), abort the Gemini fetch too so we don't keep
    // billing the API key for tokens nobody is reading.
    const abortController = new AbortController();
    req.signal.addEventListener("abort", () => abortController.abort());

    // ---- 4. Forward to Gemini ----
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
        return jsonError(502, "Proxy upstream error: " + msg);
    }

    // ---- 5. Stream or return ----
    if (stream) {
        // Pass Gemini's SSE through verbatim. The extension parses
        // 'data: {...}' lines exactly as it did when calling Gemini directly.
        return new Response(geminiRes.body, {
            status: geminiRes.status,
            headers: corsHeaders({
                "Content-Type": "text/event-stream; charset=utf-8",
                "Cache-Control": "no-cache, no-transform",
                // Hint to any upstream proxy / Vercel edge cache not to buffer.
                "X-Accel-Buffering": "no",
            }),
        });
    }

    // Non-streaming: forward the JSON response unchanged so the extension's
    // existing candidates[0].content.parts[].text parsing still works.
    const text = await geminiRes.text();
    return new Response(text, {
        status: geminiRes.status,
        headers: corsHeaders({ "Content-Type": "application/json" }),
    });
}

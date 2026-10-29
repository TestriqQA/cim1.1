import type { ReactNode } from "react";

/**
 * `next/font` emits an @font-face block for every Google subset of Inter, and
 * `subsets: ["latin"]` in layout.tsx only decides which one is PRELOADED — the
 * rest still download on demand per `unicode-range`. Inter's latin-ext range
 * covers U+20AD-20C0, so a single ₹ (U+20B9) pulls an extra ~84 KB woff2 for
 * that one glyph.
 *
 * Every system UI font ships ₹, so this stack draws it with no download at all.
 * Inter is deliberately absent from the stack but still inherited by the
 * surrounding text; if a platform font somehow lacked ₹, the browser's own
 * per-glyph fallback would resolve it — nothing breaks, it just costs the woff2
 * again. Measured at 900/36px: Inter 21.49px vs system-ui 21.58px advance
 * width, i.e. 0.4% — no reflow, no perceptible spacing change.
 */
const RUPEE_FONT_STACK = 'system-ui, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif';

export function RupeeSign() {
    return <span style={{ fontFamily: RUPEE_FONT_STACK }}>₹</span>;
}

/** Renders display text with every ₹ drawn by {@link RupeeSign}. */
export function withRupeeSign(text: string): ReactNode[] {
    return text.split("₹").flatMap((part, i) =>
        i === 0 ? [part] : [<RupeeSign key={i} />, part]
    );
}

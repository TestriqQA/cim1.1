"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Smartphone, Monitor } from "lucide-react";

// Lighthouse scores shown the way Google PageSpeed Insights shows them (user, 26 Nov 2026,
// Landing Pages: "make it like we see in google page speed ... Real-Time Analysis: Mobile /
// Desktop"): a Mobile / Desktop tab pair, a ring gauge per category coloured by the PSI
// bands (90–100 good, 50–89 needs improvement, 0–49 poor) and the PSI legend. Both
// panels stay in the HTML (the inactive one hidden), so search engines read every score.

type Score = { label: string; value: number };
type Props = {
    title: string;
    mobile: Score[];
    desktop: Score[];
    // colour of the active tab (the page's accent text colour, e.g. var(--accent-green-text))
    accent: string;
};

const R = 52;
const C = 2 * Math.PI * R;

// PSI colours: the ring colour is the same in both themes; the number uses PSI's darker
// light-mode text colour so it passes contrast on the light page
const BANDS = {
    good: { ring: "#0cce6b", text: "text-[#008800] [[data-theme=dark]_&]:text-[#0cce6b]" },
    average: { ring: "#ffa400", text: "text-[#c33300] [[data-theme=dark]_&]:text-[#ffa400]" },
    poor: { ring: "#ff4e42", text: "text-[#cc0000] [[data-theme=dark]_&]:text-[#ff4e42]" },
} as const;
const bandOf = (value: number) => (value >= 90 ? BANDS.good : value >= 50 ? BANDS.average : BANDS.poor);

export default function PageSpeedScores({ title, mobile, desktop, accent }: Props) {
    const tabs = [
        { id: "mobile", label: "Mobile", icon: Smartphone, scores: mobile },
        { id: "desktop", label: "Desktop", icon: Monitor, scores: desktop },
    ];
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const boxRef = useRef<HTMLDivElement>(null);
    const switched = useRef(false);

    const select = (idx: number) => {
        if (idx === active) return;
        switched.current = true;
        setActive(idx);
    };

    // After a switch the new panel's rings refill from empty, like PSI (on first load they
    // show full, so nothing moves before the page is interactive): set them empty with no
    // transition, force a layout, then hand them back to their score so the transition
    // runs. No frame callbacks, so it works the same in any tab.
    useLayoutEffect(() => {
        if (!switched.current) return;
        const arcs = boxRef.current?.querySelectorAll<SVGCircleElement>(`[data-psi-arc="${active}"]`) ?? [];
        arcs.forEach((arc) => {
            arc.style.transition = "none";
            arc.style.strokeDashoffset = String(C);
        });
        void boxRef.current?.getBoundingClientRect();
        arcs.forEach((arc) => {
            arc.style.transition = "";
            arc.style.strokeDashoffset = "";
        });
    }, [active]);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
        e.preventDefault();
        const next = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : (active + 1) % tabs.length;
        select(next);
        tabRefs.current[next]?.focus();
    };

    return (
        <div ref={boxRef} className="rounded-2xl border border-[var(--border-color)] px-4 py-5 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-3 opacity-70 text-center" style={{ color: "var(--foreground)" }}>
                {title}
            </p>

            {/* Mobile / Desktop, underlined like the PSI tabs */}
            <div role="tablist" aria-label="Device" onKeyDown={onKeyDown} className="flex justify-center gap-6 border-b border-[var(--border-color)] mb-5">
                {tabs.map((tab, idx) => {
                    const Icon = tab.icon;
                    const isActive = active === idx;
                    return (
                        <button
                            key={tab.id}
                            ref={(el) => {
                                tabRefs.current[idx] = el;
                            }}
                            id={`psi-tab-${tab.id}`}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`psi-panel-${tab.id}`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={() => select(idx)}
                            className="flex items-center gap-2 min-h-11 px-1 -mb-px border-b-2 text-sm font-semibold transition-colors duration-300 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:underline"
                            style={{
                                color: isActive ? accent : "var(--secondary-text)",
                                borderColor: isActive ? accent : "transparent",
                            }}
                        >
                            <Icon className="w-4 h-4" aria-hidden="true" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {tabs.map((tab, idx) => (
                <div
                    key={tab.id}
                    id={`psi-panel-${tab.id}`}
                    role="tabpanel"
                    aria-labelledby={`psi-tab-${tab.id}`}
                    hidden={active !== idx}
                >
                    <ul className="grid grid-cols-2 min-[420px]:grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4">
                        {tab.scores.map((score) => {
                            const band = bandOf(score.value);
                            const offset = C * (1 - score.value / 100);
                            return (
                                <li key={score.label} className="flex flex-col items-center gap-2 text-center min-w-0">
                                    <span className="relative w-16 h-16 lg:w-[72px] lg:h-[72px]">
                                        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90" aria-hidden="true">
                                            <circle cx="60" cy="60" r={R} fill={`color-mix(in srgb, ${band.ring} 12%, transparent)`} stroke={`color-mix(in srgb, ${band.ring} 22%, transparent)`} strokeWidth="9" />
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r={R}
                                                fill="none"
                                                stroke={band.ring}
                                                strokeWidth="9"
                                                strokeLinecap="round"
                                                strokeDasharray={C}
                                                strokeDashoffset={offset}
                                                data-psi-arc={idx}
                                                className="transition-[stroke-dashoffset] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                                            />
                                        </svg>
                                        <span className={`absolute inset-0 flex items-center justify-center text-lg lg:text-xl font-bold ${band.text}`}>
                                            {score.value}
                                        </span>
                                    </span>
                                    <span className="text-xs leading-tight" style={{ color: "var(--secondary-text)" }}>
                                        {score.label}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            {/* PSI legend */}
            <ul className="flex justify-center gap-4 mt-5 text-[11px] sm:text-xs" style={{ color: "var(--secondary-text)" }}>
                <li className="flex items-center gap-1.5">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" aria-hidden="true"><polygon points="5,0 10,10 0,10" fill={BANDS.poor.ring} /></svg>
                    0–49
                </li>
                <li className="flex items-center gap-1.5">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" aria-hidden="true"><rect width="10" height="10" fill={BANDS.average.ring} /></svg>
                    50–89
                </li>
                <li className="flex items-center gap-1.5">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" aria-hidden="true"><circle cx="5" cy="5" r="5" fill={BANDS.good.ring} /></svg>
                    90–100
                </li>
            </ul>
        </div>
    );
}

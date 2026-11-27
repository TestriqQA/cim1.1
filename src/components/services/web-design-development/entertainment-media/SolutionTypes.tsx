"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { CheckCircle2, Puzzle, ArrowRight, Film, Music, Radio, Newspaper, Headphones, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const solutionsHeader: SolutionsHeader = {
    title: (
        <>
            <span style={{ color: "var(--accent-violet-text)" }}>Platforms</span> We Build
        </>
    ),
    intro: "From streaming giants to niche content platforms, we create digital experiences that captivate and engage audiences worldwide.",
    ariaLabel: "Entertainment platform types",
};

// Features were hidden until a card was clicked; the linked title now links from the
// panel heading. Each model keeps its own colour.
const solutions: Solution[] = [
    {
        icon: Film,
        title: "Video Streaming Platforms",
        description: "Netflix-style VOD platforms with content libraries, watchlists, personalized recommendations, and subscription management.",
        features: ["Adaptive Bitrate Streaming", "Content Recommendations", "Multi-Profile Support", "Offline Downloads"],
        color: "from-[#8b5cf6] to-[#7c3aed]",
    },
    {
        icon: Music,
        title: "Music & Audio Platforms",
        description: "Spotify-style music streaming with playlists, artist pages, social sharing, and high-fidelity audio support.",
        features: ["Curated Playlists", "Artist Profiles", "Lyrics Integration", "Cross-device Sync"],
        color: "from-[#ec4899] to-[#db2777]",
    },
    {
        icon: Radio,
        title: "Live Streaming Solutions",
        description: "Twitch-style live broadcasting with real-time chat, donations, subscriptions, and interactive features.",
        features: ["Low-latency Streaming", "Live Chat & Reactions", "Channel Subscriptions", "Stream Monetization"],
        color: "from-[#7c3aed] to-[#6d28d9]",
    },
    {
        icon: Newspaper,
        title: "News & Magazine Portals",
        href: "/services/web-design-development/wordpress-development-services",
        description: "Digital publication platforms with paywalls, newsletter integration, and dynamic content delivery.",
        features: ["Paywall Integration", "Newsletter System", "Content Scheduling", "Multi-author Support"],
        color: "from-[#3b82f6] to-[#2563eb]",
    },
    {
        icon: Headphones,
        title: "Podcast Platforms",
        description: "Audio content hubs with episode management, RSS feeds, analytics, and monetization options.",
        features: ["Episode Management", "RSS Feed Generation", "Listener Analytics", "Sponsorship Tools"],
        color: "from-[#d946ef] to-[#c026d3]",
    },
    {
        icon: Gamepad2,
        title: "Gaming & Esports Sites",
        description: "Interactive gaming platforms with leaderboards, tournaments, team profiles, and community features.",
        features: ["Tournament Brackets", "Team Management", "Live Match Tracking", "Player Statistics"],
        color: "from-[#6366f1] to-[#4f46e5]",
    },
];

const solutionsCta: SectionCta = null;

type SolutionsHeader = { title: ReactNode; intro: ReactNode; ariaLabel: string };
type Solution = {
    icon: LucideIcon;
    title: string;
    href?: string;
    description: ReactNode;
    features: string[];
    color: string;
    meta?: string[];
};
type SectionCta = { title?: string; text?: ReactNode; label: string; href?: string } | null;

export default function SolutionTypes() {
    // Business-model picker: one tab per model, one panel shows the chosen model.
    const [active, setActive] = useState(0);
    // The panel fades in only after a real switch (styled-jsx CSS is injected on
    // the client, so animating on first load would flash).
    const [switched, setSwitched] = useState(false);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // The panel box eases between heights while the model changes (descriptions
    // differ in length). The height is fixed only for the 400ms of the change; at
    // rest it is auto, so a resize can never clip the content.
    const boxRef = useRef<HTMLDivElement>(null);
    const fromHeight = useRef<number | null>(null);

    const select = (idx: number) => {
        if (idx === active) return;
        fromHeight.current = boxRef.current?.offsetHeight ?? null;
        setActive(idx);
        setSwitched(true);
    };

    useLayoutEffect(() => {
        const box = boxRef.current;
        const from = fromHeight.current;
        fromHeight.current = null;
        if (!box || from === null) return;
        box.style.height = "";
        const to = box.offsetHeight; // natural height with the new panel
        if (from === to) return;
        box.style.height = `${from}px`;
        void box.offsetHeight; // apply the start height before animating
        box.style.height = `${to}px`;
        const release = () => {
            box.style.height = "";
        };
        box.addEventListener("transitionend", release, { once: true });
        const fallback = window.setTimeout(release, 450);
        return () => {
            window.clearTimeout(fallback);
            box.removeEventListener("transitionend", release);
        };
    }, [active]);

    // Arrow keys move between tabs (left/up = previous, right/down = next), Home/End
    // jump to the ends; the tab that gets focus is also selected.
    const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const last = solutions.length - 1;
        let next: number | null = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        if (next === null) return;
        e.preventDefault();
        select(next);
        tabRefs.current[next]?.focus();
    };

    // Tabs sit above the panel at every size (user, 26 Nov 2026: "1. Tabs on top"; a side
    // list was taller than most panels and left blank space above and below the text).
    // Five models: five 44px icon tabs in a row on phones, five tiles from 640px.
    // Six models: six 43px tabs in one even row at 320 (no min-width, or they would
    // overflow), 3×2 tiles from 640px, one row of six from 1024px.
    const six = solutions.length === 6;
    const tabListClass = six
        ? "grid grid-cols-6 gap-1 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
        : "flex justify-center gap-2 sm:grid sm:grid-cols-5 sm:gap-3";
    const tabSizeClass = six ? "min-h-11" : "min-h-11 min-w-11";

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                    >
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-violet-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            Our Solutions
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        {solutionsHeader.title}
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        {solutionsHeader.intro}
                    </p>
                </div>

                {/* Picker: a row of model tabs above one panel. From 640px the tabs are
                    tiles (icon above name); phones: icon-only tabs, the name shows as the
                    panel heading. */}
                <div className="grid gap-6">
                    <div
                        role="tablist"
                        aria-label={solutionsHeader.ariaLabel}
                        onKeyDown={onTabKeyDown}
                        className={tabListClass}
                    >
                        {solutions.map((solution, idx) => {
                            const Icon = solution.icon;
                            const isActive = active === idx;
                            return (
                                <button
                                    key={solution.title}
                                    ref={(el) => {
                                        tabRefs.current[idx] = el;
                                    }}
                                    id={`solution-tab-${idx}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`solution-panel-${idx}`}
                                    tabIndex={isActive ? 0 : -1}
                                    onClick={() => select(idx)}
                                    className={`flex items-center justify-center gap-3 ${tabSizeClass} p-1.5 sm:flex-col sm:gap-2 sm:p-3 sm:min-h-[104px] rounded-xl border transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none focus-visible:outline-none ${isActive
                                        ? "bg-[#7c3aed] border-[#7c3aed] text-white focus-visible:brightness-120"
                                        : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#8b5cf6] focus-visible:border-[#8b5cf6]"
                                        }`}
                                >
                                    <span className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${solution.color}`}>
                                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" aria-hidden="true" />
                                    </span>
                                    <span className="sr-only sm:not-sr-only text-xs sm:text-center lg:text-sm font-semibold leading-tight">
                                        {solution.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Panel: every model stays in the HTML (inactive ones hidden), so every
                        description and link is still read by search engines. Its height is
                        its own content, so there is no blank space above or below. */}
                    <div
                        className="rounded-3xl border border-[var(--border-color)] p-6 md:p-8 lg:p-10"
                        style={{ backgroundColor: "var(--card-bg)" }}
                    >
                        <div ref={boxRef} className="overflow-hidden transition-[height] duration-[400ms] ease-in-out motion-reduce:transition-none">
                            {solutions.map((solution, idx) => {
                                const Icon = solution.icon;
                                const isActive = active === idx;
                                return (
                                    <div
                                        key={solution.title}
                                        id={`solution-panel-${idx}`}
                                        role="tabpanel"
                                        aria-labelledby={`solution-tab-${idx}`}
                                        tabIndex={0}
                                        hidden={!isActive}
                                    >
                                        <div className={`grid lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] 2xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] gap-8 items-center ${isActive && switched ? "solution-in" : ""}`}>
                                            <div>
                                                {/* A title with its own page links from here (a link can't sit inside a tab) */}
                                                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                                    {solution.href ? (
                                                        <Link href={solution.href} className="hover:underline">
                                                            {solution.title}
                                                        </Link>
                                                    ) : (
                                                        solution.title
                                                    )}
                                                </h3>
                                                <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                    {solution.description}
                                                </p>
                                                {solution.meta && (
                                                    <ul className="flex flex-wrap gap-2 mt-4">
                                                        {solution.meta.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-semibold"
                                                                style={{ color: "var(--secondary-text)" }}
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                                                    {solution.features.map((feature) => (
                                                        <li key={feature} className="flex items-start gap-2.5 text-base" style={{ color: "var(--secondary-text)" }}>
                                                            <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-violet-text)]" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Colour panel with the model's icon, from 1024px (the panel is full
                                                width now, so two-column ticks still fit beside it); wider from
                                                1536px so the text lines don't get too long */}
                                            <div
                                                aria-hidden="true"
                                                className={`hidden lg:flex self-stretch min-h-56 rounded-2xl items-center justify-center bg-gradient-to-br ${solution.color}`}
                                            >
                                                <Icon className="w-20 h-20 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {solutionsCta && (
                    <div className="mt-12 md:mt-16 text-center px-0 sm:px-8">
                        {solutionsCta.title && (
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                {solutionsCta.title}
                            </h3>
                        )}
                        {solutionsCta.text && (
                            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                {solutionsCta.text}
                            </p>
                        )}
                        <Link
                            href={solutionsCta.href ?? "/contact"}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {solutionsCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                    </div>
                )}

                <style jsx>{`
                    @keyframes solutionIn {
                        from { opacity: 0; transform: translateY(8px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .solution-in {
                        animation: solutionIn 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .solution-in { animation: none; }
                    }
                `}</style>
            </div>
        </section>
    );
}

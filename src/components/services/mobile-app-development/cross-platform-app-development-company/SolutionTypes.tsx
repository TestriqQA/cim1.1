"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { CheckCircle2, Puzzle, ArrowRight, Rocket, ShoppingCart, Building2, MessageCircle, Car, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const solutionsHeader: SolutionsHeader = {
    title: (
        <>
            Custom Cross-Platform Application Solutions for <span style={{ color: "var(--accent-indigo-text)" }}>Every Industry</span>
        </>
    ),
    intro: "From disruptive startups to large enterprises, we engineer scalable multi-platform apps that drive digital transformation across sectors.",
    ariaLabel: "Industries",
};

// Six industries as tabs on top. The ticks were only shown on hover (never on phones); now
// they're always visible. Colours cycle the page's indigo, violet and purple.
const solutions: Solution[] = [
    {
        icon: Rocket,
        title: "Startups & MVPs",
        description: "Validate your idea fast. Our custom cross-platform app development for startups focuses on rapid MVP delivery. Launch on both platforms simultaneously to gather user feedback and secure funding without burning your runway.",
        features: ["Rapid MVP delivery", "Simultaneous launch", "User feedback gathering", "Cost-effective scaling"],
        color: "from-[#6366f1] to-[#4f46e5]",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce & Retail Solutions",
        description: (
            <>
                Drive sales with immersive{" "}
                <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    ecommerce
                </Link>{" "}
                and retail multi-platform app solutions. We build shoppable apps with unified inventory management, secure checkout, and personalized recommendations that convert visitors into loyal customers.
            </>
        ),
        features: ["Shoppable apps", "Unified inventory", "Secure checkout", "Personalized recommendations"],
        color: "from-[#8b5cf6] to-[#7c3aed]",
    },
    {
        icon: Building2,
        title: "Enterprise Mobility",
        description: (
            <>
                Empower your workforce. We deliver Flutter app development services for{" "}
                <Link href="/services/mobile-app-development/enterprise-application-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    enterprise
                </Link>{" "}
                that streamline internal operations. Secure, scalable, and integrated with your existing IT infrastructure (SAP, Salesforce, Oracle).
            </>
        ),
        features: ["Streamlined operations", "IT infrastructure integration", "Secure & scalable", "Workforce empowerment"],
        color: "from-[#764ba2] to-[#5b3a80]",
    },
    {
        icon: MessageCircle,
        title: "Social & Chat Applications",
        description: (
            <>
                Build the next big community. We develop real-time{" "}
                <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    social and chat apps
                </Link>{" "}
                with features like live messaging, video calling, and media sharing, ensuring a consistent and engaging experience across devices.
            </>
        ),
        features: ["Real-time messaging", "Video calling", "Media sharing", "Consistent experience"],
        color: "from-[#6366f1] to-[#4f46e5]",
    },
    {
        icon: Car,
        title: "On-Demand Services",
        description: "Dominate the gig economy. Our on-demand cross-platform app developers for hire build Uber-style booking, tracking, and delivery apps. robust driver/customer modules with real-time geolocation and payment integration.",
        features: ["Booking & tracking", "Driver/customer modules", "Real-time geolocation", "Payment integration"],
        color: "from-[#8b5cf6] to-[#7c3aed]",
    },
    {
        icon: Wallet,
        title: "Fintech & Healthcare (HIPAA Compliant)",
        description: (
            <>
                Security first. We build{" "}
                <Link href="/services/web-design-development/healthcare-portals" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    Healthcare
                </Link>{" "}
                and HIPAA-compliant cross-platform apps and secure{" "}
                <Link href="/services/web-design-development/fintech-solutions" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    Fintech apps
                </Link>{" "}
                with biometric authentication, encryption, and regulatory compliance baked into the core architecture.
            </>
        ),
        features: ["HIPAA compliance", "Biometric authentication", "Data encryption", "Secure architecture"],
        color: "from-[#764ba2] to-[#5b3a80]",
    },
];

const solutionsCta: SectionCta = null;

type SolutionsHeader = { title: ReactNode; intro: ReactNode; ariaLabel: string };
type Solution = {
    icon: LucideIcon;
    title: string;
    href?: string;
    description: ReactNode;
    // a tick may be a link (iOS: "Interactive UI/UX")
    features: ReactNode[];
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
    // Long titles (Hybrid, Android: up to 49 characters) wrapped to 3–4 lines in a row of
    // six at 1024–1279px, so then the six stay 3×2 tiles at every width from 640px.
    const longTitles = solutions.some((solution) => solution.title.length > 24);
    const tabListClass = six
        ? longTitles
            ? "grid grid-cols-6 gap-1 sm:grid-cols-3 sm:gap-3"
            : "grid grid-cols-6 gap-1 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
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
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-indigo-text)" }}>
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
                                        ? "bg-[#4f46e5] border-[#4f46e5] text-white focus-visible:brightness-120"
                                        : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#667eea] focus-visible:border-[#667eea]"
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
                                                    {solution.features.map((feature, fidx) => (
                                                        <li key={fidx} className="flex items-start gap-2.5 text-base" style={{ color: "var(--secondary-text)" }}>
                                                            <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-indigo-text)]" />
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#4f46e5] to-[#4338ca] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
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

"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ShoppingBag, Store, Building2, RefreshCw, Unplug, CheckCircle2, Puzzle } from "lucide-react";
import Link from "next/link";

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

    const solutions = [
        {
            icon: ShoppingBag,
            title: "B2C Online Stores",
            description: "Capture the consumer market with visually stunning, high-converting storefronts. As an expert Ecommerce website design company, we craft immersive brand experiences with Ecommerce product page optimization that showcases your catalog in its best light.",
            features: ["Product galleries", "Wishlist & favorites", "Reviews & ratings", "Social sharing"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: Building2,
            title: "B2B E-commerce Platforms",
            description: <>Streamline your wholesale operations with sophisticated <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:underline text-[var(--brand-blue-text)]">B2B ecommerce platform development</Link>. We enable complex features like tiered pricing, bulk ordering, and <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline text-[var(--brand-blue-text)]">Custom API integrations</Link> for ecommerce stores (ERP/CRM) to automate your back-office workflows.</>,
            features: ["Custom pricing tiers", "Quote requests", "Bulk order tools", "Account hierarchies"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Store,
            title: "Marketplace Solutions",
            description: "Launch your own Amazon-style platform. We build robust multi-vendor marketplaces with unified checkouts, vendor dashboards, and complex commission structures, positioning you as a central hub in your niche Ecommerce Ecosystem.",
            features: ["Vendor onboarding", "Split payments", "Seller analytics", "Dispute resolution"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: RefreshCw,
            title: "Subscription Commerce",
            description: <>Build predictable revenue streams with <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Subscription-based ecommerce</Link> store setup. We integrate flexible billing engines and churn-reduction tools, ensuring seamless recurring payments and superior subscriber management.</>,
            features: ["Recurring billing", "Skip/pause options", "Subscriber portal", "Renewal reminders"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Unplug,
            title: "Headless Commerce",
            description: <>Future-proof your business with <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-blue-text)]">Headless ecommerce development</Link> services. By decoupling the frontend from the backend, we deliver lightning-fast omnichannel experiences that let you sell anywhere - web, mobile, IoT, or voice.</>,
            features: ["API-first design", "Custom frontends", "Omnichannel ready", "Future-proof stack"],
            color: "from-[#008ac1] to-[#bc3feb]",
        },
    ];

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
                        <Puzzle className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Our Solutions
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-cyan-text)" }}>E-commerce Solutions</span> We Build
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        End-to-End Development for Every Business Model
                    </p>
                </div>

                {/* Picker: a row of model tabs above one panel at every size (user, 26 Nov
                    2026: "1. Tabs on top"; a side list was taller than the panel and left
                    blank space above and below the text). From 640px: five tiles (icon
                    above name); phones: five 44px icon-only tabs, the name shows as the
                    panel heading. */}
                <div className="grid gap-6">
                    <div
                        role="tablist"
                        aria-label="E-commerce business models"
                        onKeyDown={onTabKeyDown}
                        className="flex justify-center gap-2 sm:grid sm:grid-cols-5 sm:gap-3"
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
                                    className={`flex items-center justify-center gap-3 min-h-11 min-w-11 p-1.5 sm:flex-col sm:gap-2 sm:p-3 sm:min-h-[104px] rounded-xl border transition-colors duration-[400ms] ease-in-out motion-reduce:transition-none focus-visible:outline-none ${isActive
                                        ? "bg-[#0e7490] border-[#0e7490] text-white focus-visible:brightness-120"
                                        : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#00b5ca] focus-visible:border-[#00b5ca]"
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

                    {/* Panel: all five stay in the HTML (inactive ones hidden), so every
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
                                                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                                    {solution.title}
                                                </h3>
                                                <p className="text-base leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                    {solution.description}
                                                </p>
                                                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                                                    {solution.features.map((feature) => (
                                                        <li key={feature} className="flex items-start gap-2.5 text-base" style={{ color: "var(--secondary-text)" }}>
                                                            <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--accent-cyan-text)]" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Colour panel with the model's icon, from 1024px; wider from
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

                {/* Bottom CTA */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)" }}>
                        Need a specialized solution like Dropshipping store development and automation?
                    </p>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-base sm:text-lg bg-gradient-to-r from-[#0e7490] to-[#155e75] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                    >
                        Let&apos;s Discuss Your Project
                    </Link>
                </div>

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

"use client";

import { useEffect, useState } from "react";
import {
    Sprout,
    Megaphone,
    UsersRound,
    PenTool,
    LayoutDashboard,
    MessageCircleHeart,
    LineChart,
    ChevronDown,
    LayoutGrid,
} from "lucide-react";
import Link from "next/link";

// Panel row placement for the desktop layout: item N's button sits in row N of
// the left column (static class names so Tailwind generates them).
const ROW_START = ["lg:row-start-1", "lg:row-start-2", "lg:row-start-3", "lg:row-start-4", "lg:row-start-5", "lg:row-start-6", "lg:row-start-7"];

// Tailwind's lg breakpoint: from here up the layout is list + detail panel.
const DESKTOP = "(min-width: 1024px)";

export default function TypesOfServices() {
    // -1 = all closed (phones only).
    const [active, setActive] = useState(0);

    // On phones a second tap on the open item closes it, like any accordion
    // (user, 27 Nov 2026). On desktop the selected type stays open, or the
    // detail panel would go blank.
    const toggle = (idx: number) => {
        const isDesktop = window.matchMedia(DESKTOP).matches;
        setActive((current) => (current === idx && !isDesktop ? -1 : idx));
    };

    // Everything closed on a phone, then the window widened to desktop: open
    // the first type so the detail panel is never empty.
    useEffect(() => {
        const mq = window.matchMedia(DESKTOP);
        const onChange = () => {
            if (mq.matches) setActive((current) => (current === -1 ? 0 : current));
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    const services = [
        {
            icon: Sprout,
            title: "Organic Social Media Marketing",
            description: <>Building genuine, lasting connections with your audience through high-quality, non-promoted content. This is the foundation of brand loyalty and <Link href="/blog/social-media-strategy-building-brand" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">organic social media follower growth strategy</Link>. We craft compounding content strategies that educate, entertain, and inspire, naturally attracting an audience that actually cares about your mission. Over time, this builds a fortress of trust that paid ads alone cannot replicate, reducing your reliance on ad spend and increasing customer lifetime value.</>,
            gradient: "linear-gradient(135deg, #10b981, #059669)",
            accentColor: "#10b981",
        },
        {
            icon: Megaphone,
            title: "Paid Social Media Advertising",
            description: <>Targeted, high-impact campaigns across platforms to drive immediate results. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">paid social media advertising agency</Link> expertise ensures your budget is spent efficiently to maximize leads and sales. We utilize advanced audience segmentation, lookalike modeling, and retargeting sequences to put your offer in front of the people most likely to buy. From <Link href="/services/performance-marketing/meta-ads" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Meta Ads</Link> to <Link href="/services/performance-marketing/linkedin-ads" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">LinkedIn Sponsored Content</Link>, our precise targeting lowers your CPA and scales your revenue predictably.</>,
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
            accentColor: "var(--brand-teal)",
        },
        {
            icon: UsersRound,
            title: "Influencer Marketing",
            description: "Leveraging trusted voices in your industry to promote your brand authentically, expanding your reach to highly engaged, niche audiences via our influencer marketing management services. We handle the entire lifecycle of influencer partnerships-from vetting and negotiation to campaign management and compliance. By aligning with influencers who share your brand values, we tap into pre-built trust, driving higher conversion rates than traditional display advertising.",
            gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
            accentColor: "#8b5cf6",
        },
        {
            icon: PenTool,
            title: "Content Creation & Scheduling",
            description: <>Developing visually engaging and contextually relevant content (graphics, videos, copy) and utilizing <Link href="/blog/content-marketing-strategies-work" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">custom social media content calendar services</Link> for optimal posting times to capture maximum audience attention. Content is king, but context is queen. We produce high-fidelity assets-from scroll-stopping motion graphics to thought-leadership articles-that stop the scroll. Our strategic scheduling ensures your content hits the feed exactly when your audience is most active, maximizing visibility and engagement.</>,
            gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
            accentColor: "#f59e0b",
        },
        {
            icon: LayoutDashboard,
            title: "Social Media Management",
            description: "Full-service handling of your social channels, including profile optimization, daily posting, and brand monitoring, allowing you to focus on your core business. We act as an extension of your team, maintaining a consistent pulse on your accounts. We handle the day-to-day grind-uploading, captioning, hashtagging, and troubleshooting-so you can dedicate your energy to high-level business operations, knowing your digital reputation is in expert hands.",
            gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
            accentColor: "var(--brand-cyan)",
        },
        {
            icon: MessageCircleHeart,
            title: "Community Engagement & Growth",
            description: "Proactive interaction with followers, responding to comments and messages, and implementing social listening & monitoring strategies to organically grow your follower base with qualified leads. Silence kills relationships. We ensure no comment goes unanswered and no DM is ignored. By actively participating in conversations and monitoring brand mentions across the web, we protect your reputation and turn casual interactions into sales opportunities.",
            gradient: "linear-gradient(135deg, #ec4899, #db2777)",
            accentColor: "#ec4899",
        },
        {
            icon: LineChart,
            title: "Analytics & Reporting",
            description: "Continuous monitoring of key performance indicators (KPIs) and providing transparent, actionable reports to refine strategy and prove ROI. Data without insight is noise. We distill complex analytics into clear, visual dashboards that show you exactly where your money is going and what it’s returning. Our monthly deep-dives provide strategic recommendations for the next phase, ensuring continuous improvement and transparency in our partnership.",
            gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
            accentColor: "#3b82f6",
        },
    ];

    return (
        <section
            className="px-4 sm:px-6 md:px-12 xl:px-20 py-10 md:py-16 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-teal) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Floating orbs */}

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-5"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--accent-teal-text)",
                        }}
                    >
                        <LayoutGrid className="w-4 h-4" />
                        <span className="text-sm font-semibold">Types of Social Media Marketing</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>Comprehensive Social Media Solutions</span> for Every Business Need
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We cover the full spectrum of social media activities to ensure a holistic and effective strategy tailored to your unique business goals.
                    </p>
                </div>

                {/* Types: list + detail (user's layout B, 27 Nov 2026). The 3-column
                    grid left Analytics alone on its last row.
                    Desktop: the 7 types are a list on the left; the selected one's
                    full text shows on the right. Every panel sits in the same grid
                    cell (column 2, rows 1-8); the inactive ones are only
                    invisible. Each panel is as tall as its own text (self-start),
                    so there is no empty space inside it, and the compact list
                    (about the height of the longest text) sets the section
                    height, so the page never jumps when switching. Row 8 (1fr)
                    takes any extra height, so the list buttons never stretch.
                    From xl the columns are equal and the text is 18px, so the
                    panels (~415-445px) end close to the list (451px).
                    Phones: the same items stack as a list you tap to open, one
                    open at a time (inactive panels are display:none there).
                    All 7 descriptions stay in the HTML for search engines. */}
                <div
                    className="grid gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[repeat(7,auto)_1fr] lg:gap-x-8 lg:gap-y-2 max-w-7xl mx-auto"
                    style={{ animation: "fadeInUp 0.6s ease-out both" }}
                >
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isActive = active === idx;
                        const buttonId = `smm-type-${idx}`;
                        const panelId = `smm-type-panel-${idx}`;
                        return (
                            <div key={idx} className="contents">
                                <button
                                    type="button"
                                    id={buttonId}
                                    aria-expanded={isActive}
                                    aria-controls={panelId}
                                    onClick={() => toggle(idx)}
                                    className={`lg:col-start-1 ${ROW_START[idx]} w-full flex items-center gap-4 lg:gap-3 text-left rounded-xl border p-3 md:p-4 lg:px-3 lg:py-2.5 cursor-pointer transition-colors duration-300 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] ${isActive ? "" : "border-transparent hover:bg-[var(--card-bg)]"}`}
                                    style={isActive ? {
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: `color-mix(in srgb, ${service.accentColor} 45%, var(--border-color))`,
                                    } : undefined}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="w-11 h-11 lg:w-9 lg:h-9 rounded-xl lg:rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ease-out motion-reduce:transition-none"
                                        style={isActive
                                            ? { background: service.gradient, color: "#fff" }
                                            : { backgroundColor: `color-mix(in srgb, ${service.accentColor} 16%, transparent)`, color: service.accentColor }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <span className="flex-1 text-base md:text-lg lg:text-base font-semibold" style={{ color: "var(--foreground)" }}>
                                        {service.title}
                                    </span>
                                    <ChevronDown
                                        aria-hidden="true"
                                        className={`w-5 h-5 flex-shrink-0 lg:hidden transition-transform duration-300 motion-reduce:transition-none ${isActive ? "rotate-180" : ""}`}
                                        style={{ color: "var(--secondary-text)" }}
                                    />
                                </button>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`lg:col-start-2 lg:row-start-1 lg:row-span-8 lg:self-start rounded-2xl border p-5 md:p-8 ${isActive ? "block lg:visible smm-panel-in" : "hidden lg:block lg:invisible"}`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    {/* Icon + title: desktop only (on phones the
                                        button right above already shows them). */}
                                    <div className="hidden lg:flex items-center gap-4 mb-6">
                                        <div
                                            aria-hidden="true"
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: service.gradient }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="xl:text-lg" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes smmPanelIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                /* The selected panel fades in when you switch types. */
                :global(.smm-panel-in) {
                    animation: smmPanelIn 0.3s ease-out;
                }
                @media (prefers-reduced-motion: reduce) {
                    :global(.smm-panel-in) { animation: none; }
                }
            `}</style>
        </section>
    );
}
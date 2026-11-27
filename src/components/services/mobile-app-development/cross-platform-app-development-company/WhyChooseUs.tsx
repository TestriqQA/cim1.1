import type { CSSProperties, ReactNode } from "react";
import { Trophy, CheckCircle2, ArrowRight, Zap, DollarSign, Clock, RefreshCw, Users, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const whyHeader: WhyHeader = {
    title: (
        <>
            Why Choose Results-Driven <span style={{ color: "var(--accent-indigo-text)" }}>Cross-Platform App Development</span>
        </>
    ),
    intro: "Maximize ROI with reduced TTM and development costs without sacrificing quality or performance.",
};

// Six cards as a bento with a wide lead (no highlights, so no tall lead):
// [1 1 2] / [3 4 4] / [5 5 6]. Colours cycle the page's indigo, violet and purple. The
// icons of "Code Reusability & Scalability" (Users) and "Dedicated React & Flutter
// Experts" (RefreshCw) were swapped so each says what its card says.
const reasons: Reason[] = [
    {
        icon: Zap,
        title: "Native-Like Performance",
        description: "Gone are the days of laggy hybrid apps. Our optimization techniques and use of native modules ensure your app performs at 60fps, indistinguishable from native apps.",
        color: "from-[#6366f1] to-[#4f46e5]",
        iconColor: "#6366f1",
    },
    {
        icon: DollarSign,
        title: "40% Cost Savings",
        description: (
            <>
                Developing two separate native apps is expensive. Our{" "}
                <Link href="/services/mobile-app-development/hybrid-app-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    Hybrid Mobile App Development Company
                </Link>{" "}
                approach saves you up to 40% by maintaining a Unified Codebase, reducing resource requirements.
            </>
        ),
        color: "from-[#8b5cf6] to-[#7c3aed]",
        iconColor: "#8b5cf6",
    },
    {
        icon: Clock,
        title: "Faster Time-to-Market",
        description: "Beat the competition. With Hot Reload and Fast Refresh, we iterate quickly. You get a market-ready product in weeks, not months.",
        color: "from-[#764ba2] to-[#5b3a80]",
        iconColor: "#764ba2",
    },
    {
        icon: RefreshCw,
        title: "Code Reusability & Scalability",
        description: "We write code once and use it everywhere. High Code Reusability means easier updates and scaling. Add new features to both platforms instantly.",
        color: "from-[#6366f1] to-[#4f46e5]",
        iconColor: "#6366f1",
    },
    {
        icon: Users,
        title: "Dedicated React & Flutter Experts",
        description: "Work with the best. Our team comprises senior engineers who contribute to the open-source community and stay ahead of Post-2025 core updates.",
        color: "from-[#8b5cf6] to-[#7c3aed]",
        iconColor: "#8b5cf6",
    },
    {
        icon: HeartHandshake,
        title: "Post-Launch Support",
        description: (
            <>
                We are your long-term partner. We provide ongoing cross-platform app{" "}
                <Link href="/services/additional-support-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-indigo-text)" }}>
                    maintenance and support
                </Link>
                , ensuring your app remains compatible with the latest OS versions and devices.
            </>
        ),
        color: "from-[#764ba2] to-[#5b3a80]",
        iconColor: "#764ba2",
    },
];

const whyStats: WhyStat[] = [];

const whyCta: SectionCta = null;

type WhyHeader = { title: ReactNode; intro: ReactNode; checks?: string[] };
type Reason = {
    icon: LucideIcon;
    title: string;
    href?: string;
    description: ReactNode;
    color: string;
    iconColor: string;
    features?: ReactNode[];
    // lead card only: a quoted result from the card's own text, shown as a callout
    highlight?: { label: string; text: ReactNode };
};
type SectionCta = { title?: string; text?: ReactNode; label: string; href?: string } | null;
type WhyStat = { value: string; label: string };

export default function WhyChooseUs() {
    const count = reasons.length;
    // Bento (website-type pages). When the lead card has a panel (highlights or a
    // quoted result) it is two rows tall from lg:
    // 6 cards: lg [1 2 3]/[1 4 4]/[5 5 6], md [1 1]/[2 3]/[4 5]/[6 6].
    // 5 cards: lg [1 2 3]/[1 4 5], md [1 1]/[2 3]/[4 5].
    // 4 cards: lg [1 2 2]/[1 3 4], md [1 1]/[2 2]/[3 4].
    // Without one it would be a tall card with an empty band, so the lead is wide
    // instead and wide cards zig-zag: 6 cards lg [1 1 2]/[3 4 4]/[5 5 6],
    // md [1 1]/[2 3]/[4 4]/[5 6].
    const tallLead = Boolean(reasons[0]?.features || reasons[0]?.highlight);
    const placementFor = (idx: number) => {
        if (!tallLead && count === 6) {
            if (idx === 0 || idx === 3) return "md:col-span-2";
            if (idx === 4) return "lg:col-span-2";
            return "";
        }
        // 5 cards: lg [1 1 2]/[3 4 5], md [1 1]/[2 3]/[4 5]
        if (!tallLead && count === 5) return idx === 0 ? "md:col-span-2" : "";
        // 4 cards: lg [1 1 2]/[3 4 4], md [1 1]/[2 3]/[4 4]
        if (!tallLead && count === 4) return idx === 0 || idx === 3 ? "md:col-span-2" : "";
        if (idx === 0) return "md:col-span-2 lg:col-span-1 lg:row-span-2";
        if (count === 6 && (idx === 3 || idx === 4)) return "lg:col-span-2";
        if (count === 6 && idx === 5) return "md:col-span-2 lg:col-span-1";
        if (count === 4 && idx === 1) return "md:col-span-2";
        return "";
    };
    const isWideCard = (idx: number) => {
        if (!tallLead && count === 6) return idx === 3 || idx === 4;
        if (!tallLead && count === 4) return idx === 3;
        if (!tallLead) return false;
        return (count === 6 && (idx === 3 || idx === 4)) || (count === 4 && idx === 1);
    };

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "color-mix(in srgb, #667eea 5%, transparent)",
                            borderColor: "color-mix(in srgb, #667eea 20%, transparent)",
                        }}
                    >
                        <Trophy className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-indigo-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        {whyHeader.title}
                    </h2>

                    <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        {whyHeader.intro}
                    </p>

                    {whyHeader.checks && (
                        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6 max-w-4xl mx-auto">
                            {whyHeader.checks.map((item) => (
                                <li key={item} className="flex items-center gap-2 text-base" style={{ color: "var(--foreground)" }}>
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Hover as everywhere: the border turns the tile's own colour and the
                    card lifts 4px; no shadow. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isLead = idx === 0;
                        const isWide = isWideCard(idx);
                        return (
                            <div
                                key={reason.title}
                                className={`flex flex-col p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${placementFor(idx)}`}
                                style={{
                                    backgroundColor: isLead
                                        ? `color-mix(in srgb, ${reason.iconColor} 6%, var(--card-bg))`
                                        : "var(--card-bg)",
                                    "--card-accent": reason.iconColor,
                                } as CSSProperties}
                            >
                                <div className={`${isLead ? "w-20 h-20" : "w-16 h-16"} rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${reason.color}`}>
                                    <Icon className={`${isLead ? "w-10 h-10" : "w-8 h-8"} text-white`} aria-hidden="true" />
                                </div>

                                {/* Lead card: its own highlights as a small panel. From lg (where
                                    the card is two rows tall) it sits between the icon and the text,
                                    centred in the spare height so neither gap is a big empty band;
                                    below lg it follows the text. */}
                                {isLead && reason.features && (
                                    <ul
                                        className="order-last lg:order-none mt-6 lg:my-auto rounded-2xl border border-[var(--border-color)] px-4 py-1 divide-y divide-[var(--border-color)]"
                                        style={{ backgroundColor: "var(--card-bg)" }}
                                    >
                                        {reason.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-start gap-2.5 py-2.5 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {isLead && !reason.features && reason.highlight && (
                                    <div
                                        className="order-last lg:order-none mt-6 lg:my-auto rounded-2xl border border-[var(--border-color)] px-4 py-3"
                                        style={{ backgroundColor: "var(--card-bg)" }}
                                    >
                                        <p className="text-sm font-semibold mb-1" style={{ color: "var(--accent-indigo-text)" }}>
                                            {reason.highlight.label}
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                            {reason.highlight.text}
                                        </p>
                                    </div>
                                )}

                                {/* Text sits at the foot of every tile, so a tile taller than its
                                    content keeps the extra space between icon and title */}
                                <div className={isLead && (reason.features || reason.highlight) ? "mt-auto lg:mt-0 lg:pt-6" : "mt-auto"}>
                                    <h3 className={`${isLead ? "text-2xl md:text-3xl" : "text-xl"} font-bold mb-3`} style={{ color: "var(--foreground)" }}>
                                        {reason.href ? (
                                            <Link href={reason.href} className="hover:underline">
                                                {reason.title}
                                            </Link>
                                        ) : (
                                            reason.title
                                        )}
                                    </h3>
                                    <p className={isLead || isWide ? "text-base" : "text-sm"} style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {reason.description}
                                    </p>
                                    {!isLead && reason.features && (
                                        <ul className="flex flex-wrap gap-2 mt-4">
                                            {reason.features.map((feature, fidx) => (
                                                <li
                                                    key={fidx}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-semibold"
                                                    style={{ color: "var(--secondary-text)" }}
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-indigo-text)" }} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats: a plain row under a thin line, 2×2 on phones */}
                {whyStats.length > 0 && (
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-12 md:mt-16 pt-8 border-t border-[var(--border-color)] text-center">
                        {whyStats.map((stat) => (
                            <div key={stat.label} className="flex flex-col-reverse gap-1">
                                <dt className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</dt>
                                <dd className="text-2xl md:text-4xl font-bold" style={{ color: "var(--accent-indigo-text)" }}>{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                )}

                {whyCta && (
                    <div className="mt-12 md:mt-16 text-center px-0 sm:px-8">
                        {whyCta.title && (
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                {whyCta.title}
                            </h3>
                        )}
                        {whyCta.text && (
                            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                {whyCta.text}
                            </p>
                        )}
                        <Link
                            href={whyCta.href ?? "/contact"}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#4f46e5] to-[#4338ca] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {whyCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

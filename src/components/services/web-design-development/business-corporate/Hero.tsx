import { ArrowRight, Home, ChevronRight, Building2, Handshake, Award, Users, Globe, Briefcase, Palette, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const hero: HeroData = {
    crumb: "Business & Corporate",
    badge: "Business & Corporate Websites",
    badgeIcon: Building2,
    // 13px under 360px so the pill stays one centred line at 320
    badgeClass: "text-[13px] min-[360px]:text-sm font-semibold whitespace-nowrap",
    title: <span style={{ color: "var(--accent-orange-text)" }}>Establish Digital Authority</span>,
    tagline: (
        <>
            Build a <span style={{ color: "var(--accent-orange-text)", fontWeight: 700 }}>professional corporate website</span> that communicates trust, credibility, and brand excellence to stakeholders, investors, and clients.
        </>
    ),
    taglineClass: "text-lg md:text-xl",
    cta: { href: "/contact", label: "Build Your Corporate Website" },
    image: {
        src: "/images/services-images/web-design-development/business-corporate.svg",
        alt: "Business and Corporate Website Development",
    },
};

const features: HeroFeature[] = [
    { icon: Handshake, text: "Trust Building" },
    { icon: Award, text: "Brand Authority", href: "/services/web-design-development/branding-services" },
    { icon: Users, text: "Stakeholder Focus" },
    { icon: Globe, text: "Global Reach" },
    { icon: Briefcase, text: "Enterprise Ready" },
    { icon: Palette, text: "Premium Design", href: "/services/web-design-development" },
];

const stats: HeroStat[] = [
    { value: "Proven", label: "Corporate Sites Built" },
    { value: "Fortune", label: "500 Clients Served" },
    { value: "99%", label: "High Availability" },
];

const chips: HeroChip[] = [
    { icon: ShieldCheck, text: "ISO 27001" },
    { icon: Award, text: "Award Winner" },
    { icon: Briefcase, text: "Enterprise" },
];

const metrics: HeroMetrics = null;

type HeroData = {
    crumb: string;
    badge: string;
    badgeIcon: LucideIcon;
    badgeClass: string;
    title: ReactNode;
    tagline: ReactNode;
    taglineClass: string;
    taglineExtra?: ReactNode;
    cta: { href: string; label: string };
    image: { src: string; alt: string };
    // override the long-label list layout (measured per page)
    longLabels?: boolean;
    // a hero with a lot of text can use the 60/40 split (playbook rule 9)
    gridClass?: string;
    // long labels but a wide (60/40) text column: three columns from xl again
    listXl3?: boolean;
};
type HeroFeature = { icon: LucideIcon; text: string; href?: string };
type HeroStat = { value: string; label: string };
type HeroChip = { text: string; icon?: LucideIcon; logo?: string; href?: string };
type HeroMetrics = { title: string; items: { value?: string; icon?: LucideIcon; label: string }[] } | null;

export default function Hero() {
    const BadgeIcon = hero.badgeIcon;
    // Labels longer than 17 characters ("Appointment Booking") don't fit two columns at
    // 320 or three columns in the 1280 hero: one column below 360px and two from xl.
    const longLabels = hero.longLabels ?? features.some((feature) => feature.text.length > 17);
    const listClass = longLabels && hero.listXl3
        ? "grid grid-cols-[auto] min-[360px]:grid-cols-[auto_auto] sm:grid-cols-[auto_auto_auto] lg:grid-cols-2 xl:grid-cols-3 w-fit lg:w-auto mx-auto lg:mx-0 gap-x-4 min-[360px]:gap-x-6 sm:gap-x-8 xl:gap-x-6 gap-y-3 mb-8 lg:mb-6"
        : longLabels
        ? "grid grid-cols-[auto] min-[360px]:grid-cols-[auto_auto] sm:grid-cols-[auto_auto_auto] lg:grid-cols-2 w-fit lg:w-auto mx-auto lg:mx-0 gap-x-4 min-[360px]:gap-x-6 sm:gap-x-8 gap-y-3 mb-8 lg:mb-6"
        : "grid grid-cols-[auto_auto] sm:grid-cols-[auto_auto_auto] lg:grid-cols-2 xl:grid-cols-3 w-fit lg:w-auto mx-auto lg:mx-0 gap-x-4 min-[360px]:gap-x-6 sm:gap-x-8 xl:gap-x-6 gap-y-3 mb-8 lg:mb-6";
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* From 1024px the hero is tighter (top 32px, 24px gaps, 44px heading) so the
                button shows without scrolling on common laptop screens */}
            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 lg:pt-8 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-1 text-[13px] min-[360px]:text-sm mb-5 lg:mb-3 justify-center lg:justify-start flex-wrap"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors px-1.5 py-2 min-[360px]:p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" aria-hidden="true" />
                        Home
                    </Link>
                    {/* Each › is kept with the item after it, so a wrap on phones never
                        leaves a › hanging at the end of a line */}
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4" aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
                        <Link
                            href="/services"
                            className="hover:underline transition-colors px-1.5 py-2 min-[360px]:p-2"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Services
                        </Link>
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4" aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
                        <Link
                            href="/services/web-design-development"
                            className="hover:underline transition-colors px-1.5 py-2 min-[360px]:p-2"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Web Design
                        </Link>
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4" aria-hidden="true" style={{ color: "var(--secondary-text)" }} />
                        <span
                            className="font-semibold px-1.5 py-2 min-[360px]:p-2"
                            style={{ color: "var(--accent-orange-text)" }}
                        >
                            {hero.crumb}
                        </span>
                    </span>
                </nav>

                <div className={hero.gridClass ?? "grid lg:grid-cols-2 gap-16 items-center"}>
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #f97316 8%, transparent), color-mix(in srgb, #ea580c 8%, transparent))",
                                borderColor: "color-mix(in srgb, #f97316 20%, transparent)",
                                color: "var(--accent-orange-text)",
                            }}
                        >
                            <BadgeIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                            <span className={hero.badgeClass}>{hero.badge}</span>
                        </div>

                        {/* Heading: solid text token (no gradient text). 30px on phones. */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold leading-tight mb-8 lg:mb-6">
                            {hero.title}
                        </h1>

                        {/* Tagline */}
                        <p className={`${hero.taglineClass} mb-8 lg:mb-6`} style={{ color: "var(--secondary-text)" }}>
                            {hero.tagline}
                        </p>
                        {hero.taglineExtra && (
                            <p className="text-base md:text-lg lg:text-base leading-relaxed mb-8 lg:mb-6" style={{ color: "var(--secondary-text)" }}>
                                {hero.taglineExtra}
                            </p>
                        )}

                        {/* Feature Highlights: a light icon list, no boxes, every label on one
                            line. Below lg the columns size to their content and the block is
                            centred (w-fit mx-auto), with every item starting at its column's
                            left edge, so the icons line up in straight columns. */}
                        <ul className={listClass}>
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <li
                                        key={feature.text}
                                        className="flex items-center justify-start gap-1.5 sm:gap-2 min-w-0"
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                                        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                            {feature.href ? (
                                                <Link href={feature.href} className="hover:underline">
                                                    {feature.text}
                                                </Link>
                                            ) : (
                                                feature.text
                                            )}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Stats: no box, just a thin line above. The columns take their
                            content's width, so no value is ever cut off. */}
                        <div className="grid grid-cols-[auto_auto_auto] justify-between gap-2 sm:gap-4 mb-8 lg:mb-6 pt-6 border-t border-[var(--border-color)]">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className={`text-lg sm:text-xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-1 leading-tight ${stat.value.includes(" ") ? "" : "whitespace-nowrap"}`} style={{ color: "var(--accent-orange-text)" }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button: a darker shade of the page colour so white text passes
                            4.5:1, no resting glow */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href={hero.cta.href}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-center bg-gradient-to-r from-[#c2410c] to-[#9a3412] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                            >
                                {hero.cta.label}
                                <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <Image
                            src={hero.image.src}
                            alt={hero.image.alt}
                            width={500}
                            height={400}
                            className="relative w-[90%] h-[90%] z-10 rounded-2xl"
                            priority
                        />

                        {chips.length > 0 && (
                            <div className="mt-12 flex flex-wrap gap-4 justify-center w-full z-10 relative">
                                {chips.map((chip) => {
                                    const ChipIcon = chip.icon;
                                    const inner = (
                                        <>
                                            {chip.logo ? (
                                                <Image src={chip.logo} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                                            ) : ChipIcon ? (
                                                <ChipIcon className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                                            ) : null}
                                            <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>{chip.text}</span>
                                        </>
                                    );
                                    return chip.href ? (
                                        <Link
                                            key={chip.text}
                                            href={chip.href}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#f97316]/30 transition-colors duration-200 hover:border-[#f97316] focus-visible:outline-none focus-visible:border-[#f97316]"
                                            style={{ backgroundColor: "var(--card-bg)" }}
                                        >
                                            {inner}
                                        </Link>
                                    ) : (
                                        <div
                                            key={chip.text}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#f97316]/30"
                                            style={{ backgroundColor: "var(--card-bg)" }}
                                        >
                                            {inner}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {metrics && (
                            <div className="mt-8 text-center w-full z-10 relative">
                                <p className="text-xs font-bold uppercase tracking-wider mb-4 opacity-70" style={{ color: "var(--foreground)" }}>{metrics.title}</p>
                                {/* Even grid: 2×2 and one row of 4 from 1440px (four items), or one row of 3 */}
                                <div className={metrics.items.length === 4 ? "grid grid-cols-2 min-[1440px]:grid-cols-4 gap-3" : metrics.items.length === 2 ? "grid grid-cols-2 gap-3" : "grid grid-cols-3 gap-3"}>
                                    {metrics.items.map((item) => {
                                        const ItemIcon = item.icon;
                                        return (
                                            <div
                                                key={item.label}
                                                className="flex flex-col items-center px-3 py-2 rounded-lg"
                                                style={{ backgroundColor: "color-mix(in srgb, #f97316 10%, transparent)" }}
                                            >
                                                {ItemIcon ? (
                                                    <ItemIcon className="w-5 h-5 my-1" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                                                ) : (
                                                    <span className="text-xl font-bold" style={{ color: "var(--accent-orange-text)" }}>{item.value}</span>
                                                )}
                                                <span className="text-xs" style={{ color: "var(--secondary-text)" }}>{item.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

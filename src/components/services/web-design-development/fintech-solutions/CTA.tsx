import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// No tinted card; the six tick tiles became a centred tick list (two link to their
// pages), and the outline "Book a Demo" button went to the same /contact page.
const cta: CtaData = {
    title: "Building the Future of Finance?",
    text: "Let's build a secure, compliant, and high-performance financial platform that scales with your ambition.",
    label: "Start FinTech Project",
    href: "/contact",
    checks: [
        "Secure Banking Tech",
        "Payment Processors",
        <Link key="investment" href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline">Investment Platforms</Link>,
        "Blockchain Solutions",
        <Link key="mobile" href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">Mobile Finance Apps</Link>,
        "Regulatory Compliance",
    ],
};

type CtaData = {
    pill?: string;
    pillIcon?: LucideIcon;
    title: ReactNode;
    text: ReactNode;
    label: string;
    href: string;
    note?: ReactNode;
    stats?: { value: string; label: string }[];
    checks?: ReactNode[];
};

export default function CTA() {
    const PillIcon = cta.pillIcon;
    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20">
                {/* No tint, glow or border: the content sits on the page's own
                    background. On phones the inner side padding is 0 so the content
                    matches every other section's width; from 640px px-6 / md:px-16. */}
                <div className="relative px-0 sm:px-6 md:px-16 text-center">
                    {/* Badge */}
                    {cta.pill && PillIcon && (
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #0ea5e9 8%, transparent), color-mix(in srgb, #38bdf8 8%, transparent))",
                            borderColor: "color-mix(in srgb, #0ea5e9 20%, transparent)",
                            color: "var(--accent-sky-text)",
                        }}
                    >
                        <PillIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm font-semibold text-center">{cta.pill}</span>
                    </div>
                    )}

                    {/* Heading: solid text token, no gradient text */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--accent-sky-text)" }}>
                        {cta.title}
                    </h2>

                    <p className="text-base md:text-xl max-w-3xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        {cta.text}
                    </p>

                    {/* What the project covers: a tick list, centred as a block */}
                    {cta.checks && (
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 w-fit max-w-full mx-auto mb-10 text-left">
                            {cta.checks.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-base" style={{ color: "var(--foreground)" }}>
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href={cta.href}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 rounded-2xl text-sm md:text-base font-bold bg-gradient-to-r from-[#006d97] to-[#00557a] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {cta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                    </div>

                    {/* Stats: one row per stat below lg (value left, label right), a
                        centred row from lg */}
                    {cta.stats && (
                        <dl className="mt-10 max-w-md lg:max-w-none mx-auto divide-y lg:divide-y-0 divide-[var(--border-color)] lg:flex lg:justify-center lg:gap-16">
                            {cta.stats.map((stat) => (
                                <div key={stat.label} className="flex items-baseline justify-between gap-4 py-3 last:pb-0 lg:flex-col lg:items-center lg:gap-1 lg:py-0">
                                    <dt className="order-2 lg:order-none text-xs sm:text-sm text-right lg:text-center" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </dt>
                                    <dd className="order-1 lg:-order-1 text-2xl lg:text-4xl font-bold whitespace-nowrap" style={{ color: "var(--accent-sky-text)" }}>
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    {cta.note && (
                        <p className="mt-8 text-sm md:text-base" style={{ color: "var(--secondary-text)" }}>
                            {cta.note}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

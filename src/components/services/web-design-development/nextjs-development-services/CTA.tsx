import { Fragment } from "react";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const trust = [
    { value: "Proven", label: "React Projects" },
    { value: "Expert", label: "Next.js Experience" },
    { value: "100", label: "Avg. Lighthouse Score" },
];

export default function CTA() {
    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#61dafb 1px, transparent 1px), linear-gradient(90deg, #61dafb 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* No tint, overlay or border: the content sits on the page's own
                    background. Side padding kept, top/bottom padding dropped. */}
                <div className="relative px-6 sm:px-10 md:px-16">
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #61dafb 15%, transparent), color-mix(in srgb, #00d4ff 10%, transparent))",
                                borderColor: "color-mix(in srgb, #61dafb 40%, transparent)",
                            }}
                        >
                            <Terminal className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                            <span className="text-sm font-semibold font-mono" style={{ color: "var(--accent-cyan-text)" }}>
                                npx create-next-app
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Global Reach &{" "}
                            <span
                                style={{ color: "var(--accent-cyan-text)" }}
                            >
                                Niche Expertise
                            </span>
                        </h2>

                        <p
                            className="text-base md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            We are proud to serve as a leading Next.js development agency and React JS development company for clients across the USA, UK, Canada, Australia, and the Middle East. Beyond general web development, we have deep niche expertise in <Link href="/services/web-design-development/real-estate-platforms" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Real Estate</Link>, <Link href="/services/web-design-development/fintech-solutions" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Fintech</Link>, <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">SaaS</Link>, and <Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">Healthcare</Link>, providing tailor-made React development services that address the unique challenges of your industry.
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-2xl focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                    color: "#000000",
                                }}
                            >
                                <span>Book Your Free Next.js Strategy Session Today</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                        </div>

                        {/* Trust indicators. Below lg: one compact row per item, value
                            left and label right, divided by thin lines (as on the
                            ChimeGenius CTA). From lg: the centred row with dividers. */}
                        <div className="mt-12 pt-2 lg:pt-0 border-t lg:border-t-0 flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-8" style={{ borderColor: "var(--border-color)" }}>
                            {trust.map((item, i) => (
                                <Fragment key={item.label}>
                                    {i > 0 && (
                                        <div
                                            className="hidden lg:block w-px h-8"
                                            style={{ backgroundColor: "var(--border-color)" }}
                                        />
                                    )}
                                    <div
                                        className={`flex items-baseline justify-between gap-4 py-3 lg:block lg:py-0 lg:text-center ${i > 0 ? "border-t lg:border-t-0" : ""}`}
                                        style={{ borderColor: "var(--border-color)" }}
                                    >
                                        <div
                                            className="text-xl lg:text-2xl font-bold font-mono whitespace-nowrap"
                                            style={{ color: "var(--accent-cyan-text)" }}
                                        >
                                            {item.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-right lg:text-center" style={{ color: "var(--secondary-text)" }}>
                                            {item.label}
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

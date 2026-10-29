import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, #61dafb, #00d4ff, transparent)",
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#61dafb 1px, transparent 1px), linear-gradient(90deg, #61dafb 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
                {/* Floating elements */}
                <div
                    className="absolute top-20 left-20 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: "#61dafb", animationDelay: "0s" }}
                />
                <div
                    className="absolute top-40 right-32 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#00d4ff", animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#61dafb", animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-20 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#00d4ff", animationDelay: "1.5s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative p-6 sm:p-10 md:p-16 rounded-3xl border-2 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #61dafb 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #61dafb 40%, var(--border-color))",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                        }}
                    />

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
                            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Global Reach &{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
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
                                className="group inline-flex items-center justify-center text-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                    color: "#000000",
                                    boxShadow: "0 8px 32px rgba(97, 218, 251, 0.4)",
                                }}
                            >
                                <span className="max-w-[200px] sm:max-w-none">Book Your Free Next.js Strategy Session Today</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    100+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    React Projects
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Expert
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Next.js Experience
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    100
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Avg. Lighthouse Score
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

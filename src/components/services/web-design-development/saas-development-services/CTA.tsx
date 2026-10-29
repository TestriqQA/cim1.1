import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Main CTA Card */}
                <div
                    className="relative rounded-3xl p-6 md:p-16 border text-center overflow-hidden"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Glow Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            opacity: 0.1,
                            background: "linear-gradient(135deg, #008ac1, var(--brand-cyan), #bc3feb)",
                            filter: "blur(30px)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #008ac1 8%, transparent), color-mix(in srgb, #bc3feb 8%, transparent))",
                                borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
                                color: "var(--brand-blue-text)",
                            }}
                        >
                            <Code2 className="w-4 h-4" />
                            <span className="text-sm font-semibold">Start Building Your Product</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #008ac1, var(--brand-cyan), #bc3feb)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Ready to Build Your SaaS Product?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-xl max-w-3xl mx-auto mb-12" style={{ color: "var(--secondary-text)" }}>
                            Transform Your Idea Into a Revenue-Generating Platform. Partner with a SaaS development company that's delivered 50+ successful SaaS products across <Link href="/services/web-design-development/fintech-solutions" className="underline text-[var(--brand-blue-text)]">fintech</Link>, <Link href="/services/web-design-development/healthcare-portals" className="underline text-[var(--brand-blue-text)]">healthcare</Link>, and <Link href="/services/web-design-development/ecommerce-development-company" className="underline text-[var(--brand-blue-text)]">e-commerce</Link> sectors.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm md:text-base font-bold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Book Your Free SaaS Strategy Call
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>

                        </div>

                        {/* Bottom Text */}
                        <p className="mt-8" style={{ color: "var(--secondary-text)", fontSize: "0.95rem" }}>
                            Or call us directly: +91 9004988859 / +91 7700995410 (Available 10 AM - 7 PM IST)
                        </p>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            number: "50+",
                            label: "SaaS Products Built",
                        },
                        {
                            number: "1M+",
                            label: "End Users Served",
                        },
                        {
                            number: "High",
                            label: "Uptime SLA",
                        },
                    ].map((indicator, idx) => (
                        <div key={idx}>
                            <div
                                className="text-4xl font-bold mb-2"
                                style={{
                                    background: "linear-gradient(90deg, #008ac1, #bc3feb)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {indicator.number}
                            </div>
                            <p style={{ color: "var(--secondary-text)" }}>{indicator.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

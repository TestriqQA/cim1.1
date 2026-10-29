import { ArrowRight, Lock, TrendingUp, Smartphone, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const features = [
        "Secure Banking Tech",
        "Payment Processors",
        <Link href="/services/web-design-development/saas-development-services" className="hover:underline">Investment Platforms</Link>,
        "Blockchain Solutions",
        <Link href="/services/mobile-app-development" className="hover:underline">Mobile Finance Apps</Link>,
        "Regulatory Compliance",
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="rounded-3xl p-6 md:p-12 lg:p-16 border overflow-hidden relative"
                    style={{
                        background: "color-mix(in srgb, #0ea5e9 8%, var(--card-bg))",
                        borderColor: "color-mix(in srgb, #0ea5e9 30%, var(--border-color))",
                    }}
                >
                    {/* Decorative icons */}
                    <div className="absolute top-8 right-8 opacity-10">
                        <Lock className="w-32 h-32" style={{ color: "#0ea5e9" }} />
                    </div>
                    <div className="absolute bottom-8 left-8 opacity-10">
                        <TrendingUp className="w-24 h-24" style={{ color: "#0ea5e9" }} />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                Building the Future of <span style={{ color: "var(--accent-sky-text)" }}>Finance</span>?
                            </h2>

                            <p className="text-base md:text-xl mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Let's build a secure, compliant, and high-performance financial platform that scales with your ambition.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                                    style={{ backgroundColor: "var(--brand-blue-btn)" }}
                                >
                                    Start FinTech Project
                                    <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg border transition-all duration-300 hover:scale-105"
                                    style={{
                                        borderColor: "#0ea5e9",
                                        color: "var(--brand-blue-text)",
                                    }}
                                >
                                    <Smartphone className="w-5 h-5 flex-shrink-0" />
                                    Book a Demo
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#0ea5e9" }} />
                                    <span className="font-medium" style={{ color: "var(--foreground)" }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

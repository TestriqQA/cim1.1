import { ArrowRight, Building, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #0d9488 10%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #14b8a6 10%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="text-center p-6 md:p-16 rounded-3xl border relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, #0d9488 5%, var(--card-bg)), color-mix(in srgb, #14b8a6 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #0d9488 20%, var(--border-color))",
                    }}
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-6 left-6">
                        <Building className="w-8 h-8 opacity-20" style={{ color: "#0d9488" }} />
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <Sparkles className="w-8 h-8 opacity-20" style={{ color: "#14b8a6" }} />
                    </div>

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, #0d9488 10%, transparent), color-mix(in srgb, #14b8a6 10%, transparent))",
                            borderColor: "color-mix(in srgb, #0d9488 30%, transparent)",
                        }}
                    >
                        <Building className="w-4 h-4" style={{ color: "#0d9488" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                            Ready to Transform Your Real Estate Business?
                        </span>
                    </div>

                    <h2
                        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Let&apos;s Build Your{" "}
                        <Link href="/services/web-design-development" className="hover:underline">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Property Platform
                            </span>
                        </Link>
                    </h2>

                    <p
                        className="text-base md:text-xl mb-8 max-w-2xl mx-auto"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From listing portals to enterprise brokerage platforms, we create digital
                        experiences that capture leads and close deals.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                            }}
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 flex-shrink-0" />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg border transition-all duration-300 hover:scale-105"
                            style={{
                                borderColor: "var(--border-color)",
                                color: "var(--foreground)",
                            }}
                        >
                            Schedule a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

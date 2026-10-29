import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        backgroundColor: "color-mix(in srgb, #ec4899 8%, transparent)",
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="p-6 md:p-16 rounded-3xl border text-center relative overflow-hidden"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Gradient Border Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl opacity-20"
                        style={{
                            background: "linear-gradient(135deg, #a855f7 0%, transparent 50%, #ec4899 100%)",
                        }}
                    />

                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div
                                className="p-4 rounded-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                }}
                            >
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Ready to Launch Your Next <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Big Media Asset?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Don&apos;t let technical debt hold back your editorial potential. Partner with a Blogs & News Portals Development agency that understands the rhythm of the news cycle.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    boxShadow: "0 8px 20px -4px rgba(168, 85, 247, 0.4)",
                                }}
                            >
                                <span style={{ color: "inherit" }}>Start Your Project</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-sm sm:text-base md:text-lg border transition-all duration-300 hover:bg-violet-500/5"
                                style={{
                                    borderColor: "#a855f7",
                                    color: "var(--brand-purple-text)",
                                }}
                            >
                                Schedule a Consultation
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-10 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
                            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "var(--secondary-text)" }}>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    Free Consultation
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                                    Custom Solutions
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                                    Ongoing Support
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

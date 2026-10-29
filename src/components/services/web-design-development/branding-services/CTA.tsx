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
                        backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        backgroundColor: "color-mix(in srgb, #0891b2 8%, transparent)",
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
                            background: "linear-gradient(135deg, #06b6d4 0%, transparent 50%, #0891b2 100%)",
                        }}
                    />

                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div
                                className="p-4 rounded-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                }}
                            >
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Ready to Build Your{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Dream Portfolio?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Don't let another opportunity slip by. Your future clients and employers are googling you right now - what will they find? Take control of your digital destiny.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                    boxShadow: "0 8px 20px -4px rgba(6, 182, 212, 0.4)",
                                }}
                            >
                                <span style={{ color: "inherit" }}>Book Your Free Brand Audit</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg border transition-all duration-300 hover:bg-cyan-500/5"
                                style={{
                                    borderColor: "#06b6d4",
                                    color: "var(--accent-cyan-text)",
                                }}
                            >
                                Create a Legacy
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-10 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
                            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "var(--secondary-text)" }}>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    Build Your Brand
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Own Your Future
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                                    <Link href="/about" className="hover:underline text-inherit">World&apos;s Leading Agency</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { ArrowRight, Heart, Sparkles } from "lucide-react";
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
                    style={{ backgroundColor: "color-mix(in srgb, #3b82f6 10%, transparent)" }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #6366f1 10%, transparent)", animationDelay: "1s" }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="text-center p-6 md:p-16 rounded-3xl border relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, #3b82f6 5%, var(--card-bg)), color-mix(in srgb, #6366f1 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #3b82f6 20%, var(--border-color))",
                    }}
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-6 left-6">
                        <Heart className="w-8 h-8 opacity-20" style={{ color: "#3b82f6" }} />
                    </div>
                    <div className="absolute bottom-6 right-6">
                        <Sparkles className="w-8 h-8 opacity-20" style={{ color: "#6366f1" }} />
                    </div>

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, #3b82f6 10%, transparent), color-mix(in srgb, #6366f1 10%, transparent))",
                            borderColor: "color-mix(in srgb, #3b82f6 30%, transparent)",
                        }}
                    >
                        <Heart className="w-4 h-4" style={{ color: "#3b82f6" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Ready to Transform Healthcare Delivery?
                        </span>
                    </div>

                    <h2
                        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Let&apos;s Build Your{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                                WebkitBackgroundClip: "text",
                            }}
                        >
                            Healthcare Platform
                        </span>
                    </h2>

                    <p
                        className="text-base md:text-xl mb-8 max-w-2xl mx-auto"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From patient portals to telehealth platforms, we create secure <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline">healthcare solutions</Link> that improve outcomes and enhance the patient experience.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                            style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg border transition-all duration-300 hover:scale-105"
                            style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                        >
                            Schedule a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

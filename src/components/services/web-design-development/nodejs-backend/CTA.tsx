import { ArrowRight, Server } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#339933 1px, transparent 1px), linear-gradient(90deg, #339933 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* No tint, overlay or border: the content sits on the page's own
                    background. Side padding kept, top/bottom padding dropped. The
                    hero's three stats are not repeated here (shown once, in the hero). */}
                <div className="relative px-6 md:px-16">
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #339933 15%, transparent), color-mix(in srgb, #68a063 10%, transparent))",
                                borderColor: "color-mix(in srgb, #339933 40%, transparent)",
                            }}
                        >
                            <Server className="w-4 h-4" aria-hidden="true" style={{ color: "#339933" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                                Free Consultation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Ready to{" "}
                            <span style={{ color: "var(--accent-green-text)" }}>
                                <Link href="/services/web-design-development/saas-development-services" className="hover:underline decoration-[#339933] underline-offset-4">
                                    Scale Your Backend
                                </Link>
                            </span>
                            ?
                        </h2>

                        <p
                            className="text-base md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Whether you&apos;re building from scratch or scaling existing systems,
                            let&apos;s discuss how we can help power your application.
                        </p>

                        {/* CTA Button: same green and hover as the hero button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-2xl focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #2B7F2B, #215732)",
                                    color: "#ffffff",
                                }}
                            >
                                Start Your Backend Project
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import { ArrowRight, MessagesSquare } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* No glow, border or shadow: the content sits on the page's own
                    background. Side padding kept, top/bottom padding dropped. */}
                <div className="px-6 md:px-12 text-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 212, 59, 0.1), rgba(240, 196, 25, 0.1))",
                            border: "1px solid rgba(255, 212, 59, 0.3)",
                        }}
                    >
                        <MessagesSquare className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-amber-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                            Free Django Consultation
                        </span>
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Build Your Next Project with{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Python & Django
                        </span>
                    </h2>

                    <p
                        className="text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Whether you&apos;re building a new product or scaling an existing one,
                        let&apos;s discuss how Python can power your vision.
                    </p>

                    {/* CTA Button: same gradient and hover as the hero button */}
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        style={{
                            background: "linear-gradient(135deg, #306998, #1E4D7A)",
                        }}
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

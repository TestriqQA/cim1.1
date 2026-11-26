import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20">
                {/* No tint, glow or border: the content sits on the page's own
                    background; top/bottom padding dropped. On phones the inner side
                    padding is 0 so the content matches every other section's width
                    (it was 48px a side); from 640px it keeps px-6 / md:px-16. The
                    trust stats that repeated the hero's are gone (shown once). */}
                <div className="relative px-0 sm:px-6 md:px-16 text-center">
                    <div className="relative z-10">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #00b5ca 8%, transparent), color-mix(in srgb, #00efd6 8%, transparent))",
                                borderColor: "color-mix(in srgb, #00b5ca 20%, transparent)",
                                color: "var(--accent-cyan-text)",
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm font-semibold">Start Selling Online</span>
                        </div>

                        {/* Heading: the cyan text token (the old gradient was 1.3–2.2:1 on the light page) */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--accent-cyan-text)" }}>
                            Ready to Launch Your High-Converting Store?
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-xl max-w-3xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                            Don&apos;t settle for a generic template. Partner with a global Ecommerce Agency that delivers quantifiable results.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 rounded-2xl text-sm md:text-base font-bold bg-gradient-to-r from-[#0e7490] to-[#155e75] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                            >
                                Book Your Free Strategy Call Today
                                <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

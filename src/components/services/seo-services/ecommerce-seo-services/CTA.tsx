"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[500px] opacity-10"
                    style={{
                        background: `radial-gradient(ellipse at bottom, ${commerceBlue}, transparent 70%)`
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20 text-center"
                    style={{
                        background: "linear-gradient(180deg, var(--card-bg) 0%, var(--background) 100%)",
                        borderColor: "var(--border-color)"
                    }}
                >
                    <div className="absolute top-10 left-10 opacity-5 animate-bounce delay-1000 duration-[3000ms]">
                        <ShoppingBag className="w-16 h-16" style={{ color: commerceBlue }} />
                    </div>
                    <div className="absolute bottom-10 right-10 opacity-5 animate-bounce delay-500 duration-[4000ms]">
                        <ShoppingBag className="w-24 h-24" style={{ color: commerceBlue }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready To Scale Your <br />
                        <span style={{ color: "var(--accent-sky-text)" }}>Online Revenue?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4" style={{ color: "var(--secondary-text)" }}>
                        Don&apos;t leave sales on the table. Partner with an <Link href="/about" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>ecommerce SEO agency</Link> that delivers measurable ROI, not vanity metrics.
                    </p>

                    <p className="text-base md:text-lg max-w-2xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Get Your Free E-commerce SEO Audit and discover: <br />
                        ✓ Technical issues blocking your product pages from ranking <br />
                        ✓ Keyword opportunities your competitors are missing <br />
                        ✓ Revenue potential from untapped search traffic <br />
                        ✓ Custom roadmap to double your organic sales
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: "#0369a1",
                                boxShadow: `0 4px 20px ${commerceBlue}40`
                            }}
                        >
                            Get Free Ecommerce Audit
                            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                    </div>

                    <div className="text-center" style={{ color: "var(--secondary-text)" }}>
                        <p className="text-sm mb-2">Contact us today:</p>
                        <p className="text-base font-semibold">
                            Email: <a href="mailto:contact@cinuteinfomedia.com" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>contact@cinuteinfomedia.com</a>
                        </p>
                        <p className="text-base font-semibold">
                            Phone: <a href="tel:+919004988859" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>+91 9004988859</a> | <a href="tel:+917700995410" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>+91 7700995410</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

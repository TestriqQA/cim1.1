"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const amazonOrange = "#FF9900";
    const amazonBlue = "#232F3E";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
                    style={{ backgroundColor: amazonOrange }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
                    style={{ backgroundColor: amazonBlue }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10 text-center">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20"
                    style={{
                        background: `linear-gradient(135deg, ${amazonBlue}10, ${amazonOrange}05)`,
                        borderColor: "var(--border-color)"
                    }}
                >
                    <div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-lg animate-bounce"
                        style={{ backgroundColor: amazonOrange, color: amazonBlue }}
                    >
                        <ShoppingCart className="w-10 h-10" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Ready to <span style={{ color: "var(--accent-orange-text)" }}>Scale Sales?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Join the agencies and brands generating millions in revenue on Amazon.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-xl group"
                            style={{
                                backgroundColor: "#FFD814", // Buy Box Yellow
                                color: "#111",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                            }}
                        >
                            Start Selling More
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

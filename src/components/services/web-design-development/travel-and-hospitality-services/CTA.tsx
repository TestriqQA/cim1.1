import { Plane, ArrowRight, Calendar, Globe, CreditCard, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const features = [
        { icon: Calendar, text: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Custom Booking Engines</Link> },
        { icon: Globe, text: "GDS/OTA Integration" },
        { icon: CreditCard, text: "Secure Global Payments" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div
                    className="relative p-8 md:p-12 rounded-3xl border overflow-hidden"
                    style={{
                        background: "color-mix(in srgb, #0d9488 10%, var(--card-bg))",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 opacity-10">
                        <Plane className="w-64 h-64 -rotate-12" style={{ color: "#0d9488" }} />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ color: "var(--foreground)" }}
                        >
                            Ready to Pioneer the Future of{" "}
                            <span style={{ color: "var(--accent-teal-text)" }}>Travel and Hospitality</span>?
                        </h2>

                        <p
                            className="text-lg mb-8"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Transform your operations, delight your guests, and drive unprecedented growth with our expert Travel and Hospitality Services. Whether you're looking for custom development or a complete digital overhaul, Cinute Infomedia is your partner in innovation. Contact us today for a free consultation and let's build something extraordinary together.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            border: "1px solid var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: "#0d9488" }} />
                                        <span
                                            className="text-sm font-medium"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: "var(--accent-teal-btn)" }}
                            >
                                Get Your Free Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:scale-105"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

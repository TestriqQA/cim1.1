import { CreditCard, TrendingUp, ShieldCheck, Landmark, Smartphone, Globe, ArrowRight, Wallet } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const deliverables = [
        { icon: Smartphone, title: <Link href="/services/mobile-app-development" className="hover:underline">Mobile Banking Apps</Link>, description: "Native iOS & Android apps with biometric security and seamless UX" },
        { icon: CreditCard, title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Payment Processing</Link>, description: "Secure gateways supporting global currencies and crypto" },
        { icon: TrendingUp, title: "Wealth Management", description: "Robo-advisory, portfolio tracking, and trading interfaces" },
        { icon: ShieldCheck, title: <Link href="/services/ai-workflows-automations-services" className="hover:underline">Fraud Detection</Link>, description: "AI-driven risk assessment and transaction monitoring" },
        { icon: Landmark, title: "Core Banking", description: "Modern ledger systems and API-first banking infrastructure" },
        { icon: Globe, title: "Cross-Border Payments", description: "Low-latency international transfer networks" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
                            FinTech Platforms That{" "}
                            <span style={{ color: "var(--accent-sky-text)" }}>Drive Innovation</span>
                        </h2>

                        <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We build comprehensive financial technology systems inspired by industry leaders
                            like Stripe, Revolut, and Robinhood. Our platforms combine powerful
                            secure transaction processing with engaging user experiences.
                        </p>

                        <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            From neobanks to blockchain exchanges and insurtech solutions,
                            we deliver architectures that scale with your financial mission and ensure
                            absolute regulatory compliance.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: "var(--brand-blue-btn)" }}
                        >
                            Start Your FinTech Build
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right Content - Deliverables */}
                    <div>
                        <h3 className="text-xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            What We Deliver
                        </h3>

                        <div className="grid gap-4">
                            {deliverables.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                        style={{
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: "#0ea5e9" }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                                {item.title}
                                            </h4>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

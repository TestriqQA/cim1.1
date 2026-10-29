"use client";

import Link from "next/link";
import { Check, Wallet, Users, Zap, Award } from "lucide-react";

export default function WhyChooseUs() {
    const msBlue = "#0078D4";

    const reasons = [
        {
            title: "Lower CPCs",
            description: "Often 30-40% lower cost-per-click compared to Google Ads, maximizing your budget efficiency.",
            icon: Wallet,
        },
        {
            title: "Higher Purchasing Power",
            description: "Microsoft Search Network users tend to have higher household incomes and spend more online.",
            icon: Users,
        },
        {
            title: "Less Competition",
            description: "Gain visibility in a less saturated marketplace, achieving better ad positions for your keywords.",
            icon: Zap,
        },
        {
            title: <Link href="/services/performance-marketing" className="hover:text-[var(--primary)] transition-colors">Exclusive Partners</Link>,
            description: "Ads appear on trusted sites like Wall Street Journal, AOL, and InfoSpace.",
            icon: Award,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: `${msBlue}15`,
                                borderColor: `${msBlue}40`,
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: msBlue }} />
                            <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                                Why Choose Microsoft
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "var(--foreground)" }}>
                            Why Choose{" "}
                            <span
                                style={{ color: "var(--brand-blue-text)" }}
                            >
                                Microsoft?
                            </span>
                        </h2>
                        <div className="space-y-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div
                                        className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            border: "1px solid var(--border-color)",
                                            boxShadow: `0 4px 20px ${msBlue}10`
                                        }}
                                    >
                                        <reason.icon className="w-7 h-7" style={{ color: msBlue }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                            {reason.title}
                                        </h3>
                                        <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Visual/Stats */}
                    <div className="relative">
                        <div
                            className="relative rounded-2xl overflow-hidden border p-8 md:p-12"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                background: `linear-gradient(135deg, ${msBlue}05, transparent)`
                            }}
                        >
                            <div className="space-y-6">
                                {/* Stat Bar 1 */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold" style={{ color: "var(--foreground)" }}>Market Share (Desktop)</span>
                                        <span className="font-bold" style={{ color: "var(--brand-blue-text)" }}>24%</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <div className="h-full rounded-full w-[24%]" style={{ backgroundColor: msBlue }} />
                                    </div>
                                </div>

                                {/* Stat Bar 2 */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold" style={{ color: "var(--foreground)" }}>Avg. CPC Savings</span>
                                        <span className="font-bold" style={{ color: "var(--accent-green-text)" }}>Lower</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <div className="h-full rounded-full w-[35%]" style={{ backgroundColor: "#107C10" }} />
                                    </div>
                                </div>

                                {/* Stat Bar 3 */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold" style={{ color: "var(--foreground)" }}>Audience Reach</span>
                                        <span className="font-bold" style={{ color: "var(--accent-orange-text)" }}>60M+</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <div className="h-full rounded-full w-[85%]" style={{ backgroundColor: "#D83B01" }} />
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-12 flex items-center justify-center gap-2 text-sm font-medium opacity-80" style={{ color: "var(--secondary-text)" }}>
                                <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                                    <Check className="w-4 h-4" />
                                </div>
                                Trusted by Global Enterprises
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

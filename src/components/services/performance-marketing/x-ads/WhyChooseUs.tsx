"use client";

import { Users, TrendingUp, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const xBlue = "#1D9BF0";

    const reasons = [
        {
            title: "Exclusive Audience",
            description: "Reach influential users who aren't active on other social platforms.",
            icon: Users,
        },
        {
            title: "#1 for Discovery",
            description: "X is the primary source for breaking news and product launches.",
            icon: TrendingUp,
        },
        {
            title: "Brand Safety",
            description: "Advanced controls to ensure your ads appear in safe contexts.",
            icon: ShieldCheck,
        },
        {
            title: "High Velocity",
            description: "The fastest way to spread a message globally.",
            icon: Zap,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t border-gray-400 dark:border-gray-800"
            style={{
                backgroundColor: "var(--background)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Content */}
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: `${xBlue}15`,
                                borderColor: `${xBlue}40`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: xBlue }} />
                            <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                                The X Factor
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: "var(--foreground)" }}>
                            The X Factor
                        </h2>
                        <div className="space-y-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div
                                        className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 border group-hover:bg-blue-500/10"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)"
                                        }}
                                    >
                                        <reason.icon className="w-7 h-7" style={{ color: "var(--foreground)" }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-[var(--brand-blue-text)]" style={{ color: "var(--foreground)" }}>
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
                            className="relative rounded-3xl overflow-hidden border p-8 md:p-12 backdrop-blur-xl"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <div className="space-y-8">
                                {/* Stat Block 1 */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold" style={{ color: "var(--secondary-text)" }}>Brand Follower Growth</span>
                                        <span className="font-bold" style={{ color: "var(--foreground)" }}>Higher</span>
                                    </div>
                                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--muted-bg)" }}>
                                        <div className="h-full rounded-full w-[28%]" style={{ backgroundColor: "var(--foreground)" }} />
                                    </div>
                                </div>

                                {/* Stat Block 2 */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold" style={{ color: "var(--secondary-text)" }}>Launch Awareness</span>
                                        <span className="font-bold" style={{ color: "var(--foreground)" }}>Higher</span>
                                    </div>
                                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--muted-bg)" }}>
                                        <div className="h-full rounded-full w-[45%] bg-blue-500" />
                                    </div>
                                </div>

                                {/* Stat Block 3 */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold" style={{ color: "var(--secondary-text)" }}>Video Completion Rate</span>
                                        <span className="font-bold" style={{ color: "var(--foreground)" }}>High</span>
                                    </div>
                                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--muted-bg)" }}>
                                        <div className="h-full rounded-full w-[90%] bg-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div
                                className="mt-12 p-4 rounded-xl border flex items-center gap-4"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)"
                                }}
                            >
                                <div className="p-2 rounded-full bg-green-500/20 text-green-500">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold" style={{ color: "var(--foreground)" }}>GARM Safety Standards</p>
                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>Certified Brand Safety Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

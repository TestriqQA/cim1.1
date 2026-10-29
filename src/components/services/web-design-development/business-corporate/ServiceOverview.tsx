import { Building2, Target, TrendingUp, Users, FileText, Globe } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #f97316 8%, transparent), color-mix(in srgb, #ea580c 8%, transparent))",
                            borderColor: "color-mix(in srgb, #f97316 20%, transparent)",
                            color: "var(--accent-orange-text)",
                        }}
                    >
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "var(--accent-orange-text)" }}>Digital Headquarters</span> for Business Excellence
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #f97316, #ea580c)",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            A <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-orange-text)", fontWeight: 700 }}>corporate website</Link> is more than a digital brochure-it's the foundation of your organization's online identity and the first impression for investors, partners, and potential clients.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We specialize in creating sophisticated digital platforms for established businesses, multinational corporations, and institutional organizations. Our corporate websites are designed to communicate authority, build stakeholder confidence, and drive strategic business objectives.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            From <Link href="/services/web-design-development/fintech-solutions" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-orange-text)" }}>investor relations portals</Link> to global enterprise sites with multi-region support, we engineer solutions that meet the rigorous standards of modern corporate governance and brand excellence.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                The Corporate Web Imperative
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "78% of B2B buyers research vendors online before first contact",
                                    "Professional websites increase perceived company value by 75%",
                                    "Investor confidence directly correlates with digital presence quality",
                                    "Regulatory compliance requires proper digital documentation",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5"
                                            style={{
                                                background: "linear-gradient(90deg, #f97316, #ea580c)",
                                            }}
                                        >
                                            ✓
                                        </span>
                                        <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - Visual Illustration */}
                    <div className="relative h-[600px] w-full flex items-center justify-center hidden lg:flex">
                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {/* Lines from center to satellites */}
                            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="opacity-30" />
                            <circle cx="50%" cy="50%" r="150" fill="none" stroke="#f97316" strokeWidth="1" className="opacity-10 animate-spin-slow-reverse" />
                            <circle cx="50%" cy="50%" r="250" fill="none" stroke="#f97316" strokeWidth="1" className="opacity-5 animate-spin-slow" />
                        </svg>

                        {/* Central Hub */}
                        <div className="relative z-20 flex flex-col items-center justify-center">
                            <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl relative">
                                <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-ping"></div>
                                <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}></div>
                                <Building2 className="w-16 h-16 text-white relative z-10" />
                            </div>
                            <div className="mt-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-orange-200/20 text-center shadow-lg">
                                <span className="font-bold text-lg" style={{ color: "var(--foreground)" }}>Digital HQ</span>
                            </div>
                        </div>

                        {/* Satellite: Strategic Positioning (Top Left) */}
                        <div className="absolute top-[10%] left-[10%] z-20 animate-bounce-slow" style={{ animationDelay: "0s" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[160px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg bg-orange-50">
                                    <Target className="w-6 h-6 text-orange-600" />
                                </div>
                                <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="text-sm font-bold text-center hover:underline" style={{ color: "var(--foreground)" }}>Strategic Positioning</Link>
                            </div>
                        </div>

                        {/* Satellite: Lead Gen (Top Right) */}
                        <div className="absolute top-[15%] right-[5%] z-20 animate-bounce-slow" style={{ animationDelay: "1s" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[160px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg bg-orange-50">
                                    <TrendingUp className="w-6 h-6 text-orange-600" />
                                </div>
                                <Link href="/services/performance-marketing" className="text-sm font-bold text-center hover:underline" style={{ color: "var(--foreground)" }}>Growth Engine</Link>
                            </div>
                        </div>

                        {/* Satellite: Stakeholders (Bottom Left) */}
                        <div className="absolute bottom-[15%] left-[5%] z-20 animate-bounce-slow" style={{ animationDelay: "2s" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[160px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg bg-orange-50">
                                    <Users className="w-6 h-6 text-orange-600" />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>Stakeholder Focus</span>
                            </div>
                        </div>

                        {/* Satellite: Global Scale (Bottom Right) */}
                        <div className="absolute bottom-[10%] right-[10%] z-20 animate-bounce-slow" style={{ animationDelay: "3s" }}>
                            <div className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md max-w-[160px]"
                                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                                <div className="p-3 rounded-lg bg-orange-50">
                                    <Globe className="w-6 h-6 text-orange-600" />
                                </div>
                                <span className="text-sm font-bold text-center" style={{ color: "var(--foreground)" }}>Global Scale</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

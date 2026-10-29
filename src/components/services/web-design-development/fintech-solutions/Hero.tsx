import {
    ShieldCheck, TrendingUp, Wallet, Globe, Lock, Smartphone,
    ChevronRight, ArrowRight, Activity, PieChart, Building2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Building2, text: "Digital Banking" },
        { icon: ShieldCheck, text: "Bank-Grade Security" },
        { icon: Wallet, text: "Payment Gateways" },
        { icon: TrendingUp, text: "Investment Tech" },
        { icon: Lock, text: "Blockchain Solutions" },
        { icon: Smartphone, text: <Link href="/services/mobile-app-development" className="hover:underline">Mobile Finance</Link> },
    ];

    const stats = [
        { value: "High-Volume", label: "Transaction Volume" },
        { value: "High", label: "System Uptime" },
        { value: "PCI-DSS", label: "Compliant" },
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #0ea5e9 10%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #0ea5e9 10%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #0ea5e9 5%, transparent)", animationDelay: "2s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/web-design-development" className="hover:underline">Web Design</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--brand-blue-text)" }}>FinTech Solutions</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "color-mix(in srgb, #0ea5e9 10%, transparent)",
                                borderColor: "color-mix(in srgb, #0ea5e9 30%, transparent)",
                            }}
                        >
                            <ShieldCheck className="w-4 h-4" style={{ color: "#0ea5e9" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                                FinTech & Banking Solutions
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Secure the Future of{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    color: "var(--accent-sky-text)"
                                }}
                            >
                                Digital Finance
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Build secure, scalable, and compliant financial technology platforms. From neobanks to blockchain solutions, we engineer the future of money.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: "#0ea5e9" }} />
                                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div
                                        className="text-3xl md:text-4xl font-bold"
                                        style={{ color: "var(--accent-sky-text)" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{ backgroundColor: "var(--brand-blue-btn)" }}
                            >
                                Start Your FinTech Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background: "color-mix(in srgb, #0ea5e9 15%, transparent)",
                            }}
                        />
                        {/* Placeholder for now, anticipating the file or using a generic one if needed. 
                            If the user has a specific image in mind, they should place it here. 
                            For now I will point to where it SHOULD be.
                        */}
                        <Image
                            src="/images/services-images/web-design-development/fintech-solutions.svg"
                            alt="FinTech Solutions Platform"
                            width={500}
                            height={400}
                            className="relative w-[75%] h-[75%] z-10 rounded-2xl"
                            priority
                        // Fallback to a place holder or handle error gracefully in a real app, 
                        // but here we assume the asset will be provided.
                        />

                        {/* Info Section Below Image */}
                        <div className="flex gap-4 justify-center w-full z-10 relative mt-6">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(14, 165, 233, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Lock className="w-4 h-4" style={{ color: "#0ea5e9" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>256-bit Encrypted</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(14, 165, 233, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Activity className="w-4 h-4" style={{ color: "#0ea5e9" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Real-time Data</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(14, 165, 233, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Globe className="w-4 h-4" style={{ color: "#0ea5e9" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Global Payments</span>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 gap-4 mt-6 w-full z-10 relative">
                            {[
                                { label: "Transaction Speed", value: "<100ms" },
                                { label: "Availability", value: "High" },
                                { label: "Security Score", value: "A+" },
                                { label: "API Latency", value: "Low" },
                            ].map((metric, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-xl border text-center transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="text-xl font-bold" style={{ color: "var(--accent-sky-text)" }}>
                                        {metric.value}
                                    </div>
                                    <div className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

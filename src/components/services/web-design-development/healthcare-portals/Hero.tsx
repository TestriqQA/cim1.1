import {
    Heart, Shield, Users, Clock, Stethoscope, FileText,
    Activity, ChevronRight, ArrowRight, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Heart, text: "Patient Portals" },
        { icon: Shield, text: "HIPAA Compliant" },
        { icon: Users, text: "Provider Networks" },
        { icon: Clock, text: "Appointment Booking" },
        { icon: Stethoscope, text: "Telehealth Ready" },
        { icon: FileText, text: "EHR Integration" },
    ];

    const stats = [
        { value: "50K+", label: "Patients Served" },
        { value: "High", label: "Uptime" },
        { value: "HIPAA", label: "Certified" },
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
                    style={{ backgroundColor: "color-mix(in srgb, #3b82f6 10%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #6366f1 10%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #8b5cf6 5%, transparent)", animationDelay: "2s" }}
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
                            <span style={{ color: "var(--brand-blue-text)" }}>Healthcare Portals</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(90deg, color-mix(in srgb, #3b82f6 10%, transparent), color-mix(in srgb, #6366f1 10%, transparent))",
                                borderColor: "color-mix(in srgb, #3b82f6 30%, transparent)",
                            }}
                        >
                            <Heart className="w-4 h-4" style={{ color: "#3b82f6" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                Healthcare Portal Development
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Secure Digital{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Healthcare Solutions
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Build HIPAA-compliant patient portals, telehealth platforms, and healthcare management
                            systems that improve patient outcomes and streamline provider workflows.
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
                                        <Icon className="w-4 h-4" style={{ color: "#3b82f6" }} />
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
                                        style={{ color: "var(--brand-blue-text)" }}
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
                                style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border transition-all duration-300 hover:scale-105"
                                style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                            >
                                Schedule Demo
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #3b82f6 15%, transparent), color-mix(in srgb, #6366f1 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/healthcare-portals.svg"
                            alt="Healthcare Portal Development"
                            width={500}
                            height={400}
                            className="relative w-[75%] h-[75%] z-10 rounded-2xl"
                            priority
                        />

                        {/* Info Section Below Image */}
                        <div className="flex gap-4 justify-center w-full z-10 relative mt-6">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(59, 130, 246, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Shield className="w-4 h-4" style={{ color: "#3b82f6" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>HIPAA Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(99, 102, 241, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Activity className="w-4 h-4" style={{ color: "#6366f1" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>HL7 FHIR Ready</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(139, 92, 246, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <CheckCircle2 className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>SOC 2 Type II</span>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 gap-4 mt-6 w-full z-10 relative">
                            {[
                                { label: "Data Encryption", value: "256-bit" },
                                { label: "Response Time", value: "<100ms" },
                                { label: "Patient Satisfaction", value: "98%" },
                                { label: "System Uptime", value: "High" },
                            ].map((metric, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-xl border text-center transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="text-xl font-bold" style={{ color: "var(--brand-blue-text)" }}>
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

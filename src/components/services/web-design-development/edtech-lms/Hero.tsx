import {
    GraduationCap, BookOpen, Users, Video, Award, BarChart3,
    Play, ChevronRight, ArrowRight, CheckCircle2, Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: GraduationCap, text: "Learning Management" },
        { icon: BookOpen, text: "Course Builder" },
        { icon: Users, text: "Student Portals" },
        { icon: Video, text: "Video Streaming" },
        { icon: Award, text: "Certifications" },
        { icon: BarChart3, text: "Analytics" },
    ];

    const stats = [
        { value: "100K+", label: "Students Served" },
        { value: "500+", label: "Courses Built" },
        { value: "98%", label: "Completion Rate" },
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
                    style={{ backgroundColor: "color-mix(in srgb, #a855f7 10%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #ec4899 10%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #f97316 5%, transparent)", animationDelay: "2s" }}
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
                            <span style={{ color: "var(--brand-purple-text)" }}>EdTech & LMS</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(90deg, color-mix(in srgb, #a855f7 10%, transparent), color-mix(in srgb, #ec4899 10%, transparent))",
                                borderColor: "color-mix(in srgb, #a855f7 30%, transparent)",
                            }}
                        >
                            <GraduationCap className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-purple-text)" }}>
                                EdTech & LMS Development
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Transform Learning{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                With Digital Education
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Build powerful learning management systems, online course platforms, and interactive
                            educational experiences that engage students and drive measurable learning outcomes.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                if (feature.text === "Analytics") {
                                    return (
                                        <Link
                                            key={idx}
                                            href="/services/seo-services"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            <Icon className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                                            <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                                {feature.text}
                                            </span>
                                        </Link>
                                    );
                                }
                                if (feature.text === "Video Streaming") {
                                    return (
                                        <Link
                                            key={idx}
                                            href="/services/social-media-marketing-services/video-marketing-agency"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: "var(--border-color)",
                                            }}
                                        >
                                            <Icon className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                                            <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                                {feature.text}
                                            </span>
                                        </Link>
                                    );
                                }
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
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
                                        style={{ color: "var(--brand-purple-text)" }}
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
                                style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #a855f7 15%, transparent), color-mix(in srgb, #ec4899 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/edtech-lms.svg"
                            alt="EdTech LMS Platform Development"
                            width={500}
                            height={400}
                            className="relative w-[75%] h-[75%] z-10 rounded-2xl"
                            priority
                        />

                        {/* Info Section Below Image */}
                        <div className="flex gap-4 justify-center w-full z-10 relative mt-6">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(168, 85, 247, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Video className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>HD Streaming</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(236, 72, 153, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Award className="w-4 h-4" style={{ color: "#ec4899" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Certifications</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(249, 115, 22, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Sparkles className="w-4 h-4" style={{ color: "#f97316" }} />
                                <Link href="/services/ai-chatbots-services" className="hover:underline text-xs font-bold" style={{ color: "var(--foreground)" }}>AI-Powered</Link>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 gap-4 mt-6 w-full z-10 relative">
                            {[
                                { label: "Video Quality", value: "4K Ready" },
                                { label: "Uptime", value: "High" },
                                { label: "Mobile Ready", value: "100%" },
                                { label: "Load Time", value: "<2s" },
                            ].map((metric, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-xl border text-center transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="text-xl font-bold" style={{ color: "var(--brand-purple-text)" }}>
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

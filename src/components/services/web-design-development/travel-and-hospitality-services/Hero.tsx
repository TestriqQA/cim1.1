import {
    Plane, Calendar, MapPin, Users, CreditCard, BarChart3,
    ChevronRight, ArrowRight, CheckCircle2, Sparkles, Globe, Hotel
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Calendar, text: "Booking Systems" },
        { icon: Hotel, text: <Link href="/services/web-design-development/real-estate-platforms" className="hover:underline">Property Management</Link> },
        { icon: Globe, text: "Virtual Tours" },
        { icon: Users, text: "Guest Portals" },
        { icon: CreditCard, text: "Multi-Currency" },
        { icon: BarChart3, text: <Link href="/services/ai-workflows-automations-services" className="hover:underline">Analytics</Link> },
    ];

    const stats = [
        { value: "300%", label: "Traffic Growth" },
        { value: "80%+", label: "Test Coverage" },
        { value: "50+", label: "Global Partners" },
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
                    style={{ backgroundColor: "color-mix(in srgb, #0d9488 10%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #0d9488 10%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #0d9488 5%, transparent)", animationDelay: "2s" }}
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
                            <span style={{ color: "var(--accent-teal-text)" }}>Travel & Hospitality</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "color-mix(in srgb, #0d9488 10%, transparent)",
                                borderColor: "color-mix(in srgb, #0d9488 30%, transparent)",
                            }}
                        >
                            <Plane className="w-4 h-4" style={{ color: "#0d9488" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                                Travel & Hospitality Solutions
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Transform Your Business with{" "}
                            <span
                                style={{
                                    color: "var(--accent-teal-text)",
                                }}
                            >
                                Future-Ready Travel and Hospitality Services
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            At Cinute Infomedia, we provide expert Travel and Hospitality Services designed for the 2026 digital ecosystem. As an expert Travel Software Development Services provider and Hospitality Marketing Agency, we build intelligent, ROI-driven Travel Technology Solutions that empower global travel brands and luxury resorts to scale effortlessly.
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
                                        <Icon className="w-4 h-4" style={{ color: "#0d9488" }} />
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
                                        className="text-3xl font-bold"
                                        style={{
                                            color: "var(--accent-teal-text)",
                                        }}
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
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                                style={{ backgroundColor: "var(--accent-teal-btn)" }}
                            >
                                Start Your Transformation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#solutions"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Image Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "var(--border-color)",
                                    background: "color-mix(in srgb, #0d9488 5%, var(--card-bg))",
                                }}
                            >
                                <Image
                                    src="/images/services-images/web-design-development/travel-hospitality.svg"
                                    alt="Travel & Hospitality Platform"
                                    fill
                                    className="object-cover p-8"
                                    priority
                                />
                            </div>

                            {/* Floating Info Card */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#0d9488" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Real-time Booking
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Instant availability updates
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#0d9488" }}
                                    >
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            40% More Bookings
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Average client increase
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Section - Below Image */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-teal-text)" }}>
                                Certifications
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["AWS Certified", "Google Partner", "Meta Business Partner"].map((partner, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                            borderColor: "color-mix(in srgb, #0d9488 20%, transparent)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        {partner}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

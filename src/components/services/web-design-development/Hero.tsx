import { Sparkles, ArrowRight, Home, ChevronRight, Rocket, Zap, Smartphone, TrendingUp, ShieldCheck, Code } from "lucide-react";
import Link from "next/link";
import WebDevAnimation from "./WebDevAnimation";


export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 py-10 sm:py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs sm:text-sm mb-5 justify-center lg:justify-start"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors px-1.5 py-1 sm:p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4 shrink-0" />
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services"
                        className="hover:underline transition-colors px-1.5 py-1 sm:p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    {/* Chevron and final crumb stay on one line together so the
                        separator never wraps away from the label it belongs to. */}
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4 shrink-0" style={{ color: "var(--secondary-text)" }} />

                        <span
                            className="font-semibold px-1.5 py-1 sm:p-2"
                            style={{ color: "var(--brand-blue-text)" }}
                        >
                            Web Design & Development
                        </span>
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">

                    {/* LEFT CONTENT */}
                    <div
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                                color: "var(--brand-blue-text)",
                            }}
                        >
                            <Sparkles className="w-4 h-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
                            <span className="text-xs sm:text-sm font-semibold">Web Design & Development</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            <span style={{ color: "var(--brand-blue)" }}>
                                Transform Your Business with Expert Web Development Services
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-24 sm:w-32 h-1.5 mb-6 sm:mb-8 rounded-full lg:mx-0 mx-auto mt-5 sm:mt-6"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                            }}
                        />

                        {/* Tagline */}
                        <div className="space-y-4 mb-8 text-base sm:text-lg md:text-xl text-[var(--secondary-text)] leading-relaxed">
                            <p>
                                As an expert web development company with proven, deep expertise, we deliver <Link href="/services/web-design-development/business-corporate" className="text-[var(--accent-teal-text)] font-bold underline underline-offset-2 transition-colors">custom website development</Link> solutions that drive measurable ROI.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg">
                                Our professional web design agency has launched high-performance websites for global clients across <span className="font-semibold text-[var(--foreground)]">US, EU, India, and APAC</span> markets-achieving average <span className="text-[var(--brand-blue-text)] font-bold">sustained traffic growth</span> and conversion rate improvements.
                            </p>
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 mb-8">
                            {[
                                { icon: Rocket, text: "ROI Driven" },
                                { icon: Zap, text: "Core Web Vitals 90+" },
                                { icon: Smartphone, text: "Responsive Design" },
                                { icon: TrendingUp, text: "Global SEO" },
                                { icon: ShieldCheck, text: "Enterprise Security" },
                                { icon: Code, text: "Clean, Tested Code" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5 p-2.5 rounded-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-[var(--brand-blue)]"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 8%, transparent)",
                                    }}
                                >
                                    <item.icon className="w-4 h-4 shrink-0 text-[var(--brand-blue)]" />
                                    <span className="text-xs font-bold text-[var(--foreground)] text-left">
                                        {/* Only "Global SEO" is linked: it is the one badge whose
                                            anchor text matches its destination. "Responsive Design"
                                            pointed at a UI/UX blog post and "Enterprise Security" at
                                            the fintech page — both now plain text (T7). */}
                                        {item.text === "Global SEO" ? (
                                            <Link href="/services/seo-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">
                                                {item.text}
                                            </Link>
                                        ) : (
                                            item.text
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-2 mb-8 p-4 sm:p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-[var(--brand-blue-text)]">
                                    Proven
                                </div>
                                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-[var(--secondary-text)]">
                                    High-Perf Sites
                                </div>
                            </div>
                            <div className="text-center border-x border-[var(--border-color)]">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-[var(--accent-teal-text)]">
                                    95%
                                </div>
                                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-[var(--secondary-text)]">
                                    Quality-Assured Delivery
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-[var(--brand-blue-text)]">
                                    300%
                                </div>
                                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-[var(--secondary-text)]">
                                    Traffic Growth
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Get Your Free Website Audit
                                <ArrowRight className="w-5 h-5 shrink-0" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div
                        className="relative flex flex-col items-center gap-8 sm:gap-12 justify-center animate-fadeIn"
                        style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                    >
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-cyan) 10%, transparent), color-mix(in srgb, var(--brand-teal) 10%, transparent))",
                            }}
                        />

                        {/* Feature Card */}
                        <div
                            className="relative rounded-3xl shadow-2xl border hover:scale-105 transition-transform duration-300 max-w-xl w-full p-4 sm:p-6"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            <WebDevAnimation />
                        </div>
                        {/* Additional Info Section */}
                        <div
                            className="w-full p-5 sm:p-6 rounded-2xl border text-center lg:text-left"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                Why Choose Us?
                            </h2>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                We combine cutting-edge technology with proven methodologies to deliver exceptional web solutions tailored to your business needs.
                            </p>
                            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                                <Link
                                    href="/services/web-design-development/nextjs-development-services"
                                    className="px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold text-center text-[var(--brand-blue-text)] hover:text-[var(--brand-blue)] hover:underline transition-colors"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                    }}
                                >
                                    React & Next.js
                                </Link>
                                <Link
                                    href="/blog/future-web-development-nextjs"
                                    className="px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold text-center text-[var(--brand-blue-text)] hover:text-[var(--brand-blue)] hover:underline transition-colors"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                    }}
                                >
                                    Tailwind CSS
                                </Link>
                                <Link
                                    href="/services/seo-services/technical-seo-services"
                                    className="px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold text-center text-[var(--brand-blue-text)] hover:text-[var(--brand-blue)] hover:underline transition-colors"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                    }}
                                >
                                    SEO Optimized
                                </Link>
                                {/* Not linked: "Mobile Responsive" is a property of a website,
                                    not a route to the mobile app development service (T7). */}
                                <span
                                    className="px-3 py-1.5 sm:py-1 rounded-full text-xs font-semibold text-center text-[var(--brand-blue-text)]"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 15%, transparent)",
                                    }}
                                >
                                    Mobile Responsive
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
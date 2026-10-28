"use client";

import { Zap } from "lucide-react";
import Link from "next/link";


export default function ServiceOverview() {
    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                            color: "var(--brand-blue-text)",
                        }}
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">Technical Excellence</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Expert <span style={{ color: "var(--brand-blue-text)" }}>Web Development Company</span> with a Global Perspective
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            As an expert <span className="text-[var(--brand-blue-text)] font-bold">web development company</span>, we provide full-spectrum digital engineering. Our <span className="text-[var(--accent-teal-text)] font-bold">professional web design agency</span> combines <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:text-[var(--brand-blue)] hover:underline transition-colors">creative excellence</Link> with technical precision.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            From <Link href="/services/web-design-development/nextjs-development-services" style={{ color: "var(--brand-blue-text)", textDecoration: "underline" }}>Next.js applications</Link> and <Link href="/services/web-design-development/wordpress-development-services" style={{ color: "var(--brand-blue-text)", textDecoration: "underline" }}>WordPress sites</Link> to complex enterprise portals, our <span className="font-semibold text-[var(--foreground)]">web development agency</span> delivers scalable, secure, and SEO-optimized platforms for global markets like US, EU, and APAC.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We don&apos;t just build websites; we engineer digital growth engines. Whether you need <Link href="/services/web-design-development/ecommerce-development-company" style={{ color: "var(--brand-blue-text)", textDecoration: "underline" }}>ecommerce development</Link> or <Link href="/services/web-design-development/nodejs-backend" style={{ color: "var(--brand-blue-text)", textDecoration: "underline" }}>custom web apps</Link>, our solutions are designed to outperform competition, achieving an average sustained organic traffic growth. Every site is optimized with <Link href="/services/seo-services/technical-seo-services" style={{ color: "var(--brand-blue-text)", textDecoration: "underline" }}>technical SEO best practices</Link>.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                Our Global Standards
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    <span key="1">Global reach with <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--brand-blue)]">performance-first architecture</Link></span>,
                                    <span key="2">rigorously tested delivery on first deployment</span>,
                                    <span key="3">Built-in SEO that delivers <Link href="/services/seo-services" className="underline underline-offset-2 hover:text-[var(--brand-blue)]">sustained traffic growth</Link></span>,
                                    <span key="4">24/7 technical support across timezones</span>,
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold mt-0.5 shadow-md"
                                            style={{
                                                background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                            }}
                                        >
                                            ✓
                                        </span>
                                        <span className="text-sm font-medium" style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Visual – Interactive Browser Mockup */}
                    <div className="relative hidden md:block">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-4 rounded-3xl blur-3xl animate-pulse"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 15%, transparent), color-mix(in srgb, var(--brand-teal) 15%, transparent))",
                                animationDuration: "4s",
                            }}
                        />

                        {/* Floating Tech Badges */}
                        <div className="absolute -top-4 -left-4 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #61DAFB, #00D4FF)",
                                    animationDuration: "3s",
                                }}
                            >
                                React
                            </div>
                        </div>
                        <div className="absolute -top-2 right-12 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #000000, #333333)",
                                    animationDuration: "3.5s",
                                    animationDelay: "0.5s",
                                }}
                            >
                                Next.js
                            </div>
                        </div>
                        <div className="absolute top-22 -right-8 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #3178C6, #235A97)",
                                    animationDuration: "4s",
                                    animationDelay: "1s",
                                }}
                            >
                                TypeScript
                            </div>
                        </div>
                        <div className="absolute bottom-24 -left-6 z-20">
                            <div
                                className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg animate-bounce"
                                style={{
                                    background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
                                    animationDuration: "3.2s",
                                    animationDelay: "0.8s",
                                }}
                            >
                                Tailwind
                            </div>
                        </div>

                        {/* Browser Window — decorative wireframe.
                            Deliberately an SVG with NO text nodes. This was previously
                            live DOM text: a placeholder site URL, fake import/export
                            source lines, a preview-pane caption, three invented
                            engagement counts and an unmeasured latency figure. Google
                            reads DOM text regardless of aria-hidden, so the words
                            themselves had to go, not just their accessibility
                            exposure. Shapes only — nothing here states a fact.
                            (SEO change request T9.) */}
                        <svg
                            viewBox="0 0 520 360"
                            className="relative w-full h-auto rounded-2xl shadow-2xl border"
                            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                            role="presentation"
                            aria-hidden="true"
                            focusable="false"
                        >
                            {/* chrome bar */}
                            <rect x="0" y="0" width="520" height="34" fill="color-mix(in srgb, var(--foreground) 4%, transparent)" />
                            <circle cx="20" cy="17" r="5" fill="#ff5f57" />
                            <circle cx="38" cy="17" r="5" fill="#febc2e" />
                            <circle cx="56" cy="17" r="5" fill="#28c840" />
                            {/* address bar: a shape, not a URL */}
                            <rect x="78" y="9" width="364" height="16" rx="8" fill="color-mix(in srgb, var(--foreground) 7%, transparent)" />
                            <line x1="0" y1="34" x2="520" y2="34" stroke="var(--border-color)" strokeWidth="1" />

                            {/* left pane: code lines as bars */}
                            <rect x="0" y="34" width="250" height="294" fill="color-mix(in srgb, var(--card-bg) 95%, #1e1e2e)" />
                            <line x1="250" y1="34" x2="250" y2="328" stroke="var(--border-color)" strokeWidth="1" />
                            <g>
                                <rect x="18" y="56" width="52" height="7" rx="3.5" fill="#C586C0" />
                                <rect x="76" y="56" width="38" height="7" rx="3.5" fill="#9CDCFE" />
                                <rect x="18" y="76" width="40" height="7" rx="3.5" fill="#C586C0" />
                                <rect x="64" y="76" width="64" height="7" rx="3.5" fill="#9CDCFE" />
                                <rect x="18" y="104" width="46" height="7" rx="3.5" fill="#569CD6" />
                                <rect x="70" y="104" width="72" height="7" rx="3.5" fill="#DCDCAA" />
                                <rect x="32" y="124" width="34" height="7" rx="3.5" fill="#C586C0" />
                                <rect x="72" y="124" width="88" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.5" />
                                <rect x="46" y="144" width="104" height="7" rx="3.5" fill="#4EC9B0" />
                                <rect x="46" y="164" width="76" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.4" />
                                <rect x="32" y="184" width="28" height="7" rx="3.5" fill="#C586C0" />
                                <rect x="18" y="212" width="60" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.3" />
                                <rect x="18" y="232" width="92" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.3" />
                                <rect x="18" y="252" width="48" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.3" />
                            </g>

                            {/* right pane: rendered-page wireframe */}
                            <rect x="250" y="34" width="270" height="294" fill="color-mix(in srgb, var(--brand-blue) 4%, var(--card-bg))" />
                            {/* mini nav */}
                            <rect x="266" y="50" width="238" height="22" rx="6" fill="color-mix(in srgb, var(--foreground) 4%, transparent)" />
                            <rect x="274" y="57" width="14" height="8" rx="4" fill="var(--brand-blue)" />
                            <rect x="420" y="58" width="24" height="6" rx="3" fill="var(--secondary-text)" opacity="0.45" />
                            <rect x="450" y="58" width="24" height="6" rx="3" fill="var(--secondary-text)" opacity="0.45" />
                            {/* hero block */}
                            <rect x="266" y="84" width="238" height="74" rx="8" fill="color-mix(in srgb, var(--brand-blue) 10%, transparent)" />
                            <rect x="282" y="102" width="150" height="10" rx="5" fill="var(--brand-blue)" opacity="0.65" />
                            <rect x="282" y="120" width="196" height="6" rx="3" fill="var(--secondary-text)" opacity="0.4" />
                            <rect x="282" y="132" width="120" height="6" rx="3" fill="var(--secondary-text)" opacity="0.4" />
                            {/* two cards */}
                            <rect x="266" y="170" width="114" height="62" rx="8" fill="color-mix(in srgb, var(--foreground) 4%, transparent)" />
                            <rect x="390" y="170" width="114" height="62" rx="8" fill="color-mix(in srgb, var(--foreground) 4%, transparent)" />
                            <rect x="280" y="184" width="54" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.5" />
                            <rect x="404" y="184" width="54" height="7" rx="3.5" fill="var(--secondary-text)" opacity="0.5" />
                            <rect x="280" y="200" width="84" height="5" rx="2.5" fill="var(--secondary-text)" opacity="0.3" />
                            <rect x="404" y="200" width="84" height="5" rx="2.5" fill="var(--secondary-text)" opacity="0.3" />
                            {/* cta pill */}
                            <rect x="266" y="246" width="238" height="30" rx="15" fill="color-mix(in srgb, var(--brand-teal) 22%, transparent)" />
                            <rect x="350" y="258" width="70" height="7" rx="3.5" fill="var(--brand-teal)" opacity="0.7" />

                            {/* status bar */}
                            <line x1="0" y1="328" x2="520" y2="328" stroke="var(--border-color)" strokeWidth="1" />
                            <rect x="0" y="328" width="520" height="32" fill="color-mix(in srgb, var(--foreground) 3%, transparent)" />
                            <circle cx="22" cy="344" r="3.5" fill="#28c840" />
                            <rect x="34" y="341" width="30" height="6" rx="3" fill="var(--secondary-text)" opacity="0.35" />
                            <rect x="80" y="341" width="22" height="6" rx="3" fill="var(--secondary-text)" opacity="0.35" />
                            <rect x="462" y="341" width="40" height="6" rx="3" fill="var(--secondary-text)" opacity="0.35" />
                        </svg>

                        {/* Decorative Elements */}
                        <div
                            className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20"
                            style={{
                                background: "radial-gradient(circle, var(--brand-teal), transparent)",
                            }}
                        ></div>
                        <div
                            className="absolute -top-8 right-1/3 w-16 h-16 rounded-full opacity-15"
                            style={{
                                background: "radial-gradient(circle, var(--brand-blue), transparent)",
                            }}
                        ></div>
                    </div>


                </div>

                {/* Related Resources */}
                <div className="mt-8 p-6 rounded-2xl border max-w-6xl mx-auto" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)" }}>📚 Related Resources</h3>
                    <div className="flex flex-col gap-3">
                        <Link href="/blog/mobile-app-development-trends-2026" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">💡</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: "var(--foreground)" }}>Mobile App Trends 2026</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Latest trends in mobile and web development</p>
                            </div>
                        </Link>
                        <Link href="/blog/future-web-development-nextjs" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">⚙️</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--brand-blue)] transition-colors" style={{ color: "var(--foreground)" }}>Future of Web Development</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Why Next.js is shaping the future of web</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
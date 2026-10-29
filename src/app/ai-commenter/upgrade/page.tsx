import type { Metadata } from "next";
import Link from "next/link";

/**
 * ChimeGenius AI Pro - Upgrade landing page.
 *
 * Goes in your Next.js repo at:
 *   src/app/ai-commenter/upgrade/page.tsx
 *
 * Public URL:
 *   https://www.cinuteinfomedia.com/ai-commenter/upgrade
 *
 * Phase: pre-Razorpay. Shows a "launching soon" waitlist message + feature
 * comparison. When Razorpay is live, swap the <WaitlistCta /> block for
 * the real <RazorpayCta /> component - everything else stays.
 */

export const metadata: Metadata = {
    title: "Upgrade to Pro - ChimeGenius AI Pro",
    description:
        "Unlock 500 daily generations, advanced Gemini models, and multi-variant streaming with ChimeGenius AI Pro by Cinute InfoMedia.",
    robots: { index: true, follow: true },
    openGraph: {
        title: "Upgrade to ChimeGenius AI Pro",
        description:
            "500 generations a day, multi-variant streaming, Gemini 2.5 Flash + Pro. Launching soon.",
        type: "website",
        url: "https://www.cinuteinfomedia.com/ai-commenter/upgrade",
    },
};

const SUPPORT_EMAIL = "support@cinuteinfomedia.com";

const FEATURES = [
    { label: "Daily generations", free: "10 / day", pro: "500 / day" },
    { label: "Variants per click", free: "1 (fast)", pro: "Up to 5 (streaming)" },
    { label: "Quality preset", free: "Fast only", pro: "Fast / Balanced / Best" },
    { label: "Persona samples", free: "First 500 chars", pro: "Full 2,500 chars" },
    {
        label: "Supported sites",
        free: "All supported sites",
        pro: "All supported sites",
    },
    { label: "Active devices", free: "1", pro: "Up to 3" },
    { label: "Priority support", free: "Community", pro: "Email priority" },
] as const;

const FAQ = [
    {
        q: "When does Pro launch?",
        a: "We're wiring up payments now and expect to launch within a week. Join the waitlist and we'll email you the moment it goes live, along with launch-week pricing.",
    },
    {
        q: "Will my free usage keep working?",
        a: "Yes. The Free plan stays free: 10 generations a day, on Gemini 2.0 Flash, on every supported site. Pro just removes the daily ceiling and unlocks the higher-quality models and streaming.",
    },
    {
        q: "Where do you process my data?",
        a: "The visible post text you ask us to comment on is sent over HTTPS to our Vercel proxy at cinuteinfomedia.com, which forwards it to Google Gemini, returns three suggestions, and discards the text after the request.",
        showPrivacyLink: true,
    },
    {
        q: "Can I cancel my Pro license?",
        a: "Yes. Pro will be a yearly license with a 7-day no-questions-asked refund window. Email support@cinuteinfomedia.com any time and we'll take care of it.",
    },
] as const;

export default function UpgradePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 antialiased">
            <div className="mx-auto w-full max-w-5xl px-5 py-6 md:py-10">
                <SiteHeader />
                <Hero />
                <FeatureTable />
                <FaqSection />
                <SiteFooter />
            </div>
        </main>
    );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                          */
/* ------------------------------------------------------------------ */

function SiteHeader() {
    return (
        <header className="flex items-center justify-between gap-4 pb-6">
            <Link
                href="/"
                className="group flex items-center gap-2.5 text-white outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
                aria-label="ChimeGenius AI Pro home"
            >
                <BrandMark className="h-8 w-8 transition-transform group-hover:scale-105" />
                <span className="text-base font-bold tracking-tight md:text-lg">
                    ChimeGenius AI Pro
                </span>
            </Link>
            <nav className="flex items-center gap-5 text-sm text-slate-400">
                <Link
                    href="/products/chimegenius-ai-pro/privacy-policy"
                    className="hover:text-slate-200 transition-colors"
                >
                    Privacy
                </Link>
                <a
                    href="https://www.cinuteinfomedia.com/"
                    className="hidden hover:text-slate-200 transition-colors sm:inline"
                >
                    Cinute InfoMedia
                </a>
            </nav>
        </header>
    );
}

function Hero() {
    return (
        <section className="mx-auto mt-8 max-w-3xl text-center md:mt-14">
            <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                Pro launching soon
            </span>

            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
                Smarter comments,{" "}
                <span className="text-amber-500">50&times; more of them</span>.
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-300 md:text-lg">
                ChimeGenius AI Pro is on the way. Get notified when it goes live and
                unlock 500 generations a day, multi-variant streaming, and the best
                Gemini models for your tone.
            </p>

            <WaitlistCta />

            <p className="mt-4 text-sm text-slate-400">
                Already have a license key? Open the extension and paste it into{" "}
                <span className="font-semibold text-slate-200">Account</span>.
            </p>
        </section>
    );
}

function WaitlistCta() {
    const subject = encodeURIComponent("ChimeGenius AI Pro - waitlist");
    const body = encodeURIComponent(
        "Hi ChimeGenius team,\n\nPlease add me to the Pro waitlist. " +
        "I'd like to be notified when ChimeGenius AI Pro launches.\n\nThanks!",
    );
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;

    return (
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
                href={mailto}
                className="inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
                Notify me when Pro is live
            </a>
            <a
                href="#features"
                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 sm:w-auto"
            >
                See what&apos;s included
            </a>
        </div>
    );
}

function FeatureTable() {
    return (
        <section id="features" className="mt-20 md:mt-24">
            <h2 className="mb-5 text-2xl font-bold text-slate-50">Free vs Pro</h2>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-950/40">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-950/60 text-xs uppercase tracking-wider text-slate-400">
                            <tr>
                                <th scope="col" className="px-5 py-4 font-semibold">
                                    Feature
                                </th>
                                <th scope="col" className="px-5 py-4 font-semibold">
                                    Free
                                </th>
                                <th
                                    scope="col"
                                    className="px-5 py-4 font-semibold text-amber-400"
                                >
                                    Pro
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {FEATURES.map((row) => (
                                <tr
                                    key={row.label}
                                    className="border-t border-slate-800 last:border-b-0"
                                >
                                    <th
                                        scope="row"
                                        className="whitespace-nowrap px-5 py-3 font-medium text-slate-200"
                                    >
                                        {row.label}
                                    </th>
                                    <td className="px-5 py-3 text-slate-400">{row.free}</td>
                                    <td className="bg-amber-500/[0.04] px-5 py-3 font-medium text-amber-100">
                                        {row.pro}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function FaqSection() {
    return (
        <section className="mt-20 md:mt-24">
            <h2 className="mb-5 text-2xl font-bold text-slate-50">FAQ</h2>
            <div className="space-y-3">
                {FAQ.map((item) => (
                    <details
                        key={item.q}
                        className="group rounded-xl border border-slate-800 bg-slate-900/60 px-5 transition-colors open:border-slate-700"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-semibold text-slate-100 marker:hidden [&::-webkit-details-marker]:hidden">
                            <span>{item.q}</span>
                            <svg
                                className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </summary>
                        <p className="pb-4 text-[15px] leading-relaxed text-slate-300">
                            {item.a}
                            {"showPrivacyLink" in item && item.showPrivacyLink && (
                                <>
                                    {" "}
                                    See our{" "}
                                    <Link
                                        href="/products/chimegenius-ai-pro/privacy-policy"
                                        className="text-amber-400 underline-offset-4 hover:underline"
                                    >
                                        privacy policy
                                    </Link>{" "}
                                    for full detail.
                                </>
                            )}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}

function SiteFooter() {
    return (
        <footer className="mt-20 border-t border-slate-800 pt-6 text-center text-sm text-slate-400 md:mt-24">
            <p>
                Built by{" "}
                <a
                    href="https://www.cinuteinfomedia.com/"
                    target="_blank"
                    rel="noopener"
                    className="text-amber-400 underline-offset-4 hover:underline"
                >
                    Cinute InfoMedia
                </a>
                . Questions?{" "}
                <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-amber-400 underline-offset-4 hover:underline"
                >
                    {SUPPORT_EMAIL}
                </a>
            </p>
        </footer>
    );
}

/* ------------------------------------------------------------------ */
/*  Brand mark                                                        */
/* ------------------------------------------------------------------ */

function BrandMark({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 128 128"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient
                    id="bm-bg"
                    x1="0"
                    y1="0"
                    x2="128"
                    y2="128"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#0f172a" />
                    <stop offset="1" stopColor="#1e293b" />
                </linearGradient>
            </defs>
            <rect width="128" height="128" rx="26" fill="url(#bm-bg)" />
            <path
                d="M 36 38 h 64 a 14 14 0 0 1 14 14 v 24 a 14 14 0 0 1 -14 14 h -34 l -14 12 v -12 h -16 a 14 14 0 0 1 -14 -14 v -24 a 14 14 0 0 1 14 -14 z"
                fill="#f59e0b"
            />
            <circle cx="46" cy="64" r="6" fill="#0f172a" />
            <circle cx="68" cy="64" r="6" fill="#0f172a" />
            <circle cx="90" cy="64" r="6" fill="#0f172a" />
            <path
                d="M 102 14 L 104 20 L 110 22 L 104 24 L 102 30 L 100 24 L 94 22 L 100 20 Z"
                fill="#f59e0b"
            />
        </svg>
    );
}
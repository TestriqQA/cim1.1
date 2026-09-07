import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import styles from "@/components/portfolio/portfolio.module.css";

// Section 7 — Conversion CTA.
//
// Server component. The neon trigger hands off to the site's intake form at
// /get-in-touch (the existing, validated client-intake path) rather than
// embedding a second form here — one intake path, one place to maintain it.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

export default function ConversionCTA() {
  return (
    <section className="pb-24 pt-8 md:pb-32 md:pt-12" aria-labelledby="portfolio-cta-heading">
      <div className={container}>
        <div
          className={`${styles.glassStrong} ${styles.reveal} relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16`}
          style={{ borderColor: "rgb(6 182 212 / 30%)" }}
        >
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className={styles.grain} />
            <div
              className={`${styles.blob} ${styles.blobDrift} -right-24 -top-32 h-96 w-96`}
              style={{ backgroundColor: "rgb(6 182 212 / 18%)" }}
            />
            <div
              className={`${styles.blob} ${styles.blobDriftSlow} -bottom-40 -left-24 h-96 w-96`}
              style={{ backgroundColor: "rgb(168 85 247 / 14%)" }}
            />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-8">
              <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-cyan-400`}>
                07 · Start here
              </p>
              <h2
                id="portfolio-cta-heading"
                className={`${styles.balance} mt-5 text-3xl font-extrabold leading-[1.02] tracking-tight text-white md:text-5xl lg:text-6xl`}
              >
                Your project, written up like these
              </h2>
              <p className={`${styles.pretty} mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg`}>
                Tell us the situation and the task. The person who scopes the work is the person
                accountable for what ships — no account-manager relay, and no invented numbers
                in the write-up afterwards.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/get-in-touch"
                  className={`${styles.neon} inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400`}
                  style={{ "--cat": "6 182 212" } as React.CSSProperties}
                >
                  Open the intake form
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className={`${styles.neonOutline} inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400`}
                >
                  Talk to the team
                </Link>
              </div>
            </div>

            <ul className="space-y-3 lg:col-span-4">
              <li>
                <a
                  href="mailto:contact@cinuteinfomedia.com"
                  className={`${styles.glass} group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Mail className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className={`${styles.mono} block text-[0.625rem] uppercase tracking-[0.2em] text-zinc-400`}>Email</span>
                    <span className="block break-all text-sm font-semibold text-zinc-100 group-hover:underline">
                      contact@cinuteinfomedia.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919004988859"
                  className={`${styles.glass} group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10">
                    <Phone className="h-4 w-4 text-purple-400" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className={`${styles.mono} block text-[0.625rem] uppercase tracking-[0.2em] text-zinc-400`}>Phone</span>
                    <span className="block text-sm font-semibold text-zinc-100 group-hover:underline">+91 9004988859</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

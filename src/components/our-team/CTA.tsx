import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import styles from "./team.module.css";

// Server component.
//
// The closing panel is wrapped in a 1px gradient hairline (an outer element
// painted with the gradient, an inner one painted with the card surface) so the
// finale reads as framed rather than as one more bordered box. The gradient is
// behind the frame only — all text sits on the flat card surface.

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@cinuteinfomedia.com",
    href: "mailto:contact@cinuteinfomedia.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9004988859",
    href: "tel:+919004988859",
  },
];

export default function CTA() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="team-cta-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div
          className={`${styles.reveal} rounded-[2rem] p-px`}
          style={{
            background:
              "linear-gradient(135deg, var(--brand-blue), var(--brand-teal) 45%, var(--brand-purple))",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[calc(2rem-1px)] p-7 sm:p-10 md:p-14"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <div
              aria-hidden="true"
              className={`${styles.blob} ${styles.blobDrift} -right-24 -top-28 h-80 w-80`}
              style={{
                backgroundColor: "color-mix(in srgb, var(--brand-teal) 18%, transparent)",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--brand-blue-text)" }}
                >
                  Start here
                </p>

                <h2
                  id="team-cta-heading"
                  className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
                  style={{ color: "var(--foreground)" }}
                >
                  Work with the people you just met
                </h2>

                <p
                  className="mt-5 max-w-2xl text-lg leading-relaxed"
                  style={{ color: "var(--secondary-text)" }}
                >
                  No account-manager relay. Tell us what you are trying to build or fix, and the
                  person who will actually own the work will be on the first call.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className={`${styles.sheen} group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]`}
                    style={{
                      background:
                        "linear-gradient(90deg, var(--brand-blue-btn), var(--accent-teal-btn))",
                    }}
                  >
                    <span className="relative z-[2]">Start a conversation</span>
                    <ArrowRight
                      className="relative z-[2] h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 font-semibold transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--brand-blue)_45%,var(--border-color))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  >
                    Join the team
                  </Link>
                </div>
              </div>

              <ul
                className="space-y-2 rounded-2xl border p-4 sm:p-5"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border-color)",
                }}
              >
                {contacts.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`${styles.indexRow} group flex items-center gap-4 rounded-xl px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]`}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: "var(--brand-blue-text)" }}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="min-w-0">
                        <span
                          className="block text-xs font-bold uppercase tracking-[0.14em]"
                          style={{ color: "var(--secondary-text)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="mt-0.5 block break-words text-sm font-semibold group-hover:underline"
                          style={{ color: "var(--foreground)" }}
                        >
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}

                <li className="flex items-start gap-4 px-3 py-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                  >
                    <MapPin
                      className="h-5 w-5"
                      style={{ color: "var(--brand-blue-text)" }}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0">
                    <span
                      className="block text-xs font-bold uppercase tracking-[0.14em]"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      Studio
                    </span>
                    <address
                      className="mt-0.5 block text-sm not-italic leading-relaxed"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Beverly Park, Mira Road,
                      Mumbai, Maharashtra 401107
                    </address>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// /components/about/Location.tsx
"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function Location() {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const address = encodeURIComponent(
        "Cinute InfoMedia, Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107"
    );
    const embedUrl = `https://maps.google.com/maps?q=${address}&t=m&z=15&output=embed`;

    // helper for gradient using CSS vars
    const gradient = (startVar = "--brand-blue", endVar = "--brand-teal", angle = "135deg") =>
        `linear-gradient(${angle}, var(${startVar}), var(${endVar}))`;

    return (
        <section
            className="py-12 lg:py-16"
            style={{
                // keep section background driven by your global token
                background: "var(--background)",
                color: "var(--foreground)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="rounded-3xl p-1 shadow-2xl overflow-hidden"
                    style={{
                        // outer gradient border (used to be from-[#008ac1] to-[#00b5ca])
                        background: gradient("--brand-blue", "--brand-teal", "90deg"),
                    }}
                >
                    <div
                        className="rounded-[22px] overflow-hidden relative h-[400px] lg:h-[500px]"
                        style={{
                            // inner card uses card background token and border token
                            background: "var(--card-bg)",
                            border: `1px solid var(--border-color)`,
                        }}
                    >
                        {/* Interactive Facade / Map */}
                        {!isMapLoaded ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <button
                                    onClick={() => setIsMapLoaded(true)}
                                    className="group relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-transform hover:scale-105"
                                    style={{
                                        background: gradient("--brand-blue", "--brand-teal", "90deg"),
                                    }}
                                    aria-label="Load Interactive Map for our office location"
                                >
                                    <MapPin className="w-5 h-5" />
                                    <span>Load Interactive Map</span>
                                </button>
                                <p className="absolute bottom-4 text-xs opacity-60 px-4 text-center">
                                    Click to load map. This prevents third-party cookies from loading automatically.
                                </p>
                            </div>
                        ) : (
                            <iframe
                                title="Cinute InfoMedia Office Map"
                                src={embedUrl}
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                aria-label="Interactive map showing Cinute InfoMedia office location"
                            />
                        )}

                        {/* Floating info card (keeps CTA on top of iframe) */}
                        <div
                            className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-auto rounded-xl p-4 shadow-lg lg:max-w-xs pointer-events-auto"
                            style={{
                                // was bg-white/90 backdrop-blur-sm border border-gray-100
                                background: "color-mix(in srgb, var(--card-bg) 90%, transparent)",
                                backdropFilter: "blur(6px)",
                                border: `1px solid var(--border-color)`,
                            }}
                        >
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-16 h-12 rounded-full flex items-center justify-center text-white"
                                    style={{
                                        // icon circle gradient (was from-[#008ac1] to-[#00b5ca])
                                        background: gradient("--brand-blue", "--brand-teal", "135deg"),
                                    }}
                                >
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        Visit Our Office
                                    </h3>
                                    <p className="text-sm mt-1" style={{ color: "var(--secondary-text)" }}>
                                        Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/ak5SjeUnrDyWLXFNA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                        style={{
                                            // button background gradient (was bg-[#008ac1] text-white hover:#0077a6)
                                            background: gradient("--brand-blue", "--brand-teal", "90deg"),
                                            color: "white",
                                        }}
                                    >
                                        Open in Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

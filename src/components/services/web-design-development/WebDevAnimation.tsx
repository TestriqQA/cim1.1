"use client";

import { useEffect, useState } from "react";

export default function WebDevAnimation() {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <div
            className="w-full h-full relative"
            role="img"
            aria-label="Animated illustration showing the web development process: from empty browser canvas through coding, styling, testing, and deployment to a live website"
        >
            <svg
                viewBox="0 0 500 400"
                className="w-full h-auto"
                style={{ maxHeight: "500px" }}
            >
                <defs>
                    {/* Gradients */}
                    <linearGradient id="wdBrowserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="var(--brand-teal)" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="wdToolbarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="var(--brand-teal)" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="wdLiveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--brand-teal)" />
                        <stop offset="100%" stopColor="var(--brand-blue)" />
                    </linearGradient>
                    <filter id="wdSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="var(--brand-blue)" floodOpacity="0.15" />
                    </filter>
                    <filter id="wdGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Scene 1: Browser Frame */}
                <g className={reducedMotion ? "" : "wd-browser-frame"}>
                    {/* Browser Window */}
                    <rect
                        x="30" y="20" width="440" height="320"
                        rx="12" ry="12"
                        fill="url(#wdBrowserGrad)"
                        stroke="var(--brand-blue)"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        filter="url(#wdSoftShadow)"
                    />

                    {/* Toolbar */}
                    <rect
                        x="30" y="20" width="440" height="36"
                        rx="12" ry="12"
                        fill="url(#wdToolbarGrad)"
                    />
                    <rect x="30" y="44" width="440" height="12" fill="url(#wdToolbarGrad)" />

                    {/* Traffic Lights */}
                    <circle cx="52" cy="38" r="6" fill="#ff5f57" opacity="0.9" />
                    <circle cx="72" cy="38" r="6" fill="#febc2e" opacity="0.9" />
                    <circle cx="92" cy="38" r="6" fill="#28c840" opacity="0.9" />

                    {/* Address Bar */}
                    <rect
                        x="115" y="28" width="280" height="20"
                        rx="4" ry="4"
                        fill="var(--card-bg)"
                        stroke="var(--border-color)"
                        strokeWidth="1"
                    />
                    <rect x="125" y="36" width="99" height="6" rx="3" fill="var(--secondary-text)" opacity="0.55" />

                    {/* Content Area Grid */}
                    <g className={reducedMotion ? "" : "wd-grid"} opacity="0.3">
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                            <line
                                key={`v${i}`}
                                x1={50 + i * 65}
                                y1="70"
                                x2={50 + i * 65}
                                y2="320"
                                stroke="var(--brand-blue)"
                                strokeWidth="0.5"
                                strokeDasharray="4,4"
                            />
                        ))}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <line
                                key={`h${i}`}
                                x1="45"
                                y1={80 + i * 45}
                                x2="455"
                                y2={80 + i * 45}
                                stroke="var(--brand-blue)"
                                strokeWidth="0.5"
                                strokeDasharray="4,4"
                            />
                        ))}
                    </g>
                </g>

                {/* Scene 2: HTML Structure Blocks */}
                <g className={reducedMotion ? "" : "wd-html-blocks"}>
                    {/* Header Block */}
                    <rect
                        className={reducedMotion ? "" : "wd-block-header"}
                        x="50" y="70" width="400" height="40"
                        rx="4" ry="4"
                        fill="var(--brand-blue)"
                        fillOpacity="0.15"
                        stroke="var(--brand-blue)"
                        strokeWidth="1.5"
                        strokeOpacity="0.5"
                    />
                    <rect className={reducedMotion ? "" : "wd-label-header"} x="60" y="88" width="99" height="6" rx="3" fill="var(--brand-blue)" opacity="0.55" />

                    {/* Hero Section */}
                    <rect
                        className={reducedMotion ? "" : "wd-block-hero"}
                        x="50" y="120" width="400" height="80"
                        rx="4" ry="4"
                        fill="var(--brand-teal)"
                        fillOpacity="0.12"
                        stroke="var(--brand-teal)"
                        strokeWidth="1.5"
                        strokeOpacity="0.5"
                    />
                    <rect className={reducedMotion ? "" : "wd-label-hero"} x="60" y="142" width="110" height="6" rx="3" fill="var(--brand-teal)" opacity="0.55" />
                    <rect className={reducedMotion ? "" : "wd-label-h1"} x="60" y="156" width="131" height="9" rx="4.5" fill="var(--foreground)" opacity="0.7" />
                    <rect
                        className={reducedMotion ? "" : "wd-hero-cta"}
                        x="60" y="175"
                        width="80" height="18"
                        rx="4"
                        fill="var(--brand-blue)"
                        fillOpacity="0.3"
                    />

                    {/* Content Sections */}
                    <rect
                        className={reducedMotion ? "" : "wd-block-content1"}
                        x="50" y="210" width="190" height="60"
                        rx="4" ry="4"
                        fill="var(--brand-cyan)"
                        fillOpacity="0.1"
                        stroke="var(--brand-cyan)"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                    />
                    <rect className={reducedMotion ? "" : "wd-label-content1"} x="60" y="224" width="74" height="6" rx="3" fill="var(--brand-cyan)" opacity="0.55" />

                    <rect
                        className={reducedMotion ? "" : "wd-block-content2"}
                        x="260" y="210" width="190" height="60"
                        rx="4" ry="4"
                        fill="var(--brand-cyan)"
                        fillOpacity="0.1"
                        stroke="var(--brand-cyan)"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                    />
                    <rect className={reducedMotion ? "" : "wd-label-content2"} x="270" y="224" width="74" height="6" rx="3" fill="var(--brand-cyan)" opacity="0.55" />

                    {/* Footer */}
                    <rect
                        className={reducedMotion ? "" : "wd-block-footer"}
                        x="50" y="280" width="400" height="35"
                        rx="4" ry="4"
                        fill="var(--brand-blue)"
                        fillOpacity="0.1"
                        stroke="var(--brand-blue)"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                    />
                    <rect className={reducedMotion ? "" : "wd-label-footer"} x="60" y="296" width="69" height="6" rx="3" fill="var(--brand-blue)" opacity="0.55" />
                </g>

                {/* Scene 3-4: CSS & JS Styling Indicators */}
                <g className={reducedMotion ? "" : "wd-styling"}>
                    {/* CSS Color Swatches */}
                    <g className={reducedMotion ? "" : "wd-css-swatches"}>
                        <rect x="410" y="80" width="12" height="12" rx="2" fill="var(--brand-blue)" />
                        <rect x="425" y="80" width="12" height="12" rx="2" fill="var(--brand-teal)" />
                        <rect x="440" y="80" width="12" height="12" rx="2" fill="var(--brand-cyan)" />
                    </g>

                    {/* Alignment Lines */}
                    <g className={reducedMotion ? "" : "wd-align-lines"} opacity="0.5">
                        <line x1="50" y1="68" x2="50" y2="320" stroke="var(--brand-teal)" strokeWidth="1" strokeDasharray="2,2" />
                        <line x1="450" y1="68" x2="450" y2="320" stroke="var(--brand-teal)" strokeWidth="1" strokeDasharray="2,2" />
                    </g>

                    {/* JS Interactive Indicator */}
                    <g className={reducedMotion ? "" : "wd-js-indicator"}>
                        <circle cx="150" cy="184" r="3" fill="var(--brand-teal)" />
                        <rect x="158" y="183" width="27" height="4" rx="2" fill="var(--brand-teal)" opacity="0.55" />
                    </g>
                </g>

                {/* Scene 5: Component Highlight */}
                <g className={reducedMotion ? "" : "wd-components"}>
                    <rect
                        className="wd-component-highlight"
                        x="48" y="118" width="404" height="84"
                        rx="6" ry="6"
                        fill="none"
                        stroke="var(--brand-blue)"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                        opacity="0"
                    />
                    <rect className="wd-component-label" x="380" y="130" width="40" height="5" rx="2.5" fill="var(--brand-blue)" opacity="0" />
                </g>

                {/* Scene 6: Performance Indicators */}
                <g className={reducedMotion ? "" : "wd-performance"}>
                    <g className="wd-perf-meters">
                        <rect x="410" y="130" width="35" height="8" rx="2" fill="var(--border-color)" />
                        <rect className="wd-perf-bar" x="410" y="130" width="0" height="8" rx="2" fill="#28c840" />

                        <rect x="410" y="142" width="35" height="8" rx="2" fill="var(--border-color)" />
                        <rect className="wd-perf-bar2" x="410" y="142" width="0" height="8" rx="2" fill="#28c840" />

                        <rect x="410" y="154" width="35" height="8" rx="2" fill="var(--border-color)" />
                        <rect className="wd-perf-bar3" x="410" y="154" width="0" height="8" rx="2" fill="#28c840" />
                    </g>
                    <rect className="wd-perf-label" x="410" y="171" width="35" height="4" rx="2" fill="#28c840" opacity="0" />
                </g>

                {/* Scene 7: Responsive Devices */}
                <g className={reducedMotion ? "" : "wd-responsive"}>
                    {/* Tablet */}
                    <g className="wd-tablet" opacity="0">
                        <rect x="350" y="235" width="45" height="65" rx="4" fill="var(--card-bg)" stroke="var(--brand-blue)" strokeWidth="1" />
                        <rect x="354" y="245" width="37" height="45" rx="2" fill="var(--brand-blue)" fillOpacity="0.1" />
                    </g>

                    {/* Mobile */}
                    <g className="wd-mobile" opacity="0">
                        <rect x="405" y="245" width="30" height="55" rx="4" fill="var(--card-bg)" stroke="var(--brand-teal)" strokeWidth="1" />
                        <rect x="408" y="252" width="24" height="40" rx="2" fill="var(--brand-teal)" fillOpacity="0.1" />
                    </g>
                </g>

                {/* Scene 8: Validation Checkmarks */}
                <g className={reducedMotion ? "" : "wd-validation"}>
                    <g className="wd-check1" opacity="0">
                        <circle cx="435" y="90" r="8" fill="#28c840" />
                        <path d="M431 90 L434 93 L439 87" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </g>
                    <g className="wd-check2" opacity="0">
                        <circle cx="230" cy="160" r="8" fill="#28c840" />
                        <path d="M226 160 L229 163 L234 157" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </g>
                    <g className="wd-check3" opacity="0">
                        <circle cx="140" cy="240" r="8" fill="#28c840" />
                        <path d="M136 240 L139 243 L144 237" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </g>
                </g>

                {/* Scene 9: Cloud Deployment */}
                <g className={reducedMotion ? "" : "wd-deployment"}>
                    <g className="wd-cloud" opacity="0">
                        <ellipse cx="250" cy="365" rx="40" ry="20" fill="var(--brand-blue)" fillOpacity="0.2" />
                        <ellipse cx="230" cy="358" rx="20" ry="12" fill="var(--brand-blue)" fillOpacity="0.3" />
                        <ellipse cx="270" cy="358" rx="20" ry="12" fill="var(--brand-blue)" fillOpacity="0.3" />
                        <ellipse cx="250" cy="352" rx="25" ry="15" fill="var(--brand-teal)" fillOpacity="0.3" />
                    </g>
                    <g className="wd-lock" opacity="0">
                        <rect x="242" y="358" width="16" height="12" rx="2" fill="var(--brand-blue)" />
                        <path d="M245 358 V354 A5 5 0 0 1 255 354 V358" stroke="var(--brand-blue)" strokeWidth="2" fill="none" />
                    </g>
                </g>

                {/* Scene 10: Live Indicator */}
                <g className={reducedMotion ? "" : "wd-live"}>
                    <g className="wd-live-badge" opacity={reducedMotion ? "1" : "0"}>
                        <rect x="400" y="28" width="50" height="20" rx="10" fill="url(#wdLiveGlow)" filter="url(#wdGlow)" />
                        <circle cx="412" cy="38" r="4" fill="white">
                            {!reducedMotion && <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />}
                        </circle>
                        <rect x="420" y="36" width="20" height="6" rx="3" fill="white" opacity="0.55" />
                    </g>
                </g>

                {/* Code Snippets */}
                <g className={reducedMotion ? "" : "wd-code-snippets"}>
                    <g className="wd-code1" opacity="0">
                        <rect x="60" y="242" width="60" height="22" rx="3" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="0.5" />
                        <rect x="65" y="252" width="35" height="4" rx="2" fill="var(--brand-blue)" opacity="0.55" />
                    </g>
                    <g className="wd-code2" opacity="0">
                        <rect x="270" y="242" width="70" height="22" rx="3" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="0.5" />
                        <rect x="275" y="252" width="42" height="4" rx="2" fill="var(--brand-teal)" opacity="0.55" />
                    </g>
                </g>

                {/* Cursor */}
                <g className={reducedMotion ? "" : "wd-cursor"}>
                    <polygon
                        className="wd-pointer"
                        points="380,120 380,138 387,133 392,143 395,141 390,131 398,128"
                        fill="var(--foreground)"
                        stroke="var(--card-bg)"
                        strokeWidth="1"
                    />
                </g>
            </svg>

            {/* Animation Styles */}
            <style jsx>{`
                /* Scene Timing: 10s total loop */
                /* Scene 1: 0-1s (Browser fade in) */
                /* Scene 2: 1-2.5s (HTML blocks) */
                /* Scene 3: 2.5-3.5s (CSS styling) */
                /* Scene 4: 3.5-4.5s (JS interactivity) */
                /* Scene 5: 4.5-5.5s (Components) */
                /* Scene 6: 5.5-6.5s (Performance) */
                /* Scene 7: 6.5-7.5s (Responsive) */
                /* Scene 8: 7.5-8.5s (Validation) */
                /* Scene 9: 8.5-9.2s (Deployment) */
                /* Scene 10: 9.2-10s (Live) */

                .wd-browser-frame {
                    opacity: 0;
                    animation: wdFadeIn 1s ease-out forwards;
                }

                .wd-grid {
                    opacity: 0;
                    animation: wdFadeIn 0.5s ease-out 0.5s forwards;
                }

                /* HTML Blocks - Scene 2 */
                .wd-block-header { opacity: 0; animation: wdSlideInLeft 0.3s ease-out 1s forwards; }
                .wd-label-header { opacity: 0; animation: wdFadeIn 0.2s ease-out 1.1s forwards; }
                .wd-block-hero { opacity: 0; animation: wdSlideInLeft 0.3s ease-out 1.3s forwards; }
                .wd-label-hero { opacity: 0; animation: wdFadeIn 0.2s ease-out 1.4s forwards; }
                .wd-label-h1 { opacity: 0; animation: wdFadeIn 0.2s ease-out 1.5s forwards; }
                .wd-hero-cta { opacity: 0; animation: wdFadeIn 0.2s ease-out 1.6s forwards; }
                .wd-block-content1 { opacity: 0; animation: wdSlideInLeft 0.3s ease-out 1.8s forwards; }
                .wd-label-content1 { opacity: 0; animation: wdFadeIn 0.2s ease-out 1.9s forwards; }
                .wd-block-content2 { opacity: 0; animation: wdSlideInRight 0.3s ease-out 2s forwards; }
                .wd-label-content2 { opacity: 0; animation: wdFadeIn 0.2s ease-out 2.1s forwards; }
                .wd-block-footer { opacity: 0; animation: wdSlideInLeft 0.3s ease-out 2.3s forwards; }
                .wd-label-footer { opacity: 0; animation: wdFadeIn 0.2s ease-out 2.4s forwards; }

                /* CSS Styling - Scene 3 */
                .wd-css-swatches { opacity: 0; animation: wdFadeIn 0.3s ease-out 2.6s forwards; }
                .wd-align-lines { opacity: 0; animation: wdFadeIn 0.4s ease-out 2.8s forwards; }

                /* JS Interactivity - Scene 4 */
                .wd-js-indicator { opacity: 0; animation: wdPulseIn 0.5s ease-out 3.5s forwards; }
                .wd-hero-cta { animation: wdFadeIn 0.2s ease-out 1.6s forwards, wdButtonHover 1s ease-in-out 3.8s 2; }

                /* Components - Scene 5 */
                .wd-component-highlight { animation: wdDashIn 1s ease-out 4.5s forwards; }
                .wd-component-label { animation: wdFadeIn 0.3s ease-out 4.8s forwards; }

                /* Performance - Scene 6 */
                .wd-perf-bar { animation: wdGrowBar 0.5s ease-out 5.5s forwards; }
                .wd-perf-bar2 { animation: wdGrowBar 0.5s ease-out 5.7s forwards; }
                .wd-perf-bar3 { animation: wdGrowBar 0.5s ease-out 5.9s forwards; }
                .wd-perf-label { animation: wdFadeIn 0.3s ease-out 6.2s forwards; }

                /* Responsive - Scene 7 */
                .wd-tablet { animation: wdSlideUp 0.4s ease-out 6.5s forwards; }
                .wd-mobile { animation: wdSlideUp 0.4s ease-out 6.8s forwards; }

                /* Validation - Scene 8 */
                .wd-check1 { animation: wdPopIn 0.3s ease-out 7.5s forwards; }
                .wd-check2 { animation: wdPopIn 0.3s ease-out 7.7s forwards; }
                .wd-check3 { animation: wdPopIn 0.3s ease-out 7.9s forwards; }

                /* Deployment - Scene 9 */
                .wd-cloud { animation: wdFadeIn 0.4s ease-out 8.5s forwards; }
                .wd-lock { animation: wdPopIn 0.3s ease-out 8.8s forwards; }

                /* Live - Scene 10 */
                .wd-live-badge { animation: wdFadeIn 0.4s ease-out 9.2s forwards, wdGlow 2s ease-in-out 9.6s infinite; }

                /* Code Snippets */
                .wd-code1 { animation: wdFadeIn 0.3s ease-out 2.8s forwards; }
                .wd-code2 { animation: wdFadeIn 0.3s ease-out 3s forwards; }

                /* Cursor movement */
                .wd-pointer {
                    animation: wdCursorMove 10s ease-in-out infinite;
                }

                /* Keyframes */
                @keyframes wdFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes wdSlideInLeft {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes wdSlideInRight {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes wdSlideUp {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes wdPulseIn {
                    0% { opacity: 0; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes wdPopIn {
                    0% { opacity: 0; transform: scale(0); }
                    70% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes wdDashIn {
                    from { opacity: 0; stroke-dashoffset: 100; }
                    to { opacity: 0.7; stroke-dashoffset: 0; }
                }

                @keyframes wdGrowBar {
                    from { width: 0; }
                    to { width: 32px; }
                }

                @keyframes wdButtonHover {
                    0%, 100% { transform: scale(1); fill-opacity: 0.3; }
                    50% { transform: scale(1.05); fill-opacity: 0.5; }
                }

                @keyframes wdGlow {
                    0%, 100% { filter: url(#wdGlow) brightness(1); }
                    50% { filter: url(#wdGlow) brightness(1.2); }
                }

                @keyframes wdCursorMove {
                    0%, 10% { transform: translate(0, 0); }
                    15% { transform: translate(-50px, 30px); }
                    25% { transform: translate(-80px, 50px); }
                    35% { transform: translate(-100px, 80px); }
                    45% { transform: translate(-150px, 100px); }
                    55% { transform: translate(-120px, 130px); }
                    65% { transform: translate(-80px, 150px); }
                    75% { transform: translate(-50px, 100px); }
                    85% { transform: translate(-20px, 50px); }
                    95%, 100% { transform: translate(0, 0); }
                }

                /* Reduced motion: show static final state */
                @media (prefers-reduced-motion: reduce) {
                    .wd-browser-frame,
                    .wd-grid,
                    .wd-block-header,
                    .wd-label-header,
                    .wd-block-hero,
                    .wd-label-hero,
                    .wd-label-h1,
                    .wd-hero-cta,
                    .wd-block-content1,
                    .wd-label-content1,
                    .wd-block-content2,
                    .wd-label-content2,
                    .wd-block-footer,
                    .wd-label-footer,
                    .wd-css-swatches,
                    .wd-align-lines,
                    .wd-js-indicator,
                    .wd-code1,
                    .wd-code2,
                    .wd-perf-bar,
                    .wd-perf-bar2,
                    .wd-perf-bar3,
                    .wd-perf-label,
                    .wd-tablet,
                    .wd-mobile,
                    .wd-check1,
                    .wd-check2,
                    .wd-check3,
                    .wd-cloud,
                    .wd-lock,
                    .wd-live-badge {
                        animation: none !important;
                        opacity: 1 !important;
                    }
                    .wd-perf-bar,
                    .wd-perf-bar2,
                    .wd-perf-bar3 {
                        width: 32px !important;
                    }
                    .wd-pointer {
                        animation: none !important;
                    }
                }
            `}</style>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent, PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { Maximize, Minimize, MonitorPlay, Pause, Play, Volume2, VolumeX } from "lucide-react";
import type { Product } from "@/data/products";

const formatTime = (seconds: number) => {
    const s = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

const barButton =
    "w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

// The self-hosted demo player. It uses its own control bar instead of the
// browser's: progress bar on top, then play/pause and the time on the left,
// mute and full screen on the right. There is no ⋮ menu, so no download,
// playback speed or picture-in-picture (user, 27 Nov 2026).
function DemoVideoPlayer({ src, poster, name, color }: { src: string; poster: string; name: string; color: string }) {
    const boxRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hideTimer = useRef<number | undefined>(undefined);
    const lastPointer = useRef<string>("mouse");
    const endTimer = useRef<number | undefined>(undefined);
    const posterButtonRef = useRef<HTMLButtonElement>(null);
    const refocusPoster = useRef(false);
    const [started, setStarted] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [barAwake, setBarAwake] = useState(true);

    useEffect(() => {
        const onFullscreenChange = () => setFullscreen(document.fullscreenElement === boxRef.current);
        document.addEventListener("fullscreenchange", onFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", onFullscreenChange);
            window.clearTimeout(hideTimer.current);
            window.clearTimeout(endTimer.current);
        };
    }, []);

    // When the player goes back to the poster, a keyboard user whose focus was
    // on the control bar lands on the poster's play button, not the page top.
    useEffect(() => {
        if (!started && refocusPoster.current) {
            refocusPoster.current = false;
            posterButtonRef.current?.focus();
        }
    }, [started]);

    // 2 s after the video ends, the player goes back to how it first looked:
    // the poster with its play button, ready to start again from 0:00 (user,
    // 27 Nov 2026). Playing or seeking in those 2 s cancels it.
    const cancelReset = () => window.clearTimeout(endTimer.current);
    const onEnded = () => {
        setPlaying(false);
        cancelReset();
        endTimer.current = window.setTimeout(() => {
            const box = boxRef.current;
            const video = videoRef.current;
            if (box && document.fullscreenElement === box) void document.exitFullscreen();
            refocusPoster.current = !!box && box.contains(document.activeElement);
            if (video) video.currentTime = 0;
            setTime(0);
            setStarted(false);
        }, 2000);
    };

    // timeupdate fires only about 4 times a second, so while playing the
    // progress bar follows the video every frame instead.
    useEffect(() => {
        if (!playing) return;
        let frame = 0;
        const tick = () => {
            if (videoRef.current) setTime(videoRef.current.currentTime);
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [playing]);

    // The bar always shows while paused. While playing it hides 2.5 s after the
    // last mouse move, touch or key press, like any video player.
    const wake = () => {
        setBarAwake(true);
        window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setBarAwake(false), 2500);
    };
    const showBar = started && (!playing || barAwake);

    // play() runs inside the click itself, so every browser (Safari included)
    // treats it as the visitor's choice and plays with sound.
    const start = () => {
        setStarted(true);
        wake();
        void videoRef.current?.play();
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused || video.ended) void video.play();
        else video.pause();
        wake();
    };

    // A mouse click on the picture plays or pauses. A tap only shows or hides
    // the bar, so a phone user reaching for the controls doesn't pause it.
    const onPictureClick = () => {
        if (lastPointer.current === "mouse") togglePlay();
        else if (showBar && playing) setBarAwake(false);
        else wake();
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        wake();
    };

    const seek = (e: ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Number(e.target.value);
        setTime(video.currentTime);
        wake();
    };

    // Arrow keys on the progress bar jump 5 s, as in other players (the
    // slider's own 0.1 s step is too fine for the keyboard).
    const onSeekKey = (e: KeyboardEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;
        const steps: Record<string, number> = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5 };
        const step = steps[e.key];
        if (step === undefined) return;
        e.preventDefault();
        video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + step));
        setTime(video.currentTime);
        wake();
    };

    const toggleFullscreen = () => {
        const box = boxRef.current;
        const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
        if (!box || !video) return;
        if (document.fullscreenElement) {
            void document.exitFullscreen();
        } else if (box.requestFullscreen) {
            box.requestFullscreen().catch(() => {});
        } else {
            // iPhone Safari can only put the video itself full screen, in iOS's own player.
            video.webkitEnterFullscreen?.();
        }
        wake();
    };

    const progress = duration > 0 ? Math.min(100, (time / duration) * 100) : 0;

    return (
        // No right-click / long-press menu, so there is no "Save video as",
        // "Copy video address" or "Open video in new tab". In full screen the
        // browser sizes the box to the screen and the video letterboxes inside it.
        <div
            ref={boxRef}
            className={`relative w-full aspect-video bg-zinc-900 [&:fullscreen]:bg-black ${started && !showBar ? "cursor-none" : ""}`}
            onContextMenu={(e) => e.preventDefault()}
            onMouseMove={started ? wake : undefined}
            onKeyDown={started ? wake : undefined}
        >
            {/* preload="none": the video downloads only after the visitor
                presses play, never on page load. No native controls; the
                attributes below also keep the browser from offering download,
                speed, picture-in-picture or casting. src/proxy.ts refuses the
                file outside this player. */}
            <video
                ref={videoRef}
                src={src}
                preload="none"
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload noplaybackrate"
                aria-label={`${name} product demo video`}
                className="absolute inset-0 w-full h-full select-none [-webkit-touch-callout:none]"
                onPointerDown={(e: ReactPointerEvent<HTMLVideoElement>) => { lastPointer.current = e.pointerType; }}
                onClick={started ? onPictureClick : undefined}
                onPlay={() => {
                    cancelReset();
                    setPlaying(true);
                }}
                onSeeking={cancelReset}
                onPause={() => setPlaying(false)}
                onEnded={onEnded}
                onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onDurationChange={(e) => setDuration(e.currentTarget.duration)}
                onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
            />

            {!started && (
                // The whole poster is the play button. The icon sits below the
                // title card's text, not over it.
                <button
                    ref={posterButtonRef}
                    type="button"
                    onClick={start}
                    aria-label={`Play the ${name} demo video`}
                    className="group/play absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none"
                >
                    <Image src={poster} alt="" fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
                    <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-[87%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 min-[400px]:w-10 min-[400px]:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/40 transition-transform duration-300 group-hover/play:scale-110 group-focus-visible/play:ring-4 group-focus-visible/play:ring-white"
                        style={{ backgroundColor: color }}
                    >
                        <Play className="w-3.5 h-3.5 min-[400px]:w-4 min-[400px]:h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ml-0.5 sm:ml-1 fill-current" style={{ color: "#fff" }} />
                    </span>
                </button>
            )}

            {started && (
                <div
                    className={`absolute inset-x-0 bottom-0 px-2 sm:px-4 pt-6 sm:pt-10 pb-1 sm:pb-2 bg-gradient-to-t from-black/75 via-black/35 to-transparent transition-opacity duration-300 ${showBar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    onFocus={wake}
                >
                    {/* Progress bar, above the time. The range input on top does the
                        seeking (mouse, touch and arrow keys); the bars under it are
                        what people see. */}
                    <div className="relative h-4 mx-1 sm:mx-2 flex items-center group/seek">
                        <input
                            type="range"
                            min={0}
                            max={duration || 0}
                            step={0.1}
                            value={Math.min(time, duration || 0)}
                            onChange={seek}
                            onKeyDown={onSeekKey}
                            aria-label="Seek"
                            aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
                            className="peer absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                        />
                        <span aria-hidden="true" className="absolute inset-x-0 h-1 group-hover/seek:h-1.5 rounded-full bg-white/30 transition-[height]" />
                        <span aria-hidden="true" className="absolute left-0 h-1 group-hover/seek:h-1.5 rounded-full transition-[height]" style={{ width: `${progress}%`, backgroundColor: color }} />
                        <span aria-hidden="true" className="absolute w-3 h-3 rounded-full -translate-x-1/2 shadow peer-focus-visible:ring-2 peer-focus-visible:ring-white" style={{ left: `${progress}%`, backgroundColor: color }} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button type="button" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"} className={barButton}>
                                {playing ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current" />}
                            </button>
                            <span className="text-xs sm:text-sm font-medium tabular-nums text-white">
                                {formatTime(time)} / {formatTime(duration)}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className={barButton}>
                                {muted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>
                            <button type="button" onClick={toggleFullscreen} aria-label={fullscreen ? "Exit full screen" : "Full screen"} className={barButton}>
                                {fullscreen ? <Minimize className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ProductDemo({ product }: { product: Product }) {
    // No video, no section: a "Product walkthrough coming soon" placeholder read
    // as unfinished (SEO check, 24 Nov 2026). A demoVideo or demoVideoUrl brings it back.
    if (!product.demoVideo && !product.demoVideoUrl) return null;

    const color = product.accentColor;

    // Vivid accents stay for backgrounds/borders/gradients; TEXT uses the
    // theme-aware AA tokens so the same hue passes in light and dark.
    const textAccent = (c: string) => ({
        "#008ac1": "var(--brand-blue-text)",
        "#00b5ca": "var(--accent-teal-text)",
        "#4e51d2": "var(--accent-indigo-text)",
        "#6db75c": "var(--accent-green-text)",
        "#f72585": "var(--accent-pink-text)",
        "#bc3feb": "var(--brand-purple-text)",
        "#ee6500": "var(--accent-orange-text)",
        "#fc9700": "var(--accent-chime-text)",
    }[c?.toLowerCase()] ?? c);
    const textColor = textAccent(color);

    return (
        <section className="py-16 md:py-20 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10 max-w-6xl">
                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-block mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold leading-none border" style={{ backgroundColor: "var(--card-bg)", borderColor: `${color}30`, color: textColor }}>
                            <MonitorPlay aria-hidden="true" className="flex-shrink-0" style={{ width: "1.15em", height: "1.15em", color }} />
                            Product Demo
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                        See <span style={{ color: textColor }}>{product.name}</span> in Action
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        Watch how our features can streamline your workflow and boost your productivity instantly.
                    </p>
                </div>
                
                <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border shadow-2xl group" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}>
                    {/* A 16:9 player */}
                    {product.demoVideo ? (
                        <DemoVideoPlayer src={product.demoVideo.src} poster={product.demoVideo.poster} name={product.name} color={color} />
                    ) : (
                        <div className="relative w-full bg-zinc-900" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                src={product.demoVideoUrl}
                                title={`${product.name} product demo video`}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

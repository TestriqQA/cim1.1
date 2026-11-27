import Image from "next/image";
import { Signal, Wifi, BatteryFull } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// A phone drawn in code for the mobile app heroes (user, 27 Nov 2026, iOS page: chose "A ·
// Phone home screen" for the hero's right side). A generic phone frame (no Apple logo or
// exact device), an open folder with the page's tools as app icons, and a dock with the
// platforms. It follows the light/dark theme, needs no image, and is sharp at any size.

type App = {
    name: string;
    // a logo that is already an app icon (Swift, Xcode, TestFlight)
    logo?: string;
    // the icon's body fills only part of some images (Xcode, TestFlight: 80%), so they're
    // scaled up to match the 56px tiles
    logoScale?: number;
    // otherwise an icon on a gradient tile
    icon?: LucideIcon;
    tile?: string;
};
type DockItem = { name: string; icon: LucideIcon; tile: string };
// wallpaper: three colours mixed into the page background (default: the iOS blue, indigo
// and purple), so each page's phone wears its own palette
type Props = { title: string; apps: App[]; dock?: DockItem[]; dockLabel?: string; wallpaper?: [string, string, string] };

export default function PhoneHomeScreen({ title, apps, dock, dockLabel, wallpaper = ["#007AFF", "#5856D6", "#AF52DE"] }: Props) {
    const [c1, c2, c3] = wallpaper;
    return (
        <div role="group" aria-label={title} className="relative w-[280px] xl:w-[300px] aspect-[9/19]">
            {/* Side buttons */}
            <span aria-hidden="true" className="absolute -left-[3px] top-[22%] w-[3px] h-[7%] rounded-l-sm bg-[#3a3a3c]" />
            <span aria-hidden="true" className="absolute -left-[3px] top-[31%] w-[3px] h-[7%] rounded-l-sm bg-[#3a3a3c]" />
            <span aria-hidden="true" className="absolute -right-[3px] top-[26%] w-[3px] h-[11%] rounded-r-sm bg-[#3a3a3c]" />

            {/* Frame: near-black in both themes, with a hairline so it shows on the dark page */}
            <div className="h-full rounded-[3rem] p-2.5 bg-[#1d1d1f] ring-1 ring-[var(--border-color)]">
                <div
                    className="relative h-full rounded-[2.5rem] overflow-hidden flex flex-col"
                    style={{
                        background: `linear-gradient(165deg, color-mix(in srgb, ${c1} 30%, var(--background)) 0%, color-mix(in srgb, ${c2} 24%, var(--background)) 55%, color-mix(in srgb, ${c3} 22%, var(--background)) 100%)`,
                    }}
                >
                    {/* Camera cut-out */}
                    <span aria-hidden="true" className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[30%] h-6 rounded-full bg-black" />

                    {/* Status bar */}
                    <div aria-hidden="true" className="flex items-center justify-between px-6 pt-3 h-10 text-[13px] font-semibold" style={{ color: "var(--foreground)" }}>
                        <span>9:41</span>
                        <span className="flex items-center gap-1">
                            <Signal className="w-3.5 h-3.5" />
                            <Wifi className="w-3.5 h-3.5" />
                            <BatteryFull className="w-4 h-4" />
                        </span>
                    </div>

                    {/* Open folder with the tools, centred in the free space */}
                    <div className="flex-1 flex items-center px-4">
                        <div
                            className="w-full rounded-3xl border border-[var(--border-color)] px-3 pt-4 pb-5"
                            style={{ backgroundColor: "color-mix(in srgb, var(--card-bg) 78%, transparent)" }}
                        >
                            <p className="text-sm font-semibold text-center mb-4" style={{ color: "var(--foreground)" }}>
                                {title}
                            </p>
                            <ul className="grid grid-cols-3 gap-x-1 gap-y-4">
                                {apps.map((app) => {
                                    const Icon = app.icon;
                                    return (
                                        <li key={app.name} className="flex flex-col items-center gap-1.5 min-w-0">
                                            {app.logo ? (
                                                <Image src={app.logo} alt="" width={56} height={56} className="w-14 h-14 object-contain rounded-[14px]" style={app.logoScale ? { transform: `scale(${app.logoScale})` } : undefined} />
                                            ) : (
                                                <span
                                                    aria-hidden="true"
                                                    className="w-14 h-14 rounded-[14px] flex items-center justify-center"
                                                    style={{ background: app.tile }}
                                                >
                                                    {Icon && <Icon className="w-7 h-7 text-white" />}
                                                </span>
                                            )}
                                            <span className="text-[11px] font-medium leading-tight text-center" style={{ color: "var(--foreground)" }}>
                                                {app.name}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Page dots */}
                    <div aria-hidden="true" className="flex justify-center gap-1.5 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--foreground)" }} />
                        <span className="w-1.5 h-1.5 rounded-full opacity-40" style={{ backgroundColor: "var(--foreground)" }} />
                    </div>

                    {/* Dock: the platforms (names for screen readers; a dock has no labels) */}
                    {dock && dock.length > 0 && (
                        <ul
                            aria-label={dockLabel}
                            className="mx-3 mb-6 rounded-[1.75rem] border border-[var(--border-color)] p-2.5 grid gap-2"
                            // one column per item, so three platforms spread out instead of leaving a gap
                            style={{ backgroundColor: "color-mix(in srgb, var(--card-bg) 70%, transparent)", gridTemplateColumns: `repeat(${dock.length}, minmax(0, 1fr))` }}
                        >
                            {dock.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.name} className="flex justify-center">
                                        <span
                                            className="w-12 h-12 rounded-[13px] flex items-center justify-center"
                                            style={{ background: item.tile }}
                                            title={item.name}
                                        >
                                            <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                                            <span className="sr-only">{item.name}</span>
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {/* Home indicator */}
                    <span aria-hidden="true" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[38%] h-1 rounded-full opacity-60" style={{ backgroundColor: "var(--foreground)" }} />
                </div>
            </div>
        </div>
    );
}

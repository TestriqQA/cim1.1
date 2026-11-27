import { NextResponse, type NextRequest } from "next/server";

// Self-hosted demo videos (public/videos) are for watching in the site's own
// players, not for saving.
//
// A <video> on one of our pages asks for its file from our own site
// (Sec-Fetch-Site: same-origin) in "no-cors" mode. Every other way of getting
// the file looks different to the browser, and gets 403:
//   - opening or pasting the file's address in a tab ("navigate"),
//   - fetch()/XHR from a page, a console or an extension ("cors"),
//   - another website embedding or linking it ("cross-site"),
//   - typing the address, bookmarks, extensions' own requests ("none").
//
// Requests with no Sec-Fetch-* headers at all are let through, because some
// media players (iOS's native player among them) and older browsers do not send
// them; refusing them would stop real visitors from watching. This stops the
// ordinary ways of saving the video, not a determined copier: a tool that fakes
// these headers, or a screen recording, still gets it. No website can prevent
// that for a video it lets people watch.
export function proxy(request: NextRequest) {
    const site = request.headers.get("sec-fetch-site");
    const mode = request.headers.get("sec-fetch-mode");

    if (site === null && mode === null) return NextResponse.next();

    const fromOwnPage = site === "same-origin" || site === "same-site";
    if (fromOwnPage && mode === "no-cors") return NextResponse.next();

    return new NextResponse("Forbidden", {
        status: 403,
        headers: { "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8" },
    });
}

export const config = {
    matcher: ["/videos/:path*"],
};

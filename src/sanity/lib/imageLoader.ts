import type { ImageLoaderProps } from 'next/image';

/**
 * `next/image` loader for URLs that already point at Sanity's CDN.
 *
 * `mapper.ts` hands out ONE fixed-width URL per asset (posts `w=1200`, avatars
 * `w=400`), so a card that renders at 383px still downloaded the 1200px file and
 * a 24px avatar downloaded the 400px one — `sizes` was inert because
 * `unoptimized` suppresses srcset generation.
 *
 * Rewriting `w` per requested width lets next/image emit a real srcset while the
 * bytes still come straight from Sanity's CDN — no `/_next/image` hop and no
 * Vercel image-optimization units, which is why these images were marked
 * `unoptimized` in the first place. `fit=max` and `auto=format` ride along
 * untouched, so aspect ratios and format negotiation are unchanged.
 */
export function sanityImageLoader({ src, width, quality }: ImageLoaderProps): string {
    if (!src.startsWith('https://cdn.sanity.io/')) return src;

    const url = new URL(src);
    url.searchParams.set('w', String(width));
    url.searchParams.set('q', String(quality ?? 75));
    return url.toString();
}

// Tech Stack logos on the mobile app pages, the same treatment as the website-type pages
// (user, 26 Nov 2026: "remove the white background from logos"): a logo whose image had a
// white background baked in, or a lot of empty padding, has a cleaned, trimmed copy in
// /images/techstack_logos/no-bg/mobile/ (the originals stay as they are for other pages).
// invert "dark": a dark logo that would vanish on the dark-mode tile, so it is shown
// inverted there (hue kept). Logos not listed are used as they are.
// invert "light": a white logo that would vanish on the light-mode tile, inverted there.
export type TechLogo = { src: string; invert?: "dark" | "light" };

const cleaned: Record<string, TechLogo> = {
    "/images/ai_automation_logos/sap-logo.webp": { src: "/images/techstack_logos/no-bg/mobile/sap-logo.webp" },
    "/images/techstack_logos/Android-Studio-logo.png": { src: "/images/techstack_logos/no-bg/mobile/Android-Studio-logo.webp" },
    "/images/techstack_logos/aws-logo.png": { src: "/images/techstack_logos/no-bg/mobile/aws-logo.webp" },
    "/images/techstack_logos/Bloc-logo.png": { src: "/images/techstack_logos/Bloc-logo.png", invert: "dark" },
    "/images/techstack_logos/Combine-logo.png": { src: "/images/techstack_logos/Combine-logo.png", invert: "dark" },
    "/images/techstack_logos/Dart-logo.png": { src: "/images/techstack_logos/no-bg/mobile/Dart-logo.webp" },
    "/images/techstack_logos/dotnet-logo.png": { src: "/images/techstack_logos/no-bg/mobile/dotnet-logo.webp" },
    "/images/techstack_logos/Gradle-logo.png": { src: "/images/techstack_logos/Gradle-logo.png", invert: "dark" },
    "/images/techstack_logos/jest-logo.webp": { src: "/images/techstack_logos/no-bg/mobile/jest-logo.webp" },
    "/images/techstack_logos/jetpack-compose-logo.png": { src: "/images/techstack_logos/no-bg/mobile/jetpack-compose-logo.webp" },
    "/images/techstack_logos/Keychain-logo.png": { src: "/images/techstack_logos/no-bg/mobile/Keychain-logo.webp" },
    "/images/techstack_logos/kotlin-logo.svg": { src: "/images/techstack_logos/no-bg/mobile/kotlin-logo.webp" },
    "/images/techstack_logos/MobileIron-logo.png": { src: "/images/techstack_logos/no-bg/mobile/MobileIron-logo.webp" },
    "/images/techstack_logos/mongodb-logo.svg": { src: "/images/techstack_logos/no-bg/mobile/mongodb-logo.webp" },
    "/images/techstack_logos/OAuth2-logo.jpg": { src: "/images/techstack_logos/no-bg/mobile/OAuth2-logo.webp", invert: "dark" },
    "/images/techstack_logos/pwa-logo.png": { src: "/images/techstack_logos/no-bg/mobile/pwa-logo.webp", invert: "dark" },
    "/images/techstack_logos/REST-API-logo.png": { src: "/images/techstack_logos/REST-API-logo.png", invert: "dark" },
    "/images/techstack_logos/Salesforce-logo.png": { src: "/images/techstack_logos/no-bg/mobile/Salesforce-logo.webp" },
    "/images/techstack_logos/Sass-SCSS-logo.png": { src: "/images/techstack_logos/no-bg/mobile/Sass-SCSS-logo.webp" },
    "/images/techstack_logos/XCTest-logo.png": { src: "/images/techstack_logos/no-bg/mobile/XCTest-logo.webp" },
};

export const techLogo = (path: string): TechLogo => cleaned[path] ?? { src: path };

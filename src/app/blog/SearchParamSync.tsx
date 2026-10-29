"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface SearchParamSyncProps {
    onSearchChange: (search: string) => void;
}

/**
 * Isolates the `useSearchParams()` dependency so the rest of BlogClient can be
 * server-prerendered. `useSearchParams()` opts its subtree out of static HTML
 * (it needs a Suspense boundary), so keeping it in a leaf that renders `null`
 * lets the hero + post grid paint from static HTML instead of waiting for
 * hydration. Mount this inside its own <Suspense fallback={null}>.
 */
export default function SearchParamSync({ onSearchChange }: SearchParamSyncProps) {
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";

    useEffect(() => {
        onSearchChange(search);
    }, [search, onSearchChange]);

    return null;
}

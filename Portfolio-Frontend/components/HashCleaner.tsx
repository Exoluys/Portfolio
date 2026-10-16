"use client"

import { useEffect } from "react"
import { scrollToTarget } from "@/lib/scroll"

export function HashCleaner() {
    useEffect(() => {
        const hash = window.location.hash.replace("#", "")
        if (hash) {
            // Scroll to the target once on initial load
            scrollToTarget(hash)
            // Strip the hash from URL without adding a history state
            window.history.replaceState(null, "", window.location.pathname + window.location.search)
        }
    }, [])

    return null
}

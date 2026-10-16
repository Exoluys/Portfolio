"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { scrollToTarget } from "@/lib/scroll"

export function HashCleaner() {
    const pathname = usePathname()

    useEffect(() => {
        // Handle cross-page pending scroll without hash
        const pending = sessionStorage.getItem("pendingScroll")
        if (pending && pathname === "/") {
            sessionStorage.removeItem("pendingScroll")
            setTimeout(() => {
                scrollToTarget(pending)
            }, 50)
            return
        }

        // Handle one-time initial URL hash cleanup if user typed /#something directly
        const hash = window.location.hash.replace("#", "")
        if (hash) {
            scrollToTarget(hash)
            window.history.replaceState(null, "", window.location.pathname + window.location.search)
        }
    }, [pathname])

    return null
}

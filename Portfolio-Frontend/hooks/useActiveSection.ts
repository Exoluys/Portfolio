"use client"

import { useEffect, useRef, useState } from "react"
import { scrollToTarget } from "@/lib/scroll"

const DEFAULT_SECTIONS = ["home", "about", "skills", "work", "contact"]
const STORAGE_KEY = "activeSection"

export function useActiveSection(sectionIds: string[] = DEFAULT_SECTIONS) {
    const [activeSection, setActiveSection] = useState<string>("home")
    const isRestoringRef = useRef<boolean>(true)
    const restoreTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        // Prevent browser instant jump from fighting smooth restoration
        if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }

        // 1. Read saved section ONCE at startup before scroll-spy can write anything
        let initialTarget: string | null = null
        try {
            initialTarget = sessionStorage.getItem(STORAGE_KEY)
        } catch {
            // Storage access might be restricted in some privacy modes
        }

        const isHomeRoute = window.location.pathname === "/"
        // Check if navigation was a reload (performance navigation type reload)
        const isReload = (() => {
            const navEntries = performance.getEntriesByType("navigation")
            if (navEntries.length > 0) {
                return (navEntries[0] as PerformanceNavigationTiming).type === "reload"
            }
            // Fallback for older spec
            return (performance as unknown as { navigation?: { type: number } })?.navigation?.type === 1
        })()

        if (isHomeRoute && isReload && initialTarget && initialTarget !== "home") {
            const targetId = initialTarget

            // Wait for DOM layout / fonts to settle
            const rafId = requestAnimationFrame(() => {
                setActiveSection(targetId)
                // Ensure page starts at top so the smooth scroll is visible
                window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })

                setTimeout(() => {
                    scrollToTarget(targetId)

                    // Allow time for smooth scroll to finish before enabling scroll-spy storage updates
                    restoreTimeoutRef.current = setTimeout(() => {
                        isRestoringRef.current = false
                    }, 1000)
                }, 60)
            })

            return () => {
                cancelAnimationFrame(rafId)
                if (restoreTimeoutRef.current) clearTimeout(restoreTimeoutRef.current)
            }
        } else {
            // Not a reload or home target: unlock immediately
            isRestoringRef.current = false
        }
    }, [])

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollY = window.scrollY
            const navHeight = 64 // 4rem = 64px (--nav-height)
            const triggerLine = scrollY + navHeight + 80

            let current = "home"

            // If near top, current is always home
            if (scrollY >= 120) {
                // Check sections from bottom to top
                for (let i = sectionIds.length - 1; i >= 0; i--) {
                    const id = sectionIds[i]
                    if (id === "home") continue

                    const element = document.getElementById(id)
                    if (element) {
                        const top = element.offsetTop
                        if (triggerLine >= top) {
                            current = id
                            break
                        }
                    }
                }
            }

            setActiveSection(current)

            // Only persist to sessionStorage when not currently performing initial restoration
            if (!isRestoringRef.current) {
                try {
                    sessionStorage.setItem(STORAGE_KEY, current)
                } catch {
                    // Ignore storage quota / restriction errors
                }
            }
        }

        // Run once layout is ready
        updateActiveSection()

        window.addEventListener("scroll", updateActiveSection, { passive: true })
        window.addEventListener("resize", updateActiveSection, { passive: true })

        return () => {
            window.removeEventListener("scroll", updateActiveSection)
            window.removeEventListener("resize", updateActiveSection)
        }
    }, [sectionIds])

    return activeSection
}

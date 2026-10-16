"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"
import { Sun, Moon } from "lucide-react"

const emptySubscribe = () => () => {}

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const isMounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    )

    if (!isMounted) {
        return <div className="w-6 h-6" aria-hidden="true" />
    }

    const isDark = resolvedTheme === "dark"

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
        >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
    )
}

"use client"

import { useEffect, useState } from "react"

const DEFAULT_SECTIONS = ["home", "about", "skills", "work", "contact"]

export function useActiveSection(sectionIds: string[] = DEFAULT_SECTIONS) {
    const [activeSection, setActiveSection] = useState<string>("home")

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollY = window.scrollY
            const navHeight = 64 // 4rem = 64px
            const triggerLine = scrollY + navHeight + 80

            // If near top, always clear to home
            if (scrollY < 120) {
                setActiveSection("home")
                return
            }

            // Check sections from bottom to top
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const id = sectionIds[i]
                if (id === "home") continue

                const element = document.getElementById(id)
                if (element) {
                    const top = element.offsetTop
                    if (triggerLine >= top) {
                        setActiveSection(id)
                        return
                    }
                }
            }

            setActiveSection("home")
        }

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

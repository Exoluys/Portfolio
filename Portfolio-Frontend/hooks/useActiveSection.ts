"use client"

import { useEffect, useState } from "react"

const DEFAULT_SECTIONS = ["home", "about", "skills", "contact"]

export function useActiveSection(sectionIds: string[] = DEFAULT_SECTIONS) {
    const [activeSection, setActiveSection] = useState<string>("home")

    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: "-20% 0px -55% 0px",
            threshold: 0,
        })

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) {
                observer.observe(el)
            }
        })

        const handleTopScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection("home")
            }
        }
        window.addEventListener("scroll", handleTopScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", handleTopScroll)
        }
    }, [sectionIds])

    return activeSection
}

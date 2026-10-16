"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToTarget } from "@/lib/scroll"
import { NavLinkItem } from "@/data/portfolio"
import { ThemeToggle } from "./ThemeToggle"

interface NavLinksProps {
    links: NavLinkItem[]
}

export function NavLinks({ links }: NavLinksProps) {
    const [mobileOpen, setMobileOpen] = useState(false)
    // Observe all in-page sections on the home page
    const scrollSectionIds = ["home", "about", "skills", "work", "contact"]
    const activeSection = useActiveSection(scrollSectionIds)
    const pathname = usePathname()
    const router = useRouter()

    const handleNav = (targetId: string, isPage?: boolean) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        setMobileOpen(false)
        if (isPage) {
            return
        }

        e.preventDefault()

        if (pathname === "/") {
            scrollToTarget(targetId)
        } else {
            // Navigate to home, but DO NOT append hash to URL
            sessionStorage.setItem("pendingScroll", targetId)
            router.push("/")
        }
    }

    return (
        <div className="flex items-center gap-6 md:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
                {links.map((link) => {
                    const isCurrent = link.isPage
                        ? pathname === link.href
                        : pathname === "/" && activeSection === link.targetId

                    return (
                        <Link
                            key={link.targetId}
                            href={link.href}
                            onClick={handleNav(link.targetId, link.isPage)}
                            aria-current={isCurrent ? "page" : undefined}
                            className={`relative py-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground ${
                                isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                            }`}
                        >
                            <span>{link.label}</span>
                            {isCurrent && (
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground transition-all" />
                            )}
                        </Link>
                    )
                })}
            </nav>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1.5 text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
            >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-5 md:hidden text-xs font-mono uppercase tracking-widest shadow-sm">
                    {links.map((link) => {
                        const isCurrent = link.isPage
                            ? pathname === link.href
                            : pathname === "/" && activeSection === link.targetId

                        return (
                            <Link
                                key={link.targetId}
                                href={link.href}
                                onClick={handleNav(link.targetId, link.isPage)}
                                aria-current={isCurrent ? "page" : undefined}
                                className={`py-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground ${
                                    isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

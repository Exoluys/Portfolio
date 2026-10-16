"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { portfolioData } from "@/data/portfolio"
import { scrollToTarget } from "@/lib/scroll"

const Hero = () => {
    const { personal } = portfolioData
    const pathname = usePathname()
    const router = useRouter()

    const handleActionClick = (targetId: string, isPage?: boolean) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isPage) return

        e.preventDefault()

        if (pathname === "/") {
            scrollToTarget(targetId)
        } else {
            sessionStorage.setItem("pendingScroll", targetId)
            router.push("/")
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24 sm:py-32 lg:py-40 flex flex-col justify-center">
            {/* Metadata Mono Label */}
            <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-[1px] bg-muted-foreground/60" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Available for select projects
                </span>
            </div>

            {/* Giant Fluid Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-foreground font-normal mb-8 max-w-5xl">
                {personal.name}
                <span className="block italic text-muted-foreground font-light text-4xl sm:text-6xl lg:text-7xl mt-2 sm:mt-3">
                    {personal.tagline || personal.role}
                </span>
            </h1>

            {/* Quiet Supporting Description (max 65ch) */}
            <p className="max-w-[65ch] text-base sm:text-lg text-muted-foreground leading-relaxed font-sans mb-12">
                {personal.heroSubtext}
            </p>

            {/* Restrained Underlined Text Links */}
            <div className="flex flex-wrap items-center gap-8 font-mono text-xs uppercase tracking-widest">
                <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-2 text-foreground font-medium pb-1 border-b border-foreground hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                >
                    <span>View work</span>
                    <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                </Link>
                <Link
                    href="/#contact"
                    onClick={handleActionClick("contact")}
                    className="inline-flex items-center gap-2 text-foreground font-medium pb-1 border-b border-foreground hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                >
                    <span>Get in touch</span>
                </Link>
            </div>
        </div>
    )
}

export default Hero
import type { Metadata } from "next"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import { ProjectList } from "@/components/sections/ProjectList"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
    title: "Work",
    description: "A chronological archive of web systems, tools, and digital projects by Jai Revankar.",
}

export default function PortfolioPage() {
    const { projects } = portfolioData

    return (
        <div className="flex flex-col min-h-[calc(100vh-var(--nav-height))] justify-between">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20 sm:py-28 lg:py-36">
            {/* Header with 12-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 sm:mb-24">
                <div className="lg:col-span-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                        Archive
                    </span>
                    <Link
                        href="/"
                        className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    >
                        <span>← Back to home</span>
                    </Link>
                </div>

                <div className="lg:col-span-9">
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground tracking-tight mb-6">
                        Selected Work
                    </h1>
                    <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-[65ch] leading-relaxed">
                        An index of web platforms, automation tools, and user interfaces developed with Python, Django, Next.js, and clean software architecture.
                    </p>
                </div>
            </div>

            {/* Project List */}
            <div className="max-w-7xl mx-auto">
                <ProjectList
                    projects={projects}
                    placeholderText="Selected work, coming soon."
                />
            </div>
            </div>
            <Footer />
        </div>
    )
}
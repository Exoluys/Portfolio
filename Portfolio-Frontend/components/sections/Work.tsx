import Link from "next/link"
import { portfolioData } from "@/data/portfolio"
import { ProjectList } from "./ProjectList"

const Work = () => {
    const { projects } = portfolioData
    // Home page displays up to 3 projects
    const displayedProjects = projects.slice(0, 3)

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            {/* 12-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column: Numbered TOC Section Label */}
                <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-24">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                            03 — Work
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
                            Selected Projects
                        </h2>
                    </div>
                </div>

                {/* Right Columns: Project Index & Link to Full Portfolio */}
                <div className="lg:col-span-9 flex flex-col gap-8">
                    <ProjectList
                        projects={displayedProjects}
                        placeholderText="Selected work, coming soon."
                    />

                    <div className="pt-4">
                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-2 text-foreground font-medium pb-1 border-b border-foreground font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
                        >
                            <span>View all work</span>
                            <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work

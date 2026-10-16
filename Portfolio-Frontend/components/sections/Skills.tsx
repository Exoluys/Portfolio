import { portfolioData } from "@/data/portfolio"

const Skills = () => {
    const { skills } = portfolioData

    const skillGroups = [
        {
            label: "Daily",
            number: "01",
            items: skills.usingNow,
            description: "Core technologies and libraries I work with on daily basis.",
        },
        {
            label: "Learning",
            number: "02",
            items: skills.learning,
            description: "Currently expanding depth and actively building projects with.",
        },
        {
            label: "Also",
            number: "03",
            items: skills.otherSkills,
            description: "Supporting tools, databases, and secondary proficiencies.",
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            {/* 12-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column: Numbered TOC Section Label */}
                <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-24">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                            02 — Skills
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
                            Tooling &amp; Stack
                        </h2>
                    </div>
                </div>

                {/* Right Columns: Typographic Editorial Group List */}
                <div className="lg:col-span-9 flex flex-col divide-y divide-border border-y border-border">
                    {skillGroups.map((group) => (
                        <div
                            key={group.label}
                            className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
                        >
                            {/* Group Number & Title */}
                            <div className="md:col-span-4 flex flex-col gap-1">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs text-muted-foreground">
                                        ({group.number})
                                    </span>
                                    <h3 className="font-serif text-2xl text-foreground font-normal">
                                        {group.label}
                                    </h3>
                                </div>
                                <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-2 max-w-[32ch]">
                                    {group.description}
                                </p>
                            </div>

                            {/* Typographic Tag List */}
                            <div className="md:col-span-8">
                                <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs sm:text-sm text-foreground uppercase tracking-wider">
                                    {group.items.map((skill, index) => (
                                        <li key={skill} className="flex items-center gap-3">
                                            <span>{skill}</span>
                                            {index < group.items.length - 1 && (
                                                <span className="text-border" aria-hidden="true">
                                                    /
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
import { ProjectItem } from "@/data/portfolio"

interface ProjectListProps {
    projects: ProjectItem[]
    placeholderText?: string
}

export function ProjectList({
    projects,
    placeholderText = "Selected work, coming soon.",
}: ProjectListProps) {
    if (projects.length === 0) {
        return (
            <div className="py-16 border-t border-b border-border">
                <p className="font-serif italic text-2xl sm:text-3xl text-muted-foreground">
                    {placeholderText}
                </p>
            </div>
        )
    }

    return (
        <div className="divide-y divide-border border-t border-b border-border">
            {projects.map((project, index) => {
                const url = project.liveUrl || project.githubUrl || "#"
                const isExternal = Boolean(project.liveUrl || project.githubUrl)

                return (
                    <a
                        key={project.title}
                        href={url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors hover:bg-muted/40 px-2 -mx-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    >
                        {/* Number */}
                        <div className="md:col-span-1 font-mono text-xs text-muted-foreground">
                            (0{index + 1})
                        </div>

                        {/* Title & Description */}
                        <div className="md:col-span-6 flex flex-col gap-2">
                            <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-normal group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                                {project.title}
                            </h3>
                            <p className="font-sans text-sm text-muted-foreground max-w-[50ch] leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="md:col-span-3">
                            <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                                {project.tech.map((t, idx) => (
                                    <span key={t}>
                                        {t}
                                        {idx < project.tech.length - 1 && <span className="ml-2 text-border">/</span>}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Year & Arrow */}
                        <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4 font-mono text-xs text-muted-foreground">
                            <span>{project.year}</span>
                            <span
                                className="text-foreground group-hover:translate-x-1 transition-transform text-sm"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

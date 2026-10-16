import { portfolioData } from "@/data/portfolio"

export default function PortfolioPage() {
    const { projects } = portfolioData

    return (
        <div className="min-h-[calc(100vh-6.25rem)] flex flex-col items-center justify-center px-6 py-20">
            <h1 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em] mb-12">
                PROJECTS
            </h1>
            {projects.length === 0 ? (
                <p className="text-xl text-gray-400 font-sans tracking-wider">
                    Projects coming soon.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    {projects.map((project, idx) => (
                        <div key={idx} className="border border-white/20 p-6 flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
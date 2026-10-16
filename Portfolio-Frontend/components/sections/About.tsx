import { portfolioData } from "@/data/portfolio"

const About = () => {
    const { bio, services } = portfolioData

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            {/* 12-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column: Numbered TOC Section Label */}
                <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-24">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                            01 — About
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal">
                            Background &amp; Focus
                        </h2>
                    </div>
                </div>

                {/* Right Columns: Editorial Content */}
                <div className="lg:col-span-9 flex flex-col gap-16">
                    {/* Bio Paragraphs */}
                    <div className="flex flex-col gap-6 max-w-[65ch]">
                        {bio.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base sm:text-lg leading-[1.7] text-foreground/90 font-sans"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Services Numbered Hairline List */}
                    <div className="border-t border-border pt-12">
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-8">
                            Capabilities
                        </span>
                        <div className="divide-y divide-border">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
                                >
                                    <div className="md:col-span-2 font-mono text-xs text-muted-foreground">
                                        (0{index + 1})
                                    </div>
                                    <div className="md:col-span-4">
                                        <h3 className="font-serif text-2xl text-foreground font-normal">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="md:col-span-6">
                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-[50ch]">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
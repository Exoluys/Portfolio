import { Code, Paintbrush, Wrench } from "lucide-react"
import Image from "next/image"
import { portfolioData } from "@/data/portfolio"

const serviceIcons: Record<string, React.ReactNode> = {
    design: (
        <Paintbrush
            aria-hidden="true"
            className="absolute -left-10 -top-6 w-24 h-24 text-white/10 rotate-[-15deg] pointer-events-none"
        />
    ),
    development: (
        <Code
            aria-hidden="true"
            className="absolute -left-10 -top-6 w-24 h-24 text-white/8 rotate-[-15deg] pointer-events-none"
        />
    ),
    maintenance: (
        <Wrench
            aria-hidden="true"
            className="absolute -left-10 -top-6 w-24 h-24 text-white/8 rotate-[-15deg] pointer-events-none"
        />
    ),
}

const About = () => {
    const { bio, services } = portfolioData
    const designService = services.find((s) => s.id === "design")
    const devService = services.find((s) => s.id === "development")
    const maintenanceService = services.find((s) => s.id === "maintenance")

    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-10">
                <h2 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em]">ABOUT ME</h2>
                <div className="max-w-4xl px-6 font-sans text-center space-y-4 text-[1.24rem]">
                    {bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <Image
                    src="/separator-transparent.png"
                    alt=""
                    aria-hidden="true"
                    width={120}
                    height={1}
                />
            </div>
            <div className="flex flex-col items-center text-lg mt-15 gap-15">
                <div className="px-12 w-300 flex items-center justify-between gap-20">
                    {designService && (
                        <div className="flex flex-col gap-3">
                            <div className="relative inline-flex items-center gap-3 tracking-[0.2em]">
                                {serviceIcons[designService.id]}
                                <h1 className="relative z-10 text-2xl font-semibold">
                                    {designService.title}
                                </h1>
                            </div>
                            <p className="font-sans text-[1.06rem]">
                                {designService.description}
                            </p>
                        </div>
                    )}
                    {devService && (
                        <div className="flex flex-col gap-3">
                            <div className="relative inline-flex items-center gap-3 tracking-[0.2em]">
                                {serviceIcons[devService.id]}
                                <h1 className="relative z-10 text-2xl font-semibold">
                                    {devService.title}
                                </h1>
                            </div>
                            <p className="font-sans text-[1.06rem]">
                                {devService.description}
                            </p>
                        </div>
                    )}
                </div>
                {maintenanceService && (
                    <div className="w-120 flex flex-col gap-3">
                        <div className="relative inline-flex items-center gap-3 tracking-[0.2em]">
                            {serviceIcons[maintenanceService.id]}
                            <h1 className="relative z-10 text-2xl font-semibold">
                                {maintenanceService.title}
                            </h1>
                        </div>
                        <p className="font-sans text-[1.06rem]">
                            {maintenanceService.description}
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default About
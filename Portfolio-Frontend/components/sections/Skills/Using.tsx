import Image from "next/image"
import { portfolioData } from "@/data/portfolio"

const Using = () => {
    const { top: logos_top, bottom: logos_bot } = portfolioData.skills.usingNow

    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-16">
                {logos_top.map((logo) => (
                    <div key={logo.name} className="flex flex-col items-center gap-2">
                        <div className="w-36 h-36 flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm tracking-widest">{logo.name}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-16">
                {logos_bot.map((logo) => (
                    <div key={logo.name} className="flex flex-col items-center gap-2">
                        <div className="w-36 h-36 flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm tracking-widest">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Using
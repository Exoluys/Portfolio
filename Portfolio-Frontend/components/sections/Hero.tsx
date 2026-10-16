import { AtSign, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { portfolioData } from "@/data/portfolio"

const Hero = () => {
    const { personal, socialLinks } = portfolioData

    return (
        <>
            <p className="text-4xl font-family-advent font-extralight">{personal.greeting}</p>
            <h1 className="text-6xl font-semibold mb-2">{personal.role}</h1>
            <Image
                src="/separator-transparent.png"
                alt=""
                aria-hidden="true"
                width={120}
                height={1}
            />
            <div className="mt-4 flex space-x-8">
                <a
                    href={socialLinks.email.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLinks.email.ariaLabel}
                >
                    <AtSign className="w-8 h-8" />
                </a>
                <a
                    href={socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLinks.github.ariaLabel}
                >
                    <Github className="w-8 h-8" />
                </a>
                <a
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLinks.linkedin.ariaLabel}
                >
                    <Linkedin className="w-8 h-8" />
                </a>
            </div>
        </>
    )
}

export default Hero
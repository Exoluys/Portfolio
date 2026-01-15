import Image from "next/image"

const Using = () => {
    const logos_top = [
        {
            name: "NEXT JS",
            src: "/Logo/NEXT.png",
            alt: "NEXT Logo",
        },

        {
            name: "TAILWIND",
            src: "/Logo/Tailwind.png",
            alt: "Tailwind Logo",
        },
        {
            name: "HTML",
            src: "/Logo/Html.png",
            alt: "Html Logo",
        },
        {
            name: "TYPESCRIPT",
            src: "/Logo/Typescript.png",
            alt: "Typescript Logo",
        },
    ]
    const logos_bot = [
        {
            name: "DJANGO",
            src: "/Logo/Django.png",
            alt: "Django Logo",
        },
        {
            name: "MYSQL",
            src: "/Logo/MySQL.png",
            alt: "MySQL Logo",
        },
        {
            name: "GIT",
            src: "/Logo/Git.png",
            alt: "Git Logo",
        },
        {
            name: "FIGMA",
            src: "/Logo/Figma.png",
            alt: "Figma Logo",
        },
    ]

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
import Image from "next/image"

const Other = () => {
    const logos = [
        {
            name: "C",
            src: "/Logo/C.png",
            alt: "C Logo",
        },
        {
            name: "C++",
            src: "/Logo/C++.png",
            alt: "C++ Logo",
        },
        {
            name: "POSTGRESQL",
            src: "/Logo/PostgreSQL.png",
            alt: "PostgreSQL Logo",
        },
        {
            name: "REACT",
            src: "/Logo/React.png",
            alt: "React Logo",
        },
    ]

    return (
        <div className="flex gap-16">
            {logos.map((logo) => (
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
    )
}

export default Other
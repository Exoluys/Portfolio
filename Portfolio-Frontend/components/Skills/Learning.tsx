import Image from "next/image"

const Learning = () => {
    const logos = [
        {
            name: "JAVA",
            src: "/Logo/Java.png",
            alt: "Java Logo",
        },
        {
            name: "C#",
            src: "/Logo/Csharp.png",
            alt: "C# Logo",
        },
        {
            name: "DOCKER",
            src: "/Logo/Docker.png",
            alt: "Docker Logo",
        },
        {
            name: "NODE",
            src: "/Logo/Node.png",
            alt: "Node Logo",
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

export default Learning
import { AtSign, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="h-full flex flex-col pt-70 items-center">
                <p className="text-4xl font-family-advent font-extralight">my name is Jai</p>
                <h2 className="text-6xl font-semibold mb-2">I&#39;M A DEVELOPER</h2>
                <Image
                    src="/separator-transparent(1).png"
                    alt="separator"
                    width={120}
                    height={1}
                />
                <div className="mt-4 flex space-x-8">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jairevankar98@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AtSign className="w-8 h-8" />
                    </a>
                    <a
                        href="https://github.com/Exoluys"
                        target="_blank"
                    >
                        <Github className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jai-revankar-002bb0215/"
                        target="_blank"
                    >
                        <Linkedin className="w-8 h-8" />
                    </a>
                </div>
            </div >
            <section id="about" className="h-200">
                <div className="flex flex-col items-center justify-center space-y-10">
                    <h2 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em]">ABOUT ME</h2>
                    <div className="max-w-4xl px-6 text-center space-y-4 text-xl">
                        <p>
                            Hi, I&#39;m Jai Revankar, a passionate developer with a strong background in Python, Django, and front-end technologies. I enjoy building clean, efficient, and user-friendly applications, from web platforms to automation tools. Beyond coding, I&#39;m a creative thinker with experience in video editing, and I thrive on turning ideas into real, functional solutions.
                        </p>
                        <p>
                            I value continuous learning and take pride in refining my skills—whether it&#39;s exploring new frameworks, improving UI/UX, or experimenting with innovative projects. I&#39;m always looking for opportunities to contribute, collaborate, and create impactful digital experiences.
                        </p>
                    </div>
                </div>
            </section >
        </>

    )
}

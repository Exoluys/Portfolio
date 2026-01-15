import About from "@/components/About";
import Skills from "@/components/Skills";
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
            <section id="about" className="h-screen">
                <About />
            </section >
            <section id="skills" className="h-screen">
                <Skills />
            </section>
        </>

    )
}

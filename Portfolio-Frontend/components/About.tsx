import { Code, Paintbrush, Wrench } from "lucide-react"
import Image from "next/image"

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-10">
                <h2 className="px-15 py-4 text-xl border-4 border-white tracking-[0.3em]">ABOUT ME</h2>
                <div className="max-w-4xl px-6 font-sans text-center space-y-4 text-[1.24rem]">
                    <p>
                        Hi, I&#39;m Jai Revankar, a passionate developer with a strong background in Python, Django, and front-end technologies. I enjoy building clean, efficient, and user-friendly applications, from web platforms to automation tools. Beyond coding, I&#39;m a creative thinker with experience in video editing, and I thrive on turning ideas into real, functional solutions.
                    </p>
                    <p>
                        I value continuous learning and take pride in refining my skills—whether it&#39;s exploring new frameworks, improving UI/UX, or experimenting with innovative projects. I&#39;m always looking for opportunities to contribute, collaborate, and create impactful digital experiences.
                    </p>
                </div>
                <Image
                    src="/separator-transparent(1).png"
                    alt="separator"
                    width={120}
                    height={1}
                />
            </div>
            <div className="flex flex-col items-center text-lg mt-15 gap-15">
                <div className="px-12 w-300 flex items-center justify-between gap-20">
                    <div className="flex flex-col gap-3">
                        <div className="relative inline-flex items-center gap-3 tracking-[0.2em]">
                            <Paintbrush
                                className="absolute -left-10 -top-6 w-24 h-24 text-white/10 rotate-[-15deg] pointer-events-none"
                            />
                            <h1 className="relative z-10 text-2xl font-semibold">
                                DESIGN
                            </h1>
                        </div>
                        <p className="font-sans text-[1.06rem]">
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="relative inline-flex items-center gap-3 tracking-[0.2em]">
                            <Code
                                className="absolute -left-10 -top-6 w-24 h-24 text-white/8 rotate-[-15deg] pointer-events-none"
                            />
                            <h1 className="relative z-10 text-2xl font-semibold">
                                DEVELOPMENT
                            </h1>
                        </div>
                        <p className="font-sans text-[1.06rem]">
                            Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
                        </p>
                    </div>
                </div>
                <div className="w-120 flex flex-col gap-3">
                    <div className="relative inline-flex items-center gap-3 tracking-[0.2em]">
                        <Wrench
                            className="absolute -left-10 -top-6 w-24 h-24 text-white/8 rotate-[-15deg] pointer-events-none"
                        />
                        <h1 className="relative z-10 text-2xl font-semibold">
                            MAINTENANCE
                        </h1>
                    </div>
                    <p className="font-sans text-[1.06rem]">
                        In case of any problems or the need for changes, I can introduce new functionalities and solutions.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
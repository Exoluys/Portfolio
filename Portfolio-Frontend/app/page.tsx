import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <>
            <div id="top" />
            <section className="min-h-screen flex flex-col pb-50 items-center justify-center">
                <Hero />
            </section>
            <section id="about" className="w-full pb-40">
                <About />
            </section >
            <section id="skills" className="w-full pb-40">
                <Skills />
            </section>
            <section id="contact" className="w-full pb-20">
                <Contact />
            </section>
        </>

    )
}

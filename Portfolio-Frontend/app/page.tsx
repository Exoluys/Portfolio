import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
        <>
            <div id="top" />
            <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center border-b border-border">
                <Hero />
            </section>
            <section id="about" className="w-full py-24 sm:py-32 border-b border-border">
                <About />
            </section>
            <section id="skills" className="w-full py-24 sm:py-32 border-b border-border">
                <Skills />
            </section>
            <section id="contact" className="w-full py-24 sm:py-32">
                <Contact />
            </section>
            <footer className="w-full bg-[#000000cb] text-gray py-12">
                <Footer />
            </footer>
        </>

    )
}

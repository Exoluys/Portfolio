import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
        <>
            <div id="top" />
            <section id="home" className="min-h-[calc(100vh-6.25rem)] flex flex-col items-center justify-center py-16">
                <Hero />
            </section>
            <section id="about" className="w-full py-16 md:py-20">
                <About />
            </section>
            <section id="skills" className="w-full py-16 md:py-20">
                <Skills />
            </section>
            <section id="contact" className="w-full py-16 md:py-20">
                <Contact />
            </section>
            <footer className="w-full bg-[#000000cb] text-gray py-12">
                <Footer />
            </footer>
        </>

    )
}

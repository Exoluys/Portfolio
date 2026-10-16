import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";

export default function Home() {
    return (
        <>
            <div id="top" />
            <section id="home" className="min-h-[calc(100vh-var(--nav-height))] flex flex-col justify-center">
                <Hero />
            </section>
            <section id="about" className="w-full py-24 sm:py-32 border-t border-border">
                <About />
            </section>
            <section id="skills" className="w-full py-24 sm:py-32 border-t border-border">
                <Skills />
            </section>
            <section id="work" className="w-full py-24 sm:py-32 border-t border-border">
                <Work />
            </section>
            <section id="contact" className="w-full py-24 sm:py-32 border-t border-border">
                <Contact />
            </section>
            <footer className="w-full bg-[#000000cb] text-gray py-12">
                <Footer />
            </footer>
        </>

    )
}

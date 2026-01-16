import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
            <section id="skills" className="w-full pt-20 pb-40">
                <Skills />
            </section>
            <section id="contact" className="w-full pt-33 pb-40">
                <Contact />
            </section>
            <footer className="w-full bg-[#000000cb] text-gray py-12">
                <Footer />
            </footer>
        </>

    )
}

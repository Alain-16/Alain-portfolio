import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ImpactMap from "@/components/ImpactMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <ImpactMap />
        <Contact />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}

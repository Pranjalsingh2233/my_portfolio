import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero / Introduction */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Tech Stack & Skills */}
        <Skills />

        {/* Section 4: Projects / Portfolio */}
        <Projects />

        {/* Section 5: Services Offered */}
        <Services />

        {/* Section 6: Contact / Hire Me */}
        <Contact />
      </main>

      {/* Section 7: Footer */}
      <Footer />
    </div>
  );
}

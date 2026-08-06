import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




function Home() {
  return (
    <>
    <Navbar />
    <main className="relative w-full overflow-x-hidden">
      <div className="bg-gradient-to-br from-[#0A0F1F] via-[#081B29] to-[#102E4A]">
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
      </div>
      </main>
    </>
  );
}

export default Home;
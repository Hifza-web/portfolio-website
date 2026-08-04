import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      </main>
    </>
  );
}

export default Home;
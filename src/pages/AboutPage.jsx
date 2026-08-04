// import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

function AboutPage() {
  return (
    <>
    

      <section className="min-h-screen bg-[#081B29] pt-28 pb-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 px-6 lg:flex-row lg:px-16">

          {/* Left Image */}
          <motion.div
            {...animations.fadeInLeft}
            className="flex w-full justify-center lg:w-1/2"
          >
            <div className="relative">
              {/* Blue Glow */}
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 bg-[#00ABF0] opacity-90 blur-3xl"></div>

              <img
                src={heroImage}
                alt="About"
                className="relative z-10 h-[450px] object-contain rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            {...animations.fadeInRight}
            className="w-full text-white lg:w-1/2"
          >
            

            <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
              And I'm{" "}
              <span className="text-[#00ABF0]">
                Software Engineer
              </span>
            </h2>

            <p className="text-justify text-lg leading-9 text-gray-300">
              I'm a passionate Frontend Developer with a strong interest in
              creating modern, responsive, and user-friendly web applications.
              I specialize in React.js, JavaScript, HTML, CSS, and Tailwind CSS,
              focusing on clean code and interactive user interfaces.
              <br />
              <br />
              I enjoy turning creative ideas into functional and visually
              appealing websites while continuously improving my development
              skills. I believe in writing maintainable code, following best
              practices, and building smooth user experiences across all
              devices.
              <br />
              <br />
              Currently, I'm expanding my knowledge in modern frontend
              technologies and working on real-world projects to strengthen my
              skills. My goal is to become a professional Frontend Developer and
              contribute to high-quality web applications.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
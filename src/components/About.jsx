import heroImage from "../assets/hero.jpeg";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="bg-[#112E42] py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        {/* Heading */}
        <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
          About <span className="text-[#00ABF0]">Me</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <motion.div 
            {...animations.zoomIn}
          className="relative mb-8">
            {/* <div className="absolute inset-0 rounded-full border-[3px] border-[#00ABF0] scale-110"></div> */}

            <img
              src={heroImage}
              alt="About"
              className="relative h-[240px] w-[240px] rounded-full border-1 border-[#00ABF0] object-cover"
            />
          </motion.div>
             
          {/* Title */}
          < motion.div
           {...animations.fadeInUp}
            className="flex flex-col items-center"
          >
          <h3 className="mb-6 text-center text-3xl font-semibold text-white">
            Frontend Developer
          </h3>

          {/* Description */}
          <p className="mx-auto max-w-[900px] text-center text-base leading-8 text-gray-300 lg:text-lg">
            Passionate Frontend Developer with a strong interest in building
            modern, responsive, and user-friendly web applications using
            React.js, JavaScript, HTML, CSS, and Tailwind CSS while creating
            clean, interactive interfaces and continuously improving development
            skills to deliver high-quality experiences.
          </p>

          {/* Button */}
          {/* <button className="mt-10 rounded-md bg-[#00ABF0] px-8 py-3 font-semibold text-[#081B29] transition duration-300 hover:scale-105 hover:bg-[#0096d6]">
            Read More
          </button> */}

          <Link
  to="/about"
  className="mt-10 rounded-md bg-[#00ABF0] px-8 py-3 font-semibold text-[#081B29] transition duration-300 hover:scale-105 hover:bg-[#0096d6]"
>
  Read More
</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

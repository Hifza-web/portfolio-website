// import { motion } from "framer-motion";
// import { animations } from "../utils/animations";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";

// function Projects() {
//   return (
//     <section id="projects" className="min-h-screen bg-[#081B29] py-20">
//       <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
//         {/* Heading */}
//         <motion.h2
//           {...animations.fadeInUp}
//           className="mb-16 text-center text-4xl font-bold text-white lg:text-6xl"
//         >
//           My <span className="text-[#00ABF0]">Projects</span>
//         </motion.h2>
//       </div>
//       {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2"> */}
//       <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 md:grid-cols-2">
//         <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl border border-[#00ABF0] bg-[#112E42] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.4)]">
//           {/* Placeholder Image */}
//           <div className="flex h-48 items-center justify-center bg-[#0d2435] text-gray-400">
//             Project Image
//           </div>

//           {/* Content */}
//           <div className="p-4">
//             <h3 className="text-2xl font-bold text-white">Portfolio Website</h3>

//             <p className="mt-2 text-[#00ABF0]">React.js • Tailwind CSS</p>

//             <p className="mt-2 text-gray-300">
//               A modern responsive portfolio website showcasing my skills,
//               projects, and contact information.
//             </p>
//             <div className="mt-6 flex items-center gap-5">
//               <a
//                 href="#"
//                 className="text-3xl text-white transition hover:text-[#00ABF0]"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="#"
//                 className="text-3xl text-white transition hover:text-[#00ABF0]"
//               >
//                 <FiExternalLink />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* {"card 2"} */}
//         <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl border border-[#00ABF0] bg-[#112E42] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.4)]">
//           {/* Placeholder Image */}
//           <div className="flex h-48 items-center justify-center bg-[#0d2435] text-gray-400">
//             Project Image
//           </div>

//           {/* Content */}
//           <div className="p-4">
//             <h3 className="text-2xl font-bold text-white">Portfolio Website</h3>

//             <p className="mt-2 text-[#00ABF0]">React.js • Tailwind CSS</p>

//             <p className="mt-2 text-gray-300">
//               A modern responsive portfolio website showcasing my skills,
//               projects, and contact information.
//             </p>
//             <div className="mt-6 flex items-center gap-5">
//               <a
//                 href="#"
//                 className="text-3xl text-white transition hover:text-[#00ABF0]"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="#"
//                 className="text-3xl text-white transition hover:text-[#00ABF0]"
//               >
//                 <FiExternalLink />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;


import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import onepageImg from "../assets/onepage.png";
import portfolioImg from "../assets/portfolio.png";
import weatherImg from "../assets/weather.png";
import doctorImg from "../assets/doctor.png";




function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#081B29] py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        {/* Heading */}
        <motion.h3
          {...animations.fadeInUp}
          className="mb-16 text-center text-4xl font-bold text-white lg:text-6xl"
        >
          My <span className="text-[#00ABF0]">Projects</span>
        </motion.h3>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2"> */}
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-xl border border-[#00ABF0] bg-[#112E42] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.4)]">
          {/* Placeholder Image */}
                  <img
  src={portfolioImg}
  alt="Portfolio Website"
  className="h-42 w-full object-cover"
/>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-white">Portfolio Website</h3>

            <p className="mt-2 text-[#00ABF0]">React.js • Tailwind CSS</p>

            <p className="mt-2 text-gray-300">
              A modern responsive portfolio website showcasing my skills,
              projects, and contact information.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        {/* {"card 2"} */}
        <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-xl border border-[#00ABF0] bg-[#112E42] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.4)]">
          {/* Placeholder Image */}
          <img
  src={onepageImg}
  alt="Portfolio Website"
  className="h-42 w-full object-cover"
/>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-white">One Page Business Website</h3>

            <p className="mt-2 text-[#00ABF0]">React.js • Tailwind CSS</p>

            <p className="mt-2 text-gray-300">
              A modern responsive One Page Business Website showcasing my skills,
              projects, and contact information.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* {2nd Row} */}
      <div className="mt-10 mx-auto grid max-w-[1150px] grid-cols-1 gap-14 px-6 md:grid-cols-2">
            <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-xl border border-[#00ABF0] bg-[#112E42] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.4)]">
          {/* Placeholder Image */}
                   <img
  src={doctorImg}
  alt="Portfolio Website"
  className="h-42 w-full object-cover"
/>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-white">Doctor Appointment Website</h3>

            <p className="mt-2 text-[#00ABF0]">Html•CSS•Javascript</p>

            <p className="mt-2 text-gray-300">
              A modern and responsive healthcare website designed to simplify the appointment booking experience.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          </div>

            <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-xl border border-[#00ABF0] bg-[#112E42] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.4)]">
          {/* Placeholder Image */}
                   <img
  src={weatherImg}
  alt="Portfolio Website"
  className="h-42 w-full object-cover"
/>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-white">Weather App</h3>

            <p className="mt-2 text-[#00ABF0]">Html•CSS.JavaScript</p>

            <p className="mt-2 text-gray-300">
             A responsive weather application that provides real-time weather updates based on the selected location.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-3xl text-white transition hover:text-[#00ABF0]"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
          

      </div>
    </section>
  );
}

export default Projects;

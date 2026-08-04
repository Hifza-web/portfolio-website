// import { motion } from "framer-motion";
// import { animations } from "../utils/animations";

// function Skills() {
//   return (
//     <section id="skills" className="min-h-screen bg-[#081B29] py-20">
//       <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
//         {/* Heading */}
//         <motion.h2
//           {...animations.fadeInUp}
//           className="mb-16 text-center text-4xl font-bold text-white lg:text-6xl"
//         >
//           My <span className="text-[#00ABF0]">Skills</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
//           {/* Left Card */}
//           <motion.div
//             viewport={{ once: false, amount: 0.3 }}
//             {...animations.fadeInLeftOnScroll}
//             // className="rounded-lg border-2 border-[#00ABF0] p-6"
//             className="group relative overflow-hidden rounded-lg border-2 border-[#00ABF0] p-6"
            
//           >
//             <div className="absolute inset-0 -translate-x-full bg-[#112E42] transition-transform duration-500 group-hover:translate-x-0"></div>
//             {/* React */}
//               <div className="relative z-10">
//             <div className="mb-6">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-lg text-white">HTML</span>
//                 <span className="text-[#00ABF0]">95%</span>
//               </div>

//               <div className="h-3 w-full rounded-full bg-gray-700">
//                 {/* <div className="h-3 w-[95%] rounded-full bg-[#00ABF0]"></div> */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "95%" }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 1 }}
//                   className="h-3 rounded-full bg-[#00ABF0]"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-lg text-white">CSS</span>
//                 <span className="text-[#00ABF0]">55%</span>
//               </div>

//               <div className="h-3 w-full rounded-full bg-gray-700">
//                 {/* <div className="h-3 w-[55%] rounded-full bg-[#00ABF0]"></div> */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "55%" }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 1 }}
//                   className="h-3 rounded-full bg-[#00ABF0]"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-lg text-white">JavaScript</span>
//                 <span className="text-[#00ABF0]">55%</span>
//               </div>

//               <div className="h-3 w-full rounded-full bg-gray-700">
//                 {/* <div className="h-3 w-[55%] rounded-full bg-[#00ABF0]"></div> */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "55%" }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 1 }}
//                   className="h-3 rounded-full bg-[#00ABF0]"
//                 />
//               </div>
//             </div>
//             </div>
//           </motion.div>

//           {/* Right Card */}
//           <motion.div
//             viewport={{ once: false, amount: 0.3 }}
//             {...animations.fadeInRightOnScroll}
//             // className="rounded-lg border-2 border-[#00ABF0] p-6"
//             className="group relative overflow-hidden rounded-lg border-2 border-[#00ABF0] p-6"

//           >
//             <div className="absolute inset-0 -translate-x-full bg-[#112E42] transition-transform duration-500 group-hover:translate-x-0"></div>

//              <div className="relative z-10">
//             <div className="mb-6">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-lg text-white">React.js</span>
//                 <span className="text-[#00ABF0]">45%</span>
//               </div>

//               <div className="h-3 w-full rounded-full bg-gray-700">
//                 {/* <div className="h-3 w-[45%] rounded-full bg-[#00ABF0]"></div> */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "45%" }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 1 }}
//                   className="h-3 rounded-full bg-[#00ABF0]"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-lg text-white">Drat</span>
//                 <span className="text-[#00ABF0]">45%</span>
//               </div>

//               <div className="h-3 w-full rounded-full bg-gray-700">
//                 {/* <div className="h-3 w-[45%] rounded-full bg-[#00ABF0]"></div> */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "45%" }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 1 }}
//                   className="h-3 rounded-full bg-[#00ABF0]"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-lg text-white">C++</span>
//                 <span className="text-[#00ABF0]">75%</span>
//               </div>

//               <div className="h-3 w-full rounded-full bg-gray-700">
//                 {/* <div className="h-3 w-[75%] rounded-full bg-[#00ABF0]"></div> */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "75%" }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 1 }}
//                   className="h-3 rounded-full bg-[#00ABF0]"
//                 />
//               </div>
//             </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;



import { motion } from "framer-motion";
import { animations } from "../utils/animations";

function Skills() {
  return (
    <section id="skills" className="bg-[#081B29] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        {/* Heading */}
        <motion.h2
          {...animations.fadeInUp}
          className="mb-8 text-center text-3xl font-bold text-white sm:mb-10 sm:text-4xl lg:mb-12 lg:text-5xl"
        >
          My <span className="text-[#00ABF0]">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Card */}
          <motion.div
            viewport={{ once: false, amount: 0.3 }}
            {...animations.fadeInLeftOnScroll}
            // className="rounded-lg border-2 border-[#00ABF0] p-6"
            className="group relative overflow-hidden rounded-lg border-2 border-[#00ABF0] p-5 sm:p-6 lg:p-8"
          >
            <div className="absolute inset-0 -translate-x-full bg-[#112E42] transition-transform duration-500 group-hover:translate-x-0"></div>
            
            <div className="relative z-10">
              {/* HTML */}
              <div className="mb-5 last:mb-0 sm:mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-base text-white sm:text-lg">HTML</span>
                  <span className="text-sm text-[#00ABF0] sm:text-base">95%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-gray-700 sm:h-3">
                  {/* <div className="h-3 w-[95%] rounded-full bg-[#00ABF0]"></div> */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-2.5 rounded-full bg-[#00ABF0] sm:h-3"
                  />
                </div>
              </div>

              {/* CSS */}
              <div className="mb-5 last:mb-0 sm:mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-base text-white sm:text-lg">CSS</span>
                  <span className="text-sm text-[#00ABF0] sm:text-base">55%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-gray-700 sm:h-3">
                  {/* <div className="h-3 w-[55%] rounded-full bg-[#00ABF0]"></div> */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-2.5 rounded-full bg-[#00ABF0] sm:h-3"
                  />
                </div>
              </div>

              {/* JavaScript */}
              <div className="mb-5 last:mb-0 sm:mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-base text-white sm:text-lg">JavaScript</span>
                  <span className="text-sm text-[#00ABF0] sm:text-base">55%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-gray-700 sm:h-3">
                  {/* <div className="h-3 w-[55%] rounded-full bg-[#00ABF0]"></div> */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-2.5 rounded-full bg-[#00ABF0] sm:h-3"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            viewport={{ once: false, amount: 0.3 }}
            {...animations.fadeInRightOnScroll}
            // className="rounded-lg border-2 border-[#00ABF0] p-6"
            className="group relative overflow-hidden rounded-lg border-2 border-[#00ABF0] p-5 sm:p-6 lg:p-8"
          >
            <div className="absolute inset-0 -translate-x-full bg-[#112E42] transition-transform duration-500 group-hover:translate-x-0"></div>

            <div className="relative z-10">
              {/* React.js */}
              <div className="mb-5 last:mb-0 sm:mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-base text-white sm:text-lg">React.js</span>
                  <span className="text-sm text-[#00ABF0] sm:text-base">45%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-gray-700 sm:h-3">
                  {/* <div className="h-3 w-[45%] rounded-full bg-[#00ABF0]"></div> */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-2.5 rounded-full bg-[#00ABF0] sm:h-3"
                  />
                </div>
              </div>

              {/* Dart */}
              <div className="mb-5 last:mb-0 sm:mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-base text-white sm:text-lg">Dart</span>
                  <span className="text-sm text-[#00ABF0] sm:text-base">45%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-gray-700 sm:h-3">
                  {/* <div className="h-3 w-[45%] rounded-full bg-[#00ABF0]"></div> */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-2.5 rounded-full bg-[#00ABF0] sm:h-3"
                  />
                </div>
              </div>

              {/* C++ */}
              <div className="mb-5 last:mb-0 sm:mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-base text-white sm:text-lg">C++</span>
                  <span className="text-sm text-[#00ABF0] sm:text-base">75%</span>
                </div>

                <div className="h-2.5 w-full rounded-full bg-gray-700 sm:h-3">
                  {/* <div className="h-3 w-[75%] rounded-full bg-[#00ABF0]"></div> */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-2.5 rounded-full bg-[#00ABF0] sm:h-3"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

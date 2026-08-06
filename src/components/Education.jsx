// // import { motion } from "framer-motion";
// // import { animations } from "../utils/animations";

// function Education() {
//   return (
//     <section id="education" className="min-h-screen bg-[#081B29] py-20">
//       <div className="mx-auto max-w-[1280px] px-6 lg:px-16">

//         {/* Heading */}
//         <h2
          
//           className=" text-center text-4xl font-bold text-white lg:text-6xl"
//         >
//            <span className="text-[#00ABF0]">Education</span>
//         </h2>
//          <p className="mt-4 text-center text-[23px] text-white">My professional journey so far</p>
//         {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2"> */}

//           {/* Card 1 */}
//           <div className="mt-8 mx-auto max-w-[900px] space-y-8">

//   {/* Card 1 */}
//   <div
    
//     className="rounded-2xl bg-[#112E42] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.3)]"
//   >
//     <div className="flex items-start justify-between">
//       <div>
//         <h3 className="text-3xl font-bold text-white">
//           BS Software Engineering
//         </h3>

//         <p className="mt-2 text-lg text-gray-400">
//           University of Agriculture Faisalabad
//         </p>
//       </div>

//       <span className="rounded-full bg-[#4A3AFF]/20 px-5 py-2 text-sm font-semibold text-[#7B61FF]">
//         2024 - Present
//       </span>
//     </div>

//     <p className="mt-6 text-lg leading-8 text-gray-300">
//       Currently pursuing a Bachelor's degree in Computer Science with a
//       focus on Web Development, Data Structures, Database Systems, and
//       Software Engineering.
//     </p>
//   </div>

//   {/* Card 2 */}
//   <div
   
//     className="rounded-2xl bg-[#112E42] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.3)]"
//   >
//     <div className="flex items-start justify-between">
//       <div>
//         <h3 className="text-3xl font-bold text-white">
//           Intermediate (Pre Eng)
//         </h3>

//         <p className="mt-2 text-lg text-gray-400">
//           Aspire Group of Colleges
//         </p>
//       </div>

//       <span className="rounded-full bg-[#4A3AFF]/20 px-5 py-2 text-sm font-semibold text-[#7B61FF]">
//         2022 - 2024
//       </span>
//     </div>

//     <p className="mt-6 text-lg leading-8 text-gray-300">
//       Completed Intermediate in Pre Engineering, building a strong
//       foundation in programming, mathematics, and computer fundamentals.
//     </p>
//   </div>

// </div>

//           {/* Card 2 */}

//         </div>

//       {/* </div> */}
//     </section>
//   );
// }

// export default Education;


// import { motion } from "framer-motion";
// import { animations } from "../utils/animations";

function Education() {
  return (
    <section id="education" className=" py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">

        {/* Heading */}
        <h2
          className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-6xl"
        >
          <span className="text-[#00ABF0]">Education</span>
        </h2>
        
        <p className="mt-2 text-center text-lg text-white sm:mt-3 sm:text-[23px]">
          My professional journey so far
        </p>
        
        {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2"> */}

          {/* Card 1 */}
          <div className="mx-auto mt-6 max-w-[900px] space-y-6 sm:mt-8">

            {/* Card 1 */}
            <div
              className="rounded-2xl bg-[#112E42] p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.3)] sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    BS Software Engineering
                  </h3>

                  <p className="mt-1 text-base text-gray-400 sm:mt-2 sm:text-lg">
                    University of Agriculture Faisalabad
                  </p>
                </div>

                <span className="rounded-full bg-[#4A3AFF]/20 px-4 py-1.5 text-xs font-semibold text-[#7B61FF] sm:px-5 sm:py-2 sm:text-sm">
                  2024 - Present
                </span>
              </div>

              <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Currently pursuing a Bachelor's degree in Software Engineering with a
                focus on Web Development, Data Structures, Database Systems, and
                Software Engineering.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl bg-[#112E42] p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.3)] sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Intermediate (Pre Eng)
                  </h3>

                  <p className="mt-1 text-base text-gray-400 sm:mt-2 sm:text-lg">
                    Aspire Group of Colleges
                  </p>
                </div>

                <span className="rounded-full bg-[#4A3AFF]/20 px-4 py-1.5 text-xs font-semibold text-[#7B61FF] sm:px-5 sm:py-2 sm:text-sm">
                  2022 - 2024
                </span>
              </div>

              <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Completed Intermediate in Pre Engineering, building a strong
                foundation in programming, mathematics, and computer fundamentals.
              </p>
            </div>

          </div>

          {/* Card 2 */}

        </div>

      {/* </div> */}
    </section>
  );
}

export default Education;

// import { motion } from "framer-motion";
// import { animations } from "../utils/animations";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// function Contact() {
//   return (
//     <section id="contact" className="min-h-screen bg-[#081B29] py-20">
//       <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
//         {/* Heading */}
//         <motion.h6
//           {...animations.fadeInUp}
//           className="mb-16 text-center text-4xl font-bold text-white lg:text-6xl"
//         >
//           Contact <span className="text-[#00ABF0]">Me</span>
//         </motion.h6>

//         {/* Form Box */}
//         <div className="mx-auto max-w-5xl rounded-2xl bg-[#112E42] p-8 rounded-2xl bg-[#112E42] p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.3)]"

//         >
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//             {/* Left Side */}
//             <div>
//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="rounded-lg border-2 border-[#00ABF0] bg-transparent p-4 text-white outline-none placeholder:text-gray-400 "
//                 />

//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="rounded-lg border-2 border-[#00ABF0] bg-transparent p-4 text-white outline-none placeholder:text-gray-400 "
//                 />
//               </div>

//               <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   className="rounded-lg border-2 border-[#00ABF0] bg-transparent p-4 text-white outline-none placeholder:text-gray-400 "
//                 />

//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="rounded-lg border-2 border-[#00ABF0] bg-transparent p-4 text-white outline-none placeholder:text-gray-400 "
//                 />
//               </div>

//               {/* Message */}
//               <div className="mt-6">
//                 <textarea
//                   rows="8"
//                   placeholder="Your Message"
//                   className="w-full resize-none rounded-lg border-2 border-[#00ABF0] bg-transparent p-4 text-white outline-none placeholder:text-gray-400 "
//                 ></textarea>
//               </div>

//               {/* Button */}
//               <div className="mt-8">
//                 <button className="rounded-full bg-[#00ABF0] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0]">
//                   Send Message
//                 </button>
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex flex-col justify-center text-white">
//               {/* Mobile */}
//               <div className="mb-8">
//                 <h3 className="text-3xl font-bold text-[#00ABF0]">Mobile</h3>

//                 <div className="mt-3 flex items-center gap-3">
//                   <FaPhoneAlt className="text-[#00ABF0] text-xl" />
//                   <span className="text-lg">+92 300 1234567</span>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="mb-8">
//                 <h3 className="text-3xl font-bold text-[#00ABF0]">Email</h3>

//                 <div className="mt-3 flex items-center gap-3">
//                   <FaEnvelope className="text-[#00ABF0] text-xl" />
//                   <span className="text-lg">hifzanazar@gmail.com</span>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="mb-8">
//                 <h3 className="text-3xl font-bold text-[#00ABF0]">Location</h3>

//                 <div className="mt-3 flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-[#00ABF0] text-xl" />
//                   <span className="text-lg">Okara, Pakistan</span>
//                 </div>
//               </div>

//               {/* Social Icons */}
//               <div className="mt-4 flex gap-4">
//                 <a
//                   href="https://github.com/Hifza-web"
//                   className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00ABF0] text-xl text-[#00ABF0] transition duration-300 hover:bg-[#00ABF0] hover:text-[#081B29]"
//                 >
//                   <FaGithub />
//                 </a>

//                 <a
//                   href="https://www.linkedin.com/in/hifza-nazar-bb30bb373/"
//                   className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00ABF0] text-xl text-[#00ABF0] transition duration-300 hover:bg-[#00ABF0] hover:text-[#081B29]"
//                 >
//                   <FaLinkedinIn />
//                 </a>

//                 <a
//                   href="#"
//                   className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00ABF0] text-xl text-[#00ABF0] transition duration-300 hover:bg-[#00ABF0] hover:text-[#081B29]"
//                 >
//                   <FaInstagram />
//                 </a>
//               </div>

//               {/* Download CV Button */}
//               {/* <button className="mt-10 w-fit rounded-full bg-[#00ABF0] px-8 py-3 font-semibold text-[#081B29] transition duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0]">
//     Download CV
//   </button> */}

//               <a
//                 href="/Hifza-Nazar-CV.pdf"
//                 download
//                 className="mt-10 w-fit rounded-full bg-[#00ABF0] px-8 py-3 font-semibold text-[#081B29] transition duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0]"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-backend-git-main-hifza75.vercel.app/api/contact",
        formData,
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <section id="contact" className=" py-16 sm:py-20 lg:py-24 ">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
        {/* Heading */}
        <motion.h6
          {...animations.fadeInUp}
          className="mb-12 text-center text-3xl font-bold text-white sm:mb-16 sm:text-4xl lg:text-5xl"
        >
          Contact <span className="text-[#00ABF0]">Me</span>
        </motion.h6>

        {/* Form Box */}
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#112E42] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,171,240,0.3)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left Side */}
            <form onSubmit={handleSubmit}>
              <div>
                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border-2 border-[#00ABF0] bg-transparent p-3.5 text-sm text-white outline-none placeholder:text-gray-400 sm:p-4 sm:text-base"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full rounded-lg border-2 border-[#00ABF0] bg-transparent p-3.5 text-sm text-white outline-none placeholder:text-gray-400 sm:p-4 sm:text-base"
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-lg border-2 border-[#00ABF0] bg-transparent p-3.5 text-sm text-white outline-none placeholder:text-gray-400 sm:p-4 sm:text-base"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full rounded-lg border-2 border-[#00ABF0] bg-transparent p-3.5 text-sm text-white outline-none placeholder:text-gray-400 sm:p-4 sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="mt-5 sm:mt-6">
                  <textarea
                    rows="7"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full resize-none rounded-lg border-2 border-[#00ABF0] bg-transparent p-3.5 text-sm text-white outline-none placeholder:text-gray-400 sm:p-4 sm:text-base"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="mt-6 sm:mt-8">
                  <button
                    type="submit"
                    className="rounded-full bg-[#00ABF0] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0] sm:text-base"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            {/* Right Side */}
            <div className="flex flex-col justify-center text-white">
              {/* Mobile */}
              <div className="mb-7 sm:mb-8">
                <h3 className="text-xl font-bold text-[#00ABF0] sm:text-2xl lg:text-3xl">
                  Mobile
                </h3>

                <div className="mt-2 flex items-center gap-3 sm:mt-3">
                  <FaPhoneAlt className="text-lg text-[#00ABF0] sm:text-xl" />
                  <span className="text-base sm:text-lg">+92 300 1234567</span>
                </div>
              </div>

              {/* Email */}
              <div className="mb-7 sm:mb-8">
                <h3 className="text-xl font-bold text-[#00ABF0] sm:text-2xl lg:text-3xl">
                  Email
                </h3>

                <div className="mt-2 flex items-center gap-3 sm:mt-3">
                  <FaEnvelope className="text-lg text-[#00ABF0] sm:text-xl" />
                  <span className="break-all text-base sm:break-normal sm:text-lg">
                    hifzanazar@gmail.com
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="mb-7 sm:mb-8">
                <h3 className="text-xl font-bold text-[#00ABF0] sm:text-2xl lg:text-3xl">
                  Location
                </h3>

                <div className="mt-2 flex items-center gap-3 sm:mt-3">
                  <FaMapMarkerAlt className="text-lg text-[#00ABF0] sm:text-xl" />
                  <span className="text-base sm:text-lg">Okara, Pakistan</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-3 flex gap-4 sm:mt-4">
                <a
                  href="https://github.com/Hifza-web"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#00ABF0] text-lg text-[#00ABF0] transition duration-300 hover:bg-[#00ABF0] hover:text-[#081B29] sm:h-12 sm:w-12 sm:text-xl"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/hifza-nazar-bb30bb373/"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#00ABF0] text-lg text-[#00ABF0] transition duration-300 hover:bg-[#00ABF0] hover:text-[#081B29] sm:h-12 sm:w-12 sm:text-xl"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#00ABF0] text-lg text-[#00ABF0] transition duration-300 hover:bg-[#00ABF0] hover:text-[#081B29] sm:h-12 sm:w-12 sm:text-xl"
                >
                  <FaInstagram />
                </a>
              </div>

              {/* Download CV Button */}
              {/* <button className="mt-10 w-fit rounded-full bg-[#00ABF0] px-8 py-3 font-semibold text-[#081B29] transition duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0]">
                Download CV
              </button> */}

              <a
                href="/Hifza-Nazar-CV.pdf"
                download
                className="mt-8 w-fit rounded-full bg-[#00ABF0] px-8 py-3 text-sm font-semibold text-[#081B29] transition duration-300 hover:bg-[#0095d4] hover:shadow-[0_0_20px_#00ABF0] sm:mt-10 sm:text-base"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

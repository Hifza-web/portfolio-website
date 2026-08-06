// function Navbar() {
//   return (
//     <header className="w-full bg-[#081B29]">
//       <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 lg:px-16">

//         {/* Logo */}
//         <h1 className="font-sans text-[32px] font-bold uppercase text-white ">
//           HIFZA NAZAR.
//         </h1>

//         {/* Navigation */}
//         <nav>
//           <ul className="font-sans ml-auto flex items-center gap-10">
//             <li>
//               <a href="#home" className="text-[18px] font-medium text-white transition hover:text-sky-400">
//                 Home
//               </a>
//             </li>

//             <li>
//               <a href="#about" className="text-[18px] font-medium text-white transition hover:text-sky-400">
//                 About
//               </a>
//             </li>

//             <li>
//               <a href="#skills" className="text-[18px] font-medium text-white transition hover:text-sky-400">
//                 Skills
//               </a>
//             </li>

//             <li>
//               <a href="#services" className="text-[18px] font-medium text-white transition hover:text-sky-400">
//                 Services
//               </a>
//             </li>

//             <li>
//               <a href="#projects" className="text-[18px] font-medium text-white transition hover:text-sky-400">
//                 Projects
//               </a>
//             </li>

//             <li>
//               <a href="#contact" className="text-[18px] font-medium text-white transition hover:text-sky-400">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;



import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className="w-full bg-[#081B29] relative z-50">
    <header className="sticky top-0 z-50 w-full bg-[#0B1F2D]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 lg:px-16">

        {/* Logo */}
        <h1 className="font-sans text-[24px] sm:text-[32px] font-bold  text-white ">
          Portfolio.
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="font-sans ml-auto flex items-center gap-10">
            <li>
              <a href="#home" className="text-[18px] font-medium text-white transition hover:text-sky-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="text-[18px] font-medium text-white transition hover:text-sky-400">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="text-[18px] font-medium text-white transition hover:text-sky-400">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="text-[18px] font-medium text-white transition hover:text-sky-400">
                Projects
              </a>
            </li>

            <li>
              <a href="#education" className="text-[18px] font-medium text-white transition hover:text-sky-400">
                Education
              </a>
            </li>

            <li>
              <a href="#contact" className="text-[18px] font-medium text-white transition hover:text-sky-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white focus:outline-none lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="h-8 w-8 text-sky-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8 text-white transition hover:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-slate-800 bg-[#081B29] px-5 py-6 lg:hidden">
          <ul className="font-sans flex flex-col items-center gap-6">
            <li>
              <a 
                href="#home" 
                onClick={() => setIsOpen(false)} 
                className="text-[18px] font-medium text-white transition hover:text-sky-400"
              >
                Home
              </a>
            </li>

            <li>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)} 
                className="text-[18px] font-medium text-white transition hover:text-sky-400"
              >
                About
              </a>
            </li>

            <li>
              <a 
                href="#skills" 
                onClick={() => setIsOpen(false)} 
                className="text-[18px] font-medium text-white transition hover:text-sky-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)} 
                className="text-[18px] font-medium text-white transition hover:text-sky-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a 
                href="#projects" 
                onClick={() => setIsOpen(false)} 
                className="text-[18px] font-medium text-white transition hover:text-sky-400"
              >
                Education
              </a>
            </li>

            <li>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="text-[18px] font-medium text-white transition hover:text-sky-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;

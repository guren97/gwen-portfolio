import LiveClock from "./LiveClock";
import { motion } from "framer-motion";
import { useLenis } from "../misc/LenisProvider";

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const lenis = useLenis();

  const scrollToWorks = (id, offset = 50) => {
    const element = document.getElementById(id);

    if (lenis.current && element) {
      setTimeout(() => {
        const sectionPosition =
          element.getBoundingClientRect().top + window.scrollY;

        lenis.current.scrollTo(sectionPosition - offset, {
          duration: 1.2,
          easing: (t) => t * (2 - t),
        });
      });
    }
  };

  return (
    <footer className="bg-gray-100 text-slate-700 px-6 py-12 md:py-20 lg:py-24 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left space-y-10 md:space-y-0 lg:px-24">
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-xl font-bold font-link-pixel-font">Socials</h1>
          <div className="flex   space-x-6 text-3xl">
            <a
              href="https://github.com/guren97"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-jersey text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300 drop-shadow-[1px_1px_0px_rgba(0,0,139,1)]"
            >
              <i className="hn hn-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/gbautista00"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-jersey text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300 drop-shadow-[1px_1px_0px_rgba(0,0,139,1)]"
            >
              <i className="hn hn-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-xl font-bold font-link-pixel-font">Email</h1>
          <div className="flex space-x-6 text-3xl">
            <a
              href="mailto:gwenbautista24@yahoo.com"
              rel="noopener noreferrer"
              className="group text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300  "
            >
              <h1 className="text-2xl flex justify-center items-center  gap-2 font-jersey tracking-tight text-yellow-400 drop-shadow-[1px_1px_0px_rgba(0,0,139,1)]">
                <i class="hn hn-envelope-solid"></i>{" "}
                <span>gwenbautista24@yahoo.com</span>
              </h1>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-6 pt-4 md:pt-2">
          <LiveClock />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col items-center justify-center px-4 py-6 text-sm sm:text-base md:text-lg lg:text-xl font-link-pixel-font tracking-normal text-yellow-400 drop-shadow-[1px_1px_0px_rgba(0,0,139,1)]">
          <p className="text-center leading-relaxed">
            <span className="font-jersey text-base sm:text-lg lg:text-2xl">
              &copy;
            </span>{" "}
            2025 Gwen Bautista Portfolio.{" "}
            <span className="text-blue-900">All rights reserved.</span>
          </p>
        </div>

        <motion.button
          onClick={() => scrollToWorks("home")}
          className="px-4 py-2 mt-6 flex items-center gap-2 bg-yellow-400 text-blue-900 cursor-pointer text-base sm:text-lg font-bold font-link-pixel-font rounded-lg shadow-lg drop-shadow-[4px_4px_0px_rgba(0,0,139,1)] hover:scale-105 transition-all duration-300"
        >
          Go to Top
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6  drop-shadow-[1px_1px_0px_rgba(0,0,139,1)] "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

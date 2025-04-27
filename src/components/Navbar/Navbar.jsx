import { useLenis } from "../misc/LenisProvider.jsx";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "./navLinks.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const smoothScrolltoSection = (id, offset = 50) => {
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

    setIsOpen(false); // ✅ Close sidebar after clicking
  };

  return (
    <nav className="bg-blue-800 shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="bg-blue-800 border-2 border-yellow-400 p-2 rounded-md drop-shadow-[4px_4px_0px_rgba(0,0,139,1)]">
          <button
            onClick={() => {
              if (lenis.current) {
                lenis.current.scrollTo(0, {
                  duration: 1.2,
                  easing: (t) => t * (2 - t),
                });
              }
            }}
            className="cursor-pointer relative inline-block"
          >
            <h1 className="text-2xl font-pixel-font text-yellow-400 uppercase relative">
              <span className="relative z-10">GB</span>
              <span className="absolute inset-0 text-blue-700 drop-shadow-[3px_3px_0px_rgba(0,0,139,1)] z-0">
                GB
              </span>
            </h1>
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => smoothScrolltoSection(link.id)}
              className="text-white text-lg font-link-pixel-font hover:text-yellow-400 transition duration-300 cursor-pointer drop-shadow-[3px_3px_0px_rgba(0,0,139,1)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden absolute   right-6 text-yellow-400 text-4xl hover:text-gray-100 hover:scale-105 transition-all cursor-pointer duration-300 drop-shadow-[3px_3px_0px_rgba(0,0,139,1)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "" : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Menu from Top-Right */}
            <motion.div
              initial={{ x: "100%", y: "0%" }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: "100%", y: "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-2/4 sm:w-2/2 bg-blue-900 flex flex-col items-center justify-center space-y-6 z-50 shadow-lg px-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-yellow-400 text-4xl hover:text-gray-100 hover:scale-105 transition-all cursor-pointer duration-300 drop-shadow-[3px_3px_0px_rgba(0,0,139,1)]"
              >
                <X size={42} />
              </button>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => smoothScrolltoSection(link.id)}
                  className="text-yellow-400 text-2xl font-link-pixel-font hover:text-yellow-100 transition cursor-pointer duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]"
                >
                  {link.label}
                </button>
              ))}

              <div className="flex flex-col items-center md:items-start space-y-6 w-full border-t border-white ">
                <h1 className="text-xl font-bold font-link-pixel-font text-white drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]    pt-4 w-full items-center flex justify-center">
                  Socials
                </h1>
                <div className="flex space-x-6 text-3xl">
                  <a
                    href="https://github.com/guren97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-yellow-400  hover:text-gray-100 hover:scale-105 transition-all duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]"
                  >
                    <i className="hn hn-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/gbautista00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-yellow-400 hover:text-gray-100 hover:scale-105 transition-all duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]"
                  >
                    <i className="hn hn-linkedin"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

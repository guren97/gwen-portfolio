import { useLenis } from "../misc/LenisProvider";
import PixelPic from "../../assets/images/PixelPic.webp";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
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
    <>
      <header
        id="home"
        className="relative w-full min-h-[100dvh] bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
      >
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?galaxy,stars')] bg-cover bg-center opacity-10 pointer-events-none animate-fade-in"></div>

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/50 [image-rendering:pixelated] animate-floating border-2 border-yellow-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.floor(Math.random() * 4) * 90}deg)`,
                animationDuration: `${3 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center text-white w-full max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12">
          <div className="relative w-56 h-62 sm:w-56 sm:h-56 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0">
            <img
              src={PixelPic}
              alt="Gwen Bautista"
              className="w-full h-full object-cover rounded-lg border-4 border-yellow-400 shadow-xl transform transition-transform hover:scale-105 duration-300"
            />

            <div className="absolute -top-3 -left-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-yellow-400 rounded-lg animate-bounce"></div>
            <div className="absolute -bottom-3 -right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-900 rounded-lg animate-bounce"></div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
            <h1 className="font-jersey text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Hey there, I'm
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-pixel-font text-yellow-400 uppercase relative tracking-wider animate-glow mt-2">
              Gwen <span className="hidden sm:inline">&nbsp;</span>Bautista
              <span className="absolute inset-0 text-blue-700 -z-10 drop-shadow-[4px_4px_0px_rgba(0,0,139,1)] sm:drop-shadow-[6px_6px_0px_rgba(0,0,139,1)]">
                Gwen <span className="hidden sm:inline">&nbsp;</span>Bautista
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-jersey text-gray-200 max-w-2xl">
              🚀 Crafting ideas into digital experiences as a passionate,
              self-taught Web Developer from the Philippines.
            </p>

            <div className="flex  sm:flex-row justify-between items-center sm:items-center w-full mt-6 gap-4 sm:gap-12 ">
              <button
                onClick={() => scrollToWorks("projects")}
                className="px-6 py-3 bg-yellow-400 text-blue-900 cursor-pointer text-lg font-bold font-link-pixel-font rounded-lg shadow-lg   drop-shadow-[4px_4px_0px_rgba(0,0,139,1)] hover:scale-105 transition-all duration-300"
              >
                My Works
              </button>
              {/* Possible Component - Social Media Links */}
              <div className="flex space-x-4 sm:space-x-4 text-3xl">
                <a
                  href="https://github.com/guren97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300  drop-shadow-[2px_2px_0px_rgba(0,0,139,1)] "
                >
                  <i className="hn hn-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/gbautista00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300  drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]"
                >
                  <i className="hn hn-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import v1_portfolio from "../../assets/images/v1-portfolio.png";
import v2_portfolio from "../../assets/images/v2-portfolio.png";
import v3_portfolio from "../../assets/images/the_green_one.png";

const projects = [
  {
    id: "project_one",
    image: v1_portfolio,
    href: "https://guren97.github.io/",
    title: "Portfolio Version 1",
    description:
      "Version One of my Portfolio Website which is currently hosted on GitHub Pages.",
  },
  {
    id: "project_two",
    image: v2_portfolio,
    href: "",
    title: "Mock Design",
    description:
      "This design is for one of my clients. It is designed using Figma.",
  },
  {
    id: "project_three",
    image: v3_portfolio,
    href: "",
    title: "Portfolio Mockup",
    description:
      "Mockup Design for my portfolio website. It is designed using Figma.",
  },
];

const ProjectCard = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable buttons
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    checkScrollPosition();
    currentRef?.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      currentRef?.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  // Handle modal state and prevent background scrolling
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = ""; // Restore scrolling when modal is closed
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedProject]);

  return (
    <>
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-6 p-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory 
          sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 drop-shadow-[5px_5px_0px_rgba(0,0,139,1)] rounded-lg "
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gray-100 border-4 border-yellow-400 rounded-lg shadow-lg overflow-hidden 
              flex-none w-72 sm:w-full snap-center cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => {
                // Check if the project has a link
                if (project.href) {
                  window.open(project.href, "_blank");
                } else {
                  // If the project doesn't have a link, open the modal
                  setSelectedProject(project);
                }
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-56 object-cover object-top rounded-t-md transition-transform duration-500 hover:scale-110"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-jersey">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 font-link-pixel-font text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-base font-jersey line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <motion.button
          whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
          whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
          onClick={() => scroll("prev")}
          disabled={!canScrollLeft}
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-blue-700 p-2 rounded-full 
          drop-shadow-[2px_2px_0px_rgba(0,0,139,1)] z-10 sm:hidden md:hidden lg:hidden 
          ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:p-3"}`}
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
          whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
          onClick={() => scroll("next")}
          disabled={!canScrollRight}
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-blue-700 p-2 rounded-full 
          drop-shadow-[2px_2px_0px_rgba(0,0,139,1)] z-10 sm:hidden md:hidden lg:hidden 
          ${!canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:p-3"}`}
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm px-2 sm:px-4 md:px-6 lg:px-8"
              onClick={() => setSelectedProject(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-yellow-400 text-blue-700 hover:bg-yellow-300 rounded-lg p-2 transition-colors 
              drop-shadow-[2px_2px_0px_rgba(0,0,139,1)] cursor-pointer"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✖
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="relative w-full max-w-3xl bg-white rounded-lg shadow-sm border-4 border-amber-400 
              drop-shadow-[4px_4px_0px_rgba(0,0,139,1)] max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 overflow-y-auto max-h-[80vh]">
                  <h2 className="text-2xl font-bold mb-4 font-link-pixel-font text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]">
                    {selectedProject.title}
                  </h2>
                  <img
                    className="w-full h-auto object-contain rounded-lg mb-4 border-2 border-gray-200"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                  <p className="text-gray-700 text-lg font-jersey">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectCard;

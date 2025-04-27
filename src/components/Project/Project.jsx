import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";

import spinMaster from "../../assets/projects_icons/spinmaster.svg";
import rebelJackets from "../../assets/projects_icons/rebel-jackets.svg";
import pokeCase from "../../assets/projects_icons/poke-case.svg";
import leatherStore from "../../assets/projects_icons/artisan-leather.svg";
import capVibe from "../../assets/projects_icons/cap-vibe.svg";
import gymgearPro from "../../assets/projects_icons/gymgear-pro.svg";
import cyberShirts from "../../assets/projects_icons/cyber-shirts.png";
import watchHaven from "../../assets/projects_icons/watch_haven.svg";
import puppyExpress from "../../assets/projects_icons/puppy_express.svg";
import tumblerRizz from "../../assets/projects_icons/tumbler-rizz.svg";

// Project data
const projects = [
  {
    name: "Watch Haven",
    icon: watchHaven,
    url: "https://watch-haven-omega.vercel.app",
    commissioned: 1,
    description:
      "A luxury watch retailer mockup with a sophisticated and minimal layout.",
  },
  {
    name: "Puppy Express",
    icon: puppyExpress,
    commissioned: 1,
    url: "https://puppy-express.vercel.app",
    description:
      "A pet adoption platform with a playful design and intuitive UX.",
  },
  {
    name: "Tumbler Rizz",
    icon: tumblerRizz,
    commissioned: 1,
    url: "https://tumbler-rizz.vercel.app",
    description:
      "A customizable tumbler store with vibrant colors and a modern look.",
  },
  {
    name: "Spinmaster Yoyo",
    icon: spinMaster,
    url: "https://spinmaster-yoyo.vercel.app",
    description:
      "A vibrant e-commerce site for premium yoyos with dynamic animations.",
  },
  {
    name: "Rebel Jackets",
    icon: rebelJackets,
    url: "https://rebel-jackets.vercel.app",
    description:
      "A stylish online store showcasing trendy jackets with a modern design.",
  },
  {
    name: "Poke Case",
    icon: pokeCase,
    url: "https://poke-case-three.vercel.app",
    description:
      "A fun mockup for Pokémon-themed phone cases with interactive features.",
  },
  {
    name: "Leather Store",
    icon: leatherStore,
    url: "https://leather-store.vercel.app",
    description:
      "An elegant storefront for high-quality leather goods with a sleek UI.",
  },
  {
    name: "Cap Vibe",
    icon: capVibe,
    url: "https://cap-vibe.vercel.app",
    description:
      "A trendy cap retailer site with bold visuals and smooth navigation.",
  },
  {
    name: "Gymgear Pro",
    icon: gymgearPro,
    url: "https://gymgear-pro.vercel.app",
    description:
      "A fitness gear shop with a clean, user-friendly interface for athletes.",
  },
  {
    name: "Cyber Shirts",
    icon: cyberShirts,
    url: "https://cyber-shirts.vercel.app",
    description:
      "A futuristic t-shirt store with neon aesthetics and responsive design.",
  },
];

// Project component
const Project = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 md:px-12 lg:px-24 bg-blue-700"
    >
      <div className="text-center max-w-3xl w-full mb-12">
        <Heading
          title="Projects"
          className="text-3xl font-bold mb-4 text-yellow-400"
        />
        <h2 className="text-lg sm:text-lg md:text-xl lg:text-lg leading-relaxed font-jersey text-slate-200">
          <span className="text-yellow-400">Simplicity</span>: Where Less
          Becomes Limitless.
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-jersey text-yellow-400">
          You can find some of my latest mockup designs and projects.
        </p>
      </div>

      <div className="w-full max-w-7xl  ">
        <div className="w-full flex flex-col items-center justify-center mb-8 ">
          <div className="w-full flex flex-wrap justify-center gap-6 relative">
            {projects.map((project, index) => (
              <Link
                to={project.url}
                target="_blank"
                key={index}
                className="flex flex-col items-center justify-center relative bg-white border-4 border-yellow-500 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] xl:w-[24%] p-4"
              >
                {project.commissioned === 1 && (
                  <div className="absolute top-2 left-2 text-blue-600 bg-yellow-400 px-2 py-1 rounded-md text-xs font-jersey tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]">
                    Commissioned
                  </div>
                )}
                <div className="h-16 w-16 mb-4">
                  <img
                    src={project.icon}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-yellow-400 text-2xl font-link-pixel-font transition duration-300 cursor-pointer drop-shadow-[1px_1px_0px_rgba(0,0,139,1)]">
                  {project.name}
                </h1>
                <p className="font-jersey text-center mt-2 text-gray-700">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

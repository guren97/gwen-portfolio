import techStack from "../../data/techStack.js";
import Stack from "./Stack.jsx"; // Import Stack component
import Heading from "../Heading/Heading.jsx";

const TechStack = () => {
  const categorizedTech = {
    Frontend: techStack.filter((tech) => tech.category === "Frontend"),
    Backend: techStack.filter((tech) => tech.category === "Backend"),
    Database: techStack.filter((tech) => tech.category === "Database"),
    Tools: techStack.filter((tech) => tech.category === "Tools"),
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-gray-50 text-slate-700 px-8 py-12 md:py-24 md:px-12 lg:py-20 lg:text-center md:justify-start"
    >
      <Heading
        title="Tech Stack"
        className="text-3xl font-bold mb-4 text-yellow-400 "
      />
      <h2 className="  text-center md:text-lg md:text-left leading-relaxed font-jersey text-slate-700">
        Continuously learning and evolving to stay at the forefront of web
        development.
      </h2>
      <p className=" text-center md:text-lg md:text-left leading-relaxed font-jersey text-yellow-400">
        Below are some of the tools I've worked with:
      </p>
      <div className="max-w-6xl mx-auto grid gap-8  ">
        {Object.entries(categorizedTech).map(([category, stacks]) => (
          <div key={category} className="">
            <h3 className="text-xl text-start tracking-wider text-slate-700 mb-2 font-jersey lg:text-center">
              {category}
            </h3>
            <div className="flex flex-wrap justify-start gap-6 lg:justify-center">
              {stacks.map((stack, index) => (
                <Stack key={index} name={stack.name} icon={stack.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

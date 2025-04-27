import PixelPic2 from "../../assets/images/PixelPic2.webp";
import Heading from "../Heading/Heading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 text-slate-700 px-6 py-12 md:py-24 lg:py-28"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6  ">
        {/* Left Section - Text */}
        <div className="lg:w-3/5 md:w-3/5 text-center md:text-left">
          <Heading
            title="About Me"
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4 text-yellow-400"
          />
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed font-jersey">
            Hey there! My name is <strong>Gwen Bautista </strong>, a passionate,
            self-taught Web Developer from the <strong>Philippines</strong>. I
            love building websites, working with data, and learning new things.
            I have experience in <strong>Python, PHP, and JavaScript</strong>,
            and have worked with <strong>MySQL</strong> and{" "}
            <strong>MongoDB</strong>.
          </p>

          <p className="mt-4 text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed font-jersey">
            Over the years, I have enhanced my skills by working on various
            projects, from <strong>QGIS mapping and office work</strong> to{" "}
            <strong>graphic design</strong>. I am also pursuing a{" "}
            <strong>degree in education</strong> to expand my knowledge. Whether
            solving technical problems or designing user-friendly interfaces, I
            bring <strong>enthusiasm, precision, and teamwork</strong> to every
            project.
          </p>

          <p className="mt-4 text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed font-jersey">
            In my free time, I enjoy <strong>sports</strong>, and I have been
            recognized as a <strong>national-level athlete</strong> back in my
            tertiary years. Feel free to explore my <strong>portfolio</strong>{" "}
            to learn more about my work and skills!
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center lg:w-2/5 md:w-2/5">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={PixelPic2}
            alt="Gwen Bautista"
            className="w-[clamp(10rem,30vw,18rem)] h-auto border-4 border-yellow-400 
               shadow-lg object-cover rounded-lg drop-shadow-[5px_5px_0px_rgba(0,0,139,1)]  "
          />
        </div>
      </div>
    </section>
  );
};

export default About;

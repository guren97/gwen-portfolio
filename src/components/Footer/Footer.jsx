import LiveClock from "./LiveClock";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-slate-700 px-6 py-12 md:py-20 lg:py-24 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left space-y-10 md:space-y-0 lg:px-24">
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-xl font-bold font-link-pixel-font">Socials</h1>
          <div className="flex space-x-6 text-3xl">
            <a
              href="https://github.com/guren97"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]"
            >
              <i className="hn hn-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/gbautista00"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-yellow-400 hover:text-yellow-500 hover:scale-105 transition-all duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,139,1)]"
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

      <div className="w-full flex items-center justify-center mt-12">
        <h1 className="text-lg font-link-pixel-font tracking-tight text-yellow-400 drop-shadow-[1px_1px_0px_rgba(0,0,139,1)]">
          <span className="font-jersey">&copy;</span> Gwen Bautista Portfolio
          2025
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

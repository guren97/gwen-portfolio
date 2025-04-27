import "./stack.css";

const Stack = ({ name, icon }) => {
  return (
    <div className="group   flex flex-col items-center justify-center transition-transform transform hover:scale-110 w-20 h-20 md:w-16 md:h-16 lg:w-24 lg:h-24 shadow-lg relative pixel-border">
      <div className="bg-yellow-400 rounded relative w-full h-full flex flex-col items-center justify-center px-4 md:px-5">
        <div className="white-dot absolute inset-0 bg-slate-100"></div>
        <div className="white-dot absolute inset-1 bg-slate-100"></div>
        <div className="white-dot absolute inset-2 top-1 bg-slate-100"></div>
        <div className="white-dot absolute inset-2 -ml-1 top-2 bg-slate-100"></div>

        <img
          src={icon}
          alt={name}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"
        />

        <h1 className="font-jersey   text-white tracking-wider text-xs md:text-sm lg:text-base font-normal transition-colors duration-300 text-center group-hover:text-blue-700">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Stack;

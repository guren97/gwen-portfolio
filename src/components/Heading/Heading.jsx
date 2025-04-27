const Heading = ({ title, className }) => {
  return (
    <div className={`backdrop-blur-md ${className}`}>
      {/* Styled Title with Pixel Effect */}
      <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-pixel-font text-yellow-400 uppercase relative tracking-wider">
        {title}
        <span className="absolute inset-0 text-blue-700 -z-10 drop-shadow-[4px_4px_0px_rgba(0,0,139,1)]">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Heading;

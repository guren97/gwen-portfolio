import { useState } from "react";
import "./infinite-text-loop.css";

const InfiniteTextLoop = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-gray-900 py-3 font-link-pixel-font">
      {/* Train Icon here */}
      <div
        className="flex space-x-8 animate-marquee"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
          🚀 Web Development
        </span>
        <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
          🏢 Administrative Services (Clerical)
        </span>
        <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
          🗺️ Map Data Processing (QGIS)
        </span>
        <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
          🎨 Graphic Design
        </span>
        <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
          💡 Creative Solutions
        </span>
        <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold">
          🛠️ Full-Stack Development
        </span>
      </div>
    </div>
  );
};

export default InfiniteTextLoop;

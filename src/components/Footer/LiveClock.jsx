import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Manila",
    }).format(date);
  };

  return (
    <>
      <div className="flex flex-col items-left justify-start ">
        <div>
          <h1 className="font-link-pixel-font text-xl mb-4">
            Local Time in the Philippines.
          </h1>
          <div className=" font-link-pixel-font text-lg text-yellow-400  drop-shadow-[1px_1px_0px_rgba(0,0,139,1)] ">
            {formatTime(time)} PHT
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveClock;

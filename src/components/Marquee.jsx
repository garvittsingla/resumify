import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
    "/11.svg",
  ];

  

return (
    <div className="container mx-auto flex justify-center">
            <p className="text-slate-600 mx-auto">Used by Employees of </p>
        <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
);
};

export default Marquee;
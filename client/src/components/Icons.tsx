import React from "react";
import footerGrid from "/src/public/footer-grid.svg";
import { techs } from "../data/data";

const TooltipIcon = ({ name, icon }) => {
  return (
    <div className="relative group inline-block mx-2">
      <img
        src={icon}
        alt={`${name} Icon`}
        className="w-20 h-20 sm:w-24 sm:h-24 cursor-pointer transition-transform transform group-hover:-translate-y-1"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full w-max hidden group-hover:block bg-gray-800 text-white text-md rounded p-2 transition-opacity duration-200 ease-in-out">
        {name}
      </div>
    </div>
  );
};

const TechIcons = () => {
  return (
    <div className="relative grid px- md:px-24 xl:px-48 grid-cols-4 md:grid-cols-5 justify-items-center items-center h-96 mt-32 gap-y-10">
      <div className="w-full absolute min-h-96">
        <img src={footerGrid} alt="grid" className="w-full h-full opacity-70" />
      </div>
      {techs.map((tech) => (
        <div key={tech.name} data-aos={tech.aos}>
          <TooltipIcon name={tech.name} icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default TechIcons;

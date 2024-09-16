import React from "react";
import footerGrid from "/src/public/footer-grid.svg";

const techs = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
  { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
  { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  { name: "Appwrite", icon: "https://skillicons.dev/icons?i=appwrite" },
];

const TooltipIcon = ({ name, icon }) => {
  return (
    <div className="relative group inline-block mx-2">
      <img
        src={icon}
        alt={`${name} Icon`}
        className="w-20 h-20 sm:24 sm:h-24 cursor-pointer transition-transform transform group-hover:-translate-y-1"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full  w-max hidden group-hover:block bg-gray-800 text-white text-md rounded p-2 transition-opacity duration-200 ease-in-out">
        {name}
      </div>
    </div>
  );
};

const TechIcons = () => {
  return (
    <div className="relative grid lg:px-52 grid-cols-4 md:grid-cols-5 justify-items-center items-center h-96 mt-32 gap-y-10">
      <div className="w-full absolute  min-h-96">
        <img
          src={footerGrid}
          alt="grid"
          className="w-full h-full opacity-70 "
        />
      </div>
      {techs.map((tech) => (
        <TooltipIcon key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default TechIcons;

import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbBrandPowershell } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  const technical = [
    {
      language: "React",
      Percentage: 82,
    },
    {
      language: "Tailwind CSS",
      Percentage: 85,
    },
    {
      language: "MongoDB",
      Percentage: 81,
    },
    {
      language: "Express Js",
      Percentage: 82,
    },
    {
      language: "Python",
      Percentage: 75,
    },
    {
      language: "C#",
      Percentage: 61,
    },
    {
      language: "Typescript",
      Percentage: 72,
    },
    {
      language: "Git",
      Percentage: 73,
    },
    {
      language: "Shell",
      Percentage: 67,
    },
    {
      language: "React Native",
      Percentage: 74,
    },
  ];
  const soft = [
    {
      softskill: "Collaborative Problem Solving",
      Percentage: 85,
    },
    {
      softskill: "Project Management",
      Percentage: 82,
    },
    {
      softskill: "Research Skills",
      Percentage: 84,
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold text-cyan-500 py-10">
          Certeficates
        </h1>
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline "
          to="https://www.coursera.org/account/accomplishments/specialization/YZGQ5LEZBURU"
        >
          Meta Front-End Developer
        </Link>
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://intranet.alxswe.com/certificates/32SBFerxmh"
        >
          AI Career Essentials
          <br />
        </Link>
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://www.coursera.org/account/accomplishments/verify/6JT7MW3KFRVM"
        >
          HTML CSS and Javascript for Web Developers
        </Link>
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://www.sololearn.com/certificates/CC-SVMOQESC"
        >
          Introduction to C#
        </Link>
        <br />

        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://intranet.alxswe.com/certificates/exG8rJTE2m?utm_campaign=VEN%20-2024Q1%20-%20Founders%20Academy%20C1&utm_medium=email&_hsenc=p2ANqtz-9h1Jk0lWjEzmhrbankm1f5OGCYn8M8LqJLCaMIOp_B4LiezKYjEuWhT7DL4LnEGhtj5vSYkIt24hcFixI-_tk8-ku7TQ&_hsmi=91097812&utm_content=91097812&utm_source=hs_email"
        >
          Founders Academy
        </Link>
      </div>
      <hr className="border-[1/4px] my-7  border-cyan-800  hover:text-cyan-500" />

      <div>
        <h1 className="text-3xl font-semibold text-cyan-500">
          My technical skills
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-x-20 md:gap-y-5 py-10">
          {technical.map((data, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <h6>{data.language} </h6>
                <h6 className="text-sm text-cyan-200">{data.Percentage}%</h6>
              </div>
              <div className="w-full h-1 bg-slate-500 rounded-md">
                <div
                  className="h-1 bg-cyan-600 rounded-md"
                  style={{ width: `${data.Percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex gap-2 md:gap-7 lg:gap-12 justify-center items-center text-2xl ">
          <FaReact className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <SiTailwindcss className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <SiExpress className=" text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <SiMongodb className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <SiTypescript className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <FaPython className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <FaGit className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <TbBrandCSharp className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <TbBrandPowershell className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <TbBrandReactNative className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
        </div>
      </div>
      <hr className="border-[1/4px] my-7  border-cyan-800  hover:text-cyan-500" />

      <div className="pt-12">
        <h1 className="text-3xl font-semibold text-cyan-500">My soft skills</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-x-20 md:gap-y-5 py-10">
          {soft.map((data, index) => (
            <div>
              <div className="flex justify-between items-center">
                <h6>{data.softskill} </h6>
                <h6 className="text-sm text-cyan-200">{data.Percentage}%</h6>
              </div>
              <div className="w-full h-1 bg-slate-500 rounded-md">
                <div
                  className="h-1 bg-cyan-600 rounded-md"
                  style={{ width: `${data.Percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex gap-6 md:gap-12 justify-center items-center text-2xl pb-12">
          <GiArchiveResearch className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <FaPeopleGroup className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
          <MdManageAccounts className="text-cyan-400 hover:text-cyan-100 duration-150 ease-in-out hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

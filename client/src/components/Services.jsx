import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";

const Services = () => {
  const data = [
    {
      title: "Front-end Development",
      description:
        "I build modern, responsive, and user-friendly websites using the latest technologies. Whether you need a simple landing page or a complex web application, using frameworks like tailwind, and react",
      icon: <CgWebsite />,
    },
    {
      title: "Full Stack Development",
      description:
        "From frontend to backend, I provide comprehensive development services to ensure your application is fully integrated and functional. Leveraging the MERN stack, I deliver robust and scalable solutions.",
      icon: <FaServer />,
    },
    {
      title: "Database Management",
      description:
        "Efficiently design and manage databases to store and retrieve data securely. My expertise in MongoDB ensures your data is well-organized and easily accessible.",
      icon: <FaDatabase />,
    },
    {
      title: "Consultation and Maintenance",
      icon: <GrHostMaintenance />,

      description:
        "Offer consultation services to help plan and execute your projects effectively. I also provide ongoing maintenance to ensure your applications run smoothly and stay up-to-date.",

    },
  ];
  return (
    <div>
      <Navbar />
      <div className="py-32 bg-slate-950 text-cyan-100 px-12 sm:px-24 md:px-44 lg:px-60 min-h-screen font-[Poppins]  text-sm">
        <h1 className="text-2xl md:text-3xl font-semibold text-cyan-600 text-center pb-5">
          Service Offering
        </h1>
        <p className="font-semibold text-center pb-16">
          Welcome to my services page! I offer a range of web development
          services designed to bring your projects to life.
        </p>
        {data.map((data, index) => (
          <div key={index} className="border-l-[1px] border-cyan-800 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-500 pb-6">
              {data.icon} {data.title}
            </h3>
            <p className="text-sm ">{data.description}</p>
            <hr className="border-[1/4px] mt-7 pb-5  border-cyan-800  hover:text-cyan-500" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;

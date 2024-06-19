import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Footer from "./Footer";



const Personal = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 text-cyan-100 pt-40 px-10 sm:px-24 md:px-28 lg:px-40 xl:px-52 font-[Poppins]  text-sm">
        <h1 className="text-3xl font-semibold text-cyan-500">
          Personal Background
        </h1>
        <p className="pt-3 text-sm">
          Hi, I'm Bereket Getachew, a junior full stack developer from Addis
          Ababa, Ethiopia. I completed my high school education at Kidane Mihret
          School, where the emphasis on discipline and a strong educational
          foundation shaped my approach to learning and personal growth, and
          currently I learning backend at ALX.
        </p>
        <h1 className="text-3xl font-semibold text-cyan-500 mt-6">
          Self-Learning Journey
        </h1>
        <p className="pt-3 text-sm">
          My journey into the world of programming began in grade 12, driven by
          a fascination with how websites and applications are built. This early
          interest sparked a self-driven exploration into various aspects of
          coding and development. Here are some key milestones in my journey:
        </p>
        <div>
          <Timeline />
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Personal;

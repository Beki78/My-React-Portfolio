import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-scroll";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-slate-950 min-h-screen flex items-center flex-col lg:flex-row gap-7 md:gap-14 px-5 sm:px-16 md:px-32 lg:px-20 xl:px-64 font-[Poppins] pb-14">
        <div>
          <div className="blob"></div>
        </div>
        <div>
          <p className="text-white text-[.9rem] sm:text-[.9rem] leading-6">
            Hi, I&apos;m Bereket, a passionate full stack developer from Ethiopia. I
            can build dynamic and responsive web applications using MERN stack.
            Driven by curiosity and dedication. I like to
            update my self to the latest technology. I&apos;m eager to contribute to
            innovative projects and collaborate with like-minded professionals
            to create impactful digital solutions. Welcome to my portfolio!
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-purple-400 font-semibold cursor-pointer"
            >
              &nbsp; More about me
              <CiShare1 className="inline text-lg" />
            </Link>
          </p>
          <hr className="border-[1/4px] my-7 mx-6 border-purple-300  " />
          <div className="text-2xl text-purple-500 flex gap-12 justify-center mt-12  ">
            <a target="_blank" href="https://www.linkedin.com/in/bereketgetachew/">
              <FaLinkedin className="border-purple-300  hover:text-purple-200  duration-100 ease-in cursor-pointer" />
            </a>
            <a target="_blank" href="https://github.com/Beki78/">
              <FaGithub className="border-purple-300  hover:text-purple-200  duration-100 ease-in cursor-pointer" />
            </a>
            <a target="_blank" href="mailto:your.bakiget78@gmail.com">
              <MdEmail className="border-purple-300  hover:text-purple-200  duration-100 ease-in cursor-pointer" />
            </a>
            <a target="_blank" href="https://t.me/BGM78BB">
              <FaTelegram className="border-purple-300  hover:text-purple-200  duration-100 ease-in cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

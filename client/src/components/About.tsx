import React from "react";
import { skillIcons } from "../data/data";

const About = () => {
  return (
    <div>
      <div className="bg-slate-950 pt-32 flex items-center flex-col lg:flex-row gap-7 md:gap-14 px-5 sm:px-16 md:px-32 lg:px-20 xl:px-40 2xl:px-60 font-[Poppins] pb-14">
        <div>
          <div className="blob"></div>
        </div>
        <div>
          <p
            data-aos="fade-down"
            className="text-white text-[.9rem] sm:text-[.9rem] leading-6"
          >
            Hi, I&apos;m Bereket, a passionate full stack developer from
            Ethiopia. I can build dynamic and responsive web applications using
            the MERN stack. Driven by curiosity and dedication, I like to update
            myself with the latest technology. I&apos;m eager to contribute to
            innovative projects and collaborate with like-minded professionals
            to create impactful digital solutions. Welcome to my portfolio!
          </p>
          <div className="text-2xl text-purple-500 flex gap-12 justify-center mt-12">
            {skillIcons.map(({ href, img, alt, target, aos }, index) => (
              <a
                key={index}
                href={href}
                target={target}
                rel="noopener noreferrer"
                className="text-2xl"
                data-aos={aos}
              >
                <img
                  src={img}
                  alt={alt}
                  className="h-8 w-8 border-purple-300 hover:-translate-y-1 hover:text-purple-200 duration-300 ease-in-out cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { Link } from "react-scroll";

const skillIcons = [
  {
    href: "https://www.linkedin.com/in/bereketgetachew/",
    img: "https://skillicons.dev/icons?i=linkedin",
    alt: "LinkedIn",
    target: "_blank",
    aos : "fade-right"

  },
  {
    href: "https://github.com/Beki78/",
    img: "https://skillicons.dev/icons?i=github",
    alt: "GitHub",
    target: "_blank",
    aos: "fade-up",
  },
  {
    href: "mailto:your.bakiget78@gmail.com",
    img: "https://skillicons.dev/icons?i=gmail",
    alt: "Email",
    target: "_blank",
    aos: "fade-left",
  },
];

const About = () => {
  return (
    <div>
      <div className="bg-slate-950 pt-32 flex items-center flex-col lg:flex-row gap-7 md:gap-14 px-5 sm:px-16 md:px-32 lg:px-20 xl:px-80 font-[Poppins] pb-14">
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
                data-aos = {aos}
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

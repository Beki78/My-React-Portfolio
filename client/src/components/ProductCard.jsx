"use client";
import { PinContainer } from "./ui/3d-pin";
import Photo1 from "../assets/Screenshot 2024-05-22 103326.png";
import Photo2 from "../assets/Screenshot 2024-06-14 232015.png";
import Photo3 from "../assets/Screenshot 2024-07-19 001251.png";
import Photo4 from "../assets/image.png";
import Photot5 from "../assets/calculator.png";
import Photot6 from "../assets/unitcal.png";
import Photot7 from "../assets/stopwatch.png";

export const AnimatedPinDemo = () => {
  const data = [
    {
      title: "Hulu Clone",
      stack: "frontend",
      desc: "Frontend clone of the Hulu movie streaming website.",
      photo: Photo1,
      github: "https://github.com/Beki78/hulu-app",
      live: "https://66367e96669e3d282a3158f1--reliable-choux-c0e822.netlify.app/",
      technology: [
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=tailwind",
      ],
      inProgress: true, // Mark this project as in progress
    },
    {
      title: "Begize Landing Page",
      stack: "frontend",
      desc: "A landing page to showcase and gather data",
      photo: Photo2,
      github: "https://github.com/Beki78/Begize-Landing-page",
      live: "https://666c9f1da29f4eb9477ed74b--begizelandingpage1.netlify.app/",
      technology: [
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=tailwind",
      ],
      inProgress: false,
    },
    {
      title: "URL Shortener",
      stack: "Full Stack",
      desc: "Convert long URLs into shorter links",
      photo: Photo4,
      github: "https://github.com/Beki78/short-url",
      live: "https://myurlshorten.netlify.app/",
      technology: [
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=tailwind",
        "https://skillicons.dev/icons?i=mongodb",
        "https://skillicons.dev/icons?i=express",
      ],
      inProgress: false,
    },
    {
      title: "KMS School Web",
      stack: "Frontend",
      desc: "A school School to get a administration easily and show case their school",
      photo: Photo3,
      github: "https://github.com/Beki78/school-app",
      live: "https://kidanemihretschool.netlify.app/",
      technology: [
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=tailwind",
        "https://skillicons.dev/icons?i=mongodb",
        "https://skillicons.dev/icons?i=express",
      ],
      inProgress: false,
    },
    {
      title: "Calculator",
      stack: "Frontend",
      desc: "Simple web calculator",
      photo: Photot5,
      github: "https://github.com/Beki78/js-projects",
      live: "https://beki78.github.io/js-projects/calculator%20js/",
      technology: [
        "https://skillicons.dev/icons?i=html",
        "https://skillicons.dev/icons?i=css",
        "https://skillicons.dev/icons?i=js",
      ],
      inProgress: false,
    },
    {
      title: "Stop Watch",
      stack: "Frontend",
      desc: "A simple stopwatch.",
      photo: Photot7,
      github: "https://github.com/Beki78/js-projects",
      live: "https://beki78.github.io/js-projects/timer%20js/",
      technology: [
        "https://skillicons.dev/icons?i=html",
        "https://skillicons.dev/icons?i=css",
        "https://skillicons.dev/icons?i=javascript",
      ],
      inProgress: false,
    },
    {
      title: "Unit Convertor",
      stack: "Frontend",
      desc: "simple unit convertor",
      photo: Photot6,
      github: "https://github.com/Beki78/calculator",
      live: "https://beki78.github.io/calculator/",
      technology: [
        "https://skillicons.dev/icons?i=html",
        "https://skillicons.dev/icons?i=css",
        "https://skillicons.dev/icons?i=js",
      ],
      inProgress: false,
    },
  ];

  return (
    <div>
      {" "}
      <h1 className="text-5xl font-semibold text-white  mt-18 text-center">
        Recent <span className="text-purple-500">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 py-12 mx-32">
        {data.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.live}>
            <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-[15em] md:h-auto object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="max-w-xs !pb-2 !m-0 pt-2 font-bold text-base text-slate-100">
                  {item.title}
                </h3>
                {item.inProgress && (
                  <div className="text-xs font-semibold text-white bg-green-500 py-1 px-3 rounded-full ">
                    In Progress
                  </div>
                )}
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">{item.desc}</span>

                {/* Technologies section with icons */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.technology.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * techIndex + 2}px)`,
                        }}
                      >
                        <img src={tech} alt="Technology Icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-start items-center">
                    <p className="flex text-sm text-purple">Live</p>
                    <p className="flex text-sm text-purple">Github</p>
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

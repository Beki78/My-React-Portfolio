import Navbar from "./Navbar";
import { Button } from "./ui/moving-border";
import exp1 from "../public/exp1.svg"
import exp2 from "../public/exp2.svg"
import exp3 from "../public/exp3.svg"
import exp4 from "../public/exp4.svg"

const Services = () => {
 

  const workExperience = [
    {
      id: 1,
      title: "Front-end Development",
      desc: "I build modern, responsive, and user-friendly websites using the latest technologies. Whether you need a simple landing page or a complex web application, using frameworks like tailwind, and react",
      className: "md:col-span-2",
      thumbnail: exp2,
    },
    {
      id: 2,
      title: "Back-end Development",
      desc: "I build efficient, scalable, and secure backend systems using modern technologies like Express and Django. From API development to database management with MongoDB and MySQL.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: exp1,
    },
    {
      id: 3,
      title: "Mobile Development",
      desc: "I create high-performance, user-friendly mobile apps using React Native and Expo. I deliver seamless, responsive experiences with features like real-time updates, location services, and more.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: exp4,
    },
    {
      id: 4,
      title: "Consultation and Maintenance",
      desc: "Offer consultation services to help plan and execute your projects effectively. I also provide ongoing maintenance to ensure your applications run smoothly and stay up-to-date.",
      className: "md:col-span-2",
      thumbnail: exp3,
    },
  ];

  return (
    <div>
      <div className="py-32 bg-slate-950 text-cyan-100 px-12 sm:px-24 md:px-44 lg:px-60 min-h-screen font-[Poppins]   text-sm">
        <h1 className="text-5xl font-semibold text-white  mt-72 text-center">
          Services <span className="text-purple-500">Offering</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 animate-borderMorph dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-purple-200 text-sm mt-3 font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import { Button } from "./ui/moving-border";
import { workExperience } from "../data/data";

const Services = () => {
  return (
    <div>
      <div className="py-3 bg-slate-950 text-cyan-100 px-12 sm:px-24 md:px-32 xl:px-40 min-h-screen font-[Poppins]  text-sm">
        <h1 className="text-4xl md:text-5xl font-semibold text-white  mt-72 text-center">
          Services <span className="text-purple-500">Offering</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 m grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 animate-borderMorph dark:border-slate-800"
            >
              <div className="flex xl:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
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

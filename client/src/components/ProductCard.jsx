"use client";
import { PinContainer } from "./ui/3d-pin";
import { Tabs } from "../components/ui/tabs";
import { dataFront, dataFull, dataMob } from "../data/data";
import ButtonColor from "./ButtonColor"
import { useNavigate } from "react-router-dom";

export const AnimatedPinDemoFront = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-20 py-12 w-full lg:px-10 xl:px-0 2xl:px-32 ">
        {dataFront.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.live}>
            <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full">
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-auto object-cover"
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
                 
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};
export const AnimatedPinDemoFull = () => {


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 py-12 ">
        {dataFull.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.live}>
            <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-auto object-cover"
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
                 
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};
export const AnimatedPinDemoMob = () => {


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 py-12 ">
        {dataMob.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.live}>
            <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-40 object-cover"
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
                 
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full  overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-slate-950">
          <AnimatedPinDemoFront />
        </div>
      ),
    },
    {
      title: "Full-Stack",
      value: "fullstack",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-slate-950">
          <AnimatedPinDemoFull />
        </div>
      ),
    },
    {
      title: "Mobile",
      value: "mobile",
      content: (
        <div className="w-full  overflow-hidden h-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-slate-950">
          <AnimatedPinDemoMob />
        </div>
      ),
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="relative  flex flex-col mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
      <div className="flex justify-center w-full py-7">
        <ButtonColor
          name="View All Projects"
          func={() => navigate("/projects")}
        />
      </div>
    </div>
  );
}

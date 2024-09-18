import React, { useContext } from 'react'
import NavBar from "../components/Navbar"
import {  dataAll } from "../data/data";
import { PinContainer } from '../components/ui/3d-pin';
import { MyContext } from "../context/state";
import Footer from "../components/Footer"

const Project = () => {
  const {handleModal} = useContext(MyContext)
  return (
    <div>
      <NavBar />
      <div className="bg-slate-950 ">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-semibold text-white  mt-18 text-center pt-32  pb-12"
        >
          All <span className="text-purple-500">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 py-12 lg:px-10 xl:px-32 2xl:px-48 ">
          {dataAll.map((item, index) => (
            <PinContainer
              key={index}
              title={item.title}
              onClick={() => handleModal(item)}
            >
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
                          <img
                            src={tech}
                            alt="Technology Icon"
                            className="p-2"
                          />
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
      <Footer/>
    </div>
  );
}

export default Project
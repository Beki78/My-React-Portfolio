import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../assets/Screenshot 2024-05-22 103326.png";
import Footer from "../components/Footer"

const Card = () => {

    const data = [
      {
        title: "Hulu Clone",
        stack:"frontend",
        desc: "This is a Hulu clone made using tailwind CSS for styling and reactjs. I use axios to fetch data",
        photo: Photo1,
        github: "https://github.com/Beki78/hulu-app",
        live: "https://66367e96669e3d282a3158f1--reliable-choux-c0e822.netlify.app/",
      },
    ];
  return (
    <div>
      <div className="pt-32 bg-slate-950 text-cyan-100 px-24 sm:px-12 md:px-20 min-h-screen font-[Poppins] ">
        <h1 className="text-3xl font-semibold text-cyan-600 text-center pb-5">
          Service Offering
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {data.map((data, index) => (
            <div
              key={index}
              className="p-2 border-[1px] border-cyan-800 rounded-md bg-slate-900 shadow-sm shadow-cyan-100 hover:shadow-md hover:shadow-cyan-700"
            >
              <div className="overflow-hidden inline-block">
                <img
                  src={data.photo}
                  alt=""
                  className="w-full hover:scale-110 duration-300 transition-transform"
                />
              </div>
              <div>
                <h1 className=" py-2 text-cyan-500 text-lg font-bold">
                  {data.title}{" "}
                  <span className="text-[12px] md:text-sm text-cyan-200 font-light"> - {data.stack}</span>
                </h1>
                <hr className="border-[1/2px] my-2 border-cyan-300  hover:text-cyan-700" />

                <p className="text-[12px] md:text-sm">{data.desc}</p>
                <div className="text-sm flex gap-4 text-center py-2">
                  <Link
                    to={data.github}
                    className="w-full bg-slate-800 hover:bg-slate-700 duration-200 ease-in-out py-1 rounded-md border-[1px] border-cyan-700 font-semibold"
                  >
                    GitHub
                  </Link>
                  <Link
                    to={data.live}
                    className="w-full bg-slate-800 hover:bg-slate-700 duration-200 ease-in-out py-1 rounded-md border-[1px] border-cyan-700 font-semibold"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;

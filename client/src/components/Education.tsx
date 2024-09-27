import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="mt-12 p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
        to="https://www.uopeople.edu/"
        target="_blank"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
        className="mb-4 hover:-translate-y-3 space-y-1 p-10 rounded-lg shadow-md shadow-slate-600 hover:shadow-xl hover:shadow-slate-700 ease-in-out duration-700"
      >
        <h3 className="text-2xl font-bold text-center text-white">
          University of the People
        </h3>
        <p className="text-gray-300 text-center">August 2024 - August 2027</p>
        <p className="text-gray-400 text-center">
          Pursuing a degree in Computer Science
        </p>
        <img
          data-aos="fade"
          src="https://globaleducationcoalition.unesco.org/uploads/128_University_of_the_People_color_logo_mtSudu.png?v=cY2tadwF4BXLraddaiVUtWkkJmjmK2vTGNkIEBGnvz8"
          alt="UOPEOPLE"
          className="w-48 mx-auto pt-7"
        />
      </Link>
      <Link
        to="https://www.alxafrica.com/"
        target="_blank"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
        className="space-y-1 hover:-translate-y-3 mb-4 p-10 rounded-lg shadow-md shadow-slate-600 hover:shadow-xl  hover:shadow-slate-700  ease-in-out duration-700"
      >
        <h3 className="text-2xl font-bold text-white  text-center">
          ALX Backend Program
        </h3>
        <p className="text-gray-300 text-center">March 2024 - October 2024</p>
        <p className="text-gray-400 text-center">
          Focused on backend development skills.
        </p>
        <img
          data-aos="fade"
          src="https://yt3.googleusercontent.com/X4sbgUQnABm5Cx35t7MChPJr4kW7zOCLLy2J9-mBw9EsG3zNVd-I7W37MbSw9mT7cknpH1HL=s900-c-k-c0x00ffffff-no-rj"
          alt="ALX"
          className="w-48 mx-auto py-2 rounded-3xl"
        />
      </Link>
      <Link
        to="https://kidanemeheretschooladdisababa.wordpress.com/"
        target="_blank"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
        className="space-y-1 hover:-translate-y-3 mb-4 p-10 rounded-lg shadow-md shadow-slate-600 hover:shadow-xl  hover:shadow-slate-700  ease-in-out duration-700"
      >
        <h3 className="text-2xl font-bold text-whited text-center">
          Kidane Mehret School
        </h3>
        <p className="text-gray-300 text-center">February 2010 - June 2022</p>
        <p className="text-gray-400 text-center">
          From elementary school through high school.
        </p>
        <img
          data-aos="fade"
          src="https://www.ethyp.com/img/et/h/1637603736-31-kidane-meheret-foreign-cuisine-pastry-making-school.jpg"
          alt="KMS"
          className="w-48 mx-auto py-2 rounded-full"
        />
      </Link>
    </div>
  );
};

export default Education;

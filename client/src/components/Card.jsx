import Photo1 from "../assets/Screenshot 2024-05-22 103326.png";
import Photo2 from "../assets/Screenshot 2024-06-14 232015.png";
import Photo3 from "../assets/Screenshot 2024-07-19 001251.png";
import Photo4 from "../assets/image.png"
import Photot5 from "../assets/calculator.png"
import Photot6 from "../assets/unitcal.png"
import Photot7 from "../assets/stopwatch.png"
import { AnimatedPinDemo } from "./ProductCard";

const Card = () => {
  const data = [
    {
      title: "Hulu Clone",
      stack: "frontend",
      desc: "This is a Hulu clone made using tailwind CSS for styling and reactJs. I use axios to fetch data",
      photo: Photo1,
      github: "https://github.com/Beki78/hulu-app",
      live: "https://66367e96669e3d282a3158f1--reliable-choux-c0e822.netlify.app/",
    },
    {
      title: "Begize Landing Page",
      stack: "frontend",
      desc: "This is a landing page for information gathering made using tailwind CSS for styling and reactJs. and emailjs as a email receive api",
      photo: Photo2,
      github: "https://github.com/Beki78/Begize-Landing-page",
      live: "https://666c9f1da29f4eb9477ed74b--begizelandingpage1.netlify.app/",
    },
    {
      title: "URL Shortener",
      stack: "Full Stack",
      desc: "A URL shortener application that enables users to convert long URLs into shorter links, featuring a React frontend with Tailwind CSS and express for the backend MongoDB for data storage",
      photo: Photo4,
      github: "https://github.com/Beki78/short-url",
      live: "https://myurlshorten.netlify.app/",
    },
    {
      title: "KMS School Web",
      stack: "Frontend",
      desc: "This is a web for school to get a administration easily and show case their school made using tailwind CSS for styling and reactJs. and express js with mongoDB from the server",
      photo: Photo3,
      github: "https://github.com/Beki78/school-app",
      live: "https://kidanemihretschool.netlify.app/",
    },
    {
      title: "Calculator",
      stack: "Frontend",
      desc: "This is a simple web calculator made with vanilla CSS for styling, html vanilla js for the logic",
      photo: Photot5,
      github: "https://github.com/Beki78/js-projects",
      live: "https://beki78.github.io/js-projects/calculator%20js/",
    },
    {
      title: "Stop Watch",
      stack: "Frontend",
      desc: "This is a simple unit stopwatch made with vanilla CSS for styling, html vanilla js for the logic",
      photo: Photot7,
      github: "https://github.com/Beki78/js-projects",
      live: "https://beki78.github.io/js-projects/timer%20js/",
    },
    {
      title: "Unit Convertor",
      stack: "Frontend",
      desc: "This is a simple unit convertor made with vanilla CSS for styling, html vanilla js for the logic",
      photo: Photot6,
      github: "https://github.com/Beki78/calculator",
      live: "https://beki78.github.io/calculator/",
    },
  ];

  return (
    <div>
      <div className="pt-32 bg-slate-950 text-cyan-100 px-9 sm:px-20 md:px-14 min-h-screen font-[Poppins] ">
        
      <AnimatedPinDemo/>
      </div>
    </div>
  );
};

export default Card;

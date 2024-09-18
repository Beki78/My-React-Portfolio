import programmingfun from "../assets/programmingfundamentals.jpeg";
import meta from "../assets/meta.jpeg";
import aice from "../assets/aice.jpeg";
import hopkins from "../assets/hopkins.jpeg";
import sql from "../assets/sql.jpeg";
import founder from "../assets/founder.jpeg";
import csharp from "../assets/csharp.jpg";
import exp1 from "../public/exp1.svg";
import exp2 from "../public/exp2.svg";
import exp3 from "../public/exp3.svg";
import exp4 from "../public/exp4.svg";
import Photo1 from "../assets/Screenshot 2024-05-22 103326.png";
import Photo2 from "../assets/Screenshot 2024-06-14 232015.png";
import Photo3 from "../assets/Screenshot 2024-07-19 001251.png";
import Photo4 from "../assets/image.png";
import Photot5 from "../assets/calculator.png";
import Photot6 from "../assets/unitcal.png";
import Photot7 from "../assets/stopwatch.png";
import Photo8 from "../assets/haletascreenshot.jpg"

export const testimonials = [
  {
    image: meta,
    title: "Meta Front-End Developer",
    link: "https://www.coursera.org/account/accomplishments/specialization/YZGQ5LEZBURU",
  },
  {
    image: aice,
    title: "AI Career Essentials",
    link: "https://intranet.alxswe.com/certificates/32SBFerxmh",
  },
  {
    image: hopkins,
    title: "HTML CSS and Javascript for Web Developers",
    link: "https://www.coursera.org/account/accomplishments/verify/6JT7MW3KFRVM",
  },
  {
    image: csharp,
    title: "Introduction to C#",
    link: "https://www.sololearn.com/certificates/CC-SVMOQESC",
  },
  {
    image: founder,
    title: "Founders Academy",
    link: "https://intranet.alxswe.com/certificates/exG8rJTE2m?utm_campaign=VEN%20-2024Q1%20-%20Founders%20Academy%20C1&utm_medium=email&_hsenc=p2ANqtz-9h1Jk0lWjEzmhrbankm1f5OGCYn8M8LqJLCaMIOp_B4LiezKYjEuWhT7DL4LnEGhtj5vSYkIt24hcFixI-_tk8-ku7TQ&_hsmi=91097812&utm_content=91097812&utm_source=hs_email",
  },
  {
    image: sql,
    title: "MySQL",
    link: "https://www.udemy.com/certificate/UC-1fb517b9-85b3-4feb-a4ac-c6a2a3c3b703/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
  },
  {
    image: programmingfun,
    title: "Programming Fundamentals",
    link: "https://www.udacity.com/certificate/e/d9749eac-4a8a-11ef-9498-033812d4d913",
  },
];

export const techs = [
  {
    name: "HTML",
    icon: "https://skillicons.dev/icons?i=html",
    aos: "fade-right",
  },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css", aos: "fade-down" },
  {
    name: "JavaScript",
    icon: "https://skillicons.dev/icons?i=javascript",
    aos: "fade-down",
  },
  {
    name: "TypeScript",
    icon: "https://skillicons.dev/icons?i=typescript",
    aos: "fade-down",
  },
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
    aos: "fade-left",
  },
  {
    name: "Tailwind",
    icon: "https://skillicons.dev/icons?i=tailwind",
    aos: "fade-right",
  },
  {
    name: "Express",
    icon: "https://skillicons.dev/icons?i=express",
    aos: "fade-right",
  },
  { name: "C#", icon: "https://skillicons.dev/icons?i=cs", aos: "fade" },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
    aos: "fade-left",
  },
  {
    name: "Django",
    icon: "https://skillicons.dev/icons?i=django",
    aos: "fade-left",
  },
  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongodb",
    aos: "fade-right",
  },
  {
    name: "Git",
    icon: "https://skillicons.dev/icons?i=git",
    aos: "fade-right",
  },
  {
    name: "Figma",
    icon: "https://skillicons.dev/icons?i=figma",
    aos: "fade",
  },
  {
    name: "MySQL",
    icon: "https://skillicons.dev/icons?i=mysql",
    aos: "fade-left",
  },
  {
    name: "NodeJS",
    icon: "https://skillicons.dev/icons?i=nodejs",
    aos: "fade-left",
  },
  {
    name: "Firebase",
    icon: "https://skillicons.dev/icons?i=firebase",
    aos: "fade-right",
  },
  {
    name: "Linux",
    icon: "https://skillicons.dev/icons?i=linux",
    aos: "fade-up",
  },
  {
    name: "Appwrite",
    icon: "https://skillicons.dev/icons?i=appwrite",
    aos: "fade-up",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front-end Development",
    desc: "I build modern, responsive, and user-friendly websites using the latest technologies. Whether you need a simple landing page or a complex web application, using frameworks like tailwind, and react",
    className: "md:col-span-2",
    thumbnail: exp2,
    aos: "fade-right",
    textAOS: "fade-down",
  },
  {
    id: 2,
    title: "Back-end Development",
    desc: "I build efficient, scalable, and secure backend systems using modern technologies like Express and Django. From API development to database management with MongoDB and MySQL.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: exp1,
    aos: "fade-right",
    textAOS: "fade-down",
  },
  {
    id: 3,
    title: "Mobile Development",
    desc: "I create high-performance, user-friendly mobile apps using React Native and Expo. I deliver seamless, responsive experiences with features like real-time updates, location services, and more.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: exp4,
    aos: "fade-right",
    textAOS: "fade-down",
  },
  {
    id: 4,
    title: "Consultation and Maintenance",
    desc: "Offer consultation services to help plan and execute your projects effectively. I also provide ongoing maintenance to ensure your applications run smoothly and stay up-to-date.",
    className: "md:col-span-2",
    thumbnail: exp3,
    aos: "fade-right",
    textAOS: "fade-down",
  },
];

export const dataFront = [
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

export const dataFull = [
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
    inProgress: true,
  },
];
export const dataMob = [
  {
    title: "Haleta",
    stack: "Frontend",
    desc: "A mobile app for ambulance",
    photo: Photo8,
    github: "https://github.com/Beki78/haleta",
    live: "https://myurlshorten.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
    ],
    inProgress: false,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "https://skillicons.dev/icons?i=github",
    url: "https://github.com/Beki78/",
  },
  {
    id: 3,
    img: "https://skillicons.dev/icons?i=linkedin",
    url: "https://www.linkedin.com/in/bereketgetachew/",
  },
  {
    id: 2,
    img: "https://skillicons.dev/icons?i=instagram",
    url: "https://www.instagram.com/beki_b_gm/",
  },
];

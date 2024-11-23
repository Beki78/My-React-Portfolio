
import exp1 from "../public/exp1.svg";
import exp2 from "../public/exp2.svg";
import exp3 from "../public/exp3.svg";
import exp4 from "../public/exp4.svg";

export const testimonials = [
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426898/meta_pmysbo.jpg",
    title: "Meta Front-End Developer",
    link: "https://www.coursera.org/account/accomplishments/specialization/YZGQ5LEZBURU",
  },
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426888/aice_jmympo.jpg",
    title: "AI Career Essentials",
    link: "https://intranet.alxswe.com/certificates/32SBFerxmh",
  },
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426889/hopkins_tmlpds.jpg",
    title: "HTML CSS and Javascript for Web Developers",
    link: "https://www.coursera.org/account/accomplishments/verify/6JT7MW3KFRVM",
  },
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426889/csharp_njkh2e.jpg",
    title: "Introduction to C#",
    link: "https://www.sololearn.com/certificates/CC-SVMOQESC",
  },
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426889/founder_jcaxkq.jpg",
    title: "Founders Academy",
    link: "https://intranet.alxswe.com/certificates/exG8rJTE2m?utm_campaign=VEN%20-2024Q1%20-%20Founders%20Academy%20C1&utm_medium=email&_hsenc=p2ANqtz-9h1Jk0lWjEzmhrbankm1f5OGCYn8M8LqJLCaMIOp_B4LiezKYjEuWhT7DL4LnEGhtj5vSYkIt24hcFixI-_tk8-ku7TQ&_hsmi=91097812&utm_content=91097812&utm_source=hs_email",
  },
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426897/sql_a1vbkt.jpg",
    title: "MySQL",
    link: "https://www.udemy.com/certificate/UC-1fb517b9-85b3-4feb-a4ac-c6a2a3c3b703/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
  },
  {
    image:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426898/programmingfundamentals_c0kdxn.jpg",
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
    title: "Hulu Cloner",
    stack: "frontend",
    desc: "Frontend clone of the Hulu movie streaming website.",
    longdesc: `"Hulu Clone" is a frontend project designed to replicate the Hulu movie streaming website. Built with React and styled using Tailwind CSS, this clone showcases a responsive and dynamic user interface that mimics the functionality and design of Hulu. It features a sleek layout for browsing and streaming content, providing users with a seamless experience similar to the original platform.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426900/Screenshot_2024-05-22_103326_j1w9mq.png",
    github: "https://github.com/Beki78/hulu-app",
    live: "https://66367e96669e3d282a3158f1--reliable-choux-c0e822.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426894/Screenshot_from_2024-09-20_22-48-54_jw2abs.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_22-49-03_i3afss.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426900/Screenshot_2024-05-22_103326_j1w9mq.png",
    ],
  },
  {
    title: "Begize Landing Page",
    stack: "frontend",
    desc: "A landing page to showcase and gather data",
    longdesc: `"Begize Landing Page" is a frontend project designed to effectively showcase information and gather user data. Created with React and styled using Tailwind CSS, this landing page features a clean and engaging design, optimized for capturing user interactions and presenting content attractively. It is ideal for marketing purposes, lead generation, or as a starting point for further development.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/Screenshot_2024-06-14_232015_ajeb5x.png",
    github: "https://github.com/Beki78/Begize-Landing-page",
    live: "https://666c9f1da29f4eb9477ed74b--begizelandingpage1.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/Screenshot_2024-06-14_232015_ajeb5x.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426892/Screenshot_from_2024-09-20_22-54-46_vjtbnk.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426894/Screenshot_from_2024-09-20_22-55-01_vjflkn.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426892/Screenshot_from_2024-09-20_22-55-16_u1ldxi.png",
    ],
  },
  {
    title: "Haleta Landing Page",
    stack: "frontend",
    desc: "A landing page for a health-tech startup",
    longdesc: `"Haleta Landing Page" is a frontend project designed to effectively showcase information and gather user data. Created with NextJs and styled using Tailwind CSS, this landing page features a clean and engaging design, optimized for capturing user interactions and presenting content attractively. It is ideal for marketing purposes, lead generation, or as a starting point for further development.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731434206/ppcza4zqpkfhxj3vdese.png",
    github: "https://github.com/Beki78/Haleta-Landing-Page",
    live: "https://haletamedicalservices.vercel.app/",
    technology: [
      "https://skillicons.dev/icons?i=next",
      "https://skillicons.dev/icons?i=tailwind",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731434206/ppcza4zqpkfhxj3vdese.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731434207/ivos7xmhvrhinadm2trb.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731434203/jp4uejgdm8txkxewnc6l.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731434203/kkyaypy6jmsflotbvmli.png",
    ],
  },

  {
    title: "Calculator",
    stack: "Frontend",
    desc: "Simple web calculator",
    longdesc: `"Calculator" is a simple yet functional web application that performs basic arithmetic operations. Built using HTML, CSS, and JavaScript, this project showcases a straightforward interface with essential features for a web-based calculator. It demonstrates core frontend development skills and provides a user-friendly experience for performing calculations online.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426888/calculator_veftmc.png",
    github: "https://github.com/Beki78/js-projects",
    live: "https://beki78.github.io/js-projects/calculator%20js/",
    technology: [
      "https://skillicons.dev/icons?i=html",
      "https://skillicons.dev/icons?i=css",
      "https://skillicons.dev/icons?i=js",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426888/calculator_veftmc.png",
    ],
  },
  {
    title: "Stop Watch",
    stack: "Frontend",
    desc: "A simple stopwatch.",
    longdesc: `"Stop Watch" is a simple and intuitive web application designed to keep track of elapsed time. Built using HTML, CSS, and JavaScript, this project features a clean and minimalistic interface that allows users to start, stop, and reset the stopwatch with ease. It serves as a practical example of implementing basic timekeeping functionality and demonstrates core frontend development skills.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/stopwatch_xqpozp.png",
    github: "https://github.com/Beki78/js-projects",
    live: "https://beki78.github.io/js-projects/timer%20js/",
    technology: [
      "https://skillicons.dev/icons?i=html",
      "https://skillicons.dev/icons?i=css",
      "https://skillicons.dev/icons?i=javascript",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/stopwatch_xqpozp.png",
    ],
  },
  {
    title: "Unit Convertor",
    stack: "Frontend",
    desc: "simple unit convertor",
    longdesc: `"Unit Convertor" is a straightforward web application designed to facilitate the conversion of various units of measurement. Developed using HTML, CSS, and JavaScript, this tool offers a user-friendly interface for converting units like length, weight, and volume. It serves as a practical example of applying fundamental frontend technologies to create a functional and interactive application.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/unitcal_ygphss.png",
    github: "https://github.com/Beki78/calculator",
    live: "https://beki78.github.io/calculator/",
    technology: [
      "https://skillicons.dev/icons?i=html",
      "https://skillicons.dev/icons?i=css",
      "https://skillicons.dev/icons?i=js",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/unitcal_ygphss.png",
    ],
  },
];

export const dataFull = [
  {
    title: "Pharmacy Whole Sell",
    stack: "Frontend",
    desc: "A full inventory and ecommerce site for pharmacy",
    longdesc: `The "Pharmacy Whole Sell" project is a comprehensive web application designed for managing pharmacy inventory and facilitating e-commerce transactions. It enables pharmacies to efficiently track stock levels, manage pharmaceutical products, and handle online sales. The application features inventory management, e-commerce functionality, and user management with role-based permissions. Built with React for a dynamic UI, Tailwind CSS for modern styling, MySQL for database management, Django for backend operations, Redux for state management, and TypeScript for type safety, this project aims to provide a robust and user-friendly tool for pharmacies. It is currently in progress.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426894/Screenshot_from_2024-09-18_15-40-52_y3t4nn.png",
    github: "https://github.com/Beki78/pharma_sphere",
    live: "",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=mysql",
      "https://skillicons.dev/icons?i=django",
      "https://skillicons.dev/icons?i=redux",
      "https://skillicons.dev/icons?i=ts",
    ],
    inProgress: true,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_23-08-39_tdmdls.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426894/Screenshot_from_2024-09-18_15-40-52_y3t4nn.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_23-08-39_tdmdls.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426894/Screenshot_from_2024-09-20_23-08-50_p0hzlh.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426897/Screenshot_from_2024-09-20_23-10-09_czskpz.png",
    ],
  },
  {
    title: "ConnectMe",
    stack: "Frontend",
    desc: "A platform to link all your social media links ",
    longdesc: `The "ConnectMe" project is a user-friendly platform designed to consolidate all your social media links in one place. It allows users to create a personalized link page that aggregates their various social media profiles, making it easier to share their online presence. The application features a sleek and responsive interface, built with React for a dynamic user experience and Tailwind CSS for modern styling. The backend is powered by MongoDB for database management and Express.js for server-side functionality, with TypeScript used for type safety throughout the project. Currently in progress, "ConnectMe" aims to streamline the way users manage and present their social media profiles. `,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426890/Screenshot_from_2024-09-18_16-18-55_u1j2ma.png",
    github: "https://github.com/Beki78/connectme",
    live: "",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=mongodb",
      "https://skillicons.dev/icons?i=express",
      "https://skillicons.dev/icons?i=ts",
    ],
    inProgress: true,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426890/Screenshot_from_2024-09-18_16-18-55_u1j2ma.png",
    ],
  },
  {
    title: "Music List",
    stack: "Full-Stack",
    desc: "A music list that allows CRUD operation",
    longdesc: `The "Music List" project is a comprehensive music management application that enables users to perform CRUD (Create, Read, Update, Delete) operations on their music library. Users can add, view, edit, and delete their music entries, making it a versatile tool for managing personal music collections. The frontend is developed using React for a dynamic and interactive user interface, complemented by Tailwind CSS for sleek and responsive design. The application integrates with MongoDB for efficient data storage and Express.js for server-side operations, with Redux and TypeScript enhancing state management and type safety. .`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_23-17-28_r6d5vd.png",
    github: "https://github.com/Beki78/AddisSoftware",
    live: "https://musicplayer-addis.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=mongo",
      "https://skillicons.dev/icons?i=express",
      "https://skillicons.dev/icons?i=redux",
      "https://skillicons.dev/icons?i=ts",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_23-17-28_r6d5vd.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426896/Screenshot_from_2024-09-20_23-18-05_zdqkvg.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_23-18-16_dbgi2r.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426895/Screenshot_from_2024-09-20_23-17-28_r6d5vd.png",
    ],
  },
  {
    title: "Music List",
    stack: "Full-Stack",
    desc: "A music list that allows CRUD operation",
    longdesc: `The "Music List" project is a comprehensive music management application that enables users to perform CRUD (Create, Read, Update, Delete) operations on their music library. Users can add, view, edit, and delete their music entries, making it a versatile tool for managing personal music collections. The frontend is developed using React for a dynamic and interactive user interface, complemented by Tailwind CSS for sleek and responsive design. The application integrates with MongoDB for efficient data storage and Express.js for server-side operations, with Redux and TypeScript enhancing state management and type safety. .`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731438745/velycurl5gqynmfmhi0u.png",
    github: "https://github.com/Beki78/test-project",
    live: "https://addissoftware-music-studio.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=mongo",
      "https://skillicons.dev/icons?i=express",
      "https://skillicons.dev/icons?i=redux",
      "https://skillicons.dev/icons?i=ts",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731438745/velycurl5gqynmfmhi0u.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731438745/xs8lnzaehgiiaxb2ahyf.png",
      
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1731438745/d3p2yxwkez7gjtaixkwl.png",
      
      
    ],
  },
  {
    title: "KMS School Web",
    stack: "Frontend",
    desc: "A school School to get a administration easily and show case their school",
    longdesc: `The "KMS School Web" project is a comprehensive web application designed for school administration and showcasing. It provides an intuitive platform for managing school operations and presenting information about the institution. The frontend is developed with React, offering a dynamic and interactive user experience, while Tailwind CSS ensures a responsive and modern design. The application leverages MongoDB for robust data management and Express.js for backend functionality..`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/Screenshot_2024-07-19_001251_solhrp.png",
    github: "https://github.com/Beki78/school-app",
    live: "https://kidanemihretschool.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=mongodb",
      "https://skillicons.dev/icons?i=express",
    ],
    inProgress: true,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426896/Screenshot_from_2024-09-20_23-27-34_wdapgm.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426898/Screenshot_from_2024-09-20_23-28-12_it7fbd.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426898/Screenshot_from_2024-09-20_23-28-12_it7fbd.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426897/Screenshot_from_2024-09-20_23-28-25_ehhy8j.png",
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426899/Screenshot_2024-07-19_001251_solhrp.png",
    ],
  },

  {
    title: "URL Shortener",
    stack: "Full Stack",
    desc: "Convert long URLs into shorter links",
    longdesc: `The "URL Shortener" project is a full-stack application that transforms long URLs into concise, manageable links. Built with React on the frontend, it provides a user-friendly interface for URL shortening, while Tailwind CSS ensures a sleek and responsive design. The backend is powered by Express.js and MongoDB, handling URL processing and data storage efficiently.`,
    photo:
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426897/image_qklzkr.png",
    github: "https://github.com/Beki78/short-url",
    live: "https://myurlshorten.netlify.app/",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=mongodb",
      "https://skillicons.dev/icons?i=express",
    ],
    inProgress: false,
    images: [
      "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426897/image_qklzkr.png",
    ],
  },
];
export const dataMob = [
  {
    title: "Haleta",
    stack: "Frontend",
    desc: "A mobile app for ambulance",
    longdesc: `"Haleta" is a frontend mobile application designed to streamline ambulance services. Built using React and Tailwind CSS, this app provides a user-friendly interface for accessing and managing ambulance services efficiently.`,
    photo: "https://res.cloudinary.com/dhkwleefa/image/upload/v1727426889/haletascreenshot_smozvk.jpg",
    github: "https://github.com/Beki78/haleta",
    live: "https://drive.google.com/file/d/1-1cBvg4iMm57n1SOyfQ_1nW53bjOBsMj/view?usp=sharing",
    technology: [
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=tailwind",
    ],
    inProgress: false,
    images: ["https://res.cloudinary.com/dhkwleefa/image/upload/v1727426889/haletascreenshot_smozvk.jpg"],
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


export const skillIcons = [
  {
    href: "https://www.linkedin.com/in/bereketgetachew/",
    img: "https://skillicons.dev/icons?i=linkedin",
    alt: "LinkedIn",
    target: "_blank",
    aos: "fade-right",
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

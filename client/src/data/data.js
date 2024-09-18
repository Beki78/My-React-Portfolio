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
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
  { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
  { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  { name: "Appwrite", icon: "https://skillicons.dev/icons?i=appwrite" },
];


export const workExperience = [
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
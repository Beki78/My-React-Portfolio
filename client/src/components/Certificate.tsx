import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import programmingfun from "../assets/programmingfundamentals.jpeg";
import meta from "../assets/meta.jpeg";
import aice from "../assets/aice.jpeg";
import hopkins from "../assets/hopkins.jpeg";
import sql from "../assets/sql.jpeg";
import founder from "../assets/founder.jpeg";
import csharp from "../assets/csharp.jpg";

const Certificate = () => {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
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
export default Certificate;

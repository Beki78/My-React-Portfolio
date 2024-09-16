
import { Link } from "react-router-dom";
import TooltipIcon from "./Icons";


const Skills = () => {
  const technical = [
    {
      language: "React",
      Percentage: 82,
    },
    {
      language: "Tailwind CSS",
      Percentage: 85,
    },
    {
      language: "MongoDB",
      Percentage: 81,
    },
    {
      language: "Express Js",
      Percentage: 82,
    },
    {
      language: "Python",
      Percentage: 75,
    },
    {
      language: "C#",
      Percentage: 61,
    },
    {
      language: "Typescript",
      Percentage: 72,
    },
    {
      language: "Git",
      Percentage: 73,
    },
    {
      language: "Shell",
      Percentage: 67,
    },
    {
      language: "React Native",
      Percentage: 74,
    },
  ];
  const soft = [
    {
      softskill: "Collaborative Problem Solving",
      Percentage: 85,
    },
    {
      softskill: "Project Management",
      Percentage: 82,
    },
    {
      softskill: "Research Skills",
      Percentage: 84,
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-white py-10 mt-32">
          My <span className="text-purple-500">Certificates</span>
        </h1>
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline "
          to="https://www.coursera.org/account/accomplishments/specialization/YZGQ5LEZBURU"
        >
          Meta Front-End Developer
        </Link>
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://intranet.alxswe.com/certificates/32SBFerxmh"
        >
          AI Career Essentials
          <br />
        </Link>
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://www.coursera.org/account/accomplishments/verify/6JT7MW3KFRVM"
        >
          HTML CSS and Javascript for Web Developers
        </Link>
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://www.sololearn.com/certificates/CC-SVMOQESC"
        >
          Introduction to C#
        </Link>
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://intranet.alxswe.com/certificates/exG8rJTE2m?utm_campaign=VEN%20-2024Q1%20-%20Founders%20Academy%20C1&utm_medium=email&_hsenc=p2ANqtz-9h1Jk0lWjEzmhrbankm1f5OGCYn8M8LqJLCaMIOp_B4LiezKYjEuWhT7DL4LnEGhtj5vSYkIt24hcFixI-_tk8-ku7TQ&_hsmi=91097812&utm_content=91097812&utm_source=hs_email"
        >
          Founders Academy
        </Link>
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://www.udemy.com/certificate/UC-1fb517b9-85b3-4feb-a4ac-c6a2a3c3b703/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
        >
          MySQL
        </Link>{" "}
        <br />
        <Link
          target="_blank"
          className="text-sm text-blue-600 underline"
          to="https://www.udacity.com/certificate/e/d9749eac-4a8a-11ef-9498-033812d4d913"
        >
          Programming Fandamentals
        </Link>
      </div>
      <hr className="border-[1/4px] my-7  border-cyan-800  hover:text-cyan-500" />

      <div>
        <h1 className="text-4xl pt-12  font-semibold text-white">
          My <span className="text-purple-500">Skills</span>
        </h1>

        <TooltipIcon />
      </div>
    </div>
  );
};

export default Skills;

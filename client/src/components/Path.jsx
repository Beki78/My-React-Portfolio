import { Timeline } from "./ui/timeline";
import proj1 from "../assets/Screenshot from 2024-09-15 14-17-15.png";
import proj2 from "../assets/Screenshot from 2024-09-15 15-11-56.png";

const Path = () => {
  const data = [
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            I began my programming journey by building small, foundational
            projects using HTML and CSS. This helped me grasp the basics of web
            development and kickstarted my passion for coding.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={proj1}
              alt="startup template"
              width={500}
              height={500}
              data-aos="fade-up"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={proj2}
              alt="startup template"
              width={500}
              height={500}
              data-aos="fade-up"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            I ventured into game development for a few months, exploring game
            mechanics and design. While I enjoyed it, I soon realized my focus
            was better suited to web and app development, which I find more
            engaging and impactful.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img-b.udemycdn.com/course/750x422/2514486_c4e0.jpg"
              alt="hero template"
              width={500}
              height={500}
              data-aos="fade-up"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://cdn.prod.website-files.com/618d852d383de946ce0e3fa5/621675c05eb08a490b32f9f1_image%2B(1)%20(1).webp"
              alt="feature template"
              width={500}
              height={500}
              data-aos="fade-up"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            I expanded my knowledge by diving into modern development tools like
            React, Tailwind CSS, JavaScript, TypeScript, Python, and Django.
            These tools have allowed me to build more complex and dynamic
            projects. Toward the end of 2024, I also started working on LeetCode
            to sharpen my problem-solving skills, though I haven&apos;t focused
            on it heavily yet.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.biztechcs.com/wp-content/uploads/2021/07/12-Best-Programming-Languages-for-Web-App-Development-jpg-webp.webp"
              alt="hero template"
              width={500}
              height={500}
              data-aos="fade-up"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://miro.medium.com/v2/resize:fit:640/1*8NjDXiICAKMgwEX3UEx85w.png"
              alt="feature template"
              width={500}
              height={500}
              data-aos="fade-up"  
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
export default Path;

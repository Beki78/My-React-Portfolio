import TooltipIcon from "./Icons";
import Certificate from "./Certificate";
import Education from "./Education";

const Skills = () => {
  return (
    <div>
      <div>
        <h1
          data-aos="fade-up "
          className="text-4xl md:text-5xl font-semibold text-white  mt-72 text-center"
        >
          Educational <span className="text-purple-500">Background</span>
        </h1>
      <Education />
      </div>
      <div>
        <h1
          data-aos="fade-up "
          className="text-4xl md:text-5xl font-semibold text-white  mt-72 text-center"
        >
          My <span className="text-purple-500">Certificates</span>
        </h1>
        <Certificate />
      </div>

      <div>
        <h1
          data-aos="fade-up "
          className="text-4xl md:text-5xl font-semibold text-white  mt-40 text-center"
        >
          Top <span className="text-purple-500">Skills</span>
        </h1>

        <TooltipIcon />
      </div>
    </div>
  );
};

export default Skills;

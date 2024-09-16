import TooltipIcon from "./Icons";
import Certificate from "./Certificate";

const Skills = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-semibold text-white  mt-72 text-center">
          My <span className="text-purple-500">Certificates</span>
        </h1>
        <Certificate />
      </div>

      <div>
        <h1 className="text-5xl font-semibold text-white  mt-40 text-center">
          Top <span className="text-purple-500">Skills</span>
        </h1>

        <TooltipIcon />
      </div>
    </div>
  );
};

export default Skills;

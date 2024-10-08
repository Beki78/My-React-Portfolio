import Skills from "./Skills";
import Path from "./Path";

const Personal = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 text-cyan-100  px-10 sm:px-24 md:px-28 lg:px-40 xl:px-52 font-[Poppins]  text-sm">
        <div>
          <Path />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Personal;

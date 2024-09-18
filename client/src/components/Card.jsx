
import {  TabsDemo } from "./ProductCard";

const Card = () => {

  return (
    <div>
      <div className="pt-32 bg-slate-950 text-cyan-100 px-9 sm:px-20 md:px-14 min-h-screen font-[Poppins] ">
        {/* <AnimatedPinDemo/> */}
        <h1 className="text-4xl md:text-5xl font-semibold text-white  mt-18 text-center">
          Recent <span className="text-purple-500">Projects</span>
        </h1> 
        <TabsDemo />
      </div>
    </div>
  );
};

export default Card;

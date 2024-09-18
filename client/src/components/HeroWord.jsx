import { FlipWords } from "../components/ui/flip-words";

const HeroWord = () => {
  const words = ["better", "flexible", "beautiful", "modern"];
  return (
    <div>
      <div className="h-[40rem] flex flex-col justify-center items-center px-4 ">
        <div className="text-2xl md:text-4xl mx-auto text-neutral-100 font-semibold md:mt-40">
          I build
          <FlipWords className="text-cyan-100 font-bold" words={words} /> <br />
          websites with the latest technologies
         
        </div>
      </div>
    </div>
  );
};

export default HeroWord;

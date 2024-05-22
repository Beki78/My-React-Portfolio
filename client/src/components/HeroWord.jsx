import React from 'react'
import { FlipWords } from "../components/ui/flip-words";

const HeroWord = () => {
     const words = ["better", "flexible", "beautiful", "modern"];
  return (
    <div>
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-2xl md:text-4xl  mx-auto text-cyan-600 dark:text-neutral-400 font-semibold ">
          {/* <h1 className="font-light text-cyan-300 text-3xl md:text-6xl py-9 text-center">
            <span>I am</span> <br /><span>Bereket Getachew 💻</span>
          </h1> */}
          I build
          <FlipWords className="text-cyan-100 font-bold" words={words} /> <br />
          websites with latest technologies
        </div>
      </div>
    </div>
  );
}

export default HeroWord

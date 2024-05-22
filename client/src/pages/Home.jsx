import React from "react";
import Navbar from "../components/Navbar";
import HeroWord from "../components/HeroWord";
import { BackgroundBeams } from "../components/ui/background-beams";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-slate-950 relative  antialiased">
        <HeroWord />
        <BackgroundBeams />
      </div>
      <About/>
    </div>
  );
};

export default Home;

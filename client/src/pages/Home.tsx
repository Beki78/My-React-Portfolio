import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar.jsx";
import HeroWord from "../components/HeroWord.jsx";
import { BackgroundBeams } from "../components/ui/background-beams.tsx";
import About from "../components/About.tsx";
import Card from "../components/Card.jsx";
import { PuffLoader } from "react-spinners";
import Personal from "../components/Personal.jsx";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";
import CVICON from "../assets/cv.png"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1cgMRwjRRTinmY-JRuPYYI1p6y9I14P6S/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      {loading ? (
        <div
          className={`flex justify-center items-center min-h-screen bg-slate-950 transition-opacity duration-500 ${
            fadeOut ? "opacity-90" : "opacity-100"
          }`}
        >
          <PuffLoader size={100} color={"#A855F7"} />
        </div>
      ) : (
        <>
          <Navbar />

          <Element name="home">
            <div className="min-h-screen w-full bg-slate-950 relative antialiased">
              <HeroWord />
              <BackgroundBeams />
            </div>
          </Element>

          <Element name="about">
            <About />
          </Element>

          <Element>
            <Personal />
          </Element>

          <Element name="services">
            <Services />
          </Element>

          <Element name="projects">
            <Card />
          </Element>
          <Element name="footer">
            <Footer />
          </Element>

          {/* Fixed Button */}
          <button
            onClick={handleButtonClick}
            className="flex lg:hidden fixed bottom-1 right-1 text-white p-3 transition duration-300"
            style={{ zIndex: 1000 }}
          >
            <img src={CVICON} alt="CV Icon" className="w-14" />
          </button>
        </>
      )}
    </div>
  );
};

export default Home;

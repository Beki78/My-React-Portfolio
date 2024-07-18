import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import Navbar from "../components/Navbar";
import HeroWord from "../components/HeroWord";
import { BackgroundBeams } from "../components/ui/background-beams";
import About from "../components/About";
import AboutPage from "../pages/AboutPage";
import Services from "../pages/ServicesPage";
import Contact from "../pages/ContactPage";
import Project from "../pages/ProjectsPage";
import { PuffLoader
 } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Set a timer to start fade-out effect after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      // Set another timer to hide the spinner after the fade-out duration
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // match this duration with your CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  return (
    <div>
      {loading ? (
        <div
          className={`flex justify-center items-center min-h-screen bg-slate-950 transition-opacity duration-500 ${
            fadeOut ? "opacity-90" : "opacity-100"
          }`}
        >
          <PuffLoader
 size={100} color={"#22d3ee"} />
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

          <Element name="">
            <About />
          </Element>

          <Element name="about">
            <AboutPage />
          </Element>

          <Element name="services">
            <Services />
          </Element>

          <Element name="projects">
            <Project />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>
        </>
      )}
    </div>
  );
};

export default Home;

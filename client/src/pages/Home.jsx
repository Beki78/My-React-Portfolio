import React from "react";
import { Link, Element } from "react-scroll";
import Navbar from "../components/Navbar";
import HeroWord from "../components/HeroWord";
import { BackgroundBeams } from "../components/ui/background-beams";
import About from "../components/About";
import AboutPage from "../pages/AboutPage";
import Services from "../pages/ServicesPage";
import Contact from "../pages/ContactPage";
import Project from "../pages/ProjectsPage";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;

import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Hamburger from "../../Components/Hamburger/Hamburger";
import Projects from "../../Components/Projects/Projects";
import Hero from "../../Components/Hero/Hero";
import ContactMe from "../../Components/ContactMe/ContactMe";

const Home = () => {
  return (
    <div>
      <Hamburger></Hamburger>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;

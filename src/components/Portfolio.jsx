import React from "react";
import Header from "./utils/header/Header";
// import About from "./home/about/About";
import Services from "./home/Services";
import Projects from "./home/projects/Projects";
import Contact from "./home/Contact";
import About from "./home/About";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;

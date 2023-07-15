import React from "react";
import Header from "./utils/header/Header";
// import About from "./home/about/About";
import Services from "./home/Services";
import Projects from "./home/projects/Projects";
import Contact from "./home/Contact";
import About from "./home/About";
import { Outlet, Route, Routes } from "react-router";
import Popup from "./utils/Popup";

const Portfolio = () => {
  return (
    <main>
      <Header />
      <Popup />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;

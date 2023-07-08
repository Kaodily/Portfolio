import { useState } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
// import { Route, Routes } from "react-router";
// import About from "./components/home/About";
import { Route, Routes } from "react-router";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

function App() {

  return (
    <>
     <Portfolio />                 
    </>
  );
}

export default App;

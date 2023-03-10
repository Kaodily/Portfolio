import React from 'react';
import Header from "./utils/header/Header";
import Home from "./home/Index";
import Footer from './utils/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Works from './work/works/Works';
import Contact from './contact/contacts/Contact';
import classes from "./Index.module.css"


const Index = () => {
  return (
    <div className={classes.container}>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/works' element={  <Works />} />
      <Route path='/contact' element={ <Contact />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default Index;
import React from 'react';
import About from './about/About';
import Hero from './hero/Hero';
import Work from './work/Work';
import classes from "./Index.module.css"

const Index = () => {
  return (
    <div className={classes.container}>
        <Hero />
        <About />
        <Work />
    </div>
  )
}

export default Index;
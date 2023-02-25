import React from 'react';
import heroImage from "../../../assets/hero.jpg";
import classes from "../hero/Hero.module.css";
import {IoIosArrowDown} from "react-icons/io"

const Hero = () => {

  return (
    <div className={classes.container}>
      <img className={classes.hero_image} src={heroImage} alt="hero" />
        <h2 className={classes.hero_intro}>Hey!, I'm Chika Isizoh and I love building beautiful websites</h2>
        <button className={classes.hero_button}><IoIosArrowDown  fontSize="1.3rem" /> About me</button>
    </div>
  )
}

export default Hero
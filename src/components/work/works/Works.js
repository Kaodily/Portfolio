import React from 'react';
import Projects from './Projects';
import audiophile from "../../../assets/audiophile.png";
import country from "../../../assets/country.png";
import starfinder from "../../../assets/starfinder.png";
import classes from "./Works.module.css"


const Works = () => {
  return (
    <div className={classes.container}>
      <Projects image={audiophile}  descr={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc"} />
      <Projects image={country} descr={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc"} />
      <Projects image={starfinder} descr={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc"} />
    </div>
  )
}

export default Works
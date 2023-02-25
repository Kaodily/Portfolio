import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../../../assets/profile.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
   <div className={classes.profile_container}>
   <img className={classes.profile_image} src ={profile} alt="profile" /> 
   </div>
     <h2>About Me</h2>
     <p className={classes.about_me}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc</p>
   <Link to={"/works"}>
   <button className={classes.button}>Works</button>
   </Link>
    </div>
  )
}

export default About
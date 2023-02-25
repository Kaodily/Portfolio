import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Work.module.css"

const Work = () => {
  return (
    <div className={classes.container}>
    <h1 className={classes.heading}>Interested in working together</h1>
    <Link to={"/contact"}>
    <button className={classes.button}>Contact Me</button>
    </Link>
    </div>
  )
}

export default Work

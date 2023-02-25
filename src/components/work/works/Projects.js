import React from 'react';
import classes from "./Works.module.css"

const Projects = ({image,descr}) => {
  return (
    <div className={classes.project_container}>
    <div>
    <img className={classes.projects_image} src={image} alt="project" />
    </div>
    <p>{descr}</p>
    </div>
  )
}

export default Projects
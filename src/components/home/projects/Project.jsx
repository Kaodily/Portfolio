import React from "react";
import { ProjectWrapper } from "../../../styles/componentsStyles/project.styled";
import Button from "../../utils/Button";

const Project = ({ image, description, live, name }) => {
  return (
    <ProjectWrapper>
      <img src={image} alt="project" />
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={live} target="_blank" rel="noferrer">See Project</a>
    </ProjectWrapper>
  );
};

export default Project;

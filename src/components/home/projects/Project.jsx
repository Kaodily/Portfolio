import React from "react";
import { ProjectWrapper } from "../../../styles/componentsStyles/project.styled";

const Project = ({ image, description, live, github, name }) => {
  return (
    <ProjectWrapper>
      <a href={live} target="_blank" rel="noreferrer">
        <img src={image} alt="project" />
      </a>
      <h3>{name}</h3>
      <p>{description}</p>
    </ProjectWrapper>
  );
};

export default Project;

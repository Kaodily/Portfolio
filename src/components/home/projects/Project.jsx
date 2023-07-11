import React from "react";
import { ProjectWrapper } from "../../../styles/componentsStyles/project.styled";
import Button from "../../utils/Button";

const Project = ({ image, description, live, github, name }) => {
  return (
    <ProjectWrapper>
      <a href={live} target="_blank" rel="noreferrer">
        <img src={image} alt="project" />
      </a>
      <h4>{name}</h4>
      <p>{description}</p>
      <Button content={"View Project"} />
    </ProjectWrapper>
  );
};

export default Project;

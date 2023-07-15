import React from "react";
import Project from "./Project";
import audiophile from "../../../assets/audiophile.png";
import country from "../../../assets/country.png";
import starfinder from "../../../assets/starfinder.png";
import rock from "../../../assets/rock-paper-scissors.png";
import portfolio from "../../../assets/portfolio.png";
import task from "../../../assets/task-manager.png";
import { ProjectsWrapper } from "../../../styles/componentsStyles/project.styled";
const Projects = () => {
  return (
    <ProjectsWrapper id="works">
      <div className="heading">
        <h3>My Work</h3>
        <p>
          I've been busy for the past few years, working on some of the best projects.
          Here's a Glimpse!
        </p>
      </div>
      <div className="grid_container">
        <Project
          image={audiophile}
          name={"An E-commerce Website"}
          live={"https://audiophile-kaodily.netlify.app/"}
          description={
            "An e-commerce app, comes with a built-in cart and checkout."
          }
        />
        <Project
          image={starfinder}
          name={"A VIP Notification Website"}
          live={"https://starfinder.dev/"}
          description={
            "An app that offers a VIP notification feature that alerts you when a VIP visits your app. "
          }
        />
        <Project
          image={task}
          name={"A Task Manager Website"}
          live={"https://task-manager-kaodily.netlify.app/"}
          description={
            "A Task manager Website that helps you manage your tasks. "
          }
        />
        <Project
          image={country}
          name={"Find Country Website"}
          live={"https://rest-api-kaodily.netlify.app/"}
          description={
            "This app provides details about all the countries in the world, their population and flags."
          }
        />
        <Project
          image={rock}
          name={"Rock Paper Scissors"}
          live={"https://rock-paper-scissors-kaodily.netlify.app"}
          description={
            "A rock paper and scissors game website with an extra spice to it."
          }
        />
        <Project
          image={portfolio}
          name={"Portfolio Website"}
          live={"https://kaodili.netlify.app"}
          description={
            "A portfolio website to showcase the work and services of a frontend developer"
          }
        />
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;

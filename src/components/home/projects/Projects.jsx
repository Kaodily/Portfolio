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
          I've been busy past few years, working on some of the best projects.
          Here's a Glimpse!
        </p>
      </div>
    <div className="grid_container">
    <Project
        image={audiophile}
        name={"An Ecommerce Website"}
        live={"https://audiophile-kaodily.netlify.app/"}
        github={"https://github.com/Kaodily/Audiophile"}
        description={
          "An e-commerce app comes with a built-in cart and checkout"
        }
      />
      <Project
        image={starfinder}
        name={"A VIP Notification Website"}
        live={"https://starfinder.dev/"}
        github={"https://github.com/workshopapps/vipcustomer.web"}
        description={
          "An app that offers a VIP notification feature that alerts you   "
        }
      />
      <Project
        image={task}
        name={"A Task Manager Website"}
        live={"https://starfinder.dev/"}
        github={"https://github.com/workshopapps/vipcustomer.web"}
        description={
          "An app that offers a VIP notification feature that alerts you. "
        }
      />
      <Project
        image={country}
        name={"WHERE IN THE WORLD"}
        live={"https://rest-api-kaodily.netlify.app/"}
        github={"https://github.com/Kaodily/Rest-Api"}
        description={
          "This app provides details about all the countries in the world,"
        }
      />
      <Project
        image={rock}
        name={"Rock Paper Scissors"}
        live={"https://rock-paper-scissors-kaodily.netlify.app"}
        github={"https://github.com/Kaodily/Rock-paper-scissors"}
        description={
          "This app provides details about all the countries in the world"
        }
      />
      <Project
        image={portfolio}
        name={"Portfolio"}
        live={"https://kaodili.netlify.app"}
        github={"https://github.com/Kaodily/Rock-paper-scissors"}
        description={
          "This app provides details about all the countries in the world"
        }
      />
    </div>
    </ProjectsWrapper>
  );
};

export default Projects;

import React from "react";
import hero from "../../assets/hero.jpg";
import { AboutWrapper } from "../../styles/componentsStyles/about.styled";
import Button from "../utils/Button";
const About = () => {
  return (
    <AboutWrapper id="about">
      <div className="hero_about">
        <p> Hello there 👋 </p>
        <h1>
          My name is Chika, and I’m a Web Designer with a Strong Sense of Humor
          and Creative Expertise!
        </h1>
        <p className="about">
          I am a frontend developer with a passion for crafting visually
          stunning and interactive web experiences. With a strong foundation in
          HTML, CSS, JavaScript, and React. I am eager to explore and
          adopt new tools, frameworks, and libraries to enhance my development
          process and improve user experiences.
        </p>
        <Button content={"See Works"} link={"#works"} />
      </div>
      <div className="square_background">
        <div className="hero_img">
          <img src={hero} alt="hero image" loading="lazy" />
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;

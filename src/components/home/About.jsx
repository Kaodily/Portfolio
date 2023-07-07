import React from "react";
import hero from "../../assets/hero.jpg";
import { AboutWrapper } from "../../styles/componentsStyles/about.styled";
import Button from "../utils/Button";
const About = () => {
  return (
    <AboutWrapper>
      <div className="hero_about">
        <p> Hello there 👋 </p>
        <h1>
          My name is Chika, and I’m a Web Designer with a Strong Sense of Humor
          and Creative Expertise!
        </h1>
        <p className="about">
          I'm a passionate web designer with years of experience in creating
          clean, user-friendly designs. "I'm a software developer who likes to
          debug code and solve problems. In fact, my brain is like a
          never-ending loop—I can't help but think in if-else statements even
          when I'm grocery shopping. So if you see me staring at the cereal
          aisle, don't worry, I'm just trying to optimize my breakfast routine!"
        </p>
        <Button content={"See Works"} />
      </div>
      <div className="square_background">
        <div className="hero_img">
          <img src={hero} alt="hero image" />
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;

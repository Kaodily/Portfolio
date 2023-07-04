import React from "react";
import { SkillWrapper } from "./skills.styled";

const Skill = ({ skill, name }) => {
  return (
    <SkillWrapper>
      <div className="container">
        <h4>{skill}</h4>
        <ul>
          {name.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </SkillWrapper>
  );
};

export default Skill;

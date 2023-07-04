import React from "react";
import { SkillsWrapper } from "./skills.styled";
import Button from "../../utils/button/Button";
// import { datas } from "../../../datas";
// import Skill from "./Skill";

const Skills = () => {
  
  return (
    <SkillsWrapper>
      <div className="skill_container">
        <div>
          <h3>My Skills</h3>
          <p>
            Check Out All Services below then Click the Get Started Button to
            Proceed.
          </p>
        </div>
        <Button content={"Get Started"} />
      </div>
   {/* <div>
    {datas.map((item,index) => {
        return (
            <Skill key={index} skill={item.skill} name={item.name} />
        )
    })}
   </div> */}
    </SkillsWrapper>
  );
};

export default Skills;

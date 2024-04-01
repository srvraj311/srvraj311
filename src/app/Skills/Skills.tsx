import React from "react";
import "./Skills.css";
import { skillArr } from "./SkillsArr";

export default function Skills() {
  return (
    <div className="card">
      <div className="card-small skills">
        <span className="title">Skills</span>
      </div>
      <div className="skills_holder">
        {skillArr.map((skill) => {
          return (
            <span className="skill">
              <img className="icon" alt={skill.name} src={skill.iconUrl}></img>
              &nbsp;{skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

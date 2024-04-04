import React from "react";
import "./Skills.css";
import skillArr from "./SkillsArr";

export default function Skills() {
  return (
    <div className="card" id="skills">
      <div className="card-small skills">
        <span className="title">My Skills</span>
      </div>
      <div className="skills_holder">
        {skillArr.Frontend.map((skill: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <span className="skill" key={skill.name}>
                <img
                  className="icon"
                  alt={skill.name}
                  src={skill.iconUrl}
                ></img>
                &nbsp;{skill.name}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  {
    /*       
    <div className="card" id="skills">
      <div className="card-small skills">
        <span className="title">My Skills</span>
      </div>
      <div className="skill category">Frontend</div>
      <div className="skills_holder">
        {skillArr.Frontend.map((skill: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <span className="skill" key={skill.name}>
                <img
                  className="icon"
                  alt={skill.name}
                  src={skill.iconUrl}
                ></img>
                &nbsp;{skill.name}
              </span>
            </React.Fragment>
          );
        })}
      </div>

      <div className="skill category">Backend</div>
      <div className="skills_holder">
        {skillArr.Backend.map((skill: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <span className="skill" key={skill.name}>
                <img
                  className="icon"
                  alt={skill.name}
                  src={skill.iconUrl}
                ></img>
                &nbsp;{skill.name}
              </span>
            </React.Fragment>
          );
        })}
      </div>

      <div className="skill category">Cloud and Devops</div>
      <div className="skills_holder">
        {skillArr["Cloud and Devops"].map((skill: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <span className="skill" key={skill.name}>
                <img
                  className="icon"
                  alt={skill.name}
                  src={skill.iconUrl}
                ></img>
                &nbsp;{skill.name}
              </span>
            </React.Fragment>
          );
        })}
      </div>

      <div className="skill category">Design and Tools</div>
      <div className="skills_holder">
        {skillArr["Design and Tools"].map((skill: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <span className="skill" key={skill.name}>
                <img
                  className="icon"
                  alt={skill.name}
                  src={skill.iconUrl}
                ></img>
                &nbsp;{skill.name}
              </span>
            </React.Fragment>
          );
        })}
      </div>

      <div className="skill category">Others</div>
      <div className="skills_holder">
        {skillArr["Others"].map((skill: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <span className="skill" key={skill.name}>
                <img
                  className="icon"
                  alt={skill.name}
                  src={skill.iconUrl}
                ></img>
                &nbsp;{skill.name}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  ); */
  }
}

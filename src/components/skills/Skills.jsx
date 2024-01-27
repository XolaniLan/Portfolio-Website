import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import DevOps_Tools from "./DevOps_Tools";
import Soft_Skills from "./Soft_Skills";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <DevOps_Tools />
        <Soft_Skills />
      </div>
    </section>
  );
};

export default Skills;

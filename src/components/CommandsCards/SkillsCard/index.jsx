import React from "react";
import {
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiRedux,
    SiGit,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiReact,
    SiDocker
  } from "react-icons/si";

export default function SkillCard() {
  return (
    <>
      <div className="commands--card">
        <span>$ </span> cd skills
      </div>
      <div className="commands--skills">
        <div className="commands--skills-list">
          <div className="commands--skills-list-item">
            <SiReact /> React
          </div>
          <div className="commands--skills-list-item">
            <SiNodedotjs /> Node
          </div>
          <div className="commands--skills-list-item">
            <SiJavascript /> JavaScript
          </div>
          <div className="commands--skills-list-item">
            <SiTypescript /> TypeScript
          </div>
          <div className="commands--skills-list-item">
            <SiRedux /> Redux
          </div>
          <div className="commands--skills-list-item">
            <SiExpress /> Express
          </div>
          <div className="commands--skills-list-item">
            <SiMongodb /> Mongo
          </div>
          <div className="commands--skills-list-item">
            <SiMysql /> MySQL
          </div>
          <div className="commands--skills-list-item">
            <SiGit /> Git
          </div>
          <div className="commands--skills-list-item">
            <SiDocker /> Docker
          </div>
        </div>
      </div>
    </>
  );
}

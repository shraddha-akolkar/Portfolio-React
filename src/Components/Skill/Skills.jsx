import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiGithub } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="skills-subtitle">
        A blend of technical expertise and soft skills that help me build
        efficient solutions and collaborate effectively.
      </p>

      <div className="skills-cards">
        {/* Technical Skills Card */}
        <div className="skills-card">
          <h3 className="card-title">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <FaHtml5 className="skill-icon html" />
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <FaCss3Alt className="skill-icon css" />
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <FaJs className="skill-icon js" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <FaReact className="skill-icon react" />
              <p>React</p>
            </div>
            <div className="skill-card">
              <FaNodeJs className="skill-icon node" />
              <p>Node.js</p>
            </div>
            <div className="skill-card">
              <SiMongodb className="skill-icon mongo" />
              <p>MongoDB</p>
            </div>
            <div className="skill-card">
              <FaDatabase className="skill-icon sql" />
              <p>SQL</p>
            </div>
            <div className="skill-card">
              <SiTailwindcss className="skill-icon tailwind" />
              <p>Tailwind CSS</p>
            </div>
            <div className="skill-card">
              <SiGithub className="skill-icon git" />
              <p>GitHub</p>
            </div>
          </div>
        </div>

        {/* Soft Skills Card */}
        <div className="skills-card">
          <h3 className="card-title">Soft Skills</h3>
          <div className="soft-skills">
            <div className="soft-card">
              <FaUsers className="soft-icon" />
              <p>Team Collaboration</p>
            </div>
            <div className="soft-card">
              <FaLightbulb className="soft-icon" />
              <p>Problem Solving</p>
            </div>
            <div className="soft-card">
              <FaComments className="soft-icon" />
              <p>Communication</p>
            </div>
            <div className="soft-card">
              <FaClock className="soft-icon" />
              <p>Time Management</p>
            </div>
            
            <div className="soft-card">
              <FaHandsHelping className="soft-icon" />
              <p>Adaptability</p>
            </div>
            <div className="soft-card">
              <FaLightbulb className="soft-icon" />
              <p>Creativity</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Shraddha Akolkar</h1>
        <h2 className="hero-role">Full Stack Developer</h2>

        <div className="hero-icons">
          <a href="https://github.com/shraddha-akolkar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shraddha-akolkar-0154a2272/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://drive.google.com/file/d/1aicDhTEzXry6bvQYIxeBXgT00kC39F5W/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
            <FaFilePdf />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

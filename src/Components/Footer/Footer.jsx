import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h3>© {new Date().getFullYear()}  Shraddha Akolkar. All rights reserved</h3>
          <p>Built with ❤️❤️❤️</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side - Socials */}
        <div className="footer-socials">
          <a href="https://github.com/shraddha-akolkar" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shraddha-akolkar-0154a2272/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://drive.google.com/file/d/1aicDhTEzXry6bvQYIxeBXgT00kC39F5W/view?usp=drivesdk" target="_blank" rel="noreferrer">
            <FaFilePdf />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

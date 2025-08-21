import React from "react";
import "./About.css";
import about_photo from "../../assets/about_photo.webp"; // 👉 add your illustration here

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Left Side - Illustration */}
        <div className="about-left">
          <img src={about_photo} alt="Developer Illustration" className="about-img" />
        </div>

        {/* Right Side - Info */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I’m <span className="highlight">Shraddha Akolkar</span>, a passionate 
            <b> Full Stack Developer</b> with a strong interest in building scalable 
            and user-friendly web applications.
          </p>
          <p className="about-text">
            I specialize in both front-end and back-end development, ensuring that 
            I can deliver complete solutions from concept to deployment. 
            I enjoy exploring new frameworks, writing clean code, and solving 
            complex problems.
          </p>
          <p className="about-text">
            Beyond coding, I am curious about UI/UX design and love collaborating 
            with teams to create impactful digital experiences.  
            My goal is to continuously grow as a developer and contribute to 
            projects that make a difference.
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default About;

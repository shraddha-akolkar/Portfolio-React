import React from "react";
import "./Projects.css";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import project4 from "../../assets/project4.webp";
import project5 from "../../assets/project5.webp";
import project6 from "../../assets/project6.webp";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      img: project1,
      github: "https://github.com/shraddha-akolkar/mini-project",
      demo: "https://shraddha-lamy.netlify.app/",
    },
    {
      id: 2,
      img: project2,
      github: "https://github.com/shraddha-akolkar/mini-project2/",
      demo: "https://clothing-brand-web.netlify.app/",
    },
    {
      id: 3,
      img: project3,
      github: "https://github.com/shraddha-akolkar/To-Do-List",
      demo: "https://to-do-list-application-js.netlify.app/",
    },
    {
      id: 4,
      img: project4,
      github: "https://github.com/shraddha-akolkar/mini-project-js",
      demo: "https://rapido-fetch-js.netlify.app/",
    },
    {
      id: 5,
      img: project5,
      github: "https://github.com/shraddha-akolkar/Quiz-App",
      demo: "https://quizz-app-react-mini.netlify.app/",
    },
    {
      id: 6,
      img: project6,
      github: "https://github.com/shraddha-akolkar/library-management-project",
      demo: "https://libraray-management-javascript.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="projects-subtitle">
        Here are some of the projects I’ve worked on. Each one helped me grow my
        full-stack development skills.
      </p>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={`Project ${project.id}`} />
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn demo-btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

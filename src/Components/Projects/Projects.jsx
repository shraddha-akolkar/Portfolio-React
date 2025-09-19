import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import project4 from "../../assets/project4.webp";
import project5 from "../../assets/project5.webp";
import project6 from "../../assets/project6.webp";
import project7 from "../../assets/project7.webp";
import project8 from "../../assets/project8.webp";
// import project9 from "../../assets/project9.webp";
import project10 from "../../assets/project10.webp";

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
    {
      id: 7,
      img: project7,
      github: "https://github.com/shraddha-akolkar/real-estate",
      demo: "https://estate-projects.netlify.app/",
    },

    {
      id: 10,
      img: project10,
      github: "https://github.com/shraddha-akolkar/Cafe",
      demo: "https://grandnationcafe.netlify.app/",
    },

    {
      id: 8,
      img: project8,
      github: "https://github.com/shraddha-akolkar/gemini-clone",
      demo: "https://gemini-clone-aii.netlify.app/",
    },
    // {
    //   id: 9,
    //   img: project9,
    //   github: "https://github.com/shraddha-akolkar/QuickCart",
    //   demo: "https://gemini-clone-aii.netlify.app/",
    // },

     
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="projects-subtitle">
        Here are some of the projects I’ve worked on. Each one helped me grow my
        full-stack development skills.
      </p>

      {/* ✅ Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 cards on tablet
          1024: { slidesPerView: 3 }, // 3 cards on desktop
        }}
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;

import React from "react";
import "./Experience.css";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-heading">Experience</h2>

      <div className="experience-card">
        {/* Company + Briefcase */}
        <div className="experience-company">
          <FaBriefcase className="company-icon" />
          <h3>A2Z IT HUB PVT LTD</h3>
        </div>

        {/* Role */}
        <h4 className="experience-role">Full Stack Developer Intern</h4>

        {/* Location + Time */}
        <div className="experience-meta">
          <span className="meta-item">
            <FaMapMarkerAlt className="meta-icon location-icon" />
            Pune, India
          </span>
          <span className="meta-item">
            <FaCalendarAlt className="meta-icon time-icon" />
            Jan – Jun 2025
          </span>
        </div>

        {/* Description */}
        <ul className="experience-details">
          <li>
            Contributed to full-stack development using the MERN stack: MongoDB,
            Express.js, React.js, and Node.js.
          </li>
          <li>
            Built and integrated RESTful APIs, handled backend logic, and
            implemented JWT-based authentication.
          </li>
          <li>
            Designed responsive and dynamic UIs with React.js, Tailwind CSS,
            HTML5, and CSS3.
          </li>
          <li>
            Utilized React Router for client-side routing and ensured smooth
            navigation experiences.
          </li>
          <li>
            Worked in an Agile environment, collaborated with cross-functional
            teams, and maintained code via Git & GitHub.
          </li>
          <li>
            Improved application performance by optimizing React components and
            reducing API response times by ~20%.
          </li>
          <li>
            Integrated third-party libraries (Axios, JWT, bcrypt) to enhance
            security and efficiency in backend workflows.
          </li>
          <li>
            Participated in daily standups, sprint planning, and peer code
            reviews to maintain project quality and timely delivery.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

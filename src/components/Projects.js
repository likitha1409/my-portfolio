import React from "react";
import { FaGithub } from "react-icons/fa";

import agro from "../assets/images/agri.jpg";
import bus from "../assets/images/bus.jpg";
import ai from "../assets/images/aicoach.png";
import face from "../assets/images/attendance.jpg";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-container">

        {/* AgroGuide */}
        <div className="project-card">
          <img src={agro} alt="AgroGuide" />
          <h3>AgroGuide</h3>
          <p>AI-powered farming platform with crop guidance and disease detection.</p>

          <div className="project-links">
            <a
              href="https://github.com/likitha1409"   // change to your repo later
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Bus */}
        <div className="project-card">
          <img src={bus} alt="Bus Reservation" />
          <h3>Bus Reservation System</h3>
          <p>Full-stack booking system using React, Spring Boot and MySQL.</p>

          <div className="project-links">
            <a
              href="https://github.com/likitha1409"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* AI Coach */}
        <div className="project-card">
          <img src={ai} alt="AI Coach" />
          <h3>AI Habit Coach</h3>
          <p>LLM-powered study analytics app with RAG and dashboard.</p>

          <div className="project-links">
            <a
              href="https://github.com/likitha1409"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Attendance */}
        <div className="project-card">
          <img src={face} alt="Attendance" />
          <h3>Face Recognition Attendance</h3>
          <p>OpenCV-based smart attendance automation system.</p>

          <div className="project-links">
            <a
              href="https://github.com/likitha1409"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;

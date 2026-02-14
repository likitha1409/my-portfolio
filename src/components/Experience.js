import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      className="experience"
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Internship Experience</h2>

      <div className="experience-container">

        <div className="exp-card">
          <h3>Full-Stack Developer Intern</h3>
          <span className="exp-company">Learn Square Technologies • June 2023 - August 2023</span>

          <ul>
            <li>Developed responsive web applications using React and Spring Boot.</li>
            <li>Built REST APIs and integrated frontend with backend services.</li>
            <li>Worked with MySQL database for data storage and retrieval.</li>
            <li>Implemented authentication and optimized application performance.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}

export default Experience;

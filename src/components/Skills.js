import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaDatabase, FaGitAlt } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {[ 
          { icon: <FaReact />, title: "Frontend", text: "React, HTML, CSS, JS" },
          { icon: <FaJava />, title: "Backend", text: "Java, Spring Boot, REST" },
          { icon: <FaDatabase />, title: "Database", text: "MySQL, MongoDB" },
          { icon: <FaGitAlt />, title: "Tools", text: "Git, GitHub, Postman" }
        ].map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

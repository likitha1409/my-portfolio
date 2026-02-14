import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpeg";

function About() {
  const [showText, setShowText] = useState(false);

  // show text after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-wrapper">

        {/* PHOTO */}
        <motion.img
          src={profile}
          alt="Vasanthi"
          className="about-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* TEXT APPEARS AFTER DELAY */}
        {showText && (
          <motion.div
            className="about-container"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <p className="shine-text">
              I am a Computer Science graduate focused on building scalable and
              intelligent web applications using React, Spring Boot, and modern
              databases.
            </p>

            <p className="shine-text">
              I have developed real-world projects including AI-powered crop
              guidance, analytics dashboards, and automation systems. I enjoy
              solving practical problems by combining backend logic, APIs, and
              user-friendly interfaces.
            </p>

            <p className="shine-text">
              I am passionate about backend engineering, system design, and
              AI-driven applications. My goal is to grow as a software developer
              by building impactful, production-quality solutions and improving
              my technical depth continuously.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default About;

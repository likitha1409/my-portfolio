import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/tech.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="video-overlay"></div>

      {/* Content */}
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profile} alt="Vasanthi" className="profile-img" />

        <h1>Dommeti L S Vasanthi</h1>
        <h2>Full-Stack Developer | AI Applications</h2>

        <p>
          Building intelligent, scalable web applications using React, Spring Boot and AI.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact</a>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;

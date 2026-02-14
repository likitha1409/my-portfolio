import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vuaf6h9",      // <-- your Service ID
        "template_vo3l2n2",     // <-- PASTE your Template ID here
        form,
        "1iaWPF12A3gZUjY1a"      // <-- PASTE your Public Key here
      )
      .then(() => {
        setStatus("Message sent successfully ✔");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus("Failed to send ❌ Try again");
      });
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && (
        <p style={{ marginTop: "12px", color: "#22c55e" }}>
          {status}
        </p>
      )}

      <div className="contact-links">
        <a href="https://github.com/likitha1409" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="lsvasanthid@gmail.com">
            My email-lsvasanthid@gmail
        </a>

        <a
          href="https://linkedin.com/in/dommeti-l-s-vasanthi"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;

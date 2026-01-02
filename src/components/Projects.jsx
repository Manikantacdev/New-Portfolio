import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./styles/projects.css";

const PROJECTS = [
  {
    title: "🧑‍💻 Freelancing Application",
    desc: "Full-stack freelancing platform connecting clients and freelancers with job posting, bidding, chat, and secure authentication.",
    ss: "/freelancing.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://freelancem.vercel.app/",
    code: "https://github.com/Manikantacdev/FreelanceM",
  },
  {
    title: "📈 Employee Performance Prediction",
    desc: "Machine learning system that predicts employee performance using historical data, KPIs, and behavioral metrics.",
    ss: "/employee-performance.png",
    tech: ["Python", "scikit-learn", "Pandas", "Machine Learning"],
    live: "https://employee-prediction.onrender.com",
    code: "https://github.com/Manikantacdev/Employee-Prediction",
  },
  {
    title: "💼 Portfolio Website",
    desc: "Personal portfolio showcasing projects, skills, and experience with a modern UI and smooth animations.",
    ss: "/portfolio.png",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://manicportfolio.onrender.com/",
    code: "https://github.com/Manikantacdev/Latest-Portfolio",
  },
  {
    title: "🏠 Home Service Application",
    desc: "On-demand home services platform for booking plumbers, electricians, and other professionals with real-time tracking.",
    ss: "/Home_Service.png",
    tech: ["HTML", "CSS", "Node.js", "MongoDB"],
    live: "#",
    code: "https://github.com/Manikantacdev/Home-service",
  },
  {
    title: "🍽️ Food Restaurant Review System",
    desc: "Web application that allows users to rate, review, and analyze restaurants with sentiment-based feedback insights.",
    ss: "/Food_Restaurant.png",
    tech: ["Python", "NLP", "React", "Flask"],
    live: "#",
    code: "https://github.com/Manikantacdev/Machine-Learning-Models/tree/master/Food%20Restaurant%20Review",
  },
];


export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

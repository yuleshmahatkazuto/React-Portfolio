import React from "react";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard.jsx";
const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.contactButton}>
          <a href="#contact">CONTACT ME</a>
        </p>
      </div>
      <div className={styles.cardArea}>
        <ProjectCard
          imageSource="/Assets/images/thumbnail-project-1-large.webp"
          title="DESIGN PORTFOLIO"
          toolStack={["HTML", "CSS"]}
        />
        <ProjectCard
          imageSource="/Assets/images/thumbnail-project-2-large.webp"
          title="E-LEARNING LANDING PAGE"
          toolStack={["HTML", "CSS"]}
        />
        <ProjectCard
          imageSource="/Assets/images/thumbnail-project-3-large.webp"
          title="TODO WEB APP"
          toolStack={["HTML", "CSS", "JAVASCRIPT"]}
        />
        <ProjectCard
          imageSource="/Assets/images/thumbnail-project-4-large.webp"
          title="ENTERTAINMENT WEB APP"
          toolStack={["HTML", "CSS", "JAVASCRIPT"]}
        />
        <ProjectCard
          imageSource="/Assets/images/thumbnail-project-5-large.webp"
          title="MEMORY GAME"
          toolStack={["HTML", "CSS", "JAVASCRIPT"]}
        />
        <ProjectCard
          imageSource="/Assets/images/thumbnail-project-6-large.webp"
          title="ART GALLERY SHOWCASE"
          toolStack={["HTML", "CSS", "JAVASCRIPT"]}
        />
      </div>
    </div>
  );
};

export default Projects;

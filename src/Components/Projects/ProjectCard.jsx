import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ title, toolStack, imageSource }) => {
  return (
    <div className={styles.container}>
      <img src={imageSource} />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.toolStack}>
        {toolStack.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;

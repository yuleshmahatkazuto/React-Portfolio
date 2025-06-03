import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ title, toolStack, imageSource }) => {
  return (
    <div className={styles.container}>
      <img src={imageSource} />
      <div className={styles.overlay}>
        <p className={styles.button1}>VIEW PROJECT</p>
        <p className={styles.button2}>VIEW CODE</p>
      </div>
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

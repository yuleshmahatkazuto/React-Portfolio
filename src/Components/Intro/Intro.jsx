import React from "react";
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <img src="/Assets/images/profile.jpeg" className={styles.profileImg} />
      <div className={styles.secondContainer}>
        <h1 className={styles.title}>
          Nice to meet you!
          <br />
          I'm <span>Yulesh Mahat.</span>
          <br />A software Engineer.
        </h1>
        <p className={styles.info}>
          Based in Sydney, I'm a fullstack developer that actually solves
          real-life problems.
        </p>
        <div className={styles.contactButton}>
          <a href="#contact">CONTACT ME</a>
        </div>
        <hr className={styles.line} />
      </div>
      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
      <img src="/Assets/images/pattern-circle.svg" alt="circle" />
    </div>
  );
};

export default Intro;

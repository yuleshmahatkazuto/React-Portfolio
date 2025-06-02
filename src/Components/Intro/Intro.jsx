import React from "react";
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Nice to meet you!
        <br />
        I'm <span>Yulesh Mahat.</span>
        <br />A software Engineer.
      </h1>
      <p className={styles.info}>
        Based in Sydney, I'm a fullstack developer
        <br />
        passionate about creating web apps <br />
        that actaully solve real-life problems.
      </p>
      <div className={styles.contactButton}>CONTACT ME</div>
      <hr />
      <img
        src="/Assets/images/portfolio-profile.jpg"
        className={styles.profileImg}
      />
      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
      <img src="/Assets/images/pattern-circle.svg" alt="circle" />
    </div>
  );
};

export default Intro;

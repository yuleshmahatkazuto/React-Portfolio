import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>yuleshmahat</div>
      <div className={styles.buttonBar}>
        <img src="/Assets/images/icon-github.svg" />
        <img src="/Assets/images/icon-linkedin.svg" />
      </div>
    </div>
  );
};

export default NavBar;

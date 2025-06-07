import React from "react";
import styles from "./Skills.module.css";
import Items from "./Skill_Items.jsx";

function Skills() {
  return (
    <div className={styles.container}>
      <Items title="HTML" experience="3" />
      <Items title="CSS" experience="3" />
      <Items title="JavaScript" experience="3" />
      <Items title="React" experience="2" />
      <Items title="Saas" experience="2" />
      <Items title="PostgreSQL" experience="2" />
      <Items title="Bootstrap" experience="2" />
      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
      <hr></hr>
    </div>
  );
}

export default Skills;

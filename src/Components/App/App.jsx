import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Intro from "../Intro/Intro.jsx";
import styles from "./App.module.css";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";

const App = () => {
  return (
    <div>
      <div className={styles.container1}>
        <NavBar />
        <Intro />
        <Skills />
        <Projects />
      </div>
      <div className={styles.container2}>
        <Contact />
      </div>
    </div>
  );
};

export default App;

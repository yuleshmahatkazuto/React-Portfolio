"use client";

import React from "react";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Intro from "../Components/Intro/Intro.jsx";
import styles from "../Components/App/App.module.css";
import Skills from "../Components/Skills/Skills.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import Contact from "../Components/Contact/Contact.jsx";

export default function Home() {
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
}

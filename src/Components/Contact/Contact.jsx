import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className={styles.form}>
        <form method="POST">
          <input name="name" placeholder="NAME" />
          <input name="email" placeholder="EMAIL" />
          <input name="message" placeholder="MESSAGE" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      <hr></hr>
      <h2>yuleshmahat</h2>
      <div className={styles.buttonBar}>
        <img src="/Assets/images/icon-github.svg" alt="github icon" />
        <img src="/Assets/images/icon-linkedin.svg" alt="linkedin icon" />
      </div>
      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
    </div>
  );
};

export default Contact;

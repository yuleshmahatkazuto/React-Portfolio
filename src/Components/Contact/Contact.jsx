import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [email, setEmail] = useState({ email: "", valid: true });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleEmailChange(event) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (event.target.value === "") {
      setEmail({ email: event.target.value, valid: true });
    } else if (emailPattern.test(event.target.value)) {
      setEmail({ email: event.target.value, valid: true });
    } else {
      setEmail({ email: event.target.value, valid: false });
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className={styles.container} id="contact">
      <div className={styles.info}>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className={styles.form}>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="NAME"
            value={name}
            onChange={handleNameChange}
            className={name ? styles.filled : styles.notFilled}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email.email}
            onChange={handleEmailChange}
            className={email.email ? styles.filled : styles.notFilled}
            required
          />
          <span
            className={
              !email.valid ? styles.errorMessage : styles.errorMessageHidden
            }
          >
            Sorry, invalid format here
          </span>
          <textarea
            name="message"
            placeholder="MESSAGE"
            value={message}
            onChange={handleMessageChange}
            className={
              message ? styles.textareaFilled : styles.textareaNotFilled
            }
            required
          />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      <hr />
      <div className={styles.bottomBar}>
        <h2>yuleshmahat</h2>
        <div className={styles.buttonBar}>
          <a href="https://github.com/yuleshmahatkazuto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              className={styles.icon}
              name="Github"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yulesh-mahat-a94621308/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              className={styles.icon}
              name="Linkedin"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
              />
            </svg>
          </a>
        </div>
        <img src="/Assets/images/pattern-rings.svg" alt="rings" />
      </div>
    </div>
  );
};

export default Contact;

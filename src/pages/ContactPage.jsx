import React, { useState } from "react";
import classes from "./ContactPage.module.css";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Toast from "../components/Toast";
import Scroll from "../components/Scroll";

function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const copyMail = () => {
    setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);
    return () => clearTimeout(timer);
  };

  const email = "deonvisser44@gmail.com";

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    copyMail();
  };

  return (
    <div className={classes.ContactPage} id="contact">
      <h1>Contact Me</h1>
      {showToast && <Toast />}
      <div className={classes.contactText}>
        <p>
          Whether you'd like to have a chat, need prop-ups made for something
          you have in mind, or want to hire a developer, feel free to reach out!
        </p>
      </div>
      <div className={classes.linksWrapper}>
        <AiOutlineMail onClick={copy} className={classes.mailIcon} />
        <a
          href="https://github.com/deonvisser44"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/deonvisser11/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <Scroll />
    </div>
  );
}

export default ContactPage;

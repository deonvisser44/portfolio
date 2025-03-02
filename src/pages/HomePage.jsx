import React from "react";
import classes from "./HomePage.module.css";
import emoji from "../assets/emoji.png";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import latestCV from "../assets/DeonVisserCV-2025.pdf";

function HomePage() {
  return (
    <div className={classes.homePage}>
      <div className={classes.introWrapper}>
        <div className={classes.introText}>
          <div className={classes.textWrapper}>
            <div className={classes.textWrapperHead}>
              <h1>Full-Stack Developer</h1>
            </div>
            <p>
              Hi, I'm Deon, I have a passion for helping people bring their
              technical ideas to life.
            </p>
            <div className={classes.buttonWrapper}>
              <a
                href={latestCV}
                download="DeonVisserCV.pdf"
                className={classes.downloadButton}
              >
                Get Resume
                <HiOutlineDocumentDownload />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.imageWrapper}>
          <img src={emoji} alt="me" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

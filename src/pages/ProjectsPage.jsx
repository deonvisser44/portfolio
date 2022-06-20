import React from "react";
import classes from "./ProjectsPage.module.css";
import onlineStore from "../assets/onlinestore.JPG";
import blog from "../assets/blog.JPG";
import cryptowatch from "../assets/cryptoscreenshot.JPG";

function ProjectsPage() {
  return (
    <div className={classes.projectsPage} id="projects">
      <h1>Projects</h1>
      <div className={classes.projectsWrapper}>
        <div className={classes.project}>
          <h3>Online Store</h3>
          <img
            className={classes.projectImg}
            src={onlineStore}
            alt="onlinestore"
          />
          <div className={classes.projectButtonDiv}>
            <a
              href="https://deonvisser44.github.io/online-store"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.siteButton}>Visit Site</button>
            </a>
            <a
              href="https://github.com/deonvisser44/online-store/tree/master"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.gitHubButton}>GitHub</button>
            </a>
          </div>
          <p className={classes.projectDesc}>React.js / Redux / CSS</p>
        </div>
        <div className={classes.projectAlt}>
          <h3>Crypto Watch</h3>
          <img
            className={classes.projectImgAlt}
            src={cryptowatch}
            alt="onlinestore"
          />
          <div className={classes.projectButtonDivAlt}>
          <a
              href="https://deonvisser44.github.io/crypto-watch/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.siteButton}>Visit Site</button>
            </a>
            <a
              href="https://github.com/deonvisser44/crypto-watch/tree/master"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.gitHubButton}>GitHub</button>
            </a>
          </div>
          <p className={classes.projectDescAlt}>React.js / Firebase / CSS</p>
        </div>
        <div className={classes.project}>
          <h3>Personal Blog</h3>
          <img className={classes.projectImg} src={blog} alt="onlinestore" />
          <div className={classes.projectButtonDiv}>
          <a
              href="https://deonvisser44.github.io/my-blog/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.siteButton}>Visit Site</button>
            </a>
            <a
              href="https://github.com/deonvisser44/my-blog/tree/master/src"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.gitHubButton}>GitHub</button>
            </a>
          </div>
          <p className={classes.projectDesc}>React.js / Firebase / CSS</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

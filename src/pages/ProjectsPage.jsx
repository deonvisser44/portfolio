import React from "react";
import classes from "./ProjectsPage.module.css";
import onlineStore from "../assets/onlinestore.JPG";
import blog from "../assets/blog.JPG";
import cryptowatch from "../assets/cryptoscreenshot.JPG";
import camboEvents from "../assets/cambo-events.JPG";

function ProjectsPage() {
  return (
    <div className={classes.projectsPage} id="projects">
      <h1>Personal Projects</h1>
      <div className={classes.projectsWrapper}>
        <div className={classes.project}>
          <h3>Mock Online Store</h3>
          <img
            className={classes.projectImg}
            src={onlineStore}
            alt="online-store-screenshot"
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
          <p className={classes.projectDesc}>ReactJS / Redux / CSS</p>
        </div>
        <div className={classes.project}>
          <h3>Personal Blog</h3>
          <img className={classes.projectImg} src={blog} alt="onlinestore" />
          <div className={classes.projectButtonDiv}>
            <a
              href="https://github.com/deonvisser44/my-blog/tree/master/src"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.gitHubButton}>GitHub</button>
            </a>
          </div>
          <p className={classes.projectDesc}>ReactJS / Firebase / CSS</p>
        </div>
        <div className={classes.projectAlt}>
          <h3>Crypto Watch</h3>
          <img
            className={classes.projectImgAlt}
            src={cryptowatch}
            alt="crypto-watch-screenshot"
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
          <p className={classes.projectDescAlt}>ReactJS / Firebase / CSS</p>
        </div>
        <div className={classes.projectAlt}>
          <h3>Cambo Events</h3>
          <img
            className={classes.projectImgAlt}
            src={camboEvents}
            alt="cambo-events-screenshot"
          />
          <div className={classes.projectButtonDiv}>
            <a
              href="https://github.com/deonvisser44/cambo-events-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <button className={classes.gitHubButton}>GitHub</button>
            </a>
          </div>
          <p className={classes.projectDescAlt}>NextJS / NestJS / Postgres</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

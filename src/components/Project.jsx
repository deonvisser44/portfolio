import React from "react";
import classesDesktop from "./Project-Desktop.module.css";
import classesMobile from "./Project-Mobile.module.css";

export default function Project({ image, site, github, isDesktop, description, title }) {
  const classes = isDesktop ? classesDesktop : classesMobile;
  return (
    <div className={classes.project}>
      <h3>{title}</h3>
      <img
        className={classes.projectImg}
        src={image}
        alt="project-screenshot"
      />
      <div className={classes.projectButtonDiv}>
        {site && (
          <a href={site} target="_blank" rel="noreferrer">
            <button className={classes.siteButton}>Visit Site</button>
          </a>
        )}
        <a href={github} target="_blank" rel="noreferrer">
          <button className={classes.gitHubButton}>GitHub</button>
        </a>
      </div>
      <p className={classes.projectDesc}>{description}</p>
    </div>
  );
}

import React from "react";
import classes from "./ProjectsPage.module.css";
import Project from "../components/Project";
import { PERSONAL_PROJECTS } from "../utils/constants";

function ProjectsPage() {
  return (
    <div className={classes.projectsPage} id="projects">
      <h1>Personal Projects</h1>
      <div className={classes.projectsWrapper}>
        {PERSONAL_PROJECTS.map((project) => (
          <Project
            key={project.github}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
            site={project.site}
            isDesktop={project.isDesktop}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;

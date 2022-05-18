import React from "react";
import classes from "./AboutAndSkillsPage.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Redux",
  "Git",
  "Figma",
];

function AboutAndSkillsPage() {
  return (
    <div className={classes.aboutAndSkillsPage} id="about">
      <div className={classes.aboutWrapper}>
        <h1>About</h1>
        <p>
          I am currently pursuing a Bachelor's Degree in Computer Science in
          part time and have taken it upon myself to become a web developer.{" "}
          <br /> <br />
          Since starting my studies, I have developed an immense curiosity as to
          the underlying technology in the devices and applications I use,
          promting me to take up the technologies I have, and looking forward to
          learning loads more. <br />
        </p>
      </div>

      <div className={classes.skillsWrapper}>
        <h1>Skills</h1>
        <div className={classes.indvSkillsWrapper}>
          {skills.map((skill) => (
            <div key={skill} className={classes.skill}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.experienceWrapper}>
        <h1>Work Experience</h1>
        <h3>2021 - Present: Freelancing</h3>
        <p>
          I have completed multiple jobs for small businesses and worked with
          development teams, giving me experiences ranging from creating
          wireframes, to deploying web-based applications.
        </p>
      </div>
    </div>
  );
}

export default AboutAndSkillsPage;

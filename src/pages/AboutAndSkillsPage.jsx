import React from "react";
import classes from "./AboutAndSkillsPage.module.css";

const SKILLS_ARRAY = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "React Native",
  "NextJS",
  "Redux",
  "NestJS",
  "Postgres",
  "Docker",
  "AWS",
  "Git",
];

function AboutAndSkillsPage() {
  return (
    <div className={classes.aboutAndSkillsPage} id="about">
      <div className={classes.aboutWrapper}>
        <h1>About</h1>
        <p>
          I have always found the impact of technology on our lives to be
          fascinating and would love to play a part in shaping the technology
          people use in their daily lives.
          <br /> <br />I hold a Bachelor's Degree in Computer Science and have
          three years of experience as a full-stack and mobile app developer,
          working with both startups and established firms.
        </p>
      </div>

      <div className={classes.skillsWrapper}>
        <h1>Skills</h1>
        <div className={classes.indvSkillsWrapper}>
          {SKILLS_ARRAY.map((skill) => (
            <div key={skill} className={classes.skill}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.experienceWrapper}>
        <h1>Work Experience</h1>
        <h2>Freelance</h2>
        <h3>Front-End Development</h3>
        <h3>Jan 2022 - Jun 2022</h3>
        <p>
          Completed multiple jobs for small businesses and collaborated with
          development teams, giving me experiences ranging from creating
          wireframes to deploying web-based applications.
        </p>
        <h2>Focus Bear</h2>
        <h3>Full-Stack Development</h3>
        <h3>Jul 2022 - Jan 2024</h3>
        <p>
          Worked as a full-stack developer, where I had the opportunity to
          broaden my skill set while working on a cool productivity app. Gained
          experience with React.js, API development, SQL databases, scheduling
          cron jobs, and GDPR compliance.
        </p>
        <h2>CapraTech</h2>
        <h3>Mobile App Development</h3>
        <h3>Jan 2024 - Present</h3>
        <p>
          Currently working as a Mobile App Developer, specializing in React
          Native for mobile development and React.js for frontend web
          development. Collaborating with designers, and API developers to build
          user-friendly applications with a strong focus on performance and
          UI/UX.
        </p>
      </div>
    </div>
  );
}

export default AboutAndSkillsPage;

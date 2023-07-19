import React from 'react';
import classes from './AboutAndSkillsPage.module.css';

const skills = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'Redux',
  'NestJS',
  'Postgres',
];

function AboutAndSkillsPage() {
  return (
    <div className={classes.aboutAndSkillsPage} id='about'>
      <div className={classes.aboutWrapper}>
        <h1>About</h1>
        <p>
          I have always found the impact of technology on our lives to be
          fascinating and would love to play a part in shaping the technology
          people use in their daily lives.
          <br /> <br />
          I am currently pursuing a Bachelor's Degree in Computer
          Science, and have taken it upon myself to become a web developer.
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
        <h2>Freelancing</h2>
        <h3>2022 Jan - 2022 Jun</h3>
        <p>
          Completed multiple jobs for small businesses and collaborated
          with development teams, giving me experiences ranging from creating
          wireframes to deploying web-based applications.
        </p>
        <h2>Focus Bear</h2>
        <h3>2022 Jul - Present: Focus Bear</h3>
        <p>
          Currently working as a full-stack developer at Focus Bear where I'm
          getting the opportunity to broaden my skillset while working on a
          cool productivity app!
        </p>
      </div>
    </div>
  );
}

export default AboutAndSkillsPage;

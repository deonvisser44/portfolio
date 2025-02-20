import React from "react";
import classes from "./Nav.module.css";
import { motion } from "framer-motion";

function Nav() {
  const scrollContact = () => {
    const section = document.querySelector("#contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollAbout = () => {
    const section = document.querySelector("#about");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollProjects = () => {
    const section = document.querySelector("#projects");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={classes.nav}>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        DV.
      </motion.h2>
      <div className={classes.navList}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={scrollAbout}
        >
          About
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          onClick={scrollProjects}
        >
          Projects
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={scrollContact}
        >
          Contact
        </motion.p>
      </div>
    </nav>
  );
}

export default Nav;

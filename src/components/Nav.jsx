import React from 'react'
import classes from './Nav.module.css'

function Nav() {

  const scrollContact = () => {
    const section = document.querySelector( '#contact' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const scrollAbout = () => {
    const section = document.querySelector( '#about' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const scrollProjects = () => {
    const section = document.querySelector( '#projects' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <nav className={classes.nav}>
        <h2>DV.</h2>
        <div className={classes.navList}>
            <p onClick={scrollAbout}>About</p>
            <p onClick={scrollProjects}>Projects</p>
            <p onClick={scrollContact}>Contact</p>
        </div>
    </nav>
  )
}

export default Nav
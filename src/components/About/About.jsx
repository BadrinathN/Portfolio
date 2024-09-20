import React from 'react'
import aboutImage from "../../assets/About/aboutImage.png"
import cursorIcon from "../../assets/About/cursorIcon.png"
import serverIcon from "../../assets/About/serverIcon.png"
import uiIcon from "../../assets/About/uiIcon.png"
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={aboutImage} alt="sitting with a laptop" />    
            <ul className={styles.aboutItems}>  
            <li className={styles.aboutItem}>
                <img src={cursorIcon} alt="Cursor" />
                <div className={styles.aboutItemText}>
                    <h3>FrontEnd Developer</h3>
                    <p>I am a FrontEnd developer with experience 
                       in builing responsive and optimized websites.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={serverIcon} alt="Server" />
                <div className={styles.aboutItemText}>
                    <h3>BackEnd Developer</h3>
                    <p>I have experience developing fast and optimized Systems and APIs.
                    </p>
                </div>
            </li>
            </ul>
        </div>
    </section>
  )
}

export default About
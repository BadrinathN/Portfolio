import React from 'react'
import styles from './Contact.module.css';
import emailIcon from "../../assets/contact/emailIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"

function Contact() {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt="EmailIcon" />
                <a href="mailto:badrish1912@gmail.com">myemail</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt="GitHubIcon" />
                <a href="https://github.com/BadrinathN">Github.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
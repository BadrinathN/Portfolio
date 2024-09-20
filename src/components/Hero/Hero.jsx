import React from 'react'
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title }>Hi, I'm Badri</h1>
            <p className={styles.description}>I am a Full-Stack developer 
                with a year of Experience in React and Node JS.
                Please Reach Out If you would like to learn more! 
            </p>
            <a href="mailto:badrish1912@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Hero Image of me" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
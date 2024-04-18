import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kanishka</h1>
                <p className={styles.description}>I'm a Pre-final year Btech CSE Student. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:kanishkaasinghhh27@gmail.com">Contact me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.jpeg")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
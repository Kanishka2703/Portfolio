import React from 'react';
import {getImageUrl} from "../../utils";
import styles from './About.module.css';
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.jpeg")} alt="Me sitting with my laptop" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>I'm Graduating from UPES, Dehradun. My major is in DevOps & minor in CCVT. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>I'm learning DSA in Java & I love to do Web development as well. Currently, I'm looking for the Internship where I can showcase my
potential and contribute to the Organization. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
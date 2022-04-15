import React from "react";
import styles from "./Blog.style.css";
import { Gallery } from "./childs/Gallery";
import { AboutUs } from "./childs/AboutUs";
import beach from "./images/beach.png";

export const Blog: React.FC = () => {
    return (
        <div className={styles.container}>
            <Gallery />
            <AboutUs />
            <img src={beach} alt={"beach"} className={styles.image} />
            <div className={styles.background}>{"Travel"}</div>
        </div>
    );
};

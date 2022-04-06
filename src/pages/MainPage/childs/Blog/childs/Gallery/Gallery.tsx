import React from "react";
import styles from "./Gallery.style.css";
import girl from "./images/girl.png";
import landscape from "./images/landscape.png";

export const Gallery: React.FC = () => {
    return (
        <div className={styles.container}>
            <img className={styles.imageTop} src={landscape} alt={"landscape"} />
            <img className={styles.imageBottom} src={girl} alt={"girl"} />
        </div>
    );
};

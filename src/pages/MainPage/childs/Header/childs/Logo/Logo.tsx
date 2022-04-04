import React from "react";
import styles from "./Logo.style.css";

export const Logo: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>{"Explore"}</p>
        </div>
    );
};

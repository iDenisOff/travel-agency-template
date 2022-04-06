import React from "react";
import styles from "./Achievements.style.css";

export const Achievements: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <p className={styles.itemHeader}>{"20+"}</p>
                <p className={styles.itemLabel}>{"Year Experience"}</p>
            </div>
            <div className={styles.item}>
                <p className={styles.itemHeader}>{"250+"}</p>
                <p className={styles.itemLabel}>{"Destination Collaboration"}</p>
            </div>
            <div className={styles.item}>
                <p className={styles.itemHeader}>{"170K+"}</p>
                <p className={styles.itemLabel}>{"Happy Customers"}</p>
            </div>
        </div>
    );
};

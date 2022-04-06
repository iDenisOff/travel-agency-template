import React from "react";
import styles from "./AboutUs.style.css";
import { Achievements } from "./childs/Achievements";
import { CheckIcon } from "../../../../../../components/Icons/CheckIcon";

export const AboutUs: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.label}>{"About us"}</p>
            <p className={styles.header}>{"World Best Travel Agency Company Since 2008."}</p>
            <div className={styles.text}>
                <p style={{ paddingBottom: "19px" }}>
                    {
                        "Continually productize compelling quality for packed with  elated productize compelling quality for packed in  with all elated Them Setting up to website and creating pages."
                    }
                </p>
                <p style={{ paddingBottom: "19px" }}>
                    <CheckIcon /> {"We providing compe quality for packed with elated different."}
                </p>
                <p style={{ paddingBottom: "19px" }}>
                    <CheckIcon /> {"We are one of compelling quality for packed with leading."}
                </p>
                <p style={{ paddingBottom: "32px" }}>
                    <CheckIcon /> {"Learn how compelling quality for packed with elated grow."}
                </p>
            </div>
            <Achievements />
            <div className={styles.containerButton}>
                <button onClick={onClick} className={styles.button}>
                    {"Read More"}
                </button>
            </div>
        </div>
    );
};

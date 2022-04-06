import React from "react";
import styles from "./Summary.style.css";
import { styler } from "../../../../utils/styler";

export const Summary: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerSummary}>
                <div className={styles.header}>{"It’s a Big World Out There, Go Explore"}</div>
                <div className={styles.text}>
                    {
                        "Conveniently customize proactive web services for leveraged without  continualliery aggregate fricctionle ou wellies richard.and very  customize  continually."
                    }
                </div>
                <div className={styles.containerButtons}>
                    <button onClick={onClick} className={styles.button}>
                        {"Get Exploration"}
                    </button>
                    <button onClick={onClick} className={styler(styles.button, styles.buttonWhite)}>
                        {"Read more"}
                    </button>
                </div>
            </div>
        </div>
    );
};

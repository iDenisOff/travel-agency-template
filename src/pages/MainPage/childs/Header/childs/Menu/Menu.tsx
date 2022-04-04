import React from "react";
import styles from "./Menu.style.css";
import { useLocation } from "react-router-dom";
import { mainMenuItems } from "../../../../../../common/consts";
import { styler } from "../../../../../../utils/styler";

export const Menu: React.FC = () => {
    const currentPathname = useLocation().pathname;

    const onClick = (): void => {
        console.log("onClick");
    };

    return (
        <ul className={styles.container}>
            {mainMenuItems.map(({ name, route }) => (
                <li key={route} className={styles.menuItem}>
                    <span className={styler(styles.menuItemText, [route === currentPathname, styles.menuItemTextActive])}>{name}</span>
                </li>
            ))}
            <button onClick={onClick} className={styles.button}>
                {"Sign UP"}
            </button>
        </ul>
    );
};

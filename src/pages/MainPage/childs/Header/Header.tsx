import React from "react";
import styles from "./Header.style.css";
import { Logo } from "./childs/Logo";
import { Menu } from "./childs/Menu";

export const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <Menu />
        </div>
    );
};

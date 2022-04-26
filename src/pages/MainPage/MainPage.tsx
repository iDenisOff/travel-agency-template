import React from "react";
import styles from "./MainPage.style.css";
import { Header } from "./childs/Header";
import bg from "./images/background.png";
import { Summary } from "./childs/Summary";
import { SearchFilters } from "./childs/SearchFilters";
import { Blog } from "./childs/Blog";

export const MainPage: React.FC = () => {
    return (
        <div
            className={styles.container}
            style={{
                background: `url(${bg}) no-repeat fixed`,
                backgroundPosition: "top",
                backgroundAttachment: "local",
            }}
        >
            <Header />
            <Summary />
            <SearchFilters />
            <Blog />
        </div>
    );
};

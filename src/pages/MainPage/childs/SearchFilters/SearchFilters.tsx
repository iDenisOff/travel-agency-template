import React from "react";
import styles from "./SearchFilters.style.css";
import { SearchTypes } from "./childs/SearchTypes";
import { SearchParameters } from "./childs/SearchParameters";

export const SearchFilters: React.FC = () => {
    return (
        <div className={styles.container}>
            <SearchTypes />
            <SearchParameters />
        </div>
    );
};

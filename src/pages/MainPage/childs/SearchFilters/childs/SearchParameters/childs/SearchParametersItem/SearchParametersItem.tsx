import React from "react";
import styles from "./SearchParametersItem.style.css";

type SearchParametersItemProps = {
    label: string;
    placeholder: string;
};

export const SearchParametersItem: React.FC<SearchParametersItemProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.label}>{props.label}</p>
            <input className={styles.input} placeholder={props.placeholder} />
        </div>
    );
};

import React from "react";
import styles from "./SearchParameters.style.css";
import { SearchParametersItem } from "./childs/SearchParametersItem";

export const SearchParameters: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <SearchParametersItem label={"Your Destination"} placeholder={"Thailand"} />
            <SearchParametersItem label={"Check In"} placeholder={"01-26-22"} />
            <SearchParametersItem label={"Check Out"} placeholder={"01-30-22"} />
            <SearchParametersItem label={"Child"} placeholder={"2"} />
            <SearchParametersItem label={"Adult"} placeholder={"3"} />
            <div className={styles.containerButton}>
                <button className={styles.button} onClick={onClick}>
                    {"Book Now"}
                </button>
            </div>
        </div>
    );
};

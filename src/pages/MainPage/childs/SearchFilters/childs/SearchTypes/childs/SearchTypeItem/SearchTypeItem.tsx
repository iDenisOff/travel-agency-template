import React from "react";
import styles from "./SearchTypeItem.style.css";
import { styler } from "../../../../../../../../utils/styler";

type SearchTypeItemProps = {
    imgUrl: string;
    text: string;
    isActive: boolean;
    setActive: (item: string) => void;
};

export const SearchTypeItem: React.FC<SearchTypeItemProps> = (props) => {
    const onClick = (): void => {
        props.setActive(props.text);
    };

    return (
        <div className={styler(styles.container, [props.isActive, styles.itemActive])} onClick={onClick}>
            <img src={props.imgUrl} className={styles.containerImage} alt={"img"} />
            <p className={styles.text}>{props.text}</p>
        </div>
    );
};

import React, { useState } from "react";
import styles from "./SearchTypes.style.css";
import { SearchTypeItem } from "./childs/SearchTypeItem";
import imgHotel from "./images/hotel.png";
import imgFlight from "./images/flight.png";
import imgCar from "./images/car.png";
import imgShip from "./images/ship.png";

export const SearchTypes: React.FC = () => {
    const [activeItem, setActiveItem] = useState("Hotel");

    const onClick = (item: string): void => {
        setActiveItem(item);
    };

    return (
        <div className={styles.container}>
            <SearchTypeItem imgUrl={imgHotel} text={"Hotel"} isActive={activeItem === "Hotel"} setActive={onClick} />
            <SearchTypeItem imgUrl={imgFlight} text={"Flight"} isActive={activeItem === "Flight"} setActive={onClick} />
            <SearchTypeItem imgUrl={imgCar} text={"Car"} isActive={activeItem === "Car"} setActive={onClick} />
            <SearchTypeItem imgUrl={imgShip} text={"Ship"} isActive={activeItem === "Ship"} setActive={onClick} />
        </div>
    );
};

import React from "react";
import classes from './HomePage.module.scss'


import Statistics from "./Statistics/Statistics";
import OrderItem from "./OrderItem/OrderItem";



function HomePage() {
    return (
        <div className={classes.homePage}>
            <h1>Главная</h1>
            <Statistics />
            <div className={classes.orders}>
                <h2>Записи</h2>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>

        </div>
    )
}

export default HomePage;
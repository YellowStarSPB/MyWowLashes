import React from "react";
import { Link } from "react-router-dom";
import classes from './NavBar.module.scss'
import HomeImg from '../../img/admin/navbar/home.svg'
import OrdersImg from '../../img/admin/navbar/orders.svg'
import TimeImg from '../../img/admin/navbar/time.svg'

function NavBar() {
    return (
        <div className={classes.navBar}>
            <ul>
                <li>
                    <img src={HomeImg} alt="home" />
                    <Link to={''}>Главная</Link>
                </li>
                <li>
                    <img src={OrdersImg} alt="orders" />
                    <Link to={"orders"}>Записи</Link>
                </li>
                <li>
                    <img src={TimeImg} alt="time" />
                    <Link to={"time"}>График работы</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
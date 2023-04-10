import React from "react";
import classes from './SettingsPopup.module.scss'


function SettingsPopup() {

    return (
        <div className={classes.popup}>
            <p className={classes.title}>Сменить статус</p>
            <button className={classes.delite}>Отменить</button>
            <button className={classes.accept}>Принять</button>
            <button className={classes.panding}>В ожидании</button>
        </div>
    )
}

export default SettingsPopup;
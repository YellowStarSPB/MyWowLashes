import React from "react";
import classes from './TimeOrder.module.scss'

function TimeOrder({ onChangeTime }) {
    const times = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00']
    const [activeTime, setActiveTime] = React.useState(0)

    const onClickTime = (value, index) => {
        onChangeTime(value)
        setActiveTime(index)
    }

    return (
        <div className={classes.timeWrapper}>
            {times.map((time, index) => (
                <p key={`${time}_${index}`}
                    className={activeTime === index ? classes.active : ''}
                    onClick={() => onClickTime(time, index)}>
                    {time}
                </p>))}
        </div>

    )
}

export default TimeOrder;
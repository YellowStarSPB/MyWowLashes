import React from 'react'
import classes from './Time.module.scss'
import { date } from '../data'




function Time({ onSelectTime, currentDay, timeOrder, secondMonth, currentMonth }) {
    const [activeTime, setActiveTime] = React.useState(timeOrder[0])

    const handleActiveTime = (item) => {
        setActiveTime(item)
        onSelectTime(item)
    }

    return (
        <div className={classes.timeWrapper}>
            {timeOrder.map((item, index) => (
                <div
                    className={`${classes.itemTime} ${!date[currentDay - 1].time.includes(item) && classes.disabled} ${activeTime === item && classes.active} `}
                    key={index}
                    onClick={() => handleActiveTime(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Time
/* import React from 'react'
import classes from './Time.module.scss'
import { date } from '../data'


const timeOrder = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00']

function Time({ onSelectTime }) {
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

export default Time */
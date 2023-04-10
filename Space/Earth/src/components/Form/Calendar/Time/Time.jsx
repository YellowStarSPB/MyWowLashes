import React from 'react'
import classes from './Time.module.scss'
import { date } from '../data'


const arr = [1, 2, 3]

function Time({ onSelectTime, currentDay, date }) {
    const [activeTime, setActiveTime] = React.useState(0)

    const handleActiveTime = (item, index) => {
        setActiveTime(index)
        onSelectTime(item)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.timeWrapper}>
                {date.current[currentDay - 1].time.map((item, index) => (
                    <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                        {item}
                    </div>
                ))

                }
            </div >
        </div>
    )
}

export default Time
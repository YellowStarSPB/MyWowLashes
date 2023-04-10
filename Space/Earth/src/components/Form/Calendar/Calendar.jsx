import React from 'react'
import classes from './Calendar.module.scss'
import { date } from './data'
import { day } from './data'

//закрыте дни месяца
const closedDay = Number(new Date().toISOString().slice(8, 10))
const timeOrder = ['10:00 - 13:00', '13:00 - 16:00', '16:00 - 19:00']
const currentDate = new Date()

function Calendar({ onSelectTime, onSelectDate }) {
    //стейт выбранного дня месяца
    const [currentDay, setCurrentDay] = React.useState(Number(new Date().toISOString().slice(8, 10)))

    const [activeTime, setActiveTime] = React.useState(timeOrder[0])


    const handleChangeDay = (day) => {
        setCurrentDay(prev => prev = day)
        setActiveTime(timeOrder[0])
        onSelectDate(day)
    }

    const handleActiveTime = (item) => {
        setActiveTime(item)
        onSelectTime(item)
    }


    return (
        <div className={classes.calendarWrapper}>
            <div className={classes.calendar}>
                <div className={classes.header}>
                    <div className={classes.month}>{currentDate.toLocaleString('ru', { month: 'long'}).toUpperCase()}</div>
                    <div className={classes.year}>{new Date().toLocaleString('ru', { year: 'numeric'}).toUpperCase()}</div>
                </div>
                <div className={classes.date}>
                    {day.map(({ id, day }, index) => (
                        <div
                            key={id}
                            className={`${classes.date__item} ${currentDay === day && classes.active}
                        ${day < closedDay && classes.disabled} ${date[index].disebled && classes.disabled}`}
                            onClick={() => handleChangeDay(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
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
        </div>


    )
}

export default React.memo(Calendar)
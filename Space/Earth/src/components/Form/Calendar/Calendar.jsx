import React from 'react'
import classes from './Calendar.module.scss'
import { date } from './data'
import { day } from './data'

//закрыте дни месяца
const closedDay = Number(new Date().toISOString().slice(8, 10))


function Calendar({ secondMonth, currentMonth, currentDay, setCurrentDay, onSelectDate }) {


    const handleChangeDay = (day) => {
        setCurrentDay(prev => prev = day)
        onSelectDate(day)
    }

    return (
        <div className={classes.calendarWrapper}>
            <div className={classes.calendar}>
                <div className={classes.header}>
                    <div className={classes.month}>{new Date().toLocaleString('ru', { month: 'long' }).toUpperCase()}</div>
                    <div className={classes.year}>{new Date().toLocaleString('ru', { year: 'numeric' }).toUpperCase()}</div>
                </div>
                <div className={classes.date}>
                    {currentMonth?.map((item, index) => (
                        <div
                            key={item}
                            className={`${classes.date__item} ${currentDay === currentMonth && classes.active}
                        ${day < closedDay && classes.disabled} ${date[index].disebled && classes.disabled}`}
                            onClick={() => handleChangeDay(day)}
                        >
                            {item}
                        </div>
                    ))}
                    {secondMonth?.map((item, index) => (
                        <div
                            key={item}
                            className={`${classes.date__item} ${currentDay === day && classes.active}
                        ${day < closedDay && classes.disabled} ${date[index].disebled && classes.disabled}`}
                            onClick={() => handleChangeDay(day)}
                        >
                            {item}
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>


    )
}

export default React.memo(Calendar)
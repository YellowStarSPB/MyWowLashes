import React from 'react'
import classes from './Calendar.module.scss'
import arrowLeft from '../../../img/order/arrowLeft.svg'
import arrowRight from '../../../img/order/arrowRight.svg'




//закрыте дни месяца
const closedDay = Number(new Date().toISOString().slice(8, 10))



function Calendar({ nextMonth, setNextMonth, fetchData, setCurrentDay, onSelectDate, currentDay }) {



    const handleChangeMonth = (e) => {
        e.preventDefault()
        setNextMonth(!nextMonth)

        //TODO: фикс выбора даты
        setCurrentDay(prev => {
            if (nextMonth) {
                return prev = Number(new Date().toISOString().slice(8, 10))
            } else {
                onSelectDate(1)
                return prev = 1
            }
        })


    }

    const handleChangeDay = (day) => {
        setCurrentDay(prev => prev = day)
        onSelectDate(day)
    }

    return (
        <div className={classes.calendarWrapper}>

            <div className={classes.navigate}>
                <button className={classes.btn} onClick={handleChangeMonth}>
                    <img src={arrowLeft} alt="arrowLeft" />
                </button>
                <button className={classes.btn} onClick={handleChangeMonth}>
                    <img src={arrowRight} alt="arrowRight" />
                </button>
            </div>
            {!nextMonth ? (
                <div className={classes.calendar}>
                    <div className={classes.header}>
                        <div className={classes.month}>{new Date(0, new Date().getMonth(), 1).toLocaleString('ru', { month: 'long' }).toUpperCase()}</div>
                        <div className={classes.year}>{new Date().toLocaleString('ru', { year: 'numeric' }).toUpperCase()}</div>
                    </div>

                    <div className={classes.date}>
                        {fetchData.current.map(({ day, time }) => (
                            <div key={day}
                                className={`${classes.date__item} 
                                ${currentDay === day && classes.active} 
                                ${day < closedDay && classes.disabled}
                                ${time.length === 0 && classes.disabled}`}
                                onClick={() => handleChangeDay(day)}
                            >
                                {day}
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <div className={classes.calendar}>
                    <div className={classes.header}>
                        <div className={classes.month}>{new Date(0, new Date().getMonth() + 1, 1).toLocaleString('ru', { month: 'long' }).toUpperCase()}</div>
                        <div className={classes.year}>{new Date().toLocaleString('ru', { year: 'numeric' }).toUpperCase()}</div>
                    </div>

                    <div className={classes.date}>
                        {fetchData.next.map(({ day, time }) => (
                            <div key={day}
                                className={`${classes.date__item} 
                                ${currentDay === day && classes.active}
                                ${time.length === 0 && classes.disabled}`}
                                onClick={() => handleChangeDay(day)}
                            >
                                {day}
                            </div>
                        ))}

                    </div>
                </div>)

            }
        </div >


    )
}

export default React.memo(Calendar)
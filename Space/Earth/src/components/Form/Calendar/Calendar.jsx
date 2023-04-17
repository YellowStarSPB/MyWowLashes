import React from 'react'
import classes from './Calendar.module.scss'
import arrowLeft from '../../../img/order/arrowLeft.svg'
import arrowRight from '../../../img/order/arrowRight.svg'




//закрыте дни месяца
const closedDay = Number(new Date().toISOString().slice(8, 10))



function Calendar({ nextMonth, setNextMonth, fetchData, setCurrentDay, onSelectDate, currentDay }) {



    const handleChangeMonth = (e) => {
        e.preventDefault()
        setNextMonth(prev => !prev)
    }

    React.useEffect(() => {
        if (nextMonth) {
            setCurrentDay(prev => prev = 1)
            onSelectDate(1)
        } else {
            setCurrentDay(prev => prev = Number(new Date().toISOString().slice(8, 10)))
        }
    }, [nextMonth, setCurrentDay, onSelectDate])

    const handleChangeDay = (day) => {
        setCurrentDay(prev => prev = day)
        onSelectDate(day)
    }

    return (
        <div className={classes.calendarWrapper}>

            <div className={classes.navigate}>
                <div className={classes.btn} onClick={handleChangeMonth}>
                    <img src={arrowLeft} alt="arrowLeft" />
                </div>
                <div className={classes.btn} onClick={handleChangeMonth}>
                    <img src={arrowRight} alt="arrowRight" />
                </div>
            </div>
            {!nextMonth ? (
                <div className={classes.calendar}>
                    <div className={classes.header}>
                        <div className={classes.month}>{new Date(0, new Date().getMonth(), 1).toLocaleString('ru', { month: 'long' }).toUpperCase()}</div>
                        <div className={classes.year}>{currentDay}</div>
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
                        <div className={classes.year}>{currentDay}</div>
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
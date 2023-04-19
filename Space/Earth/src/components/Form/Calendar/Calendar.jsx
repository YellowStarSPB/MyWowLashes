import React from 'react'
import classes from './Calendar.module.scss'
import arrowLeft from '../../../img/order/arrowLeft.svg'
import arrowRight from '../../../img/order/arrowRight.svg'
import Time from './Time/Time'



//закрыте дни месяца
const closedDay = Number(new Date().toISOString().slice(8, 10))



function Calendar({ fetchData, setFormData }) {
    //стейт текущей даты
    const [currentDay, setCurrentDay] = React.useState(Number(new Date().toISOString().slice(8, 10)))
    //стейт месяца - если false - это текущий месяц, true-следующий
    const [nextMonth, setNextMonth] = React.useState(false)

    //Функция изменения дня записи
    const onSelectDay = (day) => {
        if (nextMonth) {
            setFormData(prev => {
                return { ...prev, date: `${new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1).toISOString().substring(0, 8)}${day}` }
            })
        } else {
            setFormData(prev => {
                return { ...prev, date: `${new Date().toISOString().substring(0, 8)}${day}` }
            })
        }
    }

    const handleChangeMonth = () => {
        setNextMonth(prev => !prev)
        setCurrentDay(prev => !nextMonth ? prev = 1 : prev = Number(new Date().toISOString().slice(8, 10)))
        setFormData(prev => ({ ...prev, time: '' }))
    }

    React.useEffect(() => {
        if (nextMonth) {
            setCurrentDay(prev => prev = 1)
            onSelectDay(1)
        } else {
            setCurrentDay(prev => prev = Number(new Date().toISOString().slice(8, 10)))
            onSelectDay(Number(new Date().toISOString().slice(8, 10)))
        }
    }, [nextMonth])

    const handleChangeDay = (day) => {
        setCurrentDay(prev => prev = day)
        onSelectDay(day)
    }

    return (
        <>
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
            <Time fetchData={fetchData} currentDay={currentDay} nextMonth={nextMonth} setFormData={setFormData} />

        </>

    )
}

export default React.memo(Calendar)
import React from 'react'
import classes from './Time.module.scss'





function Time({ nextMonth, currentDay, fetchData, setFormData }) {
    const [activeTime, setActiveTime] = React.useState('')
    //хэндлер активного времени
    const handleActiveTime = (item, index) => {
        setActiveTime(index)
        onSelectTime(item)

    }
    React.useEffect(() => {
        setActiveTime(prev => prev = '')
    }, [nextMonth])

    //Функция изменения времени записи
    const onSelectTime = (time) => {
        setFormData(prev => {
            return { ...prev, time: time }
        })
    }


    return (
        <div className={classes.wrapper}>
            {/* <div className={classes.timeWrapper}>
                {nextMonth ? (date.current[currentDay - 1].time.map((item, index) => (
                    <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                    {item}
                </div>
                ))) : (date.next[currentDay - 1].time.map((item, index) => (
                    <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                        {item}
                    </div>
                )))}
            </div > */}
            {/* date.current[currentDay - 1].time.length === 0 */}
            {/* <div className={`${classes.itemTime}`}>
                На данную дату запись закончилась
            </div> */}
            <div className={classes.timeWrapper}>
                {!nextMonth ? (
                    fetchData.current[currentDay - 1].time.length === 0 ? (<div className={`${classes.itemTime}`}>
                        На данную дату запись закончилась
                    </div>) : (fetchData.current[currentDay - 1].time.map((item, index) => (
                        <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                            {item}
                        </div>)))) : (fetchData.next[currentDay - 1].time.length === 0 ? (
                            <div className={`${classes.itemTime}`}>
                                На данную дату запись закончилась
                            </div>
                        ) : (fetchData.next[currentDay - 1].time.map((item, index) => (
                            <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                                {item}
                            </div>))))
                }

            </div >
        </div>
    )
}

export default Time
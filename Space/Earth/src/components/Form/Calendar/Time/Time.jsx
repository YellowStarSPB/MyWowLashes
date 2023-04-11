import React from 'react'
import classes from './Time.module.scss'





function Time({ nextMonth, onSelectTime, currentDay, date }) {
    const [activeTime, setActiveTime] = React.useState('')

    const handleActiveTime = (item, index) => {
        setActiveTime(index)
        onSelectTime(item)
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
                {nextMonth ? (
                    date.current[currentDay - 1].time.length === 0 ? (<div className={`${classes.itemTime}`}>
                        На данную дату запись закончилась
                    </div>) : (date.current[currentDay - 1].time.map((item, index) => (
                        <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                            {item}
                        </div>)))) : (date.next[currentDay - 1].time.length === 0 ? (
                            <div className={`${classes.itemTime}`}>
                                На данную дату запись закончилась
                            </div>
                        ) : (date.next[currentDay - 1].time.map((item, index) => (
                            <div key={`${item}_${index}`} onClick={() => handleActiveTime(item, index)} className={`${classes.itemTime} ${activeTime === index && classes.active}`}>
                                {item}
                            </div>))))
                }
                
            </div >
        </div>
    )
}

export default Time
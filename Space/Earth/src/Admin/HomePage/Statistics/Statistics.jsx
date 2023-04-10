import React from "react";
import TotalImg from '../../../img/admin/statistics/total.svg'
import PandingImg from '../../../img/admin/statistics/panding.svg'
import DoneImg from '../../../img/admin/statistics/done.svg'

import classes from './Statistics.module.scss'

function Statistics() {
    return (
        <div className={classes.statistics}>

            <div className={classes.statistics__item}>
                <img src={TotalImg} alt="total" />
                <div>
                    <h2>47</h2>
                    <p>Всего записей</p>
                </div>
            </div>

            <div className={classes.statistics__item}>
                <img src={PandingImg} alt="panding" />
                <div>
                    <h2>56</h2>
                    <p>Записи в ожидании</p>
                </div>
            </div>


            <div className={classes.statistics__item}>
                <img src={DoneImg} alt="done" />
                <div>
                    <h2>88</h2>
                    <p>Выполнененных записей</p>
                </div>
            </div>

        </div>
    )
}

export default Statistics;
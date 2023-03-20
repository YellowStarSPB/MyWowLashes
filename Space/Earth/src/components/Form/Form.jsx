import React from "react";
import TimeOrder from "../TimeOrder/TimeOrder";
import { IMaskInput } from "react-imask";
import CommunicationMethod from "./Communicationmethod/CommunicationMethod";

import classes from './Form.module.scss'

function Form({ formData, setFormData, onChangeTime, onChangeMethod, addNewOrder }) {
    const [showTime, setShowTime] = React.useState(false)

    return (
        <form className={classes.form}>
            {/* form input */}
            <div className={classes.form__info}>
                <input
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                    type="text"
                    placeholder='Ваше Имя' />

                <input
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email}
                    type="email"
                    placeholder='Ваш E-mail' />
            </div>

            <div className={classes.form__info}>
                <input
                    onChange={(e) => setFormData({ ...formData, inst: e.target.value })}
                    value={formData.inst}
                    type="text"
                    placeholder='Ваш Instagram' />

                <IMaskInput
                    onClick={() => setShowTime(true)}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    value={formData.phone}
                    mask={"+7(000)000-00-00"}
                    type="tel"
                    placeholder='Ваш Телефон' />
            </div>

            <div className={`${classes.form__info} ${classes.form__info_date}`}>
                <input
                    onClick={() => setShowTime(true)}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    value={formData.date}
                    min={new Date()}
                    type="date" />
            </div>

            {/* show/hidden time */}
            {showTime ? <TimeOrder onChangeTime={onChangeTime} /> : ''}
            {/* message input */}
            <div className={classes.form__message}>
                <textarea
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    value={formData.message}
                    placeholder='Ваше сообщение' />
            </div>
            <CommunicationMethod onChangeMethod={onChangeMethod} />
            <button onClick={(e) => addNewOrder(e)} type="submit" className='btn'>Записаться</button>
        </form>
    )
}

export default Form;
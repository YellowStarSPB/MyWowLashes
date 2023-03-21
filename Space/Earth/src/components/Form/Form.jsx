import React from "react";
import TimeOrder from "./TimeOrder/TimeOrder";
import { IMaskInput } from "react-imask";
import CommunicationMethod from "./Communicationmethod/CommunicationMethod";

import classes from './Form.module.scss'

function Form({ formData, setFormData, onChangeTime, onChangeMethod, addNewOrder }) {
    const method = ['Мессенджер', 'E-mail', 'Instagram', 'ВКонтакте']
    const [checked, setChecked] = React.useState('Мессенджер')

    const [showTime, setShowTime] = React.useState(false)


    const onSelectMethod = (value) => {
        onChangeMethod(value)
        setChecked(value)
    }
    return (
        <form className={classes.form}>
            <CommunicationMethod method={method} checked={checked} onSelectMethod={onSelectMethod} />

            {/* form input */}
            <div className={classes.form__info}>
                <input
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                    type="text"
                    placeholder='Ваше Имя' />
                {checked === 'Мессенджер' ? (
                    <IMaskInput
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        value={formData.phone}
                        mask={"+7(000)000-00-00"}
                        type="tel"
                        placeholder='Ваш Телефон' />
                ) : ''}
                {checked === 'E-mail' ? (
                    <input
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        value={formData.email}
                        type="email"
                        placeholder='Ваш E-mail' />
                ) : ''}
                {checked === 'Instagram' ? (
                    <input
                        onChange={(e) => setFormData({ ...formData, inst: e.target.value })}
                        value={formData.inst}
                        type="text"
                        placeholder='Ваш Instagram' />
                ) : ''}
                {checked === 'ВКонтакте' ? (
                    <input
                        onChange={(e) => setFormData({ ...formData, vk: e.target.value })}
                        value={formData.vk}
                        type="text"
                        placeholder='Ваш ВКонтакте' />
                ) : ''}
            </div>
            <h2>Дополнительный способ связи</h2>
            <div className={`${classes.form__info} ${classes.form__info_date}`}>
                {checked === 'E-mail' ? (
                    <IMaskInput
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        value={formData.phone}
                        mask={"+7(000)000-00-00"}
                        type="tel"
                        placeholder='Ваш Телефон' />
                ) : (<input
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email}
                    type="email"
                    placeholder='Ваш E-mail' />)}
            </div>

            <div className={`${classes.form__info} ${classes.form__info_date}`}>
                <input
                    onClick={() => setShowTime(true)}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    value={formData.date}
                    min={formData.date}
                    /* max={`${new Date().toISOString().substring(0, 7)}-31`} */
                    type="date" />
            </div>

            {/* show/hidden time */}
            {/* {showTime ? <TimeOrder onChangeTime={onChangeTime} /> : ''} */}
            <TimeOrder onChangeTime={onChangeTime} />
            {/* message input */}
            <div className={classes.form__message}>
                <textarea
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    value={formData.message}
                    placeholder='Оставить комментарий' />
            </div>

            <button onClick={(e) => addNewOrder(e)} type="submit" className='btn'>Записаться</button>
        </form>
    )
}

export default Form;
import React from "react";
import { IMaskInput } from "react-imask";
import CommunicationMethod from "./Communicationmethod/CommunicationMethod";
import Calendar from './Calendar/Calendar'
import classes from './Form.module.scss'
import Time from "./Calendar/Time/Time";


const method = ['Мессенджер', 'E-mail', 'Instagram', 'ВКонтакте']


function Form() {
    const [checked, setChecked] = React.useState('Мессенджер')
    const [newOrder, setNewOrder] = React.useState({})

    const [formData, setFormData] = React.useState(
        {
            name: '',
            email: '',
            inst: '',
            phone: '',
            vk: '',
            date: `${new Date().toISOString().substring(0, 10)}`,
            time: '10:00 - 13:00',
            message: '',
            methodConnect: 'Мессенджер',

        })

    //Функция изменения стейта для поля метод связи
    const onSelectMethod = React.useCallback((value) => {
        setChecked(value)
        setFormData(prev => {
            return { ...prev, methodConnect: value }
        })
    }, [])
    //Функция выбора времени
    /* const onSelectTime = (time) => {
        setFormData({ ...formData, time: time })
    } */
    const onSelectTime = React.useCallback((time) => {
        setFormData(prev => {
            return { ...prev, time: time }
        })
    }, [])
    //Функция выбора даты в календаре
    /* const onSelectDate = (day) => {
        setFormData({ ...formData, date: `${new Date().toISOString().substring(0, 8)}${day}` })
    } */
    const onSelectDate = React.useCallback((day) => {
        setFormData(prev => {
            return { ...prev, date: `${new Date().toISOString().substring(0, 8)}${day}` }
        })
    }, [])

    function addNewOrder(e) {
        e.preventDefault()
        const newTalon = {
            talon: {
                name: formData.name.trim(),
                email: formData.email.trim(),
                inst: formData.inst.trim(),
                phone: formData.phone,
                vk: formData.vk.trim(),
                date: formData.date,
                time: formData.time,
                message: formData.message.trim(),
                methodConnect: formData.methodConnect,
            }
        }
        setNewOrder(newTalon)
    }
    console.log(newOrder)
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

                {checked === 'Мессенджер' && <IMaskInput
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    value={formData.phone}
                    mask={"+7(000)000-00-00"}
                    type="tel"
                    placeholder='Ваш Телефон' />}

                {checked === 'E-mail' && <input
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email}
                    type="email"
                    placeholder='Ваш E-mail' />}

                {checked === 'Instagram' && <input
                    onChange={(e) => setFormData({ ...formData, inst: e.target.value })}
                    value={formData.inst}
                    type="text"
                    placeholder='Ваш Instagram' />}

                {checked === 'ВКонтакте' && <input
                    onChange={(e) => setFormData({ ...formData, vk: e.target.value })}
                    value={formData.vk}
                    type="text"
                    placeholder='Ваш ВКонтакте' />
                }

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

            <Calendar onSelectTime={onSelectTime} onSelectDate={onSelectDate} />


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
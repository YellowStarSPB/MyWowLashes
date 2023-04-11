import React from "react";
import { IMaskInput } from "react-imask";
import CommunicationMethod from "./Communicationmethod/CommunicationMethod";
import Calendar from './Calendar/Calendar'
import classes from './Form.module.scss'
import Time from "./Calendar/Time/Time";
import { date } from './Calendar/data'


const method = ['Мессенджер', 'E-mail', 'Instagram', 'ВКонтакте']


function Form() {
    //Method state
    const [checked, setChecked] = React.useState('Мессенджер')
    //Talon/order state
    const [newOrder, setNewOrder] = React.useState({})
    //Current day in calendar
    const [currentDay, setCurrentDay] = React.useState(Number(new Date().toISOString().slice(8, 10)))
    const [nextMonth, setNextMonth] = React.useState(true)
    const [fetchData, setFetchData] = React.useState(date)

    //Form data state
    const [formData, setFormData] = React.useState(
        {
            name: '',
            email: '',
            inst: '',
            phone: '',
            vk: '',
            date: `${new Date().toISOString().substring(0, 8)}${currentDay}`,
            time: '',
            message: '',
            methodConnect: 'Мессенджер',

        })
    console.log(newOrder)
    //Функция изменения стейта для поля метод связи
    const onSelectMethod = React.useCallback((value) => {
        setChecked(value)
        setFormData(prev => {
            return { ...prev, methodConnect: value }
        })
    }, [])

    const onSelectTime = React.useCallback((time) => {
        setFormData(prev => {
            return { ...prev, time: time }
        })
    }, [])

    const onSelectDate = React.useCallback((day) => {

        if (nextMonth) {
            setFormData(prev => {
                return { ...prev, date: `${new Date().toISOString().substring(0, 8)}${day}` }
            })
        } else if (!nextMonth) {
            setFormData(prev => {
                return { ...prev, date: `${new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1).toISOString().substring(0, 8)}${day}` }
            })
        }

    }, [nextMonth])


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
        fetch('http://localhost:1001/api/admin/record', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "call": "vk:nah",
                "description": "описание",
                "email": "banan@mail.ru",
                "status": "waiting",
                "time": "2023-01-02T10:30:00Z",
                "username": "OLEG"
            })
        })
            .then(res => res.json())
            .then(json => console.log(json))

    }


    return (
        fetchData.error !== '' ? (<div>Что-то пошло не так</div>) : (<form className={classes.form}>
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

            <Calendar
                currentDay={currentDay}
                setCurrentDay={setCurrentDay}
                onSelectDate={onSelectDate}
                fetchData={fetchData}
                setNextMonth={setNextMonth}
                nextMonth={nextMonth}
            />


            {<Time date={date} currentDay={currentDay} onSelectTime={onSelectTime} nextMonth={nextMonth} />}


            <div className={classes.form__message}>
                <textarea
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    value={formData.message}
                    placeholder='Оставить комментарий' />
            </div>

            <button onClick={(e) => addNewOrder(e)} type="submit" className='btn'>Записаться</button>
        </form>)


    )
}

export default Form;
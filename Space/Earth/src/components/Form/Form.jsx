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
    const [nextMonth, setNextMonth] = React.useState(false)
    const [fetchData, setFetchData] = React.useState(date)
    //Form data state
    console.log(currentDay)
    console.log(nextMonth)
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
    const [dirtyInput, setDirtyInput] = React.useState(
        {
            name: false,
            email: false,
            inst: false,
            phone: false,
            vk: false,
            message: false,
        })
    const [validInput, setValidInput] = React.useState(
        {
            name: false,
            email: false,
            inst: false,
            phone: false,
            vk: false,
            message: false,
        })

    const [inputError, setInputError] = React.useState(
        {
            name: 'Поле не может быть пустым',
            email: 'Поле не может быть пустым',
            inst: 'Поле не может быть пустым',
            phone: 'Поле не может быть пустым',
            vk: 'Поле не может быть пустым',
            message: 'Поле не может быть пустым',


        })
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setDirtyInput({ ...dirtyInput, email: true })
                break
            case 'phone':
                setDirtyInput({ ...dirtyInput, phone: true })
                break
            case 'name':
                setDirtyInput({ ...dirtyInput, name: true })
                break
            case 'vk':
                setDirtyInput({ ...dirtyInput, vk: true })
                break
            case 'inst':
                setDirtyInput({ ...dirtyInput, inst: true })
                break
        }
    }
    const handleChangeInput = (e) => {
        e.preventDefault()
        //email validation
        if (e.target.name === 'email') {

            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!re.test(String(e.target.value).toLowerCase())) {
                setInputError({ ...inputError, email: 'Некорректный E-mail' })
                setValidInput({ ...validInput, email: false })
            } else {
                setValidInput({ ...validInput, email: true })
                setInputError({ ...inputError, email: 'Отлично!' })
            }
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
            }
            setFormData(prev => ({ ...prev, email: e.target.value }))
            //phone validation
        } else if (e.target.name === 'phone') {
            setFormData(prev => ({ ...prev, phone: e.target.value }))
            if (e.target.value.length < 16) {
                setInputError({ ...inputError, phone: 'Некорректный номер телефона' })
                setValidInput({ ...validInput, phone: false })
            } else {
                setValidInput({ ...validInput, phone: true })
                setInputError({ ...inputError, phone: 'Отлично!' })
            }
            //name validation
        } else if (e.target.name === 'name') {
            const re = /[^a-zA-Z+A-zА-яЁё]/g
            if (e.target.value.length > 16) {
                e.target.value = e.target.value.slice(0, 16)
            }
            e.target.value = e.target.value.replace(re, '')


            if (e.target.value.length < 1) {
                setInputError({ ...inputError, name: 'Поле должно быть не меньше 1 символа' })
                setValidInput({ ...validInput, name: false })
            } else {
                setValidInput({ ...validInput, name: true })
                setInputError({ ...inputError, name: 'Отлично!' })
            }

            setFormData(prev => ({ ...prev, name: e.target.value }))
            //vk validation
        } else if (e.target.name === 'vk') {

            const re = /[^a-zA-Z+A-zА-яЁё+0-9]/g
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
            }
            e.target.value = e.target.value.replace(re, '')

            if (e.target.value.length < 10) {
                setInputError({ ...inputError, vk: 'Поле должно быть не меньше 10 символов' })
                setValidInput({ ...validInput, vk: false })
            } else {
                setValidInput({ ...validInput, vk: true })
                setInputError({ ...inputError, vk: 'Отлично!' })
            }
            setFormData(prev => ({ ...prev, vk: e.target.value }))
            //inst validation
        } else if (e.target.name === 'inst') {

            const re = /[^a-zA-Z+A-zА-яЁё+0-9]/g
            if (e.target.value.length > 30) {
                e.target.value = e.target.value.slice(0, 30)
            }
            e.target.value = e.target.value.replace(re, '')

            if (e.target.value.length < 3) {
                setInputError({ ...inputError, inst: 'Поле должно быть не меньше 3 символов' })
                setValidInput({ ...validInput, inst: false })
            } else {
                setValidInput({ ...validInput, inst: true })
                setInputError({ ...inputError, inst: 'Отлично!' })
            }
            setFormData(prev => ({ ...prev, inst: e.target.value }))
        }
        /* setFormData(prev => ({...prev, [e.target.name]: e.target.value})) */
    }

    //Функция изменения метода связи
    const onSelectMethod = React.useCallback((value) => {
        setChecked(value)
        setFormData(prev => {
            return { ...prev, methodConnect: value }
        })
    }, [])
    //Функция изменения времени записи
    const onSelectTime = React.useCallback((time) => {
        setFormData(prev => {
            return { ...prev, time: time }
        })
    }, [])
    //Функция изменения дня записи
    const onSelectDate = React.useCallback((day) => {
        if (!nextMonth) {
            setFormData(prev => {
                return { ...prev, date: `${new Date().toISOString().substring(0, 8)}${day}` }
            })
        } else if (nextMonth) {
            setFormData(prev => {
                return { ...prev, date: `${new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1).toISOString().substring(0, 8)}${day}` }
            })
        }
    }, [nextMonth])


    // Функция добавления и отправки формы
    async function addNewOrder(e) {
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

        /* await fetch('http://localhost:1001/api/admin/record', {
            method: 'POST',
            body: JSON.stringify({
                call: 'VK',
                description: "опgggисание111",
                email: "slava@mail.ru",
                status: "waitinggg111",
                time: "2023-04-02T10:30:00Z",
                userName: "fdsf",
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((res) => res.json())
            .then((data) => console.log(data)) */
    }

    console.log(formData)



    return (
        fetchData.error !== null ? (<div>Что-то пошло не так</div>
        ) : (<form
            onSubmit={(e) => handleChangeInput(e)}
            className={classes.form}>
            <CommunicationMethod method={method} checked={checked} onSelectMethod={onSelectMethod} />

            {/* form input */}
            <div className={classes.form__info}>
                <div className={classes.wrapperInput}>
                    <input
                        onChange={(e) => handleChangeInput(e)}
                        name="name"
                        onInput={(e) => handleChangeInput(e)}
                        onBlur={(e) => blurHandler(e)}
                        value={formData.name}
                        type="text"
                        placeholder='Ваше Имя' />
                    {(dirtyInput.name && inputError.name) &&
                        <div className={validInput.name ? classes.valid : classes.notValid}>
                            {inputError.name}
                        </div>}
                </div>
                {checked === 'Мессенджер' && (
                    <div className={classes.wrapperInput}>
                        <IMaskInput
                            onChange={(e) => handleChangeInput(e)}
                            value={formData.phone}
                            mask={"+7(000)000-00-00"}
                            type="tel"
                            name='phone'
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Ваш Телефон' />
                        {(dirtyInput.phone && inputError.phone) &&
                            <div className={validInput.phone ? classes.valid : classes.notValid}>
                                {inputError.phone}
                            </div>}
                    </div>)}


                {checked === 'E-mail' && (
                    <div className={classes.wrapperInput}>
                        <input
                            onChange={(e) => handleChangeInput(e)}
                            value={formData.email}
                            type="email"
                            name="email"
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Ваш E-mail' />
                        {(dirtyInput.email && inputError.email) &&
                            <div className={validInput.email ? classes.valid : classes.notValid}>
                                {inputError.email}
                            </div>}

                    </div>)}

                {checked === 'Instagram' && (
                    <div className={classes.wrapperInput}>
                        <input
                            onChange={(e) => handleChangeInput(e)}
                            name="inst"
                            onInput={(e) => handleChangeInput(e)}
                            onBlur={(e) => blurHandler(e)}
                            value={formData.inst}
                            type="text"
                            placeholder='Ваш Instagram' />
                        {(dirtyInput.inst && inputError.inst) &&
                            <div className={validInput.inst ? classes.valid : classes.notValid}>
                                {inputError.inst}
                            </div>}
                    </div>)}

                {checked === 'ВКонтакте' && (
                    <div className={classes.wrapperInput}>
                        <input
                            onChange={(e) => handleChangeInput(e)}
                            value={formData.vk}
                            type="text"
                            name="vk"
                            onBlur={(e) => blurHandler(e)}
                            onInput={(e) => handleChangeInput(e)}
                            placeholder='Ваш ВКонтакте' />
                        {(dirtyInput.vk && inputError.vk) &&
                            <div className={validInput.vk ? classes.valid : classes.notValid}>
                                {inputError.vk}
                            </div>}
                    </div>)}

            </div>
            <h2>Дополнительный способ связи</h2>
            <div className={`${classes.form__info} ${classes.form__info_date}`}>
                {checked === 'E-mail' ? (
                    <div className={classes.wrapperInput}>
                        <IMaskInput
                            onChange={(e) => handleChangeInput(e)}
                            value={formData.phone}
                            mask={"+7(000)000-00-00"}
                            type="tel"
                            name='phone'
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Ваш Телефон' />
                        {(dirtyInput.phone && inputError.phone) &&
                            <div className={validInput.phone ? classes.valid : classes.notValid}>
                                {inputError.phone}
                            </div>}
                    </div>
                ) : (<div className={classes.wrapperInput}>
                        <input
                            onChange={(e) => handleChangeInput(e)}
                            value={formData.email}
                            type="email"
                            name="email"
                            onBlur={(e) => blurHandler(e)}
                            placeholder='Ваш E-mail' />
                        {(dirtyInput.email && inputError.email) &&
                            <div className={validInput.email ? classes.valid : classes.notValid}>
                                {inputError.email}
                            </div>}

                    </div>)}
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
import React from "react";
import { IMaskInput } from "react-imask";
import CommunicationMethod from "./Communicationmethod/CommunicationMethod";
import Calendar from './Calendar/Calendar'
import classes from './Form.module.scss'
import { date } from './Calendar/data'
import useValidateInput from "../../hook/useValidateInput";
import ErrorForm from "./ErrorForm/ErrorForm";


function Form() {
    //стейт заказа
    const [newOrder, setNewOrder] = React.useState({})
    //стейт данных с сервера для отображения календаря
    const [fetchData, setFetchData] = React.useState(date)
    const [errorValid, setErrorValid] = React.useState(false)
    //стейт данных из формы
    const [formData, setFormData] = React.useState(
        {
            name: '',
            email: '',
            inst: '',
            phone: '',
            vk: '',
            date: `${new Date().toISOString().substring(0, 10)}`,
            time: '',
            message: '',
            methodConnect: 'Мессенджер',
        })
    console.log(formData)
    const {
        handleChangeInput,
        blurHandler,
        inputError,
        validInput,
        dirtyInput } = useValidateInput(setFormData)

    // Функция добавления и отправки формы
    async function addNewOrder(e) {
        e.preventDefault()
        if (formData.methodConnect === 'Мессенджер' || formData.methodConnect === 'E-mail') {
            if (validInput.email !== false && validInput.name !== false && validInput.phone !== false) {
                if (formData.date !== '' && formData.time !== '') {
                    const newTalon = {
                        talon: {
                            name: formData.name.trim(),
                            email: formData.email.trim(),
                            phone: formData.phone,
                            date: formData.date,
                            time: formData.time,
                            message: formData.message.trim(),
                            methodConnect: formData.methodConnect,
                        }
                    }
                    setNewOrder(newTalon)
                } else {
                    setErrorValid(true)
                }
            } else {
                setErrorValid(true)
            }
        }
        if (formData.methodConnect === 'Instagram') {
            if (validInput.email !== false && validInput.name !== false && validInput.inst !== false) {
                if (formData.date !== '' && formData.time !== '') {
                    const newTalon = {
                        talon: {
                            name: formData.name.trim(),
                            email: formData.email.trim(),
                            inst: formData.inst,
                            date: formData.date,
                            time: formData.time,
                            message: formData.message.trim(),
                            methodConnect: formData.methodConnect,
                        }
                    }
                    setNewOrder(newTalon)
                } else {
                    setErrorValid(true)
                }
            } else {
                setErrorValid(true)
            }
        }
        if (formData.methodConnect === 'ВКонтакте') {
            if (validInput.email !== false && validInput.name !== false && validInput.vk !== false) {
                if (formData.date !== '' && formData.time !== '') {
                    const newTalon = {
                        talon: {
                            name: formData.name.trim(),
                            email: formData.email.trim(),
                            vk: formData.vk,
                            date: formData.date,
                            time: formData.time,
                            message: formData.message.trim(),
                            methodConnect: formData.methodConnect,
                        }
                    }
                    setNewOrder(newTalon)
                } else {
                    setErrorValid(true)
                }
            } else {
                setErrorValid(true)
            }
        }


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



    return (
        fetchData.error !== null ? (<div>Что-то пошло не так</div>
        ) : (<form
            className={classes.form}>
            <CommunicationMethod setFormData={setFormData} />

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
                {formData.methodConnect === 'Мессенджер' && (
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


                {formData.methodConnect === 'E-mail' && (
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

                {formData.methodConnect === 'Instagram' && (
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

                {formData.methodConnect === 'ВКонтакте' && (
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
                {formData.methodConnect === 'E-mail' ? (
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
                fetchData={fetchData}
                setFormData={setFormData}
            />

            <div className={classes.form__message}>
                <textarea
                    onChange={(e) => handleChangeInput(e)}
                    name="message"
                    onInput={(e) => handleChangeInput(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={formData.message}
                    placeholder='Оставить комментарий' />
            </div>

            <button
                onClick={addNewOrder}
                type="submit"
                className={formData.time && formData.date !== '' ? 'btn' : 'btn-disabled'}
                disabled={!formData.time && formData.date}
            >
                {formData.time && formData.date !== '' ? 'Записаться' : 'Выберите дату и время'}
            </button>
            {errorValid && <ErrorForm setErrorValid={setErrorValid} />}
        </form>)


    )
}

export default Form;
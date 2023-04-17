import React from "react";
import { IMaskInput } from "react-imask";
import CommunicationMethod from "./Communicationmethod/CommunicationMethod";
import Calendar from './Calendar/Calendar'
import classes from './Form.module.scss'
import Time from "./Calendar/Time/Time";
import { date } from './Calendar/data'
import useValidateInput from "../../hook/useValidateInput";


function Form() {
    const [newOrder, setNewOrder] = React.useState({})
    //Current day in calendar
    const [currentDay, setCurrentDay] = React.useState(Number(new Date().toISOString().slice(8, 10)))
    const [nextMonth, setNextMonth] = React.useState(false)
    const [fetchData, setFetchData] = React.useState(date)

    const { handleChangeInput,
        blurHandler,
        onSelectTime,
        onSelectDate,
        onSelectMethod,
        inputError,
        validInput,
        dirtyInput,
        formData,
        checked, } = useValidateInput(currentDay, nextMonth)
    
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
            className={classes.form}>
            <CommunicationMethod checked={checked} onSelectMethod={onSelectMethod} />

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
                    onChange={(e) => handleChangeInput(e)}
                    name="message"
                    onInput={(e) => handleChangeInput(e)}
                    onBlur={(e) => blurHandler(e)}
                    value={formData.message}
                    placeholder='Оставить комментарий' />
            </div>

            <button onClick={(e) => addNewOrder(e)} type="submit" className='btn'>Записаться</button>
        </form>)


    )
}

export default Form;
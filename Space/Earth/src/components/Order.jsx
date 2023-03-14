import React from "react";
import WomanImg from '../img/contact/woman.png'
import { motion } from "framer-motion";
import { transition1 } from "../transition1";

function Order() {
    const [nameInput, setNameInput] = React.useState('');
    const [emailInput, setEmailInput] = React.useState('');
    const [instInput, setInstInput] = React.useState('');
    const [messageInput, setMessageInput] = React.useState('');
    const [dateInput, setDateInput] = React.useState('');

    function onChangeNameInput(value) {
        setNameInput(value)
    }
    function onChangeEmailInput(value) {
        setEmailInput(value)
    }
    function onChangeInstInput(value) {
        setInstInput(value)
    }
    function onChangeDateInput(value) {
        setDateInput(value)
    }
    function onChangeMessageInput(value) {
        setMessageInput(value)
        console.log(value)
    }


    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='sectionOrder'>
            <div>
                <div className='orderWrapper'>
                    {/* text & form */}
                    <div className='orderWrapper__text'>
                        <h1 className="orderWrapper__title">Contact Me</h1>
                        <p className="orderWrapper__subtitle">I would love to get suggestion from you</p>

                        <form className='form'>
                            <div className='form__info'>
                                <input onChange={(e) =>onChangeNameInput(e.target.value)} value={nameInput} type="text" placeholder='Ваше имя' />

                                <input onChange={(e) => onChangeEmailInput(e.target.value)} value={emailInput} type="email" placeholder='Ваш email' />
                            </div>

                            <div className='form__info'>
                                <input onChange={(e) => onChangeInstInput(e.target.value)} value={instInput} type="text" placeholder='Ваш Instagram' />

                                <input onChange={(e) => onChangeDateInput(e.target.value)} value={dateInput} type="date"  />
                            </div>
                            <div className='form__message'>
                                <textarea onChange={(e) => onChangeMessageInput(e.target.value)} value={messageInput} placeholder='Ваше сообщение' />
                            </div>
                            <button type="submit" className='btn'>Записаться</button>

                        </form>
                    </div>
                    {/* image */}
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ transition: transition1, duration: 1.5 }}
                        className='imageWrapper'
                        >
                        <img src={WomanImg} alt="img" />
                    </motion.div>
                </div>
            </div>
        </motion.section>

    )
}

export default Order;
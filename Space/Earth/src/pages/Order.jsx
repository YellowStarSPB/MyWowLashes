import React from "react";
import WomanImg from '../img/contact/woman.png'
import { motion } from "framer-motion";
import { transition1 } from "../transition1";

import Form from "../components/Form/Form";


function Order() {
    const [formData, setFormData] = React.useState(
        { name: '', email: '', inst: '', date: '', message: '', time: '', methodConnect: 'Мессенджер', phone: '' })
    const [newOrder, setNewOrder] = React.useState({})


    const onChangeTime = (value) => {
        setFormData({ ...formData, time: value })
    }
    const onChangeMethod = (value) => {
        setFormData({ ...formData, methodConnect: value })
    }

    function addNewOrder(e) {
        /* e.preventDefault() */

        const newOrder = {
            talon: { ...formData }
        }
        setNewOrder(JSON.stringify(newOrder))
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
                        <h1 className="orderWrapper__title">Записаться</h1>
                        <p className="orderWrapper__subtitle">I would love to get suggestion from you</p>

                        <Form
                            formData={formData}
                            setFormData={setFormData}
                            onChangeTime={onChangeTime}
                            onChangeMethod={onChangeMethod}
                            addNewOrder={addNewOrder}
                        />
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
                <div>
                    <h2>Текущая инфа по заказу</h2>
                    <p>name: {formData.name}</p>
                    <p>email: {formData.email}</p>
                    <p>inst: {formData.inst}</p>
                    <p>time: {formData.time}</p>
                    <p>date: {formData.date}</p>
                    <p>message: {formData.message}</p>
                    <p>methodConnect: {formData.methodConnect}</p>
                </div>

            </div>
        </motion.section>
    )
}

export default Order;
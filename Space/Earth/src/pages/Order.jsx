import React from "react";
import WomanImg from '../img/contact/woman.png'

/* TODO 
* убрать статику фото, заменить на ссылки
*/
import { motion } from "framer-motion";
import { transition1 } from "../transition1";

import Form from "../components/Form/Form";


function Order() {
    const [formData, setFormData] = React.useState(
        {
            name: '',
            email: '',
            inst: '',
            phone: '',
            vk: '',
            date: new Date().toISOString().substring(0, 10),
            time: '10:00 - 13:00',
            message: '',
            methodConnect: 'Мессенджер',

        })

    const [newOrder, setNewOrder] = React.useState({})


    const onChangeTime = (value) => {
        setFormData({ ...formData, time: value })
    }
    const onChangeMethod = (value) => {
        setFormData({ ...formData, methodConnect: value })
        setFormData({
            name: formData.name,
            email: '',
            inst: '',
            phone: '',
            vk: '',
            date: new Date().toISOString().substring(0, 10),
            time: formData.time,
            message: '',
            methodConnect: 'Мессенджер',

        })

    }

    function addNewOrder(e) {
        e.preventDefault()
        const newTalon = {
            talon: { ...formData }
        }
        setNewOrder(newTalon)
        /* console.log(newOrder) */
        /* console.log(JSON.stringify(newOrder)) */
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
                        transition={{ transition: transition1, duration: 0.7 }}
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
                    <p>vk: {formData.vk}</p>
                    <p>phone: {formData.phone}</p>
                    <p>message: {formData.message}</p>
                    <p>time: {formData.time}</p>
                    <p>date: {formData.date}</p>
                    <p>methodConnect: {formData.methodConnect}</p>
                </div>
            </div>
        </motion.section>
    )
}

export default Order;
import React from "react";
import { Link } from "react-router-dom";
import WomanImg from '../img/contact/woman.png'
import { animate, motion } from "framer-motion";
import { transition1 } from "../transition1";

function Order() {
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='sectionOrder'>
            <div>
                <div className='orderWrapper'>
                    {/* bg  */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={transition1}
                        className='bg'></motion.div> */}
                    {/* text & form */}
                    <div className='orderWrapper__text'>
                        <h1 className="orderWrapper__title">Contact Me</h1>
                        <p className="orderWrapper__subtitle">I would love to get suggestion from you</p>

                        <form className='form'>
                            <div className='form__info'>
                                <input type="text" placeholder='Ваше имя' />

                                <input type="email" placeholder='Ваш email' />
                            </div>

                            <div className='form__info'>
                                <input type="text" placeholder='Ваш Instagramm' />

                                <input type="date"  />
                            </div>
                            <div className='form__message'>
                                <textarea placeholder='Ваше сообщение' />
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
                        className=''>
                        <img src={WomanImg} alt="img" />
                    </motion.div>
                </div>
            </div>
        </motion.section>

    )
}

export default Order;
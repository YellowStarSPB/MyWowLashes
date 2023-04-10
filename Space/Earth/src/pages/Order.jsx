import React from "react";
import WomanImg from '../img/contact/woman.png'
import { motion } from "framer-motion";
import { transition1 } from "../transition1";

import Form from "../components/Form/Form";

function Order() {

    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='sectionOrder'>
            <div className='orderWrapper'>
                {/* text & form */}
                <div className='orderWrapper__text'>
                    <h1 className="orderWrapper__title">Записаться</h1>
                    <p className="orderWrapper__subtitle">I would love to get suggestion from you</p>

                    <Form />
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
        </motion.section>
    )
}

export default Order;
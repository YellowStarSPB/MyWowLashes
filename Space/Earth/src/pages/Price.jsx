import React from "react";
import CardPrice from "../components/CardPrice/CardPrice";
import { motion } from "framer-motion";
import { transition1 } from "../transition1";
import { Link } from "react-router-dom";



function Price() {

    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            /* initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1} */
            className="sectionPrice">
            <div>
                <h2>Цены на услуги</h2>
            </div>
            <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={transition1}
                className="cardWrapper">

                {[...Array(10)].map(item => <Link to={'/order'} ><CardPrice /></Link>)}

            </motion.div>
        </motion.section>
    )
}

export default Price;
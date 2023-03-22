import React from "react";
import CardPrice from "../components/CardPrice/CardPrice";
import { motion } from "framer-motion";
import { transition1 } from "../transition1";
import { Link } from "react-router-dom";



function Price() {

    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="sectionPrice">
            <div>
                <h2>Цены на услуги</h2>
            </div>
            <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={transition1}
                className="cards">

                {[...Array(10)].map((item, index) => <CardPrice key={`${item}_${index}`}/>)}


            </motion.div>
        </motion.section>
    )
}

export default Price;
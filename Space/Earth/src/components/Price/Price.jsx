import React from "react";
import CardPrice from "./CardPrice/CardPrice";
import { motion } from "framer-motion";
import { transition1 } from "../../transition1";



function Price() {
    const [arr, setArr] = React.useState(Array(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5))

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
                {arr.map(item => <CardPrice />)}
            </motion.div>
        </motion.section>
    )
}

export default Price;
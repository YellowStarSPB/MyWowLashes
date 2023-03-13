import React from "react";
import { Link } from "react-router-dom";
import Woman2 from '../img/about/woman.png'
import { transition1 } from "../transition1";
import { motion } from "framer-motion";


function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition1}
            className="sectionAbout">
            {/* image */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                className="sectionAbout__img" id={'about'}>
                <img src={Woman2} alt="Me" />
            </motion.div>
            {/* text */}
            <motion.div
                initial={{ opacity: 0, y: '-80%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-80%' }}
                transition={transition1}
                className="sectionAbout__text">
                <motion.div
                    initial={{ opacity: 0, y: '-80%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-80%' }}
                    transition={transition1}
                >
                    <h2>About me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus scelerisque viverra at id aenean scelerisque. Nec eget condimentum etiam leo.
                        <br />
                        <br />
                        Morbi at eget fusce feugiat volutpat et volutpat malesuada. At suspendisse nisi, quam neque in leo sollicitudin.</p>
                    <Link to={'/portfolio'}>
                        <button className="btn">View my works</button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default About;
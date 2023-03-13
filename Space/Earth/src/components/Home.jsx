import React from "react";
import { Link } from "react-router-dom";
import Woman from '../img/home/woman.jpg'
import { animate, motion } from "framer-motion";
import { transition1 } from "../transition1";

function Home() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition1}
            className="sectionPreview">
            <div className="sectionPreview__wrapper">
                {/* text */}
                {<motion.div
                    initial={{ opacity: 0, y: '-50%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-50%' }}
                    transition={transition1}
                    className="textContainer">
                    <h1 className="textContainer__title">Lash Maker <br />& Photographer</h1>
                    <p className="textContainer__subtitle">Kolpino, Saint-Pitersburg</p>
                    <Link to={'/about'}>
                        <button className="btn">Я тут:3</button>
                    </Link>
                </motion.div>}

                {/* img */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={transition1}
                    className="img__wrapper">
                    <img src={Woman} alt="Me" />
                </motion.div>
            </div>
        </motion.section>

    )
}

export default Home;
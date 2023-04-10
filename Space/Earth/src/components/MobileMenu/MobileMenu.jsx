import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

import classes from './MobileMenu.module.scss'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
}



const MobileMenu = ({ admin }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const onOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={classes.mobileNav} >
            {/* nav open button */}
            <div onClick={() => onOpenMenu()} className={classes.btnMenu}>
                <CgMenuRight />
            </div>
            {/* menu */}

            <motion.div
                animate={openMenu ? "open" : "closed"}
                variants={variants}
                className={classes.menuWrapper}>
                {/* icons close */}
                <div onClick={() => onOpenMenu()} className={`${classes.btnClose} ${openMenu ? `${classes.active}` : ''}`}>
                    <IoMdClose />
                </div>
                {/* menu list */}
                <ul className={classes.menuList}>
                    <li>
                        <Link onClick={() => setOpenMenu(false)} to='/'>Главная</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpenMenu(false)} to='/about'>Обо мне</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpenMenu(false)} to='/price'>Прайс</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpenMenu(false)} to='/portfolio'>Портфолио</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpenMenu(false)} to={'/order'}>Записаться</Link>
                    </li>
                    <li>
                        <Link className={classes.menuListBtn} onClick={() => setOpenMenu(false)} to={'/admin'}>{admin.login ? 'Админка' : 'Войти'}</Link>
                    </li>
                </ul>
            </motion.div>
        </nav>
    )
};


export default MobileMenu;
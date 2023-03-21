import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transition1";
import ItemGallery from "../components/ItemGallery/ItemGallery";
import FullItemGallery from "../components/ItemGallery/FullItemGallery/FullItemGallery";

function Portfolio() {
    const [categoryItems, setCategoryrItems] = React.useState(['all', 'fashion', 'portrait', 'urban', 'events', 'nature'])
    const [activeCategory, setActiveCategory] = React.useState(0);
    const [showFullitem, setShowFullItem] = React.useState(false);
    const [fullItem, setFullItem] = React.useState({})

    const images = [
        { id: 1, imageUrl: "https://sun9-38.userapi.com/impg/MfYw0ttvtNWdxDWhEpJwPJPm6LExaNzqUTKOVA/ue8wO_nhWlQ.jpg?size=1990x2160&quality=96&sign=5275bc0e934256a3771b88908033ba14&type=album" },
        { id: 2, imageUrl: "https://sun9-1.userapi.com/impg/-fwFeOT1RiNdTvzI2n6_ApM0Ag79-JnX4V4jzQ/BynJId9QL7w.jpg?size=828x978&quality=96&sign=5e2d8b3b55b178a08a4bff4323782d9f&type=album" },
        { id: 3, imageUrl: "https://sun9-29.userapi.com/impg/y3X0zJaTvtmD0YAxUBG5SE1idCYLanR0Vj6OgQ/qE5RBwWGn-o.jpg?size=1620x2160&quality=96&sign=8af271899d2368cc33f76bffdb937d7b&type=album" },
        { id: 4, imageUrl: "https://sun9-22.userapi.com/impg/c858032/v858032633/1d4d91/vZQHOaYl6jw.jpg?size=1022x1472&quality=96&sign=6f9fc7a5238c6c28b354566c6fb859d8&type=album" },
        { id: 5, imageUrl: "https://sun9-28.userapi.com/impf/c858416/v858416623/35b84/0wt9vQ5EeD0.jpg?size=720x960&quality=96&sign=1a9d19f5559e7a814350342b2add3e5f&type=album" },
        /* { id: 6, imageUrl: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" },
        { id: 7, imageUrl: "https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" },
        { id: 8, imageUrl: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" },
        { id: 9, imageUrl: "https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" },
        { id: 10, imageUrl: "https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" }, */
    ]

    const onChangeCategory = (index) => {
        setActiveCategory(index)
    }

    const onShowItem = (item) => {
        setShowFullItem(!showFullitem)
        setFullItem(item)
    }


    return (
        <section className="sectionPortfolio">
            <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={transition1}
                className="portfolioContent">
                <h2>Portfolio</h2>
                <ul className="filters">
                    {categoryItems.map((item, index) => (
                        <li
                            key={`${item}_${index}`}
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onChangeCategory(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="grid-wrapper">
                    {images.map(item => <ItemGallery key={item.id} item={item} onShowItem={onShowItem} />)}
                </div>
                {showFullitem ? <FullItemGallery fullItem={fullItem} onShowItem={onShowItem} /> : ''}

            </motion.div>
        </section>
    )
}

export default Portfolio;
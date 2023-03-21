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
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
        { id: 4, imageUrl: "https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60" },
        { id: 5, imageUrl: "https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80" },
        { id: 6, imageUrl: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" },
        { id: 7, imageUrl: "https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" },
        { id: 8, imageUrl: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" },
        { id: 9, imageUrl: "https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" },
        { id: 10, imageUrl: "https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" },
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
            <div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
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
                {showFullitem ? <FullItemGallery fullItem={fullItem} onShowItem={onShowItem}/> : ''}

            </div>
        </section>
    )
}

export default Portfolio;
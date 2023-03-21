import React from "react";

import classes from './ItemGallery.module.scss'

function ItemGallery({ item, onShowItem }) {
    return (
        <div 
        className={classes.item}
        onClick={() => onShowItem(item)}>
            <img src={item.imageUrl} alt="GalleryItem" />
        </div>

    )

}

export default ItemGallery;
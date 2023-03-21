import React from "react";

import classes from './FullItemGallery.module.scss'

function FullItemGallery({ fullItem, onShowItem }) {

    return (
        <div className={classes.bg}>
            <div >
                <div onClick={() => onShowItem({})}>X</div>
                <img src={fullItem.imageUrl} alt="" />
            </div>
        </div>
    )
}

export default FullItemGallery;
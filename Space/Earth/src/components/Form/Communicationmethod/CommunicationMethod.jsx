import React from "react";
import classes from './CommunicationMethod.module.scss'

function CommunicationMethod({ onSelectMethod, method, checked }) {


    return (
        <div className={classes.connection}>
            <h2>Предпочитаемый способ связи</h2>
            <div className={classes.connection__items}>

                {method.map((item, index) => (
                    <label key={`${item}_${index}`}>
                        <input
                            type="radio"
                            checked={checked === item}
                            onChange={() => onSelectMethod(item)}
                        />
                        {item}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default React.memo(CommunicationMethod);
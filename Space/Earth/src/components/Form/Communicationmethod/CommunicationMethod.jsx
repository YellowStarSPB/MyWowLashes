import React from "react";
import classes from './CommunicationMethod.module.scss'

function CommunicationMethod({ onChangeMethod }) {
    const method= ['Мессенджер', 'E-mail', 'Instagram']
    const [checked, setChecked] = React.useState('Мессенджер')


    const onSelectMethod = (value) => {
        onChangeMethod(value)
        setChecked(value)
    }

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

export default CommunicationMethod;
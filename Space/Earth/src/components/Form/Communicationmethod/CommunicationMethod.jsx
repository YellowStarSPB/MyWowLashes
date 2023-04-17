import React from "react";
import classes from './CommunicationMethod.module.scss'

const method = ['Мессенджер', 'E-mail', 'Instagram', 'ВКонтакте']

function CommunicationMethod({ setFormData }) {
    //стейт метода связи
    const [methodConnect, setMethodConnect] = React.useState('Мессенджер')

    //хэндлнер выбора метода связи
    const onSelectMethod = (value) => {
        setMethodConnect(value)
        setFormData(prev => {
            return { ...prev, methodConnect: value }
        })
    }

    return (
        <div className={classes.connection}>
            <h2>Предпочитаемый способ связи</h2>
            <div className={classes.connection__items}>

                {method.map((item, index) => (
                    <label key={`${item}_${index}`}>
                        <input
                            type="radio"
                            checked={methodConnect === item}
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
import React from 'react'
import classes from './ErrorForm.module.scss'
function ErrorForm({ setErrorValid }) {

    return (
        <div className={classes.errorWrapper }>
            <div className={classes.errorInfo}>
                <h2>Заполните форму</h2>
                <p>Возможно вы забыли выбрать дату или время записи. <br /> Или не заполнили важные поля.</p>
                <button className={`btn ${classes.btn_error}`} onClick={() => setErrorValid(prev => !prev)}>Понятно</button>
            </div>
        </div>
    )
}

export default ErrorForm
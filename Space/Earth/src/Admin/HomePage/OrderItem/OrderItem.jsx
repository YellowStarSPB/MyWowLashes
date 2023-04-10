import React from "react";
import SettingsImg from '../../../img/admin/settings.svg'
import SettingsPopup from "../SettingsPopup/SettingsPopup";
import classes from './OrderItem.module.scss'

function OrderItem() {
    const [visiblePopup, setVisiblePopop] = React.useState(false)
    const onClickSettingsBtn = () => {
        setVisiblePopop(!visiblePopup)
    }
    return (
        <div className={classes.item}>
            <div className={classes.item__id}>#1</div>
            <div className={classes.item__info}>
                <div className={classes.item__name}>
                    <h3>Имя</h3>
                    <p>Слава Писюн</p>
                </div>
                <div className={classes.item__date}>
                    <h3>Дата записи</h3>
                    <p><strong>Дата</strong>: 25.12.1995</p>
                    <p><strong>Время:</strong> 18:00</p>
                </div>
                <div className={classes.item__contacts}>
                    <h3>Контакты</h3>
                    <p><strong>Телефон:</strong> 898989898</p>
                    <p><strong>E-mail:</strong> jhfdjkfhsj@majhfd.ru</p>
                    <p><strong>Instagram:</strong> hfghfsdhgfds</p>
                    <p><strong>ВКонтакте:</strong> рапвравпаровы</p>
                </div>
                <div className={classes.item__communication}>
                    <h3>Способ связи</h3>
                    <p>Instagram</p>
                </div>
                <div className={classes.item__status}>
                    <h3>Статус</h3>
                    <p>В ожидании</p>
                </div>
                <button onClick={onClickSettingsBtn} className={classes.item__settings}>
                    <img src={SettingsImg} alt="settings" />
                </button>
                {visiblePopup ? <SettingsPopup /> : ''}
            </div>
        </div>
    )
}

export default OrderItem;
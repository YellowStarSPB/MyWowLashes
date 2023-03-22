
import './_cardPrice.scss'

function CardPrice() {
    return (
        <div className="card">
            <img className='card__image'
            src="https://makeup.ru/storage/articles/70098/JJfngsYd17DKxHXroso0PI88Y344U7qUbxFgEmW5.png" 
            alt="" />
            <div className="card__overlay">
                <div className="card__header">
                    {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> */}
                    <div className="card__header-text">
                        <h3 className="card__title">Эффект "Барби"</h3>
                        <span className="card__price">2500 ₽</span>
                    </div>
                </div>
                <p className="card__description">Описание эффекта</p>
            </div>
        </div>
    )
}

export default CardPrice;
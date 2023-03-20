
import './_cardPrice.scss'

function CardPrice() {
    return (
        <div className="card">
            {/* image */}
            <div className='cardImage'>
                <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="item" />
            </div>
            {/* text */}
            <div className='cardInfo'>
                <div className='cardNameProduct'>
                    <h3>Вид наращивания</h3>
                </div>
                <div className='cardPriceBlock'>
                    <p>1900₽</p>
                </div>
            </div>
        </div>
    )
}

export default CardPrice;
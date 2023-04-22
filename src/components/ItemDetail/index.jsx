
import { ItemCount, BackBtn } from '../../components'
import './styles.css'

const ItemDetail = ({ product }) => {

    return (
        <>
            <div className='detail__container'>
                <div className="card">
                    <div className="card__more">
                        <p style={{margin:0, letterSpacing:'1px'}}>+ detalles</p>
                    </div>
                    <img className="card__img" src={product?.img} alt="TEST" />
                    <h4 className="card__name">{product?.name}</h4>
                    <div className="card__detail--container">
                        <p className="card__detail">{product?.detail}</p>
                    </div>
                    <div className="card__price--container">
                        <p className="card__price">${product?.price}</p>
                    </div>
                    <div className="card__stock--container">
                        <p className="card__stock">{product?.stock} in stock</p>
                    </div>
                </div>
                <ItemCount />
                <BackBtn />
            </div>
        </>
    )
}

export default ItemDetail
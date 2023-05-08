import { Link } from 'react-router-dom'
import { minusImg, binImg } from '../../assets/icons'
import './styles.css'

const ItemResume = ({product}) => {
    return (
        <Link to={`/categories/${product?.category}/product/detail/${product?.id}`} style={{textDecoration: 'none'}}>
        <span className='itemResume__container' key={product?.id+1}>
            <img className='itemResume__img' src={product?.img} alt='IMG_HERE'></img>
            <span className='itemResume__subContainer'>
                <h4>{product?.name}</h4>
                <span className='itemResume__options--container'>
                    <img className="itemResume__product--minus" src={minusImg} alt="minus" />
                    <input className='itemResume__quantity' type='text' disabled value={product?.quantity} />
                    <img className="itemResume__product--delete" src={binImg} alt="plus" /> 
                </span>
                <h4>$ {product?.price}</h4>
            </span>
        </span>
        </Link>
    )
}

export default ItemResume
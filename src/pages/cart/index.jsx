import { Link } from 'react-router-dom';
import { MainBtn } from '../../components';
import './styles.css'

const Cart = () => {
    return (
        <>
            <div className='cart__container'>
                <h3>CARRITO</h3>
                <Link to={'/'}><MainBtn text={'Home'} /></Link>
            </div>
        </>
    )
}

export default Cart
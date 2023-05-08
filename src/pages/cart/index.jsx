import { useCartContext } from '../../hooks';
import { SectionTitle, MainBtn, ItemResume, Form } from '../../components';
import { binBig, confirmImg } from '../../assets/icons'
import "./styles.css"

const Cart = () => {
    
    const { cartProducts, cartErase, cartConfirm, totalPrice } = useCartContext()
    
    return (
            <div className='cart--container'>
                <div className='cart__title--container'>
                    <h1 className='cart__title' >Carrito</h1>
                </div>
                {!cartProducts.length ? (
                    <h1 className='cart__empty'>No ha agregado productos aún</h1>
                    )   :   (
                        <>
                        <div className='cart__list--container'>
                            {cartProducts.map(product => (
                            <ItemResume product={product} key={product.id+1} />     
                            ))}
                        </div>
                        <div className='cart__total--container'>
                            <h2>Productos: {cartProducts.length}</h2>
                            <h2>Total: $ {totalPrice()}</h2>
                        </div>
                            <div className='cart__options--container'>
                                <div className='cart__confirm--container'>    
                                    <p>Confirmar compra</p>
                                    <img onClick={cartConfirm} className='cart__confirm' src={confirmImg} alt='confirm cart' />
                                </div>
                                <div className='cart__erase--container'>
                                    <p>Eliminar compra</p>
                                    <img onClick={cartErase} className='cart__erase' src={binBig} alt='erase cart' />
                                </div>
                            </div>
                        </>
                    )
                }
                <div className='navigate__options--container'>
                    <MainBtn text='Home'/>
                    <MainBtn type={'back'} text='Volver' />
                </div>
            </div>
        )
    }

export default Cart
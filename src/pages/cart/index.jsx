import { useCartContext } from '../../hooks';
import { SectionTitle, MainBtn, ItemResume, Form } from '../../components';
import { binBig, confirmImg } from '../../assets/icons'
import "./styles.css"

const Cart = () => {
    
    const { cartProducts, cartTotalProducts, cartEraseAll, cartConfirm, cartTotalPrice } = useCartContext()
    
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
                            <ItemResume product={product} key={product.id} />     
                            ))}
                        </div>
                        <div className='cart__total--container'>
                            <h2>Productos: {cartTotalProducts()}</h2>
                            <h2>Total: $ {cartTotalPrice()}</h2>
                        </div>
                            <div className='cart__options--container'>
                                <div className='cart__erase--container'>
                                    <img onClick={cartEraseAll} className='cart__erase' src={binBig} alt='erase cart' />
                                    <p>Eliminar compra</p>
                                </div>
                                <div className='cart__confirm--container'>    
                                    <img onClick={cartConfirm} className='cart__confirm' src={confirmImg} alt='confirm cart' />
                                    <p>Confirmar compra</p>
                                </div>
                            </div>
                        </>
                    )
                }
                <div className='navigate__options--container'>
                    <MainBtn type='default' text='Ver productos' />
                    <MainBtn type='back' text='Volver' />
                </div>
            </div>
        )
    }

export default Cart
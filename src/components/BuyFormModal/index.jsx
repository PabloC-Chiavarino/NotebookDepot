import './styles.css'

const BuyFormModal = ({show, handleOnClick}) => {
    return (
        <div className='buyformModal__container'
             style={{transform: show ? 'translateY(0)' : 'translateY(90%)'}}
             >
            <div onClick={handleOnClick} 
                 className='buyFormModal__sliderDown'
                 style={{transform: show ? 'rotate(0deg)' : 'rotate(180deg)'}}
                 >▼</div>
            <h6 className='buyForm__title'>Formulario de envío</h6>

            <form className='buyForm' action='submit' name="customer's info" method="post">
                <div className='buyForm__grid'>
                    <span>
                        <label>Nombre</label>
                        <input className='' type="text" name="name" placeholder="John" required />
                        
                        <label>Apellido</label>
                        <input className='' type="text" name="last-name" placeholder="Wick" required />
                        
                        <label>Teléfono de contacto</label>
                        <input className='' name="phone" placeholder="01144444444" required />
                    </span>
                    <span>
                        <label>Dirección de envío</label>
                        <input className='' name="address" placeholder="a donde te lo enviamos?" required />

                        <label>Dirección de email</label>
                        <input className='' type="email" name="email" placeholder="johnwick@.." required />
                        
                        <label>Confirmar dirección de email</label>
                        <input className='' type="email" name="email" placeholder="johnwick@.." required />
                    </span>
                    <div className='buyForm__submit--container'>
                        <button className='buyForm__submit' type="submit">Finalizar compra</button> 
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BuyFormModal
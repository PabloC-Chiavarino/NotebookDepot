import React from 'react';
import './styles.css';
import minusImg2 from '../../assets/icons/minus2.png';
import trashImg from '../../assets/icons/bin.png';

const Modal = ({show}) => {
    return (
        <div className="modal__container" style={{transform: show ? 'translateY(0)' : 'translateY(-100%)'}}>
            <h3 className="modal__title">Carrito</h3>
            <div className="modal__product--container">
                <img className="modal__product--img" src='' alt="" />
                <h5>Product title</h5>
                <div className="modal__product--details">
                    <input className="modal__product--quantity" type="text" />
                    <img className="modal__product--minus" src={minusImg2} alt="" />
                    <img className="modal__product--delete" src={trashImg} alt="" />
                </div>
                <h5>Price:</h5>
            </div>
            <h4 className="modal__totalPrice" >Total Price:</h4>
            <div className="modal__primaryBtns--container">
                <button className="modal__primaryBtns">Ir a compra</button>
                <button className="modal__primaryBtns">Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Modal;

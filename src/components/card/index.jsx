import React from "react";
import './styles.css';
import minusImg from '../../assets/icons/minus.png';
import plusImg from '../../assets/icons/plus.png';

const Card = ({ product }) => {
    const {category, id, name, img, detail, price, stock} = product || {};
    return (
        <div className="card__container">
            <img className="card__img" src={img} alt="" />
            <h4 className="card__name">{name}</h4>
            <p className="card__detail">{detail}</p>
            <p className="card__price">{price}</p>
            <div className="card__buttons--container">
                <button className="card__button">Añadir al Carrito</button>
                <img className="card__button--minus" src={minusImg} alt="-" />
                <input type="text" />
                <img className="card__button--plus" src={plusImg} alt="+" />
            </div>
            <p className="card__stock">{stock}</p>
        </div>
    )
}

export default Card;
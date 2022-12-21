import React from "react";
import './styles.css';
import minusImg from '../../assets/icons/minus.png';
import plusImg from '../../assets/icons/plus.png';

const Card = ({ product }) => {
    const {category, id, name, img, detail, price, stock} = product || {};
    return (
        <div className="card">
            <img className="card__img" src={img} alt="" />
            <h4 className="card__name">{name}</h4>
            <div className="card__detail">
                <p>{detail}</p>
            </div>
            <p className="card__price">{price}</p>
            <div className="card__buttons--container">
                <img className="card__button--minus" src={minusImg} alt="-" />
                <input type="text" />
                <img className="card__button--plus" src={plusImg} alt="+" />
            </div>
                <button className="card__button">Añadir al Carrito</button>
            <p className="card__stock">{stock}in stock</p>
        </div>
    )
}

export default Card;
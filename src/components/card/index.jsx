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
            <div className="card__detail--container">
                <p className="card__detail">{detail}</p>
            </div>
            <div className="card__price--container">
                <p className="card__price">$ {price}</p>
            </div>
            <div className="card__buttons--container">
                <div className="card__buttons--subContainer">
                    <img className="card__buttons--minus" src={minusImg} alt="-" />
                    <input className="card__input" type="text" readOnly="readonly" />
                    <img className="card__buttons--plus" src={plusImg} alt="+" />
                </div>
                <button className="card__buttons--add">Agregar al carrito</button>
            </div>
            <div className="card__stock--container">
                <p className="card__stock">{stock} in stock</p>
            </div>
        </div>

    )
}

export default Card;
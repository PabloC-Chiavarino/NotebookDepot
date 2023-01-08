import React from "react";
import './styles.css'
import cartImg from '../../assets/icons/shopping-cart.png'

const NavBar = ({onCartClick}) => {
    return (
        <nav className="navBar">
            <div className="logo__container">
                <h4 className="logo__title">Notebook</h4>
                <p className="logo__subtitle">depot.</p>
            </div>
            <ul className="categories__list">
                <li className="categories">Hogar</li>
                <li className="categories">Diseño y desarrollo</li>
                <li className="categories">Gaming</li>
            </ul>
            <div onClick={onCartClick} className="cartContainer">
                <div className="cartContainer__count">0</div>
                <img className="cartContainer__img" src={cartImg} alt="" />
            </div>
        </nav>
    )
}

export default NavBar;

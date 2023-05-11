import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { OpacityDiv, CartWidget, Slider } from "../../components";
import "./styles.css";

const NavBar = () => {
  const [ shownState, setShownState ] = useState(false)
  const handleState = () => setShownState(!shownState)
  
  return (
    <>
      <nav className="navBar">
        <Link to={'./'} className="categories">
          <div className="logo__container">
            <h4 className="logo__title">Notebook</h4>
            <p className="logo__subtitle">depot</p>
          </div>
        </Link>
        <div className="menu__container">
          <ul className="categories__list">
            <NavLink to={'/categories/family'} className="categories"><li>Hogar</li></NavLink>
            <NavLink to={'/categories/professional'} className="categories"><li>Diseño y desarrollo</li></NavLink>
            <NavLink to={'/categories/gaming'} className="categories"><li>Gaming</li></NavLink>
          </ul>
          <CartWidget handleOnClick={handleState} />
          <Slider show={shownState} onClose={handleState}/>
        </div>
      </nav>
      <OpacityDiv show={shownState} handleOnClick={handleState} />
    </>
  )
}

export default NavBar;

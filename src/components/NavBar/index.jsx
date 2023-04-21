import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../../components";
import "./styles.css";

const NavBar = () => {
  return (
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
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar;


import { Link } from "react-router-dom";
import "./styles.css";

const Item = ({ product }) => {
    
    const { id, name, img, detail, price, stock } = product;

    return (
        <Link to={`/product/detail/${id}`} style={{textDecoration: 'none'}}>
            <div className="card">
                <div className="card__more">
                    <p style={{margin:0, letterSpacing:'1px'}}>+ detalles</p>
                </div>
                <img className="card__img" src={img} alt="TEST" />
                <h4 className="card__name">{name}</h4>
                <div className="card__detail--container">
                    <p className="card__detail">{detail}</p>
                </div>
                <div className="card__price--container">
                    <p className="card__price">${price}</p>
                </div>
                <div className="card__stock--container">
                    <p className="card__stock">{stock} in stock</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;
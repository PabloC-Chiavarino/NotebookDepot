import { useCartContext } from '../../hooks'
import { cartImg } from "../../assets/icons/"
import "./styles.css"


const CartWidget = ({ handleOnClick }) => {
  
  const { cartProducts } = useCartContext()
  
  return (
    <>
      <div onClick={handleOnClick} className="cartContainer">
        <div 
        className="cartContainer__count" 
        style={{ display: cartProducts.length ? 'block' : 'none'}} 
        >
          {cartProducts.length}
        </div>
        <img className="cartContainer__img" src={cartImg} alt="" />
      </div>
    </>
  );
};

export default CartWidget;

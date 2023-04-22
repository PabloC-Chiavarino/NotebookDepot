import bagImg from "../../assets/icons/bag.png";
import "./styles.css";

const CartWidget = ({ handleOnClick }) => {

  return (
    <>
      <div onClick={handleOnClick} className="bagContainer">
        <div className="bagContainer__count">0</div>
        <img className="bagContainer__img" src={bagImg} alt="" />
      </div>
    </>
  );
};

export default CartWidget;

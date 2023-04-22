import { Link } from "react-router-dom";
import minusImg2 from "../../assets/icons/minus.png"
import trashImg from "../../assets/icons/bin.png"
import "./styles.css"

const Slider = ({ onSliderState, onClose }) => {

  return (
    <div
      className="slider__container"
      style={{ transform: onSliderState ? "translateX(0)" : "translateX(100%)" }}
    >
      <div onClick={onClose} className="slider__closeButton">X</div>
      <h3 className="slider__title">Productos</h3>
      <div className="slider__listContainer">
        <div className="slider__product--container">
          <img className="slider__product--img" src="" alt="IMG_HERE" />
          <div>
            <h4 className="slider__product--name">...titulo prod...</h4>
            <h6 className="slider__product--price">...precio...</h6>
            <h6 className="slider__product--quantity">Cant</h6>
          </div>
          <div className="slider__product--options">
            <img className="slider__product--minus" src={minusImg2} alt="" />
            <img className="slider__product--delete" src={trashImg} alt="" />
          </div>
        </div>
      </div>
      <h4 className="slider__totalPrice">Total:</h4>
      <div className="slider__mainBtn--container">
        <Link to={'/cart'} className="slider__mainBtn">Ir al carrito / Continuar</Link>
      </div>
    </div>
  );
};

export default Slider;

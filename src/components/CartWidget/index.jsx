import { useState } from "react";
import { Slider } from "../../components"
import bagImg from "../../assets/icons/bag.png";
import "./styles.css";

const CartWidget = () => {

  const [ itShow, setItShow ] = useState(false)
  const sliderShow = () => setItShow(!itShow)

  return (
    <>
      <div onClick={sliderShow} className="bagContainer">
        <div className="bagContainer__count">0</div>
        <img className="bagContainer__img" src={bagImg} alt="" />
      </div>
      <Slider show={itShow} onClose={sliderShow}/>
    </>
  );
};

export default CartWidget;

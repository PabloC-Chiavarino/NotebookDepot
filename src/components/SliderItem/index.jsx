import { minusImg, binImg } from '../../assets/icons'
import './styles.css'

const SliderItem = ({product}) => {

    const { img, name, price, quantity } = product

    return (
        <div className="slider__product--container">
            <img className="slider__product--img" src={img} alt="IMG_HERE" />
            <div>
                <h4 className="slider__product--name">{name}</h4>
                <h6 className="slider__product--price">Precio: $ {price}</h6>
                <h6 className="slider__product--quantity">Cant: {quantity}</h6>
            </div>
            <div className="slider__product--options">
                <img className="slider__product--minus" src={minusImg} alt="" />
                <img className="slider__product--delete" src={binImg} alt="" />
            </div>
        </div>
    )
}

export default SliderItem
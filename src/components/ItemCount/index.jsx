import { useState } from 'react'
import { Link } from 'react-router-dom';
import { MainBtn } from '../../components';
import minusImg from '../../assets/icons/minus.png'
import plusImg from '../../assets/icons/plus.png'
import "./styles.css";

const ItemCount = () => {
  const [ count, setCount ] = useState(0)
  
  const itemAdd = (provName) => {
    setCount(count + 1)
  }

  const itemSubtract = (provName) => {
    setCount(count - 1)
  }

  return (
    <div className="card__buttons--container">
      <div className="card__buttons--subContainer">
        <img className="card__buttons--minus" src={minusImg} alt="-" onClick={itemSubtract} />
        <input className="card__input" type="text" readOnly="readonly" />
        <img className="card__buttons--plus" src={plusImg} alt="+" onClick={itemAdd} />
      </div>
      <MainBtn text={'Agregar producto'} />
    </div>
  )
};

export default ItemCount
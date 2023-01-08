import React, { useState, useEffect} from 'react'
import NavBar from './components/navbar/index';
import Modal from './components/modal/index'
import Card from './components/card/index';
import './App.css';
import './index.css'


function App() {

  const [availableStock, setAvailableStock] = useState([])
  const [itShow, setItShow] = useState(false)

  useEffect(() =>{
    fetch('https://demo3207203.mockable.io/products')
      .then(response => response.json())
        .then(parsedData => setAvailableStock(parsedData))
  }, [])
  
  const cartShow = () => {
    setItShow(!itShow)
  }

  return (
    <div className="App">
      <header>
        <NavBar onCartClick={cartShow} />
        <Modal show={itShow}/>
      </header>
        <section className='products__container'>
          {availableStock.map((productData) => 
            <Card product={productData} key={productData.id} />
          )}
        </section>
    </div>
  );
}

export default App;

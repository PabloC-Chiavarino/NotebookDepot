import { PRODUCTS } from './constants/data/products';
import NavBar from './components/navbar/index';
import Card from './components/card/index';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <section className='products__container'>
          {PRODUCTS.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </section>
    </div>
  );
}

export default App;

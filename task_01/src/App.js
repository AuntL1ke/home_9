import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Cart
        </p>
      </header>

      <div className="products">
        <Product img="https://content.rozetka.com.ua/goods/images/big/24689398.jpg" name="Миша Bloody P91s USB Black" price="949₴"/>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const products = {
    name : "Galaxy M 13 ",
    price : 13000,
    battary: '5000 Mah'
  }
  return (
    <div className="App">
      <button onClick={()=> dispatch(addToCart(products))}>Add to  Cart </button>
    </div>
  );
}

export default App;

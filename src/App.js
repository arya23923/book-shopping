import './App.css';
import Landing from './components/Landing'
import Homepage from './components/Homepage';
import Product from './components/Products';
import CartItem from './components/CartItem'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

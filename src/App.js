import './App.css';
import Landing from './components/LandingPage'
import Homepage from './components/Homepage';
import Product from './components/Products';
import CartItem from './components/CartItem'
import UnderConstruction from './components/UnderConstruction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<CartItem />} />
        <Route path='/construction' element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

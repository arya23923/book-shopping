import './App.css';
import Landing from './components/Landing'
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

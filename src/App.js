import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Detail from './components/Pages/Detail';
import Category from './components/Pages/Category';
import CheckOut from './components/Pages/CheckOut';
import CartProvider from './Context/CartContext';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar /> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Item/:id" element={<Detail />}/>
            <Route path='Category/:categoryId' element={<Category />}/>
            <Route path="/cart" element={<CheckOut />}/>
          </Routes>
          <Footer />
        </BrowserRouter >
      </CartProvider>
      
    </div>
  );
}

export default App;
